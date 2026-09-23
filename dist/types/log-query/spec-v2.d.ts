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
 * `column` names a promoted semconv column (e.g. `http.route`); `pattern` is a
 * `pattern_id` from the log_patterns catalog. `body` and `body_json` read the
 * log body as text and by JSON path; only a scan serves them.
 */
export declare const logFieldRefSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}>, unknown, z.core.$ZodTypeInternals<PredicateTree<{
    kind: "body_json";
    path: string[];
} | {
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
}>, unknown>>;
export type LogPredicateTree = PredicateTree<LogFieldRef>;
export declare const LOG_DURATION_AGGREGATES: readonly ["sum", "avg", "max", "p50", "p95", "p99"];
export type LogDurationAggregate = (typeof LOG_DURATION_AGGREGATES)[number];
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
    }, unknown, z.core.$ZodTypeInternals<{
        kind: "body_json";
        path: string[];
    } | {
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
    }, unknown>>;
}, z.core.$strict>, z.ZodObject<{
    op: z.ZodLiteral<"numeric">;
    field: z.ZodType<{
        kind: "body_json";
        path: string[];
    } | {
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
    }, unknown, z.core.$ZodTypeInternals<{
        kind: "body_json";
        path: string[];
    } | {
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
        kind: "body_json";
        path: string[];
    } | {
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
    }, unknown, z.core.$ZodTypeInternals<{
        kind: "body_json";
        path: string[];
    } | {
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
export type LogMeasureV2 = Measure<LogFieldRef> | {
    op: "error_count";
} | {
    op: "duration";
    aggregate: LogDurationAggregate;
};
export declare const LOG_QUERY_BUCKETS: readonly ["1m", "5m", "1h", "1d"];
export type LogQueryBucket = (typeof LOG_QUERY_BUCKETS)[number];
export declare const logQueryAnchorSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"pattern">;
    query: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"patterns">;
    patternIds: z.ZodArray<z.ZodUUID>;
}, z.core.$strict>], "kind">;
export type LogQueryAnchor = z.infer<typeof logQueryAnchorSchema>;
export declare const logQuerySpecV2Schema: z.ZodObject<{
    version: z.ZodLiteral<2>;
    source: z.ZodObject<{
        kind: z.ZodLiteral<"logs">;
    }, z.core.$strict>;
    predicate: z.ZodType<PredicateTree<{
        kind: "body_json";
        path: string[];
    } | {
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
    }>, unknown, z.core.$ZodTypeInternals<PredicateTree<{
        kind: "body_json";
        path: string[];
    } | {
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
        }, unknown, z.core.$ZodTypeInternals<{
            kind: "body_json";
            path: string[];
        } | {
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
        }, unknown>>;
    }, z.core.$strict>, z.ZodObject<{
        op: z.ZodLiteral<"numeric">;
        field: z.ZodType<{
            kind: "body_json";
            path: string[];
        } | {
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
        }, unknown, z.core.$ZodTypeInternals<{
            kind: "body_json";
            path: string[];
        } | {
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
            kind: "body_json";
            path: string[];
        } | {
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
        }, unknown, z.core.$ZodTypeInternals<{
            kind: "body_json";
            path: string[];
        } | {
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
export type LogQuerySpecV2 = z.infer<typeof logQuerySpecV2Schema>;
