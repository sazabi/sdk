/**
 * The reads an anonymous caller may make (Ed's ruling 2026-10-15,
 * "FRONT-DOOR PLACEMENT BATCH" (1)): a front-door route that answers anyone
 * today forwards an `anonymous` principal to its owner, and the owner answers
 * from registry-global data only, never a tenant's. Each kind is exactly one
 * owner operation, and lists the surface that forwards it, the input keys the
 * operation may take, and its output: each output key names a list of rows
 * and the only keys a row may carry. The input never names a tenant. An owner
 * refuses to bind an operation of this form whose input, output or rows name
 * any other key, or whose rows would pass unknown keys through. The list is
 * closed; a new public read is a new kind here, recorded with its ruling.
 */
export declare const PUBLIC_READ_KINDS: {
    /**
     * The selectable intake regions, as services/api's `GET /api/regions`
     * answers them today: optionally filtered by status, each region's codes,
     * status and display label, never its endpoints.
     */
    readonly intake_regions: {
        readonly surface: "dashboard";
        readonly inputKeys: readonly ["status"];
        readonly outputKeys: {
            readonly regions: readonly ["regionCode", "shortCode", "status", "displayLabel"];
        };
    };
    /**
     * The feature flags that are on for an anonymous caller, as the public
     * API's unauthenticated `resolvePublic` answers them today (Ed 2026-10-20,
     * "oh. do it for now."): the catalog's public flags, as a list of rows that
     * each carry the flag's key; a flag that is off is omitted. The input names
     * nothing. Forwarded from services/public-api only. This amends the
     * 2026-10-15 ruling that no-login reads belong to services/api for this one
     * read, and it is revisitable; it does not open no-login reads on the
     * public API in general.
     */
    readonly public_feature_flags: {
        readonly surface: "public_api";
        readonly inputKeys: readonly [];
        readonly outputKeys: {
            readonly flags: readonly ["key"];
        };
    };
};
export type PublicReadKind = keyof typeof PUBLIC_READ_KINDS;
export declare const isPublicReadKind: (value: string) => value is PublicReadKind;
