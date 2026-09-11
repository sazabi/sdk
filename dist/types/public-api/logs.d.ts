import { z } from "zod";
/** Input for POST /logs/query. The query object is the shared v1 query spec. */
export declare const QueryLogsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodObject<{
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
}, z.core.$strict>;
export type QueryLogsInput = z.infer<typeof QueryLogsInputSchema>;
/** Output for POST /logs/query. */
export declare const QueryLogsOutputSchema: z.ZodObject<{
    spec: z.ZodObject<{
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
    resolution: z.ZodObject<{
        version: z.ZodLiteral<1>;
        definitionHash: z.ZodString;
        catalogRevision: z.ZodString;
        familyIds: z.ZodArray<z.ZodUUID>;
        resolvedAt: z.ZodISODateTime;
    }, z.core.$strict>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    coverage: z.ZodObject<{
        status: z.ZodLiteral<"complete">;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        executionMs: z.ZodNumber;
        familyCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type QueryLogsOutput = z.infer<typeof QueryLogsOutputSchema>;
/** Input for POST /logs/ask. */
export declare const AskLogsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    question: z.ZodString;
}, z.core.$strict>;
export type AskLogsInput = z.infer<typeof AskLogsInputSchema>;
/** Output for POST /logs/ask. */
export declare const AskLogsOutputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"no_match">;
    explanation: z.ZodString;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        retrievalMs: z.ZodNumber;
        planningMs: z.ZodNumber;
        executionMs: z.ZodNumber;
        candidateCount: z.ZodNumber;
        familyCount: z.ZodNumber;
        plannerModel: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"query">;
    explanation: z.ZodString;
    spec: z.ZodObject<{
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
    resolution: z.ZodObject<{
        version: z.ZodLiteral<1>;
        definitionHash: z.ZodString;
        catalogRevision: z.ZodString;
        familyIds: z.ZodArray<z.ZodUUID>;
        resolvedAt: z.ZodISODateTime;
    }, z.core.$strict>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    coverage: z.ZodObject<{
        status: z.ZodLiteral<"complete">;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        retrievalMs: z.ZodNumber;
        planningMs: z.ZodNumber;
        executionMs: z.ZodNumber;
        candidateCount: z.ZodNumber;
        familyCount: z.ZodNumber;
        plannerModel: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>], "status">;
export type AskLogsOutput = z.infer<typeof AskLogsOutputSchema>;
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
export declare const queryLogs: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
    spec: z.ZodObject<{
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
    resolution: z.ZodObject<{
        version: z.ZodLiteral<1>;
        definitionHash: z.ZodString;
        catalogRevision: z.ZodString;
        familyIds: z.ZodArray<z.ZodUUID>;
        resolvedAt: z.ZodISODateTime;
    }, z.core.$strict>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    coverage: z.ZodObject<{
        status: z.ZodLiteral<"complete">;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        executionMs: z.ZodNumber;
        familyCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const askLogs: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    question: z.ZodString;
}, z.core.$strict>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"no_match">;
    explanation: z.ZodString;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        retrievalMs: z.ZodNumber;
        planningMs: z.ZodNumber;
        executionMs: z.ZodNumber;
        candidateCount: z.ZodNumber;
        familyCount: z.ZodNumber;
        plannerModel: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"query">;
    explanation: z.ZodString;
    spec: z.ZodObject<{
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
    resolution: z.ZodObject<{
        version: z.ZodLiteral<1>;
        definitionHash: z.ZodString;
        catalogRevision: z.ZodString;
        familyIds: z.ZodArray<z.ZodUUID>;
        resolvedAt: z.ZodISODateTime;
    }, z.core.$strict>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    coverage: z.ZodObject<{
        status: z.ZodLiteral<"complete">;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        retrievalMs: z.ZodNumber;
        planningMs: z.ZodNumber;
        executionMs: z.ZodNumber;
        candidateCount: z.ZodNumber;
        familyCount: z.ZodNumber;
        plannerModel: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>], "status">, "api">;
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
    readonly query: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        query: z.ZodObject<{
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
    }, z.core.$strict>, z.ZodObject<{
        spec: z.ZodObject<{
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
        resolution: z.ZodObject<{
            version: z.ZodLiteral<1>;
            definitionHash: z.ZodString;
            catalogRevision: z.ZodString;
            familyIds: z.ZodArray<z.ZodUUID>;
            resolvedAt: z.ZodISODateTime;
        }, z.core.$strict>;
        resolvedTimeRange: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        coverage: z.ZodObject<{
            status: z.ZodLiteral<"complete">;
            available: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
        data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
        meta: z.ZodObject<{
            took: z.ZodNumber;
            executionMs: z.ZodNumber;
            familyCount: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly ask: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        question: z.ZodString;
    }, z.core.$strict>, z.ZodDiscriminatedUnion<[z.ZodObject<{
        status: z.ZodLiteral<"no_match">;
        explanation: z.ZodString;
        data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
        meta: z.ZodObject<{
            took: z.ZodNumber;
            retrievalMs: z.ZodNumber;
            planningMs: z.ZodNumber;
            executionMs: z.ZodNumber;
            candidateCount: z.ZodNumber;
            familyCount: z.ZodNumber;
            plannerModel: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<"query">;
        explanation: z.ZodString;
        spec: z.ZodObject<{
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
        resolution: z.ZodObject<{
            version: z.ZodLiteral<1>;
            definitionHash: z.ZodString;
            catalogRevision: z.ZodString;
            familyIds: z.ZodArray<z.ZodUUID>;
            resolvedAt: z.ZodISODateTime;
        }, z.core.$strict>;
        resolvedTimeRange: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        coverage: z.ZodObject<{
            status: z.ZodLiteral<"complete">;
            available: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
        data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
        meta: z.ZodObject<{
            took: z.ZodNumber;
            retrievalMs: z.ZodNumber;
            planningMs: z.ZodNumber;
            executionMs: z.ZodNumber;
            candidateCount: z.ZodNumber;
            familyCount: z.ZodNumber;
            plannerModel: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>], "status">, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
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
