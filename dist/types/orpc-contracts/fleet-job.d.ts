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
    /**
     * The daily account snapshot's connection counts per organization
     * (ENG-11178): live integration connections and their providers, connected
     * MCP connectors, and sandbox CLI connections of live projects. Read-only.
     */
    readonly organization_connection_counts: readonly ["counts", "integrations", "integrationProviders", "mcpConnectors", "sandboxClis"];
    /**
     * The daily account snapshot's usage per billable unit for one UTC day,
     * and the first accepted-log-byte time, per organization (ENG-11178).
     * Read-only.
     */
    readonly account_daily_usage: readonly ["usage", "quantities", "firstAcceptedBytesAt"];
    /**
     * The component registry outbox drain's claim (ENG-8294): in one
     * transaction, every expired component write gate cleared, every terminal
     * effect past retention pruned, then one bounded batch of pending effects
     * claimed under a fresh claim token. Answers the two counts and the claimed
     * rows, each with its tenant, operation and payload, which the drain then
     * dispatches.
     */
    readonly component_registry_outbox_claim: readonly ["expiredGateCount", "prunedCount", "rows", "id", "organizationId", "projectId", "operationId", "effectType", "dedupeKey", "payload", "createdAt", "claimedAt", "claimToken", "attemptCount"];
    /**
     * One claimed component registry outbox effect marked dispatched, by its id
     * and the claim token it was claimed under (ENG-8294). Answers only whether
     * the claim still held.
     */
    readonly component_registry_outbox_completion: readonly ["completed"];
    /**
     * One claimed component registry outbox effect's failed attempt recorded,
     * by its id and claim token, terminal once it used its last attempt
     * (ENG-8294). Answers only whether it went terminal and its attempt count,
     * or null when the claim no longer held.
     */
    readonly component_registry_outbox_failure: readonly ["failure", "terminal", "attemptCount"];
    /** Issue activity and outcome reads composed by the daily account job. */
    readonly issue_activity_by_organization: readonly ["activity", "hasIssue", "issuesThisWeek", "issuesLastWeek", "lastHumanIssueEventAt", "lastIssueAt", "firstBillableIssueAt"];
    readonly issue_creation_outcomes: readonly ["issues", "issueId", "organizationId", "projectId", "createdAt", "fixRequested", "fixed", "rejected", "interacted", "nextCursor"];
    /**
     * The issue recall audit's inactivity resolutions (ENG-8113, ENG-8294):
     * every resolution the inactivity sweep recorded in a window, across every
     * tenant, with its issue, tenant, time and the activity time the sweep went
     * by. Read-only.
     */
    readonly issue_inactive_resolutions: readonly ["resolutions", "issueId", "organizationId", "projectId", "resolvedAt", "lastActivityAt"];
    /**
     * The issue recall audit's duplicates born ignored (ENG-8113, ENG-8294):
     * every issue created ignored as a possible duplicate in a window, across
     * every tenant, with its tenant, the issue it duplicates and whether that
     * issue was closed at the time. Read-only.
     */
    readonly issue_born_ignored_duplicates: readonly ["duplicates", "issueId", "organizationId", "projectId", "createdAt", "duplicateOfIssueId", "canonicalClosedAtCreation"];
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
     * The token usage materializer's source read (ENG-8294): every billable,
     * completed, live run that did not error, by completion time inside a
     * window or by id, joined to its live steps' model and token counts, for
     * services/temporal-consumer's materializer activity to turn into usage
     * facts. Read-only.
     */
    readonly billable_run_token_rows: readonly ["rows", "organizationId", "projectId", "runId", "usageOccurredAt", "stepId", "modelId", "inputTokens", "cachedInputTokens", "cacheWriteInputTokens", "outputTokens", "textTokens", "reasoningTokens"];
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
    /**
     * One plane's cloud by its plane code (owned planes, "Every plane row names
     * its cloud"), for the admin API's staged-run executor read to compare with
     * a run's signed cloud, plus the plane's own ClickHouse target and how many
     * live projects it holds, which a plane teardown's start reads (Ed's ruling
     * (a), RULING #151). Read-only, and it answers nothing else.
     */
    readonly plane_cloud: readonly ["cloud", "clickhouseTarget", "liveProjectCount"];
    /**
     * Every plane on one ClickHouse target that has a customer plane file, with
     * its owner organization (BYOC provisioning design, row 18), for a staged
     * run's `attachment_state_keys`. Read-only.
     */
    readonly clickhouse_target_planes: readonly ["planes"];
    /**
     * Every ClickHouse target's code, kind, status and AWS region (architect
     * ruling #166, RULING #264), for Exec's staged-run start to sign a
     * bring-up's preflight facts. Read-only.
     */
    readonly clickhouse_targets: readonly ["targets"];
    /**
     * One ClickHouse target's ClickHouse Cloud service ID by its code, or null
     * until its service stage writes one (architect RULING #242), for the
     * provisioner's candidate-test `narrow`. Read-only, and it answers nothing
     * else.
     */
    readonly clickhouse_target_service_id: readonly ["code", "cloudServiceId"];
};
export type FleetJobKind = keyof typeof FLEET_JOB_OUTPUT_KEYS;
export declare const isFleetJobKind: (value: string) => value is FleetJobKind;
