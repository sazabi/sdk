/**
 * The onboarding test issue — one exhibit, both surfaces (ENG-7652).
 *
 * The `trigger_sample_issue` card shows the user an issue before their own
 * telemetry has produced one, and resolving it is how the card is completed.
 * The content of that issue used to live in three places with three different
 * shapes: the dashboard hardcoded a name and a description
 * (`apps/dashboard/src/features/onboarding/sample-issue.tsx`), the CLI
 * hardcoded a four-section walkthrough (`buildSampleIssueExhibit`), and this
 * package described the card in copy that matched neither. This module is the
 * canonical one; neither surface keeps a copy.
 *
 * Packaging contract, in step with the registry's:
 *
 * - This is **copy and presentation-neutral facts only**. It carries no
 *   colours, no glyphs, no widths, and no React — each surface renders these
 *   values in its own idiom (the dashboard's `IssueCardView`, the CLI's box
 *   renderer) and the two are held together by using the same strings.
 * - It is **not a field on the card**. A `Task` stays `id`, `label`,
 *   `description`, `instructions`, `category` — those cross the public
 *   `tasks.list` wire as-is, and an exhibit body has no business on that
 *   contract. The exhibit is keyed to the card by
 *   {@link SAMPLE_ISSUE_CARD_ID} instead.
 * - It adds **no dependency**: plain data plus pure functions, so the browser
 *   bundle and the CLI's zero-dependency bundle both stay as they were.
 *
 * The **label** deliberately is not defined here. "Resolve your first issue"
 * is the card's registry label in `onboarding-tasks.ts`, because it is the
 * same string the checklist row renders; {@link SAMPLE_ISSUE_LABEL} reads it
 * back from there so the heading on each screen and the checklist row on each
 * surface cannot drift apart.
 */
/** The card this exhibit belongs to. The id is wire state and never changes. */
export declare const SAMPLE_ISSUE_CARD_ID: "trigger_sample_issue";
/**
 * The two states the exhibit renders. There is no ignored or muted state:
 * the sample is a static exhibit, and a control that does nothing is worse
 * than no control (ENG-7652).
 */
export type SampleIssueStatus = "open" | "resolved";
/**
 * The exhibit itself. One title line's worth of identity plus one
 * description paragraph — deliberately the shape of a real issue card, not a
 * bespoke walkthrough. The CLI used to split this into Issue details / What
 * happened / Why it happened / How to fix it, which no real issue card ever
 * renders; the four sections are folded into the paragraph below.
 */
export declare const SAMPLE_ISSUE: {
    readonly name: "Checkout error spike";
    readonly component: "checkout-api";
    readonly severity: "high";
    readonly description: "Checkout errors jumped from 0.2% to 4.8% right after a deploy, and the failures cluster on payment-provider timeouts at confirmation. That deploy changed the retry policy, so retries now stack on slow responses and exhaust the provider's rate limit. Roll it back to restore normal error rates, then reintroduce it with capped retries and a call-time budget.";
};
/** The section label above the description, on both surfaces. */
export declare const SAMPLE_ISSUE_DESCRIPTION_LABEL = "Description";
/**
 * The sentence above the card on both screens. It says what an issue is for,
 * then names the action that completes the step, because resolving is what
 * the step is: the copy has to say so rather than leaving the user to hunt
 * for a way forward.
 */
export declare const SAMPLE_ISSUE_INTRO = "Sazabi opens an issue when something breaks, with details on what happened and how to fix it. Resolve this one to continue.";
/** The status word each state renders. */
export declare const SAMPLE_ISSUE_STATUS_LABEL: {
    readonly open: "Open";
    readonly resolved: "Resolved";
};
/**
 * How long ago the exhibit "happened". Recent enough to read as an incident
 * caught this hour, far enough back that it is not pretending to be live.
 */
export declare const SAMPLE_ISSUE_AGE_MS: number;
/**
 * The exhibit's timestamp, relative to the moment it is rendered. Derived
 * rather than stored: a fixed date in the definition would read "8 months
 * ago" by the time the next cohort onboards, and a fixed *string* would
 * disagree with any absolute timestamp a surface derived beside it. `now` is
 * a parameter so tests and frozen-clock stories are deterministic.
 */
export declare const sampleIssueOccurredAt: (now?: Date) => Date;
/**
 * The relative timestamp the card's footer renders, computed from the same
 * age constant. It is always "45m ago" because the age is measured back from
 * render time, which is exactly why it can never go stale.
 */
export declare const sampleIssueAgeLabel: () => string;
/**
 * The one label for this step: the checklist row on both surfaces and the
 * screen heading on both. Read back from the card so there is exactly one
 * string to change.
 */
export declare const SAMPLE_ISSUE_LABEL: string;
