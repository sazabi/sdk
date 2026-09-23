/**
 * The shared onboarding-navigation conformance table (ENG-7688).
 *
 * Exported data, not a test. The dashboard suite, the CLI suite, and this
 * package's own suite each run every row through their own driver, so the
 * three implementations of "where does this move land" cannot drift again.
 *
 * Why a table rather than only a shared function: the CLI already called the
 * shared `adjacentFlowEntry` and still diverged, because it hand-rolled
 * forward motion in its own control flow and only used the shared function
 * for Back. Sharing code did not catch that; asserting the landing does.
 *
 * **Card-keyed, never screen-keyed.** The public wire vocabulary still splits
 * the single sample-issue screen into `trigger-issue` and `confirm-issue`
 * (`packages/contracts/public-api/src/onboarding.ts`), and the two surfaces
 * render different numbers of screens per card. Card ids are the only
 * vocabulary both surfaces and the server agree on.
 *
 * ## The rule these rows encode
 *
 * **Stop when the user just acted; sweep on cold start.**
 *
 * - After `continue`, `back`, or `skip`: land on the immediate next eligible
 *   entry and present it, *even when it is already complete or skipped*. A
 *   completed entry renders its done state; a SKIPPED entry renders its
 *   actionable form, because a skip is a decision the user can still
 *   withdraw and saying yes is the only way to withdraw it (ENG-7688).
 *   Neither is invisible, and neither depends on arrival direction.
 * - On `enter` (first entry or resume): print completed entries as recap
 *   lines and stop at the first entry that needs the user.
 * - Entries pruned by a skipped dependency or a false applicability rule are
 *   stepped over in both cases, on both surfaces.
 *
 * ## Reading a row
 *
 * `ledger` is the whole world: which cards are done, which carry a recorded
 * skip, and whether the organization's billing step participates at all.
 * `enter` rows resolve over cards only — the project gate's satisfaction is
 * surface state (does a project exist?), not ledger state, so a cold start's
 * landing is always a card or `"finish"`.
 * `from` is where the user is, `action` is what they did, and `expect` is
 * where they end up.
 *
 * `stopsHere` says whether `expect` is an entry the walk presents and waits
 * at. A driver must prove the walk *stopped* there — the CLI driver checks
 * which card it prompted for, not merely what an adjacency function
 * returned. That distinction is the whole bug: the CLI's adjacency was
 * already right and its control flow swept past the answer. It is
 * `false` only for the two terminal positions — `"finish"` (forward motion
 * ran off the end of the tour) and `null` (backward motion is already at the
 * first entry, so nothing moves). Every other row is `true`, including the
 * rows whose landing is already done or skipped: those are precisely the
 * assertions the CLI failed before this table existed.
 */
import type { TaskKey } from "./index.js";
/** A position in the walk: a card, the project gate, or the tour's end. */
export type NavigationPosition = TaskKey | "create-project" | "finish";
/** What the user did. `"enter"` is a cold start or a resume, not a move. */
export type NavigationAction = "continue" | "back" | "skip" | "enter";
/** The facts a landing is derived from. Nothing here is a stored cursor. */
export type NavigationLedger = {
    readonly done: readonly TaskKey[];
    readonly skipped: readonly TaskKey[];
    /**
     * Whether the organization's billing step participates. `false` prunes
     * `set_up_billing` from the walk entirely (the `billing-step-enabled`
     * applicability rule), exactly as a skipped dependency prunes a dependent.
     */
    readonly billingStepEnabled: boolean;
};
export type NavigationScenario = {
    readonly name: string;
    readonly ledger: NavigationLedger;
    /** Ignored for `"enter"`, which always starts from the top of the tour. */
    readonly from: NavigationPosition;
    readonly action: NavigationAction;
    /** `null` means the move is refused: the walk is already at the edge. */
    readonly expect: NavigationPosition | null;
    readonly stopsHere: boolean;
};
/**
 * The flow order these rows are written against, for readers:
 *
 * ```
 * set_up_billing → create-project → connect_github_account →
 * install_github_app → configure_code_search → install_slack_app →
 * configure_slack_alerts → trigger_sample_issue → finish
 * ```
 *
 * Dependencies: `configure_code_search` needs either GitHub grant,
 * `configure_slack_alerts` needs the Slack install.
 */
export declare const NAVIGATION_SCENARIOS: readonly NavigationScenario[];
