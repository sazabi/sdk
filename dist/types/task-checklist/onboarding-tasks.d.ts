/**
 * The onboarding tour's task definitions and the walk both surfaces render.
 *
 * A definition is identity and copy only — id, label, description,
 * instructions, category. Dependencies, skippability and applicability are
 * rules, and rules live in `rules.ts`; which screen or terminal step a card
 * runs is an implementation detail, and that lives with the surface (the
 * dashboard's screen chains, the CLI's step map), keyed by task id.
 *
 * Array position is the only order: {@link ONBOARDING_FLOW} is the order both
 * onboarding flows walk. There is no stored `next`, no weights, and no
 * per-surface order.
 */
import type { Task, TaskKey } from "./index.js";
/**
 * The onboarding card definitions. Private: consumers read
 * {@link ONBOARDING_FLOW} (cards + the create-project gate) or the derived
 * {@link ONBOARDING_TASKS} (cards only), whose order comes from the flow.
 */
declare const ONBOARDING_CARDS: readonly [{
    readonly id: "set_up_billing";
    readonly label: "Choose a plan";
    readonly description: "Choose to continue with Free without a credit card or select a paid plan.";
    readonly instructions: "Choose Continue with Free to keep your existing plan, or select a paid plan and complete checkout.";
    readonly category: "onboarding";
}, {
    readonly id: "connect_github_account";
    readonly label: "Connect GitHub account";
    readonly description: "Link your personal GitHub login so code search can list the repositories you have access to.";
    readonly instructions: "Go to Settings > Connected Accounts and connect GitHub. You will be redirected to GitHub to authorize your personal account.";
    readonly category: "onboarding";
}, {
    readonly id: "install_github_app";
    readonly label: "Install GitHub App";
    readonly description: "Install the Sazabi GitHub App on your GitHub organization to enable code search, pull request mention handling, and repository-triggered agent runs.";
    readonly instructions: "Go to Settings > Integrations and connect GitHub (install the Sazabi GitHub App on your GitHub organization).";
    readonly category: "onboarding";
}, {
    readonly id: "configure_code_search";
    readonly label: "Configure code search";
    readonly description: "Link at least one GitHub repository to your project so agents can search and read your codebase during investigations.";
    readonly instructions: "Go to Settings > Code Search and click 'Add repository'. Select the GitHub repositories you want agents to have access to.";
    readonly category: "onboarding";
}, {
    readonly id: "install_slack_app";
    readonly label: "Install Slack App";
    readonly description: "Connect Slack so your team receives issue alerts and can trigger agent runs from chat.";
    readonly instructions: "Go to Settings > Integrations and connect Slack. You will be redirected to authorize the Sazabi app on your workspace.";
    readonly category: "onboarding";
}, {
    readonly id: "configure_slack_alerts";
    readonly label: "Configure Slack alerts";
    readonly description: "Select a Slack channel to receive issue alerts and agent summaries when something goes wrong in production.";
    readonly instructions: "Go to Settings > Project Notifications and select a Slack channel for issue alerts. Sazabi will post issue alerts and agent summaries to that channel.";
    readonly category: "onboarding";
}, {
    readonly id: "trigger_sample_issue";
    readonly label: "Resolve your first issue";
    readonly description: "Resolve a test issue to see how Sazabi presents an incident: what happened, why it happened, and how to fix it. This shows you the shape of a real issue before your own telemetry produces one.";
    readonly instructions: "Open the 'Resolve your first issue' step during onboarding and resolve the test issue. From the CLI, run 'sazabi onboarding' and resolve it there.";
    readonly category: "onboarding";
}];
/** The onboarding card ids, as a literal union for per-surface maps. */
export type OnboardingTaskKey = (typeof ONBOARDING_CARDS)[number]["id"];
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
/** Card lookup by id, for the interpreter's flow walks. */
export declare const ONBOARDING_CARD_BY_ID: ReadonlyMap<TaskKey, Task>;
/**
 * The onboarding tour's cards in walk order, derived from
 * {@link ONBOARDING_FLOW} so the flow and the card list cannot drift. A
 * flow entry naming a card with no definition fails at module evaluation —
 * loudly, everywhere — rather than silently dropping a stop from the tour.
 */
export declare const ONBOARDING_TASKS: readonly Task[];
export {};
