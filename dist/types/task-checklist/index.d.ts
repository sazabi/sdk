/**
 * Task-card registry (the data-driven-onboarding design, ENG-6410; flow and
 * verb shape from the onboarding-task-registry-v2 design).
 *
 * Packaging contract:
 * - A **task definition is identity and copy only**: `id`, `label`,
 *   `description`, `instructions`, `category`. Definitions live in
 *   `onboarding-tasks.ts` (walk order) and `setup-tasks.ts` (the setup
 *   guide), and together they are the single source of truth for every card.
 * - **Rules about cards live in `rules.ts`**, keyed by task id —
 *   dependencies, skip-ledger membership, whether a walk offers Skip, and
 *   named applicability. Nothing rule-shaped goes back onto a card.
 * - **Implementations live with their surface**, keyed by task id: the
 *   dashboard's screen chains and setup-guide targets, the CLI's step map.
 *   The registry no longer carries `web:`/`cli:` verbs, so adding a card is a
 *   definition here plus an entry in each surface's map (guard-tested there).
 * - `ONBOARDING_FLOW` is the walk both surfaces render: a card line renders
 *   that card, the single `gate("create-project")` line renders that
 *   surface's create-project step. The gate's position among the cards is
 *   declared once — no surface hardcodes where the project split falls.
 * - `ONBOARDING_TASKS` (the cards, in walk order) is derived from
 *   `ONBOARDING_FLOW`. Array position is the only order; there is no stored
 *   `next`, no weights, and no per-surface order.
 * - `TASK_METADATA` is derived from the two arrays (onboarding first, then
 *   setup) so existing checklist consumers read from one source.
 * - Cards are plain serializable data (no functions): they cross the public
 *   `tasks.list` contract and the dashboard `taskChecklist` router as-is.
 * - **Card-keyed shared copy that is NOT a card field** lives in its own
 *   sibling module, keyed to the card by id: `sample-issue.ts` holds the
 *   test-issue exhibit both onboarding surfaces render (ENG-7652). It is
 *   here rather than in a new package because both surfaces already depend
 *   on this root, and it is a sibling rather than a `Task` field because the
 *   wire contract carries cards, not exhibits.
 * - This root entrypoint stays browser-safe and is the package's only public
 *   API; the completion writers live behind `@sazabi/task-checklist/server`.
 */
import { type OnboardingFlowEntry } from "./onboarding-tasks.js";
import { type TaskApplicabilityRule } from "./rules.js";
export { ONBOARDING_CARD_BY_ID, ONBOARDING_FLOW, ONBOARDING_TASKS, type OnboardingFlowEntry, type OnboardingTaskKey, } from "./onboarding-tasks.js";
export { SAMPLE_ISSUE, SAMPLE_ISSUE_AGE_MS, SAMPLE_ISSUE_CARD_ID, SAMPLE_ISSUE_DESCRIPTION_LABEL, SAMPLE_ISSUE_INTRO, SAMPLE_ISSUE_LABEL, SAMPLE_ISSUE_STATUS_LABEL, sampleIssueAgeLabel, sampleIssueOccurredAt, type SampleIssueStatus, } from "./sample-issue.js";
export { NAVIGATION_SCENARIOS, type NavigationAction, type NavigationLedger, type NavigationPosition, type NavigationScenario, } from "./navigation-scenarios.js";
export { SETUP_TASKS, type SetupTaskKey } from "./setup-tasks.js";
export { applicabilityFor, CARDS_WITHOUT_BACK, dependenciesFor, isSkippable, isTaskSkippedInLedger, offersBack, type OrgTaskSkipLedger, SKIPPABLE_TASKS, TASK_APPLICABILITY, TASK_APPLICABILITY_RULES, TASK_DEPENDENCIES, type TaskApplicabilityRule, TASKS_WITH_SKIP_LEDGER, type TaskWithSkipLedger, } from "./rules.js";
export declare const TASK_KEYS: readonly ["set_up_billing", "connect_github_account", "install_github_app", "configure_code_search", "install_slack_app", "configure_slack_alerts", "trigger_sample_issue", "invite_team", "connect_log_sources", "add_mcp_connectors", "install_cli", "customize_sandbox", "send_message", "explore_integrations", "visit_status_page", "configure_auto_top_up"];
export type TaskKey = (typeof TASK_KEYS)[number];
/** Task keys written to org_task_completions. */
export declare const ORG_TASK_KEYS: readonly ["set_up_billing", "connect_github_account", "install_github_app", "install_slack_app", "configure_slack_alerts", "invite_team", "add_mcp_connectors", "install_cli", "configure_auto_top_up"];
export type OrgTaskKey = (typeof ORG_TASK_KEYS)[number];
/** Task keys written to project_task_completions. */
export declare const PROJECT_TASK_KEYS: readonly ["configure_code_search", "trigger_sample_issue", "connect_log_sources", "customize_sandbox", "send_message", "explore_integrations", "visit_status_page"];
export type ProjectTaskKey = (typeof PROJECT_TASK_KEYS)[number];
export declare const TASK_CATEGORIES: readonly ["onboarding", "setup"];
export type TaskCategory = (typeof TASK_CATEGORIES)[number];
/**
 * One task card: one checklist row, one flow stop, one completion row. A
 * card may span multiple web screens or CLI prompts internally; the card
 * boundary is the checkmark.
 *
 * Identity and copy only. A card carries no `optional`, no `dependsOn`, no
 * `appliesTo`, and no `web`/`cli` verb — those were rules and implementation
 * details wearing a data field's clothes. Rules are keyed by id in
 * `rules.ts`; implementations are keyed by id in each surface's own map. A
 * card's membership never differs by surface, only what the surface does
 * when it reaches it.
 */
export type Task = {
    readonly id: TaskKey;
    readonly label: string;
    readonly description: string;
    readonly instructions: string;
    readonly category: TaskCategory;
};
/**
 * Flat task list derived from the two card arrays (onboarding first, then
 * setup). Kept for the existing checklist consumers; new code should read
 * the arrays directly.
 */
export declare const TASK_METADATA: readonly Task[];
/**
 * Which card array a task belongs to, as serialized on the wire. The
 * `getting-started` value is the legacy spelling of the setup array — it
 * stays on the wire for published-client compatibility even though the
 * code identifier renamed to `SETUP_TASKS`.
 */
export declare const TASK_LISTS: readonly ["onboarding", "getting-started"];
export type TaskList = (typeof TASK_LISTS)[number];
/**
 * The additive card fields both task-list APIs serialize per task: which
 * array the card belongs to, and whether a walk offers Skip for it.
 *
 * The per-surface verbs are deliberately absent. They named a web screen and
 * a terminal step — implementation identifiers of surfaces the API's callers
 * do not run — and they now live in each surface's own map, so there is
 * nothing for the registry to project.
 */
export type TaskCardProjection = {
    /** Which card array the task belongs to. */
    readonly list: TaskList;
    /** Whether the onboarding flows offer Skip for this card. */
    readonly skippable: boolean;
};
/**
 * Projects a card into the shared wire shape. The dashboard `taskChecklist`
 * router and the public `tasks.list` handler both call this one function
 * (self-use §4.c parity), so the two surfaces cannot drift.
 */
export declare const toTaskCardProjection: (task: Task) => TaskCardProjection;
/**
 * The facts an onboarding-flow interpreter derives its position from. All
 * three predicates answer from current truth (completion rows, recorded
 * skips, surface facts); nothing is a stored cursor.
 */
export type OnboardingCardState = {
    readonly done: (id: TaskKey) => boolean;
    readonly skipped: (id: TaskKey) => boolean;
    /**
     * Evaluates a card's named applicability rule (`rules.ts`) against the
     * surface's current facts. Optional: a surface that cannot evaluate rules
     * treats every card as applicable.
     */
    readonly applies?: (rule: TaskApplicabilityRule) => boolean;
};
/**
 * A card is unavailable when EVERY card it depends on was skipped:
 * `TASK_DEPENDENCIES` lists the cards able to satisfy the dependent's
 * prerequisite (the grants that can provide repositories, the chat install
 * that alerts deliver through), so any un-skipped one keeps the dependent
 * reachable. With a single dependency this is the familiar "skipped
 * dependency suppresses the dependent" (alerts after a skipped Slack
 * install); with the split GitHub cards it is exactly the shipped web rule —
 * code search stays eligible unless BOTH GitHub grants were declined
 * (`!(githubSkipped && githubAppSkipped)`).
 */
export declare const areDependenciesSkipped: (id: TaskKey, skipped: (id: TaskKey) => boolean) => boolean;
/**
 * A card the tour may land on: not suppressed by
 * {@link areDependenciesSkipped}, and its applicability rule (if any) holds.
 * Deliberately silent on done/skipped — {@link nextCard} additionally
 * excludes satisfied cards (the walk's next stop is always pending work),
 * while {@link adjacentFlowEntry} admits them (a satisfied card is a valid
 * navigation target that renders its done/skipped state).
 *
 * This is the ONE card-level eligibility rule (ENG-7688). Both surfaces call
 * it: the CLI through {@link adjacentFlowEntry} and {@link nextCard}, the web
 * through its screen-level adapter, which maps each card to its screen chain
 * locally and asks here whether the card participates at all. The web used to
 * carry its own copy per screen — `!(githubSkipped && githubAppSkipped)` for
 * code search and `!slackSkipped` for alerts — which is the duplication that
 * let the two surfaces drift.
 */
export declare const isCardEligible: (id: TaskKey, state: OnboardingCardState) => boolean;
/**
 * The four things the server can say about a task, keyed by the task's own
 * id on both task-list routers (`tasks.list` and `taskChecklist.getStatus`).
 * `unavailable` is the dependency rule made visible: every card the task
 * depends on was skipped, so it cannot be completed. A task whose
 * applicability rule reports false is omitted from the row set rather than
 * given a fifth value (the dashboard's long-standing null-hiding), so this
 * enum is total over the rows a router emits.
 */
export declare const TASK_STATUSES: readonly ["incomplete", "complete", "skipped", "unavailable"];
export type TaskStatus = (typeof TASK_STATUSES)[number];
/**
 * One task's server-evaluated status with the card fields a surface needs
 * to render it: the row `onboarding.getState` carries for every task on
 * both routers (ENG-7745). Copy comes from the registry by id; nothing else
 * about the card travels on the wire.
 */
export type TaskStatusRow = {
    readonly id: TaskKey;
    readonly status: TaskStatus;
} & TaskCardProjection;
/**
 * One task's status from current facts, evaluated on the server so neither
 * surface derives it again (ENG-7745). Precedence, in order: a done task is
 * `complete` whatever the ledger says (completion outranks a recorded
 * skip); a ledger skip is `skipped`; a task whose dependencies were all
 * skipped ({@link areDependenciesSkipped}) is `unavailable`; everything
 * else is `incomplete`. The first `incomplete` onboarding card in array
 * order is therefore exactly {@link nextCard}, so a surface that walks the
 * statuses and one that calls the interpreter land on the same card.
 */
export declare const taskStatusFor: (id: TaskKey, state: Pick<OnboardingCardState, "done" | "skipped">) => TaskStatus;
/**
 * The shared onboarding interpreter core: the next card is the first entry
 * in `ONBOARDING_TASKS` that is neither done nor skipped, not suppressed by
 * {@link areDependenciesSkipped}, and whose applicability rule (if any)
 * holds. Returns `undefined` when the tour is exhausted. Pure: same state
 * in, same card out.
 *
 * A merely pending dependency needs no check: dependencies precede their
 * dependents in the array (guard-tested), so the dependency itself is
 * selected first.
 */
export declare const nextCard: (state: OnboardingCardState) => Task | undefined;
/** Which way {@link adjacentFlowEntry} walks the tour: -1 back, 1 forward. */
export type FlowDirection = -1 | 1;
/** A position in the onboarding walk: a card key or the create-project gate. */
export type OnboardingFlowEntryId = OnboardingFlowEntry["id"];
/**
 * The first eligible flow entry adjacent to `from` in `direction`, or `null`
 * at the tour's edge — the CLI port of the web's
 * `deriveAdjacentViewableScreen`
 * (`apps/dashboard/src/features/onboarding/onboarding-flow.ts`), the
 * cli-onboarding-back-navigation design's adjacency decision. Pure, like
 * {@link nextCard}: same state in, same entry out.
 *
 * The walk covers `ONBOARDING_FLOW` — cards AND the create-project gate —
 * because the web's ordered-screens walk includes the gate screen: backing up
 * from the first project-scoped card lands on configure-project, not on
 * billing. The gate is always admitted: it cannot be skipped, has no
 * dependencies or applicability rule, and its web eligibility (an
 * organization exists) holds whenever the walk runs; a gate whose project
 * already exists is a satisfied entry, admitted like any other. The gate
 * offering no Back of its own in the flow's render is a ruling about its
 * outgoing option, not about being a back target.
 *
 * Unlike `nextCard`, satisfied (done or skipped) entries are admitted: a
 * back/forward target renders its completed or actionable state rather than
 * being invisible, so navigation can revisit finished work. Only pruning
 * excludes a card — every dependency skipped ({@link areDependenciesSkipped})
 * or its applicability rule reporting false — because those cards cannot be
 * acted on at all. An unknown `from` returns `null`.
 *
 * A card in `CARDS_WITHOUT_BACK` refuses the backward move outright: the
 * rule is about the card the user is on, not about what lies behind it, so
 * it is checked before the walk looks at any neighbour.
 *
 * Navigation only: choosing an adjacent entry must never write anything —
 * entry status stays server-derived, and only explicit user actions
 * (connect, install, configure, skip) mutate state.
 */
export declare const adjacentFlowEntry: (state: OnboardingCardState, from: OnboardingFlowEntryId, direction: FlowDirection) => OnboardingFlowEntry | null;
/**
 * Completion status for all checklist tasks, grouped by display category.
 * The "onboarding" group maps to tasks with category "onboarding";
 * the "other" group maps to tasks with category "setup".
 */
export type TaskChecklistStatus = {
    onboarding: {
        /**
         * Whether the organization has an active paid subscription or a recorded
         * choice with serviceable Free billing, matching the onboarding gate.
         * `null` when the billing step is disabled and neither completion condition
         * holds. The saved choice is retained when billing becomes inactive. A `null`
         * value hides the task from the checklist entirely rather than stranding
         * the org with a task the product never asks it to complete.
         */
        setUpBilling: boolean | null;
        /**
         * Whether anyone in the organization has a live (non-reconnect) GitHub
         * connected account — the personal-login half of the former fused
         * GitHub card.
         */
        connectGithubAccount: boolean;
        installGithubApp: boolean;
        configureCodeSearch: boolean;
        installSlackApp: boolean;
        configureSlackAlerts: boolean;
    };
    other: {
        inviteTeam: boolean;
        connectLogSources: boolean;
        addMcpConnectors: boolean;
        /**
         * Whether someone in the organization authenticated the Sazabi CLI: an
         * org `install_cli` completion row (stamped by the public API on
         * CLI-sourced requests) or a live device-grant session bound to the
         * organization (`hasCliAuthenticatedSession`).
         */
        installCli: boolean;
        customizeSandbox: boolean;
        sendMessage: boolean;
        exploreIntegrations: boolean;
        visitStatusPage: boolean;
        /**
         * Whether auto top-up (automatic reload) is enabled, or `null` when the
         * task is not applicable to this organization (no active credit-balance
         * subscription, so the billing UI never exposes the auto top-up controls).
         * A `null` value hides the task from the checklist entirely rather than
         * stranding the org with a task it can never complete.
         */
        configureAutoTopUp: boolean | null;
    };
};
