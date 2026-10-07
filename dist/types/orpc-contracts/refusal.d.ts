import { z } from "zod";
/**
 * One problem with an operation's input, at a path into that input.
 */
export type ValidationIssue = {
    path: readonly (string | number)[];
    message: string;
};
/**
 * The closed set of answers a domain owner gives instead of a result
 * (docs/design/infrastructure/domain-owning-services, "One refusal
 * vocabulary"). Each front door maps a refusal through one table:
 * {@link REFUSAL_TRPC_CODES} for the dashboard API and
 * {@link REFUSAL_PUBLIC_API_ERRORS} for the public API. `permission` is a
 * `@sazabi/auth` permission name; a contract cannot import that package, so it
 * travels as a string.
 */
export type Refusal = {
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
 * The refusal an owner answered with, read from the error its typed client
 * threw, or null when the error is not a refusal (a transport failure, an
 * unauthenticated call, or a fault). The error's code must match the table, so
 * a stray `data` payload is never read as a refusal.
 */
export declare const readRefusal: (error: unknown) => Refusal | null;
