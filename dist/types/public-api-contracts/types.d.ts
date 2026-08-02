import type { AnySchema } from "@orpc/contract";
import type { OperationDefinition as BaseOperationDefinition, OperationAsyncMode, OperationExample, OperationPagination, OperationRouteDefinition } from "../orpc-contracts/index.js";
export type OperationBackend = "api" | "partner";
export type { OperationAsyncMode, OperationExample, OperationPagination, OperationRouteDefinition, };
export type OperationContractMetadata = import("../orpc-contracts/index.js").OperationContractMetadata<OperationBackend>;
export type OperationDefinition<InputSchema extends AnySchema, OutputSchema extends AnySchema> = BaseOperationDefinition<InputSchema, OutputSchema, OperationBackend>;
