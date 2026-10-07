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
/**
 * The access rule of a domain owner's operation, as data
 * (docs/design/infrastructure/domain-owning-services): the owner resolves the
 * record named by `id` and runs `decideAccess` with `action` before the
 * handler. Contracts may import only contracts, so `action` is `"read"` or a
 * `@sazabi/auth` permission name as a string; the owner rejects an unknown
 * one when it binds the operation.
 */
export interface OperationAccess {
    /** The kind of record the operation acts on, such as `"project"`. */
    record: string;
    /** The input field that holds the record's id. */
    id: string;
    action: string;
}
export interface OperationContractMetadata<TBackend extends string = string> {
    operationId: string;
    backend: TBackend;
    pagination: OperationPagination;
    async: OperationAsyncMode;
    examples: readonly OperationExample<unknown, unknown>[];
    access?: OperationAccess;
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
    /** Required on a domain owner's operations; see {@link OperationAccess}. */
    access?: OperationAccess;
    examples?: readonly OperationExample<InferSchemaInput<InputSchema>, InferSchemaOutput<OutputSchema>>[];
    contract: ContractProcedure<InputSchema, OutputSchema, Record<never, never>, OperationContractMetadata<TBackend>>;
}
