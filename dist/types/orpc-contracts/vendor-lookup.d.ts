/**
 * The vendor ids a background job may resolve to their tenant before it knows
 * the organization (ENG-9566, Ed's ruling 2026-10-11, §36 D3), each with the
 * output keys a lookup of that kind may answer. Tenant identifiers only:
 * which organization (and project, where one applies), and the id of the
 * record that matched, so the caller can continue under a tenant-scoped
 * principal. Never a record's contents, and never a secret or credential: a
 * webhook verification answers which webhook and tenant it is, and its signing
 * secret is read afterwards, organization-scoped, through the encrypted-config
 * path. An owner refuses to bind a lookup whose output names any other key.
 */
export declare const VENDOR_LOOKUP_OUTPUT_KEYS: {
    /** A Slack workspace (team id) to its organization and connection. */
    readonly slack_team: readonly ["organizationId", "connectionId"];
    /** A Microsoft Teams tenant to its organization and connection. */
    readonly microsoft_teams_tenant: readonly ["organizationId", "connectionId"];
    /** A GitHub App installation to its organization and connection. */
    readonly github_installation: readonly ["organizationId", "connectionId"];
    /** A webhook delivery to the webhook it is for, and its tenant. */
    readonly webhook_verification: readonly ["organizationId", "projectId", "webhookId"];
    /** A vendor identity to the Sazabi user it belongs to, and organization. */
    readonly external_identity: readonly ["organizationId", "userId"];
};
export type VendorLookupKind = keyof typeof VENDOR_LOOKUP_OUTPUT_KEYS;
export declare const isVendorLookupKind: (value: string) => value is VendorLookupKind;
