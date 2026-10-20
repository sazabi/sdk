/**
 * The code public-api answers, at 403, when a request's agent execution proof
 * (`x-sazabi-query-execution`) is no longer valid: the sandbox command or MCP
 * call it was issued for has ended or expired, or it is forged or another
 * tenant's. Every such proof gets this one answer, so it says nothing about
 * which (ENG-9900). It is never NOT_FOUND, which a client reads as "not there
 * yet" and polls. Kept out of the operation files so the CLI can import it
 * without loading their schemas.
 */
export declare const EXECUTION_PROOF_EXPIRED_CODE = "EXECUTION_PROOF_EXPIRED";
