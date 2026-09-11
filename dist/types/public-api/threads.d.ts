import { z } from "zod";
/**
 * Shared schema for thread representation in API responses
 */
export declare const ThreadSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        archived: "archived";
        regular: "regular";
    }>;
    source: z.ZodNullable<z.ZodEnum<{
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
    }>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
/**
 * Shared schema for message representation in API responses
 */
export declare const MessageSchema: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodEnum<{
        assistant: "assistant";
        user: "user";
    }>;
    content: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"message">;
        message: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reasoning">;
        reasoning: z.ZodString;
        status: z.ZodOptional<z.ZodEnum<{
            complete: "complete";
            in_progress: "in_progress";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"tool_call">;
        name: z.ZodString;
        params: z.ZodOptional<z.ZodAny>;
        result: z.ZodOptional<z.ZodAny>;
        status: z.ZodOptional<z.ZodEnum<{
            error: "error";
            in_progress: "in_progress";
            success: "success";
            unknown: "unknown";
        }>>;
        toolCallId: z.ZodOptional<z.ZodString>;
        durationMs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"artifact">;
        name: z.ZodEnum<{
            alert_card: "alert_card";
            integration_required: "integration_required";
            issue_card: "issue_card";
            log_detail: "log_detail";
            mdx: "mdx";
            table: "table";
            timeseries: "timeseries";
        }>;
        data: z.ZodAny;
        toolCallId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"fork">;
        sourceThreadId: z.ZodString;
        sourceMessageId: z.ZodString;
        sourceThreadTitle: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"summary">;
        summary: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"slack_context">;
        channelId: z.ZodString;
        isTruncated: z.ZodOptional<z.ZodBoolean>;
        messages: z.ZodArray<z.ZodObject<{
            timestamp: z.ZodString;
            slackUserId: z.ZodOptional<z.ZodString>;
            displayName: z.ZodString;
            text: z.ZodString;
            isBot: z.ZodBoolean;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                mimetype: z.ZodString;
                size: z.ZodOptional<z.ZodNumber>;
                attachmentId: z.ZodOptional<z.ZodString>;
                ingestionStatus: z.ZodOptional<z.ZodEnum<{
                    attached: "attached";
                    oversized: "oversized";
                    skipped: "skipped";
                    unavailable: "unavailable";
                    unsupported: "unsupported";
                }>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"teams_context">;
        conversationId: z.ZodString;
        isTruncated: z.ZodOptional<z.ZodBoolean>;
        messages: z.ZodArray<z.ZodObject<{
            activityId: z.ZodOptional<z.ZodString>;
            displayName: z.ZodString;
            text: z.ZodString;
            isBot: z.ZodBoolean;
            createdDateTime: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>]>>;
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
}, z.core.$strip>;
/**
 * Input schema for listing threads
 */
export declare const ListThreadsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        archived: "archived";
        regular: "regular";
    }>>;
}, z.core.$strip>;
/**
 * Output schema for listing threads
 */
export declare const ListThreadsOutputSchema: z.ZodObject<{
    threads: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for getting a single thread
 */
export declare const GetThreadInputSchema: z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for getting a single thread with messages
 */
export declare const GetThreadOutputSchema: z.ZodObject<{
    thread: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
    messages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        role: z.ZodEnum<{
            assistant: "assistant";
            user: "user";
        }>;
        content: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"message">;
            message: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"reasoning">;
            reasoning: z.ZodString;
            status: z.ZodOptional<z.ZodEnum<{
                complete: "complete";
                in_progress: "in_progress";
            }>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"tool_call">;
            name: z.ZodString;
            params: z.ZodOptional<z.ZodAny>;
            result: z.ZodOptional<z.ZodAny>;
            status: z.ZodOptional<z.ZodEnum<{
                error: "error";
                in_progress: "in_progress";
                success: "success";
                unknown: "unknown";
            }>>;
            toolCallId: z.ZodOptional<z.ZodString>;
            durationMs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"artifact">;
            name: z.ZodEnum<{
                alert_card: "alert_card";
                integration_required: "integration_required";
                issue_card: "issue_card";
                log_detail: "log_detail";
                mdx: "mdx";
                table: "table";
                timeseries: "timeseries";
            }>;
            data: z.ZodAny;
            toolCallId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"fork">;
            sourceThreadId: z.ZodString;
            sourceMessageId: z.ZodString;
            sourceThreadTitle: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"summary">;
            summary: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"slack_context">;
            channelId: z.ZodString;
            isTruncated: z.ZodOptional<z.ZodBoolean>;
            messages: z.ZodArray<z.ZodObject<{
                timestamp: z.ZodString;
                slackUserId: z.ZodOptional<z.ZodString>;
                displayName: z.ZodString;
                text: z.ZodString;
                isBot: z.ZodBoolean;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    mimetype: z.ZodString;
                    size: z.ZodOptional<z.ZodNumber>;
                    attachmentId: z.ZodOptional<z.ZodString>;
                    ingestionStatus: z.ZodOptional<z.ZodEnum<{
                        attached: "attached";
                        oversized: "oversized";
                        skipped: "skipped";
                        unavailable: "unavailable";
                        unsupported: "unsupported";
                    }>>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"teams_context">;
            conversationId: z.ZodString;
            isTruncated: z.ZodOptional<z.ZodBoolean>;
            messages: z.ZodArray<z.ZodObject<{
                activityId: z.ZodOptional<z.ZodString>;
                displayName: z.ZodString;
                text: z.ZodString;
                isBot: z.ZodBoolean;
                createdDateTime: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>>;
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
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Input schema for creating a new thread.
 */
export declare const CreateThreadInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    wait: z.ZodDefault<z.ZodBoolean>;
    timeoutSeconds: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    automationId: z.ZodOptional<z.ZodString>;
    ambientServiceRun: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strip>;
/**
 * Output schema for deferred thread creation responses.
 */
export declare const CreateThreadOutputSchema: z.ZodObject<{
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
export type Thread = z.infer<typeof ThreadSchema>;
export type Message = z.infer<typeof MessageSchema>;
export type ListThreadsInput = z.infer<typeof ListThreadsInputSchema>;
export type ListThreadsOutput = z.infer<typeof ListThreadsOutputSchema>;
export type GetThreadInput = z.infer<typeof GetThreadInputSchema>;
export type GetThreadOutput = z.infer<typeof GetThreadOutputSchema>;
export type CreateThreadInput = z.infer<typeof CreateThreadInputSchema>;
export type CreateThreadOutput = z.infer<typeof CreateThreadOutputSchema>;
/**
 * Input schema for getting thread run status
 */
export declare const GetThreadStatusInputSchema: z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for thread run status response.
 */
export declare const GetThreadStatusOutputSchema: z.ZodObject<{
    status: z.ZodEnum<{
        idle: "idle";
        processing: "processing";
    }>;
    lastRunStatus: z.ZodNullable<z.ZodEnum<{
        error: "error";
    }>>;
}, z.core.$strip>;
export type GetThreadStatusInput = z.infer<typeof GetThreadStatusInputSchema>;
export type GetThreadStatusOutput = z.infer<typeof GetThreadStatusOutputSchema>;
/**
 * Input schema for stopping a thread's in-flight run.
 */
export declare const StopThreadInputSchema: z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for threads.stop.
 *
 * Stopping is best-effort and idempotent: a 2xx response always reports
 * `success: true`, including when the thread had no active run. Failures
 * (missing thread, no access) surface as HTTP error responses.
 */
export declare const StopThreadOutputSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
export type StopThreadInput = z.infer<typeof StopThreadInputSchema>;
export type StopThreadOutput = z.infer<typeof StopThreadOutputSchema>;
/**
 * Input schema for updating a thread
 */
export declare const UpdateThreadInputSchema: z.ZodObject<{
    threadId: z.ZodString;
    status: z.ZodEnum<{
        archived: "archived";
        regular: "regular";
    }>;
}, z.core.$strip>;
/**
 * Output schema for updating a thread
 */
export declare const UpdateThreadOutputSchema: z.ZodObject<{
    thread: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateThreadInput = z.infer<typeof UpdateThreadInputSchema>;
export type UpdateThreadOutput = z.infer<typeof UpdateThreadOutputSchema>;
/**
 * Contract definition for threads.list.
 */
export declare const listThreads: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        archived: "archived";
        regular: "regular";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    threads: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for threads.get.
 */
export declare const getThread: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    thread: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
    messages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        role: z.ZodEnum<{
            assistant: "assistant";
            user: "user";
        }>;
        content: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"message">;
            message: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"reasoning">;
            reasoning: z.ZodString;
            status: z.ZodOptional<z.ZodEnum<{
                complete: "complete";
                in_progress: "in_progress";
            }>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"tool_call">;
            name: z.ZodString;
            params: z.ZodOptional<z.ZodAny>;
            result: z.ZodOptional<z.ZodAny>;
            status: z.ZodOptional<z.ZodEnum<{
                error: "error";
                in_progress: "in_progress";
                success: "success";
                unknown: "unknown";
            }>>;
            toolCallId: z.ZodOptional<z.ZodString>;
            durationMs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"artifact">;
            name: z.ZodEnum<{
                alert_card: "alert_card";
                integration_required: "integration_required";
                issue_card: "issue_card";
                log_detail: "log_detail";
                mdx: "mdx";
                table: "table";
                timeseries: "timeseries";
            }>;
            data: z.ZodAny;
            toolCallId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"fork">;
            sourceThreadId: z.ZodString;
            sourceMessageId: z.ZodString;
            sourceThreadTitle: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"summary">;
            summary: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"slack_context">;
            channelId: z.ZodString;
            isTruncated: z.ZodOptional<z.ZodBoolean>;
            messages: z.ZodArray<z.ZodObject<{
                timestamp: z.ZodString;
                slackUserId: z.ZodOptional<z.ZodString>;
                displayName: z.ZodString;
                text: z.ZodString;
                isBot: z.ZodBoolean;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    mimetype: z.ZodString;
                    size: z.ZodOptional<z.ZodNumber>;
                    attachmentId: z.ZodOptional<z.ZodString>;
                    ingestionStatus: z.ZodOptional<z.ZodEnum<{
                        attached: "attached";
                        oversized: "oversized";
                        skipped: "skipped";
                        unavailable: "unavailable";
                        unsupported: "unsupported";
                    }>>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"teams_context">;
            conversationId: z.ZodString;
            isTruncated: z.ZodOptional<z.ZodBoolean>;
            messages: z.ZodArray<z.ZodObject<{
                activityId: z.ZodOptional<z.ZodString>;
                displayName: z.ZodString;
                text: z.ZodString;
                isBot: z.ZodBoolean;
                createdDateTime: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>>;
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
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for threads.getStatus.
 */
export declare const getThreadStatus: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodEnum<{
        idle: "idle";
        processing: "processing";
    }>;
    lastRunStatus: z.ZodNullable<z.ZodEnum<{
        error: "error";
    }>>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for threads.stop.
 */
export declare const stopThread: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for threads.create.
 */
export declare const createThread: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    wait: z.ZodDefault<z.ZodBoolean>;
    timeoutSeconds: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    automationId: z.ZodOptional<z.ZodString>;
    ambientServiceRun: z.ZodOptional<z.ZodLiteral<true>>;
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
 * Contract definition for threads.update.
 */
export declare const updateThread: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
    status: z.ZodEnum<{
        archived: "archived";
        regular: "regular";
    }>;
}, z.core.$strip>, z.ZodObject<{
    thread: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Shared schema for thread visibility values.
 */
export declare const ThreadVisibilitySchema: z.ZodEnum<{
    organization: "organization";
    private: "private";
}>;
export type ThreadVisibility = z.infer<typeof ThreadVisibilitySchema>;
/**
 * Input schema for forking a thread from a message point.
 */
export declare const ForkThreadInputSchema: z.ZodObject<{
    threadId: z.ZodString;
    messageId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for forking a thread.
 */
export declare const ForkThreadOutputSchema: z.ZodObject<{
    thread: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ForkThreadInput = z.infer<typeof ForkThreadInputSchema>;
export type ForkThreadOutput = z.infer<typeof ForkThreadOutputSchema>;
/**
 * Input schema for setting a thread's visibility.
 */
export declare const SetThreadVisibilityInputSchema: z.ZodObject<{
    threadId: z.ZodString;
    visibility: z.ZodEnum<{
        organization: "organization";
        private: "private";
    }>;
}, z.core.$strip>;
/**
 * Output schema for setting a thread's visibility.
 */
export declare const SetThreadVisibilityOutputSchema: z.ZodObject<{
    thread: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
    visibility: z.ZodEnum<{
        organization: "organization";
        private: "private";
    }>;
}, z.core.$strip>;
export type SetThreadVisibilityInput = z.infer<typeof SetThreadVisibilityInputSchema>;
export type SetThreadVisibilityOutput = z.infer<typeof SetThreadVisibilityOutputSchema>;
/**
 * Shared schema describing a shareable read-only snapshot of a thread.
 */
export declare const ThreadShareLinkSchema: z.ZodObject<{
    shareId: z.ZodString;
    threadId: z.ZodString;
    url: z.ZodString;
    createdAt: z.ZodString;
}, z.core.$strip>;
export type ThreadShareLink = z.infer<typeof ThreadShareLinkSchema>;
/**
 * Input schema for creating a shareable share link for a thread.
 */
export declare const CreateThreadShareLinkInputSchema: z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for creating a shareable share link.
 */
export declare const CreateThreadShareLinkOutputSchema: z.ZodObject<{
    share: z.ZodObject<{
        shareId: z.ZodString;
        threadId: z.ZodString;
        url: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateThreadShareLinkInput = z.infer<typeof CreateThreadShareLinkInputSchema>;
export type CreateThreadShareLinkOutput = z.infer<typeof CreateThreadShareLinkOutputSchema>;
/**
 * Input schema for revoking a shareable share link.
 */
export declare const RevokeThreadShareLinkInputSchema: z.ZodObject<{
    threadId: z.ZodString;
    shareId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for revoking a shareable share link.
 *
 * Revoke is a DELETE endpoint and returns 204 No Content, so there is no
 * response body.
 */
export declare const RevokeThreadShareLinkOutputSchema: z.ZodVoid;
export type RevokeThreadShareLinkInput = z.infer<typeof RevokeThreadShareLinkInputSchema>;
export type RevokeThreadShareLinkOutput = z.infer<typeof RevokeThreadShareLinkOutputSchema>;
/**
 * Input schema for listing shareable share links for a thread.
 */
export declare const ListThreadShareLinksInputSchema: z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for listing shareable share links.
 */
export declare const ListThreadShareLinksOutputSchema: z.ZodObject<{
    shares: z.ZodArray<z.ZodObject<{
        shareId: z.ZodString;
        threadId: z.ZodString;
        url: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListThreadShareLinksInput = z.infer<typeof ListThreadShareLinksInputSchema>;
export type ListThreadShareLinksOutput = z.infer<typeof ListThreadShareLinksOutputSchema>;
/**
 * Contract definition for threads.fork.
 */
export declare const forkThread: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
    messageId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    thread: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for threads.setVisibility.
 */
export declare const setThreadVisibility: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
    visibility: z.ZodEnum<{
        organization: "organization";
        private: "private";
    }>;
}, z.core.$strip>, z.ZodObject<{
    thread: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        source: z.ZodNullable<z.ZodEnum<{
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
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
    visibility: z.ZodEnum<{
        organization: "organization";
        private: "private";
    }>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for threads.createShareLink.
 */
export declare const createThreadShareLink: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    share: z.ZodObject<{
        shareId: z.ZodString;
        threadId: z.ZodString;
        url: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for threads.listShareLinks.
 */
export declare const listThreadShareLinks: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    shares: z.ZodArray<z.ZodObject<{
        shareId: z.ZodString;
        threadId: z.ZodString;
        url: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for threads.revokeShareLink.
 */
export declare const revokeThreadShareLink: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
    shareId: z.ZodString;
}, z.core.$strip>, z.ZodVoid, "api">;
/**
 * Contract tree for thread operations implemented contract-first.
 */
export declare const threadsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        threads: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>;
            source: z.ZodNullable<z.ZodEnum<{
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
            }>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        thread: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>;
            source: z.ZodNullable<z.ZodEnum<{
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
            }>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
        messages: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            role: z.ZodEnum<{
                assistant: "assistant";
                user: "user";
            }>;
            content: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"message">;
                message: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"reasoning">;
                reasoning: z.ZodString;
                status: z.ZodOptional<z.ZodEnum<{
                    complete: "complete";
                    in_progress: "in_progress";
                }>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"tool_call">;
                name: z.ZodString;
                params: z.ZodOptional<z.ZodAny>;
                result: z.ZodOptional<z.ZodAny>;
                status: z.ZodOptional<z.ZodEnum<{
                    error: "error";
                    in_progress: "in_progress";
                    success: "success";
                    unknown: "unknown";
                }>>;
                toolCallId: z.ZodOptional<z.ZodString>;
                durationMs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"artifact">;
                name: z.ZodEnum<{
                    alert_card: "alert_card";
                    integration_required: "integration_required";
                    issue_card: "issue_card";
                    log_detail: "log_detail";
                    mdx: "mdx";
                    table: "table";
                    timeseries: "timeseries";
                }>;
                data: z.ZodAny;
                toolCallId: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"fork">;
                sourceThreadId: z.ZodString;
                sourceMessageId: z.ZodString;
                sourceThreadTitle: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"summary">;
                summary: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"slack_context">;
                channelId: z.ZodString;
                isTruncated: z.ZodOptional<z.ZodBoolean>;
                messages: z.ZodArray<z.ZodObject<{
                    timestamp: z.ZodString;
                    slackUserId: z.ZodOptional<z.ZodString>;
                    displayName: z.ZodString;
                    text: z.ZodString;
                    isBot: z.ZodBoolean;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        mimetype: z.ZodString;
                        size: z.ZodOptional<z.ZodNumber>;
                        attachmentId: z.ZodOptional<z.ZodString>;
                        ingestionStatus: z.ZodOptional<z.ZodEnum<{
                            attached: "attached";
                            oversized: "oversized";
                            skipped: "skipped";
                            unavailable: "unavailable";
                            unsupported: "unsupported";
                        }>>;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"teams_context">;
                conversationId: z.ZodString;
                isTruncated: z.ZodOptional<z.ZodBoolean>;
                messages: z.ZodArray<z.ZodObject<{
                    activityId: z.ZodOptional<z.ZodString>;
                    displayName: z.ZodString;
                    text: z.ZodString;
                    isBot: z.ZodBoolean;
                    createdDateTime: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>]>>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getStatus: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodEnum<{
            idle: "idle";
            processing: "processing";
        }>;
        lastRunStatus: z.ZodNullable<z.ZodEnum<{
            error: "error";
        }>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly stop: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        success: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        message: z.ZodString;
        wait: z.ZodDefault<z.ZodBoolean>;
        timeoutSeconds: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        automationId: z.ZodOptional<z.ZodString>;
        ambientServiceRun: z.ZodOptional<z.ZodLiteral<true>>;
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
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        thread: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>;
            source: z.ZodNullable<z.ZodEnum<{
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
            }>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly fork: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
        messageId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        thread: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>;
            source: z.ZodNullable<z.ZodEnum<{
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
            }>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly setVisibility: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
        visibility: z.ZodEnum<{
            organization: "organization";
            private: "private";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        thread: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>;
            source: z.ZodNullable<z.ZodEnum<{
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
            }>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
        visibility: z.ZodEnum<{
            organization: "organization";
            private: "private";
        }>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly createShareLink: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        share: z.ZodObject<{
            shareId: z.ZodString;
            threadId: z.ZodString;
            url: z.ZodString;
            createdAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listShareLinks: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        shares: z.ZodArray<z.ZodObject<{
            shareId: z.ZodString;
            threadId: z.ZodString;
            url: z.ZodString;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly revokeShareLink: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        threadId: z.ZodString;
        shareId: z.ZodString;
    }, z.core.$strip>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
