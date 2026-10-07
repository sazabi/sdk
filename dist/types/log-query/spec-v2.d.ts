import { z } from "zod";
import { type Measure, type PredicateTree } from "./plan/index.js";
/** Which OTLP attribute map a field reads: the log record's, its resource's or its scope's. */
export declare const logAttributeSourceSchema: z.ZodEnum<{
    log: "log";
    resource: "resource";
    scope: "scope";
}>;
export type LogAttributeSource = z.infer<typeof logAttributeSourceSchema>;
/**
 * A value inside the JSON log body (`otel_body`), addressed by object path:
 * `["metadata", "durationMs"]` reads `otel_body.metadata.durationMs`. Most
 * numeric facts live here rather than in the attribute map.
 */
export declare const bodyJsonFieldSchema: z.ZodObject<{
    kind: z.ZodLiteral<"body_json">;
    path: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type BodyJsonField = z.infer<typeof bodyJsonFieldSchema>;
/**
 * The fields a `column` ref may name: fields every stored log line carries in
 * a fixed place, spelled as OpenTelemetry semantic conventions spell them.
 *
 * - `severity_text`: the level exactly as the sender wrote it (`ERROR`,
 *   `error`, `err`, `WARNING`, `Information`). Filter by level with the
 *   `severity` field instead, which reads every spelling.
 * - `log.record.uid`: the line's own id, the `id` every returned line carries.
 * - `trace_id`, `span_id`: the line's trace and span, empty when it has none.
 * - `deployment.environment`, `k8s.pod.name`: where the line was written.
 * - Request fields, recorded for every request whatever the sender's log
 *   shape: `http.request.method` (upper-cased, `GET`), `http.route` (the
 *   route template, `/orders/{id}`), `url.path` (the concrete path, no query
 *   string), `http.response.status_code` (a number), `operation_kind`
 *   (`http_server`, `http_client`, `rpc`, `job` and so on), `server.address`,
 *   and the byte sizes `http.request.body.size` and `http.response.body.size`.
 * - `event.name`: the name of a structured event, empty on other lines.
 *
 * A query that reads a request field, or measures `duration` or
 * `error_count`, reads request records only, each request once (see
 * `REQUEST_FIELD_COLUMNS`).
 */
export declare const LOG_QUERY_COLUMNS: readonly ["severity_text", "log.record.uid", "trace_id", "span_id", "deployment.environment", "k8s.pod.name", "http.request.method", "http.route", "url.path", "http.response.status_code", "operation_kind", "server.address", "http.request.body.size", "http.response.body.size", "event.name"];
export type LogQueryColumn = (typeof LOG_QUERY_COLUMNS)[number];
/**
 * The request fields: a query that reads any of them (in its predicate,
 * dimensions or measure) counts request records only, one per request, so
 * the other lines a request writes are never counted as requests.
 */
export declare const REQUEST_FIELD_COLUMNS: readonly ["http.request.method", "http.route", "url.path", "http.response.status_code", "operation_kind", "server.address", "http.request.body.size", "http.response.body.size"];
/**
 * Log levels, lowest first, each covering its OpenTelemetry severity range
 * (TRACE 1-4, DEBUG 5-8, INFO 9-12, WARN 13-16, ERROR 17-20, FATAL 21-24).
 */
export declare const LOG_SEVERITY_LEVELS: readonly ["TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL"];
export type LogSeverityLevel = (typeof LOG_SEVERITY_LEVELS)[number];
/** Comparators a `severity` field takes: equality, membership, order and presence; never text matching. */
export declare const SEVERITY_COMPARATORS: readonly ["eq", "neq", "in", "gt", "gte", "lt", "lte", "exists"];
/** Every field kind a spec may name. */
export declare const LOG_FIELD_KINDS: readonly ["service", "severity", "column", "attribute", "body", "message", "body_json"];
export declare const logFieldRefSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strict>], "kind">;
export type LogFieldRef = z.infer<typeof logFieldRefSchema>;
export declare const logPredicateTreeSchema: z.ZodType<PredicateTree<{
    kind: "body_json";
    path: string[];
} | {
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
}>, unknown, z.core.$ZodTypeInternals<PredicateTree<{
    kind: "body_json";
    path: string[];
} | {
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
}>, unknown>>;
export type LogPredicateTree = PredicateTree<LogFieldRef>;
export declare const LOG_DURATION_AGGREGATES: readonly ["sum", "avg", "max", "p50", "p95", "p99"];
export type LogDurationAggregate = (typeof LOG_DURATION_AGGREGATES)[number];
/**
 * What counts as a failed request for `error_count`: a 5xx response, a
 * failed RPC status, a span marked as an error, or a recorded error type.
 * Over named events (a query that reads `event.name` and no request field)
 * it counts events with an error type or an ERROR or FATAL level instead.
 */
export declare const REQUEST_COUNT_DESCRIPTION = "Requests: how many requests matched, each request once (the line that records it), whether or not the query names a request field. Reads request records only.";
export declare const RATIO_DESCRIPTION = "The share of what the query counts that also matches `numerator`, from 0 to 1: lines, or requests (each once) when the query reads request records (a request field anywhere, the numerator's included). Each value comes with the two counts it divides (`numerator`, `denominator`); a query that counted nothing has no value (null).";
export declare const ERROR_COUNT_DESCRIPTION = "Failed requests: responses with a 5xx status, failed RPC calls, spans marked as errors, and requests that recorded an error type. Reads request records only. A group none of whose requests recorded a status or an error has no value (null): its errors are not recorded, not zero. Over named events (a query on event.name without request fields) it counts events with an error type or an ERROR or FATAL level.";
export declare const logMeasureV2Schema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    op: z.ZodLiteral<"count">;
}, z.core.$strict>, z.ZodObject<{
    op: z.ZodLiteral<"event_rate">;
}, z.core.$strict>, z.ZodObject<{
    op: z.ZodLiteral<"distinct">;
    field: z.ZodType<{
        kind: "body_json";
        path: string[];
    } | {
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
    }, unknown, z.core.$ZodTypeInternals<{
        kind: "body_json";
        path: string[];
    } | {
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
    }, unknown>>;
}, z.core.$strict>, z.ZodObject<{
    op: z.ZodLiteral<"numeric">;
    field: z.ZodType<{
        kind: "body_json";
        path: string[];
    } | {
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
    }, unknown, z.core.$ZodTypeInternals<{
        kind: "body_json";
        path: string[];
    } | {
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
        kind: "body_json";
        path: string[];
    } | {
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
    }, unknown, z.core.$ZodTypeInternals<{
        kind: "body_json";
        path: string[];
    } | {
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
    numerator: z.ZodType<PredicateTree<{
        kind: "body_json";
        path: string[];
    } | {
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
    }>, unknown, z.core.$ZodTypeInternals<PredicateTree<{
        kind: "body_json";
        path: string[];
    } | {
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
    }>, unknown>>;
}, z.core.$strict>], "op">;
export type LogMeasureV2 = Measure<LogFieldRef> | {
    op: "request_count";
} | {
    op: "error_count";
} | {
    op: "duration";
    aggregate: LogDurationAggregate;
} | {
    op: "ratio";
    numerator: LogPredicateTree;
};
/**
 * The time buckets a series can take, finest first: the sizes people ask for
 * ("per 10 minutes", "every 15 minutes", "every 6 hours"). Every bucket is
 * epoch-aligned, a whole number of minutes, and divides or is a multiple of an
 * hour, so the minute and hour rollups can merge into it.
 */
export declare const LOG_QUERY_BUCKETS: readonly ["1m", "5m", "10m", "15m", "30m", "1h", "6h", "12h", "1d"];
export type LogQueryBucket = (typeof LOG_QUERY_BUCKETS)[number];
/** Each bucket's length in seconds. */
export declare const LOG_QUERY_BUCKET_SECONDS: Record<LogQueryBucket, number>;
/** What a grouped result is ranked by: its value (the measure), or its groups' own values. */
export declare const LOG_QUERY_ORDER_BYS: readonly ["value", "dimension"];
export declare const LOG_QUERY_ORDER_DIRECTIONS: readonly ["asc", "desc"];
/**
 * How a grouped result ranks its groups: which groups a series limit keeps
 * and the order its rows come in. `value` `desc` (the default) keeps the
 * largest; `value` `asc` the smallest ("the fewest errors"); `dimension`
 * orders by the groups' own values (status codes lowest first), for a spec
 * with one dimension.
 */
export declare const logQueryOrderSchema: z.ZodObject<{
    by: z.ZodEnum<{
        dimension: "dimension";
        value: "value";
    }>;
    direction: z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>;
}, z.core.$strict>;
export type LogQueryOrder = z.infer<typeof logQueryOrderSchema>;
/** The ranking a grouped result has when its spec names no `order`: the largest values first. */
export declare const DEFAULT_LOG_QUERY_ORDER: LogQueryOrder;
/**
 * One log query: which lines (`predicate`), grouped how (`dimensions`,
 * `bucket`), and what to compute over them (`measure`). Every query reads the
 * project's logs; one that names a request field or measures request_count,
 * error_count or duration reads the requests among them, each request once.
 * The time window is not part of the query; every caller passes it beside
 * the spec.
 */
export declare const logQuerySpecV2Schema: z.ZodObject<{
    version: z.ZodLiteral<2>;
    predicate: z.ZodType<PredicateTree<{
        kind: "body_json";
        path: string[];
    } | {
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
    }>, unknown, z.core.$ZodTypeInternals<PredicateTree<{
        kind: "body_json";
        path: string[];
    } | {
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
            kind: "body_json";
            path: string[];
        } | {
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
        }, unknown, z.core.$ZodTypeInternals<{
            kind: "body_json";
            path: string[];
        } | {
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
        }, unknown>>;
    }, z.core.$strict>, z.ZodObject<{
        op: z.ZodLiteral<"numeric">;
        field: z.ZodType<{
            kind: "body_json";
            path: string[];
        } | {
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
        }, unknown, z.core.$ZodTypeInternals<{
            kind: "body_json";
            path: string[];
        } | {
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
            kind: "body_json";
            path: string[];
        } | {
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
        }, unknown, z.core.$ZodTypeInternals<{
            kind: "body_json";
            path: string[];
        } | {
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
        numerator: z.ZodType<PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
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
        }>, unknown, z.core.$ZodTypeInternals<PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
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
}, z.core.$strict>;
export type LogQuerySpecV2 = z.infer<typeof logQuerySpecV2Schema>;
/** A spec validated, or the JSON path and message of every problem with it. */
export type LogQuerySpecParse = {
    success: true;
    spec: LogQuerySpecV2;
} | {
    success: false;
    issues: {
        path: (string | number)[];
        message: string;
    }[];
};
/** Validates `input` as a spec, reporting every problem at its JSON path inside the spec. */
export declare const parseLogQuerySpec: (input: unknown) => LogQuerySpecParse;
