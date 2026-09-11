/**
 * Public API contracts for project sandbox custom environment variables.
 *
 * These operations allow managing custom environment variables that are
 * injected into project sandboxes, automations, and agent runs.
 * Values are encrypted at rest with AES-256-GCM and never returned by the API.
 */
import { z } from "zod";
export declare const SandboxEnvironmentVariableKeySchema: z.ZodString;
export declare const SandboxEnvironmentVariableValueSchema: z.ZodString;
export declare const SandboxEnvironmentVariableSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type SandboxEnvironmentVariable = z.infer<typeof SandboxEnvironmentVariableSchema>;
export declare const SandboxEnvironmentVariableItemSchema: z.ZodObject<{
    key: z.ZodString;
}, z.core.$strip>;
export type SandboxEnvironmentVariableItem = z.infer<typeof SandboxEnvironmentVariableItemSchema>;
export declare const ListSandboxEnvironmentVariablesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListSandboxEnvironmentVariablesOutputSchema: z.ZodObject<{
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListSandboxEnvironmentVariablesInput = z.infer<typeof ListSandboxEnvironmentVariablesInputSchema>;
export type ListSandboxEnvironmentVariablesOutput = z.infer<typeof ListSandboxEnvironmentVariablesOutputSchema>;
export declare const listSandboxEnvironmentVariables: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const GetSandboxEnvironmentVariableInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    key: z.ZodString;
}, z.core.$strip>;
export declare const GetSandboxEnvironmentVariableOutputSchema: z.ZodObject<{
    environmentVariable: z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetSandboxEnvironmentVariableInput = z.infer<typeof GetSandboxEnvironmentVariableInputSchema>;
export type GetSandboxEnvironmentVariableOutput = z.infer<typeof GetSandboxEnvironmentVariableOutputSchema>;
export declare const getSandboxEnvironmentVariable: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    key: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    environmentVariable: z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const UpsertSandboxEnvironmentVariablesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const UpsertSandboxEnvironmentVariablesOutputSchema: z.ZodObject<{
    projectId: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type UpsertSandboxEnvironmentVariablesInput = z.infer<typeof UpsertSandboxEnvironmentVariablesInputSchema>;
export type UpsertSandboxEnvironmentVariablesOutput = z.infer<typeof UpsertSandboxEnvironmentVariablesOutputSchema>;
export declare const upsertSandboxEnvironmentVariables: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const DeleteSandboxEnvironmentVariableInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    key: z.ZodString;
}, z.core.$strip>;
export declare const DeleteSandboxEnvironmentVariableOutputSchema: z.ZodObject<{
    projectId: z.ZodString;
    key: z.ZodString;
    deleted: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteSandboxEnvironmentVariableInput = z.infer<typeof DeleteSandboxEnvironmentVariableInputSchema>;
export type DeleteSandboxEnvironmentVariableOutput = z.infer<typeof DeleteSandboxEnvironmentVariableOutputSchema>;
export declare const deleteSandboxEnvironmentVariable: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    key: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    key: z.ZodString;
    deleted: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const sandboxEnvironmentVariablesContract: {
    list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        environmentVariables: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        key: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        environmentVariable: z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    upsert: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        environmentVariables: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        projectId: z.ZodString;
        environmentVariables: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        key: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        projectId: z.ZodString;
        key: z.ZodString;
        deleted: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
