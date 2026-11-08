import type { IssueCategory } from "./issue-types.js";
/**
 * The Sazabi Detection Catalog's 10 signal groups, in catalog order
 * (docs/design/app/seo-content-pages-v2).
 */
export declare const DETECTION_SIGNAL_GROUPS: {
    readonly log_stream_behavior: {
        readonly label: "Log stream behavior";
        readonly description: "Changes in what your services log: new events, missing events and shifts in volume, order or content.";
    };
    readonly user_and_client_behavior: {
        readonly label: "User and client behavior";
        readonly description: "What users and clients experience in the browser and the app.";
    };
    readonly changes_and_deploys: {
        readonly label: "Changes and deploys";
        readonly description: "Behavior that changes with a deploy, a configuration change, a dependency upgrade or a migration.";
    };
    readonly performance: {
        readonly label: "Performance";
        readonly description: "Requests, queries, jobs and startups that get slower.";
    };
    readonly infrastructure_and_capacity: {
        readonly label: "Infrastructure and capacity";
        readonly description: "Resources near their limits, work that falls behind and infrastructure that fails.";
    };
    readonly third_parties_and_upstream: {
        readonly label: "Third parties and upstream";
        readonly description: "Vendors and upstream services that fail, slow down, throttle or change.";
    };
    readonly data_integrity_and_business_outcomes: {
        readonly label: "Data integrity and business outcomes";
        readonly description: "Writes, jobs and business flows that complete with the wrong result.";
    };
    readonly security: {
        readonly label: "Security";
        readonly description: "Attacks, suspicious access, exposed secrets and risky changes.";
    };
    readonly cost: {
        readonly label: "Cost";
        readonly description: "Spend on logs, cloud and models that grows without a matching rise in work.";
    };
    readonly telemetry_health: {
        readonly label: "Telemetry health";
        readonly description: "Telemetry that stops arriving, can't be read or misses what matters.";
    };
};
export type DetectionSignalGroup = keyof typeof DETECTION_SIGNAL_GROUPS;
/**
 * Whether a signal is available to customers
 * (docs/design/app/seo-content-pages-v4):
 *
 * - `live`: the customer sets nothing up. Detection is on by default, or the
 *   Sazabi agent sets up and maintains a sensor for it in each project
 *   (`sensor: true`).
 * - `planned`: on the roadmap, not produced for every project yet.
 *
 * The pull request that turns a signal's detection on for every production
 * project sets its availability; turning it off sets `planned` again.
 */
export declare const DETECTION_SIGNAL_AVAILABILITY: readonly ["live", "planned"];
export type DetectionSignalAvailability = (typeof DETECTION_SIGNAL_AVAILABILITY)[number];
/**
 * Third-party dependency failures, each mapped onto the signal that detects
 * it (docs/design/app/seo-content-pages-v3).
 */
export declare const DEPENDENCY_FAILURES: readonly ["rate-limits", "quota-exhausted", "outages", "webhook-failures"];
export type DependencyFailure = (typeof DEPENDENCY_FAILURES)[number];
export type DetectionSignal = {
    label: string;
    /** What the signal means, in one sentence. */
    description: string;
    /** An illustration, labeled as one wherever it renders. */
    example: string;
    group: DetectionSignalGroup;
    /** The issue categories the signal feeds. */
    categories: readonly IssueCategory[];
    /**
     * The log-source categories (`LOG_SOURCE_CATEGORIES` in
     * `@sazabi/log-source-provider`) whose sources carry the signal. Empty when
     * it comes from code, advisories or other inputs rather than logs. The docs
     * generator rejects unknown values.
     */
    logSourceCategories: readonly string[];
    availability: DetectionSignalAvailability;
    /**
     * Produced by sensors (docs/design/infrastructure/sensors): a built-in
     * sensor or one the Sazabi agent writes for the project. Pages that claim
     * it stay hidden in an environment until the public sensors docs page is
     * published there (seo-content-pages-v4).
     */
    sensor?: boolean;
    dependencyFailures?: readonly DependencyFailure[];
    /**
     * Plain-language sensor examples for one integration (an integration-catalog
     * slug), each drawn from a production sensor, stripped of anything that
     * identifies the customer and reviewed in the pull request that adds it.
     */
    watchFor?: readonly {
        integration: string;
        question: string;
    }[];
};
/**
 * One entry per Detection Catalog signal (v1, November 2026), in catalog
 * order. Entries carry outcomes only: how a signal is produced stays in the
 * sensors design, because the docs site publishes this table in
 * `detection-catalog.json`.
 */
export declare const DETECTION_SIGNALS: {
    readonly novel_event: {
        readonly label: "Novel event";
        readonly description: "A kind of error that has never appeared before.";
        readonly example: 'After a deploy, a new error appears: "failed to save draft: lock timeout".';
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["regression"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
    };
    readonly vanished_event: {
        readonly label: "Vanished event";
        readonly description: "Something that normally happens has stopped, while traffic is normal.";
        readonly example: '"Application submitted" events stop at 2:14pm.';
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["silent_failure", "business_flow_breakage"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly volume_shift: {
        readonly label: "Volume shift";
        readonly description: "An event's rate jumps or drops against its own baseline, aware of time of day and day of week.";
        readonly example: "Password reset emails at 6x a normal Tuesday.";
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["silent_failure", "outage"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly broken_sequence: {
        readonly label: "Broken sequence";
        readonly description: "A step that is normally followed by another now happens without it.";
        readonly example: '"Upload started" with no "upload complete".';
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["silent_failure"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly order_or_timing_change: {
        readonly label: "Order or timing change";
        readonly description: "Steps happen out of order or with longer gaps.";
        readonly example: "A webhook is processed before its record exists.";
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["data_integrity", "silent_failure"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly field_drift: {
        readonly label: "Field drift";
        readonly description: "Values inside events shift: new categories, nulls, empty strings or unusual sizes.";
        readonly example: "company_id: null on 3% of writes.";
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["data_integrity"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly cardinality_jump: {
        readonly label: "Cardinality jump";
        readonly description: "A field suddenly has far more distinct values.";
        readonly example: "Thousands of new cache keys per minute.";
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["capacity_risk", "cost_anomaly"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly quiet_failure_wording: {
        readonly label: "Quiet failure wording";
        readonly description: "Events that describe a failure but are logged as info or debug.";
        readonly example: '"Falling back to default config" 400 times an hour.';
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["silent_failure"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly retry_storm: {
        readonly label: "Retry storm";
        readonly description: "The same operation retried in tight loops.";
        readonly example: "One background job retried 30 times per record.";
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["background_job_failure", "cost_anomaly"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines", "durable_execution"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly correlation_break: {
        readonly label: "Correlation break";
        readonly description: "Two services that normally move together diverge.";
        readonly example: "API requests up, worker jobs flat.";
        readonly group: "log_stream_behavior";
        readonly categories: readonly ["silent_failure", "background_job_failure"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly rage_and_repeat_clicks: {
        readonly label: "Rage and repeat clicks";
        readonly description: "The same control clicked over and over.";
        readonly example: '"Save" clicked 5 times in 10 seconds.';
        readonly group: "user_and_client_behavior";
        readonly categories: readonly ["frontend_breakage", "silent_failure"];
        readonly logSourceCategories: readonly ["sdks", "observability_tools"];
        readonly availability: "planned";
    };
    readonly action_without_effect: {
        readonly label: "Action without effect";
        readonly description: "A click with no server request, or a request with no persisted result.";
        readonly example: "Form submits return 200 but nothing is written.";
        readonly group: "user_and_client_behavior";
        readonly categories: readonly ["silent_failure", "data_integrity"];
        readonly logSourceCategories: readonly ["sdks", "observability_tools", "cloud_platforms"];
        readonly availability: "planned";
    };
    readonly funnel_drop: {
        readonly label: "Funnel drop";
        readonly description: "Step-to-step conversion falls.";
        readonly example: "Signup started to signup completed falls from 80% to 50%.";
        readonly group: "user_and_client_behavior";
        readonly categories: readonly ["business_flow_breakage"];
        readonly logSourceCategories: readonly ["sdks", "observability_tools"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly navigation_loops: {
        readonly label: "Navigation loops";
        readonly description: "Users bounce between the same pages.";
        readonly example: "Settings to billing to settings, repeatedly.";
        readonly group: "user_and_client_behavior";
        readonly categories: readonly ["frontend_breakage"];
        readonly logSourceCategories: readonly ["sdks", "observability_tools"];
        readonly availability: "planned";
    };
    readonly dead_ends: {
        readonly label: "Dead ends";
        readonly description: "Sessions end on error states, blank screens or endless spinners.";
        readonly example: "Spinner on the dashboard for 30+ seconds before the tab closes.";
        readonly group: "user_and_client_behavior";
        readonly categories: readonly ["frontend_breakage"];
        readonly logSourceCategories: readonly ["sdks", "observability_tools"];
        readonly availability: "planned";
    };
    readonly client_errors: {
        readonly label: "Client errors";
        readonly description: "JavaScript exceptions, failed fetches and hydration errors.";
        readonly example: "A new TypeError on one page after a release.";
        readonly group: "user_and_client_behavior";
        readonly categories: readonly ["frontend_breakage"];
        readonly logSourceCategories: readonly ["sdks", "observability_tools"];
        readonly availability: "live";
    };
    readonly web_vitals_regression: {
        readonly label: "Web vitals regression";
        readonly description: "Page load and responsiveness get worse.";
        readonly example: "Interaction latency doubles on one page.";
        readonly group: "user_and_client_behavior";
        readonly categories: readonly ["performance_degradation", "frontend_breakage"];
        readonly logSourceCategories: readonly ["sdks", "observability_tools"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly segment_specific_behavior: {
        readonly label: "Segment-specific behavior";
        readonly description: "Only one browser, OS, app version, region or customer is affected.";
        readonly example: "Only Safari 18 users fail checkout.";
        readonly group: "user_and_client_behavior";
        readonly categories: readonly ["frontend_breakage"];
        readonly logSourceCategories: readonly ["sdks", "observability_tools"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly post_deploy_shift: {
        readonly label: "Post-deploy shift";
        readonly description: "Any other signal that starts within minutes of a deploy, tied to the commit.";
        readonly example: "A novel event plus a funnel drop 4 minutes after a release.";
        readonly group: "changes_and_deploys";
        readonly categories: readonly ["regression"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly config_or_flag_change: {
        readonly label: "Config or flag change";
        readonly description: "Behavior changes after a feature flag, environment variable or infrastructure change.";
        readonly example: "A flag rollout to 10% matches 10% of failed saves.";
        readonly group: "changes_and_deploys";
        readonly categories: readonly ["regression", "configuration_drift"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly dependency_change: {
        readonly label: "Dependency change";
        readonly description: "An upgraded package lines up with new behavior.";
        readonly example: "An ORM upgrade, then slow queries appear.";
        readonly group: "changes_and_deploys";
        readonly categories: readonly ["regression"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly error_swallowing_added: {
        readonly label: "Error swallowing added";
        readonly description: "A commit adds catch-all error handling on an important path.";
        readonly example: "A controller now rescues every exception and returns success.";
        readonly group: "changes_and_deploys";
        readonly categories: readonly ["silent_failure", "regression"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly migration_effect: {
        readonly label: "Migration effect";
        readonly description: "A schema migration changes query behavior.";
        readonly example: "An index is dropped and query time rises 20x.";
        readonly group: "changes_and_deploys";
        readonly categories: readonly ["performance_degradation", "regression"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines", "databases"];
        readonly availability: "planned";
    };
    readonly gradual_latency_drift: {
        readonly label: "Gradual latency drift";
        readonly description: "Slow creep over days or weeks that no one notices.";
        readonly example: "Search gets 5% slower every week.";
        readonly group: "performance";
        readonly categories: readonly ["performance_degradation"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly latency_step_change: {
        readonly label: "Latency step change";
        readonly description: "A sudden jump in latency.";
        readonly example: "Page load goes from 300ms to 1.2s after a deploy.";
        readonly group: "performance";
        readonly categories: readonly ["performance_degradation", "regression"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly tail_latency: {
        readonly label: "Tail latency";
        readonly description: "Only the slowest requests get worse.";
        readonly example: "p99 triples while the median is flat.";
        readonly group: "performance";
        readonly categories: readonly ["performance_degradation"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly slow_query_emergence: {
        readonly label: "Slow query emergence";
        readonly description: "A new slow query, or a new N+1 query pattern.";
        readonly example: "One page now makes 400 queries.";
        readonly group: "performance";
        readonly categories: readonly ["performance_degradation"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines", "databases"];
        readonly availability: "planned";
    };
    readonly boot_and_cold_start_creep: {
        readonly label: "Boot and cold-start creep";
        readonly description: "Services take longer to start.";
        readonly example: "Deploys take 3x longer to become healthy.";
        readonly group: "performance";
        readonly categories: readonly ["performance_degradation", "capacity_risk"];
        readonly logSourceCategories: readonly ["cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly queue_wait_growth: {
        readonly label: "Queue wait growth";
        readonly description: "Work waits longer before it starts.";
        readonly example: "Emails sent 20 minutes after the trigger.";
        readonly group: "performance";
        readonly categories: readonly ["background_job_failure", "performance_degradation"];
        readonly logSourceCategories: readonly ["durable_execution", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly approaching_a_limit: {
        readonly label: "Approaching a limit";
        readonly description: "Cloud quotas, burst credits, API rate limits, file handles or plan limits run low.";
        readonly example: "File system burst credits draining, which later shows up as slow boots.";
        readonly group: "infrastructure_and_capacity";
        readonly categories: readonly ["capacity_risk"];
        readonly logSourceCategories: readonly ["cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
        readonly dependencyFailures: readonly ["quota-exhausted"];
    };
    readonly saturation: {
        readonly label: "Saturation";
        readonly description: "CPU, memory, connection pools, thread pools or disk near full.";
        readonly example: "Database connection pool at 95% during peaks.";
        readonly group: "infrastructure_and_capacity";
        readonly categories: readonly ["capacity_risk"];
        readonly logSourceCategories: readonly ["cloud_platforms", "databases"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly backlog_growth: {
        readonly label: "Backlog growth";
        readonly description: "A queue grows faster than it drains.";
        readonly example: "Job queue grows for 6 hours straight.";
        readonly group: "infrastructure_and_capacity";
        readonly categories: readonly ["background_job_failure", "capacity_risk"];
        readonly logSourceCategories: readonly ["durable_execution", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly missed_schedule: {
        readonly label: "Missed schedule";
        readonly description: "A cron job didn't run, ran twice or ran long.";
        readonly example: "Nightly export skipped on Sunday.";
        readonly group: "infrastructure_and_capacity";
        readonly categories: readonly ["background_job_failure"];
        readonly logSourceCategories: readonly ["durable_execution", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly crash_loops: {
        readonly label: "Crash loops";
        readonly description: "Restarts, out-of-memory kills and failing health checks.";
        readonly example: "Worker restarts every 12 minutes.";
        readonly group: "infrastructure_and_capacity";
        readonly categories: readonly ["outage", "capacity_risk"];
        readonly logSourceCategories: readonly ["cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly expiry_ahead: {
        readonly label: "Expiry ahead";
        readonly description: "Certificates, domains, API tokens or OAuth grants close to expiring.";
        readonly example: "A TLS certificate expires in 6 days.";
        readonly group: "infrastructure_and_capacity";
        readonly categories: readonly ["capacity_risk"];
        readonly logSourceCategories: readonly ["cloud_platforms", "security"];
        readonly availability: "planned";
    };
    readonly cloud_provider_errors: {
        readonly label: "Cloud provider errors";
        readonly description: "Throttling or errors from AWS or GCP APIs.";
        readonly example: "S3 slowdowns during uploads.";
        readonly group: "infrastructure_and_capacity";
        readonly categories: readonly ["dependency_failure"];
        readonly logSourceCategories: readonly ["cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly vendor_degradation: {
        readonly label: "Vendor degradation";
        readonly description: "Errors or latency from a provider you depend on.";
        readonly example: "Payment API latency triples.";
        readonly group: "third_parties_and_upstream";
        readonly categories: readonly ["dependency_failure"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
        readonly dependencyFailures: readonly ["outages"];
    };
    readonly webhook_gap: {
        readonly label: "Webhook gap";
        readonly description: "Expected inbound webhooks stop arriving.";
        readonly example: "No email delivery events for an hour.";
        readonly group: "third_parties_and_upstream";
        readonly categories: readonly ["dependency_failure", "silent_failure"];
        readonly logSourceCategories: readonly ["webhooks", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
        readonly dependencyFailures: readonly ["webhook-failures"];
    };
    readonly vendor_rate_limiting: {
        readonly label: "Vendor rate limiting";
        readonly description: "A vendor throttles your requests.";
        readonly example: "429s from your LLM provider at peak.";
        readonly group: "third_parties_and_upstream";
        readonly categories: readonly ["dependency_failure", "capacity_risk"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines", "ai_frameworks"];
        readonly availability: "live";
        readonly sensor: true;
        readonly dependencyFailures: readonly ["rate-limits"];
    };
    readonly contract_change: {
        readonly label: "Contract change";
        readonly description: "A vendor's response shape changes.";
        readonly example: "A field your code relies on starts arriving empty.";
        readonly group: "third_parties_and_upstream";
        readonly categories: readonly ["dependency_failure", "data_integrity"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly vendor_incident_match: {
        readonly label: "Vendor incident match";
        readonly description: "A provider's status page incident lines up with your errors.";
        readonly example: "Your login errors match an identity provider incident.";
        readonly group: "third_parties_and_upstream";
        readonly categories: readonly ["dependency_failure"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly llm_behavior_drift: {
        readonly label: "LLM behavior drift";
        readonly description: "Model outputs change: length, refusals, malformed JSON or token use.";
        readonly example: "Structured output parse failures go from 0.1% to 4%.";
        readonly group: "third_parties_and_upstream";
        readonly categories: readonly ["regression", "dependency_failure"];
        readonly logSourceCategories: readonly ["ai_frameworks"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly write_without_persistence: {
        readonly label: "Write without persistence";
        readonly description: "A save is acknowledged but never shows up later.";
        readonly example: "The save button that doesn't actually save.";
        readonly group: "data_integrity_and_business_outcomes";
        readonly categories: readonly ["silent_failure", "data_integrity"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines", "databases"];
        readonly availability: "planned";
    };
    readonly duplicate_processing: {
        readonly label: "Duplicate processing";
        readonly description: "The same event, job or payment handled twice.";
        readonly example: "Two welcome emails per signup.";
        readonly group: "data_integrity_and_business_outcomes";
        readonly categories: readonly ["data_integrity", "background_job_failure"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines", "durable_execution"];
        readonly availability: "planned";
    };
    readonly reconciliation_mismatch: {
        readonly label: "Reconciliation mismatch";
        readonly description: "Counts disagree between systems.";
        readonly example: "Payments captured does not match orders created.";
        readonly group: "data_integrity_and_business_outcomes";
        readonly categories: readonly ["data_integrity"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly business_metric_drift: {
        readonly label: "Business metric drift";
        readonly description: "Signups, applications, payments or messages are out of range for this hour.";
        readonly example: "Applications down 35% versus the same hour last week.";
        readonly group: "data_integrity_and_business_outcomes";
        readonly categories: readonly ["business_flow_breakage"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly empty_output: {
        readonly label: "Empty output";
        readonly description: "Jobs report success but produce nothing.";
        readonly example: "Daily digest job sends zero emails.";
        readonly group: "data_integrity_and_business_outcomes";
        readonly categories: readonly ["background_job_failure", "silent_failure"];
        readonly logSourceCategories: readonly ["durable_execution", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly stale_data: {
        readonly label: "Stale data";
        readonly description: "Caches and sync jobs stop refreshing.";
        readonly example: "Directory data is three days old.";
        readonly group: "data_integrity_and_business_outcomes";
        readonly categories: readonly ["data_integrity", "background_job_failure"];
        readonly logSourceCategories: readonly ["durable_execution", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly authentication_anomalies: {
        readonly label: "Authentication anomalies";
        readonly description: "Failed-login bursts, credential stuffing, impossible travel and session reuse.";
        readonly example: "2,000 failed logins across 900 accounts from rotating IPs.";
        readonly group: "security";
        readonly categories: readonly ["active_attack", "suspicious_access"];
        readonly logSourceCategories: readonly ["security", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly access_anomalies: {
        readonly label: "Access anomalies";
        readonly description: "One actor reads far more data than normal, or walks through IDs in sequence.";
        readonly example: "A user requests records 1 through 5,000 in order.";
        readonly group: "security";
        readonly categories: readonly ["suspicious_access"];
        readonly logSourceCategories: readonly ["security", "cloud_platforms"];
        readonly availability: "planned";
    };
    readonly privilege_changes: {
        readonly label: "Privilege changes";
        readonly description: "New admins, role escalations and new API keys.";
        readonly example: "An admin role granted at 3am from a new location.";
        readonly group: "security";
        readonly categories: readonly ["suspicious_access"];
        readonly logSourceCategories: readonly ["security"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly attack_payloads: {
        readonly label: "Attack payloads";
        readonly description: "SQL injection, path traversal, SSRF or template injection attempts in requests.";
        readonly example: "../../etc/passwd in a file parameter.";
        readonly group: "security";
        readonly categories: readonly ["active_attack"];
        readonly logSourceCategories: readonly ["security", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly bots_and_scraping: {
        readonly label: "Bots and scraping";
        readonly description: "High-rate clients, headless browsers and rotating IPs.";
        readonly example: "One network scrapes the company directory.";
        readonly group: "security";
        readonly categories: readonly ["abuse_and_fraud"];
        readonly logSourceCategories: readonly ["security", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly unusual_data_egress: {
        readonly label: "Unusual data egress";
        readonly description: "Large exports or responses to a single actor.";
        readonly example: "A CSV export 50x larger than usual.";
        readonly group: "security";
        readonly categories: readonly ["suspicious_access"];
        readonly logSourceCategories: readonly ["security", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly secrets_or_personal_data_in_logs: {
        readonly label: "Secrets or personal data in logs";
        readonly description: "Tokens, keys, emails or ID numbers written to logs.";
        readonly example: "An API key printed in an error message.";
        readonly group: "security";
        readonly categories: readonly ["exposure", "observability_gap"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly new_advisory_affecting_you: {
        readonly label: "New advisory affecting you";
        readonly description: "A newly published CVE matches your dependencies or runtime.";
        readonly example: "A framework advisory matches your lockfile within the hour.";
        readonly group: "security";
        readonly categories: readonly ["exposure"];
        readonly logSourceCategories: readonly [];
        readonly availability: "planned";
    };
    readonly exploit_attempts: {
        readonly label: "Exploit attempts";
        readonly description: "Traffic that matches a known exploit against your stack.";
        readonly example: "Probes for a new advisory's vulnerable endpoint.";
        readonly group: "security";
        readonly categories: readonly ["active_attack"];
        readonly logSourceCategories: readonly ["security", "cloud_platforms"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly risky_code: {
        readonly label: "Risky code";
        readonly description: "Code scanning flags missing auth checks, auth bypasses or injection risks in new commits.";
        readonly example: "An endpoint added without an authorization check.";
        readonly group: "security";
        readonly categories: readonly ["exposure"];
        readonly logSourceCategories: readonly [];
        readonly availability: "planned";
    };
    readonly supply_chain: {
        readonly label: "Supply chain";
        readonly description: "A dependency changes hands, gets typosquatted or is flagged malicious.";
        readonly example: "A package you use publishes a compromised version.";
        readonly group: "security";
        readonly categories: readonly ["exposure"];
        readonly logSourceCategories: readonly [];
        readonly availability: "planned";
    };
    readonly rogue_agents: {
        readonly label: "Rogue agents";
        readonly description: "AI agents, yours or a third party's, act outside their normal scope.";
        readonly example: "A support agent calls an admin endpoint it has never used.";
        readonly group: "security";
        readonly categories: readonly ["agent_misbehavior"];
        readonly logSourceCategories: readonly ["ai_frameworks", "coding_agents", "cloud_agents"];
        readonly availability: "planned";
    };
    readonly log_volume_spike: {
        readonly label: "Log volume spike";
        readonly description: "A deploy suddenly gets very noisy.";
        readonly example: "One debug line now logs 40M times a day.";
        readonly group: "cost";
        readonly categories: readonly ["cost_anomaly"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly cloud_spend_anomaly: {
        readonly label: "Cloud spend anomaly";
        readonly description: "Spend jumps for a service or resource.";
        readonly example: "Data transfer costs double overnight.";
        readonly group: "cost";
        readonly categories: readonly ["cost_anomaly"];
        readonly logSourceCategories: readonly ["cloud_platforms"];
        readonly availability: "planned";
    };
    readonly llm_spend_spike: {
        readonly label: "LLM spend spike";
        readonly description: "Token usage jumps by feature or customer.";
        readonly example: "One customer's agent loop burns a week of budget in a day.";
        readonly group: "cost";
        readonly categories: readonly ["cost_anomaly", "agent_misbehavior"];
        readonly logSourceCategories: readonly ["ai_frameworks", "coding_agents"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly service_went_quiet: {
        readonly label: "Service went quiet";
        readonly description: "A source stops sending logs.";
        readonly example: "The worker fleet goes silent after a config change.";
        readonly group: "telemetry_health";
        readonly categories: readonly ["observability_gap", "outage"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "live";
        readonly sensor: true;
    };
    readonly unreadable_format: {
        readonly label: "Unreadable format";
        readonly description: "A new log format can't be parsed.";
        readonly example: "A logger upgrade switches to a new format.";
        readonly group: "telemetry_health";
        readonly categories: readonly ["observability_gap"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly blind_spot: {
        readonly label: "Blind spot";
        readonly description: "An important route or job has no telemetry.";
        readonly example: "The new payments endpoint logs nothing.";
        readonly group: "telemetry_health";
        readonly categories: readonly ["observability_gap"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
    readonly clock_skew: {
        readonly label: "Clock skew";
        readonly description: "Timestamps drift between sources.";
        readonly example: "One host is 4 minutes behind.";
        readonly group: "telemetry_health";
        readonly categories: readonly ["observability_gap", "data_integrity"];
        readonly logSourceCategories: readonly ["cloud_platforms", "sdks", "observability_tools", "telemetry_pipelines"];
        readonly availability: "planned";
    };
};
export type DetectionSignalKey = keyof typeof DETECTION_SIGNALS;
/** The signals in catalog order. */
export declare const DETECTION_SIGNAL_KEYS: [DetectionSignalKey, ...DetectionSignalKey[]];
