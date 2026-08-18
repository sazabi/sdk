import { z } from "zod";
export declare const ComponentSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    origin: z.ZodEnum<{
        code_detected: "code_detected";
        log_observed: "log_observed";
        user_declared: "user_declared";
    }>;
    lifecycle: z.ZodEnum<{
        active: "active";
        merged: "merged";
        retired: "retired";
    }>;
    observationState: z.ZodEnum<{
        observed: "observed";
        stale: "stale";
        unobserved: "unobserved";
    }>;
    registryRevision: z.ZodNumber;
    canonicalComponentId: z.ZodString;
    mergedIntoComponentId: z.ZodNullable<z.ZodString>;
    currentStatus: z.ZodEnum<{
        degraded: "degraded";
        operational: "operational";
        outage: "outage";
    }>;
    firstSeenAt: z.ZodString;
    lastSeenAt: z.ZodString;
    deletedAt: z.ZodNullable<z.ZodString>;
    retiredAt: z.ZodNullable<z.ZodString>;
    retirementReason: z.ZodNullable<z.ZodString>;
    legacyStateUnknown: z.ZodBoolean;
}, z.core.$strip>;
export type Component = z.infer<typeof ComponentSchema>;
export declare const ListComponentsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    includeDeleted: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>;
export type ListComponentsInput = z.infer<typeof ListComponentsInputSchema>;
export declare const ListComponentsOutputSchema: z.ZodObject<{
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
        registryRevision: z.ZodNumber;
        canonicalComponentId: z.ZodString;
        mergedIntoComponentId: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
        retiredAt: z.ZodNullable<z.ZodString>;
        retirementReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListComponentsOutput = z.infer<typeof ListComponentsOutputSchema>;
export declare const GetComponentInputSchema: z.ZodObject<{
    componentId: z.ZodString;
}, z.core.$strip>;
export type GetComponentInput = z.infer<typeof GetComponentInputSchema>;
export declare const GetComponentOutputSchema: z.ZodObject<{
    component: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
        registryRevision: z.ZodNumber;
        canonicalComponentId: z.ZodString;
        mergedIntoComponentId: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
        retiredAt: z.ZodNullable<z.ZodString>;
        retirementReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetComponentOutput = z.infer<typeof GetComponentOutputSchema>;
export declare const RegisterComponentInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodString>;
    origin: z.ZodOptional<z.ZodEnum<{
        code_detected: "code_detected";
        log_observed: "log_observed";
    }>>;
}, z.core.$strip>;
export type RegisterComponentInput = z.infer<typeof RegisterComponentInputSchema>;
export declare const RegisterComponentOutputSchema: z.ZodObject<{
    component: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
        registryRevision: z.ZodNumber;
        canonicalComponentId: z.ZodString;
        mergedIntoComponentId: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
        retiredAt: z.ZodNullable<z.ZodString>;
        retirementReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RegisterComponentOutput = z.infer<typeof RegisterComponentOutputSchema>;
export declare const RenameComponentInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    name: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
}, z.core.$strip>;
export type RenameComponentInput = z.infer<typeof RenameComponentInputSchema>;
export declare const RenameComponentOutputSchema: z.ZodObject<{
    component: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
        registryRevision: z.ZodNumber;
        canonicalComponentId: z.ZodString;
        mergedIntoComponentId: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
        retiredAt: z.ZodNullable<z.ZodString>;
        retirementReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RenameComponentOutput = z.infer<typeof RenameComponentOutputSchema>;
export declare const DeregisterComponentInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeregisterComponentInput = z.infer<typeof DeregisterComponentInputSchema>;
export declare const ComponentRetirementPreviewSchema: z.ZodObject<{
    requestedComponentId: z.ZodString;
    canonicalComponentId: z.ZodString;
    canonicalComponentName: z.ZodString;
    lifecycle: z.ZodEnum<{
        active: "active";
        retired: "retired";
    }>;
    affectedComponentIds: z.ZodArray<z.ZodString>;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    requiresCanonicalGroupConfirmation: z.ZodBoolean;
    recommendationScopeEnabled: z.ZodLiteral<false>;
    dependents: z.ZodObject<{
        openIssueIds: z.ZodArray<z.ZodString>;
        activeComponentIssueIds: z.ZodArray<z.ZodString>;
        automationBindingIds: z.ZodArray<z.ZodString>;
        notificationRuleIds: z.ZodArray<z.ZodString>;
        dataSourceMappingIds: z.ZodArray<z.ZodString>;
        observationIds: z.ZodArray<z.ZodString>;
        relationshipIds: z.ZodArray<z.ZodString>;
        recommendationScopeIds: z.ZodArray<z.ZodString>;
        externalIncidentIds: z.ZodArray<z.ZodString>;
        authorizedDeliveryIds: z.ZodArray<z.ZodString>;
        authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type ComponentRetirementPreview = z.infer<typeof ComponentRetirementPreviewSchema>;
export declare const DeregisterComponentOutputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"observation_withdrawn">;
    componentId: z.ZodString;
    sourceType: z.ZodLiteral<"secret_key">;
    withdrawn: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"retirement_confirmation_required">;
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        lifecycle: z.ZodEnum<{
            active: "active";
            retired: "retired";
        }>;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        requiresCanonicalGroupConfirmation: z.ZodBoolean;
        recommendationScopeEnabled: z.ZodLiteral<false>;
        dependents: z.ZodObject<{
            openIssueIds: z.ZodArray<z.ZodString>;
            activeComponentIssueIds: z.ZodArray<z.ZodString>;
            automationBindingIds: z.ZodArray<z.ZodString>;
            notificationRuleIds: z.ZodArray<z.ZodString>;
            dataSourceMappingIds: z.ZodArray<z.ZodString>;
            observationIds: z.ZodArray<z.ZodString>;
            relationshipIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
            externalIncidentIds: z.ZodArray<z.ZodString>;
            authorizedDeliveryIds: z.ZodArray<z.ZodString>;
            authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>], "status">;
export type DeregisterComponentOutput = z.infer<typeof DeregisterComponentOutputSchema>;
export declare const listComponents: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    includeDeleted: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>, z.ZodObject<{
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
        registryRevision: z.ZodNumber;
        canonicalComponentId: z.ZodString;
        mergedIntoComponentId: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
        retiredAt: z.ZodNullable<z.ZodString>;
        retirementReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const getComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    component: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
        registryRevision: z.ZodNumber;
        canonicalComponentId: z.ZodString;
        mergedIntoComponentId: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
        retiredAt: z.ZodNullable<z.ZodString>;
        retirementReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const registerComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodString>;
    origin: z.ZodOptional<z.ZodEnum<{
        code_detected: "code_detected";
        log_observed: "log_observed";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    component: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
        registryRevision: z.ZodNumber;
        canonicalComponentId: z.ZodString;
        mergedIntoComponentId: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
        retiredAt: z.ZodNullable<z.ZodString>;
        retirementReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const deregisterComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"observation_withdrawn">;
    componentId: z.ZodString;
    sourceType: z.ZodLiteral<"secret_key">;
    withdrawn: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"retirement_confirmation_required">;
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        lifecycle: z.ZodEnum<{
            active: "active";
            retired: "retired";
        }>;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        requiresCanonicalGroupConfirmation: z.ZodBoolean;
        recommendationScopeEnabled: z.ZodLiteral<false>;
        dependents: z.ZodObject<{
            openIssueIds: z.ZodArray<z.ZodString>;
            activeComponentIssueIds: z.ZodArray<z.ZodString>;
            automationBindingIds: z.ZodArray<z.ZodString>;
            notificationRuleIds: z.ZodArray<z.ZodString>;
            dataSourceMappingIds: z.ZodArray<z.ZodString>;
            observationIds: z.ZodArray<z.ZodString>;
            relationshipIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
            externalIncidentIds: z.ZodArray<z.ZodString>;
            authorizedDeliveryIds: z.ZodArray<z.ZodString>;
            authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>], "status">, "api">;
export declare const renameComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    name: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    component: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
        registryRevision: z.ZodNumber;
        canonicalComponentId: z.ZodString;
        mergedIntoComponentId: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
        retiredAt: z.ZodNullable<z.ZodString>;
        retirementReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const AssignComponentTeamInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    teamId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AssignComponentTeamInput = z.infer<typeof AssignComponentTeamInputSchema>;
export declare const AssignComponentTeamOutputSchema: z.ZodObject<{
    componentId: z.ZodString;
    teamId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AssignComponentTeamOutput = z.infer<typeof AssignComponentTeamOutputSchema>;
export declare const assignComponentTeam: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    teamId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    componentId: z.ZodString;
    teamId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const PreviewComponentRetirementInputSchema: z.ZodObject<{
    componentId: z.ZodString;
}, z.core.$strip>;
export type PreviewComponentRetirementInput = z.infer<typeof PreviewComponentRetirementInputSchema>;
export declare const PreviewComponentRetirementOutputSchema: z.ZodObject<{
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        lifecycle: z.ZodEnum<{
            active: "active";
            retired: "retired";
        }>;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        requiresCanonicalGroupConfirmation: z.ZodBoolean;
        recommendationScopeEnabled: z.ZodLiteral<false>;
        dependents: z.ZodObject<{
            openIssueIds: z.ZodArray<z.ZodString>;
            activeComponentIssueIds: z.ZodArray<z.ZodString>;
            automationBindingIds: z.ZodArray<z.ZodString>;
            notificationRuleIds: z.ZodArray<z.ZodString>;
            dataSourceMappingIds: z.ZodArray<z.ZodString>;
            observationIds: z.ZodArray<z.ZodString>;
            relationshipIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
            externalIncidentIds: z.ZodArray<z.ZodString>;
            authorizedDeliveryIds: z.ZodArray<z.ZodString>;
            authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PreviewComponentRetirementOutput = z.infer<typeof PreviewComponentRetirementOutputSchema>;
export declare const CommitComponentRetirementInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    confirmCanonicalGroup: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type CommitComponentRetirementInput = z.infer<typeof CommitComponentRetirementInputSchema>;
export declare const ComponentRetirementResultSchema: z.ZodObject<{
    operationId: z.ZodString;
    status: z.ZodEnum<{
        committed: "committed";
        complete: "complete";
        followup_failed: "followup_failed";
    }>;
    requestedComponentId: z.ZodString;
    canonicalComponentId: z.ZodString;
    affectedComponentIds: z.ZodArray<z.ZodString>;
    counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    authorizedDeliveryIds: z.ZodArray<z.ZodString>;
    authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
    manualExternalIncidentIds: z.ZodArray<z.ZodString>;
    issueAutomationSuppressions: z.ZodNumber;
    outboxEffectCount: z.ZodNumber;
    manifest: z.ZodObject<{
        notificationRules: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            rowRevision: z.ZodNumber;
        }, z.core.$strip>>;
        automationBindings: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            rowRevision: z.ZodNumber;
        }, z.core.$strip>>;
        relationships: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            rowRevision: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    followups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type ComponentRetirementResult = z.infer<typeof ComponentRetirementResultSchema>;
export declare const CommitComponentRetirementOutputSchema: z.ZodObject<{
    result: z.ZodObject<{
        operationId: z.ZodString;
        status: z.ZodEnum<{
            committed: "committed";
            complete: "complete";
            followup_failed: "followup_failed";
        }>;
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
        authorizedDeliveryIds: z.ZodArray<z.ZodString>;
        authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
        manualExternalIncidentIds: z.ZodArray<z.ZodString>;
        issueAutomationSuppressions: z.ZodNumber;
        outboxEffectCount: z.ZodNumber;
        manifest: z.ZodObject<{
            notificationRules: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                rowRevision: z.ZodNumber;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                rowRevision: z.ZodNumber;
            }, z.core.$strip>>;
            relationships: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                rowRevision: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        followups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CommitComponentRetirementOutput = z.infer<typeof CommitComponentRetirementOutputSchema>;
export declare const PreviewComponentRestorationInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    retirementOperationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PreviewComponentRestorationInput = z.infer<typeof PreviewComponentRestorationInputSchema>;
export declare const ComponentRestorationPreviewSchema: z.ZodObject<{
    requestedComponentId: z.ZodString;
    canonicalComponentId: z.ZodString;
    canonicalComponentName: z.ZodString;
    retirementOperationId: z.ZodString;
    affectedComponentIds: z.ZodArray<z.ZodString>;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    eligible: z.ZodObject<{
        notificationRuleIds: z.ZodArray<z.ZodString>;
        automationBindingIds: z.ZodArray<z.ZodString>;
        recommendationScopeIds: z.ZodArray<z.ZodString>;
        relationshipIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ComponentRestorationPreview = z.infer<typeof ComponentRestorationPreviewSchema>;
export declare const PreviewComponentRestorationOutputSchema: z.ZodObject<{
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        retirementOperationId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        eligible: z.ZodObject<{
            notificationRuleIds: z.ZodArray<z.ZodString>;
            automationBindingIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
            relationshipIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PreviewComponentRestorationOutput = z.infer<typeof PreviewComponentRestorationOutputSchema>;
export declare const ComponentRestorationSelectionsSchema: z.ZodObject<{
    notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    relationshipIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ComponentRestorationSelections = z.infer<typeof ComponentRestorationSelectionsSchema>;
export declare const CommitComponentRestorationInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    retirementOperationId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    selections: z.ZodDefault<z.ZodObject<{
        notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        relationshipIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CommitComponentRestorationInput = z.infer<typeof CommitComponentRestorationInputSchema>;
export declare const ComponentRestorationResultSchema: z.ZodObject<{
    operationId: z.ZodString;
    status: z.ZodLiteral<"complete">;
    requestedComponentId: z.ZodString;
    canonicalComponentId: z.ZodString;
    affectedComponentIds: z.ZodArray<z.ZodString>;
    restored: z.ZodObject<{
        notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        relationshipIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ComponentRestorationResult = z.infer<typeof ComponentRestorationResultSchema>;
export declare const CommitComponentRestorationOutputSchema: z.ZodObject<{
    result: z.ZodObject<{
        operationId: z.ZodString;
        status: z.ZodLiteral<"complete">;
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        restored: z.ZodObject<{
            notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            relationshipIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CommitComponentRestorationOutput = z.infer<typeof CommitComponentRestorationOutputSchema>;
export declare const previewComponentRetirement: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        lifecycle: z.ZodEnum<{
            active: "active";
            retired: "retired";
        }>;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        requiresCanonicalGroupConfirmation: z.ZodBoolean;
        recommendationScopeEnabled: z.ZodLiteral<false>;
        dependents: z.ZodObject<{
            openIssueIds: z.ZodArray<z.ZodString>;
            activeComponentIssueIds: z.ZodArray<z.ZodString>;
            automationBindingIds: z.ZodArray<z.ZodString>;
            notificationRuleIds: z.ZodArray<z.ZodString>;
            dataSourceMappingIds: z.ZodArray<z.ZodString>;
            observationIds: z.ZodArray<z.ZodString>;
            relationshipIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
            externalIncidentIds: z.ZodArray<z.ZodString>;
            authorizedDeliveryIds: z.ZodArray<z.ZodString>;
            authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const retireComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    confirmCanonicalGroup: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    result: z.ZodObject<{
        operationId: z.ZodString;
        status: z.ZodEnum<{
            committed: "committed";
            complete: "complete";
            followup_failed: "followup_failed";
        }>;
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
        authorizedDeliveryIds: z.ZodArray<z.ZodString>;
        authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
        manualExternalIncidentIds: z.ZodArray<z.ZodString>;
        issueAutomationSuppressions: z.ZodNumber;
        outboxEffectCount: z.ZodNumber;
        manifest: z.ZodObject<{
            notificationRules: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                rowRevision: z.ZodNumber;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                rowRevision: z.ZodNumber;
            }, z.core.$strip>>;
            relationships: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                rowRevision: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        followups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const previewComponentRestoration: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    retirementOperationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        retirementOperationId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        eligible: z.ZodObject<{
            notificationRuleIds: z.ZodArray<z.ZodString>;
            automationBindingIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
            relationshipIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const restoreComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    retirementOperationId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    selections: z.ZodDefault<z.ZodObject<{
        notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        relationshipIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    result: z.ZodObject<{
        operationId: z.ZodString;
        status: z.ZodLiteral<"complete">;
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        restored: z.ZodObject<{
            notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            relationshipIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const ComponentRelationshipTypeSchema: z.ZodEnum<{
    depends_on: "depends_on";
    part_of: "part_of";
}>;
export type ComponentRelationshipType = z.infer<typeof ComponentRelationshipTypeSchema>;
export declare const ComponentObservationStateSchema: z.ZodEnum<{
    observed: "observed";
    stale: "stale";
    unobserved: "unobserved";
}>;
export declare const ComponentRelationshipEndpointSchema: z.ZodObject<{
    originalComponentId: z.ZodString;
    effectiveComponentId: z.ZodString;
    name: z.ZodString;
    lifecycle: z.ZodEnum<{
        active: "active";
        merged: "merged";
        retired: "retired";
    }>;
    observationState: z.ZodEnum<{
        observed: "observed";
        stale: "stale";
        unobserved: "unobserved";
    }>;
}, z.core.$strip>;
export declare const ComponentRelationshipSchema: z.ZodObject<{
    id: z.ZodString;
    source: z.ZodObject<{
        originalComponentId: z.ZodString;
        effectiveComponentId: z.ZodString;
        name: z.ZodString;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
    }, z.core.$strip>;
    target: z.ZodObject<{
        originalComponentId: z.ZodString;
        effectiveComponentId: z.ZodString;
        name: z.ZodString;
        lifecycle: z.ZodEnum<{
            active: "active";
            merged: "merged";
            retired: "retired";
        }>;
        observationState: z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>;
    }, z.core.$strip>;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    createdAt: z.ZodString;
    endedAt: z.ZodNullable<z.ZodString>;
    endReason: z.ZodNullable<z.ZodString>;
    rowRevision: z.ZodNumber;
}, z.core.$strip>;
export type ComponentRelationship = z.infer<typeof ComponentRelationshipSchema>;
export declare const ListComponentRelationshipsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    includeHistorical: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>;
export type ListComponentRelationshipsInput = z.infer<typeof ListComponentRelationshipsInputSchema>;
export declare const ListComponentRelationshipsOutputSchema: z.ZodObject<{
    relationships: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        source: z.ZodObject<{
            originalComponentId: z.ZodString;
            effectiveComponentId: z.ZodString;
            name: z.ZodString;
            lifecycle: z.ZodEnum<{
                active: "active";
                merged: "merged";
                retired: "retired";
            }>;
            observationState: z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>;
        }, z.core.$strip>;
        target: z.ZodObject<{
            originalComponentId: z.ZodString;
            effectiveComponentId: z.ZodString;
            name: z.ZodString;
            lifecycle: z.ZodEnum<{
                active: "active";
                merged: "merged";
                retired: "retired";
            }>;
            observationState: z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>;
        }, z.core.$strip>;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        createdAt: z.ZodString;
        endedAt: z.ZodNullable<z.ZodString>;
        endReason: z.ZodNullable<z.ZodString>;
        rowRevision: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListComponentRelationshipsOutput = z.infer<typeof ListComponentRelationshipsOutputSchema>;
export declare const ComponentRelationshipPolicyImpactSchema: z.ZodObject<{
    notificationRules: z.ZodArray<z.ZodObject<{
        ruleId: z.ZodString;
        ruleGroupId: z.ZodNullable<z.ZodString>;
        ownerComponentId: z.ZodString;
        destinationIds: z.ZodArray<z.ZodString>;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    automationBindings: z.ZodArray<z.ZodObject<{
        bindingId: z.ZodString;
        automationId: z.ZodString;
        ownerComponentId: z.ZodString;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ComponentRelationshipPreviewSchema: z.ZodObject<{
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    action: z.ZodEnum<{
        add: "add";
        remove: "remove";
    }>;
    organizationId: z.ZodString;
    projectId: z.ZodString;
    relationshipId: z.ZodNullable<z.ZodString>;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    policyImpact: z.ZodObject<{
        notificationRules: z.ZodArray<z.ZodObject<{
            ruleId: z.ZodString;
            ruleGroupId: z.ZodNullable<z.ZodString>;
            ownerComponentId: z.ZodString;
            destinationIds: z.ZodArray<z.ZodString>;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        automationBindings: z.ZodArray<z.ZodObject<{
            bindingId: z.ZodString;
            automationId: z.ZodString;
            ownerComponentId: z.ZodString;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    confirmationRequired: z.ZodBoolean;
}, z.core.$strip>;
export type ComponentRelationshipPreview = z.infer<typeof ComponentRelationshipPreviewSchema>;
export declare const PreviewComponentRelationshipInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    action: z.ZodEnum<{
        add: "add";
        remove: "remove";
    }>;
}, z.core.$strip>;
export type PreviewComponentRelationshipInput = z.infer<typeof PreviewComponentRelationshipInputSchema>;
export declare const PreviewComponentRelationshipOutputSchema: z.ZodObject<{
    preview: z.ZodObject<{
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        action: z.ZodEnum<{
            add: "add";
            remove: "remove";
        }>;
        organizationId: z.ZodString;
        projectId: z.ZodString;
        relationshipId: z.ZodNullable<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        policyImpact: z.ZodObject<{
            notificationRules: z.ZodArray<z.ZodObject<{
                ruleId: z.ZodString;
                ruleGroupId: z.ZodNullable<z.ZodString>;
                ownerComponentId: z.ZodString;
                destinationIds: z.ZodArray<z.ZodString>;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                bindingId: z.ZodString;
                automationId: z.ZodString;
                ownerComponentId: z.ZodString;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        confirmationRequired: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PreviewComponentRelationshipOutput = z.infer<typeof PreviewComponentRelationshipOutputSchema>;
export declare const AddComponentRelationshipInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AddComponentRelationshipInput = z.infer<typeof AddComponentRelationshipInputSchema>;
export declare const RemoveComponentRelationshipInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type RemoveComponentRelationshipInput = z.infer<typeof RemoveComponentRelationshipInputSchema>;
export declare const ComponentRelationshipMutationResultSchema: z.ZodObject<{
    action: z.ZodEnum<{
        add: "add";
        remove: "remove";
    }>;
    relationshipId: z.ZodString;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    policyImpact: z.ZodObject<{
        notificationRules: z.ZodArray<z.ZodObject<{
            ruleId: z.ZodString;
            ruleGroupId: z.ZodNullable<z.ZodString>;
            ownerComponentId: z.ZodString;
            destinationIds: z.ZodArray<z.ZodString>;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        automationBindings: z.ZodArray<z.ZodObject<{
            bindingId: z.ZodString;
            automationId: z.ZodString;
            ownerComponentId: z.ZodString;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ComponentRelationshipMutationOutputSchema: z.ZodObject<{
    result: z.ZodObject<{
        action: z.ZodEnum<{
            add: "add";
            remove: "remove";
        }>;
        relationshipId: z.ZodString;
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        policyImpact: z.ZodObject<{
            notificationRules: z.ZodArray<z.ZodObject<{
                ruleId: z.ZodString;
                ruleGroupId: z.ZodNullable<z.ZodString>;
                ownerComponentId: z.ZodString;
                destinationIds: z.ZodArray<z.ZodString>;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                bindingId: z.ZodString;
                automationId: z.ZodString;
                ownerComponentId: z.ZodString;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ComponentRelationshipMutationOutput = z.infer<typeof ComponentRelationshipMutationOutputSchema>;
export declare const listComponentRelationships: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    includeHistorical: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>, z.ZodObject<{
    relationships: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        source: z.ZodObject<{
            originalComponentId: z.ZodString;
            effectiveComponentId: z.ZodString;
            name: z.ZodString;
            lifecycle: z.ZodEnum<{
                active: "active";
                merged: "merged";
                retired: "retired";
            }>;
            observationState: z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>;
        }, z.core.$strip>;
        target: z.ZodObject<{
            originalComponentId: z.ZodString;
            effectiveComponentId: z.ZodString;
            name: z.ZodString;
            lifecycle: z.ZodEnum<{
                active: "active";
                merged: "merged";
                retired: "retired";
            }>;
            observationState: z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>;
        }, z.core.$strip>;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        createdAt: z.ZodString;
        endedAt: z.ZodNullable<z.ZodString>;
        endReason: z.ZodNullable<z.ZodString>;
        rowRevision: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const previewComponentRelationship: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    action: z.ZodEnum<{
        add: "add";
        remove: "remove";
    }>;
}, z.core.$strip>, z.ZodObject<{
    preview: z.ZodObject<{
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        action: z.ZodEnum<{
            add: "add";
            remove: "remove";
        }>;
        organizationId: z.ZodString;
        projectId: z.ZodString;
        relationshipId: z.ZodNullable<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        policyImpact: z.ZodObject<{
            notificationRules: z.ZodArray<z.ZodObject<{
                ruleId: z.ZodString;
                ruleGroupId: z.ZodNullable<z.ZodString>;
                ownerComponentId: z.ZodString;
                destinationIds: z.ZodArray<z.ZodString>;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                bindingId: z.ZodString;
                automationId: z.ZodString;
                ownerComponentId: z.ZodString;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        confirmationRequired: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const addComponentRelationship: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    result: z.ZodObject<{
        action: z.ZodEnum<{
            add: "add";
            remove: "remove";
        }>;
        relationshipId: z.ZodString;
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        policyImpact: z.ZodObject<{
            notificationRules: z.ZodArray<z.ZodObject<{
                ruleId: z.ZodString;
                ruleGroupId: z.ZodNullable<z.ZodString>;
                ownerComponentId: z.ZodString;
                destinationIds: z.ZodArray<z.ZodString>;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                bindingId: z.ZodString;
                automationId: z.ZodString;
                ownerComponentId: z.ZodString;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const removeComponentRelationship: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    result: z.ZodObject<{
        action: z.ZodEnum<{
            add: "add";
            remove: "remove";
        }>;
        relationshipId: z.ZodString;
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        policyImpact: z.ZodObject<{
            notificationRules: z.ZodArray<z.ZodObject<{
                ruleId: z.ZodString;
                ruleGroupId: z.ZodNullable<z.ZodString>;
                ownerComponentId: z.ZodString;
                destinationIds: z.ZodArray<z.ZodString>;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                bindingId: z.ZodString;
                automationId: z.ZodString;
                ownerComponentId: z.ZodString;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const ComponentMergePolicyDispositionSchema: z.ZodEnum<{
    move: "move";
    suspend: "suspend";
}>;
export type ComponentMergePolicyDisposition = z.infer<typeof ComponentMergePolicyDispositionSchema>;
export declare const ComponentMergeDispositionConfirmationSchema: z.ZodObject<{
    disposition: z.ZodEnum<{
        move: "move";
        suspend: "suspend";
    }>;
    beforeComponentIds: z.ZodArray<z.ZodString>;
    afterComponentIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ComponentMergeDispositionConfirmation = z.infer<typeof ComponentMergeDispositionConfirmationSchema>;
export declare const ComponentMergePolicyImpactSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        automation_binding: "automation_binding";
        notification_rule: "notification_rule";
    }>;
    policyId: z.ZodString;
    sourceRowRevision: z.ZodNumber;
    sourceComponentId: z.ZodString;
    equivalentPolicyId: z.ZodNullable<z.ZodString>;
    equivalent: z.ZodBoolean;
    defaultDisposition: z.ZodEnum<{
        deduplicate: "deduplicate";
        suspend: "suspend";
    }>;
    allowedDispositions: z.ZodArray<z.ZodEnum<{
        move: "move";
        suspend: "suspend";
    }>>;
    beforeComponentIds: z.ZodArray<z.ZodString>;
    afterComponentIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ComponentMergePolicyImpact = z.infer<typeof ComponentMergePolicyImpactSchema>;
export declare const ComponentMergePolicyScopeChangeSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        automation_binding: "automation_binding";
        notification_rule: "notification_rule";
    }>;
    policyId: z.ZodString;
    ownerComponentId: z.ZodString;
    rowRevision: z.ZodNumber;
    beforeComponentIds: z.ZodArray<z.ZodString>;
    afterComponentIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ComponentMergePolicyScopeChange = z.infer<typeof ComponentMergePolicyScopeChangeSchema>;
export declare const ComponentMergeRelationshipChangeSchema: z.ZodObject<{
    relationshipId: z.ZodString;
    action: z.ZodEnum<{
        close_duplicate: "close_duplicate";
        close_self: "close_self";
        rewire: "rewire";
    }>;
    relationshipType: z.ZodEnum<{
        depends_on: "depends_on";
        part_of: "part_of";
    }>;
    beforeSourceComponentId: z.ZodString;
    beforeTargetComponentId: z.ZodString;
    afterSourceComponentId: z.ZodString;
    afterTargetComponentId: z.ZodString;
    survivingRelationshipId: z.ZodNullable<z.ZodString>;
    beforeRowRevision: z.ZodNumber;
    afterRowRevision: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export declare const PreviewComponentMergeInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
}, z.core.$strip>;
export type PreviewComponentMergeInput = z.infer<typeof PreviewComponentMergeInputSchema>;
export declare const ComponentMergePreviewSchema: z.ZodObject<{
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    organizationId: z.ZodString;
    projectId: z.ZodString;
    sourceGroupComponentIds: z.ZodArray<z.ZodString>;
    targetGroupComponentIds: z.ZodArray<z.ZodString>;
    affectedComponentIds: z.ZodArray<z.ZodString>;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    inventory: z.ZodObject<{
        openIssueIds: z.ZodArray<z.ZodString>;
        componentIssueIds: z.ZodArray<z.ZodString>;
        observationIds: z.ZodArray<z.ZodString>;
        dataSourceMappingIds: z.ZodArray<z.ZodString>;
        nameIds: z.ZodArray<z.ZodString>;
        relationshipIds: z.ZodArray<z.ZodString>;
        recommendationScopeIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    notificationPolicies: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            automation_binding: "automation_binding";
            notification_rule: "notification_rule";
        }>;
        policyId: z.ZodString;
        sourceRowRevision: z.ZodNumber;
        sourceComponentId: z.ZodString;
        equivalentPolicyId: z.ZodNullable<z.ZodString>;
        equivalent: z.ZodBoolean;
        defaultDisposition: z.ZodEnum<{
            deduplicate: "deduplicate";
            suspend: "suspend";
        }>;
        allowedDispositions: z.ZodArray<z.ZodEnum<{
            move: "move";
            suspend: "suspend";
        }>>;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    automationBindings: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            automation_binding: "automation_binding";
            notification_rule: "notification_rule";
        }>;
        policyId: z.ZodString;
        sourceRowRevision: z.ZodNumber;
        sourceComponentId: z.ZodString;
        equivalentPolicyId: z.ZodNullable<z.ZodString>;
        equivalent: z.ZodBoolean;
        defaultDisposition: z.ZodEnum<{
            deduplicate: "deduplicate";
            suspend: "suspend";
        }>;
        allowedDispositions: z.ZodArray<z.ZodEnum<{
            move: "move";
            suspend: "suspend";
        }>>;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    notificationScopeChanges: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            automation_binding: "automation_binding";
            notification_rule: "notification_rule";
        }>;
        policyId: z.ZodString;
        ownerComponentId: z.ZodString;
        rowRevision: z.ZodNumber;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    automationScopeChanges: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            automation_binding: "automation_binding";
            notification_rule: "notification_rule";
        }>;
        policyId: z.ZodString;
        ownerComponentId: z.ZodString;
        rowRevision: z.ZodNumber;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    relationshipChanges: z.ZodArray<z.ZodObject<{
        relationshipId: z.ZodString;
        action: z.ZodEnum<{
            close_duplicate: "close_duplicate";
            close_self: "close_self";
            rewire: "rewire";
        }>;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        beforeSourceComponentId: z.ZodString;
        beforeTargetComponentId: z.ZodString;
        afterSourceComponentId: z.ZodString;
        afterTargetComponentId: z.ZodString;
        survivingRelationshipId: z.ZodNullable<z.ZodString>;
        beforeRowRevision: z.ZodNumber;
        afterRowRevision: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    recommendationScopeEnabled: z.ZodLiteral<false>;
    dependentCount: z.ZodNumber;
    ordinaryTransactionLimit: z.ZodNumber;
    operatorAssistanceRequired: z.ZodBoolean;
    confirmationRequired: z.ZodBoolean;
}, z.core.$strip>;
export type ComponentMergePreview = z.infer<typeof ComponentMergePreviewSchema>;
export declare const PreviewComponentMergeOutputSchema: z.ZodObject<{
    preview: z.ZodObject<{
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        organizationId: z.ZodString;
        projectId: z.ZodString;
        sourceGroupComponentIds: z.ZodArray<z.ZodString>;
        targetGroupComponentIds: z.ZodArray<z.ZodString>;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        inventory: z.ZodObject<{
            openIssueIds: z.ZodArray<z.ZodString>;
            componentIssueIds: z.ZodArray<z.ZodString>;
            observationIds: z.ZodArray<z.ZodString>;
            dataSourceMappingIds: z.ZodArray<z.ZodString>;
            nameIds: z.ZodArray<z.ZodString>;
            relationshipIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        notificationPolicies: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            sourceRowRevision: z.ZodNumber;
            sourceComponentId: z.ZodString;
            equivalentPolicyId: z.ZodNullable<z.ZodString>;
            equivalent: z.ZodBoolean;
            defaultDisposition: z.ZodEnum<{
                deduplicate: "deduplicate";
                suspend: "suspend";
            }>;
            allowedDispositions: z.ZodArray<z.ZodEnum<{
                move: "move";
                suspend: "suspend";
            }>>;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        automationBindings: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            sourceRowRevision: z.ZodNumber;
            sourceComponentId: z.ZodString;
            equivalentPolicyId: z.ZodNullable<z.ZodString>;
            equivalent: z.ZodBoolean;
            defaultDisposition: z.ZodEnum<{
                deduplicate: "deduplicate";
                suspend: "suspend";
            }>;
            allowedDispositions: z.ZodArray<z.ZodEnum<{
                move: "move";
                suspend: "suspend";
            }>>;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        notificationScopeChanges: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            ownerComponentId: z.ZodString;
            rowRevision: z.ZodNumber;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        automationScopeChanges: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            ownerComponentId: z.ZodString;
            rowRevision: z.ZodNumber;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        relationshipChanges: z.ZodArray<z.ZodObject<{
            relationshipId: z.ZodString;
            action: z.ZodEnum<{
                close_duplicate: "close_duplicate";
                close_self: "close_self";
                rewire: "rewire";
            }>;
            relationshipType: z.ZodEnum<{
                depends_on: "depends_on";
                part_of: "part_of";
            }>;
            beforeSourceComponentId: z.ZodString;
            beforeTargetComponentId: z.ZodString;
            afterSourceComponentId: z.ZodString;
            afterTargetComponentId: z.ZodString;
            survivingRelationshipId: z.ZodNullable<z.ZodString>;
            beforeRowRevision: z.ZodNumber;
            afterRowRevision: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        recommendationScopeEnabled: z.ZodLiteral<false>;
        dependentCount: z.ZodNumber;
        ordinaryTransactionLimit: z.ZodNumber;
        operatorAssistanceRequired: z.ZodBoolean;
        confirmationRequired: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PreviewComponentMergeOutput = z.infer<typeof PreviewComponentMergeOutputSchema>;
export declare const CommitComponentMergeInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    policyDispositions: z.ZodRecord<z.ZodString, z.ZodObject<{
        disposition: z.ZodEnum<{
            move: "move";
            suspend: "suspend";
        }>;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type CommitComponentMergeInput = z.infer<typeof CommitComponentMergeInputSchema>;
export declare const ComponentMergeManifestSchema: z.ZodObject<{
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    redirectedComponentIds: z.ZodArray<z.ZodString>;
    dataSourceMappingIds: z.ZodArray<z.ZodString>;
    movedAliasIds: z.ZodArray<z.ZodString>;
    historicalDisplayIds: z.ZodArray<z.ZodString>;
    relationshipChanges: z.ZodArray<z.ZodObject<{
        relationshipId: z.ZodString;
        action: z.ZodEnum<{
            close_duplicate: "close_duplicate";
            close_self: "close_self";
            rewire: "rewire";
        }>;
        relationshipType: z.ZodEnum<{
            depends_on: "depends_on";
            part_of: "part_of";
        }>;
        beforeSourceComponentId: z.ZodString;
        beforeTargetComponentId: z.ZodString;
        afterSourceComponentId: z.ZodString;
        afterTargetComponentId: z.ZodString;
        survivingRelationshipId: z.ZodNullable<z.ZodString>;
        beforeRowRevision: z.ZodNumber;
        afterRowRevision: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    notificationPolicies: z.ZodArray<z.ZodObject<{
        policyId: z.ZodString;
        action: z.ZodEnum<{
            deduplicated: "deduplicated";
            moved: "moved";
            suspended: "suspended";
        }>;
        equivalentPolicyId: z.ZodNullable<z.ZodString>;
        beforeRowRevision: z.ZodNumber;
        afterRowRevision: z.ZodNumber;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    automationBindings: z.ZodArray<z.ZodObject<{
        policyId: z.ZodString;
        action: z.ZodEnum<{
            deduplicated: "deduplicated";
            moved: "moved";
            suspended: "suspended";
        }>;
        equivalentPolicyId: z.ZodNullable<z.ZodString>;
        beforeRowRevision: z.ZodNumber;
        afterRowRevision: z.ZodNumber;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    notificationScopeChanges: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            automation_binding: "automation_binding";
            notification_rule: "notification_rule";
        }>;
        policyId: z.ZodString;
        ownerComponentId: z.ZodString;
        rowRevision: z.ZodNumber;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    automationScopeChanges: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            automation_binding: "automation_binding";
            notification_rule: "notification_rule";
        }>;
        policyId: z.ZodString;
        ownerComponentId: z.ZodString;
        rowRevision: z.ZodNumber;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    recommendationScopeIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const ComponentMergeResultSchema: z.ZodObject<{
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    operationId: z.ZodString;
    status: z.ZodLiteral<"complete">;
    affectedComponentIds: z.ZodArray<z.ZodString>;
    manifest: z.ZodObject<{
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        redirectedComponentIds: z.ZodArray<z.ZodString>;
        dataSourceMappingIds: z.ZodArray<z.ZodString>;
        movedAliasIds: z.ZodArray<z.ZodString>;
        historicalDisplayIds: z.ZodArray<z.ZodString>;
        relationshipChanges: z.ZodArray<z.ZodObject<{
            relationshipId: z.ZodString;
            action: z.ZodEnum<{
                close_duplicate: "close_duplicate";
                close_self: "close_self";
                rewire: "rewire";
            }>;
            relationshipType: z.ZodEnum<{
                depends_on: "depends_on";
                part_of: "part_of";
            }>;
            beforeSourceComponentId: z.ZodString;
            beforeTargetComponentId: z.ZodString;
            afterSourceComponentId: z.ZodString;
            afterTargetComponentId: z.ZodString;
            survivingRelationshipId: z.ZodNullable<z.ZodString>;
            beforeRowRevision: z.ZodNumber;
            afterRowRevision: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        notificationPolicies: z.ZodArray<z.ZodObject<{
            policyId: z.ZodString;
            action: z.ZodEnum<{
                deduplicated: "deduplicated";
                moved: "moved";
                suspended: "suspended";
            }>;
            equivalentPolicyId: z.ZodNullable<z.ZodString>;
            beforeRowRevision: z.ZodNumber;
            afterRowRevision: z.ZodNumber;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        automationBindings: z.ZodArray<z.ZodObject<{
            policyId: z.ZodString;
            action: z.ZodEnum<{
                deduplicated: "deduplicated";
                moved: "moved";
                suspended: "suspended";
            }>;
            equivalentPolicyId: z.ZodNullable<z.ZodString>;
            beforeRowRevision: z.ZodNumber;
            afterRowRevision: z.ZodNumber;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        notificationScopeChanges: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            ownerComponentId: z.ZodString;
            rowRevision: z.ZodNumber;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        automationScopeChanges: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            ownerComponentId: z.ZodString;
            rowRevision: z.ZodNumber;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        recommendationScopeIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ComponentMergeResult = z.infer<typeof ComponentMergeResultSchema>;
export declare const CommitComponentMergeOutputSchema: z.ZodObject<{
    result: z.ZodObject<{
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        operationId: z.ZodString;
        status: z.ZodLiteral<"complete">;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        manifest: z.ZodObject<{
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            redirectedComponentIds: z.ZodArray<z.ZodString>;
            dataSourceMappingIds: z.ZodArray<z.ZodString>;
            movedAliasIds: z.ZodArray<z.ZodString>;
            historicalDisplayIds: z.ZodArray<z.ZodString>;
            relationshipChanges: z.ZodArray<z.ZodObject<{
                relationshipId: z.ZodString;
                action: z.ZodEnum<{
                    close_duplicate: "close_duplicate";
                    close_self: "close_self";
                    rewire: "rewire";
                }>;
                relationshipType: z.ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                beforeSourceComponentId: z.ZodString;
                beforeTargetComponentId: z.ZodString;
                afterSourceComponentId: z.ZodString;
                afterTargetComponentId: z.ZodString;
                survivingRelationshipId: z.ZodNullable<z.ZodString>;
                beforeRowRevision: z.ZodNumber;
                afterRowRevision: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            notificationPolicies: z.ZodArray<z.ZodObject<{
                policyId: z.ZodString;
                action: z.ZodEnum<{
                    deduplicated: "deduplicated";
                    moved: "moved";
                    suspended: "suspended";
                }>;
                equivalentPolicyId: z.ZodNullable<z.ZodString>;
                beforeRowRevision: z.ZodNumber;
                afterRowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                policyId: z.ZodString;
                action: z.ZodEnum<{
                    deduplicated: "deduplicated";
                    moved: "moved";
                    suspended: "suspended";
                }>;
                equivalentPolicyId: z.ZodNullable<z.ZodString>;
                beforeRowRevision: z.ZodNumber;
                afterRowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            notificationScopeChanges: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    automation_binding: "automation_binding";
                    notification_rule: "notification_rule";
                }>;
                policyId: z.ZodString;
                ownerComponentId: z.ZodString;
                rowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationScopeChanges: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    automation_binding: "automation_binding";
                    notification_rule: "notification_rule";
                }>;
                policyId: z.ZodString;
                ownerComponentId: z.ZodString;
                rowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CommitComponentMergeOutput = z.infer<typeof CommitComponentMergeOutputSchema>;
export declare const previewComponentMerge: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    preview: z.ZodObject<{
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        organizationId: z.ZodString;
        projectId: z.ZodString;
        sourceGroupComponentIds: z.ZodArray<z.ZodString>;
        targetGroupComponentIds: z.ZodArray<z.ZodString>;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        inventory: z.ZodObject<{
            openIssueIds: z.ZodArray<z.ZodString>;
            componentIssueIds: z.ZodArray<z.ZodString>;
            observationIds: z.ZodArray<z.ZodString>;
            dataSourceMappingIds: z.ZodArray<z.ZodString>;
            nameIds: z.ZodArray<z.ZodString>;
            relationshipIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        notificationPolicies: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            sourceRowRevision: z.ZodNumber;
            sourceComponentId: z.ZodString;
            equivalentPolicyId: z.ZodNullable<z.ZodString>;
            equivalent: z.ZodBoolean;
            defaultDisposition: z.ZodEnum<{
                deduplicate: "deduplicate";
                suspend: "suspend";
            }>;
            allowedDispositions: z.ZodArray<z.ZodEnum<{
                move: "move";
                suspend: "suspend";
            }>>;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        automationBindings: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            sourceRowRevision: z.ZodNumber;
            sourceComponentId: z.ZodString;
            equivalentPolicyId: z.ZodNullable<z.ZodString>;
            equivalent: z.ZodBoolean;
            defaultDisposition: z.ZodEnum<{
                deduplicate: "deduplicate";
                suspend: "suspend";
            }>;
            allowedDispositions: z.ZodArray<z.ZodEnum<{
                move: "move";
                suspend: "suspend";
            }>>;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        notificationScopeChanges: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            ownerComponentId: z.ZodString;
            rowRevision: z.ZodNumber;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        automationScopeChanges: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                automation_binding: "automation_binding";
                notification_rule: "notification_rule";
            }>;
            policyId: z.ZodString;
            ownerComponentId: z.ZodString;
            rowRevision: z.ZodNumber;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        relationshipChanges: z.ZodArray<z.ZodObject<{
            relationshipId: z.ZodString;
            action: z.ZodEnum<{
                close_duplicate: "close_duplicate";
                close_self: "close_self";
                rewire: "rewire";
            }>;
            relationshipType: z.ZodEnum<{
                depends_on: "depends_on";
                part_of: "part_of";
            }>;
            beforeSourceComponentId: z.ZodString;
            beforeTargetComponentId: z.ZodString;
            afterSourceComponentId: z.ZodString;
            afterTargetComponentId: z.ZodString;
            survivingRelationshipId: z.ZodNullable<z.ZodString>;
            beforeRowRevision: z.ZodNumber;
            afterRowRevision: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        recommendationScopeEnabled: z.ZodLiteral<false>;
        dependentCount: z.ZodNumber;
        ordinaryTransactionLimit: z.ZodNumber;
        operatorAssistanceRequired: z.ZodBoolean;
        confirmationRequired: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const mergeComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    policyDispositions: z.ZodRecord<z.ZodString, z.ZodObject<{
        disposition: z.ZodEnum<{
            move: "move";
            suspend: "suspend";
        }>;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    result: z.ZodObject<{
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        operationId: z.ZodString;
        status: z.ZodLiteral<"complete">;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        manifest: z.ZodObject<{
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            redirectedComponentIds: z.ZodArray<z.ZodString>;
            dataSourceMappingIds: z.ZodArray<z.ZodString>;
            movedAliasIds: z.ZodArray<z.ZodString>;
            historicalDisplayIds: z.ZodArray<z.ZodString>;
            relationshipChanges: z.ZodArray<z.ZodObject<{
                relationshipId: z.ZodString;
                action: z.ZodEnum<{
                    close_duplicate: "close_duplicate";
                    close_self: "close_self";
                    rewire: "rewire";
                }>;
                relationshipType: z.ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                beforeSourceComponentId: z.ZodString;
                beforeTargetComponentId: z.ZodString;
                afterSourceComponentId: z.ZodString;
                afterTargetComponentId: z.ZodString;
                survivingRelationshipId: z.ZodNullable<z.ZodString>;
                beforeRowRevision: z.ZodNumber;
                afterRowRevision: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            notificationPolicies: z.ZodArray<z.ZodObject<{
                policyId: z.ZodString;
                action: z.ZodEnum<{
                    deduplicated: "deduplicated";
                    moved: "moved";
                    suspended: "suspended";
                }>;
                equivalentPolicyId: z.ZodNullable<z.ZodString>;
                beforeRowRevision: z.ZodNumber;
                afterRowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                policyId: z.ZodString;
                action: z.ZodEnum<{
                    deduplicated: "deduplicated";
                    moved: "moved";
                    suspended: "suspended";
                }>;
                equivalentPolicyId: z.ZodNullable<z.ZodString>;
                beforeRowRevision: z.ZodNumber;
                afterRowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            notificationScopeChanges: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    automation_binding: "automation_binding";
                    notification_rule: "notification_rule";
                }>;
                policyId: z.ZodString;
                ownerComponentId: z.ZodString;
                rowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationScopeChanges: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    automation_binding: "automation_binding";
                    notification_rule: "notification_rule";
                }>;
                policyId: z.ZodString;
                ownerComponentId: z.ZodString;
                rowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const StatusIncidentSeveritySchema: z.ZodEnum<{
    degraded: "degraded";
    outage: "outage";
}>;
export type StatusIncidentSeverity = z.infer<typeof StatusIncidentSeveritySchema>;
export declare const StatusIncidentSchema: z.ZodObject<{
    id: z.ZodString;
    componentId: z.ZodString;
    projectId: z.ZodString;
    severity: z.ZodEnum<{
        degraded: "degraded";
        outage: "outage";
    }>;
    summary: z.ZodString;
    startedAt: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type StatusIncident = z.infer<typeof StatusIncidentSchema>;
export declare const ListStatusIncidentsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    componentId: z.ZodOptional<z.ZodString>;
    activeOnly: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListStatusIncidentsInput = z.infer<typeof ListStatusIncidentsInputSchema>;
export declare const ListStatusIncidentsOutputSchema: z.ZodObject<{
    incidents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        componentId: z.ZodString;
        projectId: z.ZodString;
        severity: z.ZodEnum<{
            degraded: "degraded";
            outage: "outage";
        }>;
        summary: z.ZodString;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListStatusIncidentsOutput = z.infer<typeof ListStatusIncidentsOutputSchema>;
export declare const StatusTimelineEntrySchema: z.ZodObject<{
    timestamp: z.ZodString;
    status: z.ZodEnum<{
        degraded: "degraded";
        operational: "operational";
        outage: "outage";
        unknown: "unknown";
    }>;
}, z.core.$strip>;
export type StatusTimelineEntry = z.infer<typeof StatusTimelineEntrySchema>;
export declare const GetStatusTimelineInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    windowStart: z.ZodOptional<z.ZodString>;
    windowEnd: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetStatusTimelineInput = z.infer<typeof GetStatusTimelineInputSchema>;
export declare const GetStatusTimelineOutputSchema: z.ZodObject<{
    componentId: z.ZodString;
    windowStart: z.ZodString;
    windowEnd: z.ZodString;
    timeline: z.ZodArray<z.ZodObject<{
        timestamp: z.ZodString;
        status: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
            unknown: "unknown";
        }>;
    }, z.core.$strip>>;
    incidents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        componentId: z.ZodString;
        projectId: z.ZodString;
        severity: z.ZodEnum<{
            degraded: "degraded";
            outage: "outage";
        }>;
        summary: z.ZodString;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetStatusTimelineOutput = z.infer<typeof GetStatusTimelineOutputSchema>;
export declare const listStatusIncidents: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    componentId: z.ZodOptional<z.ZodString>;
    activeOnly: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    incidents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        componentId: z.ZodString;
        projectId: z.ZodString;
        severity: z.ZodEnum<{
            degraded: "degraded";
            outage: "outage";
        }>;
        summary: z.ZodString;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const getStatusTimeline: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    windowStart: z.ZodOptional<z.ZodString>;
    windowEnd: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    componentId: z.ZodString;
    windowStart: z.ZodString;
    windowEnd: z.ZodString;
    timeline: z.ZodArray<z.ZodObject<{
        timestamp: z.ZodString;
        status: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
            unknown: "unknown";
        }>;
    }, z.core.$strip>>;
    incidents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        componentId: z.ZodString;
        projectId: z.ZodString;
        severity: z.ZodEnum<{
            degraded: "degraded";
            outage: "outage";
        }>;
        summary: z.ZodString;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const componentsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
        includeDeleted: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    }, z.core.$strip>, z.ZodObject<{
        components: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            origin: z.ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
                user_declared: "user_declared";
            }>;
            lifecycle: z.ZodEnum<{
                active: "active";
                merged: "merged";
                retired: "retired";
            }>;
            observationState: z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>;
            registryRevision: z.ZodNumber;
            canonicalComponentId: z.ZodString;
            mergedIntoComponentId: z.ZodNullable<z.ZodString>;
            currentStatus: z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
            }>;
            firstSeenAt: z.ZodString;
            lastSeenAt: z.ZodString;
            deletedAt: z.ZodNullable<z.ZodString>;
            retiredAt: z.ZodNullable<z.ZodString>;
            retirementReason: z.ZodNullable<z.ZodString>;
            legacyStateUnknown: z.ZodBoolean;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        component: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            origin: z.ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
                user_declared: "user_declared";
            }>;
            lifecycle: z.ZodEnum<{
                active: "active";
                merged: "merged";
                retired: "retired";
            }>;
            observationState: z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>;
            registryRevision: z.ZodNumber;
            canonicalComponentId: z.ZodString;
            mergedIntoComponentId: z.ZodNullable<z.ZodString>;
            currentStatus: z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
            }>;
            firstSeenAt: z.ZodString;
            lastSeenAt: z.ZodString;
            deletedAt: z.ZodNullable<z.ZodString>;
            retiredAt: z.ZodNullable<z.ZodString>;
            retirementReason: z.ZodNullable<z.ZodString>;
            legacyStateUnknown: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly register: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        requestId: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        component: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            origin: z.ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
                user_declared: "user_declared";
            }>;
            lifecycle: z.ZodEnum<{
                active: "active";
                merged: "merged";
                retired: "retired";
            }>;
            observationState: z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>;
            registryRevision: z.ZodNumber;
            canonicalComponentId: z.ZodString;
            mergedIntoComponentId: z.ZodNullable<z.ZodString>;
            currentStatus: z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
            }>;
            firstSeenAt: z.ZodString;
            lastSeenAt: z.ZodString;
            deletedAt: z.ZodNullable<z.ZodString>;
            retiredAt: z.ZodNullable<z.ZodString>;
            retirementReason: z.ZodNullable<z.ZodString>;
            legacyStateUnknown: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly deregister: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
        status: z.ZodLiteral<"observation_withdrawn">;
        componentId: z.ZodString;
        sourceType: z.ZodLiteral<"secret_key">;
        withdrawn: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<"retirement_confirmation_required">;
        preview: z.ZodObject<{
            requestedComponentId: z.ZodString;
            canonicalComponentId: z.ZodString;
            canonicalComponentName: z.ZodString;
            lifecycle: z.ZodEnum<{
                active: "active";
                retired: "retired";
            }>;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            requiresCanonicalGroupConfirmation: z.ZodBoolean;
            recommendationScopeEnabled: z.ZodLiteral<false>;
            dependents: z.ZodObject<{
                openIssueIds: z.ZodArray<z.ZodString>;
                activeComponentIssueIds: z.ZodArray<z.ZodString>;
                automationBindingIds: z.ZodArray<z.ZodString>;
                notificationRuleIds: z.ZodArray<z.ZodString>;
                dataSourceMappingIds: z.ZodArray<z.ZodString>;
                observationIds: z.ZodArray<z.ZodString>;
                relationshipIds: z.ZodArray<z.ZodString>;
                recommendationScopeIds: z.ZodArray<z.ZodString>;
                externalIncidentIds: z.ZodArray<z.ZodString>;
                authorizedDeliveryIds: z.ZodArray<z.ZodString>;
                authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
            counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>], "status">, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly rename: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        name: z.ZodString;
        requestId: z.ZodString;
        reason: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        component: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            origin: z.ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
                user_declared: "user_declared";
            }>;
            lifecycle: z.ZodEnum<{
                active: "active";
                merged: "merged";
                retired: "retired";
            }>;
            observationState: z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>;
            registryRevision: z.ZodNumber;
            canonicalComponentId: z.ZodString;
            mergedIntoComponentId: z.ZodNullable<z.ZodString>;
            currentStatus: z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
            }>;
            firstSeenAt: z.ZodString;
            lastSeenAt: z.ZodString;
            deletedAt: z.ZodNullable<z.ZodString>;
            retiredAt: z.ZodNullable<z.ZodString>;
            retirementReason: z.ZodNullable<z.ZodString>;
            legacyStateUnknown: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly assignTeam: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        teamId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        componentId: z.ZodString;
        teamId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly retirementPreview: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        preview: z.ZodObject<{
            requestedComponentId: z.ZodString;
            canonicalComponentId: z.ZodString;
            canonicalComponentName: z.ZodString;
            lifecycle: z.ZodEnum<{
                active: "active";
                retired: "retired";
            }>;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            requiresCanonicalGroupConfirmation: z.ZodBoolean;
            recommendationScopeEnabled: z.ZodLiteral<false>;
            dependents: z.ZodObject<{
                openIssueIds: z.ZodArray<z.ZodString>;
                activeComponentIssueIds: z.ZodArray<z.ZodString>;
                automationBindingIds: z.ZodArray<z.ZodString>;
                notificationRuleIds: z.ZodArray<z.ZodString>;
                dataSourceMappingIds: z.ZodArray<z.ZodString>;
                observationIds: z.ZodArray<z.ZodString>;
                relationshipIds: z.ZodArray<z.ZodString>;
                recommendationScopeIds: z.ZodArray<z.ZodString>;
                externalIncidentIds: z.ZodArray<z.ZodString>;
                authorizedDeliveryIds: z.ZodArray<z.ZodString>;
                authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
            counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly retire: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        requestId: z.ZodString;
        reason: z.ZodString;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        confirmCanonicalGroup: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        result: z.ZodObject<{
            operationId: z.ZodString;
            status: z.ZodEnum<{
                committed: "committed";
                complete: "complete";
                followup_failed: "followup_failed";
            }>;
            requestedComponentId: z.ZodString;
            canonicalComponentId: z.ZodString;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
            authorizedDeliveryIds: z.ZodArray<z.ZodString>;
            authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
            manualExternalIncidentIds: z.ZodArray<z.ZodString>;
            issueAutomationSuppressions: z.ZodNumber;
            outboxEffectCount: z.ZodNumber;
            manifest: z.ZodObject<{
                notificationRules: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    rowRevision: z.ZodNumber;
                }, z.core.$strip>>;
                automationBindings: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    rowRevision: z.ZodNumber;
                }, z.core.$strip>>;
                relationships: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    rowRevision: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            followups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly restorationPreview: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        retirementOperationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        preview: z.ZodObject<{
            requestedComponentId: z.ZodString;
            canonicalComponentId: z.ZodString;
            canonicalComponentName: z.ZodString;
            retirementOperationId: z.ZodString;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            eligible: z.ZodObject<{
                notificationRuleIds: z.ZodArray<z.ZodString>;
                automationBindingIds: z.ZodArray<z.ZodString>;
                recommendationScopeIds: z.ZodArray<z.ZodString>;
                relationshipIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly restore: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        retirementOperationId: z.ZodString;
        requestId: z.ZodString;
        reason: z.ZodString;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        selections: z.ZodDefault<z.ZodObject<{
            notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            relationshipIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        result: z.ZodObject<{
            operationId: z.ZodString;
            status: z.ZodLiteral<"complete">;
            requestedComponentId: z.ZodString;
            canonicalComponentId: z.ZodString;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            restored: z.ZodObject<{
                notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
                automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
                recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
                relationshipIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly mergePreview: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        preview: z.ZodObject<{
            sourceComponentId: z.ZodString;
            targetComponentId: z.ZodString;
            organizationId: z.ZodString;
            projectId: z.ZodString;
            sourceGroupComponentIds: z.ZodArray<z.ZodString>;
            targetGroupComponentIds: z.ZodArray<z.ZodString>;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            inventory: z.ZodObject<{
                openIssueIds: z.ZodArray<z.ZodString>;
                componentIssueIds: z.ZodArray<z.ZodString>;
                observationIds: z.ZodArray<z.ZodString>;
                dataSourceMappingIds: z.ZodArray<z.ZodString>;
                nameIds: z.ZodArray<z.ZodString>;
                relationshipIds: z.ZodArray<z.ZodString>;
                recommendationScopeIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
            notificationPolicies: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    automation_binding: "automation_binding";
                    notification_rule: "notification_rule";
                }>;
                policyId: z.ZodString;
                sourceRowRevision: z.ZodNumber;
                sourceComponentId: z.ZodString;
                equivalentPolicyId: z.ZodNullable<z.ZodString>;
                equivalent: z.ZodBoolean;
                defaultDisposition: z.ZodEnum<{
                    deduplicate: "deduplicate";
                    suspend: "suspend";
                }>;
                allowedDispositions: z.ZodArray<z.ZodEnum<{
                    move: "move";
                    suspend: "suspend";
                }>>;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationBindings: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    automation_binding: "automation_binding";
                    notification_rule: "notification_rule";
                }>;
                policyId: z.ZodString;
                sourceRowRevision: z.ZodNumber;
                sourceComponentId: z.ZodString;
                equivalentPolicyId: z.ZodNullable<z.ZodString>;
                equivalent: z.ZodBoolean;
                defaultDisposition: z.ZodEnum<{
                    deduplicate: "deduplicate";
                    suspend: "suspend";
                }>;
                allowedDispositions: z.ZodArray<z.ZodEnum<{
                    move: "move";
                    suspend: "suspend";
                }>>;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            notificationScopeChanges: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    automation_binding: "automation_binding";
                    notification_rule: "notification_rule";
                }>;
                policyId: z.ZodString;
                ownerComponentId: z.ZodString;
                rowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            automationScopeChanges: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    automation_binding: "automation_binding";
                    notification_rule: "notification_rule";
                }>;
                policyId: z.ZodString;
                ownerComponentId: z.ZodString;
                rowRevision: z.ZodNumber;
                beforeComponentIds: z.ZodArray<z.ZodString>;
                afterComponentIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            relationshipChanges: z.ZodArray<z.ZodObject<{
                relationshipId: z.ZodString;
                action: z.ZodEnum<{
                    close_duplicate: "close_duplicate";
                    close_self: "close_self";
                    rewire: "rewire";
                }>;
                relationshipType: z.ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                beforeSourceComponentId: z.ZodString;
                beforeTargetComponentId: z.ZodString;
                afterSourceComponentId: z.ZodString;
                afterTargetComponentId: z.ZodString;
                survivingRelationshipId: z.ZodNullable<z.ZodString>;
                beforeRowRevision: z.ZodNumber;
                afterRowRevision: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            recommendationScopeEnabled: z.ZodLiteral<false>;
            dependentCount: z.ZodNumber;
            ordinaryTransactionLimit: z.ZodNumber;
            operatorAssistanceRequired: z.ZodBoolean;
            confirmationRequired: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly merge: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
        requestId: z.ZodString;
        reason: z.ZodString;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        policyDispositions: z.ZodRecord<z.ZodString, z.ZodObject<{
            disposition: z.ZodEnum<{
                move: "move";
                suspend: "suspend";
            }>;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        result: z.ZodObject<{
            sourceComponentId: z.ZodString;
            targetComponentId: z.ZodString;
            operationId: z.ZodString;
            status: z.ZodLiteral<"complete">;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            manifest: z.ZodObject<{
                componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
                redirectedComponentIds: z.ZodArray<z.ZodString>;
                dataSourceMappingIds: z.ZodArray<z.ZodString>;
                movedAliasIds: z.ZodArray<z.ZodString>;
                historicalDisplayIds: z.ZodArray<z.ZodString>;
                relationshipChanges: z.ZodArray<z.ZodObject<{
                    relationshipId: z.ZodString;
                    action: z.ZodEnum<{
                        close_duplicate: "close_duplicate";
                        close_self: "close_self";
                        rewire: "rewire";
                    }>;
                    relationshipType: z.ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    beforeSourceComponentId: z.ZodString;
                    beforeTargetComponentId: z.ZodString;
                    afterSourceComponentId: z.ZodString;
                    afterTargetComponentId: z.ZodString;
                    survivingRelationshipId: z.ZodNullable<z.ZodString>;
                    beforeRowRevision: z.ZodNumber;
                    afterRowRevision: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strip>>;
                notificationPolicies: z.ZodArray<z.ZodObject<{
                    policyId: z.ZodString;
                    action: z.ZodEnum<{
                        deduplicated: "deduplicated";
                        moved: "moved";
                        suspended: "suspended";
                    }>;
                    equivalentPolicyId: z.ZodNullable<z.ZodString>;
                    beforeRowRevision: z.ZodNumber;
                    afterRowRevision: z.ZodNumber;
                    beforeComponentIds: z.ZodArray<z.ZodString>;
                    afterComponentIds: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                automationBindings: z.ZodArray<z.ZodObject<{
                    policyId: z.ZodString;
                    action: z.ZodEnum<{
                        deduplicated: "deduplicated";
                        moved: "moved";
                        suspended: "suspended";
                    }>;
                    equivalentPolicyId: z.ZodNullable<z.ZodString>;
                    beforeRowRevision: z.ZodNumber;
                    afterRowRevision: z.ZodNumber;
                    beforeComponentIds: z.ZodArray<z.ZodString>;
                    afterComponentIds: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                notificationScopeChanges: z.ZodArray<z.ZodObject<{
                    kind: z.ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: z.ZodString;
                    ownerComponentId: z.ZodString;
                    rowRevision: z.ZodNumber;
                    beforeComponentIds: z.ZodArray<z.ZodString>;
                    afterComponentIds: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                automationScopeChanges: z.ZodArray<z.ZodObject<{
                    kind: z.ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: z.ZodString;
                    ownerComponentId: z.ZodString;
                    rowRevision: z.ZodNumber;
                    beforeComponentIds: z.ZodArray<z.ZodString>;
                    afterComponentIds: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                recommendationScopeIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly relationships: {
        readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            projectId: z.ZodOptional<z.ZodString>;
            includeHistorical: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
        }, z.core.$strip>, z.ZodObject<{
            relationships: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                source: z.ZodObject<{
                    originalComponentId: z.ZodString;
                    effectiveComponentId: z.ZodString;
                    name: z.ZodString;
                    lifecycle: z.ZodEnum<{
                        active: "active";
                        merged: "merged";
                        retired: "retired";
                    }>;
                    observationState: z.ZodEnum<{
                        observed: "observed";
                        stale: "stale";
                        unobserved: "unobserved";
                    }>;
                }, z.core.$strip>;
                target: z.ZodObject<{
                    originalComponentId: z.ZodString;
                    effectiveComponentId: z.ZodString;
                    name: z.ZodString;
                    lifecycle: z.ZodEnum<{
                        active: "active";
                        merged: "merged";
                        retired: "retired";
                    }>;
                    observationState: z.ZodEnum<{
                        observed: "observed";
                        stale: "stale";
                        unobserved: "unobserved";
                    }>;
                }, z.core.$strip>;
                relationshipType: z.ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                createdAt: z.ZodString;
                endedAt: z.ZodNullable<z.ZodString>;
                endReason: z.ZodNullable<z.ZodString>;
                rowRevision: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly preview: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            projectId: z.ZodOptional<z.ZodString>;
            sourceComponentId: z.ZodString;
            targetComponentId: z.ZodString;
            relationshipType: z.ZodEnum<{
                depends_on: "depends_on";
                part_of: "part_of";
            }>;
            action: z.ZodEnum<{
                add: "add";
                remove: "remove";
            }>;
        }, z.core.$strip>, z.ZodObject<{
            preview: z.ZodObject<{
                sourceComponentId: z.ZodString;
                targetComponentId: z.ZodString;
                relationshipType: z.ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                action: z.ZodEnum<{
                    add: "add";
                    remove: "remove";
                }>;
                organizationId: z.ZodString;
                projectId: z.ZodString;
                relationshipId: z.ZodNullable<z.ZodString>;
                componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
                policyImpact: z.ZodObject<{
                    notificationRules: z.ZodArray<z.ZodObject<{
                        ruleId: z.ZodString;
                        ruleGroupId: z.ZodNullable<z.ZodString>;
                        ownerComponentId: z.ZodString;
                        destinationIds: z.ZodArray<z.ZodString>;
                        beforeComponentIds: z.ZodArray<z.ZodString>;
                        afterComponentIds: z.ZodArray<z.ZodString>;
                    }, z.core.$strip>>;
                    automationBindings: z.ZodArray<z.ZodObject<{
                        bindingId: z.ZodString;
                        automationId: z.ZodString;
                        ownerComponentId: z.ZodString;
                        beforeComponentIds: z.ZodArray<z.ZodString>;
                        afterComponentIds: z.ZodArray<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                confirmationRequired: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly add: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            projectId: z.ZodOptional<z.ZodString>;
            sourceComponentId: z.ZodString;
            targetComponentId: z.ZodString;
            relationshipType: z.ZodEnum<{
                depends_on: "depends_on";
                part_of: "part_of";
            }>;
            requestId: z.ZodString;
            reason: z.ZodString;
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodObject<{
            result: z.ZodObject<{
                action: z.ZodEnum<{
                    add: "add";
                    remove: "remove";
                }>;
                relationshipId: z.ZodString;
                sourceComponentId: z.ZodString;
                targetComponentId: z.ZodString;
                relationshipType: z.ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                policyImpact: z.ZodObject<{
                    notificationRules: z.ZodArray<z.ZodObject<{
                        ruleId: z.ZodString;
                        ruleGroupId: z.ZodNullable<z.ZodString>;
                        ownerComponentId: z.ZodString;
                        destinationIds: z.ZodArray<z.ZodString>;
                        beforeComponentIds: z.ZodArray<z.ZodString>;
                        afterComponentIds: z.ZodArray<z.ZodString>;
                    }, z.core.$strip>>;
                    automationBindings: z.ZodArray<z.ZodObject<{
                        bindingId: z.ZodString;
                        automationId: z.ZodString;
                        ownerComponentId: z.ZodString;
                        beforeComponentIds: z.ZodArray<z.ZodString>;
                        afterComponentIds: z.ZodArray<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly remove: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            projectId: z.ZodOptional<z.ZodString>;
            sourceComponentId: z.ZodString;
            targetComponentId: z.ZodString;
            relationshipType: z.ZodEnum<{
                depends_on: "depends_on";
                part_of: "part_of";
            }>;
            requestId: z.ZodString;
            reason: z.ZodString;
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodObject<{
            result: z.ZodObject<{
                action: z.ZodEnum<{
                    add: "add";
                    remove: "remove";
                }>;
                relationshipId: z.ZodString;
                sourceComponentId: z.ZodString;
                targetComponentId: z.ZodString;
                relationshipType: z.ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                policyImpact: z.ZodObject<{
                    notificationRules: z.ZodArray<z.ZodObject<{
                        ruleId: z.ZodString;
                        ruleGroupId: z.ZodNullable<z.ZodString>;
                        ownerComponentId: z.ZodString;
                        destinationIds: z.ZodArray<z.ZodString>;
                        beforeComponentIds: z.ZodArray<z.ZodString>;
                        afterComponentIds: z.ZodArray<z.ZodString>;
                    }, z.core.$strip>>;
                    automationBindings: z.ZodArray<z.ZodObject<{
                        bindingId: z.ZodString;
                        automationId: z.ZodString;
                        ownerComponentId: z.ZodString;
                        beforeComponentIds: z.ZodArray<z.ZodString>;
                        afterComponentIds: z.ZodArray<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly incidents: {
        readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            projectId: z.ZodOptional<z.ZodString>;
            componentId: z.ZodOptional<z.ZodString>;
            activeOnly: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            cursor: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            incidents: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                componentId: z.ZodString;
                projectId: z.ZodString;
                severity: z.ZodEnum<{
                    degraded: "degraded";
                    outage: "outage";
                }>;
                summary: z.ZodString;
                startedAt: z.ZodString;
                resolvedAt: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            nextCursor: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly timeline: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        windowStart: z.ZodOptional<z.ZodString>;
        windowEnd: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        componentId: z.ZodString;
        windowStart: z.ZodString;
        windowEnd: z.ZodString;
        timeline: z.ZodArray<z.ZodObject<{
            timestamp: z.ZodString;
            status: z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
                unknown: "unknown";
            }>;
        }, z.core.$strip>>;
        incidents: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            componentId: z.ZodString;
            projectId: z.ZodString;
            severity: z.ZodEnum<{
                degraded: "degraded";
                outage: "outage";
            }>;
            summary: z.ZodString;
            startedAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
