import { z } from "zod";
/**
 * The longest relative window an invocation may name: the raw `logs`
 * retention (`log_volume_per_minute` keeps the same 90 days). Absolute
 * windows are the caller's own; a window older than what storage holds
 * answers with partial coverage, never a refusal.
 */
export declare const MAX_LOG_QUERY_LOOKBACK_SECONDS: number;
/**
 * The window a query invocation reads. A v2 spec carries no time range: the
 * window is an invocation parameter, resolved by the caller against its
 * clock (`resolveTimeRange`) before the spec is routed.
 */
export declare const logTimeRangeSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"absolute">;
    from: z.ZodISODateTime;
    to: z.ZodISODateTime;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"relative">;
    lookbackSeconds: z.ZodNumber;
}, z.core.$strict>], "kind">;
export type LogTimeRange = z.infer<typeof logTimeRangeSchema>;
/** A window resolved to absolute instants, as every compiled query reads it. */
export declare const resolvedTimeRangeSchema: z.ZodObject<{
    from: z.ZodISODateTime;
    to: z.ZodISODateTime;
}, z.core.$strict>;
export type ResolvedTimeRange = z.infer<typeof resolvedTimeRangeSchema>;
/**
 * A relative lookback resolved against `now` for a caller that does not name
 * the edges, widened outward so the log rollups can answer it. Rollups hold
 * whole minutes for two weeks and whole hours beyond, and answer only
 * windows on their edges (the router never snaps one): a lookback of a day
 * or more aligns to the hour, so every rollup can read hour states however
 * far back it reaches; a shorter one aligns to the minute. The widening is at
 * most one grain at each edge.
 */
export declare const alignedRelativeWindow: ({ lookbackSeconds, now, }: {
    lookbackSeconds: number;
    /** Epoch milliseconds the lookback ends at. */
    now: number;
}) => ResolvedTimeRange;
