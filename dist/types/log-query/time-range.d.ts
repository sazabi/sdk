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
 * the edges. Rollups hold whole minutes for two weeks and whole hours
 * beyond, and answer only windows on their edges (the router never snaps
 * one): both edges floor to that grain, so `to` never reads past `now` into
 * the future, and the window is exactly `lookbackSeconds` wide whenever
 * that is a whole number of grain units, which every caller asks in
 * practice (the dashboard's presets and the CLI's `--last` are minutes or
 * more). A lookback that is not a whole number of grain units still reads
 * at least that far back, never less: flooring `from` to the grain the same
 * way `to` is floored can only push `from` earlier, so the window comes out
 * wider than asked, by less than one grain unit (a 90s lookback at the
 * minute grain resolves to 120s; a 7d lookback plus 1s resolves to 7d plus
 * 1h, past the grain's own switch to hourly). Matches `@sazabi/log-ask`'s
 * `resolveWindow` (`logs.ask` / `logs.executeQuery`'s window) bit for bit,
 * aligned lookback or not: an identical relative spec reads the identical
 * instants through either caller.
 */
export declare const alignedRelativeWindow: ({ lookbackSeconds, now, }: {
    lookbackSeconds: number;
    /** Epoch milliseconds the lookback ends at. */
    now: number;
}) => ResolvedTimeRange;
