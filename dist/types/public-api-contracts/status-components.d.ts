import { z } from "zod";
export declare const StatusComponentSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    currentStatus: z.ZodEnum<{
        degraded: "degraded";
        operational: "operational";
        outage: "outage";
    }>;
    firstSeenAt: z.ZodString;
    lastSeenAt: z.ZodString;
    deletedAt: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type StatusComponent = z.infer<typeof StatusComponentSchema>;
export declare const ListStatusComponentsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    includeDeleted: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>;
export type ListStatusComponentsInput = z.infer<typeof ListStatusComponentsInputSchema>;
export declare const ListStatusComponentsOutputSchema: z.ZodObject<{
    statusComponents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListStatusComponentsOutput = z.infer<typeof ListStatusComponentsOutputSchema>;
export declare const GetStatusComponentInputSchema: z.ZodObject<{
    componentId: z.ZodString;
}, z.core.$strip>;
export type GetStatusComponentInput = z.infer<typeof GetStatusComponentInputSchema>;
export declare const GetStatusComponentOutputSchema: z.ZodObject<{
    statusComponent: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetStatusComponentOutput = z.infer<typeof GetStatusComponentOutputSchema>;
export declare const RegisterStatusComponentInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RegisterStatusComponentInput = z.infer<typeof RegisterStatusComponentInputSchema>;
export declare const RegisterStatusComponentOutputSchema: z.ZodObject<{
    statusComponent: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RegisterStatusComponentOutput = z.infer<typeof RegisterStatusComponentOutputSchema>;
export declare const DeregisterStatusComponentInputSchema: z.ZodObject<{
    componentId: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeregisterStatusComponentInput = z.infer<typeof DeregisterStatusComponentInputSchema>;
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
export declare const DeregisterStatusComponentOutputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type DeregisterStatusComponentOutput = z.infer<typeof DeregisterStatusComponentOutputSchema>;
export declare const listStatusComponents: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    includeDeleted: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>, z.ZodObject<{
    statusComponents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const getStatusComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    componentId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    statusComponent: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const registerStatusComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    statusComponent: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        currentStatus: z.ZodEnum<{
            degraded: "degraded";
            operational: "operational";
            outage: "outage";
        }>;
        firstSeenAt: z.ZodString;
        lastSeenAt: z.ZodString;
        deletedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const deregisterStatusComponent: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
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
export declare const statusComponentsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
        includeDeleted: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    }, z.core.$strip>, z.ZodObject<{
        statusComponents: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            currentStatus: z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
            }>;
            firstSeenAt: z.ZodString;
            lastSeenAt: z.ZodString;
            deletedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        componentId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        statusComponent: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            currentStatus: z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
            }>;
            firstSeenAt: z.ZodString;
            lastSeenAt: z.ZodString;
            deletedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly register: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        requestId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        statusComponent: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            currentStatus: z.ZodEnum<{
                degraded: "degraded";
                operational: "operational";
                outage: "outage";
            }>;
            firstSeenAt: z.ZodString;
            lastSeenAt: z.ZodString;
            deletedAt: z.ZodNullable<z.ZodString>;
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
