import { z } from "zod";
/**
 * Input schema for listing messages in a thread
 */
export declare const ListMessagesInputSchema: z.ZodObject<{
    threadId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing messages
 */
export declare const ListMessagesOutputSchema: z.ZodObject<{
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
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for appending a message to a thread
 */
export declare const AppendMessageInputSchema: z.ZodObject<{
    threadId: z.ZodString;
    message: z.ZodString;
    wait: z.ZodDefault<z.ZodBoolean>;
    timeoutSeconds: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    automationId: z.ZodOptional<z.ZodString>;
    ambientServiceRun: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strip>;
/**
 * Output schema for deferred message append responses.
 */
export declare const AppendMessageOutputSchema: z.ZodObject<{
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
export type ListMessagesInput = z.infer<typeof ListMessagesInputSchema>;
export type ListMessagesOutput = z.infer<typeof ListMessagesOutputSchema>;
export type AppendMessageInput = z.infer<typeof AppendMessageInputSchema>;
export type AppendMessageOutput = z.infer<typeof AppendMessageOutputSchema>;
/**
 * Contract definition for messages.list.
 */
export declare const listMessages: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
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
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
/**
 * Contract definition for messages.append.
 */
export declare const appendMessage: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    threadId: z.ZodString;
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
