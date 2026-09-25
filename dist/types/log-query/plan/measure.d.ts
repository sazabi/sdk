import { z } from "zod";
import type { FieldRef } from "./field-ref.js";
export declare const MEASURE_NUMERIC_AGGREGATES: readonly ["sum", "avg", "min", "max", "p50", "p95", "p99"];
export type MeasureNumericAggregate = (typeof MEASURE_NUMERIC_AGGREGATES)[number];
export type Measure<F extends FieldRef = FieldRef> = {
    op: "count";
} | {
    op: "event_rate";
} | {
    op: "distinct";
    field: F;
} | {
    op: "numeric";
    field: F;
    parseAs: "float64";
    aggregate: MeasureNumericAggregate;
    invalidValues: "drop" | "error";
} | {
    op: "recent_rows";
    limit: number;
    fields?: F[];
};
/**
 * Most rows a `recent_rows` measure may return: the 5,000-result bound a
 * natural-language answer carries (fast log search design, "an answer by
 * default, results on request"), under the executor's 10,000-row
 * `max_result_rows` guard.
 */
export declare const MAX_RECENT_ROWS_LIMIT = 5000;
/** Widest `recent_rows.fields` projection: bounds the copy, hash and result width per row. */
export declare const MAX_RECENT_ROW_FIELDS = 32;
export declare const createMeasureSchema: <F extends FieldRef>(fieldRef: z.ZodType<F>) => z.ZodDiscriminatedUnion<[z.ZodObject<{
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
