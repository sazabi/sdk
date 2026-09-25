import { z } from "zod";
/**
 * Published vocabulary for why a run ended in `error` (ENG-5499).
 *
 * This list is the API-surface copy of durable-agent's `AGENT_ERROR_CLASSES`
 * (`services/durable-agent/src/lib/agent-run-failure.ts`), which is the
 * authority. It is duplicated rather than imported because that module must
 * stay dependency-free for the Temporal workflow bundle; durable-agent owns a
 * drift test that fails CI when the two lists diverge — the same arrangement
 * `log_source_type` and the notification type catalog already use.
 *
 * Adding a member is additive for clients that treat an unrecognized class as
 * "some other failure"; removing one is breaking, so retire a class by
 * leaving it dormant instead.
 */
export declare const RunFailureClassSchema: z.ZodEnum<{
    ambient_denied: "ambient_denied";
    cancelled: "cancelled";
    grpc_message_too_large: "grpc_message_too_large";
    permission: "permission";
    policy: "policy";
    provider: "provider";
    provider_rejected: "provider_rejected";
    rate_limit: "rate_limit";
    sandbox_concurrency: "sandbox_concurrency";
    sandbox_failed: "sandbox_failed";
    sandbox_missing: "sandbox_missing";
    timeout: "timeout";
    tool_failed: "tool_failed";
    unknown: "unknown";
    workflow_died: "workflow_died";
    workflow_start_failed: "workflow_start_failed";
}>;
export type RunFailureClass = z.infer<typeof RunFailureClassSchema>;
/**
 * Coerces a persisted `runs.failure_class` into the published vocabulary.
 *
 * Anything unrecognized — including a class a newer durable-agent deploy
 * writes before this contract ships it — becomes `"unknown"` rather than
 * escaping as-is. Without this the strict enum above would make output
 * validation reject the response and turn a mid-rollout version skew into a
 * 500 on every affected run. Failing open to "unclassified" keeps the endpoint
 * answering; the drift test is what stops the skew from lasting.
 */
export declare const toRunFailureClass: (value: string | null | undefined) => RunFailureClass | null;
export declare const runFailureRetryabilitySets: {
    readonly retryable: Set<"ambient_denied" | "cancelled" | "grpc_message_too_large" | "permission" | "policy" | "provider" | "provider_rejected" | "rate_limit" | "sandbox_concurrency" | "sandbox_failed" | "sandbox_missing" | "timeout" | "tool_failed" | "unknown" | "workflow_died" | "workflow_start_failed">;
    readonly nonRetryable: Set<"ambient_denied" | "cancelled" | "grpc_message_too_large" | "permission" | "policy" | "provider" | "provider_rejected" | "rate_limit" | "sandbox_concurrency" | "sandbox_failed" | "sandbox_missing" | "timeout" | "tool_failed" | "unknown" | "workflow_died" | "workflow_start_failed">;
    readonly undecided: Set<"ambient_denied" | "cancelled" | "grpc_message_too_large" | "permission" | "policy" | "provider" | "provider_rejected" | "rate_limit" | "sandbox_concurrency" | "sandbox_failed" | "sandbox_missing" | "timeout" | "tool_failed" | "unknown" | "workflow_died" | "workflow_start_failed">;
};
/**
 * Whether an identical re-run is worth attempting for this failure class.
 *
 * Three-valued on purpose. Null means "no answer": the run did not fail, its
 * writer predates the classification, or the class is one of the deliberately
 * undecided ones above. Collapsing any of those into `false` would dress up an
 * absent signal as a decision not to retry.
 */
export declare const isRetryableRunFailureClass: (failureClass: string | null | undefined) => boolean | null;
/**
 * Projects a persisted run's failure columns into the published pair.
 *
 * Gated on the run's own status: the typed failure is defined only for an
 * `error` run (threads-runs-messages.md §8.d), so a class that somehow reached
 * a `completed`, `aborted` or `processing` row — a manual repair, a backfill, a
 * future writer outside `failRun` — must not be reported as though that run
 * had failed (Codex, PR #16776). The database CHECK is the other half of this;
 * neither alone is sufficient, since the constraint ships `NOT VALID` and so
 * says nothing about rows written before it.
 */
export declare const toRunFailureFields: (run: {
    status: string;
    failureClass: string | null;
}) => {
    failureClass: RunFailureClass | null;
    failureRetryable: boolean | null;
};
export declare const RunSchema: z.ZodObject<{
    failureClass: z.ZodNullable<z.ZodEnum<{
        ambient_denied: "ambient_denied";
        cancelled: "cancelled";
        grpc_message_too_large: "grpc_message_too_large";
        permission: "permission";
        policy: "policy";
        provider: "provider";
        provider_rejected: "provider_rejected";
        rate_limit: "rate_limit";
        sandbox_concurrency: "sandbox_concurrency";
        sandbox_failed: "sandbox_failed";
        sandbox_missing: "sandbox_missing";
        timeout: "timeout";
        tool_failed: "tool_failed";
        unknown: "unknown";
        workflow_died: "workflow_died";
        workflow_start_failed: "workflow_start_failed";
    }>>;
    failureRetryable: z.ZodNullable<z.ZodBoolean>;
    id: z.ZodString;
    threadId: z.ZodString;
    userMessageId: z.ZodNullable<z.ZodString>;
    assistantMessageId: z.ZodNullable<z.ZodString>;
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
        failureClass: z.ZodNullable<z.ZodEnum<{
            ambient_denied: "ambient_denied";
            cancelled: "cancelled";
            grpc_message_too_large: "grpc_message_too_large";
            permission: "permission";
            policy: "policy";
            provider: "provider";
            provider_rejected: "provider_rejected";
            rate_limit: "rate_limit";
            sandbox_concurrency: "sandbox_concurrency";
            sandbox_failed: "sandbox_failed";
            sandbox_missing: "sandbox_missing";
            timeout: "timeout";
            tool_failed: "tool_failed";
            unknown: "unknown";
            workflow_died: "workflow_died";
            workflow_start_failed: "workflow_start_failed";
        }>>;
        failureRetryable: z.ZodNullable<z.ZodBoolean>;
        id: z.ZodString;
        threadId: z.ZodString;
        userMessageId: z.ZodNullable<z.ZodString>;
        assistantMessageId: z.ZodNullable<z.ZodString>;
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
        failureClass: z.ZodNullable<z.ZodEnum<{
            ambient_denied: "ambient_denied";
            cancelled: "cancelled";
            grpc_message_too_large: "grpc_message_too_large";
            permission: "permission";
            policy: "policy";
            provider: "provider";
            provider_rejected: "provider_rejected";
            rate_limit: "rate_limit";
            sandbox_concurrency: "sandbox_concurrency";
            sandbox_failed: "sandbox_failed";
            sandbox_missing: "sandbox_missing";
            timeout: "timeout";
            tool_failed: "tool_failed";
            unknown: "unknown";
            workflow_died: "workflow_died";
            workflow_start_failed: "workflow_start_failed";
        }>>;
        failureRetryable: z.ZodNullable<z.ZodBoolean>;
        id: z.ZodString;
        threadId: z.ZodString;
        userMessageId: z.ZodNullable<z.ZodString>;
        assistantMessageId: z.ZodNullable<z.ZodString>;
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
    failureClass: z.ZodNullable<z.ZodEnum<{
        ambient_denied: "ambient_denied";
        cancelled: "cancelled";
        grpc_message_too_large: "grpc_message_too_large";
        permission: "permission";
        policy: "policy";
        provider: "provider";
        provider_rejected: "provider_rejected";
        rate_limit: "rate_limit";
        sandbox_concurrency: "sandbox_concurrency";
        sandbox_failed: "sandbox_failed";
        sandbox_missing: "sandbox_missing";
        timeout: "timeout";
        tool_failed: "tool_failed";
        unknown: "unknown";
        workflow_died: "workflow_died";
        workflow_start_failed: "workflow_start_failed";
    }>>;
    failureRetryable: z.ZodNullable<z.ZodBoolean>;
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
    failureClass: z.ZodNullable<z.ZodEnum<{
        ambient_denied: "ambient_denied";
        cancelled: "cancelled";
        grpc_message_too_large: "grpc_message_too_large";
        permission: "permission";
        policy: "policy";
        provider: "provider";
        provider_rejected: "provider_rejected";
        rate_limit: "rate_limit";
        sandbox_concurrency: "sandbox_concurrency";
        sandbox_failed: "sandbox_failed";
        sandbox_missing: "sandbox_missing";
        timeout: "timeout";
        tool_failed: "tool_failed";
        unknown: "unknown";
        workflow_died: "workflow_died";
        workflow_start_failed: "workflow_start_failed";
    }>>;
    failureRetryable: z.ZodNullable<z.ZodBoolean>;
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
        failureClass: z.ZodNullable<z.ZodEnum<{
            ambient_denied: "ambient_denied";
            cancelled: "cancelled";
            grpc_message_too_large: "grpc_message_too_large";
            permission: "permission";
            policy: "policy";
            provider: "provider";
            provider_rejected: "provider_rejected";
            rate_limit: "rate_limit";
            sandbox_concurrency: "sandbox_concurrency";
            sandbox_failed: "sandbox_failed";
            sandbox_missing: "sandbox_missing";
            timeout: "timeout";
            tool_failed: "tool_failed";
            unknown: "unknown";
            workflow_died: "workflow_died";
            workflow_start_failed: "workflow_start_failed";
        }>>;
        failureRetryable: z.ZodNullable<z.ZodBoolean>;
        id: z.ZodString;
        threadId: z.ZodString;
        userMessageId: z.ZodNullable<z.ZodString>;
        assistantMessageId: z.ZodNullable<z.ZodString>;
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
        failureClass: z.ZodNullable<z.ZodEnum<{
            ambient_denied: "ambient_denied";
            cancelled: "cancelled";
            grpc_message_too_large: "grpc_message_too_large";
            permission: "permission";
            policy: "policy";
            provider: "provider";
            provider_rejected: "provider_rejected";
            rate_limit: "rate_limit";
            sandbox_concurrency: "sandbox_concurrency";
            sandbox_failed: "sandbox_failed";
            sandbox_missing: "sandbox_missing";
            timeout: "timeout";
            tool_failed: "tool_failed";
            unknown: "unknown";
            workflow_died: "workflow_died";
            workflow_start_failed: "workflow_start_failed";
        }>>;
        failureRetryable: z.ZodNullable<z.ZodBoolean>;
        id: z.ZodString;
        threadId: z.ZodString;
        userMessageId: z.ZodNullable<z.ZodString>;
        assistantMessageId: z.ZodNullable<z.ZodString>;
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
    failureClass: z.ZodNullable<z.ZodEnum<{
        ambient_denied: "ambient_denied";
        cancelled: "cancelled";
        grpc_message_too_large: "grpc_message_too_large";
        permission: "permission";
        policy: "policy";
        provider: "provider";
        provider_rejected: "provider_rejected";
        rate_limit: "rate_limit";
        sandbox_concurrency: "sandbox_concurrency";
        sandbox_failed: "sandbox_failed";
        sandbox_missing: "sandbox_missing";
        timeout: "timeout";
        tool_failed: "tool_failed";
        unknown: "unknown";
        workflow_died: "workflow_died";
        workflow_start_failed: "workflow_start_failed";
    }>>;
    failureRetryable: z.ZodNullable<z.ZodBoolean>;
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
            failureClass: z.ZodNullable<z.ZodEnum<{
                ambient_denied: "ambient_denied";
                cancelled: "cancelled";
                grpc_message_too_large: "grpc_message_too_large";
                permission: "permission";
                policy: "policy";
                provider: "provider";
                provider_rejected: "provider_rejected";
                rate_limit: "rate_limit";
                sandbox_concurrency: "sandbox_concurrency";
                sandbox_failed: "sandbox_failed";
                sandbox_missing: "sandbox_missing";
                timeout: "timeout";
                tool_failed: "tool_failed";
                unknown: "unknown";
                workflow_died: "workflow_died";
                workflow_start_failed: "workflow_start_failed";
            }>>;
            failureRetryable: z.ZodNullable<z.ZodBoolean>;
            id: z.ZodString;
            threadId: z.ZodString;
            userMessageId: z.ZodNullable<z.ZodString>;
            assistantMessageId: z.ZodNullable<z.ZodString>;
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
            failureClass: z.ZodNullable<z.ZodEnum<{
                ambient_denied: "ambient_denied";
                cancelled: "cancelled";
                grpc_message_too_large: "grpc_message_too_large";
                permission: "permission";
                policy: "policy";
                provider: "provider";
                provider_rejected: "provider_rejected";
                rate_limit: "rate_limit";
                sandbox_concurrency: "sandbox_concurrency";
                sandbox_failed: "sandbox_failed";
                sandbox_missing: "sandbox_missing";
                timeout: "timeout";
                tool_failed: "tool_failed";
                unknown: "unknown";
                workflow_died: "workflow_died";
                workflow_start_failed: "workflow_start_failed";
            }>>;
            failureRetryable: z.ZodNullable<z.ZodBoolean>;
            id: z.ZodString;
            threadId: z.ZodString;
            userMessageId: z.ZodNullable<z.ZodString>;
            assistantMessageId: z.ZodNullable<z.ZodString>;
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
        failureClass: z.ZodNullable<z.ZodEnum<{
            ambient_denied: "ambient_denied";
            cancelled: "cancelled";
            grpc_message_too_large: "grpc_message_too_large";
            permission: "permission";
            policy: "policy";
            provider: "provider";
            provider_rejected: "provider_rejected";
            rate_limit: "rate_limit";
            sandbox_concurrency: "sandbox_concurrency";
            sandbox_failed: "sandbox_failed";
            sandbox_missing: "sandbox_missing";
            timeout: "timeout";
            tool_failed: "tool_failed";
            unknown: "unknown";
            workflow_died: "workflow_died";
            workflow_start_failed: "workflow_start_failed";
        }>>;
        failureRetryable: z.ZodNullable<z.ZodBoolean>;
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
