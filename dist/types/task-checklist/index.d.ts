/**
 * Task-card registry (the data-driven-onboarding design, ENG-6410; flow and
 * verb shape from the onboarding-task-registry-v2 design).
 *
 * Packaging contract:
 * - `ONBOARDING_FLOW` is the walk both surfaces render (the web tour and the
 *   CLI wizard, consumed by the registry-v2 surface PRs): a card line renders
 *   that card, the single `gate("create-project")` line renders that
 *   surface's create-project step. The gate's position among the cards is
 *   declared here exactly once — no surface hardcodes where the project
 *   split falls.
 * - `ONBOARDING_TASKS` (the cards, in walk order) is derived from
 *   `ONBOARDING_FLOW`, and `SETUP_TASKS` is the second array. Together they
 *   are the single source of truth for every task card. Array position is
 *   the only order: the flow array's order is the order both onboarding
 *   flows walk, and the checklists render both arrays in array order. There
 *   is no stored `next`, no weights, and no per-surface order.
 * - `TASK_METADATA` is derived from the two arrays (onboarding first, then
 *   setup) so existing checklist consumers keep compiling and rendering
 *   from one source.
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
 * boundary is the checkmark. Every card carries both a `web:` and a `cli:`
 * action (guard-tested): membership never differs by surface, only the verb
 * does — terminal-shaped work shows a command on the web, web-shaped work
 * opens the page (and polls the fact) from the CLI.
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
 * One line of the onboarding walk: a card, or the create-project gate.
 * Gates are not tasks (their done-ness is existence and they cannot be
 * skipped), but the gate's *position* among the cards is a product choice
 * this array declares exactly once — each surface renders its own
 * create-project step at the gate line instead of hardcoding where the
 * project split falls.
 */
export type OnboardingFlowEntry = {
    readonly kind: "card";
    readonly id: TaskKey;
} | {
    readonly kind: "gate";
    readonly id: "create-project";
};
/**
 * The onboarding walk both surfaces render, top to bottom (the registry-v2
 * design): a card line renders that card (unless done / skipped / not
 * applicable), the gate line renders the surface's create-project step
 * (unless the project exists). Sign-in and create-org stay outside the
 * array — they are "before everything" by definition. Reordering the tour
 * or moving the project gate is reordering this array.
 */
export declare const ONBOARDING_FLOW: readonly OnboardingFlowEntry[];
/**
 * The onboarding tour's cards in walk order, derived from
 * {@link ONBOARDING_FLOW} so the flow and the card list cannot drift. A
 * flow entry naming a card with no definition fails at module evaluation —
 * loudly, everywhere — rather than silently dropping a stop from the tour.
 */
export declare const ONBOARDING_TASKS: readonly Task[];
/**
 * Setup cards (renamed from `GETTING_STARTED_TASKS`, the registry-v2
 * one-vocabulary decision — the wire `list` value keeps its legacy
 * `getting-started` spelling for published-client compatibility): shown in
 * the web Setup guide and the CLI tasks list (in this order, after the
 * onboarding cards) but walked by neither onboarding tour; the CLI's setup
 * round offers them after the finish recap. Promoting a card into the tour
 * is a cut-paste into the onboarding cards + a flow line.
 *
 * Verb targets: web `open-page` / cli `open-page` targets are
 * project-relative dashboard paths (each surface prefixes the active
 * project's `/projects/<projectId>`, matching the dashboard checklist's
 * hrefs); web `show-command` targets are the command the card renders for
 * copying; cli `run-step` targets are CLI setup-round step ids
 * (forward-declared for the wizard-derivation PR).
 */
export declare const SETUP_TASKS: readonly Task[];
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
 * The additive card fields both task-list APIs serialize per task. `web` and
 * `cli` stay nullable on the wire (every registry card now carries both, but
 * published clients already parse `null`) so the dashboard tRPC surface and
 * the public `tasks.list` contract emit byte-identical shapes for the same
 * card.
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
        /**
         * Whether someone in the organization installed the agent skills.
         * Completion-row only (the org `install_agent_skills` completion written
         * by `sazabi skill install`): the install is machine-global, so no
         * database fact can observe it live — mirroring the public `tasks.list`
         * treatment of the same task.
         */
        installAgentSkills: boolean;
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
