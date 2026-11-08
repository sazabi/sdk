/**
 * The `reason` public-api answers, at 403 `FORBIDDEN`, when a valid
 * organization or project key calls an operation that only a signed-in
 * person may run: a coding-agent fix handoff and the dispatch commands that
 * steer it record who asked (ENG-11506). The key is neither expired nor
 * invalid, so the answer names the requirement instead of the uniform 401.
 * Kept out of the operation files so the CLI can import it without loading
 * their schemas.
 */
export declare const SIGNED_IN_PERSON_REQUIRED_REASON = "signed_in_person_required";
