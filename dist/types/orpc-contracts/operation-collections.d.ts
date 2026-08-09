import type { AnySchema } from "@orpc/contract";
import type { OperationDefinition } from "./types.js";
/**
 * One contract-first operation definition with erased schema parameters.
 */
export type AnyOperationDefinition = OperationDefinition<AnySchema, AnySchema>;
/**
 * Checks whether one unknown value is a contract-first operation definition.
 */
export declare const isOperationDefinition: (value: unknown) => value is AnyOperationDefinition;
/**
 * Lists all operation definitions reachable from one nested tree.
 */
export declare const listOperations: (root: unknown) => AnyOperationDefinition[];
/**
 * Lists all operation definitions exported from one module object.
 */
export declare const listExportedOperations: (moduleExports: Record<string, unknown>) => AnyOperationDefinition[];
/**
 * Builds a stable route key for one operation.
 */
export declare const getOperationRouteKey: (operation: AnyOperationDefinition) => string;
