import { z } from "zod";
export declare const LOG_QUERY_EXACTNESS: readonly ["exact", "approximate"];
export type LogQueryExactness = (typeof LOG_QUERY_EXACTNESS)[number];
/** Sampling bounds are stated at this confidence. */
export declare const SAMPLING_CONFIDENCE = 0.95;
/**
 * Why a result covers only part of its window: stored logs do not reach all
 * of it (`stored_range`), request fields are recorded only from a later
 * point (`request_columns`), or the window held too many lines to read whole
 * and only its most recent part was read (`read_limit`).
 */
export declare const LOG_QUERY_COVERAGE_REASONS: readonly ["stored_range", "request_columns", "read_limit"];
export type LogQueryCoverageReason = (typeof LOG_QUERY_COVERAGE_REASONS)[number];
/**
 * How an approximate result was estimated: from a sample of the matching
 * lines (with its relative error at `confidence`), or as a percentile or a
 * distinct count estimated from a compact summary of the values.
 */
export declare const logQueryApproximationSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    method: z.ZodLiteral<"sampled">;
    /** Half-width of the confidence interval, relative to the value. */
    relativeError: z.ZodNumber;
    confidence: z.ZodLiteral<0.95>;
    /** The share of matching lines read. */
    sampleFraction: z.ZodNumber;
}, z.core.$strict>, z.ZodObject<{
    method: z.ZodLiteral<"estimated_percentile">;
}, z.core.$strict>, z.ZodObject<{
    method: z.ZodLiteral<"estimated_distinct">;
}, z.core.$strict>], "method">;
export type LogQueryApproximation = z.infer<typeof logQueryApproximationSchema>;
/**
 * What a caller sees about how a query ran: how exact its numbers are, the
 * part of the window they cover, how fresh they are, and, for a query that
 * named its services, how many of their lines lie outside the answer. How
 * the platform read the logs stays on the server.
 */
export declare const logQueryExecutionMetaSchema: z.ZodObject<{
    exactness: z.ZodEnum<{
        approximate: "approximate";
        exact: "exact";
    }>;
    approximation: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        method: z.ZodLiteral<"sampled">;
        /** Half-width of the confidence interval, relative to the value. */
        relativeError: z.ZodNumber;
        confidence: z.ZodLiteral<0.95>;
        /** The share of matching lines read. */
        sampleFraction: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        method: z.ZodLiteral<"estimated_percentile">;
    }, z.core.$strict>, z.ZodObject<{
        method: z.ZodLiteral<"estimated_distinct">;
    }, z.core.$strict>], "method">>;
    coverage: z.ZodObject<{
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
        status: z.ZodEnum<{
            complete: "complete";
            partial: "partial";
        }>;
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
    population: z.ZodOptional<z.ZodObject<{
        kind: z.ZodLiteral<"services">;
        services: z.ZodArray<z.ZodString>;
        unmatchedRows: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type LogQueryExecutionMeta = z.infer<typeof logQueryExecutionMetaSchema>;
export type LogQueryResultPopulation = NonNullable<LogQueryExecutionMeta["population"]>;
/**
 * Stable codes for a query that cannot run as written, each with the change
 * that admits it:
 *
 * - `invalid_query`: the spec is not a valid query; the issues name the JSON
 *   path of each problem.
 * - `bucket_too_fine`: the bucket is finer than the time range can be read
 *   at, or yields more points than one result holds; use a coarser bucket.
 * - `time_range_too_wide`: the time range reaches further back than this
 *   query can be answered, or holds more than one result can; use a shorter
 *   or more recent time range, or narrow the query.
 * - `approximation_required`: only an estimate is available; allow one with
 *   `exactness: "approximate_ok"` and `approximation.maxRelativeError`.
 * - `unsupported_query`: this combination of fields and measure cannot be
 *   answered over this time range; simplify the query.
 */
export declare const LOG_QUERY_ERROR_CODES: readonly ["invalid_query", "bucket_too_fine", "time_range_too_wide", "approximation_required", "unsupported_query"];
export type LogQueryErrorCode = (typeof LOG_QUERY_ERROR_CODES)[number];
/** The codes a valid query that still cannot run is rejected with. */
export type LogQueryRejectionCode = Exclude<LogQueryErrorCode, "invalid_query">;
/** Caller-facing text per code: what is wrong and what to change. */
export declare const LOG_QUERY_ERROR_MESSAGES: Record<LogQueryErrorCode, string>;
/** Why a valid query was not run: a stable code and its caller-facing message. */
export declare const logQueryRejectionSchema: z.ZodObject<{
    code: z.ZodEnum<{
        approximation_required: "approximation_required";
        bucket_too_fine: "bucket_too_fine";
        time_range_too_wide: "time_range_too_wide";
        unsupported_query: "unsupported_query";
    }>;
    message: z.ZodString;
}, z.core.$strict>;
export type LogQueryRejection = z.infer<typeof logQueryRejectionSchema>;
/** One problem with an invalid spec: its JSON path inside the spec and what is wrong. */
export declare const logQuerySpecIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    message: z.ZodString;
}, z.core.$strict>;
export type LogQuerySpecIssue = z.infer<typeof logQuerySpecIssueSchema>;
/** The rejection for `code`, with its caller-facing message. */
export declare const logQueryRejection: (code: LogQueryRejectionCode) => LogQueryRejection;
