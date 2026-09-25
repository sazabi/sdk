import { z } from "zod";
export declare const QueryMeteringDiagnosticsSchema: z.ZodObject<{
    executions: z.ZodArray<z.ZodObject<{
        executionId: z.ZodString;
        outcome: z.ZodEnum<{
            measured: "measured";
            missing_statistics: "missing_statistics";
            query_failed: "query_failed";
            response_abandoned: "response_abandoned";
            response_failed: "response_failed";
            sink_failed: "sink_failed";
        }>;
        bytesRead: z.ZodOptional<z.ZodString>;
        recordingOutcome: z.ZodOptional<z.ZodEnum<{
            duplicate: "duplicate";
            internal: "internal";
            missing_context: "missing_context";
            non_billable: "non_billable";
            recorded: "recorded";
            unattributed: "unattributed";
            zero_bytes: "zero_bytes";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type QueryMeteringDiagnostics = z.infer<typeof QueryMeteringDiagnosticsSchema>;
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
/** Input for POST /logs/query-spec. The spec is the shared v2 query spec; the window is an invocation parameter. */
export declare const QuerySpecLogsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    spec: z.ZodObject<{
        version: z.ZodLiteral<2>;
        source: z.ZodObject<{
            kind: z.ZodLiteral<"logs">;
        }, z.core.$strict>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "5m": "5m";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
        anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
            query: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
            patternIds: z.ZodArray<z.ZodUUID>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    timeRange: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">;
    includeMeteringDiagnostics: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export type QuerySpecLogsInput = z.infer<typeof QuerySpecLogsInputSchema>;
/**
 * Output for POST /logs/query-spec. `ok` carries the rows and the result
 * meta (which representation answered, how exact it is, what it covered and
 * how fresh it was); `rejected` says why no enabled representation could
 * answer the spec as asked and what change would admit it.
 */
export declare const QuerySpecLogsOutputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"ok">;
    spec: z.ZodObject<{
        version: z.ZodLiteral<2>;
        source: z.ZodObject<{
            kind: z.ZodLiteral<"logs">;
        }, z.core.$strict>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "5m": "5m";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
        anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
            query: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
            patternIds: z.ZodArray<z.ZodUUID>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    patternIds: z.ZodArray<z.ZodString>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        representation: z.ZodEnum<{
            event_volume: "event_volume";
            exact_scan: "exact_scan";
            log_volume: "log_volume";
            pattern_index: "pattern_index";
            pattern_volume: "pattern_volume";
            request_metrics: "request_metrics";
            sampled_scan: "sampled_scan";
            standing: "standing";
        }>;
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        error: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"sampling">;
            relativeBound: z.ZodNumber;
            confidence: z.ZodLiteral<0.95>;
            sampleFraction: z.ZodNumber;
            cellRows: z.ZodNumber;
            minCellRows: z.ZodNumber;
            designEffect: z.ZodNumber;
            omissionProbability: z.ZodObject<{
                oneIdentity: z.ZodNumber;
                boundedCell: z.ZodNumber;
                boundedCellIdentities: z.ZodNumber;
                maxMultiplicity: z.ZodNullable<z.ZodNumber>;
                basis: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"quantile_sketch">;
            algorithm: z.ZodEnum<{
                reservoir_sample: "reservoir_sample";
                tdigest: "tdigest";
            }>;
            compression: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"distinct_sketch">;
            algorithm: z.ZodString;
        }, z.core.$strict>], "kind">>;
        estimate: z.ZodOptional<z.ZodObject<{
            rows: z.ZodNumber;
            bytes: z.ZodNumber;
        }, z.core.$strict>>;
        coverage: z.ZodObject<{
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
        }, z.core.$strict>;
        freshness: z.ZodObject<{
            watermark: z.ZodISODateTime;
            openBucketFrom: z.ZodOptional<z.ZodISODateTime>;
        }, z.core.$strict>;
        catalogRevision: z.ZodOptional<z.ZodString>;
        population: z.ZodOptional<z.ZodObject<{
            kind: z.ZodLiteral<"service_patterns">;
            services: z.ZodArray<z.ZodString>;
            patternIds: z.ZodNumber;
            unmatchedRows: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    took: z.ZodNumber;
    executionMs: z.ZodNumber;
    metering: z.ZodOptional<z.ZodObject<{
        executions: z.ZodArray<z.ZodObject<{
            executionId: z.ZodString;
            outcome: z.ZodEnum<{
                measured: "measured";
                missing_statistics: "missing_statistics";
                query_failed: "query_failed";
                response_abandoned: "response_abandoned";
                response_failed: "response_failed";
                sink_failed: "sink_failed";
            }>;
            bytesRead: z.ZodOptional<z.ZodString>;
            recordingOutcome: z.ZodOptional<z.ZodEnum<{
                duplicate: "duplicate";
                internal: "internal";
                missing_context: "missing_context";
                non_billable: "non_billable";
                recorded: "recorded";
                unattributed: "unattributed";
                zero_bytes: "zero_bytes";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"rejected">;
    spec: z.ZodObject<{
        version: z.ZodLiteral<2>;
        source: z.ZodObject<{
            kind: z.ZodLiteral<"logs">;
        }, z.core.$strict>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "5m": "5m";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
        anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
            query: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
            patternIds: z.ZodArray<z.ZodUUID>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    patternIds: z.ZodArray<z.ZodString>;
    reason: z.ZodString;
    suggestion: z.ZodOptional<z.ZodEnum<{
        allow_approximation: "allow_approximation";
        coarsen_bucket: "coarsen_bucket";
        narrow_window: "narrow_window";
        promote_attribute: "promote_attribute";
    }>>;
    skipped: z.ZodArray<z.ZodObject<{
        representation: z.ZodEnum<{
            event_volume: "event_volume";
            exact_scan: "exact_scan";
            log_volume: "log_volume";
            pattern_index: "pattern_index";
            pattern_volume: "pattern_volume";
            request_metrics: "request_metrics";
            sampled_scan: "sampled_scan";
            standing: "standing";
        }>;
        reason: z.ZodString;
        suggestion: z.ZodOptional<z.ZodEnum<{
            allow_approximation: "allow_approximation";
            coarsen_bucket: "coarsen_bucket";
            narrow_window: "narrow_window";
            promote_attribute: "promote_attribute";
        }>>;
    }, z.core.$strict>>;
    took: z.ZodNumber;
    metering: z.ZodOptional<z.ZodObject<{
        executions: z.ZodArray<z.ZodObject<{
            executionId: z.ZodString;
            outcome: z.ZodEnum<{
                measured: "measured";
                missing_statistics: "missing_statistics";
                query_failed: "query_failed";
                response_abandoned: "response_abandoned";
                response_failed: "response_failed";
                sink_failed: "sink_failed";
            }>;
            bytesRead: z.ZodOptional<z.ZodString>;
            recordingOutcome: z.ZodOptional<z.ZodEnum<{
                duplicate: "duplicate";
                internal: "internal";
                missing_context: "missing_context";
                non_billable: "non_billable";
                recorded: "recorded";
                unattributed: "unattributed";
                zero_bytes: "zero_bytes";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>], "status">;
export type QuerySpecLogsOutput = z.infer<typeof QuerySpecLogsOutputSchema>;
export declare const LogsVolumeIntervalSchema: z.ZodEnum<{
    "15m": "15m";
    "1h": "1h";
    "1m": "1m";
    "5m": "5m";
}>;
export type LogsVolumeInterval = z.infer<typeof LogsVolumeIntervalSchema>;
export declare const LogsVolumeDimensionSchema: z.ZodEnum<{
    environment: "environment";
    service_name: "service_name";
    severity_text: "severity_text";
}>;
export type LogsVolumeDimension = z.infer<typeof LogsVolumeDimensionSchema>;
export declare const LogsVolumeInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    startDate: z.ZodString;
    endDate: z.ZodString;
    interval: z.ZodOptional<z.ZodEnum<{
        "15m": "15m";
        "1h": "1h";
        "1m": "1m";
        "5m": "5m";
    }>>;
    groupBy: z.ZodOptional<z.ZodEnum<{
        environment: "environment";
        service_name: "service_name";
        severity_text: "severity_text";
    }>>;
    filters: z.ZodOptional<z.ZodObject<{
        service_name: z.ZodOptional<z.ZodString>;
        severity_text: z.ZodOptional<z.ZodString>;
        environment: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type LogsVolumeInput = z.infer<typeof LogsVolumeInputSchema>;
export declare const LogsVolumeOutputSchema: z.ZodObject<{
    total: z.ZodNumber;
    startDate: z.ZodString;
    endDate: z.ZodString;
    interval: z.ZodEnum<{
        "15m": "15m";
        "1h": "1h";
        "1m": "1m";
        "5m": "5m";
    }>;
    series: z.ZodArray<z.ZodObject<{
        group: z.ZodString;
        total: z.ZodNumber;
        points: z.ZodArray<z.ZodObject<{
            bucket: z.ZodString;
            count: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type LogsVolumeOutput = z.infer<typeof LogsVolumeOutputSchema>;
export declare const querySpecLogs: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    spec: z.ZodObject<{
        version: z.ZodLiteral<2>;
        source: z.ZodObject<{
            kind: z.ZodLiteral<"logs">;
        }, z.core.$strict>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "5m": "5m";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
        anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
            query: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
            patternIds: z.ZodArray<z.ZodUUID>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    timeRange: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">;
    includeMeteringDiagnostics: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"ok">;
    spec: z.ZodObject<{
        version: z.ZodLiteral<2>;
        source: z.ZodObject<{
            kind: z.ZodLiteral<"logs">;
        }, z.core.$strict>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "5m": "5m";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
        anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
            query: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
            patternIds: z.ZodArray<z.ZodUUID>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    patternIds: z.ZodArray<z.ZodString>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        representation: z.ZodEnum<{
            event_volume: "event_volume";
            exact_scan: "exact_scan";
            log_volume: "log_volume";
            pattern_index: "pattern_index";
            pattern_volume: "pattern_volume";
            request_metrics: "request_metrics";
            sampled_scan: "sampled_scan";
            standing: "standing";
        }>;
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        error: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"sampling">;
            relativeBound: z.ZodNumber;
            confidence: z.ZodLiteral<0.95>;
            sampleFraction: z.ZodNumber;
            cellRows: z.ZodNumber;
            minCellRows: z.ZodNumber;
            designEffect: z.ZodNumber;
            omissionProbability: z.ZodObject<{
                oneIdentity: z.ZodNumber;
                boundedCell: z.ZodNumber;
                boundedCellIdentities: z.ZodNumber;
                maxMultiplicity: z.ZodNullable<z.ZodNumber>;
                basis: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"quantile_sketch">;
            algorithm: z.ZodEnum<{
                reservoir_sample: "reservoir_sample";
                tdigest: "tdigest";
            }>;
            compression: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"distinct_sketch">;
            algorithm: z.ZodString;
        }, z.core.$strict>], "kind">>;
        estimate: z.ZodOptional<z.ZodObject<{
            rows: z.ZodNumber;
            bytes: z.ZodNumber;
        }, z.core.$strict>>;
        coverage: z.ZodObject<{
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
        }, z.core.$strict>;
        freshness: z.ZodObject<{
            watermark: z.ZodISODateTime;
            openBucketFrom: z.ZodOptional<z.ZodISODateTime>;
        }, z.core.$strict>;
        catalogRevision: z.ZodOptional<z.ZodString>;
        population: z.ZodOptional<z.ZodObject<{
            kind: z.ZodLiteral<"service_patterns">;
            services: z.ZodArray<z.ZodString>;
            patternIds: z.ZodNumber;
            unmatchedRows: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    took: z.ZodNumber;
    executionMs: z.ZodNumber;
    metering: z.ZodOptional<z.ZodObject<{
        executions: z.ZodArray<z.ZodObject<{
            executionId: z.ZodString;
            outcome: z.ZodEnum<{
                measured: "measured";
                missing_statistics: "missing_statistics";
                query_failed: "query_failed";
                response_abandoned: "response_abandoned";
                response_failed: "response_failed";
                sink_failed: "sink_failed";
            }>;
            bytesRead: z.ZodOptional<z.ZodString>;
            recordingOutcome: z.ZodOptional<z.ZodEnum<{
                duplicate: "duplicate";
                internal: "internal";
                missing_context: "missing_context";
                non_billable: "non_billable";
                recorded: "recorded";
                unattributed: "unattributed";
                zero_bytes: "zero_bytes";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"rejected">;
    spec: z.ZodObject<{
        version: z.ZodLiteral<2>;
        source: z.ZodObject<{
            kind: z.ZodLiteral<"logs">;
        }, z.core.$strict>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity_number";
        } | {
            kind: "column";
            name: string;
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "pattern";
        } | {
            kind: "body";
        } | {
            kind: "message";
        } | {
            kind: "body_json";
            path: string[];
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "5m": "5m";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
        anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"pattern">;
            query: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
            patternIds: z.ZodArray<z.ZodUUID>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    patternIds: z.ZodArray<z.ZodString>;
    reason: z.ZodString;
    suggestion: z.ZodOptional<z.ZodEnum<{
        allow_approximation: "allow_approximation";
        coarsen_bucket: "coarsen_bucket";
        narrow_window: "narrow_window";
        promote_attribute: "promote_attribute";
    }>>;
    skipped: z.ZodArray<z.ZodObject<{
        representation: z.ZodEnum<{
            event_volume: "event_volume";
            exact_scan: "exact_scan";
            log_volume: "log_volume";
            pattern_index: "pattern_index";
            pattern_volume: "pattern_volume";
            request_metrics: "request_metrics";
            sampled_scan: "sampled_scan";
            standing: "standing";
        }>;
        reason: z.ZodString;
        suggestion: z.ZodOptional<z.ZodEnum<{
            allow_approximation: "allow_approximation";
            coarsen_bucket: "coarsen_bucket";
            narrow_window: "narrow_window";
            promote_attribute: "promote_attribute";
        }>>;
    }, z.core.$strict>>;
    took: z.ZodNumber;
    metering: z.ZodOptional<z.ZodObject<{
        executions: z.ZodArray<z.ZodObject<{
            executionId: z.ZodString;
            outcome: z.ZodEnum<{
                measured: "measured";
                missing_statistics: "missing_statistics";
                query_failed: "query_failed";
                response_abandoned: "response_abandoned";
                response_failed: "response_failed";
                sink_failed: "sink_failed";
            }>;
            bytesRead: z.ZodOptional<z.ZodString>;
            recordingOutcome: z.ZodOptional<z.ZodEnum<{
                duplicate: "duplicate";
                internal: "internal";
                missing_context: "missing_context";
                non_billable: "non_billable";
                recorded: "recorded";
                unattributed: "unattributed";
                zero_bytes: "zero_bytes";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>], "status">, "api">;
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
export declare const logsVolume: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    startDate: z.ZodString;
    endDate: z.ZodString;
    interval: z.ZodOptional<z.ZodEnum<{
        "15m": "15m";
        "1h": "1h";
        "1m": "1m";
        "5m": "5m";
    }>>;
    groupBy: z.ZodOptional<z.ZodEnum<{
        environment: "environment";
        service_name: "service_name";
        severity_text: "severity_text";
    }>>;
    filters: z.ZodOptional<z.ZodObject<{
        service_name: z.ZodOptional<z.ZodString>;
        severity_text: z.ZodOptional<z.ZodString>;
        environment: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    total: z.ZodNumber;
    startDate: z.ZodString;
    endDate: z.ZodString;
    interval: z.ZodEnum<{
        "15m": "15m";
        "1h": "1h";
        "1m": "1m";
        "5m": "5m";
    }>;
    series: z.ZodArray<z.ZodObject<{
        group: z.ZodString;
        total: z.ZodNumber;
        points: z.ZodArray<z.ZodObject<{
            bucket: z.ZodString;
            count: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const logsContract: {
    readonly querySpec: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        spec: z.ZodObject<{
            version: z.ZodLiteral<2>;
            source: z.ZodObject<{
                kind: z.ZodLiteral<"logs">;
            }, z.core.$strict>;
            predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>, unknown>>;
            dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"severity_number">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"column">;
                name: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"pattern">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"message">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>;
            measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
                op: z.ZodLiteral<"count">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"event_rate">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"distinct">;
                field: z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"numeric">;
                field: z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>;
                parseAs: z.ZodLiteral<"float64">;
                aggregate: z.ZodEnum<{
                    avg: "avg";
                    max: "max";
                    min: "min";
                    p50: "p50";
                    p95: "p95";
                    p99: "p99";
                    sum: "sum";
                }>;
                invalidValues: z.ZodEnum<{
                    drop: "drop";
                    error: "error";
                }>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"recent_rows">;
                limit: z.ZodNumber;
                fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>>>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"error_count">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"duration">;
                aggregate: z.ZodEnum<{
                    avg: "avg";
                    max: "max";
                    p50: "p50";
                    p95: "p95";
                    p99: "p99";
                    sum: "sum";
                }>;
            }, z.core.$strict>], "op">;
            bucket: z.ZodOptional<z.ZodEnum<{
                "1d": "1d";
                "1h": "1h";
                "1m": "1m";
                "5m": "5m";
            }>>;
            output: z.ZodEnum<{
                evidence: "evidence";
                series: "series";
                table: "table";
            }>;
            series: z.ZodOptional<z.ZodObject<{
                limit: z.ZodNumber;
                overflow: z.ZodEnum<{
                    drop: "drop";
                    other: "other";
                }>;
            }, z.core.$strict>>;
            exactness: z.ZodEnum<{
                approximate_ok: "approximate_ok";
                exact: "exact";
            }>;
            approximation: z.ZodOptional<z.ZodObject<{
                maxRelativeError: z.ZodNumber;
            }, z.core.$strict>>;
            anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"pattern">;
                query: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"patterns">;
                patternIds: z.ZodArray<z.ZodUUID>;
            }, z.core.$strict>], "kind">>;
        }, z.core.$strict>;
        timeRange: z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">;
        includeMeteringDiagnostics: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>, z.ZodDiscriminatedUnion<[z.ZodObject<{
        status: z.ZodLiteral<"ok">;
        spec: z.ZodObject<{
            version: z.ZodLiteral<2>;
            source: z.ZodObject<{
                kind: z.ZodLiteral<"logs">;
            }, z.core.$strict>;
            predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>, unknown>>;
            dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"severity_number">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"column">;
                name: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"pattern">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"message">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>;
            measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
                op: z.ZodLiteral<"count">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"event_rate">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"distinct">;
                field: z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"numeric">;
                field: z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>;
                parseAs: z.ZodLiteral<"float64">;
                aggregate: z.ZodEnum<{
                    avg: "avg";
                    max: "max";
                    min: "min";
                    p50: "p50";
                    p95: "p95";
                    p99: "p99";
                    sum: "sum";
                }>;
                invalidValues: z.ZodEnum<{
                    drop: "drop";
                    error: "error";
                }>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"recent_rows">;
                limit: z.ZodNumber;
                fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>>>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"error_count">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"duration">;
                aggregate: z.ZodEnum<{
                    avg: "avg";
                    max: "max";
                    p50: "p50";
                    p95: "p95";
                    p99: "p99";
                    sum: "sum";
                }>;
            }, z.core.$strict>], "op">;
            bucket: z.ZodOptional<z.ZodEnum<{
                "1d": "1d";
                "1h": "1h";
                "1m": "1m";
                "5m": "5m";
            }>>;
            output: z.ZodEnum<{
                evidence: "evidence";
                series: "series";
                table: "table";
            }>;
            series: z.ZodOptional<z.ZodObject<{
                limit: z.ZodNumber;
                overflow: z.ZodEnum<{
                    drop: "drop";
                    other: "other";
                }>;
            }, z.core.$strict>>;
            exactness: z.ZodEnum<{
                approximate_ok: "approximate_ok";
                exact: "exact";
            }>;
            approximation: z.ZodOptional<z.ZodObject<{
                maxRelativeError: z.ZodNumber;
            }, z.core.$strict>>;
            anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"pattern">;
                query: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"patterns">;
                patternIds: z.ZodArray<z.ZodUUID>;
            }, z.core.$strict>], "kind">>;
        }, z.core.$strict>;
        resolvedTimeRange: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        patternIds: z.ZodArray<z.ZodString>;
        data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
        meta: z.ZodObject<{
            representation: z.ZodEnum<{
                event_volume: "event_volume";
                exact_scan: "exact_scan";
                log_volume: "log_volume";
                pattern_index: "pattern_index";
                pattern_volume: "pattern_volume";
                request_metrics: "request_metrics";
                sampled_scan: "sampled_scan";
                standing: "standing";
            }>;
            exactness: z.ZodEnum<{
                approximate: "approximate";
                exact: "exact";
            }>;
            error: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"sampling">;
                relativeBound: z.ZodNumber;
                confidence: z.ZodLiteral<0.95>;
                sampleFraction: z.ZodNumber;
                cellRows: z.ZodNumber;
                minCellRows: z.ZodNumber;
                designEffect: z.ZodNumber;
                omissionProbability: z.ZodObject<{
                    oneIdentity: z.ZodNumber;
                    boundedCell: z.ZodNumber;
                    boundedCellIdentities: z.ZodNumber;
                    maxMultiplicity: z.ZodNullable<z.ZodNumber>;
                    basis: z.ZodString;
                }, z.core.$strict>;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"quantile_sketch">;
                algorithm: z.ZodEnum<{
                    reservoir_sample: "reservoir_sample";
                    tdigest: "tdigest";
                }>;
                compression: z.ZodNumber;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"distinct_sketch">;
                algorithm: z.ZodString;
            }, z.core.$strict>], "kind">>;
            estimate: z.ZodOptional<z.ZodObject<{
                rows: z.ZodNumber;
                bytes: z.ZodNumber;
            }, z.core.$strict>>;
            coverage: z.ZodObject<{
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
                status: z.ZodEnum<{
                    complete: "complete";
                    partial: "partial";
                }>;
            }, z.core.$strict>;
            freshness: z.ZodObject<{
                watermark: z.ZodISODateTime;
                openBucketFrom: z.ZodOptional<z.ZodISODateTime>;
            }, z.core.$strict>;
            catalogRevision: z.ZodOptional<z.ZodString>;
            population: z.ZodOptional<z.ZodObject<{
                kind: z.ZodLiteral<"service_patterns">;
                services: z.ZodArray<z.ZodString>;
                patternIds: z.ZodNumber;
                unmatchedRows: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>;
        took: z.ZodNumber;
        executionMs: z.ZodNumber;
        metering: z.ZodOptional<z.ZodObject<{
            executions: z.ZodArray<z.ZodObject<{
                executionId: z.ZodString;
                outcome: z.ZodEnum<{
                    measured: "measured";
                    missing_statistics: "missing_statistics";
                    query_failed: "query_failed";
                    response_abandoned: "response_abandoned";
                    response_failed: "response_failed";
                    sink_failed: "sink_failed";
                }>;
                bytesRead: z.ZodOptional<z.ZodString>;
                recordingOutcome: z.ZodOptional<z.ZodEnum<{
                    duplicate: "duplicate";
                    internal: "internal";
                    missing_context: "missing_context";
                    non_billable: "non_billable";
                    recorded: "recorded";
                    unattributed: "unattributed";
                    zero_bytes: "zero_bytes";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<"rejected">;
        spec: z.ZodObject<{
            version: z.ZodLiteral<2>;
            source: z.ZodObject<{
                kind: z.ZodLiteral<"logs">;
            }, z.core.$strict>;
            predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity_number";
            } | {
                kind: "column";
                name: string;
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>, unknown>>;
            dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"severity_number">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"column">;
                name: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"pattern">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"message">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>;
            measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
                op: z.ZodLiteral<"count">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"event_rate">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"distinct">;
                field: z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"numeric">;
                field: z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>;
                parseAs: z.ZodLiteral<"float64">;
                aggregate: z.ZodEnum<{
                    avg: "avg";
                    max: "max";
                    min: "min";
                    p50: "p50";
                    p95: "p95";
                    p99: "p99";
                    sum: "sum";
                }>;
                invalidValues: z.ZodEnum<{
                    drop: "drop";
                    error: "error";
                }>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"recent_rows">;
                limit: z.ZodNumber;
                fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown, z.core.$ZodTypeInternals<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>>>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"error_count">;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"duration">;
                aggregate: z.ZodEnum<{
                    avg: "avg";
                    max: "max";
                    p50: "p50";
                    p95: "p95";
                    p99: "p99";
                    sum: "sum";
                }>;
            }, z.core.$strict>], "op">;
            bucket: z.ZodOptional<z.ZodEnum<{
                "1d": "1d";
                "1h": "1h";
                "1m": "1m";
                "5m": "5m";
            }>>;
            output: z.ZodEnum<{
                evidence: "evidence";
                series: "series";
                table: "table";
            }>;
            series: z.ZodOptional<z.ZodObject<{
                limit: z.ZodNumber;
                overflow: z.ZodEnum<{
                    drop: "drop";
                    other: "other";
                }>;
            }, z.core.$strict>>;
            exactness: z.ZodEnum<{
                approximate_ok: "approximate_ok";
                exact: "exact";
            }>;
            approximation: z.ZodOptional<z.ZodObject<{
                maxRelativeError: z.ZodNumber;
            }, z.core.$strict>>;
            anchor: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"pattern">;
                query: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"patterns">;
                patternIds: z.ZodArray<z.ZodUUID>;
            }, z.core.$strict>], "kind">>;
        }, z.core.$strict>;
        resolvedTimeRange: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        patternIds: z.ZodArray<z.ZodString>;
        reason: z.ZodString;
        suggestion: z.ZodOptional<z.ZodEnum<{
            allow_approximation: "allow_approximation";
            coarsen_bucket: "coarsen_bucket";
            narrow_window: "narrow_window";
            promote_attribute: "promote_attribute";
        }>>;
        skipped: z.ZodArray<z.ZodObject<{
            representation: z.ZodEnum<{
                event_volume: "event_volume";
                exact_scan: "exact_scan";
                log_volume: "log_volume";
                pattern_index: "pattern_index";
                pattern_volume: "pattern_volume";
                request_metrics: "request_metrics";
                sampled_scan: "sampled_scan";
                standing: "standing";
            }>;
            reason: z.ZodString;
            suggestion: z.ZodOptional<z.ZodEnum<{
                allow_approximation: "allow_approximation";
                coarsen_bucket: "coarsen_bucket";
                narrow_window: "narrow_window";
                promote_attribute: "promote_attribute";
            }>>;
        }, z.core.$strict>>;
        took: z.ZodNumber;
        metering: z.ZodOptional<z.ZodObject<{
            executions: z.ZodArray<z.ZodObject<{
                executionId: z.ZodString;
                outcome: z.ZodEnum<{
                    measured: "measured";
                    missing_statistics: "missing_statistics";
                    query_failed: "query_failed";
                    response_abandoned: "response_abandoned";
                    response_failed: "response_failed";
                    sink_failed: "sink_failed";
                }>;
                bytesRead: z.ZodOptional<z.ZodString>;
                recordingOutcome: z.ZodOptional<z.ZodEnum<{
                    duplicate: "duplicate";
                    internal: "internal";
                    missing_context: "missing_context";
                    non_billable: "non_billable";
                    recorded: "recorded";
                    unattributed: "unattributed";
                    zero_bytes: "zero_bytes";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>], "status">, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
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
    readonly volume: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        startDate: z.ZodString;
        endDate: z.ZodString;
        interval: z.ZodOptional<z.ZodEnum<{
            "15m": "15m";
            "1h": "1h";
            "1m": "1m";
            "5m": "5m";
        }>>;
        groupBy: z.ZodOptional<z.ZodEnum<{
            environment: "environment";
            service_name: "service_name";
            severity_text: "severity_text";
        }>>;
        filters: z.ZodOptional<z.ZodObject<{
            service_name: z.ZodOptional<z.ZodString>;
            severity_text: z.ZodOptional<z.ZodString>;
            environment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        total: z.ZodNumber;
        startDate: z.ZodString;
        endDate: z.ZodString;
        interval: z.ZodEnum<{
            "15m": "15m";
            "1h": "1h";
            "1m": "1m";
            "5m": "5m";
        }>;
        series: z.ZodArray<z.ZodObject<{
            group: z.ZodString;
            total: z.ZodNumber;
            points: z.ZodArray<z.ZodObject<{
                bucket: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
