import { type AgentStreamCursor, type PublicAgentStreamEvent } from "../public-api-contracts/index.js";
/**
 * Minimal credential provider shape needed by the agent stream transports.
 */
export interface AgentStreamCredentialProvider {
    getToken(): string | Promise<string>;
}
/**
 * Runtime dependencies for the agent event stream transports.
 */
export interface AgentStreamTransportOptions {
    credentialProvider: AgentStreamCredentialProvider;
    fetch?: typeof globalThis.fetch;
    /** Public API base URL. Normalized to the `/v1` root, matching the oRPC link. */
    apiBaseUrl?: string;
    /**
     * Identifies the client surface making the request (for example "cli").
     * Forwarded as the `x-sazabi-client-source` header for parity with the oRPC
     * client. Omit for raw SDK/API callers.
     */
    clientSource?: string;
}
/**
 * Caller-facing params for streaming a single run's agent events.
 */
export interface AgentRunStreamParams {
    runId: string;
    /**
     * Opaque resume cursor from a prior stream's {@link AgentEventStream.cursor}.
     * Omit to start from the beginning of the retained buffer.
     */
    cursor?: AgentStreamCursor;
    signal?: AbortSignal;
}
/**
 * Caller-facing params for streaming a thread's live agent-run events.
 */
export interface AgentThreadStreamParams {
    threadId: string;
    /**
     * Opaque resume cursor from a prior stream's {@link AgentEventStream.cursor}.
     * Omit to start from the beginning of the retained buffer.
     */
    cursor?: AgentStreamCursor;
    signal?: AbortSignal;
}
/**
 * Async iterator over parsed public agent stream events.
 *
 * - Iterate with `for await (const event of stream)`; the iterator completes
 *   when the server emits the `[DONE]` sentinel, the connection ends, or the
 *   stream is aborted.
 * - {@link cursor} exposes the most recent resume offset observed from a
 *   `control` frame. Persist it and pass it back as `cursor` to resume after a
 *   disconnect.
 * - {@link close} aborts the underlying request and ends iteration.
 */
export interface AgentEventStream extends AsyncIterableIterator<PublicAgentStreamEvent> {
    /** Most recent resume cursor observed from a control frame, if any. */
    readonly cursor: AgentStreamCursor | undefined;
    /** Aborts the underlying SSE request and ends the iterator. */
    close(): Promise<void>;
}
/**
 * Creates the agent run/thread event stream transport surface.
 *
 * These endpoints are Server-Sent Events (`text/event-stream`) rather than oRPC
 * operations, so they are wired here instead of on the contract client. The
 * wire format mirrors the durable-agent transport: `data:` frames carrying a
 * {@link PublicAgentStreamEvent}, `event: control` frames carrying the resume
 * cursor, SSE keep-alive comments, and a terminal `data: [DONE]` sentinel.
 */
export declare const createAgentStreamTransports: (options: AgentStreamTransportOptions) => {
    streamRun: (input: AgentRunStreamParams) => Promise<AgentEventStream>;
    streamThread: (input: AgentThreadStreamParams) => Promise<AgentEventStream>;
};
