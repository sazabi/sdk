/**
 * Live registry of which services currently have an active preview variant
 * for a given preview id (ENG-7247, the client-side half of
 * `docs/design/infrastructure/pr-preview-environments/design.md`'s
 * "Routing by per-variant hostname" decision).
 *
 * The design intentionally routes HTTP calls by hostname, not by header: a
 * caller must know whether its *target* has a variant before it can decide
 * which hostname to call. That membership test is the one thing a caller
 * cannot derive locally — it depends on which services a PR actually
 * changed and whether that PR's variants are still up, which only the
 * cluster (via the preview ApplicationSet's rendered Applications) knows.
 *
 * Where this registry's data actually comes from is an open question in
 * the design doc's own words: "a small read endpoint backed by
 * ArgoCD/Application state, or something Exec already exposes? Needs a
 * concrete owner before PR 6." At the time this module was written, Exec's
 * deployment-status operations (`packages/contracts/exec/src/deployments.ts`)
 * model per-environment, per-unit deployment state — nothing that lists the
 * ephemeral, per-`(PR, changed service)` Applications a preview variant
 * renders as. Building a new backend endpoint for this is out of scope for
 * this ticket (see ENG-7247): the interface below is the seam a real
 * backend plugs into once PR 5 (the preview-variant chart and
 * ApplicationSet) exists and someone owns exposing its state. Until then,
 * `unresolvedPreviewVariantRegistry` is the shipped implementation — it
 * always reports "no known variants," which is exactly the fail-open state
 * `createContractClient` needs: every call resolves to development's own
 * hostname, never a variant, until a real backend lands.
 */
/** One backend's view of which services have a live variant for a preview id. */
export interface PreviewVariantRegistry {
    /**
     * Resolves the set of service names with an active preview variant for
     * `previewId`. Callers should not call this per outgoing request — wrap
     * it with `createCachedPreviewVariantRegistry` (or otherwise cache it)
     * so the live lookup happens at most once per short TTL.
     */
    getActivePreviewVariants(previewId: string): Promise<Set<string>>;
}
/**
 * Intentional stub pending the registry's real backend (see the module
 * doc comment above and the design doc's Open Questions). Always resolves
 * to an empty set — "no variants known for this preview id" — so every
 * `createContractClient` hostname decision falls back to development's own
 * URL unconditionally, never a variant, until a real implementation is
 * wired in behind this same interface.
 */
export declare const unresolvedPreviewVariantRegistry: PreviewVariantRegistry;
export interface CachedPreviewVariantRegistryOptions {
    /** How long a resolved (or in-flight) lookup stays fresh. Default 30s. */
    ttlMs?: number;
    /** Injectable clock for tests. Defaults to `Date.now`. */
    now?: () => number;
    /**
     * Hard cap on distinct preview ids tracked at once. Default 200 — this
     * cache is meant to hold "PRs currently being previewed," not arbitrary
     * cardinality. The cap matters because `previewId` is attacker-reachable:
     * it comes straight from the inbound `x-sazabi-preview-id` header,
     * `parsePreviewIdHeader` only trims it (never validates its shape or
     * checks it against anything real), and it is bound before
     * authentication. Without a cap, an unauthenticated caller could send an
     * unbounded stream of unique header values and grow this process-wide
     * `Map` forever.
     */
    maxEntries?: number;
}
/**
 * Wraps a backend registry with a per-preview-id cache so the live lookup
 * happens at most once per TTL window, never per outgoing call — the
 * acceptance requirement this ticket exists to satisfy. A cache entry
 * holds the in-flight `Promise`, not just its resolved value, so
 * concurrent callers within one TTL window share a single backend call
 * instead of racing separate ones.
 *
 * Bounded two ways, both required — TTL alone does not bound memory,
 * since an expired entry was previously reclaimed only when its own key
 * was queried again, never proactively:
 *
 *   1. **Swept on every call**: before doing anything else,
 *      `getActivePreviewVariants` deletes every entry whose TTL has
 *      already elapsed, not just the entry for the key it was called
 *      with.
 *   2. **Hard-capped at `maxEntries`**: if the cache is still at capacity
 *      after sweeping, the entry soonest to expire is evicted to make
 *      room — an approximation of LRU that costs no extra bookkeeping,
 *      since "soonest to expire" is exactly "oldest inserted" whenever
 *      entries share one TTL.
 *
 * A failed lookup is evicted immediately rather than cached as "no
 * variants" for the full TTL — the next call gets a fresh attempt — but
 * the failure itself never reaches `createContractClient`'s hot path
 * directly; see `resolvePreviewFetchTarget` in `create-contract-client.ts`,
 * which treats a rejected registry call the same as "not yet resolved":
 * use development's own hostname, no throw into the outgoing request.
 */
export declare const createCachedPreviewVariantRegistry: (backend: PreviewVariantRegistry, options?: CachedPreviewVariantRegistryOptions) => PreviewVariantRegistry;
/**
 * The default registry every `createContractClient` caller gets when it
 * doesn't inject its own — the stub backend, cached. Swapping in a real
 * backend later is a one-line change to this call, with no change needed
 * at any `createContractClient` call site.
 */
export declare const defaultPreviewVariantRegistry: PreviewVariantRegistry;
