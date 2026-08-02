import { type AnySchema } from "@orpc/contract";
import type { OperationDefinition } from "./types.js";
export declare const defineOperation: <InputSchema extends AnySchema, OutputSchema extends AnySchema, TBackend extends string>(definition: Omit<OperationDefinition<InputSchema, OutputSchema, TBackend>, "contract">) => OperationDefinition<InputSchema, OutputSchema, TBackend>;
