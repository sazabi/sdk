import { z } from "zod";
export declare const ProjectScriptNameSchema: z.ZodString;
export type ProjectScriptName = z.infer<typeof ProjectScriptNameSchema>;
export declare const ProjectScriptContentSchema: z.ZodString;
export type ProjectScriptContent = z.infer<typeof ProjectScriptContentSchema>;
export declare const ProjectScriptSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    contentHash: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type ProjectScript = z.infer<typeof ProjectScriptSchema>;
export declare const ProjectScriptDetailSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    contentHash: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type ProjectScriptDetail = z.infer<typeof ProjectScriptDetailSchema>;
export declare const ListProjectScriptsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListProjectScriptsInput = z.infer<typeof ListProjectScriptsInputSchema>;
export declare const ListProjectScriptsOutputSchema: z.ZodObject<{
    scripts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListProjectScriptsOutput = z.infer<typeof ListProjectScriptsOutputSchema>;
export declare const GetProjectScriptInputSchema: z.ZodObject<{
    name: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetProjectScriptInput = z.infer<typeof GetProjectScriptInputSchema>;
export declare const GetProjectScriptOutputSchema: z.ZodObject<{
    script: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetProjectScriptOutput = z.infer<typeof GetProjectScriptOutputSchema>;
export declare const CreateProjectScriptInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    content: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type CreateProjectScriptInput = z.infer<typeof CreateProjectScriptInputSchema>;
export declare const CreateProjectScriptOutputSchema: z.ZodObject<{
    script: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateProjectScriptOutput = z.infer<typeof CreateProjectScriptOutputSchema>;
export declare const UpdateProjectScriptInputSchema: z.ZodObject<{
    name: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type UpdateProjectScriptInput = z.infer<typeof UpdateProjectScriptInputSchema>;
export declare const UpdateProjectScriptOutputSchema: z.ZodObject<{
    script: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateProjectScriptOutput = z.infer<typeof UpdateProjectScriptOutputSchema>;
export declare const DeleteProjectScriptInputSchema: z.ZodObject<{
    name: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeleteProjectScriptInput = z.infer<typeof DeleteProjectScriptInputSchema>;
export declare const DeleteProjectScriptOutputSchema: z.ZodVoid;
export type DeleteProjectScriptOutput = z.infer<typeof DeleteProjectScriptOutputSchema>;
export declare const listProjectScripts: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    scripts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const getProjectScript: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    name: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    script: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const createProjectScript: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    content: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    script: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const updateProjectScript: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    name: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    script: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const deleteProjectScript: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    name: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodVoid, "api">;
export declare const scriptsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        search: z.ZodOptional<z.ZodString>;
        cursor: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        scripts: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            contentHash: z.ZodString;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        name: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        script: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            contentHash: z.ZodString;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            content: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        content: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        script: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            contentHash: z.ZodString;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            content: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        name: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        script: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            contentHash: z.ZodString;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            content: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        name: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
