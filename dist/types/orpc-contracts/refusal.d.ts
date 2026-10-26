import { z } from "zod";
/**
 * One problem with an operation's input, at a path into that input.
 */
export type ValidationIssue = {
    path: readonly (string | number)[];
    message: string;
};
/** Every tRPC v11 error code (`TRPC_ERROR_CODE_KEY`), as data. */
export declare const TRPC_ERROR_CODES: readonly ["PARSE_ERROR", "BAD_REQUEST", "INTERNAL_SERVER_ERROR", "NOT_IMPLEMENTED", "BAD_GATEWAY", "SERVICE_UNAVAILABLE", "GATEWAY_TIMEOUT", "UNAUTHORIZED", "PAYMENT_REQUIRED", "FORBIDDEN", "NOT_FOUND", "METHOD_NOT_SUPPORTED", "TIMEOUT", "CONFLICT", "PRECONDITION_FAILED", "PAYLOAD_TOO_LARGE", "UNSUPPORTED_MEDIA_TYPE", "UNPROCESSABLE_CONTENT", "PRECONDITION_REQUIRED", "TOO_MANY_REQUESTS", "CLIENT_CLOSED_REQUEST"];
export type TrpcErrorCode = (typeof TRPC_ERROR_CODES)[number];
/** The dashboard API's answer to a refusal, exactly as it answers today. */
export type DashboardRefusalAnswer = {
    code: TrpcErrorCode;
    message?: string;
    /** Surfaced as the error's `data.detail`; absent, it has none. */
    detail?: Record<string, unknown>;
    /**
     * A plan entitlement denial, surfaced as the error's `data.entitlement`
     * exactly as the dashboard's routers surface one today (a PAYMENT_REQUIRED
     * whose cause is the denial; the dashboard's error formatter admits only
     * its own allowlisted denial shape). Absent, it has none.
     */
    entitlement?: Record<string, unknown>;
};
/** The public API's answer to a refusal, exactly as it answers today. */
export type PublicApiRefusalAnswer = {
    status: number;
    code: string;
    message?: string;
    /** The error's `data`; absent, it has none. */
    data?: Record<string, unknown>;
};
/**
 * The admin API's answer to a refusal, exactly as it answers today: the
 * status, oRPC code and message its own router answered with before the
 * route forwarded to the owner.
 */
export type AdminRefusalAnswer = {
    status: number;
    code: string;
    message?: string;
    /** The error's `data`; absent, it has none. */
    data?: Record<string, unknown>;
};
/**
 * Each front door's exact answer to a refusal, where today's answer is one
 * its table can't express: a code or status outside the table, a message, or
 * a `data` shape of its own (ENG-9255). Keyed by the front door, as
 * `@sazabi/service-http`'s `ForwardedSurface` names it. A front door with no
 * answer here uses its table. The front doors render an answer verbatim and
 * never translate per operation; the owner, which keeps each surface's
 * behavior, writes it. Answers that differ by surface are compatibility
 * shims, removed under ENG-9260.
 */
export type RefusalAnswers = {
    dashboard?: DashboardRefusalAnswer;
    public_api?: PublicApiRefusalAnswer;
    admin?: AdminRefusalAnswer;
};
/**
 * The closed set of answers a domain owner gives instead of a result
 * (docs/design/infrastructure/domain-owning-services, "One refusal
 * vocabulary"). Each front door maps a refusal through one table:
 * {@link REFUSAL_TRPC_CODES} for the dashboard API,
 * {@link REFUSAL_PUBLIC_API_ERRORS} for the public API, and
 * {@link REFUSAL_ADMIN_API_ERRORS} for the admin API, unless the refusal
 * carries that front door's own answer in `answers`. `permission` is a
 * `@sazabi/auth` permission name; a contract cannot import that package, so it
 * travels as a string.
 */
export type Refusal = ({
    kind: "not_found";
} | {
    kind: "forbidden";
    permission: string;
} | {
    kind: "entitlement_denied";
    entitlement: string;
} | {
    kind: "conflict";
    code: string;
    detail: Record<string, string | string[]>;
} | {
    kind: "invalid";
    issues: readonly ValidationIssue[];
} | {
    kind: "unavailable";
    dependency: string;
    /**
     * How long the caller should wait before trying again, when the owner
     * knows (ENG-9422: an outage answers with a 5-second delay). Optional
     * and additive: a reader that predates it ignores it.
     */
    retryAfterSeconds?: number;
}) & {
    answers?: RefusalAnswers;
};
export type RefusalKind = Refusal["kind"];
/** Parses a refusal read off the wire; the owner is the only writer. */
export declare const refusalSchema: z.ZodType<Refusal>;
/**
 * The dashboard API's table: the tRPC error code each refusal answers with.
 * Every code is a tRPC v11 `TRPC_ERROR_CODE_KEY`.
 */
export declare const REFUSAL_TRPC_CODES: {
    readonly not_found: "NOT_FOUND";
    readonly forbidden: "FORBIDDEN";
    readonly entitlement_denied: "PAYMENT_REQUIRED";
    readonly conflict: "CONFLICT";
    readonly invalid: "BAD_REQUEST";
    readonly unavailable: "SERVICE_UNAVAILABLE";
};
/**
 * The public API's table: the HTTP status and error code each refusal answers
 * with. An owner answers on the wire with this table too, so the public API
 * passes a refusal through unchanged. `ENTITLEMENT_DENIED` is ENG-8007's 402.
 */
export declare const REFUSAL_PUBLIC_API_ERRORS: {
    readonly not_found: {
        readonly status: 404;
        readonly code: "NOT_FOUND";
    };
    readonly forbidden: {
        readonly status: 403;
        readonly code: "FORBIDDEN";
    };
    readonly entitlement_denied: {
        readonly status: 402;
        readonly code: "ENTITLEMENT_DENIED";
    };
    readonly conflict: {
        readonly status: 409;
        readonly code: "CONFLICT";
    };
    readonly invalid: {
        readonly status: 400;
        readonly code: "BAD_REQUEST";
    };
    readonly unavailable: {
        readonly status: 503;
        readonly code: "SERVICE_UNAVAILABLE";
    };
};
/**
 * The admin API's table: the HTTP status and oRPC error code each refusal
 * answers with, in the admin API's own vocabulary. An operator is not the
 * payer, so `entitlement_denied` is the 412 the admin API already answers when
 * an organization's state does not allow an action.
 */
export declare const REFUSAL_ADMIN_API_ERRORS: {
    readonly not_found: {
        readonly status: 404;
        readonly code: "NOT_FOUND";
    };
    readonly forbidden: {
        readonly status: 403;
        readonly code: "FORBIDDEN";
    };
    readonly entitlement_denied: {
        readonly status: 412;
        readonly code: "PRECONDITION_FAILED";
    };
    readonly conflict: {
        readonly status: 409;
        readonly code: "CONFLICT";
    };
    readonly invalid: {
        readonly status: 400;
        readonly code: "BAD_REQUEST";
    };
    readonly unavailable: {
        readonly status: 503;
        readonly code: "SERVICE_UNAVAILABLE";
    };
};
/**
 * The refusal an owner answered with, read from the error its typed client
 * threw, or null when the error is not a refusal (a transport failure, an
 * unauthenticated call, or a fault). The error's code must match the table, so
 * a stray `data` payload is never read as a refusal.
 */
export declare const readRefusal: (error: unknown) => Refusal | null;
