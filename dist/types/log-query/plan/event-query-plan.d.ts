import { z } from "zod";
export declare const PLAN_OUTPUTS: readonly ["series", "table", "evidence"];
export declare const SERIES_OVERFLOWS: readonly ["other", "drop"];
/**
 * Most series one plan may ask for. `series.limit` is a top-N over the
 * grouped dimensions and, for a standing query, the amount of state kept per
 * evaluation, so it is bounded like the v1 timeseries result (10,000 rows).
 */
export declare const MAX_SERIES_LIMIT = 10000;
export declare const seriesSchema: z.ZodObject<{
    limit: z.ZodNumber;
    overflow: z.ZodEnum<{
        drop: "drop";
        other: "other";
    }>;
}, z.core.$strict>;
