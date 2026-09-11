import { z } from "zod";
/**
 * Public agent-run event stream contracts.
 *
 * These schemas describe the Server-Sent Events (SSE) surface that public API
 * consumers use to follow an agent run in real time. They intentionally mirror
 * the canonical internal event vocabulary defined by `AgentStreamEvent` in
 * `@sazabi/agent-adapters` (`src/types/events.ts`) so the public API does not
 * introduce a third, divergent event taxonomy. The `type` discriminants and
 * payload field names are kept identical to the internal union.
 *
 * Deliberate wire adaptations (documented per field):
 * - `error` carries a serializable `message` (and optional `name`) instead of
 *   the internal `Error` instance, because SSE frames are JSON and `Error`
 *   does not survive `JSON.stringify`.
 *
 * ## Transport / framing
 *
 * The event stream is delivered as `text/event-stream` by the durable stream
 * transport in `@sazabi/agent-streams` (`createRedisEventStreamService`). It is
 * NOT modeled as an oRPC operation: oRPC/OpenAPI request-response JSON contracts
 * in this package cannot represent a long-lived SSE body, so the streaming
 * surface is expressed here as schemas + path constants instead. Later PRs wire
 * these into `services/public-api` and `@sazabi/public-sdk`.
 *
 * Frames observed on the wire, in order, per emitted event:
 * 1. `data: <json>\n\n` — one JSON payload validating against
 *    {@link PublicAgentStreamEventSchema}.
 * 2. `event: control\ndata: {"streamNextOffset":"seq:N"}\n\n` — resume cursor
 *    ({@link AgentStreamControlFrameSchema}) pointing at the next unread offset.
 *
 * The stream terminates with a final `data: [DONE]\n\n` frame
 * ({@link AGENT_STREAM_DONE_SENTINEL}) preceded by a trailing control frame.
 * SSE comment frames (`: stream-open`, `: keep-alive`) are also sent and carry
 * no event payload.
 */
/**
 * Emitted when a run starts, carrying the server-assigned run ID.
 */
export declare const RunStartedStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"run_started">;
    runId: z.ZodString;
}, z.core.$strip>;
/**
 * Emitted when the stream declares the assistant message ID. Reconnect flows
 * can adopt this server-assigned identity without side-channel metadata.
 */
export declare const MessageStartedStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"message_started">;
    messageId: z.ZodString;
}, z.core.$strip>;
/**
 * Incremental assistant text chunk.
 */
export declare const TextChunkStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"text_chunk">;
    messageId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
/**
 * Incremental reasoning/thinking chunk.
 */
export declare const ReasoningChunkStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"reasoning_chunk">;
    messageId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
/**
 * Complete assistant text message (final text for a message).
 */
export declare const TextCompleteStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"text_complete">;
    messageId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
/**
 * Complete reasoning message (final reasoning for a message).
 */
export declare const ReasoningCompleteStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"reasoning_complete">;
    messageId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
/**
 * Tool call is pending: params are still streaming. Emitted early so consumers
 * can render a placeholder before the full input is available.
 */
export declare const ToolCallPendingStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"tool_call_pending">;
    toolCallId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
/**
 * Tool call initiated with fully resolved params.
 */
export declare const ToolCallStartStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"tool_call_start">;
    toolCallId: z.ZodString;
    name: z.ZodString;
    params: z.ZodUnknown;
}, z.core.$strip>;
/**
 * Tool call finished (success or failure).
 *
 * `durationMs`, when present, is the authoritative server-measured execution
 * time. Consumers should prefer it over locally measured wall-clock, which can
 * be distorted by transport buffering and reconnect replays.
 */
export declare const ToolCallCompleteStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"tool_call_complete">;
    toolCallId: z.ZodString;
    status: z.ZodEnum<{
        error: "error";
        in_progress: "in_progress";
        success: "success";
    }>;
    result: z.ZodOptional<z.ZodUnknown>;
    durationMs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/**
 * Artifact produced by a tool execution (rendered visualization or data).
 */
export declare const ArtifactStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"artifact">;
    name: z.ZodString;
    data: z.ZodUnknown;
    toolCallId: z.ZodString;
}, z.core.$strip>;
/**
 * Error surfaced during streaming.
 *
 * The internal event carries an `Error` instance; the public wire form carries
 * a serializable `message` (and optional error `name`) since SSE payloads are
 * JSON.
 */
export declare const ErrorStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"error">;
    message: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Instructs consumers to discard accumulated content for `messageId` and start
 * fresh. Emitted when the backend retries a turn against a fallback model.
 */
export declare const StreamResetStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"stream_reset">;
    messageId: z.ZodString;
}, z.core.$strip>;
/**
 * Stream terminated without a graceful completion (for example an upstream
 * timeout) rather than a normal agent finish.
 */
export declare const DisconnectedStreamEventSchema: z.ZodObject<{
    type: z.ZodLiteral<"disconnected">;
}, z.core.$strip>;
/**
 * Discriminated union of every public agent stream event.
 *
 * Mirrors `AgentStreamEvent` from `@sazabi/agent-adapters`; narrow on `type`.
 */
export declare const PublicAgentStreamEventSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"run_started">;
    runId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"message_started">;
    messageId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"text_chunk">;
    messageId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"reasoning_chunk">;
    messageId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"text_complete">;
    messageId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"reasoning_complete">;
    messageId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"tool_call_pending">;
    toolCallId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"tool_call_start">;
    toolCallId: z.ZodString;
    name: z.ZodString;
    params: z.ZodUnknown;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"tool_call_complete">;
    toolCallId: z.ZodString;
    status: z.ZodEnum<{
        error: "error";
        in_progress: "in_progress";
        success: "success";
    }>;
    result: z.ZodOptional<z.ZodUnknown>;
    durationMs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"artifact">;
    name: z.ZodString;
    data: z.ZodUnknown;
    toolCallId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"error">;
    message: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"stream_reset">;
    messageId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"disconnected">;
}, z.core.$strip>], "type">;
export type PublicAgentStreamEvent = z.infer<typeof PublicAgentStreamEventSchema>;
/**
 * Enum of every public agent stream event `type` discriminant, useful for
 * filtering and exhaustiveness checks.
 */
export declare const PublicAgentStreamEventTypeSchema: z.ZodEnum<{
    artifact: "artifact";
    disconnected: "disconnected";
    error: "error";
    message_started: "message_started";
    reasoning_chunk: "reasoning_chunk";
    reasoning_complete: "reasoning_complete";
    run_started: "run_started";
    stream_reset: "stream_reset";
    text_chunk: "text_chunk";
    text_complete: "text_complete";
    tool_call_complete: "tool_call_complete";
    tool_call_pending: "tool_call_pending";
    tool_call_start: "tool_call_start";
}>;
export type PublicAgentStreamEventType = z.infer<typeof PublicAgentStreamEventTypeSchema>;
/**
 * SSE control-frame payload carrying the resume cursor.
 *
 * Emitted as `event: control\ndata: <json>\n\n` after each event and before
 * the terminal `[DONE]` frame. `streamNextOffset` is the opaque cursor to pass
 * back as the `cursor` query param to resume after the last delivered event.
 */
export declare const AgentStreamControlFrameSchema: z.ZodObject<{
    streamNextOffset: z.ZodString;
}, z.core.$strip>;
export type AgentStreamControlFrame = z.infer<typeof AgentStreamControlFrameSchema>;
/**
 * Opaque cursor used to resume a stream after a disconnect.
 *
 * The transport (`@sazabi/agent-streams`) accepts `seq:N`, a bare `N`, or a
 * legacy Redis stream id; the canonical emitted form is `seq:N`. Treat the
 * value returned in {@link AgentStreamControlFrameSchema.streamNextOffset} as
 * opaque and echo it verbatim.
 */
export declare const AgentStreamCursorSchema: z.ZodString;
export type AgentStreamCursor = z.infer<typeof AgentStreamCursorSchema>;
/**
 * Query parameters accepted by the agent stream endpoints.
 */
export declare const AgentStreamQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AgentStreamQuery = z.infer<typeof AgentStreamQuerySchema>;
/**
 * Query-string parameter name carrying the resume cursor.
 */
export declare const AGENT_STREAM_CURSOR_QUERY_PARAM: "cursor";
/**
 * HTTP method for the SSE stream endpoints (consumed via EventSource / GET).
 */
export declare const AGENT_STREAM_METHOD: "GET";
/**
 * Named SSE event for control frames (`event: control`).
 */
export declare const AGENT_STREAM_CONTROL_EVENT: "control";
/**
 * Terminal SSE `data:` payload signaling graceful stream completion.
 */
export declare const AGENT_STREAM_DONE_SENTINEL: "[DONE]";
/**
 * SSE path for streaming a single run's events. `{runId}` is a path parameter.
 */
export declare const RUN_STREAM_PATH: "/runs/{runId}/stream";
/**
 * SSE path for streaming a thread's live run events. `{threadId}` is a path
 * parameter.
 */
export declare const THREAD_STREAM_PATH: "/threads/{threadId}/stream";
/**
 * Descriptor for the run event stream endpoint. Not an oRPC operation (SSE);
 * exposed as metadata for server routing and SDK/CLI wiring in later PRs.
 */
export declare const runStreamEndpoint: {
    readonly method: "GET";
    readonly path: "/runs/{runId}/stream";
    readonly query: z.ZodObject<{
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    readonly event: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"run_started">;
        runId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"message_started">;
        messageId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text_chunk">;
        messageId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reasoning_chunk">;
        messageId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text_complete">;
        messageId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reasoning_complete">;
        messageId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"tool_call_pending">;
        toolCallId: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"tool_call_start">;
        toolCallId: z.ZodString;
        name: z.ZodString;
        params: z.ZodUnknown;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"tool_call_complete">;
        toolCallId: z.ZodString;
        status: z.ZodEnum<{
            error: "error";
            in_progress: "in_progress";
            success: "success";
        }>;
        result: z.ZodOptional<z.ZodUnknown>;
        durationMs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"artifact">;
        name: z.ZodString;
        data: z.ZodUnknown;
        toolCallId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"error">;
        message: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"stream_reset">;
        messageId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"disconnected">;
    }, z.core.$strip>], "type">;
    readonly control: z.ZodObject<{
        streamNextOffset: z.ZodString;
    }, z.core.$strip>;
};
/**
 * Descriptor for the thread event stream endpoint. Not an oRPC operation (SSE);
 * exposed as metadata for server routing and SDK/CLI wiring in later PRs.
 */
export declare const threadStreamEndpoint: {
    readonly method: "GET";
    readonly path: "/threads/{threadId}/stream";
    readonly query: z.ZodObject<{
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    readonly event: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"run_started">;
        runId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"message_started">;
        messageId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text_chunk">;
        messageId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reasoning_chunk">;
        messageId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text_complete">;
        messageId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reasoning_complete">;
        messageId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"tool_call_pending">;
        toolCallId: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"tool_call_start">;
        toolCallId: z.ZodString;
        name: z.ZodString;
        params: z.ZodUnknown;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"tool_call_complete">;
        toolCallId: z.ZodString;
        status: z.ZodEnum<{
            error: "error";
            in_progress: "in_progress";
            success: "success";
        }>;
        result: z.ZodOptional<z.ZodUnknown>;
        durationMs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"artifact">;
        name: z.ZodString;
        data: z.ZodUnknown;
        toolCallId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"error">;
        message: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"stream_reset">;
        messageId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"disconnected">;
    }, z.core.$strip>], "type">;
    readonly control: z.ZodObject<{
        streamNextOffset: z.ZodString;
    }, z.core.$strip>;
};
