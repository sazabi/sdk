import { z } from "zod";
export declare const CreateIssueInputObjectSchema: z.ZodObject<{
    sourceThreadId: z.ZodOptional<z.ZodString>;
    clientRequestId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    contentMdx: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    severity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        correctness: "correctness";
        efficiency: "efficiency";
        reliability: "reliability";
        security: "security";
    }>>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodEnum<{
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
    }>>>;
    componentId: z.ZodOptional<z.ZodString>;
    statusStartedAt: z.ZodOptional<z.ZodString>;
    suspectedPullRequest: z.ZodOptional<z.ZodObject<{
        provider: z.ZodDefault<z.ZodEnum<{
            bitbucket: "bitbucket";
            gitcafe: "gitcafe";
            github: "github";
        }>>;
        repositoryFullName: z.ZodString;
        number: z.ZodNumber;
    }, z.core.$strip>>;
    sample: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const CreateIssueInputSchema: z.ZodObject<{
    sourceThreadId: z.ZodOptional<z.ZodString>;
    clientRequestId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    contentMdx: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    severity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        correctness: "correctness";
        efficiency: "efficiency";
        reliability: "reliability";
        security: "security";
    }>>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodEnum<{
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
    }>>>;
    componentId: z.ZodOptional<z.ZodString>;
    statusStartedAt: z.ZodOptional<z.ZodString>;
    suspectedPullRequest: z.ZodOptional<z.ZodObject<{
        provider: z.ZodDefault<z.ZodEnum<{
            bitbucket: "bitbucket";
            gitcafe: "gitcafe";
            github: "github";
        }>>;
        repositoryFullName: z.ZodString;
        number: z.ZodNumber;
    }, z.core.$strip>>;
    sample: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateIssueInput = z.infer<typeof CreateIssueInputSchema>;
