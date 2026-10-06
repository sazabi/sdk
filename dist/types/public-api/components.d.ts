import { z } from "zod";
export declare const ComponentSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    slug: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    teamId: z.ZodNullable<z.ZodString>;
    teamName: z.ZodNullable<z.ZodString>;
    origin: z.ZodEnum<{
        code_detected: "code_detected";
        log_observed: "log_observed";
        user_declared: "user_declared";
    }>;
    lifecycle: z.ZodEnum<{
        active: "active";
        inactive: "inactive";
        merged: "merged";
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
    inactiveAt: z.ZodNullable<z.ZodString>;
    inactiveReason: z.ZodNullable<z.ZodString>;
    legacyStateUnknown: z.ZodBoolean;
}, z.core.$strip>;
export type Component = z.infer<typeof ComponentSchema>;
export declare const ListComponentsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    includeDeleted: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    compact: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>;
export type ListComponentsInput = z.infer<typeof ListComponentsInputSchema>;
/** A listed component; only the summary fields are present in compact mode. */
export declare const ComponentListItemSchema: z.ZodObject<{
    id: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
    slug: z.ZodNonOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    teamId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    teamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    origin: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
        code_detected: "code_detected";
        log_observed: "log_observed";
        user_declared: "user_declared";
    }>>>;
    lifecycle: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
        merged: "merged";
    }>>>;
    observationState: z.ZodOptional<z.ZodEnum<{
        observed: "observed";
        stale: "stale";
        unobserved: "unobserved";
    }>>;
    registryRevision: z.ZodOptional<z.ZodNumber>;
    canonicalComponentId: z.ZodOptional<z.ZodString>;
    mergedIntoComponentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentStatus: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
        degraded: "degraded";
        operational: "operational";
        outage: "outage";
    }>>>;
    firstSeenAt: z.ZodOptional<z.ZodString>;
    lastSeenAt: z.ZodOptional<z.ZodString>;
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inactiveAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inactiveReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    legacyStateUnknown: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ComponentListItem = z.infer<typeof ComponentListItemSchema>;
export declare const ListComponentsOutputSchema: z.ZodObject<{
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
        slug: z.ZodNonOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        teamId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        teamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        origin: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>>>;
        lifecycle: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
            active: "active";
            inactive: "inactive";
            merged: "merged";
        }>>>;
        observationState: z.ZodOptional<z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>>;
        registryRevision: z.ZodOptional<z.ZodNumber>;
        canonicalComponentId: z.ZodOptional<z.ZodString>;
        mergedIntoComponentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        currentStatus: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>>>;
        firstSeenAt: z.ZodOptional<z.ZodString>;
        lastSeenAt: z.ZodOptional<z.ZodString>;
        deletedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inactiveAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inactiveReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        legacyStateUnknown: z.ZodOptional<z.ZodBoolean>;
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
        slug: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        teamId: z.ZodNullable<z.ZodString>;
        teamName: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
            merged: "merged";
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
        inactiveAt: z.ZodNullable<z.ZodString>;
        inactiveReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetComponentOutput = z.infer<typeof GetComponentOutputSchema>;
export declare const RegisterComponentInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
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
        slug: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        teamId: z.ZodNullable<z.ZodString>;
        teamName: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
            merged: "merged";
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
        inactiveAt: z.ZodNullable<z.ZodString>;
        inactiveReason: z.ZodNullable<z.ZodString>;
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
        slug: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        teamId: z.ZodNullable<z.ZodString>;
        teamName: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
            merged: "merged";
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
        inactiveAt: z.ZodNullable<z.ZodString>;
        inactiveReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RenameComponentOutput = z.infer<typeof RenameComponentOutputSchema>;
export declare const DeregisterComponentInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodString>;
    componentRevisions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    confirmCanonicalGroup: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeregisterComponentInput = z.infer<typeof DeregisterComponentInputSchema>;
export declare const ComponentDeregistrationPreviewSchema: z.ZodObject<{
    requestedComponentId: z.ZodString;
    canonicalComponentId: z.ZodString;
    canonicalComponentName: z.ZodString;
    lifecycle: z.ZodEnum<{
        active: "active";
        inactive: "inactive";
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
        recommendationScopeIds: z.ZodArray<z.ZodString>;
        externalIncidentIds: z.ZodArray<z.ZodString>;
        authorizedDeliveryIds: z.ZodArray<z.ZodString>;
        authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type ComponentDeregistrationPreview = z.infer<typeof ComponentDeregistrationPreviewSchema>;
export declare const CommitComponentDeregistrationInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    confirmCanonicalGroup: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type CommitComponentDeregistrationInput = z.infer<typeof CommitComponentDeregistrationInputSchema>;
export declare const ComponentDeregistrationResultSchema: z.ZodObject<{
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
    }, z.core.$strip>;
    followups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type ComponentDeregistrationResult = z.infer<typeof ComponentDeregistrationResultSchema>;
export declare const DeregisterComponentOutputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"observation_withdrawn">;
    componentId: z.ZodString;
    sourceType: z.ZodLiteral<"secret_key">;
    withdrawn: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"deregistration_confirmation_required">;
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        lifecycle: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
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
            recommendationScopeIds: z.ZodArray<z.ZodString>;
            externalIncidentIds: z.ZodArray<z.ZodString>;
            authorizedDeliveryIds: z.ZodArray<z.ZodString>;
            authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"deregistered">;
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
        }, z.core.$strip>;
        followups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>;
}, z.core.$strip>], "status">;
export type DeregisterComponentOutput = z.infer<typeof DeregisterComponentOutputSchema>;
export declare const listComponents: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    includeDeleted: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    compact: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>, z.ZodObject<{
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
        slug: z.ZodNonOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        teamId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        teamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        origin: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>>>;
        lifecycle: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
            active: "active";
            inactive: "inactive";
            merged: "merged";
        }>>>;
        observationState: z.ZodOptional<z.ZodEnum<{
            observed: "observed";
            stale: "stale";
            unobserved: "unobserved";
        }>>;
        registryRevision: z.ZodOptional<z.ZodNumber>;
        canonicalComponentId: z.ZodOptional<z.ZodString>;
        mergedIntoComponentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        currentStatus: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>>>;
        firstSeenAt: z.ZodOptional<z.ZodString>;
        lastSeenAt: z.ZodOptional<z.ZodString>;
        deletedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inactiveAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inactiveReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        legacyStateUnknown: z.ZodOptional<z.ZodBoolean>;
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
        slug: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        teamId: z.ZodNullable<z.ZodString>;
        teamName: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
            merged: "merged";
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
        inactiveAt: z.ZodNullable<z.ZodString>;
        inactiveReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const registerComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
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
        slug: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        teamId: z.ZodNullable<z.ZodString>;
        teamName: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
            merged: "merged";
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
        inactiveAt: z.ZodNullable<z.ZodString>;
        inactiveReason: z.ZodNullable<z.ZodString>;
        legacyStateUnknown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const deregisterComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodString>;
    componentRevisions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    confirmCanonicalGroup: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"observation_withdrawn">;
    componentId: z.ZodString;
    sourceType: z.ZodLiteral<"secret_key">;
    withdrawn: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"deregistration_confirmation_required">;
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        lifecycle: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
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
            recommendationScopeIds: z.ZodArray<z.ZodString>;
            externalIncidentIds: z.ZodArray<z.ZodString>;
            authorizedDeliveryIds: z.ZodArray<z.ZodString>;
            authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"deregistered">;
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
        }, z.core.$strip>;
        followups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
        slug: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        teamId: z.ZodNullable<z.ZodString>;
        teamName: z.ZodNullable<z.ZodString>;
        origin: z.ZodEnum<{
            code_detected: "code_detected";
            log_observed: "log_observed";
            user_declared: "user_declared";
        }>;
        lifecycle: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
            merged: "merged";
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
        inactiveAt: z.ZodNullable<z.ZodString>;
        inactiveReason: z.ZodNullable<z.ZodString>;
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
export declare const PreviewComponentReactivationInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    deregistrationOperationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PreviewComponentReactivationInput = z.infer<typeof PreviewComponentReactivationInputSchema>;
export declare const ComponentReactivationPreviewSchema: z.ZodObject<{
    requestedComponentId: z.ZodString;
    canonicalComponentId: z.ZodString;
    canonicalComponentName: z.ZodString;
    deregistrationOperationId: z.ZodString;
    affectedComponentIds: z.ZodArray<z.ZodString>;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    eligible: z.ZodObject<{
        notificationRuleIds: z.ZodArray<z.ZodString>;
        automationBindingIds: z.ZodArray<z.ZodString>;
        recommendationScopeIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ComponentReactivationPreview = z.infer<typeof ComponentReactivationPreviewSchema>;
export declare const PreviewComponentReactivationOutputSchema: z.ZodObject<{
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        deregistrationOperationId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        eligible: z.ZodObject<{
            notificationRuleIds: z.ZodArray<z.ZodString>;
            automationBindingIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PreviewComponentReactivationOutput = z.infer<typeof PreviewComponentReactivationOutputSchema>;
export declare const ComponentReactivationSelectionsSchema: z.ZodObject<{
    notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ComponentReactivationSelections = z.infer<typeof ComponentReactivationSelectionsSchema>;
export declare const CommitComponentReactivationInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    deregistrationOperationId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    selections: z.ZodDefault<z.ZodObject<{
        notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CommitComponentReactivationInput = z.infer<typeof CommitComponentReactivationInputSchema>;
export declare const ComponentReactivationResultSchema: z.ZodObject<{
    operationId: z.ZodString;
    status: z.ZodLiteral<"complete">;
    requestedComponentId: z.ZodString;
    canonicalComponentId: z.ZodString;
    affectedComponentIds: z.ZodArray<z.ZodString>;
    reactivated: z.ZodObject<{
        notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ComponentReactivationResult = z.infer<typeof ComponentReactivationResultSchema>;
export declare const CommitComponentReactivationOutputSchema: z.ZodObject<{
    result: z.ZodObject<{
        operationId: z.ZodString;
        status: z.ZodLiteral<"complete">;
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        reactivated: z.ZodObject<{
            notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CommitComponentReactivationOutput = z.infer<typeof CommitComponentReactivationOutputSchema>;
export declare const previewComponentReactivation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    deregistrationOperationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    preview: z.ZodObject<{
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        canonicalComponentName: z.ZodString;
        deregistrationOperationId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        eligible: z.ZodObject<{
            notificationRuleIds: z.ZodArray<z.ZodString>;
            automationBindingIds: z.ZodArray<z.ZodString>;
            recommendationScopeIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const reactivateComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
    deregistrationOperationId: z.ZodString;
    requestId: z.ZodString;
    reason: z.ZodString;
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    selections: z.ZodDefault<z.ZodObject<{
        notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    result: z.ZodObject<{
        operationId: z.ZodString;
        status: z.ZodLiteral<"complete">;
        requestedComponentId: z.ZodString;
        canonicalComponentId: z.ZodString;
        affectedComponentIds: z.ZodArray<z.ZodString>;
        reactivated: z.ZodObject<{
            notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
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
    owningTeams: z.ZodArray<z.ZodObject<{
        componentId: z.ZodString;
        teamId: z.ZodString;
        teamName: z.ZodString;
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
        owningTeams: z.ZodArray<z.ZodObject<{
            componentId: z.ZodString;
            teamId: z.ZodString;
            teamName: z.ZodString;
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
    policyDispositions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        disposition: z.ZodEnum<{
            move: "move";
            suspend: "suspend";
        }>;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    confirmPolicyImpact: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type CommitComponentMergeInput = z.infer<typeof CommitComponentMergeInputSchema>;
export declare const ComponentMergeManifestSchema: z.ZodObject<{
    componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    redirectedComponentIds: z.ZodArray<z.ZodString>;
    dataSourceMappingIds: z.ZodArray<z.ZodString>;
    movedAliasIds: z.ZodArray<z.ZodString>;
    historicalDisplayIds: z.ZodArray<z.ZodString>;
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
        owningTeams: z.ZodArray<z.ZodObject<{
            componentId: z.ZodString;
            teamId: z.ZodString;
            teamName: z.ZodString;
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
    policyDispositions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        disposition: z.ZodEnum<{
            move: "move";
            suspend: "suspend";
        }>;
        beforeComponentIds: z.ZodArray<z.ZodString>;
        afterComponentIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
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
        compact: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    }, z.core.$strip>, z.ZodObject<{
        components: z.ZodArray<z.ZodObject<{
            id: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
            projectId: z.ZodOptional<z.ZodString>;
            name: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
            slug: z.ZodNonOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            teamId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            teamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            origin: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
                user_declared: "user_declared";
            }>>>;
            lifecycle: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
                active: "active";
                inactive: "inactive";
                merged: "merged";
            }>>>;
            observationState: z.ZodOptional<z.ZodEnum<{
                observed: "observed";
                stale: "stale";
                unobserved: "unobserved";
            }>>;
            registryRevision: z.ZodOptional<z.ZodNumber>;
            canonicalComponentId: z.ZodOptional<z.ZodString>;
            mergedIntoComponentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            currentStatus: z.ZodNonOptional<z.ZodOptional<z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
            }>>>;
            firstSeenAt: z.ZodOptional<z.ZodString>;
            lastSeenAt: z.ZodOptional<z.ZodString>;
            deletedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            inactiveAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            inactiveReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            legacyStateUnknown: z.ZodOptional<z.ZodBoolean>;
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
            slug: z.ZodNullable<z.ZodString>;
            description: z.ZodNullable<z.ZodString>;
            teamId: z.ZodNullable<z.ZodString>;
            teamName: z.ZodNullable<z.ZodString>;
            origin: z.ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
                user_declared: "user_declared";
            }>;
            lifecycle: z.ZodEnum<{
                active: "active";
                inactive: "inactive";
                merged: "merged";
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
            inactiveAt: z.ZodNullable<z.ZodString>;
            inactiveReason: z.ZodNullable<z.ZodString>;
            legacyStateUnknown: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly register: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodString>;
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
            slug: z.ZodNullable<z.ZodString>;
            description: z.ZodNullable<z.ZodString>;
            teamId: z.ZodNullable<z.ZodString>;
            teamName: z.ZodNullable<z.ZodString>;
            origin: z.ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
                user_declared: "user_declared";
            }>;
            lifecycle: z.ZodEnum<{
                active: "active";
                inactive: "inactive";
                merged: "merged";
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
            inactiveAt: z.ZodNullable<z.ZodString>;
            inactiveReason: z.ZodNullable<z.ZodString>;
            legacyStateUnknown: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly deregister: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        requestId: z.ZodOptional<z.ZodString>;
        componentRevisions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        confirmCanonicalGroup: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
        status: z.ZodLiteral<"observation_withdrawn">;
        componentId: z.ZodString;
        sourceType: z.ZodLiteral<"secret_key">;
        withdrawn: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<"deregistration_confirmation_required">;
        preview: z.ZodObject<{
            requestedComponentId: z.ZodString;
            canonicalComponentId: z.ZodString;
            canonicalComponentName: z.ZodString;
            lifecycle: z.ZodEnum<{
                active: "active";
                inactive: "inactive";
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
                recommendationScopeIds: z.ZodArray<z.ZodString>;
                externalIncidentIds: z.ZodArray<z.ZodString>;
                authorizedDeliveryIds: z.ZodArray<z.ZodString>;
                authorizedAutomationRunIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
            counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<"deregistered">;
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
            }, z.core.$strip>;
            followups: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
            slug: z.ZodNullable<z.ZodString>;
            description: z.ZodNullable<z.ZodString>;
            teamId: z.ZodNullable<z.ZodString>;
            teamName: z.ZodNullable<z.ZodString>;
            origin: z.ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
                user_declared: "user_declared";
            }>;
            lifecycle: z.ZodEnum<{
                active: "active";
                inactive: "inactive";
                merged: "merged";
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
            inactiveAt: z.ZodNullable<z.ZodString>;
            inactiveReason: z.ZodNullable<z.ZodString>;
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
    readonly reactivationPreview: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        deregistrationOperationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        preview: z.ZodObject<{
            requestedComponentId: z.ZodString;
            canonicalComponentId: z.ZodString;
            canonicalComponentName: z.ZodString;
            deregistrationOperationId: z.ZodString;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
            eligible: z.ZodObject<{
                notificationRuleIds: z.ZodArray<z.ZodString>;
                automationBindingIds: z.ZodArray<z.ZodString>;
                recommendationScopeIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly reactivate: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
        deregistrationOperationId: z.ZodString;
        requestId: z.ZodString;
        reason: z.ZodString;
        componentRevisions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        selections: z.ZodDefault<z.ZodObject<{
            notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        result: z.ZodObject<{
            operationId: z.ZodString;
            status: z.ZodLiteral<"complete">;
            requestedComponentId: z.ZodString;
            canonicalComponentId: z.ZodString;
            affectedComponentIds: z.ZodArray<z.ZodString>;
            reactivated: z.ZodObject<{
                notificationRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
                automationBindingIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
                recommendationScopeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
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
            owningTeams: z.ZodArray<z.ZodObject<{
                componentId: z.ZodString;
                teamId: z.ZodString;
                teamName: z.ZodString;
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
        policyDispositions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            disposition: z.ZodEnum<{
                move: "move";
                suspend: "suspend";
            }>;
            beforeComponentIds: z.ZodArray<z.ZodString>;
            afterComponentIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
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
                recommendationScopeIds: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
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
