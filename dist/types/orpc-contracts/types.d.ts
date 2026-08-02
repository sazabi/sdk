import type { AnySchema, ContractProcedure, InferSchemaInput, InferSchemaOutput, Route } from "@orpc/contract";
export type OperationPagination = "none" | "cursor" | "page";
export type OperationAsyncMode = "sync" | "deferred" | "returns-redirect-url" | "websocket";
export interface OperationRouteDefinition {
    method: NonNullable<Route["method"]>;
    path: NonNullable<Route["path"]>;
    tags: readonly string[];
    successStatus?: Route["successStatus"];
    successDescription?: Route["successDescription"];
    deprecated?: Route["deprecated"];
    inputStructure?: Route["inputStructure"];
}
export interface OperationExample<InputValue, OutputValue> {
    name: string;
    input: InputValue;
    output: OutputValue;
}
export interface OperationContractMetadata<TBackend extends string = string> {
    operationId: string;
    backend: TBackend;
    pagination: OperationPagination;
    async: OperationAsyncMode;
    examples: readonly OperationExample<unknown, unknown>[];
}
export interface OperationDefinition<InputSchema extends AnySchema, OutputSchema extends AnySchema, TBackend extends string = string> {
    operationId: string;
    description: string;
    /**
     * Short display title for the operation (OpenAPI `summary`). Doc generators
     * fall back to munging the operationId when absent — set this when that
     * fallback reads wrong (e.g. "Search Natural", "List For Thread").
     */
    summary?: string;
    backend: TBackend;
    route: OperationRouteDefinition;
    input: InputSchema;
    output: OutputSchema;
    pagination: OperationPagination;
    async: OperationAsyncMode;
    examples?: readonly OperationExample<InferSchemaInput<InputSchema>, InferSchemaOutput<OutputSchema>>[];
    contract: ContractProcedure<InputSchema, OutputSchema, Record<never, never>, OperationContractMetadata<TBackend>>;
}
