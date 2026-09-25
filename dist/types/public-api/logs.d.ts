import { z } from "zod";
export declare const coverageSchema: z.ZodObject<{
    status: z.ZodEnum<{
        complete: "complete";
        partial: "partial";
    }>;
    available: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    patterns: z.ZodNullable<z.ZodObject<{
        selected: z.ZodNumber;
        observed: z.ZodNumber;
        silent: z.ZodNumber;
        window: z.ZodNullable<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    rows: z.ZodNullable<z.ZodObject<{
        matched: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
/** Input for POST /logs/query. The query object is the shared v1 query spec. */
export declare const QueryLogsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodObject<{
        version: z.ZodDefault<z.ZodLiteral<1>>;
        pattern: z.ZodOptional<z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strict>>;
        timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">>;
        filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>]>;
            operator: z.ZodLiteral<"in">;
            values: z.ZodArray<z.ZodString>;
        }, z.core.$strict>, z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
        result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"details">;
            limit: z.ZodDefault<z.ZodNumber>;
            order: z.ZodDefault<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    patternIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    includeMeteringDiagnostics: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export type QueryLogsInput = z.infer<typeof QueryLogsInputSchema>;
/** Output for POST /logs/query. */
export declare const QueryLogsOutputSchema: z.ZodObject<{
    spec: z.ZodObject<{
        version: z.ZodDefault<z.ZodLiteral<1>>;
        pattern: z.ZodOptional<z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strict>>;
        timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">>;
        filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>]>;
            operator: z.ZodLiteral<"in">;
            values: z.ZodArray<z.ZodString>;
        }, z.core.$strict>, z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
        result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"details">;
            limit: z.ZodDefault<z.ZodNumber>;
            order: z.ZodDefault<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strict>], "kind">>;
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
        status: z.ZodEnum<{
            complete: "complete";
            partial: "partial";
        }>;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        patterns: z.ZodNullable<z.ZodObject<{
            selected: z.ZodNumber;
            observed: z.ZodNumber;
            silent: z.ZodNumber;
            window: z.ZodNullable<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        rows: z.ZodNullable<z.ZodObject<{
            matched: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        executionMs: z.ZodNumber;
        familyCount: z.ZodNumber;
        route: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strict>>;
    }, z.core.$strip>;
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
    coverage: z.ZodObject<{
        status: z.ZodEnum<{
            complete: "complete";
            partial: "partial";
        }>;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        patterns: z.ZodNullable<z.ZodObject<{
            selected: z.ZodNumber;
            observed: z.ZodNumber;
            silent: z.ZodNumber;
            window: z.ZodNullable<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        rows: z.ZodNullable<z.ZodObject<{
            matched: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        retrievalMs: z.ZodNumber;
        livenessMs: z.ZodNumber;
        planningMs: z.ZodNumber;
        executionMs: z.ZodNumber;
        candidateCount: z.ZodNumber;
        familyCount: z.ZodNumber;
        plannerModel: z.ZodString;
        modelCalls: z.ZodDefault<z.ZodNumber>;
        answerPath: z.ZodDefault<z.ZodEnum<{
            inventory: "inventory";
            planner: "planner";
        }>>;
        route: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strict>>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"query">;
    explanation: z.ZodString;
    spec: z.ZodObject<{
        version: z.ZodDefault<z.ZodLiteral<1>>;
        pattern: z.ZodOptional<z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strict>>;
        timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">>;
        filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>]>;
            operator: z.ZodLiteral<"in">;
            values: z.ZodArray<z.ZodString>;
        }, z.core.$strict>, z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
        result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"details">;
            limit: z.ZodDefault<z.ZodNumber>;
            order: z.ZodDefault<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    resolution: z.ZodNullable<z.ZodObject<{
        version: z.ZodLiteral<1>;
        definitionHash: z.ZodString;
        catalogRevision: z.ZodString;
        familyIds: z.ZodArray<z.ZodUUID>;
        resolvedAt: z.ZodISODateTime;
    }, z.core.$strict>>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    coverage: z.ZodObject<{
        status: z.ZodEnum<{
            complete: "complete";
            partial: "partial";
        }>;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        patterns: z.ZodNullable<z.ZodObject<{
            selected: z.ZodNumber;
            observed: z.ZodNumber;
            silent: z.ZodNumber;
            window: z.ZodNullable<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        rows: z.ZodNullable<z.ZodObject<{
            matched: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        retrievalMs: z.ZodNumber;
        livenessMs: z.ZodNumber;
        planningMs: z.ZodNumber;
        executionMs: z.ZodNumber;
        candidateCount: z.ZodNumber;
        familyCount: z.ZodNumber;
        plannerModel: z.ZodString;
        modelCalls: z.ZodDefault<z.ZodNumber>;
        answerPath: z.ZodDefault<z.ZodEnum<{
            inventory: "inventory";
            planner: "planner";
        }>>;
        route: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strict>>;
    }, z.core.$strip>;
}, z.core.$strip>], "status">;
export type AskLogsOutput = z.infer<typeof AskLogsOutputSchema>;
/** Input for POST /logs/query-spec. The spec is the shared v2 query spec; the window is an invocation parameter. */
export declare const QuerySpecLogsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    spec: z.ZodObject<{
        version: z.ZodLiteral<2>;
        source: z.ZodObject<{
            kind: z.ZodLiteral<"logs">;
        }, z.core.$strict>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
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
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
        } | {
            kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
        } | {
            kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
        } | {
            kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
    suggestion: z.ZodEnum<{
        allow_approximation: "allow_approximation";
        coarsen_bucket: "coarsen_bucket";
        narrow_window: "narrow_window";
        promote_attribute: "promote_attribute";
    }>;
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
export declare const queryLogs: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodObject<{
        version: z.ZodDefault<z.ZodLiteral<1>>;
        pattern: z.ZodOptional<z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strict>>;
        timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">>;
        filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>]>;
            operator: z.ZodLiteral<"in">;
            values: z.ZodArray<z.ZodString>;
        }, z.core.$strict>, z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
        result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"details">;
            limit: z.ZodDefault<z.ZodNumber>;
            order: z.ZodDefault<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    patternIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    includeMeteringDiagnostics: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>, z.ZodObject<{
    spec: z.ZodObject<{
        version: z.ZodDefault<z.ZodLiteral<1>>;
        pattern: z.ZodOptional<z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strict>>;
        timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">>;
        filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>]>;
            operator: z.ZodLiteral<"in">;
            values: z.ZodArray<z.ZodString>;
        }, z.core.$strict>, z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
        result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"details">;
            limit: z.ZodDefault<z.ZodNumber>;
            order: z.ZodDefault<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strict>], "kind">>;
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
        status: z.ZodEnum<{
            complete: "complete";
            partial: "partial";
        }>;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        patterns: z.ZodNullable<z.ZodObject<{
            selected: z.ZodNumber;
            observed: z.ZodNumber;
            silent: z.ZodNumber;
            window: z.ZodNullable<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        rows: z.ZodNullable<z.ZodObject<{
            matched: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        executionMs: z.ZodNumber;
        familyCount: z.ZodNumber;
        route: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strict>>;
    }, z.core.$strip>;
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
}, z.core.$strip>, "api">;
export declare const querySpecLogs: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    spec: z.ZodObject<{
        version: z.ZodLiteral<2>;
        source: z.ZodObject<{
            kind: z.ZodLiteral<"logs">;
        }, z.core.$strict>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
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
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
        } | {
            kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
        } | {
            kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
        } | {
            kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
            } | {
                kind: "message";
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
    suggestion: z.ZodEnum<{
        allow_approximation: "allow_approximation";
        coarsen_bucket: "coarsen_bucket";
        narrow_window: "narrow_window";
        promote_attribute: "promote_attribute";
    }>;
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
}, z.core.$strict>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"no_match">;
    explanation: z.ZodString;
    coverage: z.ZodObject<{
        status: z.ZodEnum<{
            complete: "complete";
            partial: "partial";
        }>;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        patterns: z.ZodNullable<z.ZodObject<{
            selected: z.ZodNumber;
            observed: z.ZodNumber;
            silent: z.ZodNumber;
            window: z.ZodNullable<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        rows: z.ZodNullable<z.ZodObject<{
            matched: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        retrievalMs: z.ZodNumber;
        livenessMs: z.ZodNumber;
        planningMs: z.ZodNumber;
        executionMs: z.ZodNumber;
        candidateCount: z.ZodNumber;
        familyCount: z.ZodNumber;
        plannerModel: z.ZodString;
        modelCalls: z.ZodDefault<z.ZodNumber>;
        answerPath: z.ZodDefault<z.ZodEnum<{
            inventory: "inventory";
            planner: "planner";
        }>>;
        route: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strict>>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"query">;
    explanation: z.ZodString;
    spec: z.ZodObject<{
        version: z.ZodDefault<z.ZodLiteral<1>>;
        pattern: z.ZodOptional<z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strict>>;
        timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"absolute">;
            from: z.ZodISODateTime;
            to: z.ZodISODateTime;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"relative">;
            lookbackSeconds: z.ZodNumber;
        }, z.core.$strict>], "kind">>;
        filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"service">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>]>;
            operator: z.ZodLiteral<"in">;
            values: z.ZodArray<z.ZodString>;
        }, z.core.$strict>, z.ZodObject<{
            field: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"attribute">;
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
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
        result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"details">;
            limit: z.ZodDefault<z.ZodNumber>;
            order: z.ZodDefault<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"patterns">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                source: z.ZodDefault<z.ZodEnum<{
                    log: "log";
                    resource: "resource";
                    scope: "scope";
                }>>;
                key: z.ZodString;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body">;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"body_json">;
                path: z.ZodArray<z.ZodString>;
            }, z.core.$strict>], "kind">>>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>;
    resolution: z.ZodNullable<z.ZodObject<{
        version: z.ZodLiteral<1>;
        definitionHash: z.ZodString;
        catalogRevision: z.ZodString;
        familyIds: z.ZodArray<z.ZodUUID>;
        resolvedAt: z.ZodISODateTime;
    }, z.core.$strict>>;
    resolvedTimeRange: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>;
    coverage: z.ZodObject<{
        status: z.ZodEnum<{
            complete: "complete";
            partial: "partial";
        }>;
        available: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        patterns: z.ZodNullable<z.ZodObject<{
            selected: z.ZodNumber;
            observed: z.ZodNumber;
            silent: z.ZodNumber;
            window: z.ZodNullable<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        rows: z.ZodNullable<z.ZodObject<{
            matched: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    meta: z.ZodObject<{
        took: z.ZodNumber;
        retrievalMs: z.ZodNumber;
        livenessMs: z.ZodNumber;
        planningMs: z.ZodNumber;
        executionMs: z.ZodNumber;
        candidateCount: z.ZodNumber;
        familyCount: z.ZodNumber;
        plannerModel: z.ZodString;
        modelCalls: z.ZodDefault<z.ZodNumber>;
        answerPath: z.ZodDefault<z.ZodEnum<{
            inventory: "inventory";
            planner: "planner";
        }>>;
        route: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strict>>;
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
            version: z.ZodDefault<z.ZodLiteral<1>>;
            pattern: z.ZodOptional<z.ZodObject<{
                query: z.ZodString;
            }, z.core.$strict>>;
            timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"absolute">;
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"relative">;
                lookbackSeconds: z.ZodNumber;
            }, z.core.$strict>], "kind">>;
            filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                field: z.ZodUnion<readonly [z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"attribute">;
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body_json">;
                    path: z.ZodArray<z.ZodString>;
                }, z.core.$strict>]>;
                operator: z.ZodLiteral<"in">;
                values: z.ZodArray<z.ZodString>;
            }, z.core.$strict>, z.ZodObject<{
                field: z.ZodUnion<readonly [z.ZodObject<{
                    kind: z.ZodLiteral<"attribute">;
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
            result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"details">;
                limit: z.ZodDefault<z.ZodNumber>;
                order: z.ZodDefault<z.ZodEnum<{
                    asc: "asc";
                    desc: "desc";
                }>>;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"patterns">;
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
                        source: z.ZodDefault<z.ZodEnum<{
                            log: "log";
                            resource: "resource";
                            scope: "scope";
                        }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
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
                        source: z.ZodDefault<z.ZodEnum<{
                            log: "log";
                            resource: "resource";
                            scope: "scope";
                        }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body_json">;
                    path: z.ZodArray<z.ZodString>;
                }, z.core.$strict>], "kind">>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, z.core.$strict>], "kind">>;
        }, z.core.$strict>;
        patternIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeMeteringDiagnostics: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>, z.ZodObject<{
        spec: z.ZodObject<{
            version: z.ZodDefault<z.ZodLiteral<1>>;
            pattern: z.ZodOptional<z.ZodObject<{
                query: z.ZodString;
            }, z.core.$strict>>;
            timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"absolute">;
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"relative">;
                lookbackSeconds: z.ZodNumber;
            }, z.core.$strict>], "kind">>;
            filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                field: z.ZodUnion<readonly [z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"attribute">;
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body_json">;
                    path: z.ZodArray<z.ZodString>;
                }, z.core.$strict>]>;
                operator: z.ZodLiteral<"in">;
                values: z.ZodArray<z.ZodString>;
            }, z.core.$strict>, z.ZodObject<{
                field: z.ZodUnion<readonly [z.ZodObject<{
                    kind: z.ZodLiteral<"attribute">;
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
            result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"details">;
                limit: z.ZodDefault<z.ZodNumber>;
                order: z.ZodDefault<z.ZodEnum<{
                    asc: "asc";
                    desc: "desc";
                }>>;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"patterns">;
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
                        source: z.ZodDefault<z.ZodEnum<{
                            log: "log";
                            resource: "resource";
                            scope: "scope";
                        }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
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
                        source: z.ZodDefault<z.ZodEnum<{
                            log: "log";
                            resource: "resource";
                            scope: "scope";
                        }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body_json">;
                    path: z.ZodArray<z.ZodString>;
                }, z.core.$strict>], "kind">>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, z.core.$strict>], "kind">>;
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
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
            available: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
            patterns: z.ZodNullable<z.ZodObject<{
                selected: z.ZodNumber;
                observed: z.ZodNumber;
                silent: z.ZodNumber;
                window: z.ZodNullable<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            rows: z.ZodNullable<z.ZodObject<{
                matched: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
        meta: z.ZodObject<{
            took: z.ZodNumber;
            executionMs: z.ZodNumber;
            familyCount: z.ZodNumber;
            route: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strict>>;
        }, z.core.$strip>;
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
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly querySpec: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        spec: z.ZodObject<{
            version: z.ZodLiteral<2>;
            source: z.ZodObject<{
                kind: z.ZodLiteral<"logs">;
            }, z.core.$strict>;
            predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
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
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
            } | {
                kind: "message";
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
                } | {
                    kind: "message";
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
                } | {
                    kind: "message";
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
                } | {
                    kind: "message";
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
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
            } | {
                kind: "message";
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
                } | {
                    kind: "message";
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
                } | {
                    kind: "message";
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
                } | {
                    kind: "message";
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
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
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
            } | {
                kind: "message";
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
                } | {
                    kind: "message";
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
                } | {
                    kind: "message";
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
                } | {
                    kind: "message";
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
        suggestion: z.ZodEnum<{
            allow_approximation: "allow_approximation";
            coarsen_bucket: "coarsen_bucket";
            narrow_window: "narrow_window";
            promote_attribute: "promote_attribute";
        }>;
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
    }, z.core.$strict>, z.ZodDiscriminatedUnion<[z.ZodObject<{
        status: z.ZodLiteral<"no_match">;
        explanation: z.ZodString;
        coverage: z.ZodObject<{
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
            available: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
            patterns: z.ZodNullable<z.ZodObject<{
                selected: z.ZodNumber;
                observed: z.ZodNumber;
                silent: z.ZodNumber;
                window: z.ZodNullable<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            rows: z.ZodNullable<z.ZodObject<{
                matched: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
        meta: z.ZodObject<{
            took: z.ZodNumber;
            retrievalMs: z.ZodNumber;
            livenessMs: z.ZodNumber;
            planningMs: z.ZodNumber;
            executionMs: z.ZodNumber;
            candidateCount: z.ZodNumber;
            familyCount: z.ZodNumber;
            plannerModel: z.ZodString;
            modelCalls: z.ZodDefault<z.ZodNumber>;
            answerPath: z.ZodDefault<z.ZodEnum<{
                inventory: "inventory";
                planner: "planner";
            }>>;
            route: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strict>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<"query">;
        explanation: z.ZodString;
        spec: z.ZodObject<{
            version: z.ZodDefault<z.ZodLiteral<1>>;
            pattern: z.ZodOptional<z.ZodObject<{
                query: z.ZodString;
            }, z.core.$strict>>;
            timeRange: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"absolute">;
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"relative">;
                lookbackSeconds: z.ZodNumber;
            }, z.core.$strict>], "kind">>;
            filters: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                field: z.ZodUnion<readonly [z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"attribute">;
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body_json">;
                    path: z.ZodArray<z.ZodString>;
                }, z.core.$strict>]>;
                operator: z.ZodLiteral<"in">;
                values: z.ZodArray<z.ZodString>;
            }, z.core.$strict>, z.ZodObject<{
                field: z.ZodUnion<readonly [z.ZodObject<{
                    kind: z.ZodLiteral<"attribute">;
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
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
            result: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
                kind: z.ZodLiteral<"details">;
                limit: z.ZodDefault<z.ZodNumber>;
                order: z.ZodDefault<z.ZodEnum<{
                    asc: "asc";
                    desc: "desc";
                }>>;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"patterns">;
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
                        source: z.ZodDefault<z.ZodEnum<{
                            log: "log";
                            resource: "resource";
                            scope: "scope";
                        }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
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
                        source: z.ZodDefault<z.ZodEnum<{
                            log: "log";
                            resource: "resource";
                            scope: "scope";
                        }>>;
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
                    source: z.ZodDefault<z.ZodEnum<{
                        log: "log";
                        resource: "resource";
                        scope: "scope";
                    }>>;
                    key: z.ZodString;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"body_json">;
                    path: z.ZodArray<z.ZodString>;
                }, z.core.$strict>], "kind">>>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, z.core.$strict>], "kind">>;
        }, z.core.$strict>;
        resolution: z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<1>;
            definitionHash: z.ZodString;
            catalogRevision: z.ZodString;
            familyIds: z.ZodArray<z.ZodUUID>;
            resolvedAt: z.ZodISODateTime;
        }, z.core.$strict>>;
        resolvedTimeRange: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>;
        coverage: z.ZodObject<{
            status: z.ZodEnum<{
                complete: "complete";
                partial: "partial";
            }>;
            available: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>;
            patterns: z.ZodNullable<z.ZodObject<{
                selected: z.ZodNumber;
                observed: z.ZodNumber;
                silent: z.ZodNumber;
                window: z.ZodNullable<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            rows: z.ZodNullable<z.ZodObject<{
                matched: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
        meta: z.ZodObject<{
            took: z.ZodNumber;
            retrievalMs: z.ZodNumber;
            livenessMs: z.ZodNumber;
            planningMs: z.ZodNumber;
            executionMs: z.ZodNumber;
            candidateCount: z.ZodNumber;
            familyCount: z.ZodNumber;
            plannerModel: z.ZodString;
            modelCalls: z.ZodDefault<z.ZodNumber>;
            answerPath: z.ZodDefault<z.ZodEnum<{
                inventory: "inventory";
                planner: "planner";
            }>>;
            route: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strict>>;
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
