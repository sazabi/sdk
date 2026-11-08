import { z } from "zod";
/**
 * The Detection Catalog's four issue groups (`issues.types`) and its 18 issue
 * types (`issues.categories`), each under the group it belongs to
 * (docs/design/app/issue-types-v2). Rules route on groups; categories are
 * labels only. The prompt, CLI help and dashboard render this one table, as
 * they render `ISSUE_SEVERITY_RUBRIC`.
 */
export declare const ISSUE_CLASSIFICATION: {
    readonly reliability: {
        readonly label: "Reliability";
        readonly description: "Users or systems see failures, slowness or lost work.";
        readonly categories: {
            readonly outage: {
                readonly label: "Outage";
                readonly description: "A service, a flow most users depend on, or a whole feature is down or failing for most attempts.";
            };
            readonly silent_failure: {
                readonly label: "Silent failure";
                readonly description: "Work fails or stops without an error anyone sees: dropped events, skipped jobs, empty results.";
            };
            readonly regression: {
                readonly label: "Regression";
                readonly description: "Something that worked before a deploy, configuration or dependency change no longer does.";
            };
            readonly performance_degradation: {
                readonly label: "Performance degradation";
                readonly description: "Latency, throughput or timeouts got worse enough that users or callers notice.";
            };
            readonly capacity_risk: {
                readonly label: "Capacity risk";
                readonly description: "A resource is near its limit: disk, memory, connections, quotas, rate limits or an expiring certificate.";
            };
            readonly background_job_failure: {
                readonly label: "Background job failure";
                readonly description: "Scheduled, queued or batch work fails, retries without end or falls behind.";
            };
            readonly dependency_failure: {
                readonly label: "Dependency failure";
                readonly description: "A database, cache, queue or third-party API the service relies on fails or slows down.";
            };
            readonly frontend_breakage: {
                readonly label: "Frontend breakage";
                readonly description: "Pages, screens or client code crash, fail to load or render wrong for users.";
            };
        };
    };
    readonly correctness: {
        readonly label: "Correctness";
        readonly description: "The system runs but produces wrong results or state.";
        readonly categories: {
            readonly data_integrity: {
                readonly label: "Data integrity";
                readonly description: "Data is wrong, duplicated, lost or inconsistent between stores.";
            };
            readonly business_flow_breakage: {
                readonly label: "Business flow breakage";
                readonly description: "A business flow such as signup, checkout, billing or fulfilment completes with the wrong outcome.";
            };
            readonly configuration_drift: {
                readonly label: "Configuration drift";
                readonly description: "Configuration, flags or infrastructure differ from what was intended or between environments.";
            };
        };
    };
    readonly security: {
        readonly label: "Security";
        readonly description: "Someone is attacking, abusing or could exploit the system or its data.";
        readonly categories: {
            readonly active_attack: {
                readonly label: "Active attack";
                readonly description: "Attack payloads, exploit attempts or authentication attacks that reach the application, not traffic the firewall blocked entirely.";
            };
            readonly suspicious_access: {
                readonly label: "Suspicious access";
                readonly description: "Unusual logins, privilege changes or data egress by an account or credential.";
            };
            readonly exposure: {
                readonly label: "Exposure";
                readonly description: "A secret in logs, a vulnerable dependency, risky code or configuration that could be exploited.";
            };
            readonly abuse_and_fraud: {
                readonly label: "Abuse and fraud";
                readonly description: "Bots, scraping, fake signups, promotion abuse or payment fraud.";
            };
            readonly agent_misbehavior: {
                readonly label: "Agent misbehavior";
                readonly description: "An AI agent acts outside its instructions: prompt injection, unexpected tool use or a runaway loop.";
            };
        };
    };
    readonly efficiency: {
        readonly label: "Efficiency";
        readonly description: "Waste or blind spots: spend that grew without reason, or telemetry that went missing.";
        readonly categories: {
            readonly cost_anomaly: {
                readonly label: "Cost anomaly";
                readonly description: "Spend or usage on infrastructure, vendors or models rose without a matching rise in work.";
            };
            readonly observability_gap: {
                readonly label: "Observability gap";
                readonly description: "Logs, metrics or traces a team relies on stopped arriving, lost fields or became too noisy to use.";
            };
        };
    };
};
export type IssueType = keyof typeof ISSUE_CLASSIFICATION;
export type IssueCategory = {
    [T in IssueType]: keyof (typeof ISSUE_CLASSIFICATION)[T]["categories"];
}[IssueType];
/** The four groups in display (and enum) order. */
export declare const ISSUE_TYPES: [IssueType, ...IssueType[]];
/** The 18 categories in display (and enum) order. */
export declare const ISSUE_CATEGORIES: [IssueCategory, ...IssueCategory[]];
export declare const DEFAULT_ISSUE_TYPES: readonly IssueType[];
/** The group a category belongs to. */
export declare const ISSUE_CATEGORY_TYPE: Record<IssueCategory, IssueType>;
export declare const issueTypeLabel: (type: IssueType) => string;
export declare const issueCategoryLabel: (category: IssueCategory) => string;
export type IssueClassification = {
    types: IssueType[];
    categories: IssueCategory[];
};
/**
 * The stored form of a classification: deduplicated, in enum order, with
 * every category's group among the types and the default group when nothing
 * else is set.
 */
export declare const normalizeIssueClassification: ({ types, categories, }: {
    types?: readonly IssueType[];
    categories?: readonly IssueCategory[];
}) => IssueClassification;
/**
 * The classification an edit leaves. Omitted fields keep their current
 * value. Removing a group removes the categories it already had; a category
 * the edit adds brings its group back.
 */
export declare const applyIssueClassificationEdit: ({ current, types, categories, }: {
    current: IssueClassification;
    types?: readonly IssueType[];
    categories?: readonly IssueCategory[];
}) => IssueClassification;
/**
 * The words for one `updated` history event that added or removed a type or
 * category, or null for any other event's metadata.
 */
export declare const issueClassificationChange: (metadata: Record<string, unknown> | null | undefined) => {
    verb: string;
    label: string;
} | null;
export declare const IssueTypeSchema: z.ZodEnum<{
    correctness: "correctness";
    efficiency: "efficiency";
    reliability: "reliability";
    security: "security";
}>;
export declare const IssueCategorySchema: z.ZodEnum<{
    abuse_and_fraud: "abuse_and_fraud";
    active_attack: "active_attack";
    agent_misbehavior: "agent_misbehavior";
    background_job_failure: "background_job_failure";
    business_flow_breakage: "business_flow_breakage";
    capacity_risk: "capacity_risk";
    configuration_drift: "configuration_drift";
    cost_anomaly: "cost_anomaly";
    data_integrity: "data_integrity";
    dependency_failure: "dependency_failure";
    exposure: "exposure";
    frontend_breakage: "frontend_breakage";
    observability_gap: "observability_gap";
    outage: "outage";
    performance_degradation: "performance_degradation";
    regression: "regression";
    silent_failure: "silent_failure";
    suspicious_access: "suspicious_access";
}>;
export declare const IssueTypesSchema: z.ZodArray<z.ZodEnum<{
    correctness: "correctness";
    efficiency: "efficiency";
    reliability: "reliability";
    security: "security";
}>>;
export declare const IssueCategoriesSchema: z.ZodArray<z.ZodEnum<{
    abuse_and_fraud: "abuse_and_fraud";
    active_attack: "active_attack";
    agent_misbehavior: "agent_misbehavior";
    background_job_failure: "background_job_failure";
    business_flow_breakage: "business_flow_breakage";
    capacity_risk: "capacity_risk";
    configuration_drift: "configuration_drift";
    cost_anomaly: "cost_anomaly";
    data_integrity: "data_integrity";
    dependency_failure: "dependency_failure";
    exposure: "exposure";
    frontend_breakage: "frontend_breakage";
    observability_gap: "observability_gap";
    outage: "outage";
    performance_degradation: "performance_degradation";
    regression: "regression";
    silent_failure: "silent_failure";
    suspicious_access: "suspicious_access";
}>>;
