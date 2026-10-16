/**
 * The writes an unauthenticated OAuth callback may make on the strength of
 * its signed state alone (ENG-9086, Ed's ruling 2026-10-14). The vendor
 * redirects the browser to services/api's consolidated callback route; when
 * the vendor reports a denial or an error, the route runs before any session
 * check, and the only proof it holds is the `state` it signed when the flow
 * began. Each kind is exactly one owner operation, and lists the callback
 * surface its state must name, the input keys the operation may take, and the
 * output keys it may answer. The input never names a tenant: the owner acts
 * only on the organization and user the verified state names. An owner
 * refuses to bind an operation of this form whose input or output names any
 * other key. The list is closed.
 */
export declare const SIGNED_OAUTH_STATE_KINDS: {
    /**
     * An MCP connector install the vendor denied or failed: closes the
     * attempt's unclaimed pending request and fences its connection, as the
     * callback route's MCP outcome hook does today. Answers whether a request
     * was closed.
     */
    readonly mcp_attempt_failure: {
        readonly callbackSurface: "mcp";
        readonly inputKeys: readonly ["provider", "state", "outcome"];
        readonly outputKeys: readonly ["failed"];
    };
};
export type SignedOAuthStateKind = keyof typeof SIGNED_OAUTH_STATE_KINDS;
export declare const isSignedOAuthStateKind: (value: string) => value is SignedOAuthStateKind;
