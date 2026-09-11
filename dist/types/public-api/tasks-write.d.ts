import { z } from "zod";
/**
 * Tracker-task write operations (`POST /tasks*`) over the organization's
 * connected task provider (Linear, Jira, GitHub). These are the canonical
 * replacements for the deprecated work-item operations in `work-items.ts`
 * (ENG-6687); the alias routes forward to the same handlers until v2.0
 * (2027-03-01).
 *
 * Deliberately separate from `tasks.ts`, which owns the onboarding
 * task-checklist listing (`GET /tasks`, operation `tasks.list`) — that
 * surface keeps its route per the naming ruling (the checklist CLI moved to
 * `sazabi onboarding tasks`; the REST listing stays wire-compatible).
 */
export declare const TaskAttributionSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        user: "user";
        workspace: "workspace";
    }>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TaskAttribution = z.infer<typeof TaskAttributionSchema>;
export declare const CreateTaskInputSchema: z.ZodObject<{
    container: z.ZodString;
    title: z.ZodString;
    bodyMarkdown: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    itemType: z.ZodOptional<z.ZodString>;
    organizationId: z.ZodOptional<z.ZodString>;
    clientRequestId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type CreateTaskInput = z.infer<typeof CreateTaskInputSchema>;
export declare const CreateTaskOutputSchema: z.ZodObject<{
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
export type CreateTaskOutput = z.infer<typeof CreateTaskOutputSchema>;
export declare const createTask: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
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
export declare const CommentOnTaskInputSchema: z.ZodObject<{
    taskId: z.ZodString;
    bodyMarkdown: z.ZodString;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type CommentOnTaskInput = z.infer<typeof CommentOnTaskInputSchema>;
export declare const CommentOnTaskOutputSchema: z.ZodObject<{
    identifier: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
export type CommentOnTaskOutput = z.infer<typeof CommentOnTaskOutputSchema>;
export declare const commentOnTask: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    taskId: z.ZodString;
    bodyMarkdown: z.ZodString;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    identifier: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>, "api">;
export declare const TransitionTaskInputSchema: z.ZodObject<{
    taskId: z.ZodString;
    state: z.ZodString;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type TransitionTaskInput = z.infer<typeof TransitionTaskInputSchema>;
export declare const TransitionTaskOutputSchema: z.ZodObject<{
    identifier: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    state: z.ZodString;
    changed: z.ZodBoolean;
}, z.core.$strip>;
export type TransitionTaskOutput = z.infer<typeof TransitionTaskOutputSchema>;
export declare const transitionTask: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    taskId: z.ZodString;
    state: z.ZodString;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    identifier: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    state: z.ZodString;
    changed: z.ZodBoolean;
}, z.core.$strip>, "api">;
