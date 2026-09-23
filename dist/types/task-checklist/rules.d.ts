/**
 * Every cross-surface rule about a task card, keyed by task id.
 *
 * A task definition (`onboarding-tasks.ts`, `setup-tasks.ts`) is identity and
 * copy only — id, label, description, instructions, category. Everything that
 * is a *rule* about a card lives here instead of on the card, so a rule is
 * read from one table rather than hunted across sixteen literals:
 *
 * - {@link TASK_DEPENDENCIES} — which cards can satisfy a card's prerequisite.
 * - {@link TASKS_WITH_SKIP_LEDGER} / {@link SKIPPABLE_TASKS} — the org-wide
 *   skip ledger's membership, and the narrower set whose walks offer Skip.
 * - {@link TASK_APPLICABILITY} — the named rule a surface evaluates to decide
 *   whether a card participates at all.
 * - {@link isTaskSkippedInLedger} — the per-card `organizations` column-pair
 *   mapping the ledger booleans are read through.
 *
 * Tables are `Partial` on purpose: the common case is "no rule", and the
 * accessors ({@link dependenciesFor}, {@link applicabilityFor},
 * {@link isSkippable}) answer for every task key so no caller null-checks a
 * missing entry. Per-surface *implementation* maps (which screen, which
 * terminal step) are NOT rules and stay with their surface.
 */
import type { TaskKey } from "./index.js";
/**
 * The cards able to satisfy a card's prerequisite. A card is suppressed only
 * when EVERY listed dependency was skipped (see `areDependenciesSkipped`), so
 * the array is "any of these keeps the dependent reachable", not "all of
 * these are required": either GitHub grant can provide repositories, so code
 * search stays eligible unless both were declined (the shipped web rule
 * `!(githubSkipped && githubAppSkipped)`), while alerts have the single chat
 * install to depend on.
 *
 * A dependency must precede its dependent in `ONBOARDING_FLOW` (guard-tested):
 * the interpreter only checks dependencies for *skips*, and array order is
 * what handles a merely pending one.
 */
export declare const TASK_DEPENDENCIES: Partial<Record<TaskKey, readonly TaskKey[]>>;
/** A card's dependencies, `[]` when it has none. */
export declare const dependenciesFor: (id: TaskKey) => readonly TaskKey[];
/**
 * The onboarding cards backed by an `organizations` skip column pair — the
 * org-wide skip ledger the public `tasks.skip`/`tasks.unskip` operations
 * write (task-registry-v2 Decision 6). The public contract's
 * `SKIPPABLE_TASK_IDS` enum derives from this tuple, so wire membership and
 * the column-pair mapping below cannot drift.
 */
export declare const TASKS_WITH_SKIP_LEDGER: readonly ["connect_github_account", "install_github_app", "install_slack_app", "trigger_sample_issue"];
export type TaskWithSkipLedger = (typeof TASKS_WITH_SKIP_LEDGER)[number];
/**
 * The cards whose walks actually OFFER Skip — a strict subset of
 * {@link TASKS_WITH_SKIP_LEDGER} (guard-tested), not the same set.
 *
 * `trigger_sample_issue` is the difference: it keeps its ledger pair and its
 * place in the public `tasks.skip` enum so already-recorded skips and the
 * wire contract stay valid, but since the skip-parity fix (audit 2026-09-14
 * §5 rule 1) the web screen is view-and-continue with no skip affordance and
 * the CLI follows — neither walk offers the choice. Membership here is what
 * replaced the old per-card `optional` boolean.
 */
export declare const SKIPPABLE_TASKS: ReadonlySet<TaskKey>;
/** Whether the onboarding walks offer Skip for this card. */
export declare const isSkippable: (id: TaskKey) => boolean;
/**
 * Named applicability rules, evaluated by each surface against its own facts.
 * A function cannot cross the `tasks.list` contract and the snapshot type
 * lives in the surfaces, so the table carries a serializable rule *name* and
 * the interpreter's state supplies the evaluation (see `OnboardingCardState`).
 */
export declare const TASK_APPLICABILITY_RULES: readonly ["billing-step-enabled"];
export type TaskApplicabilityRule = (typeof TASK_APPLICABILITY_RULES)[number];
/**
 * Which cards a surface must ask about before walking them. Billing is the
 * only one: the server decides whether the billing step participates for an
 * organization at all, and a card with no entry always applies.
 */
export declare const TASK_APPLICABILITY: Partial<Record<TaskKey, TaskApplicabilityRule>>;
/** A card's applicability rule, `null` when it always applies. */
export declare const applicabilityFor: (id: TaskKey) => TaskApplicabilityRule | null;
/**
 * Cards that offer no way back. The sample-issue card is the one so far:
 * Resolve is the only thing to press, one click that writes nothing real,
 * so a Back control would only compete with it (product decision
 * 2026-09-22). Both walks read this through `adjacentFlowEntry`, so neither
 * surface renders a Back the other would not.
 */
export declare const CARDS_WITHOUT_BACK: ReadonlySet<TaskKey>;
/** Whether a walk may offer Back from this card. */
export declare const offersBack: (id: TaskKey) => boolean;
/**
 * The org-wide skip ledger as booleans, one per `organizations` skip column
 * pair. Surfaces derive it from whatever shape carries the columns — the
 * task routers from the organization row (`getOrgOnboardingTaskFacts` in
 * the server entrypoint), the CLI walk from the onboarding snapshot
 * (`cardSkippedOnServer`) — and evaluate cards through
 * {@link isTaskSkippedInLedger} so the per-card pair mapping exists once.
 */
export type OrgTaskSkipLedger = {
    readonly githubSkipped: boolean;
    readonly githubAppSkipped: boolean;
    readonly slackSkipped: boolean;
    readonly sampleIssueSkipped: boolean;
};
/**
 * The per-card skip-pair mapping (the one source both task-list routers and
 * the CLI walk evaluate): one column pair per card since the GitHub
 * two-card split — `connect_github_account` owns the `github` (personal
 * account) pair and `install_github_app` owns the `github_app` (org
 * installation) pair. Cards outside {@link TASKS_WITH_SKIP_LEDGER} have no
 * ledger entry and never read skipped. Completion outranks a recorded skip
 * everywhere; callers gate on their done fact before consulting this.
 */
export declare const isTaskSkippedInLedger: (ledger: OrgTaskSkipLedger, taskKey: TaskKey) => boolean;
