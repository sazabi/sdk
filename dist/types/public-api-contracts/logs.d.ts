import { z } from "zod";
/**
 * Filter operators supported for log queries.
 */
export declare const FilterOperatorSchema: z.ZodEnum<{
    between: "between";
    contains: "contains";
    eq: "eq";
    exists: "exists";
    gt: "gt";
    gte: "gte";
    in: "in";
    lt: "lt";
    lte: "lte";
    neq: "neq";
    starts_with: "starts_with";
}>;
export type FilterOperator = z.infer<typeof FilterOperatorSchema>;
/**
 * Search mode for full-text log search.
 * - any: Match logs containing ANY of the search tokens
 * - all: Match logs containing ALL of the search tokens (default)
 * - phrase: Match the exact phrase
 */
export declare const SearchModeSchema: z.ZodEnum<{
    all: "all";
    any: "any";
    phrase: "phrase";
}>;
export type SearchMode = z.infer<typeof SearchModeSchema>;
/**
 * Search clause for full-text search across log fields.
 */
export declare const LogSearchSchema: z.ZodObject<{
    query: z.ZodString;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        all: "all";
        any: "any";
        phrase: "phrase";
    }>>>;
}, z.core.$strip>;
export type LogSearch = z.infer<typeof LogSearchSchema>;
/**
 * Filter clause for structured filtering on log fields.
 * Supports various operators for exact matching, ranges, and pattern matching.
 */
export declare const LogFilterSchema: z.ZodObject<{
    field: z.ZodString;
    op: z.ZodEnum<{
        between: "between";
        contains: "contains";
        eq: "eq";
        exists: "exists";
        gt: "gt";
        gte: "gte";
        in: "in";
        lt: "lt";
        lte: "lte";
        neq: "neq";
        starts_with: "starts_with";
    }>;
    value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>, z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>]>;
}, z.core.$strip>;
export type LogFilter = z.infer<typeof LogFilterSchema>;
/**
 * Sort configuration for log results.
 */
export declare const LogSortSchema: z.ZodObject<{
    field: z.ZodString;
    direction: z.ZodDefault<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type LogSort = z.infer<typeof LogSortSchema>;
/**
 * Pagination configuration for cursor-based pagination.
 */
export declare const LogPaginationSchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodNumber>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type LogPagination = z.infer<typeof LogPaginationSchema>;
/**
 * Input schema for POST /logs/query endpoint.
 *
 * Supports full-text search, structured filters, sorting, field selection,
 * and cursor-based pagination. All parameters are optional.
 *
 * Note: projectId is optional in the public contract and may be auto-filled by
 * the SDK or CLI from active context.
 */
export declare const QueryLogsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodObject<{
        query: z.ZodString;
        fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
        mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
            all: "all";
            any: "any";
            phrase: "phrase";
        }>>>;
    }, z.core.$strip>>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        op: z.ZodEnum<{
            between: "between";
            contains: "contains";
            eq: "eq";
            exists: "exists";
            gt: "gt";
            gte: "gte";
            in: "in";
            lt: "lt";
            lte: "lte";
            neq: "neq";
            starts_with: "starts_with";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>, z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>]>;
    }, z.core.$strip>>>;
    select: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sort: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        direction: z.ZodDefault<z.ZodEnum<{
            asc: "asc";
            desc: "desc";
        }>>;
    }, z.core.$strip>>;
    pagination: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodNumber>;
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type QueryLogsInput = z.infer<typeof QueryLogsInputSchema>;
/**
 * Default look-back window applied to logs.query when a request supplies no
 * `timestamp` filter. Without a time bound the query scans the project's entire
 * history (log stores prune only on a timestamp predicate), which is slow
 * enough to hit the backend query timeout. 24h keeps "latest logs" fast while
 * staying generous for active-but-sparse projects.
 */
export declare const DEFAULT_QUERY_WINDOW_MS: number;
/**
 * Applies the default query window at the public API boundary: when the caller
 * provided no explicit `timestamp` filter, returns the input with a
 * `timestamp >= now - DEFAULT_QUERY_WINDOW_MS` lower bound appended so the query
 * stays pruned to recent data. Keeps log backends unaware of defaulting policy.
 * An explicit `timestamp` filter (any operator) opts out and is returned
 * unchanged.
 */
export declare const applyDefaultLogQueryWindow: (input: QueryLogsInput) => QueryLogsInput;
/**
 * Log backend identifiers exposed by the public API.
 */
export declare const LogBackendIdSchema: z.ZodEnum<{
    axiom: "axiom";
    "better-stack": "better-stack";
    clickhouse: "clickhouse";
    cloudwatch: "cloudwatch";
    datadog: "datadog";
    gcp: "gcp";
    mezmo: "mezmo";
    posthog: "posthog";
    sentry: "sentry";
}>;
export type LogBackendId = z.infer<typeof LogBackendIdSchema>;
/**
 * Log backend kind.
 */
export declare const LogBackendKindSchema: z.ZodEnum<{
    external: "external";
    native: "native";
}>;
export type LogBackendKind = z.infer<typeof LogBackendKindSchema>;
/**
 * Shared project-scoped input for log metadata operations.
 *
 * When `question` is set, the API retrieves question-conditioned schema
 * bundles. When omitted, callers get the legacy recent-key / service hints
 * (compatible with `sazabi logs schema --json` skill invocations).
 */
export declare const LogsSchemaInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    question: z.ZodOptional<z.ZodString>;
    topK: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type LogsSchemaInput = z.infer<typeof LogsSchemaInputSchema>;
export declare const LogsSchemaBundleSchema: z.ZodObject<{
    id: z.ZodString;
    service: z.ZodString;
    keys: z.ZodArray<z.ZodString>;
    rowCount: z.ZodNumber;
    score: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type LogsSchemaBundle = z.infer<typeof LogsSchemaBundleSchema>;
export declare const LogsSchemaOutputSchema: z.ZodObject<{
    backend: z.ZodObject<{
        id: z.ZodEnum<{
            axiom: "axiom";
            "better-stack": "better-stack";
            clickhouse: "clickhouse";
            cloudwatch: "cloudwatch";
            datadog: "datadog";
            gcp: "gcp";
            mezmo: "mezmo";
            posthog: "posthog";
            sentry: "sentry";
        }>;
        name: z.ZodString;
        kind: z.ZodEnum<{
            external: "external";
            native: "native";
        }>;
    }, z.core.$strip>;
    features: z.ZodArray<z.ZodString>;
    commands: z.ZodArray<z.ZodEnum<{
        nativeQuery: "nativeQuery";
        patterns: "patterns";
        query: "query";
        schema: "schema";
        volume: "volume";
    }>>;
    queryableFields: z.ZodArray<z.ZodString>;
    searchableFields: z.ZodArray<z.ZodString>;
    question: z.ZodOptional<z.ZodString>;
    selectedBundles: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        keys: z.ZodArray<z.ZodString>;
        rowCount: z.ZodNumber;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    selectedAttributeKeys: z.ZodArray<z.ZodString>;
    observedServiceNames: z.ZodArray<z.ZodString>;
    observedAttributeKeys: z.ZodArray<z.ZodString>;
    indexStatus: z.ZodEnum<{
        empty: "empty";
        ready: "ready";
        skipped: "skipped";
        unavailable: "unavailable";
    }>;
    schemaContext: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type LogsSchemaOutput = z.infer<typeof LogsSchemaOutputSchema>;
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
export declare const LogsPatternsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    severity: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export type LogsPatternsInput = z.input<typeof LogsPatternsInputSchema>;
export declare const LogPatternSchema: z.ZodObject<{
    serviceName: z.ZodNullable<z.ZodString>;
    fingerprint: z.ZodString;
    pattern: z.ZodString;
    severity: z.ZodNullable<z.ZodString>;
    occurrences: z.ZodNumber;
    firstSeen: z.ZodNullable<z.ZodString>;
    lastSeen: z.ZodNullable<z.ZodString>;
    representativeId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type LogPattern = z.infer<typeof LogPatternSchema>;
export declare const LogsPatternsOutputSchema: z.ZodObject<{
    patterns: z.ZodArray<z.ZodObject<{
        serviceName: z.ZodNullable<z.ZodString>;
        fingerprint: z.ZodString;
        pattern: z.ZodString;
        severity: z.ZodNullable<z.ZodString>;
        occurrences: z.ZodNumber;
        firstSeen: z.ZodNullable<z.ZodString>;
        lastSeen: z.ZodNullable<z.ZodString>;
        representativeId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    meta: z.ZodObject<{
        backendId: z.ZodEnum<{
            axiom: "axiom";
            "better-stack": "better-stack";
            clickhouse: "clickhouse";
            cloudwatch: "cloudwatch";
            datadog: "datadog";
            gcp: "gcp";
            mezmo: "mezmo";
            posthog: "posthog";
            sentry: "sentry";
        }>;
        count: z.ZodNumber;
        took: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LogsPatternsOutput = z.infer<typeof LogsPatternsOutputSchema>;
export declare const LogsNativeQueryInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
}, z.core.$strip>;
export type LogsNativeQueryInput = z.infer<typeof LogsNativeQueryInputSchema>;
export declare const LogsNativeQueryOutputSchema: z.ZodObject<{
    result: z.ZodString;
    format: z.ZodLiteral<"text">;
    meta: z.ZodObject<{
        backendId: z.ZodEnum<{
            axiom: "axiom";
            "better-stack": "better-stack";
            clickhouse: "clickhouse";
            cloudwatch: "cloudwatch";
            datadog: "datadog";
            gcp: "gcp";
            mezmo: "mezmo";
            posthog: "posthog";
            sentry: "sentry";
        }>;
        took: z.ZodNumber;
        truncated: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LogsNativeQueryOutput = z.infer<typeof LogsNativeQueryOutputSchema>;
/**
 * Pagination metadata in query response.
 */
export declare const LogPaginationResponseSchema: z.ZodObject<{
    cursor: z.ZodNullable<z.ZodString>;
    hasMore: z.ZodBoolean;
}, z.core.$strip>;
export type LogPaginationResponse = z.infer<typeof LogPaginationResponseSchema>;
/**
 * Query metadata in response.
 */
export declare const LogQueryMetaSchema: z.ZodObject<{
    count: z.ZodNumber;
    took: z.ZodNumber;
}, z.core.$strip>;
export type LogQueryMeta = z.infer<typeof LogQueryMetaSchema>;
/**
 * Output schema for POST /logs/query endpoint.
 *
 * Returns log rows with selected fields, pagination cursor for next page,
 * and query execution metadata.
 */
export declare const QueryLogsOutputSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    meta: z.ZodObject<{
        count: z.ZodNumber;
        took: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type QueryLogsOutput = z.infer<typeof QueryLogsOutputSchema>;
/**
 * Contract definition for logs.query.
 */
export declare const queryLogs: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodObject<{
        query: z.ZodString;
        fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
        mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
            all: "all";
            any: "any";
            phrase: "phrase";
        }>>>;
    }, z.core.$strip>>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        op: z.ZodEnum<{
            between: "between";
            contains: "contains";
            eq: "eq";
            exists: "exists";
            gt: "gt";
            gte: "gte";
            in: "in";
            lt: "lt";
            lte: "lte";
            neq: "neq";
            starts_with: "starts_with";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>, z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>]>;
    }, z.core.$strip>>>;
    select: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sort: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        direction: z.ZodDefault<z.ZodEnum<{
            asc: "asc";
            desc: "desc";
        }>>;
    }, z.core.$strip>>;
    pagination: z.ZodOptional<z.ZodObject<{
        limit: z.ZodDefault<z.ZodNumber>;
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    meta: z.ZodObject<{
        count: z.ZodNumber;
        took: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for logs.schema.
 */
export declare const logsSchema: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    question: z.ZodOptional<z.ZodString>;
    topK: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    backend: z.ZodObject<{
        id: z.ZodEnum<{
            axiom: "axiom";
            "better-stack": "better-stack";
            clickhouse: "clickhouse";
            cloudwatch: "cloudwatch";
            datadog: "datadog";
            gcp: "gcp";
            mezmo: "mezmo";
            posthog: "posthog";
            sentry: "sentry";
        }>;
        name: z.ZodString;
        kind: z.ZodEnum<{
            external: "external";
            native: "native";
        }>;
    }, z.core.$strip>;
    features: z.ZodArray<z.ZodString>;
    commands: z.ZodArray<z.ZodEnum<{
        nativeQuery: "nativeQuery";
        patterns: "patterns";
        query: "query";
        schema: "schema";
        volume: "volume";
    }>>;
    queryableFields: z.ZodArray<z.ZodString>;
    searchableFields: z.ZodArray<z.ZodString>;
    question: z.ZodOptional<z.ZodString>;
    selectedBundles: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        keys: z.ZodArray<z.ZodString>;
        rowCount: z.ZodNumber;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    selectedAttributeKeys: z.ZodArray<z.ZodString>;
    observedServiceNames: z.ZodArray<z.ZodString>;
    observedAttributeKeys: z.ZodArray<z.ZodString>;
    indexStatus: z.ZodEnum<{
        empty: "empty";
        ready: "ready";
        skipped: "skipped";
        unavailable: "unavailable";
    }>;
    schemaContext: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for logs.volume.
 */
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
/**
 * Contract definition for logs.patterns.
 */
export declare const logsPatterns: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    severity: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    patterns: z.ZodArray<z.ZodObject<{
        serviceName: z.ZodNullable<z.ZodString>;
        fingerprint: z.ZodString;
        pattern: z.ZodString;
        severity: z.ZodNullable<z.ZodString>;
        occurrences: z.ZodNumber;
        firstSeen: z.ZodNullable<z.ZodString>;
        lastSeen: z.ZodNullable<z.ZodString>;
        representativeId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    meta: z.ZodObject<{
        backendId: z.ZodEnum<{
            axiom: "axiom";
            "better-stack": "better-stack";
            clickhouse: "clickhouse";
            cloudwatch: "cloudwatch";
            datadog: "datadog";
            gcp: "gcp";
            mezmo: "mezmo";
            posthog: "posthog";
            sentry: "sentry";
        }>;
        count: z.ZodNumber;
        took: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for logs.nativeQuery.
 */
export declare const logsNativeQuery: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    result: z.ZodString;
    format: z.ZodLiteral<"text">;
    meta: z.ZodObject<{
        backendId: z.ZodEnum<{
            axiom: "axiom";
            "better-stack": "better-stack";
            clickhouse: "clickhouse";
            cloudwatch: "cloudwatch";
            datadog: "datadog";
            gcp: "gcp";
            mezmo: "mezmo";
            posthog: "posthog";
            sentry: "sentry";
        }>;
        took: z.ZodNumber;
        truncated: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract tree for log operations.
 */
export declare const logsContract: {
    readonly query: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        search: z.ZodOptional<z.ZodObject<{
            query: z.ZodString;
            fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
            mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                all: "all";
                any: "any";
                phrase: "phrase";
            }>>>;
        }, z.core.$strip>>;
        filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            op: z.ZodEnum<{
                between: "between";
                contains: "contains";
                eq: "eq";
                exists: "exists";
                gt: "gt";
                gte: "gte";
                in: "in";
                lt: "lt";
                lte: "lte";
                neq: "neq";
                starts_with: "starts_with";
            }>;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>, z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>]>;
        }, z.core.$strip>>>;
        select: z.ZodOptional<z.ZodArray<z.ZodString>>;
        sort: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            direction: z.ZodDefault<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strip>>;
        pagination: z.ZodOptional<z.ZodObject<{
            limit: z.ZodDefault<z.ZodNumber>;
            cursor: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
        nextCursor: z.ZodNullable<z.ZodString>;
        meta: z.ZodObject<{
            count: z.ZodNumber;
            took: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly schema: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        question: z.ZodOptional<z.ZodString>;
        topK: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        backend: z.ZodObject<{
            id: z.ZodEnum<{
                axiom: "axiom";
                "better-stack": "better-stack";
                clickhouse: "clickhouse";
                cloudwatch: "cloudwatch";
                datadog: "datadog";
                gcp: "gcp";
                mezmo: "mezmo";
                posthog: "posthog";
                sentry: "sentry";
            }>;
            name: z.ZodString;
            kind: z.ZodEnum<{
                external: "external";
                native: "native";
            }>;
        }, z.core.$strip>;
        features: z.ZodArray<z.ZodString>;
        commands: z.ZodArray<z.ZodEnum<{
            nativeQuery: "nativeQuery";
            patterns: "patterns";
            query: "query";
            schema: "schema";
            volume: "volume";
        }>>;
        queryableFields: z.ZodArray<z.ZodString>;
        searchableFields: z.ZodArray<z.ZodString>;
        question: z.ZodOptional<z.ZodString>;
        selectedBundles: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            service: z.ZodString;
            keys: z.ZodArray<z.ZodString>;
            rowCount: z.ZodNumber;
            score: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        selectedAttributeKeys: z.ZodArray<z.ZodString>;
        observedServiceNames: z.ZodArray<z.ZodString>;
        observedAttributeKeys: z.ZodArray<z.ZodString>;
        indexStatus: z.ZodEnum<{
            empty: "empty";
            ready: "ready";
            skipped: "skipped";
            unavailable: "unavailable";
        }>;
        schemaContext: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
    readonly patterns: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        query: z.ZodOptional<z.ZodString>;
        severity: z.ZodOptional<z.ZodString>;
        startDate: z.ZodOptional<z.ZodString>;
        endDate: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        patterns: z.ZodArray<z.ZodObject<{
            serviceName: z.ZodNullable<z.ZodString>;
            fingerprint: z.ZodString;
            pattern: z.ZodString;
            severity: z.ZodNullable<z.ZodString>;
            occurrences: z.ZodNumber;
            firstSeen: z.ZodNullable<z.ZodString>;
            lastSeen: z.ZodNullable<z.ZodString>;
            representativeId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        meta: z.ZodObject<{
            backendId: z.ZodEnum<{
                axiom: "axiom";
                "better-stack": "better-stack";
                clickhouse: "clickhouse";
                cloudwatch: "cloudwatch";
                datadog: "datadog";
                gcp: "gcp";
                mezmo: "mezmo";
                posthog: "posthog";
                sentry: "sentry";
            }>;
            count: z.ZodNumber;
            took: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly nativeQuery: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        query: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        result: z.ZodString;
        format: z.ZodLiteral<"text">;
        meta: z.ZodObject<{
            backendId: z.ZodEnum<{
                axiom: "axiom";
                "better-stack": "better-stack";
                clickhouse: "clickhouse";
                cloudwatch: "cloudwatch";
                datadog: "datadog";
                gcp: "gcp";
                mezmo: "mezmo";
                posthog: "posthog";
                sentry: "sentry";
            }>;
            took: z.ZodNumber;
            truncated: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
