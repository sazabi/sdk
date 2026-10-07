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
    timeZone: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNumber>;
    results: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export type AskLogsInput = z.infer<typeof AskLogsInputSchema>;
/**
 * Input for POST /logs/queries/execute: the query to run, as the `queryId`
 * of an earlier answer or run, or as a `spec` written by the caller.
 */
export declare const ExecuteLogQueryInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    queryId: z.ZodOptional<z.ZodString>;
    spec: z.ZodOptional<z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
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
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
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
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
            limit: z.ZodType<number, unknown, z.core.$ZodTypeInternals<number, unknown>>;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
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
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
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
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodType<number, unknown, z.core.$ZodTypeInternals<number, unknown>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
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
/**
 * Why a question or query was refused as asked (with `status` `error`): one
 * of the log query's stable codes (`logQueryRejectionSchema`: the query
 * cannot run as written); `not_about_logs` the question asks nothing about
 * the project's logs, and `other_project` it asks about another project's or
 * organization's, so nothing was searched; or `unsupported_question` no query
 * over the logs can answer it as asked (a sum over a number inside the log
 * text, say). Asking it again unchanged gets the same refusal.
 */
export declare const LOG_ASK_REJECTION_CODES: readonly [...("approximation_required" | "bucket_too_fine" | "time_range_too_wide" | "unsupported_query")[], "not_about_logs", "other_project", "unsupported_question"];
export declare const LogAskRejectionSchema: z.ZodObject<{
    code: z.ZodEnum<{
        approximation_required: "approximation_required";
        bucket_too_fine: "bucket_too_fine";
        not_about_logs: "not_about_logs";
        other_project: "other_project";
        time_range_too_wide: "time_range_too_wide";
        unsupported_query: "unsupported_query";
        unsupported_question: "unsupported_question";
    }>;
    message: z.ZodString;
}, z.core.$strict>;
export type LogAskRejection = z.infer<typeof LogAskRejectionSchema>;
/** The result shapes `logs.ask` and `logs.executeQuery` return, discriminated on `kind`. */
export declare const LogAskResultsSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"search">;
    kinds: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        severity: z.ZodString;
        services: z.ZodArray<z.ZodObject<{
            service: z.ZodString;
            count: z.ZodNumber;
        }, z.core.$strip>>;
        count: z.ZodNumber;
        previousCount: z.ZodNumber;
        countBasis: z.ZodEnum<{
            exact: "exact";
            sampled: "sampled";
        }>;
        firstSeen: z.ZodNullable<z.ZodString>;
        firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
        lastSeen: z.ZodNullable<z.ZodString>;
        examples: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            time: z.ZodString;
            service: z.ZodString;
            severity: z.ZodString;
            body: z.ZodString;
            attributes: z.ZodRecord<z.ZodString, z.ZodString>;
            traceId: z.ZodString;
            spanId: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    approximate: z.ZodBoolean;
    truncated: z.ZodBoolean;
    previousWindow: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
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
    share: z.ZodOptional<z.ZodObject<{
        part: z.ZodNumber;
        whole: z.ZodNumber;
    }, z.core.$strip>>;
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
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    total: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"messages">;
    columns: z.ZodArray<z.ZodString>;
    measure: z.ZodString;
    groups: z.ZodArray<z.ZodObject<{
        key: z.ZodArray<z.ZodString>;
        value: z.ZodNullable<z.ZodNumber>;
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    total: z.ZodNullable<z.ZodNumber>;
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
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    matched: z.ZodNullable<z.ZodNumber>;
    total: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
}, z.core.$strip>], "kind">;
export type LogAskResults = z.infer<typeof LogAskResultsSchema>;
export declare const LogAskMetaSchema: z.ZodObject<{
    exactness: z.ZodEnum<{
        approximate: "approximate";
        exact: "exact";
    }>;
    approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        method: z.ZodLiteral<"sampled">;
        relativeError: z.ZodNumber;
        confidence: z.ZodLiteral<0.95>;
        sampleFraction: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        method: z.ZodLiteral<"estimated_percentile">;
    }, z.core.$strict>, z.ZodObject<{
        method: z.ZodLiteral<"estimated_distinct">;
    }, z.core.$strict>], "method">>;
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
        kind: z.ZodLiteral<"search">;
        kinds: z.ZodArray<z.ZodObject<{
            message: z.ZodString;
            severity: z.ZodString;
            services: z.ZodArray<z.ZodObject<{
                service: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>;
            count: z.ZodNumber;
            previousCount: z.ZodNumber;
            countBasis: z.ZodEnum<{
                exact: "exact";
                sampled: "sampled";
            }>;
            firstSeen: z.ZodNullable<z.ZodString>;
            firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
            lastSeen: z.ZodNullable<z.ZodString>;
            examples: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                time: z.ZodString;
                service: z.ZodString;
                severity: z.ZodString;
                body: z.ZodString;
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                traceId: z.ZodString;
                spanId: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        approximate: z.ZodBoolean;
        truncated: z.ZodBoolean;
        previousWindow: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
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
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        window: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"search">;
            kinds: z.ZodArray<z.ZodObject<{
                message: z.ZodString;
                severity: z.ZodString;
                services: z.ZodArray<z.ZodObject<{
                    service: z.ZodString;
                    count: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodNumber;
                previousCount: z.ZodNumber;
                countBasis: z.ZodEnum<{
                    exact: "exact";
                    sampled: "sampled";
                }>;
                firstSeen: z.ZodNullable<z.ZodString>;
                firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                lastSeen: z.ZodNullable<z.ZodString>;
                examples: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    time: z.ZodString;
                    service: z.ZodString;
                    severity: z.ZodString;
                    body: z.ZodString;
                    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                    traceId: z.ZodString;
                    spanId: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            approximate: z.ZodBoolean;
            truncated: z.ZodBoolean;
            previousWindow: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
    }, z.core.$strip>>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            method: z.ZodLiteral<"sampled">;
            relativeError: z.ZodNumber;
            confidence: z.ZodLiteral<0.95>;
            sampleFraction: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_percentile">;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_distinct">;
        }, z.core.$strict>], "method">>;
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
    rejection: z.ZodOptional<z.ZodObject<{
        code: z.ZodEnum<{
            approximation_required: "approximation_required";
            bucket_too_fine: "bucket_too_fine";
            not_about_logs: "not_about_logs";
            other_project: "other_project";
            time_range_too_wide: "time_range_too_wide";
            unsupported_query: "unsupported_query";
            unsupported_question: "unsupported_question";
        }>;
        message: z.ZodString;
    }, z.core.$strict>>;
    writeDeclined: z.ZodOptional<z.ZodLiteral<true>>;
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
        kind: z.ZodLiteral<"search">;
        kinds: z.ZodArray<z.ZodObject<{
            message: z.ZodString;
            severity: z.ZodString;
            services: z.ZodArray<z.ZodObject<{
                service: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>;
            count: z.ZodNumber;
            previousCount: z.ZodNumber;
            countBasis: z.ZodEnum<{
                exact: "exact";
                sampled: "sampled";
            }>;
            firstSeen: z.ZodNullable<z.ZodString>;
            firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
            lastSeen: z.ZodNullable<z.ZodString>;
            examples: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                time: z.ZodString;
                service: z.ZodString;
                severity: z.ZodString;
                body: z.ZodString;
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                traceId: z.ZodString;
                spanId: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        approximate: z.ZodBoolean;
        truncated: z.ZodBoolean;
        previousWindow: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
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
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        window: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"search">;
            kinds: z.ZodArray<z.ZodObject<{
                message: z.ZodString;
                severity: z.ZodString;
                services: z.ZodArray<z.ZodObject<{
                    service: z.ZodString;
                    count: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodNumber;
                previousCount: z.ZodNumber;
                countBasis: z.ZodEnum<{
                    exact: "exact";
                    sampled: "sampled";
                }>;
                firstSeen: z.ZodNullable<z.ZodString>;
                firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                lastSeen: z.ZodNullable<z.ZodString>;
                examples: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    time: z.ZodString;
                    service: z.ZodString;
                    severity: z.ZodString;
                    body: z.ZodString;
                    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                    traceId: z.ZodString;
                    spanId: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            approximate: z.ZodBoolean;
            truncated: z.ZodBoolean;
            previousWindow: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
    }, z.core.$strip>>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            method: z.ZodLiteral<"sampled">;
            relativeError: z.ZodNumber;
            confidence: z.ZodLiteral<0.95>;
            sampleFraction: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_percentile">;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_distinct">;
        }, z.core.$strict>], "method">>;
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
    rejection: z.ZodOptional<z.ZodObject<{
        code: z.ZodEnum<{
            approximation_required: "approximation_required";
            bucket_too_fine: "bucket_too_fine";
            not_about_logs: "not_about_logs";
            other_project: "other_project";
            time_range_too_wide: "time_range_too_wide";
            unsupported_query: "unsupported_query";
            unsupported_question: "unsupported_question";
        }>;
        message: z.ZodString;
    }, z.core.$strict>>;
    writeDeclined: z.ZodOptional<z.ZodLiteral<true>>;
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
/** Output for POST /logs/queries/execute. */
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
        kind: z.ZodLiteral<"search">;
        kinds: z.ZodArray<z.ZodObject<{
            message: z.ZodString;
            severity: z.ZodString;
            services: z.ZodArray<z.ZodObject<{
                service: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>;
            count: z.ZodNumber;
            previousCount: z.ZodNumber;
            countBasis: z.ZodEnum<{
                exact: "exact";
                sampled: "sampled";
            }>;
            firstSeen: z.ZodNullable<z.ZodString>;
            firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
            lastSeen: z.ZodNullable<z.ZodString>;
            examples: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                time: z.ZodString;
                service: z.ZodString;
                severity: z.ZodString;
                body: z.ZodString;
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                traceId: z.ZodString;
                spanId: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        approximate: z.ZodBoolean;
        truncated: z.ZodBoolean;
        previousWindow: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
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
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        window: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"search">;
            kinds: z.ZodArray<z.ZodObject<{
                message: z.ZodString;
                severity: z.ZodString;
                services: z.ZodArray<z.ZodObject<{
                    service: z.ZodString;
                    count: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodNumber;
                previousCount: z.ZodNumber;
                countBasis: z.ZodEnum<{
                    exact: "exact";
                    sampled: "sampled";
                }>;
                firstSeen: z.ZodNullable<z.ZodString>;
                firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                lastSeen: z.ZodNullable<z.ZodString>;
                examples: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    time: z.ZodString;
                    service: z.ZodString;
                    severity: z.ZodString;
                    body: z.ZodString;
                    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                    traceId: z.ZodString;
                    spanId: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            approximate: z.ZodBoolean;
            truncated: z.ZodBoolean;
            previousWindow: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
    }, z.core.$strip>>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            method: z.ZodLiteral<"sampled">;
            relativeError: z.ZodNumber;
            confidence: z.ZodLiteral<0.95>;
            sampleFraction: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_percentile">;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_distinct">;
        }, z.core.$strict>], "method">>;
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
    rejection: z.ZodOptional<z.ZodObject<{
        code: z.ZodEnum<{
            approximation_required: "approximation_required";
            bucket_too_fine: "bucket_too_fine";
            not_about_logs: "not_about_logs";
            other_project: "other_project";
            time_range_too_wide: "time_range_too_wide";
            unsupported_query: "unsupported_query";
            unsupported_question: "unsupported_question";
        }>;
        message: z.ZodString;
    }, z.core.$strict>>;
    writeDeclined: z.ZodOptional<z.ZodLiteral<true>>;
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
    timeZone: z.ZodOptional<z.ZodString>;
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
        kind: z.ZodLiteral<"search">;
        kinds: z.ZodArray<z.ZodObject<{
            message: z.ZodString;
            severity: z.ZodString;
            services: z.ZodArray<z.ZodObject<{
                service: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>;
            count: z.ZodNumber;
            previousCount: z.ZodNumber;
            countBasis: z.ZodEnum<{
                exact: "exact";
                sampled: "sampled";
            }>;
            firstSeen: z.ZodNullable<z.ZodString>;
            firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
            lastSeen: z.ZodNullable<z.ZodString>;
            examples: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                time: z.ZodString;
                service: z.ZodString;
                severity: z.ZodString;
                body: z.ZodString;
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                traceId: z.ZodString;
                spanId: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        approximate: z.ZodBoolean;
        truncated: z.ZodBoolean;
        previousWindow: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
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
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        window: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"search">;
            kinds: z.ZodArray<z.ZodObject<{
                message: z.ZodString;
                severity: z.ZodString;
                services: z.ZodArray<z.ZodObject<{
                    service: z.ZodString;
                    count: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodNumber;
                previousCount: z.ZodNumber;
                countBasis: z.ZodEnum<{
                    exact: "exact";
                    sampled: "sampled";
                }>;
                firstSeen: z.ZodNullable<z.ZodString>;
                firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                lastSeen: z.ZodNullable<z.ZodString>;
                examples: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    time: z.ZodString;
                    service: z.ZodString;
                    severity: z.ZodString;
                    body: z.ZodString;
                    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                    traceId: z.ZodString;
                    spanId: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            approximate: z.ZodBoolean;
            truncated: z.ZodBoolean;
            previousWindow: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
    }, z.core.$strip>>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            method: z.ZodLiteral<"sampled">;
            relativeError: z.ZodNumber;
            confidence: z.ZodLiteral<0.95>;
            sampleFraction: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_percentile">;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_distinct">;
        }, z.core.$strict>], "method">>;
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
    rejection: z.ZodOptional<z.ZodObject<{
        code: z.ZodEnum<{
            approximation_required: "approximation_required";
            bucket_too_fine: "bucket_too_fine";
            not_about_logs: "not_about_logs";
            other_project: "other_project";
            time_range_too_wide: "time_range_too_wide";
            unsupported_query: "unsupported_query";
            unsupported_question: "unsupported_question";
        }>;
        message: z.ZodString;
    }, z.core.$strict>>;
    writeDeclined: z.ZodOptional<z.ZodLiteral<true>>;
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
    queryId: z.ZodOptional<z.ZodString>;
    spec: z.ZodOptional<z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
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
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
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
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
            limit: z.ZodType<number, unknown, z.core.$ZodTypeInternals<number, unknown>>;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
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
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
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
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodType<number, unknown, z.core.$ZodTypeInternals<number, unknown>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
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
        kind: z.ZodLiteral<"search">;
        kinds: z.ZodArray<z.ZodObject<{
            message: z.ZodString;
            severity: z.ZodString;
            services: z.ZodArray<z.ZodObject<{
                service: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>;
            count: z.ZodNumber;
            previousCount: z.ZodNumber;
            countBasis: z.ZodEnum<{
                exact: "exact";
                sampled: "sampled";
            }>;
            firstSeen: z.ZodNullable<z.ZodString>;
            firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
            lastSeen: z.ZodNullable<z.ZodString>;
            examples: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                time: z.ZodString;
                service: z.ZodString;
                severity: z.ZodString;
                body: z.ZodString;
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                traceId: z.ZodString;
                spanId: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        approximate: z.ZodBoolean;
        truncated: z.ZodBoolean;
        previousWindow: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
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
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        window: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"search">;
            kinds: z.ZodArray<z.ZodObject<{
                message: z.ZodString;
                severity: z.ZodString;
                services: z.ZodArray<z.ZodObject<{
                    service: z.ZodString;
                    count: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodNumber;
                previousCount: z.ZodNumber;
                countBasis: z.ZodEnum<{
                    exact: "exact";
                    sampled: "sampled";
                }>;
                firstSeen: z.ZodNullable<z.ZodString>;
                firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                lastSeen: z.ZodNullable<z.ZodString>;
                examples: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    time: z.ZodString;
                    service: z.ZodString;
                    severity: z.ZodString;
                    body: z.ZodString;
                    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                    traceId: z.ZodString;
                    spanId: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            approximate: z.ZodBoolean;
            truncated: z.ZodBoolean;
            previousWindow: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
    }, z.core.$strip>>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            method: z.ZodLiteral<"sampled">;
            relativeError: z.ZodNumber;
            confidence: z.ZodLiteral<0.95>;
            sampleFraction: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_percentile">;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_distinct">;
        }, z.core.$strict>], "method">>;
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
    rejection: z.ZodOptional<z.ZodObject<{
        code: z.ZodEnum<{
            approximation_required: "approximation_required";
            bucket_too_fine: "bucket_too_fine";
            not_about_logs: "not_about_logs";
            other_project: "other_project";
            time_range_too_wide: "time_range_too_wide";
            unsupported_query: "unsupported_query";
            unsupported_question: "unsupported_question";
        }>;
        message: z.ZodString;
    }, z.core.$strict>>;
    writeDeclined: z.ZodOptional<z.ZodLiteral<true>>;
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
/**
 * Input for the deprecated POST /logs/queries/{queryId}/execute: the wire
 * shape installed CLIs (5.0.0 to 6.4.x) and SDKs send, `queryId` in the path.
 */
export declare const ExecuteLogQueryByIdInputSchema: z.ZodObject<{
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
export type ExecuteLogQueryByIdInput = z.infer<typeof ExecuteLogQueryByIdInputSchema>;
/**
 * Deprecated alias of `logs.executeQuery` by `queryId` at its pre-6.5.0 path,
 * served by the same handler until its removal on 2027-03-01 (naming catalog
 * entry `log-query`). Responses carry a `Deprecation` header.
 */
export declare const executeLogQueryById: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
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
        kind: z.ZodLiteral<"search">;
        kinds: z.ZodArray<z.ZodObject<{
            message: z.ZodString;
            severity: z.ZodString;
            services: z.ZodArray<z.ZodObject<{
                service: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>;
            count: z.ZodNumber;
            previousCount: z.ZodNumber;
            countBasis: z.ZodEnum<{
                exact: "exact";
                sampled: "sampled";
            }>;
            firstSeen: z.ZodNullable<z.ZodString>;
            firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
            lastSeen: z.ZodNullable<z.ZodString>;
            examples: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                time: z.ZodString;
                service: z.ZodString;
                severity: z.ZodString;
                body: z.ZodString;
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                traceId: z.ZodString;
                spanId: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        approximate: z.ZodBoolean;
        truncated: z.ZodBoolean;
        previousWindow: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
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
        share: z.ZodOptional<z.ZodObject<{
            part: z.ZodNumber;
            whole: z.ZodNumber;
        }, z.core.$strip>>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"messages">;
        columns: z.ZodArray<z.ZodString>;
        measure: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            key: z.ZodArray<z.ZodString>;
            value: z.ZodNullable<z.ZodNumber>;
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        matched: z.ZodNullable<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        truncated: z.ZodBoolean;
    }, z.core.$strip>], "kind">>;
    window: z.ZodNullable<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        window: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"search">;
            kinds: z.ZodArray<z.ZodObject<{
                message: z.ZodString;
                severity: z.ZodString;
                services: z.ZodArray<z.ZodObject<{
                    service: z.ZodString;
                    count: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodNumber;
                previousCount: z.ZodNumber;
                countBasis: z.ZodEnum<{
                    exact: "exact";
                    sampled: "sampled";
                }>;
                firstSeen: z.ZodNullable<z.ZodString>;
                firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                lastSeen: z.ZodNullable<z.ZodString>;
                examples: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    time: z.ZodString;
                    service: z.ZodString;
                    severity: z.ZodString;
                    body: z.ZodString;
                    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                    traceId: z.ZodString;
                    spanId: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            approximate: z.ZodBoolean;
            truncated: z.ZodBoolean;
            previousWindow: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
    }, z.core.$strip>>>;
    meta: z.ZodNullable<z.ZodObject<{
        exactness: z.ZodEnum<{
            approximate: "approximate";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
            method: z.ZodLiteral<"sampled">;
            relativeError: z.ZodNumber;
            confidence: z.ZodLiteral<0.95>;
            sampleFraction: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_percentile">;
        }, z.core.$strict>, z.ZodObject<{
            method: z.ZodLiteral<"estimated_distinct">;
        }, z.core.$strict>], "method">>;
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
    rejection: z.ZodOptional<z.ZodObject<{
        code: z.ZodEnum<{
            approximation_required: "approximation_required";
            bucket_too_fine: "bucket_too_fine";
            not_about_logs: "not_about_logs";
            other_project: "other_project";
            time_range_too_wide: "time_range_too_wide";
            unsupported_query: "unsupported_query";
            unsupported_question: "unsupported_question";
        }>;
        message: z.ZodString;
    }, z.core.$strict>>;
    writeDeclined: z.ZodOptional<z.ZodLiteral<true>>;
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
        timeZone: z.ZodOptional<z.ZodString>;
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
            kind: z.ZodLiteral<"search">;
            kinds: z.ZodArray<z.ZodObject<{
                message: z.ZodString;
                severity: z.ZodString;
                services: z.ZodArray<z.ZodObject<{
                    service: z.ZodString;
                    count: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodNumber;
                previousCount: z.ZodNumber;
                countBasis: z.ZodEnum<{
                    exact: "exact";
                    sampled: "sampled";
                }>;
                firstSeen: z.ZodNullable<z.ZodString>;
                firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                lastSeen: z.ZodNullable<z.ZodString>;
                examples: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    time: z.ZodString;
                    service: z.ZodString;
                    severity: z.ZodString;
                    body: z.ZodString;
                    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                    traceId: z.ZodString;
                    spanId: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            approximate: z.ZodBoolean;
            truncated: z.ZodBoolean;
            previousWindow: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
        window: z.ZodNullable<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>>;
        periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            window: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
            results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"search">;
                kinds: z.ZodArray<z.ZodObject<{
                    message: z.ZodString;
                    severity: z.ZodString;
                    services: z.ZodArray<z.ZodObject<{
                        service: z.ZodString;
                        count: z.ZodNumber;
                    }, z.core.$strip>>;
                    count: z.ZodNumber;
                    previousCount: z.ZodNumber;
                    countBasis: z.ZodEnum<{
                        exact: "exact";
                        sampled: "sampled";
                    }>;
                    firstSeen: z.ZodNullable<z.ZodString>;
                    firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                    lastSeen: z.ZodNullable<z.ZodString>;
                    examples: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        time: z.ZodString;
                        service: z.ZodString;
                        severity: z.ZodString;
                        body: z.ZodString;
                        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                        traceId: z.ZodString;
                        spanId: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                matched: z.ZodNullable<z.ZodNumber>;
                approximate: z.ZodBoolean;
                truncated: z.ZodBoolean;
                previousWindow: z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
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
                    share: z.ZodOptional<z.ZodObject<{
                        part: z.ZodNumber;
                        whole: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                matched: z.ZodNullable<z.ZodNumber>;
                total: z.ZodNullable<z.ZodNumber>;
                truncated: z.ZodBoolean;
            }, z.core.$strip>, z.ZodObject<{
                kind: z.ZodLiteral<"messages">;
                columns: z.ZodArray<z.ZodString>;
                measure: z.ZodString;
                groups: z.ZodArray<z.ZodObject<{
                    key: z.ZodArray<z.ZodString>;
                    value: z.ZodNullable<z.ZodNumber>;
                    share: z.ZodOptional<z.ZodObject<{
                        part: z.ZodNumber;
                        whole: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                matched: z.ZodNullable<z.ZodNumber>;
                total: z.ZodNullable<z.ZodNumber>;
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
                    share: z.ZodOptional<z.ZodObject<{
                        part: z.ZodNumber;
                        whole: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                matched: z.ZodNullable<z.ZodNumber>;
                total: z.ZodNullable<z.ZodNumber>;
                truncated: z.ZodBoolean;
            }, z.core.$strip>], "kind">>;
        }, z.core.$strip>>>;
        meta: z.ZodNullable<z.ZodObject<{
            exactness: z.ZodEnum<{
                approximate: "approximate";
                exact: "exact";
            }>;
            approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                method: z.ZodLiteral<"sampled">;
                relativeError: z.ZodNumber;
                confidence: z.ZodLiteral<0.95>;
                sampleFraction: z.ZodNumber;
            }, z.core.$strict>, z.ZodObject<{
                method: z.ZodLiteral<"estimated_percentile">;
            }, z.core.$strict>, z.ZodObject<{
                method: z.ZodLiteral<"estimated_distinct">;
            }, z.core.$strict>], "method">>;
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
        rejection: z.ZodOptional<z.ZodObject<{
            code: z.ZodEnum<{
                approximation_required: "approximation_required";
                bucket_too_fine: "bucket_too_fine";
                not_about_logs: "not_about_logs";
                other_project: "other_project";
                time_range_too_wide: "time_range_too_wide";
                unsupported_query: "unsupported_query";
                unsupported_question: "unsupported_question";
            }>;
            message: z.ZodString;
        }, z.core.$strict>>;
        writeDeclined: z.ZodOptional<z.ZodLiteral<true>>;
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
        queryId: z.ZodOptional<z.ZodString>;
        spec: z.ZodOptional<z.ZodObject<{
            version: z.ZodLiteral<2>;
            predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
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
                kind: z.ZodLiteral<"severity">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"column">;
                name: z.ZodEnum<{
                    "deployment.environment": "deployment.environment";
                    "event.name": "event.name";
                    "http.request.body.size": "http.request.body.size";
                    "http.request.method": "http.request.method";
                    "http.response.body.size": "http.response.body.size";
                    "http.response.status_code": "http.response.status_code";
                    "http.route": "http.route";
                    "k8s.pod.name": "k8s.pod.name";
                    "log.record.uid": "log.record.uid";
                    operation_kind: "operation_kind";
                    "server.address": "server.address";
                    severity_text: "severity_text";
                    span_id: "span_id";
                    trace_id: "trace_id";
                    "url.path": "url.path";
                }>;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>;
                key: z.ZodString;
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
                    kind: "severity";
                } | {
                    kind: "column";
                    name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
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
                    kind: "severity";
                } | {
                    kind: "column";
                    name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
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
                    kind: "severity";
                } | {
                    kind: "column";
                    name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
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
                    kind: "severity";
                } | {
                    kind: "column";
                    name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
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
                limit: z.ZodType<number, unknown, z.core.$ZodTypeInternals<number, unknown>>;
                fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                    kind: "service";
                } | {
                    kind: "severity";
                } | {
                    kind: "column";
                    name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
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
                    kind: "severity";
                } | {
                    kind: "column";
                    name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }, unknown>>>>;
                order: z.ZodOptional<z.ZodEnum<{
                    newest: "newest";
                    oldest: "oldest";
                }>>;
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"request_count">;
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
            }, z.core.$strict>, z.ZodObject<{
                op: z.ZodLiteral<"ratio">;
                numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity";
                } | {
                    kind: "column";
                    name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
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
                    kind: "severity";
                } | {
                    kind: "column";
                    name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown>>;
            }, z.core.$strict>], "op">;
            bucket: z.ZodOptional<z.ZodEnum<{
                "10m": "10m";
                "12h": "12h";
                "15m": "15m";
                "1d": "1d";
                "1h": "1h";
                "1m": "1m";
                "30m": "30m";
                "5m": "5m";
                "6h": "6h";
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
            order: z.ZodOptional<z.ZodObject<{
                by: z.ZodEnum<{
                    dimension: "dimension";
                    value: "value";
                }>;
                direction: z.ZodEnum<{
                    asc: "asc";
                    desc: "desc";
                }>;
            }, z.core.$strict>>;
            exactness: z.ZodEnum<{
                approximate_ok: "approximate_ok";
                exact: "exact";
            }>;
            approximation: z.ZodOptional<z.ZodObject<{
                maxRelativeError: z.ZodType<number, unknown, z.core.$ZodTypeInternals<number, unknown>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
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
            kind: z.ZodLiteral<"search">;
            kinds: z.ZodArray<z.ZodObject<{
                message: z.ZodString;
                severity: z.ZodString;
                services: z.ZodArray<z.ZodObject<{
                    service: z.ZodString;
                    count: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodNumber;
                previousCount: z.ZodNumber;
                countBasis: z.ZodEnum<{
                    exact: "exact";
                    sampled: "sampled";
                }>;
                firstSeen: z.ZodNullable<z.ZodString>;
                firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                lastSeen: z.ZodNullable<z.ZodString>;
                examples: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    time: z.ZodString;
                    service: z.ZodString;
                    severity: z.ZodString;
                    body: z.ZodString;
                    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                    traceId: z.ZodString;
                    spanId: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            approximate: z.ZodBoolean;
            truncated: z.ZodBoolean;
            previousWindow: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
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
            share: z.ZodOptional<z.ZodObject<{
                part: z.ZodNumber;
                whole: z.ZodNumber;
            }, z.core.$strip>>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"messages">;
            columns: z.ZodArray<z.ZodString>;
            measure: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                key: z.ZodArray<z.ZodString>;
                value: z.ZodNullable<z.ZodNumber>;
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            matched: z.ZodNullable<z.ZodNumber>;
            total: z.ZodNullable<z.ZodNumber>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>], "kind">>;
        window: z.ZodNullable<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>>;
        periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            window: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
            results: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"search">;
                kinds: z.ZodArray<z.ZodObject<{
                    message: z.ZodString;
                    severity: z.ZodString;
                    services: z.ZodArray<z.ZodObject<{
                        service: z.ZodString;
                        count: z.ZodNumber;
                    }, z.core.$strip>>;
                    count: z.ZodNumber;
                    previousCount: z.ZodNumber;
                    countBasis: z.ZodEnum<{
                        exact: "exact";
                        sampled: "sampled";
                    }>;
                    firstSeen: z.ZodNullable<z.ZodString>;
                    firstSeenInWindow: z.ZodOptional<z.ZodBoolean>;
                    lastSeen: z.ZodNullable<z.ZodString>;
                    examples: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        time: z.ZodString;
                        service: z.ZodString;
                        severity: z.ZodString;
                        body: z.ZodString;
                        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                        traceId: z.ZodString;
                        spanId: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                matched: z.ZodNullable<z.ZodNumber>;
                approximate: z.ZodBoolean;
                truncated: z.ZodBoolean;
                previousWindow: z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
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
                share: z.ZodOptional<z.ZodObject<{
                    part: z.ZodNumber;
                    whole: z.ZodNumber;
                }, z.core.$strip>>;
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
                    share: z.ZodOptional<z.ZodObject<{
                        part: z.ZodNumber;
                        whole: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                matched: z.ZodNullable<z.ZodNumber>;
                total: z.ZodNullable<z.ZodNumber>;
                truncated: z.ZodBoolean;
            }, z.core.$strip>, z.ZodObject<{
                kind: z.ZodLiteral<"messages">;
                columns: z.ZodArray<z.ZodString>;
                measure: z.ZodString;
                groups: z.ZodArray<z.ZodObject<{
                    key: z.ZodArray<z.ZodString>;
                    value: z.ZodNullable<z.ZodNumber>;
                    share: z.ZodOptional<z.ZodObject<{
                        part: z.ZodNumber;
                        whole: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                matched: z.ZodNullable<z.ZodNumber>;
                total: z.ZodNullable<z.ZodNumber>;
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
                    share: z.ZodOptional<z.ZodObject<{
                        part: z.ZodNumber;
                        whole: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                matched: z.ZodNullable<z.ZodNumber>;
                total: z.ZodNullable<z.ZodNumber>;
                truncated: z.ZodBoolean;
            }, z.core.$strip>], "kind">>;
        }, z.core.$strip>>>;
        meta: z.ZodNullable<z.ZodObject<{
            exactness: z.ZodEnum<{
                approximate: "approximate";
                exact: "exact";
            }>;
            approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                method: z.ZodLiteral<"sampled">;
                relativeError: z.ZodNumber;
                confidence: z.ZodLiteral<0.95>;
                sampleFraction: z.ZodNumber;
            }, z.core.$strict>, z.ZodObject<{
                method: z.ZodLiteral<"estimated_percentile">;
            }, z.core.$strict>, z.ZodObject<{
                method: z.ZodLiteral<"estimated_distinct">;
            }, z.core.$strict>], "method">>;
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
        rejection: z.ZodOptional<z.ZodObject<{
            code: z.ZodEnum<{
                approximation_required: "approximation_required";
                bucket_too_fine: "bucket_too_fine";
                not_about_logs: "not_about_logs";
                other_project: "other_project";
                time_range_too_wide: "time_range_too_wide";
                unsupported_query: "unsupported_query";
                unsupported_question: "unsupported_question";
            }>;
            message: z.ZodString;
        }, z.core.$strict>>;
        writeDeclined: z.ZodOptional<z.ZodLiteral<true>>;
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
