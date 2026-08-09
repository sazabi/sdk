export declare const TASK_KEYS: readonly ["install_github_app", "configure_code_search", "install_slack_app", "configure_slack_alerts", "invite_team", "connect_log_sources", "add_mcp_connectors", "customize_sandbox", "send_message", "explore_integrations", "resolve_first_issue", "visit_status_page", "configure_auto_top_up"];
export type TaskKey = (typeof TASK_KEYS)[number];
/** Task keys written to org_task_completions. */
export declare const ORG_TASK_KEYS: readonly ["install_github_app", "install_slack_app", "configure_slack_alerts", "invite_team", "add_mcp_connectors", "configure_auto_top_up"];
export type OrgTaskKey = (typeof ORG_TASK_KEYS)[number];
/** Task keys written to project_task_completions. */
export declare const PROJECT_TASK_KEYS: readonly ["configure_code_search", "connect_log_sources", "customize_sandbox", "send_message", "explore_integrations", "resolve_first_issue", "visit_status_page"];
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
export declare const TASK_METADATA: readonly [{
    readonly id: "install_github_app";
    readonly label: "Install GitHub app";
    readonly description: "Install the Sazabi GitHub App on your GitHub organization to enable code search, pull request mention handling, and repository-triggered agent runs.";
    readonly instructions: "Go to Settings > Integrations > GitHub and click 'Install GitHub App'. You will be redirected to GitHub to authorize the app on your organization.";
    readonly category: "onboarding";
}, {
    readonly id: "configure_code_search";
    readonly label: "Configure code search";
    readonly description: "Link at least one GitHub repository to your project so agents can search and read your codebase during investigations.";
    readonly instructions: "Go to Settings > Code Search and click 'Add repository'. Select the GitHub repositories you want agents to have access to.";
    readonly category: "onboarding";
    readonly dependsOn: readonly ["install_github_app"];
}, {
    readonly id: "install_slack_app";
    readonly label: "Install Slack app";
    readonly description: "Install the Sazabi Slack app to your Slack workspace to receive notifications and allow team members to trigger agent runs from Slack.";
    readonly instructions: "Go to Settings > Integrations > Slack and click 'Install Slack App'. You will be redirected to Slack to authorize the app on your workspace.";
    readonly category: "onboarding";
}, {
    readonly id: "configure_slack_alerts";
    readonly label: "Configure Slack alerts";
    readonly description: "Select a Slack channel to receive issue alerts and agent summaries when something goes wrong in production.";
    readonly instructions: "Go to Settings > Project Notifications and select a Slack channel for issue alerts. Sazabi will post issue alerts and agent summaries to that channel.";
    readonly category: "onboarding";
    readonly dependsOn: readonly ["install_slack_app"];
}, {
    readonly id: "invite_team";
    readonly label: "Invite team";
    readonly description: "Invite at least one other team member so your whole team can collaborate on investigations and share context.";
    readonly instructions: "Go to Settings > Members and click 'Invite member'. Enter your teammate's email address and select their role.";
    readonly category: "setup";
}, {
    readonly id: "connect_log_sources";
    readonly label: "Connect data sources";
    readonly description: "Connect a telemetry data source such as Datadog, Sentry, or AWS CloudWatch so agents have access to your logs, metrics, and traces.";
    readonly instructions: "Go to Settings > Data Sources and click 'Add data source'. Choose a provider such as Datadog, Sentry, or AWS CloudWatch and follow the configuration steps.";
    readonly category: "setup";
}, {
    readonly id: "add_mcp_connectors";
    readonly label: "Add MCP connectors";
    readonly description: "Add a Model Context Protocol (MCP) connector to extend agent capabilities with tools from external services.";
    readonly instructions: "Go to Settings > MCP Connectors and click 'Add connector'. Choose a connector from the available list and follow the setup steps.";
    readonly category: "setup";
}, {
    readonly id: "customize_sandbox";
    readonly label: "Customize sandbox";
    readonly description: "Add environment variables or an init script to the agent sandbox so it has the credentials and context it needs to work with your codebase.";
    readonly instructions: "Go to Settings > Sandbox and add environment variables or an init script. Environment variables are available to all agent commands; the init script runs once when the sandbox starts.";
    readonly category: "setup";
}, {
    readonly id: "send_message";
    readonly label: "Send message";
    readonly description: "Start your first conversation by sending a message to an agent in any project thread.";
    readonly instructions: "Open your project and type a message in the composer at the bottom of any thread. Press Enter or click Send to start a conversation.";
    readonly category: "setup";
}, {
    readonly id: "explore_integrations";
    readonly label: "Explore integrations";
    readonly description: "Visit the integrations page to discover available third-party integrations for your project.";
    readonly instructions: "Go to Settings > Integrations to browse the available integrations. Click any integration to view setup instructions and connect it to your project.";
    readonly category: "setup";
}, {
    readonly id: "resolve_first_issue";
    readonly label: "Resolve first issue";
    readonly description: "Use Sazabi to investigate and resolve your first production issue to experience the full agent-to-resolution workflow.";
    readonly instructions: "Open an issue from the issue inbox and send a message asking the agent to investigate. Once the root cause is identified, follow the agent's recommendation to resolve it.";
    readonly category: "setup";
}, {
    readonly id: "visit_status_page";
    readonly label: "Visit status page";
    readonly description: "Visit your project's status page to see how Sazabi monitors and displays the health of your services.";
    readonly instructions: "Click 'Status Page' in the project navigation sidebar to open your project's public status page.";
    readonly category: "setup";
}, {
    readonly id: "configure_auto_top_up";
    readonly label: "Set up auto top-up";
    readonly description: "Turn on automatic credit reloads so agents never pause mid-investigation when your balance runs low. Auto top-up adds credits automatically whenever your balance falls below a threshold you choose.";
    readonly instructions: "Go to Settings > Billing and enable automatic reload under Auto top-up. Choose the balance threshold that triggers a reload and the amount to add each time.";
    readonly category: "setup";
}];
/**
 * Completion status for all checklist tasks, grouped by display category.
 * The "onboarding" group maps to tasks with category "onboarding";
 * the "other" group maps to tasks with category "setup".
 */
export type TaskChecklistStatus = {
    onboarding: {
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
