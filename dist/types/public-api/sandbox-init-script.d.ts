/**
 * Public API contracts for project sandbox custom init script.
 *
 * These operations allow managing the custom bash initialization script that is
 * executed when a project sandbox boots (e.g. to install custom CLI packages or tooling).
 */
import { z } from "zod";
export declare const MAX_SANDBOX_INIT_SCRIPT_BYTES: number;
export declare const SandboxInitScriptContentSchema: z.ZodString;
export declare const SandboxInitScriptDetailSchema: z.ZodObject<{
    projectId: z.ZodString;
    content: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type SandboxInitScriptDetail = z.infer<typeof SandboxInitScriptDetailSchema>;
export declare const GetSandboxInitScriptInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetSandboxInitScriptOutputSchema: z.ZodObject<{
    initScript: z.ZodObject<{
        projectId: z.ZodString;
        content: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetSandboxInitScriptInput = z.infer<typeof GetSandboxInitScriptInputSchema>;
export type GetSandboxInitScriptOutput = z.infer<typeof GetSandboxInitScriptOutputSchema>;
export declare const getSandboxInitScript: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    initScript: z.ZodObject<{
        projectId: z.ZodString;
        content: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const UpsertSandboxInitScriptInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
}, z.core.$strip>;
export declare const UpsertSandboxInitScriptOutputSchema: z.ZodObject<{
    initScript: z.ZodObject<{
        projectId: z.ZodString;
        content: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpsertSandboxInitScriptInput = z.infer<typeof UpsertSandboxInitScriptInputSchema>;
export type UpsertSandboxInitScriptOutput = z.infer<typeof UpsertSandboxInitScriptOutputSchema>;
export declare const upsertSandboxInitScript: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    initScript: z.ZodObject<{
        projectId: z.ZodString;
        content: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const DeleteSandboxInitScriptInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const DeleteSandboxInitScriptOutputSchema: z.ZodObject<{
    projectId: z.ZodString;
    deleted: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteSandboxInitScriptInput = z.infer<typeof DeleteSandboxInitScriptInputSchema>;
export type DeleteSandboxInitScriptOutput = z.infer<typeof DeleteSandboxInitScriptOutputSchema>;
export declare const deleteSandboxInitScript: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    deleted: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const sandboxInitScriptContract: {
    get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        initScript: z.ZodObject<{
            projectId: z.ZodString;
            content: z.ZodString;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    upsert: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        initScript: z.ZodObject<{
            projectId: z.ZodString;
            content: z.ZodString;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        projectId: z.ZodString;
        deleted: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
