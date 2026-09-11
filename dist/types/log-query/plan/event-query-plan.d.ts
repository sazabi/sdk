import { z } from "zod";
import type { FieldRef } from "./field-ref.js";
import { type Measure } from "./measure.js";
import { type PredicateTree } from "./predicate.js";
export declare const PLAN_BUCKETS: readonly ["1m", "5m", "1h"];
export declare const PLAN_OUTPUTS: readonly ["series", "table", "evidence"];
export declare const SERIES_OVERFLOWS: readonly ["other", "drop"];
export type EventQueryPlan<F extends FieldRef = FieldRef> = {
    source: {
        kind: "events";
    };
    predicate: PredicateTree<F>;
    dimensions: F[];
    measure: Measure<F>;
    bucket?: (typeof PLAN_BUCKETS)[number];
    output: (typeof PLAN_OUTPUTS)[number];
    series?: {
        limit: number;
        overflow: (typeof SERIES_OVERFLOWS)[number];
    };
};
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
export declare const createEventQueryPlanSchema: <F extends FieldRef>(fieldRef: z.ZodType<F>) => z.ZodObject<{
    source: z.ZodObject<{
        kind: z.ZodLiteral<"events">;
    }, z.core.$strict>;
    predicate: z.ZodType<PredicateTree<F>, unknown, z.core.$ZodTypeInternals<PredicateTree<F>, unknown>>;
    dimensions: z.ZodArray<z.ZodType<F, unknown, z.core.$ZodTypeInternals<F, unknown>>>;
    measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
        op: z.ZodLiteral<"count">;
    }, z.core.$strict>, z.ZodObject<{
        op: z.ZodLiteral<"event_rate">;
    }, z.core.$strict>, z.ZodObject<{
        op: z.ZodLiteral<"distinct">;
        field: z.ZodType<F, unknown, z.core.$ZodTypeInternals<F, unknown>>;
    }, z.core.$strict>, z.ZodObject<{
        op: z.ZodLiteral<"numeric">;
        field: z.ZodType<F, unknown, z.core.$ZodTypeInternals<F, unknown>>;
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
        fields: z.ZodOptional<z.ZodArray<z.ZodType<F, unknown, z.core.$ZodTypeInternals<F, unknown>>>>;
    }, z.core.$strict>], "op">;
    bucket: z.ZodOptional<z.ZodEnum<{
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
}, z.core.$strict>;
