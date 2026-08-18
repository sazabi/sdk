import { z } from "zod";
export declare const RunSchema: z.ZodObject<{
    id: z.ZodString;
    threadId: z.ZodString;
    userMessageId: z.ZodNullable<z.ZodString>;
    assistantMessageId: z.ZodNullable<z.ZodString>;
    parentRunId: z.ZodNullable<z.ZodString>;
    workflowRunId: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        aborted: "aborted";
        completed: "completed";
        error: "error";
        processing: "processing";
    }>;
    source: z.ZodEnum<{
        agent: "agent";
        api: "api";
        app: "app";
        bitbucket: "bitbucket";
        cli: "cli";
        github: "github";
        linear: "linear";
        mcp: "mcp";
        sdk: "sdk";
        slack: "slack";
        system: "system";
        teams: "teams";
        web: "web";
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    completedAt: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const ListRunsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListRunsOutputSchema: z.ZodObject<{
    runs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        threadId: z.ZodString;
        userMessageId: z.ZodNullable<z.ZodString>;
        assistantMessageId: z.ZodNullable<z.ZodString>;
        parentRunId: z.ZodNullable<z.ZodString>;
        workflowRunId: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            aborted: "aborted";
            completed: "completed";
            error: "error";
            processing: "processing";
        }>;
        source: z.ZodEnum<{
            agent: "agent";
            api: "api";
            app: "app";
            bitbucket: "bitbucket";
            cli: "cli";
            github: "github";
            linear: "linear";
            mcp: "mcp";
            sdk: "sdk";
            slack: "slack";
            system: "system";
            teams: "teams";
            web: "web";
        }>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const ListThreadRunsInputSchema: z.ZodObject<{
    threadId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListThreadRunsOutputSchema: z.ZodObject<{
    runs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        threadId: z.ZodString;
        userMessageId: z.ZodNullable<z.ZodString>;
        assistantMessageId: z.ZodNullable<z.ZodString>;
        parentRunId: z.ZodNullable<z.ZodString>;
        workflowRunId: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            aborted: "aborted";
            completed: "completed";
            error: "error";
            processing: "processing";
        }>;
        source: z.ZodEnum<{
            agent: "agent";
            api: "api";
            app: "app";
            bitbucket: "bitbucket";
            cli: "cli";
            github: "github";
            linear: "linear";
            mcp: "mcp";
            sdk: "sdk";
            slack: "slack";
            system: "system";
            teams: "teams";
            web: "web";
        }>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const GetRunInputSchema: z.ZodObject<{
    runId: z.ZodString;
}, z.core.$strip>;
/**
 * Flat deferred result shape returned by runs.get and deferred create/update
 * operations that trigger agent work.
 */
export declare const RunResultSchema: z.ZodObject<{
    completed: z.ZodBoolean;
    threadId: z.ZodString;
    runId: z.ZodString;
    messageId: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        aborted: "aborted";
        completed: "completed";
        error: "error";
        processing: "processing";
    }>;
    response: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const GetRunOutputSchema: z.ZodObject<{
    completed: z.ZodBoolean;
    threadId: z.ZodString;
    runId: z.ZodString;
    messageId: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        aborted: "aborted";
        completed: "completed";
        error: "error";
        processing: "processing";
    }>;
    response: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for runs.cancel.
 */
export declare const CancelRunInputSchema: z.ZodObject<{
    runId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for runs.cancel.
 *
 * Cancellation is best-effort and idempotent: a 2xx response always reports
 * `success: true`, including when the run had already reached a terminal
 * status. Failures (missing run, no access) surface as HTTP error responses.
 */
export declare const CancelRunOutputSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
export type Run = z.infer<typeof RunSchema>;
export type ListRunsInput = z.infer<typeof ListRunsInputSchema>;
export type ListRunsOutput = z.infer<typeof ListRunsOutputSchema>;
export type ListThreadRunsInput = z.infer<typeof ListThreadRunsInputSchema>;
export type ListThreadRunsOutput = z.infer<typeof ListThreadRunsOutputSchema>;
export type GetRunInput = z.infer<typeof GetRunInputSchema>;
export type GetRunOutput = z.infer<typeof GetRunOutputSchema>;
export type RunResult = z.infer<typeof RunResultSchema>;
export type CancelRunInput = z.infer<typeof CancelRunInputSchema>;
export type CancelRunOutput = z.infer<typeof CancelRunOutputSchema>;
/**
 * Contract definition for runs.list.
 */
export declare const listRuns: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    runs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        threadId: z.ZodString;
        userMessageId: z.ZodNullable<z.ZodString>;
        assistantMessageId: z.ZodNullable<z.ZodString>;
        parentRunId: z.ZodNullable<z.ZodString>;
        workflowRunId: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            aborted: "aborted";
            completed: "completed";
            error: "error";
            processing: "processing";
        }>;
        source: z.ZodEnum<{
            agent: "agent";
            api: "api";
            app: "app";
            bitbucket: "bitbucket";
            cli: "cli";
            github: "github";
            linear: "linear";
            mcp: "mcp";
            sdk: "sdk";
            slack: "slack";
            system: "system";
            teams: "teams";
            web: "web";
        }>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for runs.listForThread.
 */
export declare const listThreadRuns: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    runs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        threadId: z.ZodString;
        userMessageId: z.ZodNullable<z.ZodString>;
        assistantMessageId: z.ZodNullable<z.ZodString>;
        parentRunId: z.ZodNullable<z.ZodString>;
        workflowRunId: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            aborted: "aborted";
            completed: "completed";
            error: "error";
            processing: "processing";
        }>;
        source: z.ZodEnum<{
            agent: "agent";
            api: "api";
            app: "app";
            bitbucket: "bitbucket";
            cli: "cli";
            github: "github";
            linear: "linear";
            mcp: "mcp";
            sdk: "sdk";
            slack: "slack";
            system: "system";
            teams: "teams";
            web: "web";
        }>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for runs.get.
 */
export declare const getRun: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    runId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    completed: z.ZodBoolean;
    threadId: z.ZodString;
    runId: z.ZodString;
    messageId: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        aborted: "aborted";
        completed: "completed";
        error: "error";
        processing: "processing";
    }>;
    response: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for runs.cancel.
 */
export declare const cancelRun: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    runId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
/**
 * Runs contract tree.
 */
export declare const runsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        runs: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            threadId: z.ZodString;
            userMessageId: z.ZodNullable<z.ZodString>;
            assistantMessageId: z.ZodNullable<z.ZodString>;
            parentRunId: z.ZodNullable<z.ZodString>;
            workflowRunId: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                aborted: "aborted";
                completed: "completed";
                error: "error";
                processing: "processing";
            }>;
            source: z.ZodEnum<{
                agent: "agent";
                api: "api";
                app: "app";
                bitbucket: "bitbucket";
                cli: "cli";
                github: "github";
                linear: "linear";
                mcp: "mcp";
                sdk: "sdk";
                slack: "slack";
                system: "system";
                teams: "teams";
                web: "web";
            }>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listForThread: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        runs: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            threadId: z.ZodString;
            userMessageId: z.ZodNullable<z.ZodString>;
            assistantMessageId: z.ZodNullable<z.ZodString>;
            parentRunId: z.ZodNullable<z.ZodString>;
            workflowRunId: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                aborted: "aborted";
                completed: "completed";
                error: "error";
                processing: "processing";
            }>;
            source: z.ZodEnum<{
                agent: "agent";
                api: "api";
                app: "app";
                bitbucket: "bitbucket";
                cli: "cli";
                github: "github";
                linear: "linear";
                mcp: "mcp";
                sdk: "sdk";
                slack: "slack";
                system: "system";
                teams: "teams";
                web: "web";
            }>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        runId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        completed: z.ZodBoolean;
        threadId: z.ZodString;
        runId: z.ZodString;
        messageId: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<{
            aborted: "aborted";
            completed: "completed";
            error: "error";
            processing: "processing";
        }>;
        response: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly cancel: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        runId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        success: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
