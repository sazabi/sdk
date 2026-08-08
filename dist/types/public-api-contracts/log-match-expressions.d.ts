import { z } from "zod";
export declare const LogMatchExpressionNameSchema: z.ZodString;
export declare const LogMatchCelExpressionSchema: z.ZodString;
export declare const LogMatchExpressionSchema: z.ZodObject<{
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
export type LogMatchExpression = z.infer<typeof LogMatchExpressionSchema>;
export declare const ListLogMatchExpressionsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListLogMatchExpressionsInput = z.infer<typeof ListLogMatchExpressionsInputSchema>;
export declare const ListLogMatchExpressionsOutputSchema: z.ZodObject<{
    expressions: z.ZodArray<z.ZodObject<{
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
export type ListLogMatchExpressionsOutput = z.infer<typeof ListLogMatchExpressionsOutputSchema>;
export declare const GetLogMatchExpressionInputSchema: z.ZodObject<{
    expressionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetLogMatchExpressionInput = z.infer<typeof GetLogMatchExpressionInputSchema>;
export declare const GetLogMatchExpressionOutputSchema: z.ZodObject<{
    expression: z.ZodObject<{
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
export type GetLogMatchExpressionOutput = z.infer<typeof GetLogMatchExpressionOutputSchema>;
export declare const CreateLogMatchExpressionInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    expression: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateLogMatchExpressionInput = z.infer<typeof CreateLogMatchExpressionInputSchema>;
export declare const CreateLogMatchExpressionOutputSchema: z.ZodObject<{
    expression: z.ZodObject<{
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
export type CreateLogMatchExpressionOutput = z.infer<typeof CreateLogMatchExpressionOutputSchema>;
export declare const UpdateLogMatchExpressionInputSchema: z.ZodObject<{
    expressionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    expression: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateLogMatchExpressionInput = z.infer<typeof UpdateLogMatchExpressionInputSchema>;
export declare const UpdateLogMatchExpressionOutputSchema: z.ZodObject<{
    expression: z.ZodObject<{
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
export type UpdateLogMatchExpressionOutput = z.infer<typeof UpdateLogMatchExpressionOutputSchema>;
export declare const DisableLogMatchExpressionInputSchema: z.ZodObject<{
    expressionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DisableLogMatchExpressionInput = z.infer<typeof DisableLogMatchExpressionInputSchema>;
export declare const DisableLogMatchExpressionOutputSchema: z.ZodObject<{
    expression: z.ZodObject<{
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
export type DisableLogMatchExpressionOutput = z.infer<typeof DisableLogMatchExpressionOutputSchema>;
export declare const listLogMatchExpressions: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    expressions: z.ZodArray<z.ZodObject<{
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
export declare const getLogMatchExpression: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    expressionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    expression: z.ZodObject<{
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
export declare const createLogMatchExpression: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    expression: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    expression: z.ZodObject<{
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
export declare const updateLogMatchExpression: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    expressionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    expression: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    expression: z.ZodObject<{
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
export declare const disableLogMatchExpression: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    expressionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    expression: z.ZodObject<{
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
export declare const logMatchExpressionsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        expressions: z.ZodArray<z.ZodObject<{
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
        expressionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        expression: z.ZodObject<{
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
        expression: z.ZodObject<{
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
        expressionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        expression: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        expression: z.ZodObject<{
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
        expressionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        expression: z.ZodObject<{
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
};
