import { z } from "zod";
/** The most rows, groups or points a `logs.ask` or `logs.executeQuery` result carries. */
export declare const LOG_ASK_MAX_LIMIT = 5000;
/** Input for POST /logs/ask. */
export declare const AskLogsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    question: z.ZodString;
    window: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">>;
    limit: z.ZodOptional<z.ZodNumber>;
    results: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export type AskLogsInput = z.infer<typeof AskLogsInputSchema>;
/** Input for POST /logs/queries/{queryId}/execute. */
export declare const ExecuteLogQueryInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    queryId: z.ZodString;
    window: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">>;
    limit: z.ZodOptional<z.ZodNumber>;
    group: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type ExecuteLogQueryInput = z.infer<typeof ExecuteLogQueryInputSchema>;
export declare const LogAskStatusSchema: z.ZodEnum<{
    error: "error";
    not_found: "not_found";
    ok: "ok";
    partial: "partial";
}>;
export type LogAskStatus = z.infer<typeof LogAskStatusSchema>;
/** The result shapes `logs.ask` and `logs.executeQuery` return, discriminated on `kind`. */
export declare const LogAskResultsSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"rows">;
    rows: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        time: z.ZodString;
        service: z.ZodString;
        severity: z.ZodString;
        body: z.ZodString;
        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        traceId: z.ZodString;
        spanId: z.ZodString;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"value">;
    measure: z.ZodString;
    value: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"distinct">;
    measure: z.ZodString;
    value: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"table">;
    columns: z.ZodArray<z.ZodString>;
    measure: z.ZodString;
    groups: z.ZodArray<z.ZodObject<{
        key: z.ZodArray<z.ZodString>;
        value: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"messages">;
    columns: z.ZodArray<z.ZodString>;
    measure: z.ZodString;
    groups: z.ZodArray<z.ZodObject<{
        key: z.ZodArray<z.ZodString>;
        value: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"series">;
    columns: z.ZodArray<z.ZodString>;
    measure: z.ZodString;
    bucket: z.ZodString;
    points: z.ZodArray<z.ZodObject<{
        bucket: z.ZodString;
        key: z.ZodArray<z.ZodString>;
        value: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
}, z.core.$strip>], "kind">;
export type LogAskResults = z.infer<typeof LogAskResultsSchema>;
export declare const LogAskMetaSchema: z.ZodObject<{
    exactness: z.ZodEnum<{
        approximate: "approximate";
        exact: "exact";
    }>;
    coverage: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        status: z.ZodEnum<{
            complete: "complete";
            partial: "partial";
        }>;
        reason: z.ZodOptional<z.ZodEnum<{
            read_limit: "read_limit";
            request_columns: "request_columns";
            stored_range: "stored_range";
        }>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LogAskMeta = z.infer<typeof LogAskMetaSchema>;
/**
 * One planning step: its number and what was done (`submitted`, `repaired`,
 * `revised`, `rewritten`). What was wrong with a step stays on the server,
 * since it quotes query internals.
 */
export declare const LogAskAttemptSchema: z.ZodObject<{
    n: z.ZodNumber;
    action: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type LogAskAttempt = z.infer<typeof LogAskAttemptSchema>;
/** The envelope `logs.ask` and `logs.executeQuery` both return. */
export declare const LogAskEnvelopeSchema: z.ZodObject<{
    queryId: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        error: "error";
        not_found: "not_found";
        ok: "ok";
        partial: "partial";
    }>;
    answer: z.ZodOptional<z.ZodString>;
    explanation: z.ZodString;
    interpretedAs: z.ZodOptional<z.ZodString>;
    results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"rows">;
        rows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            time: z.ZodString;
            service: z.ZodString;
            severity: z.ZodString;
            body: z.ZodString;
            attributes: z.ZodRecord<z.ZodString, z.ZodString>;
            traceId: z.ZodString;
            spanId: z.ZodString;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"value">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"distinct">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"table">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"series">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        bucket: z.ZodString;
        points: z.ZodArray<z.ZodObject<{
            bucket: z.ZodString;
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        coverage: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
            reason: z.ZodOptional<z.ZodEnum<{
                read_limit: "read_limit";
                request_columns: "request_columns";
                stored_range: "stored_range";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    attempts: z.ZodArray<z.ZodObject<{
        n: z.ZodNumber;
        action: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    timings: z.ZodObject<{
        planMs: z.ZodOptional<z.ZodNumber>;
        executeMs: z.ZodNumber;
        answerMs: z.ZodOptional<z.ZodNumber>;
        totalMs: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LogAskEnvelope = z.infer<typeof LogAskEnvelopeSchema>;
/** Output for POST /logs/ask. */
export declare const AskLogsOutputSchema: z.ZodObject<{
    queryId: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        error: "error";
        not_found: "not_found";
        ok: "ok";
        partial: "partial";
    }>;
    answer: z.ZodOptional<z.ZodString>;
    explanation: z.ZodString;
    interpretedAs: z.ZodOptional<z.ZodString>;
    results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"rows">;
        rows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            time: z.ZodString;
            service: z.ZodString;
            severity: z.ZodString;
            body: z.ZodString;
            attributes: z.ZodRecord<z.ZodString, z.ZodString>;
            traceId: z.ZodString;
            spanId: z.ZodString;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"value">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"distinct">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"table">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"series">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        bucket: z.ZodString;
        points: z.ZodArray<z.ZodObject<{
            bucket: z.ZodString;
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        coverage: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
            reason: z.ZodOptional<z.ZodEnum<{
                read_limit: "read_limit";
                request_columns: "request_columns";
                stored_range: "stored_range";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    attempts: z.ZodArray<z.ZodObject<{
        n: z.ZodNumber;
        action: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    timings: z.ZodObject<{
        planMs: z.ZodOptional<z.ZodNumber>;
        executeMs: z.ZodNumber;
        answerMs: z.ZodOptional<z.ZodNumber>;
        totalMs: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AskLogsOutput = z.infer<typeof AskLogsOutputSchema>;
/** Output for POST /logs/queries/{queryId}/execute. */
export declare const ExecuteLogQueryOutputSchema: z.ZodObject<{
    queryId: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        error: "error";
        not_found: "not_found";
        ok: "ok";
        partial: "partial";
    }>;
    answer: z.ZodOptional<z.ZodString>;
    explanation: z.ZodString;
    interpretedAs: z.ZodOptional<z.ZodString>;
    results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"rows">;
        rows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            time: z.ZodString;
            service: z.ZodString;
            severity: z.ZodString;
            body: z.ZodString;
            attributes: z.ZodRecord<z.ZodString, z.ZodString>;
            traceId: z.ZodString;
            spanId: z.ZodString;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"value">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"distinct">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"table">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"series">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        bucket: z.ZodString;
        points: z.ZodArray<z.ZodObject<{
            bucket: z.ZodString;
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        coverage: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
            reason: z.ZodOptional<z.ZodEnum<{
                read_limit: "read_limit";
                request_columns: "request_columns";
                stored_range: "stored_range";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    attempts: z.ZodArray<z.ZodObject<{
        n: z.ZodNumber;
        action: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    timings: z.ZodObject<{
        planMs: z.ZodOptional<z.ZodNumber>;
        executeMs: z.ZodNumber;
        answerMs: z.ZodOptional<z.ZodNumber>;
        totalMs: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ExecuteLogQueryOutput = z.infer<typeof ExecuteLogQueryOutputSchema>;
export declare const askLogs: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    question: z.ZodString;
    window: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">>;
    limit: z.ZodOptional<z.ZodNumber>;
    results: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>, z.ZodObject<{
    queryId: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        error: "error";
        not_found: "not_found";
        ok: "ok";
        partial: "partial";
    }>;
    answer: z.ZodOptional<z.ZodString>;
    explanation: z.ZodString;
    interpretedAs: z.ZodOptional<z.ZodString>;
    results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"rows">;
        rows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            time: z.ZodString;
            service: z.ZodString;
            severity: z.ZodString;
            body: z.ZodString;
            attributes: z.ZodRecord<z.ZodString, z.ZodString>;
            traceId: z.ZodString;
            spanId: z.ZodString;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"value">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"distinct">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"table">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"series">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        bucket: z.ZodString;
        points: z.ZodArray<z.ZodObject<{
            bucket: z.ZodString;
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        coverage: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
            reason: z.ZodOptional<z.ZodEnum<{
                read_limit: "read_limit";
                request_columns: "request_columns";
                stored_range: "stored_range";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    attempts: z.ZodArray<z.ZodObject<{
        n: z.ZodNumber;
        action: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    timings: z.ZodObject<{
        planMs: z.ZodOptional<z.ZodNumber>;
        executeMs: z.ZodNumber;
        answerMs: z.ZodOptional<z.ZodNumber>;
        totalMs: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const executeLogQuery: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    queryId: z.ZodString;
    window: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">>;
    limit: z.ZodOptional<z.ZodNumber>;
    group: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>, z.ZodObject<{
    queryId: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        error: "error";
        not_found: "not_found";
        ok: "ok";
        partial: "partial";
    }>;
    answer: z.ZodOptional<z.ZodString>;
    explanation: z.ZodString;
    interpretedAs: z.ZodOptional<z.ZodString>;
    results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"rows">;
        rows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            time: z.ZodString;
            service: z.ZodString;
            severity: z.ZodString;
            body: z.ZodString;
            attributes: z.ZodRecord<z.ZodString, z.ZodString>;
            traceId: z.ZodString;
            spanId: z.ZodString;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"value">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"distinct">;
        measure: z.ZodString;
        value: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"table">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"series">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        bucket: z.ZodString;
        points: z.ZodArray<z.ZodObject<{
            bucket: z.ZodString;
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        coverage: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
            reason: z.ZodOptional<z.ZodEnum<{
                read_limit: "read_limit";
                request_columns: "request_columns";
                stored_range: "stored_range";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    attempts: z.ZodArray<z.ZodObject<{
        n: z.ZodNumber;
        action: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    timings: z.ZodObject<{
        planMs: z.ZodOptional<z.ZodNumber>;
        executeMs: z.ZodNumber;
        answerMs: z.ZodOptional<z.ZodNumber>;
        totalMs: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const logsContract: {
    readonly ask: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        question: z.ZodString;
        window: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">>;
        limit: z.ZodOptional<z.ZodNumber>;
        results: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>, z.ZodObject<{
        queryId: z.ZodOptional<z.ZodString>;
        parentId: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<{
            error: "error";
            not_found: "not_found";
            ok: "ok";
            partial: "partial";
        }>;
        answer: z.ZodOptional<z.ZodString>;
        explanation: z.ZodString;
        interpretedAs: z.ZodOptional<z.ZodString>;
        results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"rows">;
            rows: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                time: z.ZodString;
                service: z.ZodString;
                severity: z.ZodString;
                body: z.ZodString;
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                traceId: z.ZodString;
                spanId: z.ZodString;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"value">;
            measure: z.ZodString;
            value: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"distinct">;
            measure: z.ZodString;
            value: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"table">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"series">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            bucket: z.ZodString;
            points: z.ZodArray<z.ZodObject<{
                bucket: z.ZodString;
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
        window: z.ZodNullable<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>>;
        meta: z.ZodNullable<z.ZodObject<{
            exactness: z.ZodEnum<{
                approximate: "approximate";
                exact: "exact";
            }>;
            coverage: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
                status: z.ZodEnum<{
                    complete: "complete";
                    partial: "partial";
                }>;
                reason: z.ZodOptional<z.ZodEnum<{
                    read_limit: "read_limit";
                    request_columns: "request_columns";
                    stored_range: "stored_range";
                }>>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        attempts: z.ZodArray<z.ZodObject<{
            n: z.ZodNumber;
            action: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        timings: z.ZodObject<{
            planMs: z.ZodOptional<z.ZodNumber>;
            executeMs: z.ZodNumber;
            answerMs: z.ZodOptional<z.ZodNumber>;
            totalMs: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly executeQuery: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        queryId: z.ZodString;
        window: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">>;
        limit: z.ZodOptional<z.ZodNumber>;
        group: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>, z.ZodObject<{
        queryId: z.ZodOptional<z.ZodString>;
        parentId: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<{
            error: "error";
            not_found: "not_found";
            ok: "ok";
            partial: "partial";
        }>;
        answer: z.ZodOptional<z.ZodString>;
        explanation: z.ZodString;
        interpretedAs: z.ZodOptional<z.ZodString>;
        results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"rows">;
            rows: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                time: z.ZodString;
                service: z.ZodString;
                severity: z.ZodString;
                body: z.ZodString;
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                traceId: z.ZodString;
                spanId: z.ZodString;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"value">;
            measure: z.ZodString;
            value: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"distinct">;
            measure: z.ZodString;
            value: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"table">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"series">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            bucket: z.ZodString;
            points: z.ZodArray<z.ZodObject<{
                bucket: z.ZodString;
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
        window: z.ZodNullable<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>>;
        meta: z.ZodNullable<z.ZodObject<{
            exactness: z.ZodEnum<{
                approximate: "approximate";
                exact: "exact";
            }>;
            coverage: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
                status: z.ZodEnum<{
                    complete: "complete";
                    partial: "partial";
                }>;
                reason: z.ZodOptional<z.ZodEnum<{
                    read_limit: "read_limit";
                    request_columns: "request_columns";
                    stored_range: "stored_range";
                }>>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        attempts: z.ZodArray<z.ZodObject<{
            n: z.ZodNumber;
            action: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        timings: z.ZodObject<{
            planMs: z.ZodOptional<z.ZodNumber>;
            executeMs: z.ZodNumber;
            answerMs: z.ZodOptional<z.ZodNumber>;
            totalMs: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
