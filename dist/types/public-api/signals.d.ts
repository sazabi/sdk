import { z } from "zod";
export declare const SignalDispatchStatusSchema: z.ZodEnum<{
    dispatched: "dispatched";
    dispatching: "dispatching";
    failed: "failed";
    pending: "pending";
}>;
export type SignalDispatchStatus = z.infer<typeof SignalDispatchStatusSchema>;
export declare const SignalDeliverySchema: z.ZodObject<{
    automationId: z.ZodString;
    dispatchStatus: z.ZodEnum<{
        dispatched: "dispatched";
        dispatching: "dispatching";
        failed: "failed";
        pending: "pending";
    }>;
    automationRunId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type SignalDelivery = z.infer<typeof SignalDeliverySchema>;
export declare const SignalSampleLogSchema: z.ZodObject<{
    timestamp: z.ZodNullable<z.ZodString>;
    body: z.ZodString;
}, z.core.$strip>;
export type SignalSampleLog = z.infer<typeof SignalSampleLogSchema>;
export declare const SignalSchema: z.ZodObject<{
    id: z.ZodString;
    signalDefinitionId: z.ZodString;
    definitionRevision: z.ZodNullable<z.ZodNumber>;
    expression: z.ZodNullable<z.ZodString>;
    serviceName: z.ZodNullable<z.ZodString>;
    severityText: z.ZodNullable<z.ZodString>;
    firstSeenAt: z.ZodNullable<z.ZodString>;
    lastSeenAt: z.ZodNullable<z.ZodString>;
    sampleLogs: z.ZodArray<z.ZodObject<{
        timestamp: z.ZodNullable<z.ZodString>;
        body: z.ZodString;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    deliveries: z.ZodArray<z.ZodObject<{
        automationId: z.ZodString;
        dispatchStatus: z.ZodEnum<{
            dispatched: "dispatched";
            dispatching: "dispatching";
            failed: "failed";
            pending: "pending";
        }>;
        automationRunId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Signal = z.infer<typeof SignalSchema>;
export declare const ListSignalsInputSchema: z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListSignalsInput = z.infer<typeof ListSignalsInputSchema>;
export declare const ListSignalsOutputSchema: z.ZodObject<{
    signals: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        signalDefinitionId: z.ZodString;
        definitionRevision: z.ZodNullable<z.ZodNumber>;
        expression: z.ZodNullable<z.ZodString>;
        serviceName: z.ZodNullable<z.ZodString>;
        severityText: z.ZodNullable<z.ZodString>;
        firstSeenAt: z.ZodNullable<z.ZodString>;
        lastSeenAt: z.ZodNullable<z.ZodString>;
        sampleLogs: z.ZodArray<z.ZodObject<{
            timestamp: z.ZodNullable<z.ZodString>;
            body: z.ZodString;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        deliveries: z.ZodArray<z.ZodObject<{
            automationId: z.ZodString;
            dispatchStatus: z.ZodEnum<{
                dispatched: "dispatched";
                dispatching: "dispatching";
                failed: "failed";
                pending: "pending";
            }>;
            automationRunId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListSignalsOutput = z.infer<typeof ListSignalsOutputSchema>;
export declare const listSignals: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    signals: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        signalDefinitionId: z.ZodString;
        definitionRevision: z.ZodNullable<z.ZodNumber>;
        expression: z.ZodNullable<z.ZodString>;
        serviceName: z.ZodNullable<z.ZodString>;
        severityText: z.ZodNullable<z.ZodString>;
        firstSeenAt: z.ZodNullable<z.ZodString>;
        lastSeenAt: z.ZodNullable<z.ZodString>;
        sampleLogs: z.ZodArray<z.ZodObject<{
            timestamp: z.ZodNullable<z.ZodString>;
            body: z.ZodString;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        deliveries: z.ZodArray<z.ZodObject<{
            automationId: z.ZodString;
            dispatchStatus: z.ZodEnum<{
                dispatched: "dispatched";
                dispatching: "dispatching";
                failed: "failed";
                pending: "pending";
            }>;
            automationRunId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const signalsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        signalDefinitionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        cursor: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        signals: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            signalDefinitionId: z.ZodString;
            definitionRevision: z.ZodNullable<z.ZodNumber>;
            expression: z.ZodNullable<z.ZodString>;
            serviceName: z.ZodNullable<z.ZodString>;
            severityText: z.ZodNullable<z.ZodString>;
            firstSeenAt: z.ZodNullable<z.ZodString>;
            lastSeenAt: z.ZodNullable<z.ZodString>;
            sampleLogs: z.ZodArray<z.ZodObject<{
                timestamp: z.ZodNullable<z.ZodString>;
                body: z.ZodString;
            }, z.core.$strip>>;
            createdAt: z.ZodString;
            deliveries: z.ZodArray<z.ZodObject<{
                automationId: z.ZodString;
                dispatchStatus: z.ZodEnum<{
                    dispatched: "dispatched";
                    dispatching: "dispatching";
                    failed: "failed";
                    pending: "pending";
                }>;
                automationRunId: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
