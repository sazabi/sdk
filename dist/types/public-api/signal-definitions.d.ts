import { z } from "zod";
export declare const SignalDefinitionIdSchema: z.ZodString;
export declare const SignalDefinitionNameSchema: z.ZodString;
export declare const SignalDefinitionCelExpressionSchema: z.ZodString;
export declare const SignalDefinitionSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    expression: z.ZodString;
    enabled: z.ZodBoolean;
    compiledVersion: z.ZodNumber;
    linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type SignalDefinition = z.infer<typeof SignalDefinitionSchema>;
export declare const ListSignalDefinitionsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListSignalDefinitionsInput = z.infer<typeof ListSignalDefinitionsInputSchema>;
export declare const ListSignalDefinitionsOutputSchema: z.ZodObject<{
    signalDefinitions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListSignalDefinitionsOutput = z.infer<typeof ListSignalDefinitionsOutputSchema>;
export declare const GetSignalDefinitionInputSchema: z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetSignalDefinitionInput = z.infer<typeof GetSignalDefinitionInputSchema>;
export declare const GetSignalDefinitionOutputSchema: z.ZodObject<{
    signalDefinition: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetSignalDefinitionOutput = z.infer<typeof GetSignalDefinitionOutputSchema>;
export declare const CreateSignalDefinitionInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    expression: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateSignalDefinitionInput = z.infer<typeof CreateSignalDefinitionInputSchema>;
export declare const CreateSignalDefinitionOutputSchema: z.ZodObject<{
    signalDefinition: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateSignalDefinitionOutput = z.infer<typeof CreateSignalDefinitionOutputSchema>;
export declare const UpdateSignalDefinitionInputSchema: z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    expression: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateSignalDefinitionInput = z.infer<typeof UpdateSignalDefinitionInputSchema>;
export declare const UpdateSignalDefinitionOutputSchema: z.ZodObject<{
    signalDefinition: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateSignalDefinitionOutput = z.infer<typeof UpdateSignalDefinitionOutputSchema>;
export declare const DisableSignalDefinitionInputSchema: z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DisableSignalDefinitionInput = z.infer<typeof DisableSignalDefinitionInputSchema>;
export declare const DisableSignalDefinitionOutputSchema: z.ZodObject<{
    signalDefinition: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type DisableSignalDefinitionOutput = z.infer<typeof DisableSignalDefinitionOutputSchema>;
export declare const listSignalDefinitions: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    signalDefinitions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const getSignalDefinition: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    signalDefinition: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const createSignalDefinition: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    expression: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    signalDefinition: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const updateSignalDefinition: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    expression: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    signalDefinition: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const disableSignalDefinition: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    signalDefinition: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodBoolean;
        compiledVersion: z.ZodNumber;
        linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const DeleteSignalDefinitionInputSchema: z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeleteSignalDefinitionInput = z.infer<typeof DeleteSignalDefinitionInputSchema>;
export declare const DeleteSignalDefinitionOutputSchema: z.ZodVoid;
export type DeleteSignalDefinitionOutput = z.infer<typeof DeleteSignalDefinitionOutputSchema>;
export declare const deleteSignalDefinition: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    signalDefinitionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodVoid, "api">;
export declare const signalDefinitionsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        signalDefinitions: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            expression: z.ZodString;
            enabled: z.ZodBoolean;
            compiledVersion: z.ZodNumber;
            linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        signalDefinitionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        signalDefinition: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            expression: z.ZodString;
            enabled: z.ZodBoolean;
            compiledVersion: z.ZodNumber;
            linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        expression: z.ZodString;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        signalDefinition: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            expression: z.ZodString;
            enabled: z.ZodBoolean;
            compiledVersion: z.ZodNumber;
            linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        signalDefinitionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        expression: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        signalDefinition: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            expression: z.ZodString;
            enabled: z.ZodBoolean;
            compiledVersion: z.ZodNumber;
            linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly disable: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        signalDefinitionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        signalDefinition: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            expression: z.ZodString;
            enabled: z.ZodBoolean;
            compiledVersion: z.ZodNumber;
            linkedAutomationIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        signalDefinitionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
