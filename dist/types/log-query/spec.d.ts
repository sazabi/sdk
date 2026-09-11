import { z } from "zod";
import type { LogQuerySpecV2 } from "./spec-v2.js";
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
export declare const logFieldSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"service">;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"severity_number">;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"attribute">;
    source: z.ZodEnum<{
        log: "log";
        resource: "resource";
        scope: "scope";
    }>;
    key: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"body_json">;
    path: z.ZodArray<z.ZodString>;
}, z.core.$strict>], "kind">;
export type LogField = z.infer<typeof logFieldSchema>;
export declare const logPredicateSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    field: z.ZodUnion<readonly [z.ZodObject<{
        kind: z.ZodLiteral<"service">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"attribute">;
        source: z.ZodEnum<{
            log: "log";
            resource: "resource";
            scope: "scope";
        }>;
        key: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"body_json">;
        path: z.ZodArray<z.ZodString>;
    }, z.core.$strict>]>;
    operator: z.ZodEnum<{
        contains: "contains";
        eq: "eq";
        neq: "neq";
    }>;
    value: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    field: z.ZodUnion<readonly [z.ZodObject<{
        kind: z.ZodLiteral<"service">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"attribute">;
        source: z.ZodEnum<{
            log: "log";
            resource: "resource";
            scope: "scope";
        }>;
        key: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"body_json">;
        path: z.ZodArray<z.ZodString>;
    }, z.core.$strict>]>;
    operator: z.ZodLiteral<"in">;
    values: z.ZodArray<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    field: z.ZodUnion<readonly [z.ZodObject<{
        kind: z.ZodLiteral<"attribute">;
        source: z.ZodEnum<{
            log: "log";
            resource: "resource";
            scope: "scope";
        }>;
        key: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"body_json">;
        path: z.ZodArray<z.ZodString>;
    }, z.core.$strict>]>;
    operator: z.ZodLiteral<"exists">;
}, z.core.$strict>, z.ZodObject<{
    field: z.ZodUnion<readonly [z.ZodObject<{
        kind: z.ZodLiteral<"severity_number">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"attribute">;
        source: z.ZodEnum<{
            log: "log";
            resource: "resource";
            scope: "scope";
        }>;
        key: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"body_json">;
        path: z.ZodArray<z.ZodString>;
    }, z.core.$strict>]>;
    operator: z.ZodEnum<{
        gt: "gt";
        gte: "gte";
        lt: "lt";
        lte: "lte";
    }>;
    value: z.ZodNumber;
}, z.core.$strict>], "operator">;
export type LogPredicate = z.infer<typeof logPredicateSchema>;
export declare const logTimeRangeSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"absolute">;
    from: z.ZodISODateTime;
    to: z.ZodISODateTime;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"relative">;
    lookbackSeconds: z.ZodNumber;
}, z.core.$strict>], "kind">;
export type LogTimeRange = z.infer<typeof logTimeRangeSchema>;
export declare const logMeasureSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    operation: z.ZodLiteral<"count">;
}, z.core.$strict>, z.ZodObject<{
    operation: z.ZodEnum<{
        avg: "avg";
        max: "max";
        min: "min";
        p50: "p50";
        p95: "p95";
        p99: "p99";
        sum: "sum";
    }>;
    field: z.ZodUnion<readonly [z.ZodObject<{
        kind: z.ZodLiteral<"severity_number">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"attribute">;
        source: z.ZodEnum<{
            log: "log";
            resource: "resource";
            scope: "scope";
        }>;
        key: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"body_json">;
        path: z.ZodArray<z.ZodString>;
    }, z.core.$strict>]>;
}, z.core.$strict>], "operation">;
export type LogMeasure = z.infer<typeof logMeasureSchema>;
export declare const logQuerySpecV1Schema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    pattern: z.ZodObject<{
        query: z.ZodString;
    }, z.core.$strict>;
    timeRange: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">;
    filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodUnion<readonly [z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>]>;
        operator: z.ZodEnum<{
            contains: "contains";
            eq: "eq";
            neq: "neq";
        }>;
        value: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        field: z.ZodUnion<readonly [z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>]>;
        operator: z.ZodLiteral<"in">;
        values: z.ZodArray<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        field: z.ZodUnion<readonly [z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>]>;
        operator: z.ZodLiteral<"exists">;
    }, z.core.$strict>, z.ZodObject<{
        field: z.ZodUnion<readonly [z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>]>;
        operator: z.ZodEnum<{
            gt: "gt";
            gte: "gte";
            lt: "lt";
            lte: "lte";
        }>;
        value: z.ZodNumber;
    }, z.core.$strict>], "operator">>>;
    result: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"details">;
        limit: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"aggregate">;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            operation: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            operation: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"severity_number">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>]>;
        }, z.core.$strict>], "operation">;
        groupBy: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"timeseries">;
        bucket: z.ZodEnum<{
            day: "day";
            hour: "hour";
            minute: "minute";
        }>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            operation: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            operation: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"severity_number">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>]>;
        }, z.core.$strict>], "operation">;
        groupBy: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity_number">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strict>], "kind">;
}, z.core.$strict>;
export type LogQuerySpecV1 = z.infer<typeof logQuerySpecV1Schema>;
export type LogQuerySpec = LogQuerySpecV1;
export type LogQuerySpecAny = LogQuerySpecV1 | LogQuerySpecV2;
/**
 * Execution snapshot produced by pattern retrieval. Field names are part of
 * the published `AskLogsOutputSchema` contract and therefore stay as they
 * were under the retired Drain catalog:
 * - `familyIds` carries the code pattern ids (`pattern_id` on
 *   `logs_by_pattern`, i.e. `codePatternId({ projectId, identityKey })`) of
 *   every call site of every selected template.
 * - `catalogRevision` carries the pattern index revision as a decimal string.
 */
export declare const logQueryResolutionV1Schema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    definitionHash: z.ZodString;
    catalogRevision: z.ZodString;
    familyIds: z.ZodArray<z.ZodUUID>;
    resolvedAt: z.ZodISODateTime;
}, z.core.$strict>;
export type LogQueryResolutionV1 = z.infer<typeof logQueryResolutionV1Schema>;
export interface ResolvedTimeRange {
    from: string;
    to: string;
}
