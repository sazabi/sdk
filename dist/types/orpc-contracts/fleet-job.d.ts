export declare const FLEET_JOB_OUTPUT_KEYS: {
    /** Pending coding-agent recovery: one bounded page of dispatch/tenant ids. */
    readonly coding_agent_dispatch_recovery: readonly ["dispatches", "nextCursor"];
    /** The daily account snapshot's bounded billing movement history read. */
    readonly account_movements: readonly ["movements", "activatedPaid", "churned", "upsell", "contraction", "firstPaidActivationAt"];
    /** The account snapshot job's paged organization and project-count scan. */
    readonly account_snapshot_organizations: readonly ["organizations", "organizationId", "createdAt", "projects", "nextCursor"];
    /** The daily account snapshot's bounded billing-state lookup. */
    readonly account_snapshot_states: readonly ["states", "subscriptionStatus", "planSlug", "recurringAmountCents", "currency", "billingInterval", "cancelScheduledFor", "paused", "paymentFailedAt", "discountState", "isPaying", "paidSubscriptionEndedAt"];
    /** The daily account snapshot's accepted-log-byte windows per organization. */
    readonly account_log_intake: readonly ["intake", "bytesLast24h", "bytesLast7Days", "bytesPreceding7Days", "lastFlowingOn", "bytesSinceTrackingStart"];
    /** The daily account snapshot's GitHub and Slack onboarding steps per organization. */
    readonly organization_onboarding_flags: readonly ["flags", "githubConnectedWithRepos", "slackConnectedWithDefaultChannel"];
    /** Issue activity and outcome reads composed by the daily account job. */
    readonly issue_activity_by_organization: readonly ["activity", "hasIssue", "issuesThisWeek", "issuesLastWeek", "lastHumanIssueEventAt", "lastIssueAt"];
    readonly issue_creation_outcomes: readonly ["issues", "issueId", "organizationId", "projectId", "createdAt", "fixRequested", "fixed", "rejected", "interacted", "nextCursor"];
    /**
     * The stale automation run sweep: runs authorized but never started, and
     * runs whose workflow never recorded completion, before a cutoff, marked
     * timed_out. Answers the ids it marked.
     */
    readonly automation_run_timeouts: readonly ["authorizedNotStartedRunIds", "runningWorkflowRunIds"];
    /**
     * The due cron automation scan (Ed's Q2 ruling): one keyset page of the
     * enabled customer cron automations whose schedule fired in the look-back
     * window, for services/durable-agent's every-minute scheduler. Read-only.
     */
    readonly due_cron_automations: readonly ["dueAutomations", "nextCursor"];
    /**
     * The pending issue-rejection adjustment sweep (ENG-9709, Ed's ruling i):
     * every billing cycle with a pending rejection adjustment, reconciled one
     * cycle at a time. Answers only its counts.
     */
    readonly issue_rejection_adjustments: readonly ["cycles", "applied", "pending", "failed"];
    /**
     * The no-new-issues monitor's health read (ENG-10062): when the newest
     * live issue was created, if after the caller's cutoff. Read-only.
     */
    readonly latest_issue_activity: readonly ["mostRecentAt"];
    /**
     * The no-new-threads monitor's health read (ENG-10062): when the newest
     * regular, visible thread was created, if after the caller's cutoff.
     * Read-only.
     */
    readonly latest_thread_activity: readonly ["mostRecentAt"];
    /**
     * The stale MCP authorizing expiry (ENG-9493): every MCP connection stuck
     * in `authorizing` for over an hour soft-deleted, and every expired,
     * never-consumed MCP OAuth request hard-deleted, in one transaction.
     * Answers only its two counts.
     */
    readonly mcp_authorizing_expiry: readonly ["expiredConnections", "deletedOauthRequests"];
    /**
     * The read-isolation exclusion list (ENG-10514, BYOC foundation "Every
     * reader and loop has an explicit rule"): every project whose ClickHouse
     * target is not shared, for billing parity, the drift check and the
     * empty-log-source reaper to leave out. Read-only.
     */
    readonly projects_on_non_shared_clickhouse_targets: readonly ["projects", "organizationId", "projectId"];
};
export type FleetJobKind = keyof typeof FLEET_JOB_OUTPUT_KEYS;
export declare const isFleetJobKind: (value: string) => value is FleetJobKind;
