export declare const FLEET_JOB_OUTPUT_KEYS: {
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
};
export type FleetJobKind = keyof typeof FLEET_JOB_OUTPUT_KEYS;
export declare const isFleetJobKind: (value: string) => value is FleetJobKind;
