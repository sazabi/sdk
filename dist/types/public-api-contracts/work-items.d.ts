import { z } from "zod";
export declare const WorkItemAttributionSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        user: "user";
        workspace: "workspace";
    }>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type WorkItemAttribution = z.infer<typeof WorkItemAttributionSchema>;
export declare const CreateWorkItemInputSchema: z.ZodObject<{
    container: z.ZodString;
    title: z.ZodString;
    bodyMarkdown: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    itemType: z.ZodOptional<z.ZodString>;
    organizationId: z.ZodOptional<z.ZodString>;
    clientRequestId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type CreateWorkItemInput = z.infer<typeof CreateWorkItemInputSchema>;
export declare const CreateWorkItemOutputSchema: z.ZodObject<{
    identifier: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    state: z.ZodString;
    attribution: z.ZodOptional<z.ZodObject<{
        kind: z.ZodEnum<{
            user: "user";
            workspace: "workspace";
        }>;
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reused: z.ZodBoolean;
}, z.core.$strip>;
export type CreateWorkItemOutput = z.infer<typeof CreateWorkItemOutputSchema>;
export declare const createWorkItem: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    container: z.ZodString;
    title: z.ZodString;
    bodyMarkdown: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    itemType: z.ZodOptional<z.ZodString>;
    organizationId: z.ZodOptional<z.ZodString>;
    clientRequestId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    identifier: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    state: z.ZodString;
    attribution: z.ZodOptional<z.ZodObject<{
        kind: z.ZodEnum<{
            user: "user";
            workspace: "workspace";
        }>;
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    reused: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const CommentOnWorkItemInputSchema: z.ZodObject<{
    itemId: z.ZodString;
    bodyMarkdown: z.ZodString;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type CommentOnWorkItemInput = z.infer<typeof CommentOnWorkItemInputSchema>;
export declare const CommentOnWorkItemOutputSchema: z.ZodObject<{
    identifier: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
export type CommentOnWorkItemOutput = z.infer<typeof CommentOnWorkItemOutputSchema>;
export declare const commentOnWorkItem: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    itemId: z.ZodString;
    bodyMarkdown: z.ZodString;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    identifier: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>, "api">;
export declare const TransitionWorkItemInputSchema: z.ZodObject<{
    itemId: z.ZodString;
    state: z.ZodString;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type TransitionWorkItemInput = z.infer<typeof TransitionWorkItemInputSchema>;
export declare const TransitionWorkItemOutputSchema: z.ZodObject<{
    identifier: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    state: z.ZodString;
    changed: z.ZodBoolean;
}, z.core.$strip>;
export type TransitionWorkItemOutput = z.infer<typeof TransitionWorkItemOutputSchema>;
export declare const transitionWorkItem: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    itemId: z.ZodString;
    state: z.ZodString;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    identifier: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    state: z.ZodString;
    changed: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const workItemsContract: {
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        container: z.ZodString;
        title: z.ZodString;
        bodyMarkdown: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        itemType: z.ZodOptional<z.ZodString>;
        organizationId: z.ZodOptional<z.ZodString>;
        clientRequestId: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        identifier: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
        state: z.ZodString;
        attribution: z.ZodOptional<z.ZodObject<{
            kind: z.ZodEnum<{
                user: "user";
                workspace: "workspace";
            }>;
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        reused: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly comment: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        itemId: z.ZodString;
        bodyMarkdown: z.ZodString;
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        identifier: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly transition: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        itemId: z.ZodString;
        state: z.ZodString;
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        identifier: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
        state: z.ZodString;
        changed: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
