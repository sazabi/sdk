import { z } from "zod";
/** The longest error-log body a `new_error` signal carries, in bytes. */
export declare const SIGNAL_LOG_BODY_MAX_BYTES: number;
export declare const SignalTypeSchema: z.ZodEnum<{
    new_error: "new_error";
    sensor: "sensor";
}>;
export type SignalType = z.infer<typeof SignalTypeSchema>;
export declare const NewErrorPayloadSchema: z.ZodObject<{
    timestamp: z.ZodString;
    serviceName: z.ZodNullable<z.ZodString>;
    severity: z.ZodNullable<z.ZodString>;
    body: z.ZodString;
}, z.core.$strict>;
export type NewErrorPayload = z.infer<typeof NewErrorPayloadSchema>;
export declare const SensorSignalPayloadSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    transition: z.ZodLiteral<"firing">;
    sensor: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
    groups: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        top: z.ZodArray<z.ZodObject<{
            group: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            score: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    since: z.ZodString;
    detection: z.ZodOptional<z.ZodObject<{
        condition: z.ZodOptional<z.ZodString>;
        observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
        test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
            at: z.ZodString;
            message: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    evidence: z.ZodOptional<z.ZodObject<{
        window: z.ZodArray<z.ZodString>;
        query: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    transition: z.ZodLiteral<"resolved">;
    sensor: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
    since: z.ZodString;
    reason: z.ZodEnum<{
        deleted: "deleted";
        passing: "passing";
        updated: "updated";
    }>;
    detection: z.ZodOptional<z.ZodObject<{
        condition: z.ZodOptional<z.ZodString>;
        observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
        test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
            at: z.ZodString;
            message: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    evidence: z.ZodOptional<z.ZodObject<{
        window: z.ZodArray<z.ZodString>;
        query: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    transition: z.ZodLiteral<"stopped">;
    sensor: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    since: z.ZodString;
    reason: z.ZodEnum<{
        query_error: "query_error";
        scan_budget: "scan_budget";
    }>;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    transition: z.ZodLiteral<"reset">;
    since: z.ZodString;
}, z.core.$strip>], "transition">;
export type SensorSignalPayload = z.infer<typeof SensorSignalPayloadSchema>;
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
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<"sensor">;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        transition: z.ZodLiteral<"firing">;
        sensor: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
        groups: z.ZodOptional<z.ZodObject<{
            count: z.ZodNumber;
            top: z.ZodArray<z.ZodObject<{
                group: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                score: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        since: z.ZodString;
        detection: z.ZodOptional<z.ZodObject<{
            condition: z.ZodOptional<z.ZodString>;
            observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
            test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                at: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        evidence: z.ZodOptional<z.ZodObject<{
            window: z.ZodArray<z.ZodString>;
            query: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        transition: z.ZodLiteral<"resolved">;
        sensor: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
        since: z.ZodString;
        reason: z.ZodEnum<{
            deleted: "deleted";
            passing: "passing";
            updated: "updated";
        }>;
        detection: z.ZodOptional<z.ZodObject<{
            condition: z.ZodOptional<z.ZodString>;
            observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
            test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                at: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        evidence: z.ZodOptional<z.ZodObject<{
            window: z.ZodArray<z.ZodString>;
            query: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        transition: z.ZodLiteral<"stopped">;
        sensor: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        since: z.ZodString;
        reason: z.ZodEnum<{
            query_error: "query_error";
            scan_budget: "scan_budget";
        }>;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        transition: z.ZodLiteral<"reset">;
        since: z.ZodString;
    }, z.core.$strip>], "transition">;
}, z.core.$strip>], "type">;
export type Signal = z.infer<typeof SignalSchema>;
export declare const ListSignalsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        new_error: "new_error";
        sensor: "sensor";
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
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        createdAt: z.ZodString;
        type: z.ZodLiteral<"sensor">;
        payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
            transition: z.ZodLiteral<"firing">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
            groups: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                top: z.ZodArray<z.ZodObject<{
                    group: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                    score: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            since: z.ZodString;
            detection: z.ZodOptional<z.ZodObject<{
                condition: z.ZodOptional<z.ZodString>;
                observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    at: z.ZodString;
                    message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            evidence: z.ZodOptional<z.ZodObject<{
                window: z.ZodArray<z.ZodString>;
                query: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"resolved">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
            since: z.ZodString;
            reason: z.ZodEnum<{
                deleted: "deleted";
                passing: "passing";
                updated: "updated";
            }>;
            detection: z.ZodOptional<z.ZodObject<{
                condition: z.ZodOptional<z.ZodString>;
                observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    at: z.ZodString;
                    message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            evidence: z.ZodOptional<z.ZodObject<{
                window: z.ZodArray<z.ZodString>;
                query: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"stopped">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            since: z.ZodString;
            reason: z.ZodEnum<{
                query_error: "query_error";
                scan_budget: "scan_budget";
            }>;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"reset">;
            since: z.ZodString;
        }, z.core.$strip>], "transition">;
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
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        createdAt: z.ZodString;
        type: z.ZodLiteral<"sensor">;
        payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
            transition: z.ZodLiteral<"firing">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
            groups: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                top: z.ZodArray<z.ZodObject<{
                    group: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                    score: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            since: z.ZodString;
            detection: z.ZodOptional<z.ZodObject<{
                condition: z.ZodOptional<z.ZodString>;
                observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    at: z.ZodString;
                    message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            evidence: z.ZodOptional<z.ZodObject<{
                window: z.ZodArray<z.ZodString>;
                query: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"resolved">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
            since: z.ZodString;
            reason: z.ZodEnum<{
                deleted: "deleted";
                passing: "passing";
                updated: "updated";
            }>;
            detection: z.ZodOptional<z.ZodObject<{
                condition: z.ZodOptional<z.ZodString>;
                observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    at: z.ZodString;
                    message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            evidence: z.ZodOptional<z.ZodObject<{
                window: z.ZodArray<z.ZodString>;
                query: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"stopped">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            since: z.ZodString;
            reason: z.ZodEnum<{
                query_error: "query_error";
                scan_budget: "scan_budget";
            }>;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"reset">;
            since: z.ZodString;
        }, z.core.$strip>], "transition">;
    }, z.core.$strip>], "type">;
}, z.core.$strip>;
export type GetSignalOutput = z.infer<typeof GetSignalOutputSchema>;
export declare const listSignals: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        new_error: "new_error";
        sensor: "sensor";
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
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        createdAt: z.ZodString;
        type: z.ZodLiteral<"sensor">;
        payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
            transition: z.ZodLiteral<"firing">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
            groups: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                top: z.ZodArray<z.ZodObject<{
                    group: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                    score: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            since: z.ZodString;
            detection: z.ZodOptional<z.ZodObject<{
                condition: z.ZodOptional<z.ZodString>;
                observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    at: z.ZodString;
                    message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            evidence: z.ZodOptional<z.ZodObject<{
                window: z.ZodArray<z.ZodString>;
                query: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"resolved">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
            since: z.ZodString;
            reason: z.ZodEnum<{
                deleted: "deleted";
                passing: "passing";
                updated: "updated";
            }>;
            detection: z.ZodOptional<z.ZodObject<{
                condition: z.ZodOptional<z.ZodString>;
                observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    at: z.ZodString;
                    message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            evidence: z.ZodOptional<z.ZodObject<{
                window: z.ZodArray<z.ZodString>;
                query: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"stopped">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            since: z.ZodString;
            reason: z.ZodEnum<{
                query_error: "query_error";
                scan_budget: "scan_budget";
            }>;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"reset">;
            since: z.ZodString;
        }, z.core.$strip>], "transition">;
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
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        createdAt: z.ZodString;
        type: z.ZodLiteral<"sensor">;
        payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
            transition: z.ZodLiteral<"firing">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
            groups: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                top: z.ZodArray<z.ZodObject<{
                    group: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                    score: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            since: z.ZodString;
            detection: z.ZodOptional<z.ZodObject<{
                condition: z.ZodOptional<z.ZodString>;
                observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    at: z.ZodString;
                    message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            evidence: z.ZodOptional<z.ZodObject<{
                window: z.ZodArray<z.ZodString>;
                query: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"resolved">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            group: z.ZodUnion<readonly [z.ZodLiteral<"*">, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
            since: z.ZodString;
            reason: z.ZodEnum<{
                deleted: "deleted";
                passing: "passing";
                updated: "updated";
            }>;
            detection: z.ZodOptional<z.ZodObject<{
                condition: z.ZodOptional<z.ZodString>;
                observed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                past: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                band: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                test: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                volume: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                answers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                samples: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    at: z.ZodString;
                    message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            evidence: z.ZodOptional<z.ZodObject<{
                window: z.ZodArray<z.ZodString>;
                query: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"stopped">;
            sensor: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            since: z.ZodString;
            reason: z.ZodEnum<{
                query_error: "query_error";
                scan_budget: "scan_budget";
            }>;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            transition: z.ZodLiteral<"reset">;
            since: z.ZodString;
        }, z.core.$strip>], "transition">;
    }, z.core.$strip>], "type">;
}, z.core.$strip>, "api">;
