import type { AnyContractRouter, ContractRouterClient } from "@orpc/contract";
import { type PreviewVariantRegistry } from "./preview-variant-registry.js";
export interface ContractClientOptions {
    baseUrl: string;
    headers?: () => Record<string, string> | Promise<Record<string, string>>;
    fetch?: typeof globalThis.fetch;
    /**
     * This client's own target service name, in the preview naming
     * contract's vocabulary (e.g. `"auth"`, `"durable-agent"`) — the `<svc>`
     * token in `<svc>-pr<n>.preview.development.sazabi.dev` (ENG-7247).
     *
     * Optional and opt-in. Omit it for a client whose target service is
     * never deployed as a preview variant (Exec, Chatterbox, LLM Config —
     * none are in the design doc's previewable service set): every request
     * from that client is then a byte-identical passthrough to today's
     * behavior, with zero lookup and zero URL rewriting, because there is
     * nothing for a preview id to ever mean for that target.
     *
     * When set, an outgoing request checks (via `previewVariantRegistry`,
     * cached) whether the ambient preview id (if any) has a live variant for
     * this service, and targets that variant's hostname instead of
     * `baseUrl`'s when it does. The check only ever fires for a request
     * already headed at `baseUrl`'s own hostname — a client built for
     * staging, production, or a customer-hosted URL can never have its
     * traffic redirected to a development preview host, regardless of
     * preview-id state (see `resolvePreviewFetchTarget`'s doc comment).
     */
    serviceName?: string;
    /**
     * Override the live-variant-set lookup, e.g. to inject a fixture in
     * tests. Defaults to the shared, TTL-cached registry — see
     * `preview-variant-registry.ts` for why its default backend is
     * currently a documented stub.
     */
    previewVariantRegistry?: PreviewVariantRegistry;
}
/**
 * Merges the caller-supplied headers with the ambient preview-id (ENG-7201)
 * bound via `@sazabi/preview-context`'s AsyncLocalStorage store, when one is
 * set. Every oRPC contract client gets this automatically — no per-client
 * change needed to thread a preview-id through. A request with no bound
 * preview-id sends no preview header at all (never an empty-string value,
 * which a future consumer could misread as "previewed with the empty
 * string").
 */
export declare const buildOutgoingHeaders: (options: ContractClientOptions) => (() => Promise<Record<string, string>>);
/**
 * Resolves which hostname an outgoing request should actually target,
 * given this client's `serviceName` (if any), the hostname this client
 * was actually configured for (`expectedHostname`, derived from its own
 * `baseUrl`), and the ambient preview id (if any). Four "don't rewrite"
 * states are distinct, not one collapsed boolean, even though they
 * currently all resolve to the same fallback — the request unchanged
 * (ENG-7247 pre-push rule: model unknown explicitly):
 *
 *   1. No `serviceName` configured — this client's target is never
 *      previewable; not even a preview-id check runs.
 *   2. The request isn't already headed at this client's own configured
 *      origin (`expectedHostname` unparseable, or it doesn't match the
 *      request's current hostname) — never rewrite a request this client
 *      wasn't going to send to its own target in the first place. This is
 *      the scoping gate: without it, an active preview id in-process would
 *      redirect *any* outgoing call — staging, production, a
 *      customer-hosted URL — to a development preview hostname. Checked
 *      before the preview-id/registry state below, so a client built for
 *      a non-development `baseUrl` can structurally never trigger a
 *      lookup, let alone a rewrite.
 *   3. No active preview id — the common case for every non-preview
 *      request; zero registry lookups.
 *   4. A preview id is active but the registry says this service has no
 *      live variant (including "not yet resolved" — a rejected lookup is
 *      treated the same as "resolved, not present," never surfaced as an
 *      error on the outgoing call) — reach development's own host.
 *
 * Only when the request already targets this client's own origin AND a
 * preview id is active AND the registry affirmatively lists `serviceName`
 * as having a live variant does this rewrite the target. There is
 * deliberately no fallback-on-network-error path once a variant hostname
 * is chosen: a request to a torn-down or broken variant fails as itself,
 * never silently retried against development (see the design doc's
 * Alternative 2 and the "silent-fallback risk" discussion).
 */
export declare const resolvePreviewFetchTarget: (input: Parameters<typeof fetch>[0], serviceName: string, registry: PreviewVariantRegistry, expectedHostname: string | undefined) => Promise<Parameters<typeof fetch>[0]>;
/**
 * Wraps `baseFetch` so every outgoing request is checked against the live
 * preview-variant set before it goes out, when `serviceName` is set.
 * Returns `baseFetch` completely unwrapped when it isn't — see
 * `ContractClientOptions.serviceName`'s doc comment for why that matters:
 * a client that never opts in gets the exact same function reference it
 * got before this change, not a passthrough wrapper around it.
 */
export declare const buildPreviewAwareFetch: (options: ContractClientOptions) => typeof globalThis.fetch | undefined;
export declare const createContractClient: <TContract extends AnyContractRouter>(contract: TContract, options: ContractClientOptions) => ContractRouterClient<TContract>;
