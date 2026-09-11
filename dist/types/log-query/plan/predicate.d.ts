import { z } from "zod";
import type { FieldRef } from "./field-ref.js";
export declare const PREDICATE_COMPARATORS: readonly ["eq", "neq", "gt", "gte", "lt", "lte", "in", "contains", "starts_with", "exists"];
export type PredicateComparator = (typeof PREDICATE_COMPARATORS)[number];
export type PredicateTree<F extends FieldRef = FieldRef> = {
    op: "and" | "or";
    children: PredicateTree<F>[];
} | {
    op: "not";
    child: PredicateTree<F>;
} | {
    op: "compare";
    field: F;
    comparator: PredicateComparator;
    value?: unknown;
};
/** Most values one `in` operand may carry (v1 capped its `in` filters the same way). */
export declare const MAX_IN_VALUES = 100;
/** Longest operand string, matching v1's value bound. */
export declare const MAX_OPERAND_BYTES = 8192;
/**
 * Operands are bounded JSON scalars or a bounded list of them, nothing nested:
 * canonicalization copies and hashes every operand, so its shape and size are
 * product maxima like the tree's.
 */
export declare const operandSchema: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>>]>;
/**
 * Bounds on one predicate tree: widest `and`/`or` (v1 allowed 50 filters),
 * deepest nesting, and most nodes in total. Validation, canonicalization,
 * hashing and standing evaluation all walk the tree, so its size is a
 * product maximum, not a caller choice.
 */
export declare const MAX_PREDICATE_CHILDREN = 50;
export declare const MAX_PREDICATE_DEPTH = 8;
export declare const MAX_PREDICATE_NODES = 200;
/**
 * Most characters (UTF-16 code units, the measure `z.string().max()` applies to
 * each operand) the operand strings of one tree may hold together. The
 * per-operand and per-list bounds multiply out to well over 100 million code
 * units across a maximal tree; this caps their product. v1 filters share the
 * bound so every valid v1 spec adapts to a valid v2 spec.
 */
export declare const MAX_PREDICATE_OPERAND_CHARS = 65536;
export declare const createPredicateTreeSchema: <F extends FieldRef>(fieldRef: z.ZodType<F>) => z.ZodType<PredicateTree<F>>;
