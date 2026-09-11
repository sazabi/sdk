/**
 * Task-card registry (the data-driven-onboarding design, ENG-6410).
 *
 * Packaging contract:
 * - `ONBOARDING_TASKS` and `GETTING_STARTED_TASKS` are the single source of
 *   truth for every task card. Array position is the only order: the
 *   onboarding array's order is the flow order both onboarding flows walk,
 *   and the checklists render both arrays in array order. There is no
 *   stored `next`, no weights, and no per-surface order.
 * - `TASK_METADATA` is derived from the two arrays (onboarding first, then
 *   getting-started) so existing checklist consumers keep compiling and
 *   rendering from one source.
 * - Cards are plain serializable data (no functions): they cross the public
 *   `tasks.list` contract and the dashboard `taskChecklist` router as-is.
 * - This root entrypoint stays browser-safe; the completion writers live
 *   behind `@sazabi/task-checklist/server`.
 */
export declare const TASK_KEYS: readonly ["set_up_billing", "install_github_app", "configure_code_search", "install_slack_app", "configure_slack_alerts", "trigger_sample_issue", "invite_team", "connect_log_sources", "add_mcp_connectors", "install_agent_skills", "customize_sandbox", "send_message", "explore_integrations", "resolve_first_issue", "visit_status_page", "configure_auto_top_up"];
export type TaskKey = (typeof TASK_KEYS)[number];
/** Task keys written to org_task_completions. */
export declare const ORG_TASK_KEYS: readonly ["set_up_billing", "install_github_app", "install_slack_app", "configure_slack_alerts", "invite_team", "add_mcp_connectors", "install_agent_skills", "configure_auto_top_up"];
export type OrgTaskKey = (typeof ORG_TASK_KEYS)[number];
/** Task keys written to project_task_completions. */
export declare const PROJECT_TASK_KEYS: readonly ["configure_code_search", "trigger_sample_issue", "connect_log_sources", "customize_sandbox", "send_message", "explore_integrations", "resolve_first_issue", "visit_status_page"];
export type ProjectTaskKey = (typeof PROJECT_TASK_KEYS)[number];
export declare const TASK_CATEGORIES: readonly ["onboarding", "setup"];
export type TaskCategory = (typeof TASK_CATEGORIES)[number];
export type TaskMetadata = {
    readonly id: TaskKey;
    readonly label: string;
    readonly description: string;
    readonly instructions: string;
    readonly category: TaskCategory;
    readonly dependsOn?: readonly TaskKey[];
};
/**
 * What the web onboarding flow does when it reaches a card. A closed 3-kind
 * menu so the flow's interpreter is a small `switch` that never grows:
 * - `show-screen`: render a bespoke screen (may span several internal pages;
 *   the card derives which one fits the current facts).
 * - `open-page`: navigate to an existing product page.
 * - `show-command`: render a command card for work the CLI must execute.
 */
export type WebAction = {
    readonly do: "show-screen";
    readonly target: string;
} | {
    readonly do: "open-page";
    readonly target: string;
} | {
    readonly do: "show-command";
    readonly target: string;
};
/**
 * What the CLI onboarding flow does when it reaches a card:
 * - `run-step`: run a bespoke terminal step (target is the step id).
 * - `open-page`: open a dashboard page in the browser.
 * - `open-browser`: open a URL and poll for completion (work the browser
 *   must execute, e.g. checkout).
 */
export type CliAction = {
    readonly do: "run-step";
    readonly target: string;
} | {
    readonly do: "open-page";
    readonly target: string;
} | {
    readonly do: "open-browser";
    readonly target: string;
};
/**
 * Named applicability rules, evaluated by each surface against its own
 * facts. The design types `appliesTo` as a snapshot predicate; a function
 * cannot cross the `tasks.list` contract and the snapshot type lives in the
 * surfaces, so the card carries a serializable rule *name* and the
 * interpreter's state supplies the evaluation (see {@link nextCard}).
 */
export declare const TASK_APPLICABILITY_RULES: readonly ["billing-step-enabled"];
export type TaskApplicabilityRule = (typeof TASK_APPLICABILITY_RULES)[number];
/**
 * One task card: one checklist row, one flow stop, one completion row. A
 * card may span multiple web screens or CLI prompts internally; the card
 * boundary is the checkmark. `web`/`cli` actions are required for
 * `ONBOARDING_TASKS` entries (guard-tested) and omitted on
 * getting-started cards, whose checklist rows render `instructions`.
 */
export type Task = TaskMetadata & {
    /** The flow offers Skip. */
    readonly optional?: boolean;
    /** Auto-skip when the surface reports the named rule false. */
    readonly appliesTo?: TaskApplicabilityRule;
    readonly web?: WebAction;
    readonly cli?: CliAction;
};
/**
 * The onboarding tour: walked by both onboarding flows in this order and
 * shown in the checklists. Reordering the tour is reordering this array.
 *
 * Action targets reference the existing surface identifiers (the design's
 * consistency ruling): web `show-screen` targets are the web flow's step
 * ids where a card maps to one screen, or a card-level key where a card
 * spans several (`connect-forge`, `sample-issue`); cli `run-step` targets
 * are the CLI flow's step ids.
 */
export declare const ONBOARDING_TASKS: readonly Task[];
/**
 * Checklist-only cards: shown in the Get Started panel and the CLI tasks
 * list (in this order, after the onboarding cards) but walked by neither
 * onboarding flow. Promoting a card into the tour is a cut-paste into
 * `ONBOARDING_TASKS`.
 */
export declare const GETTING_STARTED_TASKS: readonly Task[];
/**
 * Flat task list derived from the two card arrays (onboarding first, then
 * getting-started). Kept for the existing checklist consumers; new code
 * should read the arrays directly.
 */
export declare const TASK_METADATA: readonly Task[];
/** Which card array a task belongs to, as serialized on the wire. */
export declare const TASK_LISTS: readonly ["onboarding", "getting-started"];
export type TaskList = (typeof TASK_LISTS)[number];
/**
 * The additive card fields both task-list APIs serialize per task. `web` and
 * `cli` are `null` (never omitted) for checklist-only cards so the dashboard
 * tRPC surface and the public `tasks.list` contract emit byte-identical
 * shapes for the same card.
 */
export type TaskCardProjection = {
    /** Which card array the task belongs to. */
    readonly list: TaskList;
    /** Whether the onboarding flows offer Skip for this card. */
    readonly optional: boolean;
    readonly web: WebAction | null;
    readonly cli: CliAction | null;
};
/**
 * Projects a card's flow fields into the shared wire shape. The dashboard
 * `taskChecklist` router and the public `tasks.list` handler both call this
 * one function (self-use §4.c parity), so the two surfaces cannot drift.
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
     * Evaluates a card's named applicability rule against the surface's
     * current facts. Optional: a surface that cannot evaluate rules treats
     * every card as applicable.
     */
    readonly applies?: (rule: TaskApplicabilityRule) => boolean;
};
/**
 * The shared onboarding interpreter core: the next card is the first entry
 * in `ONBOARDING_TASKS` that is neither done nor skipped, none of whose
 * `dependsOn` targets were skipped, and whose applicability rule (if any)
 * holds. Returns `undefined` when the tour is exhausted. Pure: same state
 * in, same card out.
 *
 * A skipped dependency makes its dependents ineligible, mirroring the
 * shipped web flow's eligibility rules (`configure-code-search` is
 * ineligible when the forge install was skipped, `configure-slack-
 * notifications` when Slack was skipped — see
 * apps/dashboard/src/features/onboarding/onboarding-steps.ts). A merely
 * pending dependency needs no check: dependencies precede their dependents
 * in the array (guard-tested), so the dependency itself is selected first.
 */
export declare const nextCard: (state: OnboardingCardState) => Task | undefined;
/**
 * Completion status for all checklist tasks, grouped by display category.
 * The "onboarding" group maps to tasks with category "onboarding";
 * the "other" group maps to tasks with category "setup".
 */
export type TaskChecklistStatus = {
    onboarding: {
        /**
         * Whether the organization has completed billing setup (an active paid
         * subscription — the same predicate as the onboarding billing gate), or
         * `null` when billing does not participate for this org (the onboarding
         * billing step is disabled and no paid subscription exists). A `null`
         * value hides the task from the checklist entirely rather than stranding
         * the org with a task the product never asks it to complete.
         */
        setUpBilling: boolean | null;
        installGithubApp: boolean;
        configureCodeSearch: boolean;
        installSlackApp: boolean;
        configureSlackAlerts: boolean;
    };
    other: {
        inviteTeam: boolean;
        connectLogSources: boolean;
        addMcpConnectors: boolean;
        customizeSandbox: boolean;
        sendMessage: boolean;
        exploreIntegrations: boolean;
        resolveFirstIssue: boolean;
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
