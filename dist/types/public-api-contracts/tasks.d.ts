import { type TaskCategory } from "../task-checklist/index.js";
import { z } from "zod";
export type { TaskCategory };
export declare const TaskCategorySchema: z.ZodEnum<{
    onboarding: "onboarding";
    setup: "setup";
}>;
export declare const TaskSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    description: z.ZodString;
    instructions: z.ZodString;
    completed: z.ZodBoolean;
    completedAt: z.ZodNullable<z.ZodString>;
    category: z.ZodEnum<{
        onboarding: "onboarding";
        setup: "setup";
    }>;
}, z.core.$strip>;
export type Task = z.infer<typeof TaskSchema>;
export declare const ListTasksInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListTasksInput = z.infer<typeof ListTasksInputSchema>;
export declare const ListTasksOutputSchema: z.ZodObject<{
    tasks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodString;
        instructions: z.ZodString;
        completed: z.ZodBoolean;
        completedAt: z.ZodNullable<z.ZodString>;
        category: z.ZodEnum<{
            onboarding: "onboarding";
            setup: "setup";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListTasksOutput = z.infer<typeof ListTasksOutputSchema>;
export declare const listTasks: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    tasks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodString;
        instructions: z.ZodString;
        completed: z.ZodBoolean;
        completedAt: z.ZodNullable<z.ZodString>;
        category: z.ZodEnum<{
            onboarding: "onboarding";
            setup: "setup";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
