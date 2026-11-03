/**
 * The setup guide's task definitions.
 *
 * A definition is identity and copy only — id, label, description,
 * instructions, category. Rules live in `rules.ts`; which page or terminal
 * step a card leads to lives with the surface, keyed by task id (the
 * dashboard's setup-guide targets, the CLI's step map).
 *
 * Setup cards (renamed from `GETTING_STARTED_TASKS`, the registry-v2
 * one-vocabulary decision — the wire `list` value keeps its legacy
 * `getting-started` spelling for published-client compatibility) are shown in
 * the web Setup guide and the CLI's `sazabi setup-tasks list` in this order,
 * and walked by neither onboarding tour unless `onboarding-tasks.ts` gives
 * one a place in the flow as well (`connect_log_sources`, ENG-10136), which
 * keeps it here; `sazabi setup-tasks get <id>` names
 * the standalone command that completes each card (ENG-7562 — the onboarding
 * walk never mentions or chains into the setup checklist; its recap ends at
 * "Onboarding complete."). Promoting a card into the tour is a cut-paste into
 * `onboarding-tasks.ts` plus a flow line.
 */
export declare const SETUP_TASKS: readonly [{
    readonly id: "send_message";
    readonly label: "Send message";
    readonly description: "Start your first conversation by sending a message to an agent in any project thread.";
    readonly instructions: "Open your project and type a message in the composer at the bottom of any thread. Press Enter or click Send to start a conversation.";
    readonly category: "setup";
}, {
    readonly id: "connect_log_sources";
    readonly label: "Add log sources";
    readonly description: "Add one or more log sources from providers such as Datadog, Sentry, or AWS CloudWatch so agents can read your logs, metrics, and traces.";
    readonly instructions: "Go to Settings > Log streams, pick a provider such as Datadog, Sentry, or AWS CloudWatch under Browse log source providers, and follow its setup steps.";
    readonly category: "setup";
}, {
    readonly id: "install_cli";
    readonly label: "Use Sazabi CLI";
    readonly description: "Install the Sazabi CLI so you and your coding agents can query logs, search project memory, and manage Sazabi from the terminal. Complete once you sign in to the Sazabi CLI.";
    readonly instructions: "Run 'npm install -g @sazabi/cli' to install the CLI, then 'sazabi auth sign-in' to sign in. The full command reference lives at https://docs.sazabi.com/reference/cli.";
    readonly category: "setup";
}, {
    readonly id: "invite_team";
    readonly label: "Invite team";
    readonly description: "Invite at least one other team member so your whole team can collaborate on investigations and share context.";
    readonly instructions: "Go to Settings > Members and click 'Invite'. Enter your teammate's email address, select their role, and click 'Send invites'.";
    readonly category: "setup";
}, {
    readonly id: "configure_auto_top_up";
    readonly label: "Set up auto top-up";
    readonly description: "Turn on automatic credit reloads so agents never pause mid-investigation when your balance runs low. Auto top-up adds credits automatically whenever your balance falls below a threshold you choose.";
    readonly instructions: "Go to Settings > Billing and click 'Enable' under Auto top-up. Set 'When credits fall below' and 'Add this much', then click 'Save'.";
    readonly category: "setup";
}, {
    readonly id: "add_mcp_connectors";
    readonly label: "Add MCP connectors";
    readonly description: "Add a Model Context Protocol (MCP) connector to extend agent capabilities with tools from external services.";
    readonly instructions: "Go to Settings > MCP connectors and select a connector from the Connector catalog. Click 'Add' on its page, then follow its setup steps.";
    readonly category: "setup";
}, {
    readonly id: "customize_sandbox";
    readonly label: "Connect sandbox CLIs";
    readonly description: "Connect a sandbox CLI so agents can use your infrastructure and deployment tooling from inside the agent sandbox during investigations.";
    readonly instructions: "Go to Settings > Sandbox and connect a CLI. Sazabi validates the credentials and makes the CLI available in every agent sandbox for this project.";
    readonly category: "setup";
}, {
    readonly id: "explore_integrations";
    readonly label: "Explore integrations";
    readonly description: "Visit the integrations page to discover available third-party integrations for your project.";
    readonly instructions: "Go to Settings > Integrations to browse the available integrations. Click any integration to view setup instructions and connect it to your project.";
    readonly category: "setup";
}, {
    readonly id: "visit_status_page";
    readonly label: "Visit components page";
    readonly description: "Visit your project's Components page to see the health of each component Sazabi tracks and the issues affecting it.";
    readonly instructions: "Click Components in the project navigation sidebar to open the page.";
    readonly category: "setup";
}];
/** The setup card ids, as a literal union for per-surface maps. */
export type SetupTaskKey = (typeof SETUP_TASKS)[number]["id"];
