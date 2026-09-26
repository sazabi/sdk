import { z } from "zod";
/** Representations a log query can execute against, in the router's fixed order. */
export declare const LOG_QUERY_REPRESENTATIONS: readonly ["request_metrics", "event_volume", "pattern_volume", "log_volume", "standing", "pattern_index", "exact_scan", "sampled_scan"];
export type LogQueryRepresentation = (typeof LOG_QUERY_REPRESENTATIONS)[number];
export declare const logQueryRepresentationSchema: z.ZodEnum<{
    event_volume: "event_volume";
    exact_scan: "exact_scan";
    log_volume: "log_volume";
    pattern_index: "pattern_index";
    pattern_volume: "pattern_volume";
    request_metrics: "request_metrics";
    sampled_scan: "sampled_scan";
    standing: "standing";
}>;
export declare const LOG_QUERY_EXACTNESS: readonly ["exact", "approximate"];
export type LogQueryExactness = (typeof LOG_QUERY_EXACTNESS)[number];
/** Sampling bounds are stated at this confidence. */
export declare const SAMPLING_CONFIDENCE = 0.95;
export declare const QUANTILE_SKETCH_ALGORITHMS: readonly ["tdigest", "reservoir_sample"];
/** Changes that would admit a rejected query, cheapest for the caller first. */
export declare const LOG_QUERY_ROUTE_SUGGESTIONS: readonly ["coarsen_bucket", "narrow_window", "allow_approximation", "promote_attribute"];
export type LogQueryRouteSuggestion = (typeof LOG_QUERY_ROUTE_SUGGESTIONS)[number];
export declare const logQueryRouteSuggestionSchema: z.ZodEnum<{
    allow_approximation: "allow_approximation";
    coarsen_bucket: "coarsen_bucket";
    narrow_window: "narrow_window";
    promote_attribute: "promote_attribute";
}>;
export declare const logQueryResultErrorSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"sampling">;
    /** Half-width at `confidence` for a cell of `cellRows` rows; sparser cells are bounded per cell at execution. */
    relativeBound: z.ZodNumber;
    confidence: z.ZodLiteral<0.95>;
    sampleFraction: z.ZodNumber;
    /** Population the bound was sized for: the sparsest cell the volume rollup could see. */
    cellRows: z.ZodNumber;
    minCellRows: z.ZodNumber;
    /**
     * Design effect of sampling by identity: rows sharing a `canonical_id`,
     * and so a `sample_key`, are drawn or omitted together, so the bound is
     * the independent-rows half-width widened by the square root of the
     * row-weighted mean multiplicity of the identities, `sum(m²) / sum(m)`;
     * 1 when every identity is one row.
     */
    designEffect: z.ZodNumber;
    /**
     * Rows sharing an identity are drawn or omitted together, so a group of
     * one identity is absent from a sampled result with probability
     * `1 - sampleFraction` however many rows it has, and a cell of
     * `minCellRows` matching rows, holding at least
     * `boundedCellIdentities = minCellRows / maxMultiplicity` identities,
     * with probability at most `(1 - sampleFraction)^boundedCellIdentities`.
     * An absent group has no row for `minCellRows` to flag: the result never
     * asserts a group's absence. With the multiplicity unmeasured
     * (`maxMultiplicity` null) the cell may be one identity's and
     * `boundedCell` is the one-identity figure; `basis` says which.
     */
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
    /** The sketch's size parameter: t-digest's compression (epsilon = 1 / compression) or the reservoir's element count. */
    compression: z.ZodNumber;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"distinct_sketch">;
    algorithm: z.ZodString;
}, z.core.$strict>], "kind">;
export type LogQueryResultError = z.infer<typeof logQueryResultErrorSchema>;
/**
 * Why a result covers only part of its window: stored logs (or a rollup) do
 * not reach all of it, request fields start at their promotion, or the
 * window held too many lines to read whole and only its most recent part was
 * read.
 */
export declare const LOG_QUERY_COVERAGE_REASONS: readonly ["stored_range", "request_columns", "read_limit"];
export type LogQueryCoverageReason = (typeof LOG_QUERY_COVERAGE_REASONS)[number];
export declare const logQueryEstimateSchema: z.ZodObject<{
    rows: z.ZodNumber;
    bytes: z.ZodNumber;
}, z.core.$strict>;
/**
 * Every result says which representation produced it and how exact it is.
 * Exactness is per measure, not per table: a count from the request metrics
 * rollup is exact while a p95 from the same row is a t-digest estimate.
 */
export declare const logQueryResultMetaSchema: z.ZodObject<{
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
        /** Half-width at `confidence` for a cell of `cellRows` rows; sparser cells are bounded per cell at execution. */
        relativeBound: z.ZodNumber;
        confidence: z.ZodLiteral<0.95>;
        sampleFraction: z.ZodNumber;
        /** Population the bound was sized for: the sparsest cell the volume rollup could see. */
        cellRows: z.ZodNumber;
        minCellRows: z.ZodNumber;
        /**
         * Design effect of sampling by identity: rows sharing a `canonical_id`,
         * and so a `sample_key`, are drawn or omitted together, so the bound is
         * the independent-rows half-width widened by the square root of the
         * row-weighted mean multiplicity of the identities, `sum(m²) / sum(m)`;
         * 1 when every identity is one row.
         */
        designEffect: z.ZodNumber;
        /**
         * Rows sharing an identity are drawn or omitted together, so a group of
         * one identity is absent from a sampled result with probability
         * `1 - sampleFraction` however many rows it has, and a cell of
         * `minCellRows` matching rows, holding at least
         * `boundedCellIdentities = minCellRows / maxMultiplicity` identities,
         * with probability at most `(1 - sampleFraction)^boundedCellIdentities`.
         * An absent group has no row for `minCellRows` to flag: the result never
         * asserts a group's absence. With the multiplicity unmeasured
         * (`maxMultiplicity` null) the cell may be one identity's and
         * `boundedCell` is the one-identity figure; `basis` says which.
         */
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
        /** The sketch's size parameter: t-digest's compression (epsilon = 1 / compression) or the reservoir's element count. */
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
        /** Set with `partial`: why the result covers less than its window. */
        reason: z.ZodOptional<z.ZodEnum<{
            read_limit: "read_limit";
            request_columns: "request_columns";
            stored_range: "stored_range";
        }>>;
    }, z.core.$strict>;
    freshness: z.ZodObject<{
        watermark: z.ZodISODateTime;
        openBucketFrom: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strict>;
    catalogRevision: z.ZodOptional<z.ZodString>;
    /**
     * Set when the platform answered a spec that pinned its services from the
     * rows it had already sorted for those services, rather than every row:
     * `unmatchedRows` of theirs in the window lie outside the answer; null
     * when they could not be counted.
     */
    population: z.ZodOptional<z.ZodObject<{
        kind: z.ZodLiteral<"services">;
        services: z.ZodArray<z.ZodString>;
        unmatchedRows: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type LogQueryResultMeta = z.infer<typeof logQueryResultMetaSchema>;
export type LogQueryResultPopulation = NonNullable<LogQueryResultMeta["population"]>;
/** A representation the router passed over, and why; `suggestion` names the change that would admit it. */
export declare const logQueryRouteSkipSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type LogQueryRouteSkip = z.infer<typeof logQueryRouteSkipSchema>;
