import { z } from "zod";
/** The longest error-log body a `new_error` signal carries, in bytes. */
export declare const SIGNAL_LOG_BODY_MAX_BYTES: number;
export declare const SignalTypeSchema: z.ZodEnum<{
    new_error: "new_error";
}>;
export type SignalType = z.infer<typeof SignalTypeSchema>;
export declare const NewErrorPayloadSchema: z.ZodObject<{
    timestamp: z.ZodString;
    serviceName: z.ZodNullable<z.ZodString>;
    severity: z.ZodNullable<z.ZodString>;
    body: z.ZodString;
}, z.core.$strict>;
export type NewErrorPayload = z.infer<typeof NewErrorPayloadSchema>;
export declare const SignalSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<"new_error">;
    payload: z.ZodObject<{
        timestamp: z.ZodString;
        serviceName: z.ZodNullable<z.ZodString>;
        severity: z.ZodNullable<z.ZodString>;
        body: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>], "type">;
export type Signal = z.infer<typeof SignalSchema>;
export declare const ListSignalsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        new_error: "new_error";
    }>>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListSignalsInput = z.infer<typeof ListSignalsInputSchema>;
export declare const ListSignalsOutputSchema: z.ZodObject<{
    signals: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        createdAt: z.ZodString;
        type: z.ZodLiteral<"new_error">;
        payload: z.ZodObject<{
            timestamp: z.ZodString;
            serviceName: z.ZodNullable<z.ZodString>;
            severity: z.ZodNullable<z.ZodString>;
            body: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strip>], "type">>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListSignalsOutput = z.infer<typeof ListSignalsOutputSchema>;
export declare const GetSignalInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    signalId: z.ZodString;
}, z.core.$strip>;
export type GetSignalInput = z.infer<typeof GetSignalInputSchema>;
export declare const GetSignalOutputSchema: z.ZodObject<{
    signal: z.ZodDiscriminatedUnion<[z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        createdAt: z.ZodString;
        type: z.ZodLiteral<"new_error">;
        payload: z.ZodObject<{
            timestamp: z.ZodString;
            serviceName: z.ZodNullable<z.ZodString>;
            severity: z.ZodNullable<z.ZodString>;
            body: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strip>], "type">;
}, z.core.$strip>;
export type GetSignalOutput = z.infer<typeof GetSignalOutputSchema>;
export declare const listSignals: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        new_error: "new_error";
    }>>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    signals: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        createdAt: z.ZodString;
        type: z.ZodLiteral<"new_error">;
        payload: z.ZodObject<{
            timestamp: z.ZodString;
            serviceName: z.ZodNullable<z.ZodString>;
            severity: z.ZodNullable<z.ZodString>;
            body: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strip>], "type">>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const getSignal: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    signalId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    signal: z.ZodDiscriminatedUnion<[z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        createdAt: z.ZodString;
        type: z.ZodLiteral<"new_error">;
        payload: z.ZodObject<{
            timestamp: z.ZodString;
            serviceName: z.ZodNullable<z.ZodString>;
            severity: z.ZodNullable<z.ZodString>;
            body: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strip>], "type">;
}, z.core.$strip>, "api">;
