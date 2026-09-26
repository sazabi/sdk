// src/index.ts
import { createORPCClient, ORPCError as ORPCError2 } from "@orpc/client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";

// ../../contracts/public-api/src/agent-stream.ts
import { z } from "zod";
var RunStartedStreamEventSchema = z.object({
  type: z.literal("run_started"),
  runId: z.string().describe("Server-assigned run ID for the started run.")
});
var MessageStartedStreamEventSchema = z.object({
  type: z.literal("message_started"),
  messageId: z.string().describe("Server-assigned assistant message ID for this run.")
});
var TextChunkStreamEventSchema = z.object({
  type: z.literal("text_chunk"),
  messageId: z.string().describe("Assistant message the chunk belongs to."),
  content: z.string().describe("Incremental text delta to append.")
});
var TextCompleteStreamEventSchema = z.object({
  type: z.literal("text_complete"),
  messageId: z.string().describe("Assistant message that completed."),
  content: z.string().describe("Full assistant text for the message.")
});
var ReasoningProgressStreamEventSchema = z.object({
  type: z.literal("reasoning_progress"),
  messageId: z.string().describe("Assistant message the progress belongs to."),
  estimatedTokens: z.number().int().nonnegative().describe("Cumulative estimate for the current thinking block.")
});
var ReasoningCompleteStreamEventSchema = z.object({
  type: z.literal("reasoning_complete"),
  messageId: z.string().describe("Assistant message that completed.")
});
var ToolCallPendingStreamEventSchema = z.object({
  type: z.literal("tool_call_pending"),
  toolCallId: z.string().describe("Stable identifier for the tool call."),
  name: z.string().describe("Name of the tool being called.")
});
var ToolCallStartStreamEventSchema = z.object({
  type: z.literal("tool_call_start"),
  toolCallId: z.string().describe("Stable identifier for the tool call."),
  name: z.string().describe("Name of the tool being called."),
  params: z.unknown().describe("Resolved tool input params.")
});
var ToolCallCompleteStreamEventSchema = z.object({
  type: z.literal("tool_call_complete"),
  toolCallId: z.string().describe("Stable identifier for the tool call."),
  status: z.enum(["in_progress", "success", "error"]).describe("Terminal (or transitional) status of the tool call."),
  result: z.unknown().optional().describe("Tool output, when available."),
  durationMs: z.number().nonnegative().optional().describe("Authoritative server-measured tool execution time in ms.")
});
var ArtifactStreamEventSchema = z.object({
  type: z.literal("artifact"),
  name: z.string().describe("Artifact kind (for example table, timeseries)."),
  data: z.unknown().describe("Artifact payload; shape depends on name."),
  toolCallId: z.string().describe("Tool call that produced the artifact.")
});
var ErrorStreamEventSchema = z.object({
  type: z.literal("error"),
  message: z.string().describe("Human-readable error message."),
  name: z.string().optional().describe("Optional error class/name.")
});
var StreamResetStreamEventSchema = z.object({
  type: z.literal("stream_reset"),
  messageId: z.string().describe("Assistant message whose content to reset.")
});
var DisconnectedStreamEventSchema = z.object({
  type: z.literal("disconnected")
});
var PublicAgentStreamEventSchema = z.discriminatedUnion("type", [
  RunStartedStreamEventSchema,
  MessageStartedStreamEventSchema,
  TextChunkStreamEventSchema,
  TextCompleteStreamEventSchema,
  ReasoningProgressStreamEventSchema,
  ReasoningCompleteStreamEventSchema,
  ToolCallPendingStreamEventSchema,
  ToolCallStartStreamEventSchema,
  ToolCallCompleteStreamEventSchema,
  ArtifactStreamEventSchema,
  ErrorStreamEventSchema,
  StreamResetStreamEventSchema,
  DisconnectedStreamEventSchema
]);
var PublicAgentStreamEventTypeSchema = z.enum([
  "run_started",
  "message_started",
  "text_chunk",
  "text_complete",
  "reasoning_progress",
  "reasoning_complete",
  "tool_call_pending",
  "tool_call_start",
  "tool_call_complete",
  "artifact",
  "error",
  "stream_reset",
  "disconnected"
]);
var AgentStreamControlFrameSchema = z.object({
  streamNextOffset: z.string().describe("Opaque resume cursor for the next unread event; pass back as the stream 'cursor' query param.")
});
var AgentStreamCursorSchema = z.string().describe("Opaque resume cursor from a prior control frame's streamNextOffset.");
var AgentStreamQuerySchema = z.object({
  cursor: AgentStreamCursorSchema.optional().describe("Resume the stream after this offset. Omit to start from the beginning of the retained buffer.")
});
var AGENT_STREAM_CURSOR_QUERY_PARAM = "cursor";
var AGENT_STREAM_METHOD = "GET";
var AGENT_STREAM_CONTROL_EVENT = "control";
var AGENT_STREAM_DONE_SENTINEL = "[DONE]";
// src/agent-stream-transports.ts
var DEFAULT_API_BASE_URL = "https://api.sazabi.com";
var CLIENT_SOURCE_HEADER = "x-sazabi-client-source";
var CLIENT_VERSION_HEADER = "x-sazabi-client-version";
var createAgentStreamTransports = (options) => {
  return {
    streamRun: async (input) => {
      return openAgentEventStream({
        options,
        path: `/runs/${encodeURIComponent(input.runId)}/stream`,
        cursor: input.cursor,
        signal: input.signal
      });
    },
    streamThread: async (input) => {
      return openAgentEventStream({
        options,
        path: `/threads/${encodeURIComponent(input.threadId)}/stream`,
        cursor: input.cursor,
        signal: input.signal
      });
    }
  };
};
var openAgentEventStream = async (params) => {
  const fetchImpl = params.options.fetch ?? globalThis.fetch;
  if (!fetchImpl) {
    throw new Error("Fetch transport is not available in this runtime.");
  }
  const token = await params.options.credentialProvider.getToken();
  const url = buildAgentStreamUrl(params.options.apiBaseUrl, params.path, params.cursor);
  return createAgentSseStream({
    url,
    token,
    clientSource: params.options.clientSource,
    clientVersion: params.options.clientVersion,
    initialCursor: params.cursor,
    signal: params.signal,
    fetch: fetchImpl
  });
};
var buildAgentStreamUrl = (apiBaseUrl, path, cursor) => {
  const base = withApiVersion(apiBaseUrl ?? DEFAULT_API_BASE_URL);
  const url = new URL(`${base}${path}`);
  if (cursor) {
    url.searchParams.set(AGENT_STREAM_CURSOR_QUERY_PARAM, cursor);
  }
  return url.toString();
};
var withApiVersion = (apiBaseUrl) => {
  const normalizedBaseUrl = apiBaseUrl.replace(/\/+$/, "");
  return normalizedBaseUrl.endsWith("/v1") ? normalizedBaseUrl : `${normalizedBaseUrl}/v1`;
};
var createAgentSseStream = async (options) => {
  const pendingEvents = [];
  const pendingResolvers = [];
  let finished = false;
  let explicitClose = false;
  let pendingError;
  let latestCursor = options.initialCursor;
  const controller = new AbortController;
  const finish = (error) => {
    if (finished) {
      return;
    }
    finished = true;
    pendingError = error;
    while (pendingResolvers.length > 0) {
      const resolve = pendingResolvers.shift();
      resolve?.({ value: undefined, done: true });
    }
  };
  const pushEvent = (event) => {
    const nextResolver = pendingResolvers.shift();
    if (nextResolver) {
      nextResolver({ value: event, done: false });
      return;
    }
    pendingEvents.push(event);
  };
  const handleFrame = (frame) => {
    if (frame.event === AGENT_STREAM_CONTROL_EVENT) {
      const cursor = parseControlFrameCursor(frame.data);
      if (cursor !== undefined) {
        latestCursor = cursor;
      }
      return;
    }
    if (frame.data === AGENT_STREAM_DONE_SENTINEL) {
      explicitClose = true;
      controller.abort();
      finish();
      return;
    }
    const event = parseAgentStreamEvent(frame.data);
    if (event) {
      pushEvent(event);
    }
  };
  const onExternalAbort = () => {
    explicitClose = true;
    controller.abort();
    finish();
  };
  if (options.signal) {
    if (options.signal.aborted) {
      explicitClose = true;
      controller.abort();
    } else {
      options.signal.addEventListener("abort", onExternalAbort, { once: true });
    }
  }
  const stream = {
    [Symbol.asyncIterator]() {
      return stream;
    },
    get cursor() {
      return latestCursor;
    },
    next: async () => {
      if (pendingEvents.length > 0) {
        return {
          value: pendingEvents.shift(),
          done: false
        };
      }
      if (finished) {
        if (pendingError) {
          throw pendingError;
        }
        return { value: undefined, done: true };
      }
      return new Promise((resolve) => {
        pendingResolvers.push(resolve);
      }).then((result) => {
        if (result.done && pendingError) {
          throw pendingError;
        }
        return result;
      });
    },
    return: async () => {
      explicitClose = true;
      controller.abort();
      finish();
      return { value: undefined, done: true };
    },
    throw: async (error) => {
      explicitClose = true;
      controller.abort();
      finish(error instanceof Error ? error : new Error(String(error)));
      throw error;
    },
    close: async () => {
      explicitClose = true;
      controller.abort();
      finish();
    }
  };
  if (explicitClose) {
    finish();
    return stream;
  }
  const response = await options.fetch(options.url, {
    method: AGENT_STREAM_METHOD,
    headers: buildStreamHeaders(options.token, options.clientSource, options.clientVersion),
    signal: controller.signal
  });
  const isEmptyStream = await assertAgentStreamResponse(response);
  if (isEmptyStream) {
    finish();
  } else {
    readAgentSseFrames(response, handleFrame).then(() => finish()).catch((error) => {
      if (isExpectedAbortError(error) || explicitClose || options.signal?.aborted) {
        finish();
        return;
      }
      finish(toStreamError(error));
    });
  }
  return stream;
};
var buildStreamHeaders = (token, clientSource, clientVersion) => {
  return {
    accept: "text/event-stream",
    authorization: `Bearer ${token}`,
    ...clientSource ? { [CLIENT_SOURCE_HEADER]: clientSource } : {},
    ...clientVersion ? { [CLIENT_VERSION_HEADER]: clientVersion } : {}
  };
};
var assertAgentStreamResponse = async (response) => {
  if (response.status === 204) {
    return true;
  }
  if (response.ok && response.body) {
    return false;
  }
  const errorText = await safeReadResponseText(response);
  if (response.status === 401) {
    throw new Error("Authentication failed. Check your credential.");
  }
  if (response.status === 403) {
    throw new Error(`Forbidden (403): ${errorText || "Credential may not have access to this resource"}`);
  }
  if (response.status === 404) {
    throw new Error(`Not found (404): ${errorText || "Run or thread not found"}`);
  }
  if (response.status === 400) {
    throw new Error(`Invalid stream cursor (400): ${errorText || "The provided cursor was rejected"}`);
  }
  if (response.status >= 400 && response.status < 500 && response.status !== 429) {
    throw new Error(`Client error (${response.status}): ${errorText}`);
  }
  if (!response.body) {
    throw new Error("Agent stream response did not include a body.");
  }
  throw new Error(response.status === 429 ? `Rate limited (429): ${errorText}` : `Server error (${response.status}): ${errorText}`);
};
var readAgentSseFrames = async (response, onFrame) => {
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("Agent stream response did not include a body.");
  }
  const decoder = new TextDecoder;
  let buffer = "";
  const parser = createAgentSseParser(onFrame);
  try {
    while (true) {
      const result = await reader.read();
      if (result.done) {
        break;
      }
      buffer += decoder.decode(result.value, { stream: true });
      const lines = buffer.split(/\r\n|\r|\n/);
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        parser.line(line);
      }
    }
    buffer += decoder.decode();
    if (buffer) {
      for (const line of buffer.split(/\r\n|\r|\n/)) {
        parser.line(line);
      }
    }
    parser.flush();
  } finally {
    reader.releaseLock();
  }
};
var createAgentSseParser = (onFrame) => {
  let eventName = "message";
  let dataLines = [];
  const reset = () => {
    eventName = "message";
    dataLines = [];
  };
  const dispatch = () => {
    if (dataLines.length === 0) {
      reset();
      return;
    }
    onFrame({ event: eventName, data: dataLines.join(`
`) });
    reset();
  };
  return {
    line: (line) => {
      if (line === "") {
        dispatch();
        return;
      }
      if (line.startsWith(":")) {
        return;
      }
      const separatorIndex = line.indexOf(":");
      const field = separatorIndex === -1 ? line : line.slice(0, separatorIndex);
      const rawValue = separatorIndex === -1 ? "" : line.slice(separatorIndex + 1);
      const value = rawValue.startsWith(" ") ? rawValue.slice(1) : rawValue;
      if (field === "event") {
        eventName = value || "message";
        return;
      }
      if (field === "data") {
        dataLines.push(value);
      }
    },
    flush: dispatch
  };
};
var parseControlFrameCursor = (data) => {
  try {
    const parsed = AgentStreamControlFrameSchema.safeParse(JSON.parse(data));
    return parsed.success ? parsed.data.streamNextOffset : undefined;
  } catch {
    return;
  }
};
var parseAgentStreamEvent = (data) => {
  try {
    const parsed = PublicAgentStreamEventSchema.safeParse(JSON.parse(data));
    return parsed.success ? parsed.data : undefined;
  } catch {
    return;
  }
};
var safeReadResponseText = async (response) => {
  try {
    return await response.text();
  } catch {
    return "";
  }
};
var isExpectedAbortError = (error) => {
  return error instanceof Error && error.name === "AbortError";
};
var toStreamError = (error) => {
  return error instanceof Error ? error : new Error(String(error));
};

// src/log-transports.ts
import { ORPCError } from "@orpc/client";

// ../../protocols/tail-ws-contracts/src/index.ts
import { z as z2 } from "zod";
var LogFiltersSchema = z2.object({
  severities: z2.array(z2.string()).optional().describe("Limit results to the listed severities."),
  services: z2.array(z2.string()).optional().describe("Limit results to the listed service names."),
  environments: z2.array(z2.string()).optional().describe("Limit results to the listed deployment environments."),
  searchTerm: z2.string().optional().describe("Case-insensitive substring match against the log body."),
  traceId: z2.string().optional().describe("Limit results to one trace ID."),
  attributes: z2.record(z2.string(), z2.string()).optional().describe("Limit results to logs whose attributes contain every listed key with an exactly equal value.")
});
var WebSocketLogResourceSchema = z2.object({
  service: z2.string(),
  namespace: z2.string(),
  environment: z2.string(),
  host: z2.string(),
  container: z2.string(),
  pod: z2.string()
});
var WebSocketLogEntrySchema = z2.object({
  id: z2.string(),
  timestamp: z2.string().datetime(),
  severity: z2.string(),
  body: z2.string(),
  service: z2.string(),
  traceId: z2.string(),
  spanId: z2.string(),
  attributes: z2.record(z2.string(), z2.string()),
  resource: WebSocketLogResourceSchema
});
var WebSocketLogMessageSchema = z2.object({
  type: z2.literal("logs"),
  timestamp: z2.string().datetime(),
  data: z2.array(WebSocketLogEntrySchema)
});

// src/log-transports.ts
import { z as z3 } from "zod";
var DEFAULT_INTAKE_BASE_URL = "https://{region}.intake.sazabi.com";
var DEFAULT_TAIL_BASE_URL = "https://{region}.tail.sazabi.com";
var TAIL_RECONNECT_BASE_DELAY_MS = 500;
var TAIL_RECONNECT_MAX_DELAY_MS = 5000;
var PUBLIC_KEY_ATTRIBUTE_NAME = "sazabi.public_key";
var SAZABI_INTERNAL_LOG_FORWARDING_SECRET_HEADER = "x-sazabi-internal-log-forwarding-secret";
var SAZABI_INTERNAL_LOG_FORWARDING_SOURCE_HEADER = "x-sazabi-internal-log-forwarding-source";
var normalizeLoopbackHostname = (hostname) => {
  return hostname.startsWith("[") && hostname.endsWith("]") ? hostname.slice(1, -1) : hostname;
};
var isLoopbackHostname = (hostname) => {
  const normalizedHostname = normalizeLoopbackHostname(hostname);
  return normalizedHostname === "localhost" || normalizedHostname === "127.0.0.1" || normalizedHostname === "::1";
};
var TailLogsInputSchema = z3.object({
  projectId: z3.string().uuid().optional().describe("Project to tail logs for. Auto-filled from CLI and SDK context when omitted."),
  filters: LogFiltersSchema.optional().describe("Optional filters applied by the tail SSE service.")
});
var ForwardLogsInputSchema = z3.object({
  publicKey: z3.string().min(1).describe("Public key for intake auth. Create or list one via the public key endpoints."),
  logs: z3.custom((value) => typeof value === "object" && value !== null).describe("OTLP logs export request payload to send to the intake service.")
});
var ForwardLogsOutputSchema = z3.object({
  forwardedCount: z3.number().int().nonnegative().describe("Number of log records accepted by the intake request."),
  failedCount: z3.number().int().nonnegative().describe("Number of log records rejected by the intake request.")
});
var forwardLogsExamples = [
  {
    name: "forward-one-log",
    input: {
      publicKey: "sazabi_public_1234567890abcdef1234567890abcdef",
      logs: {
        resourceLogs: [
          {
            resource: {
              attributes: [
                {
                  key: "service.name",
                  value: { stringValue: "sazabi-cli" }
                },
                {
                  key: "sazabi.public_key",
                  value: {
                    stringValue: "sazabi_public_1234567890abcdef1234567890abcdef"
                  }
                }
              ]
            },
            scopeLogs: [
              {
                scope: {
                  name: "sazabi-cli-forward",
                  version: "1.0.0"
                },
                logRecords: [
                  {
                    severityText: "INFO",
                    body: {
                      stringValue: "Forwarded from the public SDK example."
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    output: {
      forwardedCount: 1,
      failedCount: 0
    }
  }
];
var createLogTransports = (options) => {
  const regionCache = new Map;
  return {
    tail: async (input) => {
      const projectId = await resolveProjectId(options.credentialProvider, input.projectId, "logs.tail");
      const region = await resolveTailRegion(options, regionCache, projectId, input.region, "logs.tail");
      const url = buildTailUrl({
        projectId,
        region,
        filters: input.filters,
        apiBaseUrl: options.apiBaseUrl,
        tailBaseUrl: options.tailBaseUrl
      });
      const token = await options.credentialProvider.getToken();
      const fetchImpl = options.fetch ?? globalThis.fetch;
      if (!fetchImpl) {
        throw new Error("Fetch transport is not available in this runtime.");
      }
      return createSseTailStream({
        token,
        url,
        signal: input.signal,
        fetch: fetchImpl
      });
    },
    forward: async (input) => {
      const region = await resolveIntakeRegion(options, regionCache, input.projectId ?? await options.credentialProvider.getProjectId?.(), input.region, "logs.forward");
      const url = buildIntakeUrl(region, options.intakeBaseUrl);
      const fetchImpl = options.fetch ?? globalThis.fetch;
      const payload = withPublicKeyAttribute(input.logs, input.publicKey);
      const forwardedCount = countLogRecords(payload);
      await forwardWithRetry(fetchImpl, url, payload, buildInternalForwardingHeaders(input.sazabiInternalForwarding));
      return {
        forwardedCount,
        failedCount: 0
      };
    }
  };
};
var LOCAL_LIVE_TAIL_PORT = "3010";
var LEGACY_LOCAL_TAIL_PORTS = new Set(["15006", "3010"]);
var buildTailUrl = (options) => {
  const baseUrl = (options.tailBaseUrl ?? resolveDefaultTailBaseUrl({
    region: options.region,
    apiBaseUrl: options.apiBaseUrl
  })).replace("{region}", options.region);
  const url = buildTailEndpointUrl(baseUrl);
  url.searchParams.set("projectId", options.projectId);
  const filters = toTailFiltersQuery(options.filters);
  if (filters) {
    url.searchParams.set("filters", filters);
  }
  return url.toString();
};
var resolveDefaultTailBaseUrl = (options) => {
  if (options.apiBaseUrl) {
    try {
      const apiHost = new URL(options.apiBaseUrl).hostname;
      if (apiHost.endsWith(".sazabi.dev")) {
        const domain = apiHost.includes(".staging.") ? "staging.sazabi.dev" : "development.sazabi.dev";
        return `https://${options.region}.tail.${domain}`;
      }
    } catch {}
  }
  return DEFAULT_TAIL_BASE_URL.replace("{region}", options.region);
};
var buildTailEndpointUrl = (tailBaseUrl) => {
  const parsedUrl = (() => {
    try {
      return new URL(tailBaseUrl);
    } catch {
      return null;
    }
  })();
  if (!parsedUrl) {
    throw new Error(`Invalid tail base URL: ${tailBaseUrl}`);
  }
  if (isLoopbackHostname(parsedUrl.hostname)) {
    parsedUrl.protocol = "http:";
    if (!parsedUrl.port || LEGACY_LOCAL_TAIL_PORTS.has(parsedUrl.port)) {
      parsedUrl.port = LOCAL_LIVE_TAIL_PORT;
    }
    parsedUrl.pathname = "/v1/tail";
    parsedUrl.search = "";
    parsedUrl.hash = "";
    return parsedUrl;
  }
  if (parsedUrl.protocol === "ws:" || parsedUrl.protocol === "wss:") {
    parsedUrl.protocol = parsedUrl.protocol === "wss:" ? "https:" : "http:";
  }
  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new Error(`Invalid tail base URL protocol: ${parsedUrl.protocol}. Expected http:, https:, ws:, or wss:.`);
  }
  parsedUrl.pathname = "/v1/tail";
  parsedUrl.search = "";
  parsedUrl.hash = "";
  return parsedUrl;
};
var toTailFiltersQuery = (filters) => {
  if (!filters) {
    return;
  }
  const filteredEntries = Object.entries(filters).filter(([, value]) => value !== undefined && (!Array.isArray(value) || value.length > 0) && (typeof value !== "object" || Array.isArray(value) || value === null || Object.keys(value).length > 0) && value !== "");
  if (filteredEntries.length === 0) {
    return;
  }
  return JSON.stringify(Object.fromEntries(filteredEntries));
};
var buildIntakeUrl = (region, intakeBaseUrl) => {
  const baseUrl = (intakeBaseUrl ?? DEFAULT_INTAKE_BASE_URL).replace("{region}", region);
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const localIntakeUrl = buildLocalIntakeUrl(normalizedBaseUrl);
  if (localIntakeUrl) {
    return localIntakeUrl;
  }
  const baseDomainMatch = normalizedBaseUrl.match(/^https:\/\/([a-z0-9-]+)\.intake\.([a-z0-9.]+)$/);
  const resolvedBaseUrl = baseDomainMatch ? `https://otlp.${baseDomainMatch[1]}.intake.${baseDomainMatch[2]}` : normalizedBaseUrl;
  return `${resolvedBaseUrl}/v1/logs`;
};
var buildLocalIntakeUrl = (intakeBaseUrl) => {
  const parsedUrl = (() => {
    try {
      return new URL(intakeBaseUrl);
    } catch {
      return null;
    }
  })();
  if (!parsedUrl) {
    return;
  }
  if (!isLoopbackHostname(parsedUrl.hostname)) {
    return;
  }
  parsedUrl.pathname = "/adapters/otlp";
  return parsedUrl.toString();
};
var withPublicKeyAttribute = (payload, publicKey) => {
  const resourceLogs = payload.resourceLogs;
  if (!resourceLogs || resourceLogs.length === 0) {
    return {
      ...payload,
      resourceLogs: [
        {
          resource: {
            attributes: [createPublicKeyAttribute(publicKey)]
          },
          scopeLogs: []
        }
      ]
    };
  }
  return {
    ...payload,
    resourceLogs: resourceLogs.map((resourceLog) => ({
      ...resourceLog,
      resource: {
        ...resourceLog.resource,
        attributes: upsertPublicKeyAttribute(resourceLog.resource?.attributes, publicKey)
      }
    }))
  };
};
var upsertPublicKeyAttribute = (attributes, publicKey) => {
  const nextAttributes = (attributes ?? []).filter((attribute) => attribute?.key !== PUBLIC_KEY_ATTRIBUTE_NAME);
  return [...nextAttributes, createPublicKeyAttribute(publicKey)];
};
var createPublicKeyAttribute = (publicKey) => ({
  key: PUBLIC_KEY_ATTRIBUTE_NAME,
  value: {
    stringValue: publicKey
  }
});
var buildInternalForwardingHeaders = (forwarding) => {
  if (!forwarding?.secret) {
    return {};
  }
  return {
    [SAZABI_INTERNAL_LOG_FORWARDING_SECRET_HEADER]: forwarding.secret,
    ...forwarding.source ? { [SAZABI_INTERNAL_LOG_FORWARDING_SOURCE_HEADER]: forwarding.source } : {}
  };
};
var resolveProjectId = async (credentialProvider, inputProjectId, operationId) => {
  const projectId = inputProjectId ?? await credentialProvider.getProjectId?.();
  if (projectId) {
    return projectId;
  }
  throw createMissingContextError(operationId, "Project ID is required", [
    "projectId"
  ]);
};
var resolveTailRegion = async (options, regionCache, projectId, explicitRegion, _operationId) => {
  const region = explicitRegion ?? await resolveProjectRegion(options, regionCache, projectId);
  return region;
};
var resolveIntakeRegion = async (options, regionCache, projectId, explicitRegion, operationId) => {
  if (explicitRegion) {
    return explicitRegion;
  }
  if (!projectId) {
    throw createMissingContextError(operationId, "Project ID is required", [
      "projectId"
    ]);
  }
  return resolveProjectRegion(options, regionCache, projectId);
};
var resolveProjectRegion = async (options, regionCache, projectId) => {
  const cachedRegion = regionCache.get(projectId);
  if (cachedRegion) {
    return cachedRegion;
  }
  const regionPromise = options.raw.projects.get({ projectId }).then((result) => result.project.region);
  regionCache.set(projectId, regionPromise);
  try {
    return await regionPromise;
  } catch (error) {
    regionCache.delete(projectId);
    throw error;
  }
};
var createSseTailStream = async (options) => {
  const pendingEvents = [];
  const pendingResolvers = [];
  let finished = false;
  let explicitClose = false;
  let pendingError;
  let reconnectAttempt = 0;
  let lastEventId;
  let activeController;
  const finish = (error) => {
    if (finished) {
      return;
    }
    finished = true;
    pendingError = error;
    while (pendingResolvers.length > 0) {
      const resolve = pendingResolvers.shift();
      if (resolve) {
        resolve({ value: undefined, done: true });
      }
    }
  };
  const pushEvent = (event) => {
    const nextResolver = pendingResolvers.shift();
    if (nextResolver) {
      nextResolver({ value: event, done: false });
      return;
    }
    pendingEvents.push(event);
  };
  const closeActiveRequest = () => {
    activeController?.abort();
  };
  const handleSseEvent = (event) => {
    if (event.event !== "log") {
      if (event.id) {
        lastEventId = event.id;
      }
      return;
    }
    const messages = parseTailLogEvent(event.data);
    for (const message of messages) {
      pushEvent(message);
    }
    if (event.id) {
      lastEventId = event.id;
    }
  };
  const connectAndRead = async (markReady) => {
    let openedOnce = false;
    while (!finished && !explicitClose) {
      const controller = new AbortController;
      const abortActiveController = () => controller.abort();
      activeController = controller;
      let shouldReconnect = false;
      options.signal?.addEventListener("abort", abortActiveController, {
        once: true
      });
      try {
        const response = await options.fetch(withTailCursor(options.url, lastEventId), {
          method: "GET",
          headers: {
            accept: "text/event-stream",
            authorization: `Bearer ${options.token}`
          },
          signal: controller.signal
        });
        await assertTailResponse(response);
        reconnectAttempt = 0;
        openedOnce = true;
        markReady();
        await readTailSseEvents(response, handleSseEvent);
        shouldReconnect = true;
      } catch (error) {
        if (isExpectedAbortError2(error) || options.signal?.aborted) {
          break;
        }
        const tailError = toTailError(error);
        if (!openedOnce || isFatalTailError(tailError)) {
          throw tailError;
        }
        shouldReconnect = true;
      } finally {
        options.signal?.removeEventListener("abort", abortActiveController);
        if (activeController === controller) {
          activeController = undefined;
        }
      }
      if (finished || explicitClose || options.signal?.aborted) {
        break;
      }
      if (!shouldReconnect) {
        continue;
      }
      reconnectAttempt += 1;
      await delay(Math.min(TAIL_RECONNECT_BASE_DELAY_MS * 2 ** (reconnectAttempt - 1), TAIL_RECONNECT_MAX_DELAY_MS), options.signal);
    }
  };
  options.signal?.addEventListener("abort", () => {
    explicitClose = true;
    closeActiveRequest();
    finish();
  }, { once: true });
  if (options.signal?.aborted) {
    explicitClose = true;
    closeActiveRequest();
    finish();
  }
  const ready = new Promise((resolve, reject) => {
    let settled = false;
    const markReady = () => {
      if (!settled) {
        settled = true;
        resolve();
      }
    };
    connectAndRead(markReady).catch((error) => {
      const tailError = toTailError(error);
      if (!settled) {
        settled = true;
        reject(tailError);
        return;
      }
      if (!isExpectedAbortError2(error)) {
        finish(tailError);
      }
    });
  });
  await ready;
  const stream = {
    [Symbol.asyncIterator]() {
      return stream;
    },
    next: async () => {
      if (pendingEvents.length > 0) {
        const value = pendingEvents.shift();
        return {
          value,
          done: false
        };
      }
      if (finished) {
        if (pendingError) {
          throw pendingError;
        }
        return {
          value: undefined,
          done: true
        };
      }
      return new Promise((resolve) => {
        pendingResolvers.push(resolve);
      }).then((result) => {
        if (result.done && pendingError) {
          throw pendingError;
        }
        return result;
      });
    },
    return: async () => {
      explicitClose = true;
      closeActiveRequest();
      finish();
      return {
        value: undefined,
        done: true
      };
    },
    throw: async (error) => {
      explicitClose = true;
      closeActiveRequest();
      finish(error instanceof Error ? error : new Error(String(error)));
      throw error;
    }
  };
  return stream;
};
var withTailCursor = (url, cursor) => {
  if (!cursor) {
    return url;
  }
  const nextUrl = new URL(url);
  nextUrl.searchParams.set("cursor", cursor);
  return nextUrl.toString();
};
var assertTailResponse = async (response) => {
  if (response.ok && response.body) {
    return;
  }
  const errorText = await response.text();
  if (response.status === 401) {
    throw new Error("Authentication failed. Check your credential.");
  }
  if (response.status === 403) {
    if (/not served by this region/i.test(errorText)) {
      throw new Error(`Wrong region (403): ${errorText || "Project is not served by this region"}`);
    }
    throw new Error(`Forbidden (403): ${errorText || "Credential may not have access to this project"}`);
  }
  if (response.status >= 400 && response.status < 500 && response.status !== 429) {
    throw new Error(`Client error (${response.status}): ${errorText}`);
  }
  if (!response.body) {
    throw new Error("Tail stream response did not include a body.");
  }
  throw new Error(response.status === 429 ? `Rate limited (429): ${errorText}` : `Server error (${response.status}): ${errorText}`);
};
var readTailSseEvents = async (response, onEvent) => {
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("Tail stream response did not include a body.");
  }
  const decoder = new TextDecoder;
  let buffer = "";
  const parser = createSseParser(onEvent);
  try {
    while (true) {
      const result = await reader.read();
      if (result.done) {
        break;
      }
      buffer += decoder.decode(result.value, { stream: true });
      const lines = buffer.split(/\r\n|\r|\n/);
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        parser.line(line);
      }
    }
    buffer += decoder.decode();
    if (buffer) {
      const lines = buffer.split(/\r\n|\r|\n/);
      for (const line of lines) {
        parser.line(line);
      }
    }
    parser.flush();
  } finally {
    reader.releaseLock();
  }
};
var createSseParser = (onEvent) => {
  let eventName = "message";
  let eventId;
  let dataLines = [];
  const reset = () => {
    eventName = "message";
    eventId = undefined;
    dataLines = [];
  };
  const dispatch = () => {
    if (dataLines.length === 0 && !eventId) {
      reset();
      return;
    }
    onEvent({
      event: eventName,
      data: dataLines.join(`
`),
      ...eventId ? { id: eventId } : {}
    });
    reset();
  };
  return {
    line: (line) => {
      if (line === "") {
        dispatch();
        return;
      }
      if (line.startsWith(":")) {
        return;
      }
      const separatorIndex = line.indexOf(":");
      const field = separatorIndex === -1 ? line : line.slice(0, separatorIndex);
      const rawValue = separatorIndex === -1 ? "" : line.slice(separatorIndex + 1);
      const value = rawValue.startsWith(" ") ? rawValue.slice(1) : rawValue;
      if (field === "event") {
        eventName = value || "message";
        return;
      }
      if (field === "data") {
        dataLines.push(value);
        return;
      }
      if (field === "id" && !value.includes("\x00")) {
        eventId = value;
      }
    },
    flush: dispatch
  };
};
var parseTailLogEvent = (data) => {
  try {
    const parsedMessage = WebSocketLogMessageSchema.safeParse(JSON.parse(data));
    if (!parsedMessage.success) {
      return [];
    }
    const message = parsedMessage.data;
    return message.data;
  } catch {
    return [];
  }
};
var toTailError = (error) => {
  return error instanceof Error ? error : new Error(String(error));
};
var isExpectedAbortError2 = (error) => {
  return error instanceof Error && error.name === "AbortError";
};
var isFatalTailError = (error) => {
  return error.message.startsWith("Authentication failed") || error.message.startsWith("Forbidden (") || error.message.startsWith("Wrong region (") || error.message.startsWith("Client error (");
};
var forwardWithRetry = async (fetchImpl, url, payload, extraHeaders = {}, maxRetries = 3, timeoutMs = 1e4) => {
  let lastError;
  for (let attempt = 0;attempt <= maxRetries; attempt += 1) {
    const controller = new AbortController;
    const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...extraHeaders
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      if (response.ok) {
        return;
      }
      const errorText = await response.text();
      if (response.status === 401 || response.status === 403) {
        throw new Error("Authentication failed. Check your public key.");
      }
      if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        throw new Error(`Client error (${response.status}): ${errorText}`);
      }
      lastError = new Error(response.status === 429 ? `Rate limited (429): ${errorText}` : `Server error (${response.status}): ${errorText}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (message.startsWith("Authentication failed") || message.startsWith("Client error (")) {
        throw error instanceof Error ? error : new Error(message);
      }
      lastError = error instanceof Error && error.name === "AbortError" ? new Error("Request timed out") : error instanceof Error ? error : new Error(String(error));
    } finally {
      globalThis.clearTimeout(timeoutId);
    }
    if (attempt < maxRetries) {
      await delay(TAIL_RECONNECT_BASE_DELAY_MS * 2 ** attempt);
    }
  }
  throw new Error(`Failed after ${maxRetries + 1} attempts: ${lastError?.message ?? "Unknown error"}`);
};
var countLogRecords = (payload) => {
  return payload.resourceLogs?.reduce((resourceLogTotal, resourceLog) => resourceLogTotal + (resourceLog.scopeLogs?.reduce((scopeLogTotal, scopeLog) => scopeLogTotal + (scopeLog.logRecords?.length ?? 0), 0) ?? 0), 0) ?? 0;
};
var delay = async (milliseconds, signal) => {
  if (signal?.aborted) {
    return;
  }
  await new Promise((resolve) => {
    const timeoutId = globalThis.setTimeout(resolve, milliseconds);
    signal?.addEventListener("abort", () => {
      globalThis.clearTimeout(timeoutId);
      resolve();
    }, { once: true });
  });
};
var createMissingContextError = (operationId, message, missingContext) => {
  return new ORPCError("BAD_REQUEST", {
    message,
    data: {
      operationId,
      missingContext
    }
  });
};
// src/public-api-client-contract.gen.json
var public_api_client_contract_gen_default = {
  me: {
    "~orpc": {
      errorMap: {},
      meta: {
        operationId: "me.get",
        backend: "api",
        pagination: "none",
        async: "sync",
        examples: []
      },
      route: {
        method: "GET",
        path: "/me",
        tags: ["Auth"],
        operationId: "me.get",
        summary: "Get the current credential",
        description: "Return the identity and available context for the current credential."
      }
    }
  },
  automations: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "automations.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/automations",
          tags: ["Automations"],
          operationId: "automations.list",
          summary: "List automations",
          description: "List scheduled automations in a project, with run health and recent run stats."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "automations.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/automations/{automationId}",
          tags: ["Automations"],
          operationId: "automations.get",
          summary: "Get an automation",
          description: "Get a single automation by ID."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "automations.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/automations",
          tags: ["Automations"],
          operationId: "automations.create",
          summary: "Create an automation",
          description: "Create an automation: either a cron-driven project script (see scripts.create) or a signal investigation bound to a signal definition (see signalDefinitions.create).",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "automations.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/automations/{automationId}",
          tags: ["Automations"],
          operationId: "automations.update",
          summary: "Update an automation",
          description: "Update an automation's name, description, or schedule. Does not change which script it runs."
        }
      }
    },
    enable: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "automations.enable",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/automations/{automationId}/enable",
          tags: ["Automations"],
          operationId: "automations.enable",
          summary: "Enable an automation",
          description: "Enable an automation so it runs on its schedule."
        }
      }
    },
    disable: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "automations.disable",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/automations/{automationId}/disable",
          tags: ["Automations"],
          operationId: "automations.disable",
          summary: "Disable an automation",
          description: "Disable an automation so it stops running on its schedule."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "automations.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/automations/{automationId}",
          tags: ["Automations"],
          operationId: "automations.delete",
          description: "Soft-delete a custom automation.",
          successStatus: 204
        }
      }
    },
    runs: {
      list: {
        "~orpc": {
          errorMap: {},
          meta: {
            operationId: "automations.runs.list",
            backend: "api",
            pagination: "cursor",
            async: "sync",
            examples: []
          },
          route: {
            method: "GET",
            path: "/automations/{automationId}/runs",
            tags: ["Automations"],
            operationId: "automations.runs.list",
            summary: "List automation runs",
            description: "List runs for an automation, most recent first."
          }
        }
      },
      get: {
        "~orpc": {
          errorMap: {},
          meta: {
            operationId: "automations.runs.get",
            backend: "api",
            pagination: "none",
            async: "sync",
            examples: []
          },
          route: {
            method: "GET",
            path: "/automations/{automationId}/runs/{runId}",
            tags: ["Automations"],
            operationId: "automations.runs.get",
            summary: "Get an automation run",
            description: "Get a single automation run by ID."
          }
        }
      },
      logs: {
        "~orpc": {
          errorMap: {},
          meta: {
            operationId: "automations.runs.logs",
            backend: "api",
            pagination: "none",
            async: "sync",
            examples: []
          },
          route: {
            method: "GET",
            path: "/automations/{automationId}/runs/{runId}/logs",
            tags: ["Automations"],
            operationId: "automations.runs.logs",
            summary: "Get automation run logs",
            description: "Get the captured stdout/stderr for a single automation run, reading the full output from durable storage when the inline preview was truncated."
          }
        }
      }
    }
  },
  artifacts: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "artifacts.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/artifacts",
          tags: ["Artifacts"],
          operationId: "artifacts.list",
          summary: "List artifacts",
          description: "List artifacts in a project with optional issue and date filters"
        }
      }
    },
    listIssueArtifacts: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "artifacts.listIssueArtifacts",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/issues/{issueId}/artifacts",
          tags: ["Artifacts"],
          operationId: "artifacts.listIssueArtifacts",
          summary: "List artifacts for an issue",
          description: "List artifacts referenced by an issue report"
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "artifacts.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/artifacts/{artifactId}",
          tags: ["Artifacts"],
          operationId: "artifacts.get",
          summary: "Get an artifact",
          description: "Get public metadata for an artifact"
        }
      }
    },
    download: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "artifacts.download",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/artifacts/{artifactId}/download",
          tags: ["Artifacts"],
          operationId: "artifacts.download",
          summary: "Download an artifact",
          description: "Create a short-lived signed URL for an artifact"
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "artifacts.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/artifacts/{artifactId}",
          tags: ["Artifacts"],
          operationId: "artifacts.delete",
          summary: "Delete an artifact",
          description: "Soft-delete an artifact from a project",
          successStatus: 204
        }
      }
    }
  },
  automationTemplates: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "automationTemplates.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/automation-templates",
          tags: ["Automations"],
          operationId: "automationTemplates.list",
          summary: "List automation templates",
          description: "List the published Sazabi automation template catalog. Metadata only; template content (script bodies and prompts) is not exposed."
        }
      }
    }
  },
  dashboards: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "dashboards.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/dashboards",
          tags: ["Dashboards"],
          operationId: "dashboards.list",
          summary: "List dashboards",
          description: "List the project's dashboards by most recent update: title, description, revision, timestamps, and your capabilities. Metadata only; never runs queries."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "dashboards.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/dashboards/{id}",
          tags: ["Dashboards"],
          operationId: "dashboards.get",
          summary: "Get a dashboard",
          description: "Read a dashboard's current MDX source (with its edit base), metadata, and static file descriptors. Set includeFiles to also receive the static file contents, giving a copy you can edit and pass back to dashboards.update. Never runs queries."
        }
      }
    },
    validate: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "dashboards.validate",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/dashboards/validate",
          tags: ["Dashboards"],
          operationId: "dashboards.validate",
          summary: "Validate a dashboard",
          description: "Check dashboard MDX, static files, layout, query shapes, and your permission without saving or running queries. Optional: create and update always validate too. Each diagnostic carries its source line and column, component id, code, and repair hint."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "dashboards.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/dashboards",
          tags: ["Dashboards"],
          operationId: "dashboards.create",
          summary: "Create a dashboard",
          description: "Save a new dashboard from one MDX document (DashboardMeta, layout, and inline Log Query Spec v2 artifacts) plus any static files it references by path. Generate the id yourself and reuse it on retries: an identical retry returns the original result. The response's editBase goes into DashboardMeta before the next update.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "dashboards.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/dashboards/{id}",
          tags: ["Dashboards"],
          operationId: "dashboards.update",
          summary: "Update a dashboard",
          description: "Save the next revision from a complete edited MDX document. DashboardMeta.editBase must name the revision you edited (from dashboards.get or the last create/update); if the dashboard changed since, the update is rejected with 409 and the current revision so you can reconcile."
        }
      }
    },
    render: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "dashboards.render",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/dashboards/{id}/render",
          tags: ["Dashboards"],
          operationId: "dashboards.render",
          summary: "Render a dashboard",
          description: "Run a saved dashboard's queries over one time window and return its layout with one outcome per requested component (ok, empty, rejected, or error). Omit timeRange for the dashboard's default window, revision for the current one, and componentIds for every bound component."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "dashboards.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/dashboards/{id}",
          tags: ["Dashboards"],
          operationId: "dashboards.delete",
          summary: "Delete a dashboard",
          description: "Delete a dashboard if expectedRevision is still its current revision. Deleting an already-deleted dashboard succeeds again."
        }
      }
    }
  },
  logs: {
    ask: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logs.ask",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/logs/ask",
          tags: ["Logs"],
          operationId: "logs.ask",
          summary: "Ask about logs",
          description: "Answer a natural-language question about one project's stored logs. Returns a plain-language `answer`, what was measured over which window (`explanation`, `window`), how exact and complete the numbers are (`meta`), and a `queryId`. An overview (what is broken, recent errors, what changed, what is new, with no specific topic, field or request for lines) is searched: its results are the window's kinds of log lines, with their counts in the window and the window before and example lines; every other question is measured exactly. With `results: true` it also returns the rows, value, table, series or kinds of log lines the answer was written from. Pass the `queryId` to `logs.executeQuery` to run the same query again over any window with no model involved. When nothing matches, `status` is `not_found` and the answer says so, with how the question was read."
        }
      }
    },
    executeQuery: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logs.executeQuery",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/logs/queries/{queryId}/execute",
          tags: ["Logs"],
          operationId: "logs.executeQuery",
          summary: "Run an earlier log query",
          description: "Run the query behind an earlier `logs.ask` answer again, by its `queryId`, with no model involved: over the window the answer covered or a new one, with a new `limit`, or narrowed to the log lines of one `group` of a table. Returns `results` without an answer, and a new `queryId` whose `parentId` is the one that was run. An unknown id is not found; asking the question again yields a new id."
        }
      }
    }
  },
  logSources: {
    listProviders: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logSources.listProviders",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/log-sources/providers",
          tags: ["Log Sources"],
          operationId: "logSources.listProviders",
          summary: "List log source providers",
          description: "List all supported log source providers with their setup modes and metadata requirements."
        }
      }
    },
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logSources.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/log-sources",
          tags: ["Log Sources"],
          operationId: "logSources.list",
          summary: "List log sources",
          description: "List log sources within one project."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logSources.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/log-sources",
          tags: ["Log Sources"],
          operationId: "logSources.create",
          summary: "Create a log source",
          description: "Create a log source. Managed mode takes vendor credentials in `metadata`, validates them, and provisions delivery behind the log source. Connectionless mode mints the log source plus a keyed log stream and returns the intake key and endpoint card(s) to point the sender at.",
          successStatus: 201
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logSources.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/log-sources/{logSourceId}",
          tags: ["Log Sources"],
          operationId: "logSources.get",
          summary: "Get a log source",
          description: "Get one log source by ID, including its log streams and their endpoint card(s)."
        }
      }
    },
    verify: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logSources.verify",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/log-sources/{logSourceId}/verify",
          tags: ["Log Sources"],
          operationId: "logSources.verify",
          summary: "Check saved log source credentials",
          description: "Verify the saved managed credentials without provisioning or changing vendor resources. Unknown and transient outcomes preserve previous evidence."
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logSources.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/log-sources/{logSourceId}",
          tags: ["Log Sources"],
          operationId: "logSources.update",
          summary: "Update a log source",
          description: "Update a log source: pause or resume ingestion across its log streams, and/or set or clear its ongoing auto-provisioning filter. Log sources cannot be renamed — their generated names are immutable."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logSources.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/log-sources/{logSourceId}",
          tags: ["Log Sources"],
          operationId: "logSources.delete",
          summary: "Delete a log source",
          description: "Delete a log source. Tombstones the log source and its log streams, deactivates their intake keys (already-ingested data is preserved with its attribution), and runs vendor-side cleanup for managed log sources when the provider supports it.",
          successStatus: 200
        }
      }
    }
  },
  logStreams: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logStreams.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/log-streams",
          tags: ["Log Streams"],
          operationId: "logStreams.list",
          summary: "List log streams",
          description: "List the log streams that belong to a log source."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logStreams.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/log-streams",
          tags: ["Log Streams"],
          operationId: "logStreams.create",
          summary: "Create a log stream",
          description: "Create a new log stream under a managed log source. Triggers async provisioning; poll the log stream to track it. Connectionless log sources are single-stream — create another log source instead.",
          successStatus: 201
        }
      }
    },
    createBatch: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logStreams.createBatch",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/log-streams/batch",
          tags: ["Log Streams"],
          operationId: "logStreams.createBatch",
          summary: "Batch-create log streams",
          description: "Create multiple log streams under a managed log source in one call. Every accepted stream gets a durable row immediately; provisioning happens asynchronously — poll each log stream to track it. API-created streams are always nameless, so there is no per-item rejection: every request item is either accepted (a row was created) or the whole call fails with a request-level error.",
          successStatus: 201
        }
      }
    },
    volumeStats: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logStreams.volumeStats",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/log-streams/volume-stats",
          tags: ["Log Streams"],
          operationId: "logStreams.volumeStats",
          description: "Get bytes, log count, intake rate, and last-received time for each log stream in a log source over a bounded window."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logStreams.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/log-streams/{streamId}",
          tags: ["Log Streams"],
          operationId: "logStreams.get",
          summary: "Get a log stream",
          description: "Get one log stream by ID. Use to poll provisioning status."
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logStreams.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/log-streams/{streamId}",
          tags: ["Log Streams"],
          operationId: "logStreams.update",
          summary: "Update a log stream",
          description: "Update a log stream: pause or resume its ingestion. Log streams cannot be renamed."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logStreams.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/log-streams/{streamId}",
          tags: ["Log Streams"],
          operationId: "logStreams.delete",
          summary: "Delete a log stream",
          description: "Delete a log stream. Tombstones the log stream and deactivates its intake key. Deleting a connectionless log source's only log stream tombstones the log source too.",
          successStatus: 200
        }
      }
    },
    reassign: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "logStreams.reassign",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/log-streams/{streamId}/reassign",
          tags: ["Log Streams"],
          operationId: "logStreams.reassign",
          summary: "Reassign a log stream",
          description: "Move a log stream to a different connectionless log source in the same project. Preserves the stream's ID, intake key credential, and ingested data; rebinds the key's intake adapter to the target log source's provider so future data is processed as that provider's format.",
          successStatus: 200
        }
      }
    }
  },
  connectedAccounts: {
    beginConnect: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "connectedAccounts.beginConnect",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/connected-accounts/connect",
          tags: ["Connected Accounts"],
          operationId: "connectedAccounts.beginConnect",
          summary: "Begin a connected account connect flow",
          description: "Begin a browser connect flow for a connected-account provider. Returns a vendor URL to open in a browser and an attempt to poll; the vendor exchange completes server-side and no token ever reaches the caller.",
          successStatus: 201
        }
      }
    },
    getConnectAttempt: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "connectedAccounts.getConnectAttempt",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/connected-accounts/connect/attempts/{attemptId}",
          tags: ["Connected Accounts"],
          operationId: "connectedAccounts.getConnectAttempt",
          summary: "Get a connect attempt",
          description: "Poll a browser connect attempt started with `connectedAccounts.beginConnect`. Visible only to the user who began it."
        }
      }
    },
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "connectedAccounts.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/connected-accounts",
          tags: ["Connected Accounts"],
          operationId: "connectedAccounts.list",
          summary: "List connected accounts",
          description: "List the calling user's connected accounts for the organization."
        }
      }
    },
    disconnect: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "connectedAccounts.disconnect",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/connected-accounts/{provider}",
          tags: ["Connected Accounts"],
          operationId: "connectedAccounts.disconnect",
          summary: "Disconnect a connected account",
          description: "Disconnect the calling user's connected account for a provider (soft delete)."
        }
      }
    }
  },
  integrations: {
    listProviders: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.listProviders",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/providers",
          tags: ["Integrations"],
          operationId: "integrations.listProviders",
          summary: "List integration providers",
          description: "List supported integration providers and how many connections the organization has for each."
        }
      }
    },
    listConnections: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.listConnections",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connections",
          tags: ["Integrations"],
          operationId: "integrations.listConnections",
          summary: "List integration connections",
          description: "List integration connections and their connection state for the organization."
        }
      }
    },
    getConnection: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.getConnection",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connections/{connectionId}",
          tags: ["Integrations"],
          operationId: "integrations.getConnection",
          summary: "Get an integration connection",
          description: "Get one integration connection by ID (non-secret config only)."
        }
      }
    },
    getLinearAutomationConfiguration: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.getLinearAutomationConfiguration",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connections/{connectionId}/linear-automation",
          tags: ["Integrations"],
          operationId: "integrations.getLinearAutomationConfiguration",
          summary: "Get Linear issue automation configuration",
          description: "Read the Linear team, project, and severity rules used to automatically create tickets for detected issues."
        }
      }
    },
    createConnection: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.createConnection",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/integrations/connections",
          tags: ["Integrations"],
          operationId: "integrations.createConnection",
          summary: "Create an integration connection",
          description: "Create an integration connection for an api_key provider. Credentials are validated against the vendor, then stored encrypted.",
          successStatus: 201
        }
      }
    },
    beginConnect: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.beginConnect",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/integrations/connect",
          tags: ["Integrations"],
          operationId: "integrations.beginConnect",
          summary: "Begin a browser connect flow",
          description: "Begin a browser connect flow for an OAuth or app-installation provider. Returns a vendor URL to open in a browser and an attempt to poll; the vendor exchange completes server-side and no token ever reaches the caller.",
          successStatus: 201
        }
      }
    },
    getConnectAttempt: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.getConnectAttempt",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connect/attempts/{attemptId}",
          tags: ["Integrations"],
          operationId: "integrations.getConnectAttempt",
          summary: "Get a connect attempt",
          description: "Poll a browser connect attempt started with `integrations.beginConnect`. Visible only to the user who began it."
        }
      }
    },
    getActiveCLIAttempt: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.getActiveCLIAttempt",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connect/cli-attempt",
          tags: ["Integrations"],
          operationId: "integrations.getActiveCLIAttempt",
          summary: "Get an active CLI connect attempt",
          description: "Return the newest pending, non-expired CLI-initiated connect attempt for the given provider, or null if none exists. Used by the dashboard to show a 'connection in progress from your terminal' message."
        }
      }
    },
    disconnectConnection: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.disconnectConnection",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/integrations/connections/{connectionId}",
          tags: ["Integrations"],
          operationId: "integrations.disconnectConnection",
          summary: "Disconnect an integration connection",
          description: "Disconnect an integration connection (soft delete). Always succeeds regardless of stored credential state; cached vendor catalogs and routing derived from the connection are removed."
        }
      }
    },
    updateConnectionCredentials: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.updateConnectionCredentials",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/integrations/connections/{connectionId}/credentials",
          tags: ["Integrations"],
          operationId: "integrations.updateConnectionCredentials",
          summary: "Update integration connection credentials",
          description: "Replace an api_key connection's credentials in place — the reconnect path for a connection that needs attention. Keeps connection-scoped configuration."
        }
      }
    },
    updateLinearAutomationConfiguration: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.updateLinearAutomationConfiguration",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/integrations/connections/{connectionId}/linear-automation",
          tags: ["Integrations"],
          operationId: "integrations.updateLinearAutomationConfiguration",
          summary: "Update Linear issue automation configuration",
          description: "Set the Linear team, optional project, and per-severity ticket creation rules for detected issues."
        }
      }
    },
    getOrganizationExternalIdentityJitPolicy: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.getOrganizationExternalIdentityJitPolicy",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/external-identity-jit-policy",
          tags: ["Integrations"],
          operationId: "integrations.getOrganizationExternalIdentityJitPolicy",
          summary: "Get the organization external-identity JIT policy",
          description: "Read the organization's stored external-identity JIT policy."
        }
      }
    },
    updateOrganizationExternalIdentityJitPolicy: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.updateOrganizationExternalIdentityJitPolicy",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/integrations/external-identity-jit-policy",
          tags: ["Integrations"],
          operationId: "integrations.updateOrganizationExternalIdentityJitPolicy",
          summary: "Update the organization external-identity JIT policy",
          description: "Enable or disable external-identity JIT across an organization."
        }
      }
    },
    getConnectionExternalIdentityJitPolicy: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.getConnectionExternalIdentityJitPolicy",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connections/{connectionId}/external-identity-jit-policy",
          tags: ["Integrations"],
          operationId: "integrations.getConnectionExternalIdentityJitPolicy",
          summary: "Get a connection external-identity JIT policy",
          description: "Read stored and effective JIT policy for one connection."
        }
      }
    },
    updateConnectionExternalIdentityJitPolicy: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.updateConnectionExternalIdentityJitPolicy",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/integrations/connections/{connectionId}/external-identity-jit-policy",
          tags: ["Integrations"],
          operationId: "integrations.updateConnectionExternalIdentityJitPolicy",
          summary: "Update a connection external-identity JIT policy",
          description: "Enable or disable external-identity JIT for one connection."
        }
      }
    },
    getMicrosoftTeamsAdminConsent: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.getMicrosoftTeamsAdminConsent",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connections/{connectionId}/microsoft-teams-admin-consent",
          tags: ["Integrations"],
          operationId: "integrations.getMicrosoftTeamsAdminConsent",
          summary: "Get the Microsoft Teams tenant admin-consent status",
          description: "Read the recorded Microsoft tenant admin-consent status for a Teams connection, with a consent URL for retrying the grant."
        }
      }
    },
    getSlackConfiguration: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.getSlackConfiguration",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connections/{connectionId}/slack-configuration",
          tags: ["Integrations"],
          operationId: "integrations.getSlackConfiguration",
          summary: "Get Slack connection configuration",
          description: "Read Slack connection configuration (default project, automatic responses, acknowledgement message)."
        }
      }
    },
    updateSlackConfiguration: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.updateSlackConfiguration",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/integrations/connections/{connectionId}/slack-configuration",
          tags: ["Integrations"],
          operationId: "integrations.updateSlackConfiguration",
          summary: "Update Slack connection configuration",
          description: "Update Slack connection configuration. Omitted fields are left unchanged."
        }
      }
    },
    createSlackChannel: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.createSlackChannel",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/integrations/slack/channels",
          tags: ["Integrations"],
          operationId: "integrations.createSlackChannel",
          summary: "Create a Slack channel",
          description: "Create a public channel in the organization's connected Slack workspace and invite the calling user. Requires the Slack connection to hold the channels:manage bot scope. The new channel appears as an alert destination once the channel catalog refresh completes.",
          successStatus: 201
        }
      }
    },
    listSlackChannelProjectMappings: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.listSlackChannelProjectMappings",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/integrations/connections/{connectionId}/slack-channel-project-mappings",
          tags: ["Integrations"],
          operationId: "integrations.listSlackChannelProjectMappings",
          summary: "List Slack channel-to-project mappings",
          description: "List channel-to-project mappings for a Slack connection."
        }
      }
    },
    setSlackChannelProjectMapping: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.setSlackChannelProjectMapping",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PUT",
          path: "/integrations/connections/{connectionId}/slack-channel-project-mappings/{slackChannelId}",
          tags: ["Integrations"],
          operationId: "integrations.setSlackChannelProjectMapping",
          summary: "Set a Slack channel-to-project mapping",
          description: "Create or update the channel-to-project mapping for one Slack channel. Idempotent on (connection, channel)."
        }
      }
    },
    deleteSlackChannelProjectMapping: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "integrations.deleteSlackChannelProjectMapping",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/integrations/connections/{connectionId}/slack-channel-project-mappings/{slackChannelId}",
          tags: ["Integrations"],
          operationId: "integrations.deleteSlackChannelProjectMapping",
          summary: "Delete a Slack channel-to-project mapping",
          description: "Delete a channel-to-project mapping."
        }
      }
    }
  },
  notificationChannels: {
    getProject: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "notificationChannels.getProject",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/notification-channels",
          tags: ["Notification channels"],
          operationId: "notificationChannels.getProject",
          summary: "List project notification channels",
          description: "List a project's notification channels with preferences, prerequisites, connection state, configured destinations, and supported notification types."
        }
      }
    }
  },
  notificationDeliveryRules: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "notificationDeliveryRules.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/notification-delivery-rules",
          tags: ["Notification delivery rules"],
          operationId: "notificationDeliveryRules.list",
          summary: "List delivery rules",
          description: "List the positive delivery rules for a project."
        }
      }
    },
    options: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "notificationDeliveryRules.options",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/notification-delivery-rules/options",
          tags: ["Notification delivery rules"],
          operationId: "notificationDeliveryRules.options",
          summary: "Get delivery rule options",
          description: "List available destinations, events, and conditions for project delivery rules."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "notificationDeliveryRules.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/notification-delivery-rules",
          tags: ["Notification delivery rules"],
          operationId: "notificationDeliveryRules.create",
          summary: "Create a delivery rule",
          description: "Create a positive project notification delivery rule."
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "notificationDeliveryRules.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PUT",
          path: "/notification-delivery-rules/{ruleId}",
          tags: ["Notification delivery rules"],
          operationId: "notificationDeliveryRules.update",
          summary: "Update a delivery rule",
          description: "Replace a positive delivery rule atomically."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "notificationDeliveryRules.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/notification-delivery-rules/{ruleId}",
          tags: ["Notification delivery rules"],
          operationId: "notificationDeliveryRules.delete",
          summary: "Delete a delivery rule",
          description: "Delete a positive delivery rule without deleting its reusable destinations."
        }
      }
    }
  },
  taskCreationRules: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "taskCreationRules.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/task-creation-rules",
          tags: ["Task creation rules"],
          operationId: "taskCreationRules.list",
          summary: "List task creation rules",
          description: "List the automatic task creation rules for a project in evaluation priority order."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "taskCreationRules.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/task-creation-rules/{ruleId}",
          tags: ["Task creation rules"],
          operationId: "taskCreationRules.get",
          summary: "Get a task creation rule",
          description: "Get a single task creation rule by ID."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "taskCreationRules.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/task-creation-rules",
          tags: ["Task creation rules"],
          operationId: "taskCreationRules.create",
          summary: "Create a task creation rule",
          description: "Create an automatic task creation rule that files tickets in a connected tracker when issues trigger.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "taskCreationRules.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/task-creation-rules/{ruleId}",
          tags: ["Task creation rules"],
          operationId: "taskCreationRules.update",
          summary: "Update a task creation rule",
          description: "Update an automatic task creation rule."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "taskCreationRules.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/task-creation-rules/{ruleId}",
          tags: ["Task creation rules"],
          operationId: "taskCreationRules.delete",
          summary: "Delete a task creation rule",
          description: "Soft-delete an automatic task creation rule."
        }
      }
    },
    reorder: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "taskCreationRules.reorder",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/task-creation-rules/reorder",
          tags: ["Task creation rules"],
          operationId: "taskCreationRules.reorder",
          summary: "Reorder task creation rules",
          description: "Atomically reorder all task creation rules for a project, assigning priorities matching the array order."
        }
      }
    }
  },
  mcpConnectors: {
    listProviders: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.listProviders",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/mcp-connectors/providers",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.listProviders",
          summary: "List MCP connector providers",
          description: "List all supported MCP connector providers with their auth mode and setup skill."
        }
      }
    },
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/mcp-connectors",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.list",
          summary: "List MCP connectors",
          description: "List configured MCP connectors within one project with provider, status, and enabled-tool count."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/mcp-connectors/{connectionId}",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.get",
          summary: "Get an MCP connector",
          description: "Get one configured MCP connector by connection ID."
        }
      }
    },
    details: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.details",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/mcp-connectors/{connectionId}/details",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.details",
          summary: "Inspect an MCP connector's tools",
          description: "Inspect one MCP connector's tool surface, including each tool's name, description, and read-only status."
        }
      }
    },
    search: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.search",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/mcp-connectors/tools/search",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.search",
          summary: "Search MCP connector tools",
          description: "Search executable third-party MCP connector tools by free-text query. Empty query lists connectors; empty query plus namespace enumerates that connector. Hits omit input schemas unless includeInputSchema is true, which requires one exact namespaced tool and always returns at most one hit."
        }
      }
    },
    describe: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.describe",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/mcp-connectors/tools/describe",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.describe",
          summary: "Describe an MCP connector tool",
          description: "Load one executable third-party MCP connector tool, including its input schema."
        }
      }
    },
    call: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.call",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/mcp-connectors/tools/call",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.call",
          summary: "Call an MCP connector tool",
          description: "Invoke one executable third-party MCP connector tool using that connection's stored credential."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/mcp-connectors",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.create",
          summary: "Create an MCP connector",
          description: "Create a preset MCP connector with header-based or AWS SigV4 authentication. The server URL must match the selected provider's supported endpoints. Connects immediately and returns the connector with its discovered tool snapshot.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/mcp-connectors/{connectionId}",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.update",
          summary: "Update an MCP connector",
          description: "Replace credentials on an existing preset MCP connector and retry discovery while preserving its identity and tool policy. Supply providerId to reject a connector from a different provider before any credentials are used. Omit credentials to retry discovery with saved credentials. OAuth connectors use the OAuth reconnect operation."
        }
      }
    },
    disconnect: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.disconnect",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/mcp-connectors/{connectionId}",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.disconnect",
          summary: "Disconnect an MCP connector",
          description: "Disconnect and permanently remove an MCP connector.",
          successStatus: 204
        }
      }
    },
    setReadOnly: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.setReadOnly",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/mcp-connectors/{connectionId}/read-only",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.setReadOnly",
          summary: "Toggle an MCP connector's read-only mode",
          description: "Toggle the read-only restriction on an MCP connector."
        }
      }
    },
    beginOAuthInstall: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.beginOAuthInstall",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/mcp-connectors/oauth/begin",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.beginOAuthInstall",
          summary: "Begin an MCP connector OAuth install",
          description: "Begin an OAuth browser flow to install or reconnect a preset MCP connector. Open the authorization URL in the user's browser, then poll getMcpOAuthInstallAttempt with the returned connectionId and requestId to check this attempt's completion.",
          successStatus: 201
        }
      }
    },
    getOAuthInstallAttempt: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "mcpConnectors.getOAuthInstallAttempt",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/mcp-connectors/oauth/attempts/{connectionId}",
          tags: ["MCP Connectors"],
          operationId: "mcpConnectors.getOAuthInstallAttempt",
          summary: "Get an MCP connector OAuth install attempt",
          description: "Poll the status of an in-progress OAuth MCP connector install. Returns authorizing while the user completes the browser flow, connected on success, or error on failure."
        }
      }
    }
  },
  sandboxEnvironmentVariables: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxEnvironmentVariables.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/sandbox-environment-variables",
          tags: ["Sandbox Environment Variables"],
          operationId: "sandboxEnvironmentVariables.list",
          summary: "List sandbox environment variables",
          description: "List configured custom sandbox environment variable keys for a project without exposing secret values."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxEnvironmentVariables.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/sandbox-environment-variables/{key}",
          tags: ["Sandbox Environment Variables"],
          operationId: "sandboxEnvironmentVariables.get",
          summary: "Get sandbox environment variable",
          description: "Check whether a specific custom sandbox environment variable is configured for a project."
        }
      }
    },
    upsert: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxEnvironmentVariables.upsert",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/sandbox-environment-variables",
          tags: ["Sandbox Environment Variables"],
          operationId: "sandboxEnvironmentVariables.upsert",
          summary: "Upsert sandbox environment variables",
          description: "Set or update custom sandbox environment variables for a project. Merges provided variables with existing ones. Values are encrypted server-side and never returned.",
          successStatus: 200
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxEnvironmentVariables.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/sandbox-environment-variables/{key}",
          tags: ["Sandbox Environment Variables"],
          operationId: "sandboxEnvironmentVariables.delete",
          summary: "Delete sandbox environment variable",
          description: "Delete a custom sandbox environment variable from a project by key name."
        }
      }
    }
  },
  sandboxInitScript: {
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxInitScript.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/sandbox/init-script",
          tags: ["Sandbox Init Script"],
          operationId: "sandboxInitScript.get",
          summary: "Get sandbox init script",
          description: "Fetch the custom sandbox initialization script configured for a project."
        }
      }
    },
    upsert: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxInitScript.upsert",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PUT",
          path: "/sandbox/init-script",
          tags: ["Sandbox Init Script"],
          operationId: "sandboxInitScript.upsert",
          summary: "Upsert sandbox init script",
          description: "Set or replace the custom sandbox initialization script for a project.",
          successStatus: 200
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxInitScript.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/sandbox/init-script",
          tags: ["Sandbox Init Script"],
          operationId: "sandboxInitScript.delete",
          summary: "Delete sandbox init script",
          description: "Delete the custom sandbox initialization script from a project."
        }
      }
    }
  },
  sandboxClis: {
    deleteCli: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxClis.deleteCli",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/sandbox-clis/config/{cliType}",
          tags: ["Sandbox CLIs"],
          operationId: "sandboxClis.deleteCli",
          summary: "Disconnect CLI",
          description: "Delete a project's stored CLI connection. Integration-managed access remains available until its owning integration is disconnected."
        }
      }
    },
    listConnections: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxClis.listConnections",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/sandbox-clis/connections",
          tags: ["Sandbox CLIs"],
          operationId: "sandboxClis.listConnections",
          summary: "List CLI connections",
          description: "List a project's stored and integration-backed sandbox CLI connections without returning secret values."
        }
      }
    },
    listTypes: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxClis.listTypes",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/sandbox-clis/types",
          tags: ["Sandbox CLIs"],
          operationId: "sandboxClis.listTypes",
          summary: "List CLI types",
          description: "List all supported sandbox CLI types with their environment variable requirements and setup skills."
        }
      }
    },
    testCli: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxClis.testCli",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/sandbox-clis/test",
          tags: ["Sandbox CLIs"],
          operationId: "sandboxClis.testCli",
          summary: "Test CLI connection",
          description: "Validate unsaved CLI credentials in a read-only ephemeral sandbox without persisting them."
        }
      }
    },
    verify: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxClis.verify",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/sandbox-clis/{cliType}/verify",
          tags: ["Sandbox CLIs"],
          operationId: "sandboxClis.verify",
          summary: "Check saved CLI credentials",
          description: "Check the current saved credentials and record authoritative results. Transient failures leave prior evidence unchanged."
        }
      }
    },
    upsertCli: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "sandboxClis.upsertCli",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/sandbox-clis/config",
          tags: ["Sandbox CLIs"],
          operationId: "sandboxClis.upsertCli",
          summary: "Upsert CLI connection",
          description: "Set or replace a project's CLI connection credentials (e.g. the kubectl CLI's KUBECONFIG_CONTENTS). Values are encrypted server-side and never returned. Requires write access to the target project.",
          successStatus: 200
        }
      }
    }
  },
  scripts: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "scripts.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/scripts",
          tags: ["Scripts"],
          operationId: "scripts.list",
          summary: "List scripts",
          description: "List durable bash scripts stored for a project."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "scripts.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/scripts/{name}",
          tags: ["Scripts"],
          operationId: "scripts.get",
          summary: "Get a script",
          description: "Get a single project script by name, including its body."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "scripts.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/scripts",
          tags: ["Scripts"],
          operationId: "scripts.create",
          summary: "Create a script",
          description: "Create a durable bash script for a project.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "scripts.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/scripts/{name}",
          tags: ["Scripts"],
          operationId: "scripts.update",
          summary: "Update a script",
          description: "Update a project script's body and/or description."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "scripts.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/scripts/{name}",
          tags: ["Scripts"],
          operationId: "scripts.delete",
          summary: "Delete a script",
          description: "Soft-delete a project script by name.",
          successStatus: 204
        }
      }
    }
  },
  signalDefinitions: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "signalDefinitions.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/signal-definitions",
          tags: ["Signal definitions"],
          operationId: "signalDefinitions.list",
          summary: "List signal definitions",
          description: "List signal definitions in a project."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "signalDefinitions.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/signal-definitions/{signalDefinitionId}",
          tags: ["Signal definitions"],
          operationId: "signalDefinitions.get",
          summary: "Get a signal definition",
          description: "Get a single signal definition by ID."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "signalDefinitions.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/signal-definitions",
          tags: ["Signal definitions"],
          operationId: "signalDefinitions.create",
          summary: "Create a signal definition",
          description: "Create a CEL signal definition for a project.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "signalDefinitions.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/signal-definitions/{signalDefinitionId}",
          tags: ["Signal definitions"],
          operationId: "signalDefinitions.update",
          summary: "Update a signal definition",
          description: "Update a signal definition's name, CEL body, or enabled state."
        }
      }
    },
    disable: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "signalDefinitions.disable",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/signal-definitions/{signalDefinitionId}/disable",
          tags: ["Signal definitions"],
          operationId: "signalDefinitions.disable",
          summary: "Disable a signal definition",
          description: "Disable a signal definition so it stops matching logs."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "signalDefinitions.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/signal-definitions/{signalDefinitionId}",
          tags: ["Signal definitions"],
          operationId: "signalDefinitions.delete",
          summary: "Delete a signal definition",
          description: "Permanently delete a signal definition.",
          successStatus: 204
        }
      }
    }
  },
  memory: {
    put: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "memory.put",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PUT",
          path: "/memory",
          tags: ["Memory"],
          operationId: "memory.put",
          summary: "Create or replace a memory document",
          description: "Create or replace a curated project memory document. Embeds on success."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "memory.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/memory",
          tags: ["Memory"],
          operationId: "memory.create",
          summary: "Create a memory document",
          description: "Create a curated project memory document at a path that holds no document. Fails with a conflict when the path already exists; never replaces a document. Embeds on success.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "memory.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/memory/document",
          tags: ["Memory"],
          operationId: "memory.update",
          summary: "Update a memory document",
          description: "Replace the body of an existing curated project memory document. Fails with not found when no document exists at the path; never creates one. Embeds on success."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "memory.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/memory/document",
          tags: ["Memory"],
          operationId: "memory.get",
          summary: "Get a memory document",
          description: "Get one project memory document by id or path."
        }
      }
    },
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "memory.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/memory",
          tags: ["Memory"],
          operationId: "memory.list",
          summary: "List memory documents",
          description: "List project memory catalog rows without embedding search."
        }
      }
    },
    search: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "memory.search",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/memory/search",
          tags: ["Memory"],
          operationId: "memory.search",
          summary: "Search project memory",
          description: "Hybrid semantic and keyword search over project memory documents."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "memory.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/memory/document",
          tags: ["Memory"],
          operationId: "memory.delete",
          summary: "Delete a memory document",
          description: "Soft-delete a curated project memory document by id or path.",
          successStatus: 204
        }
      }
    }
  },
  supportTickets: {
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "supportTickets.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/support-tickets",
          tags: ["Support Tickets"],
          operationId: "supportTickets.create",
          summary: "File a support ticket",
          description: "File a support ticket or feature request with Sazabi support. The requester is the authenticated person; replies arrive in the dashboard support widget and by email.",
          successStatus: 201
        }
      }
    },
    availability: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "supportTickets.availability",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/support-tickets/availability",
          tags: ["Support Tickets"],
          operationId: "supportTickets.availability",
          summary: "Check whether support tickets can be filed",
          description: "Report whether this environment can file support tickets: the support desk is configured and reachable."
        }
      }
    }
  },
  onboarding: {
    continueWithFree: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "onboarding.continueWithFree",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/onboarding/continue-with-free",
          tags: ["Onboarding"],
          operationId: "onboarding.continueWithFree",
          summary: "Continue onboarding with Free",
          description: "Confirm the organization's existing active Free plan. Requires billing management permission; does not create a subscription or request payment."
        }
      }
    },
    ensureDefaultProject: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "onboarding.ensureDefaultProject",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/onboarding/ensure-default-project",
          tags: ["Onboarding"],
          operationId: "onboarding.ensureDefaultProject",
          summary: "Ensure the default project",
          description: "Create the organization's default project unless it already has an active one, and return whichever applies. Atomic per organization, so concurrent onboarding surfaces cannot create duplicates. Requires settings write permission."
        }
      }
    },
    getState: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "onboarding.getState",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/onboarding/state",
          tags: ["Onboarding"],
          operationId: "onboarding.getState",
          summary: "Get onboarding state",
          description: "Read onboarding progress for the authenticated user."
        }
      }
    },
    skipIntegration: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "onboarding.skipIntegration",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/onboarding/skip-integration",
          tags: ["Onboarding"],
          operationId: "onboarding.skipIntegration",
          summary: "Skip an integration step",
          description: "Skip a GitHub or Slack integration step during onboarding."
        }
      }
    },
    skipGithubAppInstallation: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "onboarding.skipGithubAppInstallation",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/onboarding/skip-github-app",
          tags: ["Onboarding"],
          operationId: "onboarding.skipGithubAppInstallation",
          summary: "Skip GitHub App installation",
          description: "Skip GitHub App installation during onboarding."
        }
      }
    },
    skipSampleIssue: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "onboarding.skipSampleIssue",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/onboarding/skip-sample-issue",
          tags: ["Onboarding"],
          operationId: "onboarding.skipSampleIssue",
          summary: "Skip the test issue",
          description: "Skip the optional test issue during onboarding."
        }
      }
    },
    completeSampleIssue: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "onboarding.completeSampleIssue",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/onboarding/complete-sample-issue",
          tags: ["Onboarding"],
          operationId: "onboarding.completeSampleIssue",
          summary: "Complete the test issue step",
          description: "Mark the sample-issue onboarding step complete after viewing the test issue."
        }
      }
    },
    finish: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "onboarding.finish",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/onboarding/finish",
          tags: ["Onboarding"],
          operationId: "onboarding.finish",
          summary: "Finish onboarding",
          description: "Mark onboarding complete when all prerequisites are satisfied."
        }
      }
    }
  },
  organizations: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "organizations.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/organizations",
          tags: ["Organizations"],
          operationId: "organizations.list",
          summary: "List organizations",
          description: "List organizations available to the current credential."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "organizations.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/organizations/{organizationId}",
          tags: ["Organizations"],
          operationId: "organizations.get",
          summary: "Get an organization",
          description: "Get one organization by ID."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "organizations.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/organizations",
          tags: ["Organizations"],
          operationId: "organizations.create",
          summary: "Create an organization",
          description: "Create an organization for the authenticated user.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "organizations.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "rename-organization",
              input: {
                organizationId: "organization-123",
                name: "Observed Platform"
              },
              output: {
                organization: {
                  id: "organization-123",
                  name: "Observed Platform",
                  slug: "acme",
                  logo: null
                }
              }
            }
          ]
        },
        route: {
          method: "PATCH",
          path: "/organizations/{organizationId}",
          tags: ["Organizations"],
          operationId: "organizations.update",
          summary: "Update an organization",
          description: "Update one organization."
        }
      }
    }
  },
  members: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "members.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "organization-members",
              input: {
                organizationId: "organization-123"
              },
              output: {
                members: [
                  {
                    membershipId: "membership-123",
                    userId: "user-123",
                    name: "Alex Admin",
                    email: "alex@example.com",
                    imageUrl: null,
                    role: "admin",
                    createdAt: "2026-01-01T00:00:00.000Z"
                  }
                ]
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/members",
          tags: ["Members"],
          operationId: "members.list",
          summary: "List members",
          description: "List members in an organization."
        }
      }
    },
    updateRole: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "members.updateRole",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "promote-member",
              input: {
                organizationId: "organization-123",
                member: "user-456",
                role: "admin"
              },
              output: {
                member: {
                  membershipId: "membership-456",
                  userId: "user-456",
                  name: "Mina Member",
                  email: "mina@example.com",
                  imageUrl: null,
                  role: "admin",
                  createdAt: "2026-01-01T00:00:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "PATCH",
          path: "/members/{member}/role",
          tags: ["Members"],
          operationId: "members.updateRole",
          summary: "Update a member's role",
          description: "Update a member's organization role."
        }
      }
    },
    remove: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "members.remove",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/members/{member}",
          tags: ["Members"],
          operationId: "members.remove",
          summary: "Remove a member",
          description: "Remove a member from an organization.",
          inputStructure: "detailed"
        }
      }
    },
    invite: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "members.invite",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "invite-member",
              input: {
                organizationId: "organization-123",
                email: "newhire@example.com",
                role: "member"
              },
              output: {
                invitation: {
                  id: "invitation-123",
                  email: "newhire@example.com",
                  role: "member",
                  status: "pending",
                  createdAt: "2026-01-01T00:00:00.000Z",
                  expiresAt: "2026-01-08T00:00:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/members/invitations",
          tags: ["Members"],
          operationId: "members.invite",
          summary: "Invite a member",
          description: "Invite a person to the organization by email.",
          successStatus: 201
        }
      }
    },
    listInvitations: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "members.listInvitations",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "organization-invitations",
              input: {
                organizationId: "organization-123"
              },
              output: {
                invitations: [
                  {
                    id: "invitation-123",
                    email: "newhire@example.com",
                    role: "member",
                    status: "pending",
                    createdAt: "2026-01-01T00:00:00.000Z",
                    expiresAt: "2026-01-08T00:00:00.000Z"
                  }
                ]
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/members/invitations",
          tags: ["Members"],
          operationId: "members.listInvitations",
          summary: "List invitations",
          description: "List pending invitations for an organization."
        }
      }
    },
    revokeInvitation: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "members.revokeInvitation",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/members/invitations/{invitationId}",
          tags: ["Members"],
          operationId: "members.revokeInvitation",
          summary: "Revoke an invitation",
          description: "Revoke a pending invitation.",
          inputStructure: "detailed"
        }
      }
    }
  },
  teams: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "teams.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "organization-teams",
              input: {
                organizationId: "organization-123"
              },
              output: {
                teams: [
                  {
                    id: "5c0f9866-31ab-4237-94cc-a1d0ba2f6de2",
                    name: "Payments",
                    description: "Owns checkout and billing components.",
                    createdAt: "2026-01-01T00:00:00.000Z",
                    memberCount: 4
                  }
                ]
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/teams",
          tags: ["Teams"],
          operationId: "teams.list",
          summary: "List teams",
          description: "List teams in an organization."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "teams.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/teams",
          tags: ["Teams"],
          operationId: "teams.create",
          summary: "Create a team",
          description: "Create a team in an organization.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "teams.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/teams/{teamId}",
          tags: ["Teams"],
          operationId: "teams.update",
          summary: "Update a team",
          description: "Rename a team or update its description."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "teams.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/teams/{teamId}",
          tags: ["Teams"],
          operationId: "teams.delete",
          summary: "Delete a team",
          description: "Delete a team, its memberships, and its component-ownership assignments.",
          inputStructure: "detailed"
        }
      }
    },
    addMember: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "teams.addMember",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/teams/{teamId}/members",
          tags: ["Teams"],
          operationId: "teams.addMember",
          summary: "Add a team member",
          description: "Add an active organization member to a team.",
          successStatus: 201
        }
      }
    },
    removeMember: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "teams.removeMember",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/teams/{teamId}/members/{userId}",
          tags: ["Teams"],
          operationId: "teams.removeMember",
          summary: "Remove a team member",
          description: "Remove a member from a team.",
          inputStructure: "detailed"
        }
      }
    },
    listMembers: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "teams.listMembers",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/teams/{teamId}/members",
          tags: ["Teams"],
          operationId: "teams.listMembers",
          summary: "List team members",
          description: "List a team's active members."
        }
      }
    }
  },
  publicKeys: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "publicKeys.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: [
            {
              name: "list-public-keys",
              input: {
                projectId: "11111111-1111-4111-8111-111111111111",
                limit: 25
              },
              output: {
                publicKeys: [
                  {
                    id: "22222222-2222-4222-8222-222222222222",
                    projectId: "11111111-1111-4111-8111-111111111111",
                    name: "CLI forwarder",
                    dataSourceConnectionId: null,
                    deactivatedAt: null,
                    expiresAt: null,
                    lastUsedAt: null,
                    createdAt: "2026-01-01T00:00:00.000Z"
                  }
                ],
                nextCursor: null
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/public-keys",
          tags: ["Public Keys"],
          operationId: "publicKeys.list",
          summary: "List public keys",
          description: "List public keys within one project."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "publicKeys.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "get-public-key",
              input: {
                projectId: "11111111-1111-4111-8111-111111111111",
                keyId: "22222222-2222-4222-8222-222222222222"
              },
              output: {
                publicKey: {
                  id: "22222222-2222-4222-8222-222222222222",
                  projectId: "11111111-1111-4111-8111-111111111111",
                  name: "CLI forwarder",
                  dataSourceConnectionId: null,
                  deactivatedAt: null,
                  expiresAt: null,
                  lastUsedAt: null,
                  createdAt: "2026-01-01T00:00:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/public-keys/{keyId}",
          tags: ["Public Keys"],
          operationId: "publicKeys.get",
          summary: "Get a public key",
          description: "Get one public key within one project."
        }
      }
    },
    ensureLogForwarding: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "publicKeys.ensureLogForwarding",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "ensure-log-forwarding-public-key",
              input: {
                projectId: "11111111-1111-4111-8111-111111111111"
              },
              output: {
                publicKey: {
                  id: "22222222-2222-4222-8222-222222222222",
                  projectId: "11111111-1111-4111-8111-111111111111",
                  name: "sazabi-cli-forward",
                  dataSourceConnectionId: null,
                  deactivatedAt: null,
                  expiresAt: null,
                  lastUsedAt: null,
                  createdAt: "2026-01-01T00:00:00.000Z",
                  value: "sazabi_public_example"
                }
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/public-keys/log-forwarding/ensure",
          tags: ["Public Keys"],
          operationId: "publicKeys.ensureLogForwarding",
          summary: "Ensure a log forwarding public key",
          description: "Ensure a reusable project-scoped public key exists for CLI log forwarding."
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "publicKeys.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "rename-public-key",
              input: {
                projectId: "11111111-1111-4111-8111-111111111111",
                keyId: "22222222-2222-4222-8222-222222222222",
                name: "Updated CLI forwarder"
              },
              output: {
                publicKey: {
                  id: "22222222-2222-4222-8222-222222222222",
                  projectId: "11111111-1111-4111-8111-111111111111",
                  name: "Updated CLI forwarder",
                  dataSourceConnectionId: null,
                  deactivatedAt: null,
                  expiresAt: null,
                  lastUsedAt: null,
                  createdAt: "2026-01-01T00:00:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "PATCH",
          path: "/public-keys/{keyId}",
          tags: ["Public Keys"],
          operationId: "publicKeys.update",
          summary: "Update a public key",
          description: "Update one public key within one project."
        }
      }
    },
    deactivate: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "publicKeys.deactivate",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/public-keys/{keyId}/deactivate",
          tags: ["Public Keys"],
          operationId: "publicKeys.deactivate",
          summary: "Deactivate a public key",
          description: "Deactivate one public key within one project. Recently validated requests may continue to authenticate for a short period after deactivation.",
          inputStructure: "detailed"
        }
      }
    }
  },
  secretKeys: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "secretKeys.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: [
            {
              name: "list-secret-keys",
              input: {
                limit: 25
              },
              output: {
                secretKeys: [
                  {
                    id: "33333333-3333-4333-8333-333333333333",
                    projectId: null,
                    name: "CI agent",
                    expiresAt: null,
                    lastUsedAt: null,
                    createdAt: "2026-01-01T00:00:00.000Z"
                  }
                ],
                nextCursor: null
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/secret-keys",
          tags: ["Secret Keys"],
          operationId: "secretKeys.list",
          summary: "List secret keys",
          description: "List secret keys within the organization."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "secretKeys.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "get-secret-key",
              input: {
                keyId: "33333333-3333-4333-8333-333333333333"
              },
              output: {
                secretKey: {
                  id: "33333333-3333-4333-8333-333333333333",
                  projectId: null,
                  name: "CI agent",
                  expiresAt: null,
                  lastUsedAt: null,
                  createdAt: "2026-01-01T00:00:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/secret-keys/{keyId}",
          tags: ["Secret Keys"],
          operationId: "secretKeys.get",
          summary: "Get a secret key",
          description: "Get one secret key within the organization."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "secretKeys.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "create-secret-key",
              input: {
                name: "CI agent"
              },
              output: {
                secretKey: {
                  id: "33333333-3333-4333-8333-333333333333",
                  projectId: null,
                  name: "CI agent",
                  expiresAt: null,
                  lastUsedAt: null,
                  createdAt: "2026-01-01T00:00:00.000Z",
                  value: "sazabi_secret_example"
                }
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/secret-keys",
          tags: ["Secret Keys"],
          operationId: "secretKeys.create",
          summary: "Create a secret key",
          description: "Create one secret key within the organization.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "secretKeys.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "rename-secret-key",
              input: {
                keyId: "33333333-3333-4333-8333-333333333333",
                name: "Updated CI agent"
              },
              output: {
                secretKey: {
                  id: "33333333-3333-4333-8333-333333333333",
                  projectId: null,
                  name: "Updated CI agent",
                  expiresAt: null,
                  lastUsedAt: null,
                  createdAt: "2026-01-01T00:00:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "PATCH",
          path: "/secret-keys/{keyId}",
          tags: ["Secret Keys"],
          operationId: "secretKeys.update",
          summary: "Update a secret key",
          description: "Update one secret key within the organization."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "secretKeys.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/secret-keys/{keyId}",
          tags: ["Secret Keys"],
          operationId: "secretKeys.delete",
          summary: "Delete a secret key",
          description: "Delete one secret key within the organization.",
          successStatus: 204,
          inputStructure: "detailed"
        }
      }
    }
  },
  projects: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "projects.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/projects",
          tags: ["Projects"],
          operationId: "projects.list",
          summary: "List projects",
          description: "List projects in an organization."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "projects.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/projects/{projectId}",
          tags: ["Projects"],
          operationId: "projects.get",
          summary: "Get a project",
          description: "Get one project by ID."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "projects.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/projects",
          tags: ["Projects"],
          operationId: "projects.create",
          summary: "Create a project",
          description: "Create one project in an organization.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "projects.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PATCH",
          path: "/projects/{projectId}",
          tags: ["Projects"],
          operationId: "projects.update",
          summary: "Update a project",
          description: "Update (rename) one project by ID. User credentials require the `settings:write` organization permission (admin or owner role)."
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "projects.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/projects/{projectId}",
          tags: ["Projects"],
          operationId: "projects.delete",
          summary: "Delete a project",
          description: "Delete one project by ID. User credentials require the `settings:write` organization permission (admin or owner role).",
          successStatus: 204
        }
      }
    }
  },
  search: {
    threads: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "search.threads",
          backend: "api",
          pagination: "page",
          async: "sync",
          examples: [
            {
              name: "search-open-incidents",
              input: {
                projectId: "11111111-1111-4111-8111-111111111111",
                query: "payment timeout",
                status: "regular",
                limit: 10,
                page: 1
              },
              output: {
                threads: [
                  {
                    id: "22222222-2222-4222-8222-222222222222",
                    projectId: "11111111-1111-4111-8111-111111111111",
                    title: "Payment timeout in us-west-2",
                    status: "regular",
                    labels: ["payments", "timeout"],
                    createdAt: "2026-01-01T00:00:00.000Z",
                    updatedAt: "2026-01-02T00:00:00.000Z",
                    highlights: ["payment timeout"],
                    score: 123.45
                  }
                ],
                pagination: {
                  page: 1,
                  limit: 10,
                  totalResults: 1,
                  totalPages: 1
                }
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/search/threads",
          tags: ["Search"],
          operationId: "search.threads",
          summary: "Search threads",
          description: "Search threads within one project."
        }
      }
    },
    messages: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "search.messages",
          backend: "api",
          pagination: "page",
          async: "sync",
          examples: [
            {
              name: "search-assistant-messages",
              input: {
                projectId: "11111111-1111-4111-8111-111111111111",
                query: "rollback",
                role: "assistant",
                limit: 10,
                page: 1
              },
              output: {
                messages: [
                  {
                    id: "33333333-3333-4333-8333-333333333333",
                    threadId: "22222222-2222-4222-8222-222222222222",
                    threadTitle: "Deployment rollback guidance",
                    role: "assistant",
                    content: "Rollback the ingestion deployment and confirm queue depth.",
                    createdAt: "2026-01-02T00:00:00.000Z",
                    updatedAt: "2026-01-02T00:00:00.000Z",
                    highlights: ["Rollback the ingestion deployment"],
                    score: 98.76
                  }
                ],
                pagination: {
                  page: 1,
                  limit: 10,
                  totalResults: 1,
                  totalPages: 1
                }
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/search/messages",
          tags: ["Search"],
          operationId: "search.messages",
          summary: "Search messages",
          description: "Search messages within one project."
        }
      }
    }
  },
  messages: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "messages.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: [
            {
              name: "thread-messages",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222",
                limit: 2
              },
              output: {
                messages: [
                  {
                    id: "33333333-3333-4333-8333-333333333333",
                    role: "user",
                    content: [
                      {
                        type: "message",
                        message: "What changed in the intake pipeline?"
                      }
                    ],
                    source: "api",
                    createdAt: "2026-01-01T00:00:00.000Z"
                  }
                ],
                nextCursor: null
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/threads/{threadId}/messages",
          tags: ["Messages"],
          operationId: "messages.list",
          summary: "List messages in a thread",
          description: "List messages in a thread with cursor pagination."
        }
      }
    },
    append: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "messages.append",
          backend: "api",
          pagination: "none",
          async: "deferred",
          examples: [
            {
              name: "append-processing",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222",
                message: "Follow up on the intake backlog.",
                wait: false,
                timeoutSeconds: 20
              },
              output: {
                completed: false,
                threadId: "22222222-2222-4222-8222-222222222222",
                runId: "33333333-3333-4333-8333-333333333333",
                status: "processing",
                response: null,
                failureClass: null,
                failureRetryable: null
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/threads/{threadId}/messages",
          tags: ["Messages"],
          operationId: "messages.append",
          summary: "Append a message to a thread",
          description: "Append a user message to an existing thread and trigger a deferred run.",
          successStatus: 201
        }
      }
    }
  },
  threads: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: [
            {
              name: "active-threads",
              input: {
                projectId: "11111111-1111-4111-8111-111111111111",
                status: "regular",
                limit: 10
              },
              output: {
                threads: [
                  {
                    id: "22222222-2222-4222-8222-222222222222",
                    projectId: "11111111-1111-4111-8111-111111111111",
                    title: "API returning 500s",
                    status: "regular",
                    source: "api",
                    createdAt: "2026-01-01T00:00:00.000Z",
                    updatedAt: "2026-01-01T00:05:00.000Z"
                  }
                ],
                nextCursor: null
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/threads",
          tags: ["Threads"],
          operationId: "threads.list",
          summary: "List threads",
          description: "List threads in a project, optionally filtered by status."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/threads/{threadId}",
          tags: ["Threads"],
          operationId: "threads.get",
          summary: "Get a thread",
          description: "Get a thread and its messages."
        }
      }
    },
    getStatus: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.getStatus",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "processing-thread",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222"
              },
              output: {
                status: "processing",
                lastRunStatus: null
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/threads/{threadId}/status",
          tags: ["Threads"],
          operationId: "threads.getStatus",
          summary: "Get a thread's status",
          description: "Get the current processing status for a thread."
        }
      }
    },
    stop: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.stop",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "stop-processing-thread",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222"
              },
              output: {
                success: true
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/threads/{threadId}/stop",
          tags: ["Threads"],
          operationId: "threads.stop",
          summary: "Stop a thread's run",
          description: "Stop a thread's in-flight run. Idempotent and best-effort: returns success even when the thread has no active run."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.create",
          backend: "api",
          pagination: "none",
          async: "deferred",
          examples: [
            {
              name: "async-handoff",
              input: {
                projectId: "11111111-1111-4111-8111-111111111111",
                message: "Investigate elevated 500s in production.",
                wait: false,
                timeoutSeconds: 20
              },
              output: {
                completed: false,
                threadId: "22222222-2222-4222-8222-222222222222",
                runId: "33333333-3333-4333-8333-333333333333",
                status: "processing",
                response: null,
                failureClass: null,
                failureRetryable: null
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/threads",
          tags: ["Threads"],
          operationId: "threads.create",
          summary: "Create a thread",
          description: "Create a thread with an initial message and optionally wait for the agent response.",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "archive-thread",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222",
                status: "archived"
              },
              output: {
                thread: {
                  id: "22222222-2222-4222-8222-222222222222",
                  projectId: "11111111-1111-4111-8111-111111111111",
                  title: "API returning 500s",
                  status: "archived",
                  source: "api",
                  createdAt: "2026-01-01T00:00:00.000Z",
                  updatedAt: "2026-01-01T00:10:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "PATCH",
          path: "/threads/{threadId}",
          tags: ["Threads"],
          operationId: "threads.update",
          summary: "Update a thread",
          description: "Update a thread's status."
        }
      }
    },
    fork: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.fork",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "fork-from-message",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222",
                messageId: "44444444-4444-4444-8444-444444444444"
              },
              output: {
                thread: {
                  id: "66666666-6666-4666-8666-666666666666",
                  projectId: "11111111-1111-4111-8111-111111111111",
                  title: "API returning 500s (fork)",
                  status: "regular",
                  source: "api",
                  createdAt: "2026-01-01T00:20:00.000Z",
                  updatedAt: "2026-01-01T00:20:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/threads/{threadId}/fork",
          tags: ["Threads"],
          operationId: "threads.fork",
          summary: "Fork a thread",
          description: "Fork a thread from a specific message, creating a new thread that copies messages up to that point.",
          successStatus: 201
        }
      }
    },
    setVisibility: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.setVisibility",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "make-private",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222",
                visibility: "private"
              },
              output: {
                thread: {
                  id: "22222222-2222-4222-8222-222222222222",
                  projectId: "11111111-1111-4111-8111-111111111111",
                  title: "API returning 500s",
                  status: "regular",
                  source: "api",
                  createdAt: "2026-01-01T00:00:00.000Z",
                  updatedAt: "2026-01-01T00:30:00.000Z"
                },
                visibility: "private"
              }
            }
          ]
        },
        route: {
          method: "PATCH",
          path: "/threads/{threadId}/visibility",
          tags: ["Threads"],
          operationId: "threads.setVisibility",
          summary: "Set a thread's visibility",
          description: "Set a thread's visibility to private or organization."
        }
      }
    },
    createShareLink: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.createShareLink",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "create-share-link",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222"
              },
              output: {
                share: {
                  shareId: "55555555-5555-4555-8555-555555555555",
                  threadId: "22222222-2222-4222-8222-222222222222",
                  url: "https://app.sazabi.com/share/55555555-5555-4555-8555-555555555555",
                  createdAt: "2026-01-01T00:40:00.000Z"
                }
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/threads/{threadId}/share",
          tags: ["Threads"],
          operationId: "threads.createShareLink",
          summary: "Create a thread share link",
          description: "Create a public read-only share link for a thread's current messages.",
          successStatus: 201
        }
      }
    },
    listShareLinks: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.listShareLinks",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "list-share-links",
              input: {
                threadId: "22222222-2222-4222-8222-222222222222"
              },
              output: {
                shares: [
                  {
                    shareId: "55555555-5555-4555-8555-555555555555",
                    threadId: "22222222-2222-4222-8222-222222222222",
                    url: "https://app.sazabi.com/share/55555555-5555-4555-8555-555555555555",
                    createdAt: "2026-01-01T00:40:00.000Z"
                  }
                ]
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/threads/{threadId}/share",
          tags: ["Threads"],
          operationId: "threads.listShareLinks",
          summary: "List thread share links",
          description: "List active public share links for a thread."
        }
      }
    },
    revokeShareLink: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "threads.revokeShareLink",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/threads/{threadId}/share/{shareId}",
          tags: ["Threads"],
          operationId: "threads.revokeShareLink",
          summary: "Revoke a thread share link",
          description: "Revoke a public share link for a thread.",
          successStatus: 204
        }
      }
    }
  },
  runs: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "runs.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/runs",
          tags: ["Runs"],
          operationId: "runs.list",
          summary: "List runs",
          description: "List deferred runs within one project."
        }
      }
    },
    listForThread: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "runs.listForThread",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/threads/{threadId}/runs",
          tags: ["Runs"],
          operationId: "runs.listForThread",
          summary: "List runs for a thread",
          description: "List deferred runs for one thread."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "runs.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "processing-run",
              input: {
                runId: "33333333-3333-4333-8333-333333333333"
              },
              output: {
                completed: false,
                threadId: "22222222-2222-4222-8222-222222222222",
                runId: "33333333-3333-4333-8333-333333333333",
                status: "processing",
                response: null,
                failureClass: null,
                failureRetryable: null
              }
            },
            {
              name: "failed-retryable-run",
              input: {
                runId: "44444444-4444-4444-8444-444444444444"
              },
              output: {
                completed: true,
                threadId: "22222222-2222-4222-8222-222222222222",
                runId: "44444444-4444-4444-8444-444444444444",
                status: "error",
                response: null,
                failureClass: "provider",
                failureRetryable: true
              }
            }
          ]
        },
        route: {
          method: "GET",
          path: "/runs/{runId}",
          tags: ["Runs"],
          operationId: "runs.get",
          summary: "Get a run",
          description: "Get the current result for a deferred run by run ID."
        }
      }
    },
    cancel: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "runs.cancel",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: [
            {
              name: "cancel-processing-run",
              input: {
                runId: "33333333-3333-4333-8333-333333333333"
              },
              output: {
                success: true
              }
            }
          ]
        },
        route: {
          method: "POST",
          path: "/runs/{runId}/cancel",
          tags: ["Runs"],
          operationId: "runs.cancel",
          summary: "Cancel a run",
          description: "Request cancellation of an in-flight run. Idempotent and best-effort: returns success even when the run has already reached a terminal status."
        }
      }
    }
  },
  pullRequests: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "pullRequests.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/pull-requests",
          tags: ["Pull Requests"],
          operationId: "pullRequests.list",
          summary: "List pull requests",
          description: "List pull requests that Sazabi opened, optionally filtered by status, repository, and requesting user."
        }
      }
    }
  },
  issues: {
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/issues",
          tags: ["Issues"],
          operationId: "issues.create",
          summary: "Create an issue",
          description: "Create an issue in a project, returning an existing open issue when root-cause deduplication finds a match.",
          successStatus: 201
        }
      }
    },
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/issues",
          tags: ["Issues"],
          operationId: "issues.list",
          summary: "List issues",
          description: "List issues in a project, optionally filtered by status and severity."
        }
      }
    },
    search: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.search",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/issues/search",
          tags: ["Issues"],
          operationId: "issues.search",
          summary: "Search issues",
          description: "Search issues in a project by ranked text over name and description, status, and severity."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/issues/{issueId}",
          tags: ["Issues"],
          operationId: "issues.get",
          summary: "Get an issue",
          description: "Get a single issue by ID."
        }
      }
    },
    getRejectionContext: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.getRejectionContext",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/issues/{issueId}/rejection",
          tags: ["Issues"],
          operationId: "issues.getRejectionContext",
          summary: "Get issue rejection eligibility",
          description: "Get the rejection deadline, cycle quota, and billing effect for an issue."
        }
      }
    },
    reject: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.reject",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/issues/{issueId}/reject",
          tags: ["Issues"],
          operationId: "issues.reject",
          summary: "Reject an issue",
          description: "Permanently reject an eligible issue and correct one issue usage unit."
        }
      }
    },
    resolve: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.resolve",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/issues/{issueId}/resolve",
          tags: ["Issues"],
          operationId: "issues.resolve",
          summary: "Resolve an issue",
          description: "Resolve an open issue."
        }
      }
    },
    ignore: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.ignore",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/issues/{issueId}/ignore",
          tags: ["Issues"],
          operationId: "issues.ignore",
          summary: "Ignore an issue",
          description: "Ignore an open issue."
        }
      }
    },
    reopen: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.reopen",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/issues/{issueId}/reopen",
          tags: ["Issues"],
          operationId: "issues.reopen",
          summary: "Reopen an issue",
          description: "Reopen a resolved or ignored issue."
        }
      }
    },
    reassignAndReopen: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.reassignAndReopen",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/issues/{issueId}/reassign-and-reopen",
          tags: ["Issues"],
          operationId: "issues.reassignAndReopen",
          summary: "Reassign and reopen an issue",
          description: "Atomically reassign a resolved or ignored issue to an active component and reopen it."
        }
      }
    },
    mute: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.mute",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/issues/{issueId}/mute",
          tags: ["Issues"],
          operationId: "issues.mute",
          summary: "Mute an issue",
          description: "Mute an issue, suppressing future re-fires without changing status."
        }
      }
    },
    unmute: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "issues.unmute",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/issues/{issueId}/unmute",
          tags: ["Issues"],
          operationId: "issues.unmute",
          summary: "Unmute an issue",
          description: "Unmute an issue, preserving its current status."
        }
      }
    }
  },
  workItems: {
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "work-items.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/work-items",
          tags: ["Work Items"],
          operationId: "work-items.create",
          summary: "Create a work item (deprecated)",
          description: "Deprecated alias for `POST /tasks` (create a task); removed in v2.0 (2027-03-01). Create a work item (e.g. a Linear issue) in a connected issue tracker, attributing the write to the requesting user.",
          successStatus: 201,
          deprecated: true
        }
      }
    },
    comment: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "work-items.comment",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/work-items/{itemId}/comment",
          tags: ["Work Items"],
          operationId: "work-items.comment",
          summary: "Comment on a work item (deprecated)",
          description: "Deprecated alias for `POST /tasks/{taskId}/comment` (comment on a task); removed in v2.0 (2027-03-01). Add a comment to an existing work item.",
          deprecated: true
        }
      }
    },
    transition: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "work-items.transition",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/work-items/{itemId}/transition",
          tags: ["Work Items"],
          operationId: "work-items.transition",
          summary: "Transition a work item (deprecated)",
          description: "Deprecated alias for `POST /tasks/{taskId}/transition` (transition a task); removed in v2.0 (2027-03-01). Move a work item to a target workflow state.",
          deprecated: true
        }
      }
    }
  },
  webhooks: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/webhooks",
          tags: ["Webhooks"],
          operationId: "webhooks.list",
          summary: "List webhook endpoints",
          description: "List webhook endpoints in the organization"
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/webhooks/{webhookId}",
          tags: ["Webhooks"],
          operationId: "webhooks.get",
          summary: "Get a webhook endpoint",
          description: "Get a webhook endpoint and its subscriptions"
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/webhooks",
          tags: ["Webhooks"],
          operationId: "webhooks.create",
          summary: "Create a webhook endpoint",
          description: "Create an endpoint and return its signing secret once",
          successStatus: 201
        }
      }
    },
    update: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.update",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PUT",
          path: "/webhooks/{webhookId}",
          tags: ["Webhooks"],
          operationId: "webhooks.update",
          summary: "Update a webhook endpoint",
          description: "Update endpoint metadata, URL, or static authentication header"
        }
      }
    },
    delete: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.delete",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/webhooks/{webhookId}",
          tags: ["Webhooks"],
          operationId: "webhooks.delete",
          summary: "Delete a webhook endpoint",
          description: "Tombstone an endpoint, its destinations, and its rules",
          successStatus: 204
        }
      }
    },
    rotateSecret: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.rotateSecret",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/webhooks/{webhookId}/rotate-secret",
          tags: ["Webhooks"],
          operationId: "webhooks.rotateSecret",
          summary: "Rotate a webhook signing secret",
          description: "Rotate and return the signing secret once"
        }
      }
    },
    enable: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.enable",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/webhooks/{webhookId}/enable",
          tags: ["Webhooks"],
          operationId: "webhooks.enable",
          summary: "Enable a webhook endpoint",
          description: "Re-enable an endpoint disabled after delivery failures"
        }
      }
    },
    test: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.test",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/webhooks/{webhookId}/test",
          tags: ["Webhooks"],
          operationId: "webhooks.test",
          summary: "Send a test webhook delivery",
          description: "Send a signed test envelope to an endpoint"
        }
      }
    },
    subscribe: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.subscribe",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/webhooks/{webhookId}/subscriptions",
          tags: ["Webhooks"],
          operationId: "webhooks.subscribe",
          summary: "Subscribe a webhook",
          description: "Create a project notification rule for a webhook",
          successStatus: 201
        }
      }
    },
    unsubscribe: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.unsubscribe",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/webhooks/{webhookId}/subscriptions/{subscriptionId}",
          tags: ["Webhooks"],
          operationId: "webhooks.unsubscribe",
          summary: "Unsubscribe a webhook",
          description: "Remove a project notification rule for a webhook",
          successStatus: 204
        }
      }
    },
    listDeliveries: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "webhooks.listDeliveries",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/webhooks/{webhookId}/deliveries",
          tags: ["Webhooks"],
          operationId: "webhooks.listDeliveries",
          summary: "List webhook deliveries",
          description: "List delivery history for an endpoint"
        }
      }
    }
  },
  billing: {
    getSummary: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.getSummary",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/summary",
          tags: ["Billing"],
          operationId: "billing.getSummary",
          summary: "Get billing summary",
          description: "Get a billing summary for the current organization, including plan, balance, and cycle information."
        }
      }
    },
    getUsage: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.getUsage",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/usage",
          tags: ["Billing"],
          operationId: "billing.getUsage",
          summary: "Get billing usage",
          description: "Get per-dimension usage breakdown for the current or previous billing cycle."
        }
      }
    },
    getAccruedUsageCharges: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.getAccruedUsageCharges",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/usage-charges/accrued",
          tags: ["Billing"],
          operationId: "billing.getAccruedUsageCharges",
          summary: "Get accrued usage charges",
          description: "Get usage charges accrued so far in the open billing cycle, priced under the cycle's plan terms. These settle on the cycle-end usage invoice."
        }
      }
    },
    listUsageInvoices: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.listUsageInvoices",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/usage-invoices",
          tags: ["Billing"],
          operationId: "billing.listUsageInvoices",
          summary: "List usage invoices",
          description: "List cycle-end usage invoices — the local settlement record, one per settled billing cycle, zero-total settlements included."
        }
      }
    },
    listTransactions: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.listTransactions",
          backend: "api",
          pagination: "page",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/transactions",
          tags: ["Billing"],
          operationId: "billing.listTransactions",
          summary: "List billing transactions",
          description: "List recent credit ledger transactions with pagination."
        }
      }
    },
    getAutoTopUp: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.getAutoTopUp",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/auto-top-up",
          tags: ["Billing"],
          operationId: "billing.getAutoTopUp",
          summary: "Get auto top-up settings",
          description: "Get the organization's credit auto top-up settings (trigger balance, top-up amount, cycle spending limit)."
        }
      }
    },
    updateAutoTopUp: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.updateAutoTopUp",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PUT",
          path: "/billing/auto-top-up",
          tags: ["Billing"],
          operationId: "billing.updateAutoTopUp",
          summary: "Update auto top-up settings",
          description: "Enable/disable and configure credit auto top-up. Requires a user credential with `billing:manage`."
        }
      }
    },
    purchaseCredits: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.purchaseCredits",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/billing/credits/purchase",
          tags: ["Billing"],
          operationId: "billing.purchaseCredits",
          summary: "Purchase credits",
          description: "Purchase a one-time amount of credits against the saved payment method. Requires a user credential with `billing:manage` and a stable idempotency key."
        }
      }
    },
    listPlans: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.listPlans",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/plans",
          tags: ["Billing"],
          operationId: "billing.listPlans",
          summary: "List plans",
          description: "List the self-serve credit plans available for checkout, including the current plan."
        }
      }
    },
    previewPlanChange: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.previewPlanChange",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/billing/plan-change/preview",
          tags: ["Billing"],
          operationId: "billing.previewPlanChange",
          summary: "Preview a plan change",
          description: "Preview the cost and effect of changing to a plan without applying it. Requires a user credential with `billing:manage`."
        }
      }
    },
    previewSubscriptionCancellation: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.previewSubscriptionCancellation",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/billing/subscription-cancellation/preview",
          tags: ["Billing"],
          operationId: "billing.previewSubscriptionCancellation",
          summary: "Preview subscription cancellation",
          description: "Preview period-end subscription cancellation without changing billing state."
        }
      }
    },
    scheduleSubscriptionCancellation: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.scheduleSubscriptionCancellation",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/billing/subscription-cancellation",
          tags: ["Billing"],
          operationId: "billing.scheduleSubscriptionCancellation",
          summary: "Schedule subscription cancellation",
          description: "Schedule cancellation at the end of the paid billing cycle."
        }
      }
    },
    resumeSubscriptionCancellation: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.resumeSubscriptionCancellation",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/billing/subscription-cancellation/resume",
          tags: ["Billing"],
          operationId: "billing.resumeSubscriptionCancellation",
          summary: "Resume subscription renewal",
          description: "Resume renewal before a scheduled cancellation takes effect."
        }
      }
    },
    changePlan: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.changePlan",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/billing/plan-change",
          tags: ["Billing"],
          operationId: "billing.changePlan",
          summary: "Change the plan",
          description: "Apply a plan upgrade or schedule a downgrade. Requires a user credential with `billing:manage`."
        }
      }
    },
    createCheckoutSession: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.createCheckoutSession",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/billing/checkout-session",
          tags: ["Billing"],
          operationId: "billing.createCheckoutSession",
          summary: "Create a checkout session",
          description: "Create a hosted Stripe Checkout session for first-time subscribe from the terminal. Requires a user credential with `billing:manage`."
        }
      }
    },
    getCheckoutSessionStatus: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.getCheckoutSessionStatus",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/checkout-session/{sessionId}",
          tags: ["Billing"],
          operationId: "billing.getCheckoutSessionStatus",
          summary: "Get checkout session status",
          description: "Poll the completion status of a checkout session created by this organization."
        }
      }
    },
    createPortalSession: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.createPortalSession",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/billing/portal-session",
          tags: ["Billing"],
          operationId: "billing.createPortalSession",
          summary: "Create a billing portal session",
          description: "Create a Stripe Customer Portal session for updating the payment method. Requires a user credential with `billing:manage`."
        }
      }
    },
    getPaymentMethod: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "billing.getPaymentMethod",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/billing/payment-method",
          tags: ["Billing"],
          operationId: "billing.getPaymentMethod",
          summary: "Get the payment method",
          description: "Get a summary of the organization's saved payment method (brand and last 4 digits)."
        }
      }
    }
  },
  tasks: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "tasks.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/tasks",
          tags: ["Onboarding Tasks"],
          operationId: "tasks.list",
          summary: "List onboarding tasks",
          description: "List all onboarding and setup tasks for a project, including their current completion status and a description of what is required to complete each task."
        }
      }
    },
    skip: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "tasks.skip",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/tasks/{taskId}/skip",
          tags: ["Onboarding Tasks"],
          operationId: "tasks.skip",
          summary: "Skip an onboarding task",
          description: "Record an organization-wide skip for an optional onboarding task. The skip is shared across surfaces and teammates; completing the task through any door still outranks a recorded skip. Idempotent — re-skipping keeps the original skip record."
        }
      }
    },
    unskip: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "tasks.unskip",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/tasks/{taskId}/unskip",
          tags: ["Onboarding Tasks"],
          operationId: "tasks.unskip",
          summary: "Reopen a skipped onboarding task",
          description: "Remove the organization-wide skip record for an onboarding task, reopening it in every onboarding walk. Idempotent — unskipping a task that is not skipped is a no-op."
        }
      }
    },
    create: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "tasks.create",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/tasks",
          tags: ["Tasks"],
          operationId: "tasks.create",
          summary: "Create a task",
          description: "Create a task (e.g. a Linear issue) in a connected external tracker, attributing the write to the requesting user.",
          successStatus: 201
        }
      }
    },
    comment: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "tasks.comment",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/tasks/{taskId}/comment",
          tags: ["Tasks"],
          operationId: "tasks.comment",
          summary: "Comment on a task",
          description: "Add a comment to an existing task."
        }
      }
    },
    transition: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "tasks.transition",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/tasks/{taskId}/transition",
          tags: ["Tasks"],
          operationId: "tasks.transition",
          summary: "Transition a task",
          description: "Move a task to a target workflow state."
        }
      }
    }
  },
  recommendations: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "recommendations.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/recommendations",
          tags: ["Recommendations"],
          operationId: "recommendations.list",
          summary: "List recommendations",
          description: "List a project's configuration recommendations (data sources, MCP connectors, sandbox CLIs, and integrations) with each item's live connection status."
        }
      }
    }
  },
  repos: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "repos.list",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/repos",
          tags: ["Repos"],
          operationId: "repos.list",
          summary: "List repositories",
          description: "List the repositories available to a project — every repository reachable through the organization's GitHub App installations, the caller's personal forge connections, and integrations — with each one's linked status."
        }
      }
    },
    add: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "repos.add",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/repos",
          tags: ["Repos"],
          operationId: "repos.add",
          summary: "Link repositories to a project",
          description: "Link repositories to a project by access source id. Select only one access source per repository; re-linking an already-linked repository refreshes its selected access source."
        }
      }
    },
    remove: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "repos.remove",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "DELETE",
          path: "/repos/{id}",
          tags: ["Repos"],
          operationId: "repos.remove",
          summary: "Unlink a repository from a project",
          description: "Unlink a repository from a project by repository row id.",
          successStatus: 204
        }
      }
    }
  },
  components: {
    list: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.list",
          backend: "api",
          pagination: "cursor",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/components",
          tags: ["Components"],
          operationId: "components.list",
          summary: "List components",
          description: "List status page components in a project."
        }
      }
    },
    get: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.get",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/components/{componentId}",
          tags: ["Components"],
          operationId: "components.get",
          summary: "Get a component",
          description: "Get a single component by ID."
        }
      }
    },
    register: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.register",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/components",
          tags: ["Components"],
          operationId: "components.register",
          summary: "Register a component",
          description: "Register a status page component in a project, or refresh an existing active component with the same name."
        }
      }
    },
    deregister: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.deregister",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/components/{componentId}/deregister",
          tags: ["Components"],
          operationId: "components.deregister",
          summary: "Deregister a component",
          description: "Withdraw this credential's component observation, or — for a human caller — preview the deregistration and confirm it by resubmitting with the previewed componentRevisions."
        }
      }
    },
    rename: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.rename",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/components/{componentId}/rename",
          tags: ["Components"],
          operationId: "components.rename",
          summary: "Rename a component",
          description: "Rename an active component while reserving its previous exact name as an alias."
        }
      }
    },
    assignTeam: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.assignTeam",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "PUT",
          path: "/components/{componentId}/team",
          tags: ["Components"],
          operationId: "components.assignTeam",
          summary: "Assign a component to a team",
          description: "Assign a component to an owning team, reassign it, or unassign it. A component is owned by at most one team."
        }
      }
    },
    reactivationPreview: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.reactivationPreview",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/components/{componentId}/reactivation/preview",
          tags: ["Components"],
          operationId: "components.reactivationPreview",
          summary: "Preview a component reactivation",
          description: "Preview unchanged deregistration-owned dependents that remain eligible for explicit reactivation."
        }
      }
    },
    reactivate: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.reactivate",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/components/{componentId}/reactivate",
          tags: ["Components"],
          operationId: "components.reactivate",
          summary: "Reactivate a component",
          description: "Reactivate an inactive canonical component and only the explicitly selected eligible dependents. Prior rules, automations, and relationships stay detached unless explicitly selected."
        }
      }
    },
    mergePreview: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.mergePreview",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/components/merge/preview",
          tags: ["Components"],
          operationId: "components.mergePreview",
          summary: "Preview a component merge",
          description: "Preview one-hop redirects, historical preservation, operational rebinding, topology contraction, and policy dispositions for component consolidation."
        }
      }
    },
    merge: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.merge",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "POST",
          path: "/components/merge",
          tags: ["Components"],
          operationId: "components.merge",
          summary: "Merge a component",
          description: "Consolidate a source into an active terminal target without rewriting historical issue or observation attribution."
        }
      }
    },
    relationships: {
      list: {
        "~orpc": {
          errorMap: {},
          meta: {
            operationId: "components.relationships.list",
            backend: "api",
            pagination: "none",
            async: "sync",
            examples: []
          },
          route: {
            method: "GET",
            path: "/components/relationships",
            tags: ["Components"],
            operationId: "components.relationships.list",
            summary: "List component relationships",
            description: "List active or historical component topology edges."
          }
        }
      },
      preview: {
        "~orpc": {
          errorMap: {},
          meta: {
            operationId: "components.relationships.preview",
            backend: "api",
            pagination: "none",
            async: "sync",
            examples: []
          },
          route: {
            method: "POST",
            path: "/components/relationships/preview",
            tags: ["Components"],
            operationId: "components.relationships.preview",
            summary: "Preview a component relationship change",
            description: "Preview descendant-scoped notification and automation impact for a topology change."
          }
        }
      },
      add: {
        "~orpc": {
          errorMap: {},
          meta: {
            operationId: "components.relationships.add",
            backend: "api",
            pagination: "none",
            async: "sync",
            examples: []
          },
          route: {
            method: "POST",
            path: "/components/relationships",
            tags: ["Components"],
            operationId: "components.relationships.add",
            summary: "Add a component relationship",
            description: "Add a confirmed, tenant-safe component topology edge."
          }
        }
      },
      remove: {
        "~orpc": {
          errorMap: {},
          meta: {
            operationId: "components.relationships.remove",
            backend: "api",
            pagination: "none",
            async: "sync",
            examples: []
          },
          route: {
            method: "POST",
            path: "/components/relationships/remove",
            tags: ["Components"],
            operationId: "components.relationships.remove",
            summary: "Remove a component relationship",
            description: "Historically end a confirmed component topology edge."
          }
        }
      }
    },
    incidents: {
      list: {
        "~orpc": {
          errorMap: {},
          meta: {
            operationId: "components.incidents.list",
            backend: "api",
            pagination: "cursor",
            async: "sync",
            examples: []
          },
          route: {
            method: "GET",
            path: "/status-incidents",
            tags: ["Components"],
            operationId: "components.incidents.list",
            summary: "List status-page issues",
            description: "List status-page issues in a project."
          }
        }
      }
    },
    timeline: {
      "~orpc": {
        errorMap: {},
        meta: {
          operationId: "components.timeline",
          backend: "api",
          pagination: "none",
          async: "sync",
          examples: []
        },
        route: {
          method: "GET",
          path: "/components/{componentId}/timeline",
          tags: ["Components"],
          operationId: "components.timeline",
          summary: "Get a component status timeline",
          description: "Get the dense status timeline and incidents for a component over a time window."
        }
      }
    }
  }
};

// src/index.ts
var DEFAULT_API_BASE_URL2 = "https://api.sazabi.com";
var DEFAULT_AUTH_API_BASE_URL = "https://api.platform.sazabi.com";
var DEFAULT_DEVICE_CLIENT_ID = "sazabi-cli";
var DEVICE_CODE_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:device_code";
var createClient = (options) => {
  const raw = createORPCClient(new OpenAPILink(public_api_client_contract_gen_default, {
    url: withApiVersion2(options.apiBaseUrl ?? DEFAULT_API_BASE_URL2),
    headers: async () => {
      const headers = new Headers({
        authorization: `Bearer ${await options.credentialProvider.getToken()}`
      });
      if (options.clientSource) {
        headers.set("x-sazabi-client-source", options.clientSource);
      }
      if (options.clientVersion) {
        headers.set("x-sazabi-client-version", options.clientVersion);
      }
      if (options.sandboxActorDescriptor) {
        headers.set("x-sazabi-sandbox-actor", options.sandboxActorDescriptor);
      }
      return headers;
    },
    fetch: options.fetch,
    customErrorResponseBodyDecoder: (body, response) => {
      const apiError = toApiErrorPayload(body);
      if (!apiError) {
        return null;
      }
      return new ORPCError2(apiError.code, {
        message: apiError.message,
        status: response.status,
        data: {
          ...apiError.details,
          operationId: apiError.operationId,
          missingContext: apiError.missingContext,
          ...apiError.reason !== undefined ? { reason: apiError.reason } : {},
          ...apiError.entitlementId !== undefined ? { entitlementId: apiError.entitlementId } : {},
          ...apiError.planSlug !== undefined ? { planSlug: apiError.planSlug } : {},
          ...apiError.limit !== undefined ? { limit: apiError.limit } : {},
          ...apiError.current !== undefined ? { current: apiError.current } : {},
          ...apiError.actionPath !== undefined ? { actionPath: apiError.actionPath } : {},
          ...apiError.retryAfterSeconds !== undefined ? { retryAfterSeconds: apiError.retryAfterSeconds } : {},
          ...apiError.issues !== undefined ? { issues: apiError.issues } : {},
          ...apiError.diagnostics !== undefined ? { diagnostics: apiError.diagnostics } : {},
          ...apiError.currentRevision !== undefined ? { currentRevision: apiError.currentRevision } : {}
        }
      });
    }
  }));
  const logs = createLogTransports({
    raw,
    credentialProvider: options.credentialProvider,
    fetch: options.fetch,
    apiBaseUrl: options.apiBaseUrl ?? DEFAULT_API_BASE_URL2,
    intakeBaseUrl: options.intakeBaseUrl,
    tailBaseUrl: options.tailBaseUrl
  });
  const agentStreams = createAgentStreamTransports({
    credentialProvider: options.credentialProvider,
    fetch: options.fetch,
    apiBaseUrl: options.apiBaseUrl ?? DEFAULT_API_BASE_URL2,
    clientSource: options.clientSource,
    clientVersion: options.clientVersion
  });
  const createTrackerTask = async (input, operationId) => raw.tasks.create(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, operationId));
  const commentOnTrackerTask = async (input, operationId) => raw.tasks.comment(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, operationId));
  const transitionTrackerTask = async (input, operationId) => raw.tasks.transition(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, operationId));
  return {
    raw,
    me: async () => raw.me({}),
    artifacts: {
      list: async (input = {}) => raw.artifacts.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      listIssueArtifacts: async (input) => raw.artifacts.listIssueArtifacts(input),
      get: async (input) => raw.artifacts.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      download: async (input) => raw.artifacts.download(await resolveProjectScopedInput(options.credentialProvider, input)),
      delete: async (input) => raw.artifacts.delete(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    automations: {
      list: async (input = {}) => raw.automations.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.automations.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      create: async (input) => raw.automations.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.automations.update(await resolveProjectScopedInput(options.credentialProvider, input)),
      enable: async (input) => raw.automations.enable(await resolveProjectScopedInput(options.credentialProvider, input)),
      disable: async (input) => raw.automations.disable(await resolveProjectScopedInput(options.credentialProvider, input)),
      delete: async (input) => raw.automations.delete(await resolveProjectScopedInput(options.credentialProvider, input)),
      runs: {
        list: async (input) => raw.automations.runs.list(await resolveProjectScopedInput(options.credentialProvider, input)),
        get: async (input) => raw.automations.runs.get(await resolveProjectScopedInput(options.credentialProvider, input)),
        logs: async (input) => raw.automations.runs.logs(await resolveProjectScopedInput(options.credentialProvider, input))
      }
    },
    automationTemplates: {
      list: () => raw.automationTemplates.list({})
    },
    dashboards: {
      list: async (input = {}) => raw.dashboards.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "dashboards.list")),
      get: async (input) => raw.dashboards.get(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "dashboards.get")),
      validate: async (input) => raw.dashboards.validate(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "dashboards.validate")),
      create: async (input) => raw.dashboards.create(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "dashboards.create")),
      update: async (input) => raw.dashboards.update(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "dashboards.update")),
      render: async (input) => raw.dashboards.render(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "dashboards.render")),
      delete: async (input) => raw.dashboards.delete(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "dashboards.delete"))
    },
    logs: {
      ...logs,
      ask: async (input) => raw.logs.ask(await resolveProjectScopedInput(options.credentialProvider, input)),
      executeQuery: async (input) => raw.logs.executeQuery(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "logs.executeQuery"))
    },
    onboarding: {
      getState: async (input = {}) => raw.onboarding.getState(await resolveOrganizationScopedInput(options.credentialProvider, await resolveProjectScopedInput(options.credentialProvider, input))),
      skipSampleIssue: async (input) => raw.onboarding.skipSampleIssue(await resolveOrganizationScopedInput(options.credentialProvider, input ?? {})),
      skipIntegration: async (input) => raw.onboarding.skipIntegration(await resolveOnboardingSkipInput(options.credentialProvider, input)),
      skipGithubAppInstallation: async (input) => raw.onboarding.skipGithubAppInstallation(await resolveOnboardingSkipInput(options.credentialProvider, input ?? {})),
      continueWithFree: async (input) => raw.onboarding.continueWithFree(await resolveOrganizationScopedInput(options.credentialProvider, input ?? {})),
      ensureDefaultProject: async (input) => raw.onboarding.ensureDefaultProject(await resolveOrganizationScopedInput(options.credentialProvider, input ?? {})),
      completeSampleIssue: async (input) => raw.onboarding.completeSampleIssue(await resolveOrganizationScopedInput(options.credentialProvider, input ?? {})),
      finish: async (input) => raw.onboarding.finish(input)
    },
    organizations: {
      list: async () => raw.organizations.list({}),
      get: async (input) => raw.organizations.get(input),
      create: async (input) => raw.organizations.create(input),
      update: async (input) => raw.organizations.update(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "organizations.update"))
    },
    members: {
      list: async (input = {}) => raw.members.list(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "members.list")),
      updateRole: async (input) => raw.members.updateRole(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "members.updateRole")),
      remove: async (input) => {
        const resolvedInput = await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "members.remove");
        return raw.members.remove({
          params: {
            member: resolvedInput.member
          },
          query: {
            organizationId: resolvedInput.organizationId
          }
        });
      },
      invite: async (input) => raw.members.invite(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "members.invite")),
      listInvitations: async (input = {}) => raw.members.listInvitations(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "members.listInvitations")),
      revokeInvitation: async (input) => {
        const resolvedInput = await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "members.revokeInvitation");
        return raw.members.revokeInvitation({
          params: {
            invitationId: resolvedInput.invitationId
          },
          query: {
            organizationId: resolvedInput.organizationId
          }
        });
      }
    },
    teams: {
      list: async (input = {}) => raw.teams.list(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "teams.list")),
      create: async (input) => raw.teams.create(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "teams.create")),
      update: async (input) => raw.teams.update(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "teams.update")),
      delete: async (input) => {
        const resolvedInput = await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "teams.delete");
        return raw.teams.delete({
          params: {
            teamId: resolvedInput.teamId
          },
          query: {
            organizationId: resolvedInput.organizationId
          }
        });
      },
      addMember: async (input) => raw.teams.addMember(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "teams.addMember")),
      removeMember: async (input) => {
        const resolvedInput = await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "teams.removeMember");
        return raw.teams.removeMember({
          params: {
            teamId: resolvedInput.teamId,
            userId: resolvedInput.userId
          },
          query: {
            organizationId: resolvedInput.organizationId
          }
        });
      },
      listMembers: async (input) => raw.teams.listMembers(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "teams.listMembers"))
    },
    publicKeys: {
      list: async (input = {}) => raw.publicKeys.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.publicKeys.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      ensureLogForwarding: async (input = {}) => raw.publicKeys.ensureLogForwarding(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.publicKeys.update(await resolveProjectScopedInput(options.credentialProvider, input)),
      deactivate: async (input) => {
        const resolvedInput = await resolveProjectScopedInput(options.credentialProvider, input);
        return raw.publicKeys.deactivate({
          params: {
            keyId: resolvedInput.keyId
          },
          query: {
            projectId: resolvedInput.projectId
          }
        });
      }
    },
    secretKeys: {
      list: async (input = {}) => raw.secretKeys.list(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "secretKeys.list")),
      get: async (input) => raw.secretKeys.get(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "secretKeys.get")),
      create: async (input) => raw.secretKeys.create(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "secretKeys.create")),
      update: async (input) => raw.secretKeys.update(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "secretKeys.update")),
      delete: async (input) => {
        const { organizationId } = await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "secretKeys.delete");
        await raw.secretKeys.delete({
          params: {
            keyId: input.keyId
          },
          query: { organizationId }
        });
      }
    },
    search: {
      threads: async (input) => raw.search.threads(await resolveProjectScopedInput(options.credentialProvider, input)),
      messages: async (input) => raw.search.messages(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    projects: {
      list: async (input = {}) => raw.projects.list(await resolveListProjectsInput(options.credentialProvider, input)),
      get: async (input) => raw.projects.get(input),
      create: async (input) => raw.projects.create(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "projects.create")),
      update: async (input) => raw.projects.update(input),
      delete: async (input) => raw.projects.delete(input)
    },
    messages: {
      list: async (input) => raw.messages.list(input),
      append: async (input) => createDeferredHandle(raw, await raw.messages.append(resolveAppendMessageInput(input)))
    },
    threads: {
      list: async (input = {}) => raw.threads.list(await resolveListThreadsInput(options.credentialProvider, input)),
      get: async (input) => raw.threads.get(input),
      getStatus: async (input) => raw.threads.getStatus(input),
      stop: async (input) => raw.threads.stop(input),
      create: async (input) => createDeferredHandle(raw, await raw.threads.create(await resolveCreateThreadInput(options.credentialProvider, input))),
      update: async (input) => raw.threads.update(input),
      fork: async (input) => raw.threads.fork(input),
      setVisibility: async (input) => raw.threads.setVisibility(input),
      createShareLink: async (input) => raw.threads.createShareLink(input),
      listShareLinks: async (input) => raw.threads.listShareLinks(input),
      revokeShareLink: async (input) => raw.threads.revokeShareLink(input),
      stream: async (input) => agentStreams.streamThread(input)
    },
    runs: {
      list: async (input = {}) => raw.runs.list(await resolveListRunsInput(options.credentialProvider, input)),
      listForThread: async (input) => raw.runs.listForThread(input),
      get: async (input) => raw.runs.get(input),
      cancel: async (input) => raw.runs.cancel(input),
      stream: async (input) => agentStreams.streamRun(input)
    },
    logSources: {
      listProviders: async () => raw.logSources.listProviders({}),
      list: async (input = {}) => raw.logSources.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.logSources.get(input),
      create: async (input) => raw.logSources.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.logSources.update(input),
      delete: async (input) => raw.logSources.delete(input),
      verify: async (input) => raw.logSources.verify(input)
    },
    logStreams: {
      list: async (input) => raw.logStreams.list(input),
      get: async (input) => raw.logStreams.get(input),
      create: async (input) => raw.logStreams.create(input),
      update: async (input) => raw.logStreams.update(input),
      delete: async (input) => raw.logStreams.delete(input),
      reassign: async (input) => raw.logStreams.reassign(input),
      createBatch: async (input) => raw.logStreams.createBatch(input),
      volumeStats: async (input) => raw.logStreams.volumeStats(input)
    },
    connectedAccounts: {
      beginConnect: async (input) => raw.connectedAccounts.beginConnect(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "connectedAccounts.beginConnect")),
      getConnectAttempt: async (input) => raw.connectedAccounts.getConnectAttempt(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "connectedAccounts.getConnectAttempt")),
      list: async (input = {}) => raw.connectedAccounts.list(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "connectedAccounts.list")),
      disconnect: async (input) => raw.connectedAccounts.disconnect(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "connectedAccounts.disconnect"))
    },
    integrations: {
      listProviders: async (input = {}) => raw.integrations.listProviders(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.listProviders")),
      listConnections: async (input = {}) => raw.integrations.listConnections(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.listConnections")),
      getConnection: async (input) => raw.integrations.getConnection(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.getConnection")),
      createConnection: async (input) => raw.integrations.createConnection(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.createConnection")),
      beginConnect: async (input) => raw.integrations.beginConnect(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.beginConnect")),
      getConnectAttempt: async (input) => raw.integrations.getConnectAttempt(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.getConnectAttempt")),
      disconnectConnection: async (input) => raw.integrations.disconnectConnection(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.disconnectConnection")),
      updateConnectionCredentials: async (input) => raw.integrations.updateConnectionCredentials(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.updateConnectionCredentials")),
      createSlackChannel: async (input) => raw.integrations.createSlackChannel(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.createSlackChannel")),
      getActiveCLIAttempt: async (input) => raw.integrations.getActiveCLIAttempt(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.getActiveCLIAttempt")),
      getLinearAutomationConfiguration: async (input) => raw.integrations.getLinearAutomationConfiguration(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.getLinearAutomationConfiguration")),
      updateLinearAutomationConfiguration: async (input) => raw.integrations.updateLinearAutomationConfiguration(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.updateLinearAutomationConfiguration")),
      getOrganizationExternalIdentityJitPolicy: async (input = {}) => raw.integrations.getOrganizationExternalIdentityJitPolicy(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.getOrganizationExternalIdentityJitPolicy")),
      updateOrganizationExternalIdentityJitPolicy: async (input) => raw.integrations.updateOrganizationExternalIdentityJitPolicy(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.updateOrganizationExternalIdentityJitPolicy")),
      getConnectionExternalIdentityJitPolicy: async (input) => raw.integrations.getConnectionExternalIdentityJitPolicy(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.getConnectionExternalIdentityJitPolicy")),
      updateConnectionExternalIdentityJitPolicy: async (input) => raw.integrations.updateConnectionExternalIdentityJitPolicy(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.updateConnectionExternalIdentityJitPolicy")),
      getMicrosoftTeamsAdminConsent: async (input) => raw.integrations.getMicrosoftTeamsAdminConsent(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.getMicrosoftTeamsAdminConsent")),
      getSlackConfiguration: async (input) => raw.integrations.getSlackConfiguration(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.getSlackConfiguration")),
      updateSlackConfiguration: async (input) => raw.integrations.updateSlackConfiguration(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.updateSlackConfiguration")),
      listSlackChannelProjectMappings: async (input) => raw.integrations.listSlackChannelProjectMappings(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.listSlackChannelProjectMappings")),
      setSlackChannelProjectMapping: async (input) => raw.integrations.setSlackChannelProjectMapping(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.setSlackChannelProjectMapping")),
      deleteSlackChannelProjectMapping: async (input) => raw.integrations.deleteSlackChannelProjectMapping(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "integrations.deleteSlackChannelProjectMapping"))
    },
    mcpConnectors: {
      list: async (input = {}) => raw.mcpConnectors.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.mcpConnectors.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      details: async (input) => raw.mcpConnectors.details(await resolveProjectScopedInput(options.credentialProvider, input)),
      listProviders: async () => raw.mcpConnectors.listProviders({}),
      search: async (input = {}) => raw.mcpConnectors.search(await resolveProjectScopedInput(options.credentialProvider, input)),
      describe: async (input) => raw.mcpConnectors.describe(await resolveProjectScopedInput(options.credentialProvider, input)),
      call: async (input) => raw.mcpConnectors.call(await resolveProjectScopedInput(options.credentialProvider, input)),
      create: async (input) => raw.mcpConnectors.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.mcpConnectors.update(await resolveProjectScopedInput(options.credentialProvider, input)),
      disconnect: async (input) => {
        await raw.mcpConnectors.disconnect(await resolveProjectScopedInput(options.credentialProvider, input));
      },
      setReadOnly: async (input) => raw.mcpConnectors.setReadOnly(await resolveProjectScopedInput(options.credentialProvider, input)),
      beginOAuthInstall: async (input) => raw.mcpConnectors.beginOAuthInstall(await resolveProjectScopedInput(options.credentialProvider, input)),
      getOAuthInstallAttempt: async (input) => raw.mcpConnectors.getOAuthInstallAttempt(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    sandboxEnvironmentVariables: {
      delete: async (input) => raw.sandboxEnvironmentVariables.delete(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.sandboxEnvironmentVariables.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      list: async (input = {}) => raw.sandboxEnvironmentVariables.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      upsert: async (input) => raw.sandboxEnvironmentVariables.upsert(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    sandboxInitScript: {
      get: async (input = {}) => raw.sandboxInitScript.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      upsert: async (input) => raw.sandboxInitScript.upsert(await resolveProjectScopedInput(options.credentialProvider, input)),
      delete: async (input = {}) => raw.sandboxInitScript.delete(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    sandboxClis: {
      delete: async (input) => raw.sandboxClis.deleteCli(await resolveProjectScopedInput(options.credentialProvider, input)),
      listConnections: async (input = {}) => raw.sandboxClis.listConnections(await resolveProjectScopedInput(options.credentialProvider, input)),
      listTypes: async () => raw.sandboxClis.listTypes({}),
      test: async (input) => raw.sandboxClis.testCli(await resolveProjectScopedInput(options.credentialProvider, input)),
      upsert: async (input) => raw.sandboxClis.upsertCli(await resolveProjectScopedInput(options.credentialProvider, input)),
      verify: async (input) => raw.sandboxClis.verify(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    memory: {
      list: async (input = {}) => raw.memory.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.memory.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      put: async (input) => raw.memory.put(await resolveProjectScopedInput(options.credentialProvider, input)),
      create: async (input) => raw.memory.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.memory.update(await resolveProjectScopedInput(options.credentialProvider, input)),
      search: async (input) => raw.memory.search(await resolveProjectScopedInput(options.credentialProvider, input)),
      delete: async (input) => raw.memory.delete(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    supportTickets: {
      create: async (input) => raw.supportTickets.create(await resolveProjectScopedInput(options.credentialProvider, await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "supportTickets.create"))),
      availability: async () => raw.supportTickets.availability({})
    },
    signalDefinitions: {
      list: async (input = {}) => raw.signalDefinitions.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.signalDefinitions.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      create: async (input) => raw.signalDefinitions.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.signalDefinitions.update(await resolveProjectScopedInput(options.credentialProvider, input)),
      disable: async (input) => raw.signalDefinitions.disable(await resolveProjectScopedInput(options.credentialProvider, input)),
      delete: async (input) => raw.signalDefinitions.delete(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    scripts: {
      list: async (input = {}) => raw.scripts.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.scripts.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      create: async (input) => raw.scripts.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.scripts.update(await resolveProjectScopedInput(options.credentialProvider, input)),
      delete: async (input) => raw.scripts.delete(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    issues: {
      create: async (input) => raw.issues.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      list: async (input = {}) => raw.issues.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      search: async (input = {}) => raw.issues.search(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.issues.get(input),
      getRejectionContext: async (input) => raw.issues.getRejectionContext(input),
      reject: async (input) => raw.issues.reject(input),
      resolve: async (input) => raw.issues.resolve(input),
      ignore: async (input) => raw.issues.ignore(input),
      reopen: async (input) => raw.issues.reopen(input),
      mute: async (input) => raw.issues.mute(input),
      unmute: async (input) => raw.issues.unmute(input),
      reassignAndReopen: async (input) => raw.issues.reassignAndReopen(input)
    },
    workItems: {
      create: async (input) => raw.workItems.create(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "work-items.create")),
      comment: async (input) => raw.workItems.comment(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "work-items.comment")),
      transition: async (input) => raw.workItems.transition(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "work-items.transition"))
    },
    pullRequests: {
      list: async (input = {}) => raw.pullRequests.list(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    components: {
      list: async (input = {}) => raw.components.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.components.get(input),
      register: async (input) => raw.components.register(await resolveProjectScopedInput(options.credentialProvider, input)),
      deregister: async (input) => raw.components.deregister(input),
      rename: async (input) => raw.components.rename(input),
      assignTeam: async (input) => raw.components.assignTeam(input),
      reactivationPreview: async (input) => raw.components.reactivationPreview(input),
      reactivate: async (input) => raw.components.reactivate(input),
      mergePreview: async (input) => raw.components.mergePreview(await resolveProjectScopedInput(options.credentialProvider, input)),
      merge: async (input) => raw.components.merge(await resolveProjectScopedInput(options.credentialProvider, input)),
      relationships: {
        list: async (input = {}) => raw.components.relationships.list(await resolveProjectScopedInput(options.credentialProvider, input)),
        preview: async (input) => raw.components.relationships.preview(await resolveProjectScopedInput(options.credentialProvider, input)),
        add: async (input) => raw.components.relationships.add(await resolveProjectScopedInput(options.credentialProvider, input)),
        remove: async (input) => raw.components.relationships.remove(await resolveProjectScopedInput(options.credentialProvider, input))
      },
      incidents: {
        list: async (input = {}) => raw.components.incidents.list(await resolveProjectScopedInput(options.credentialProvider, input))
      },
      timeline: async (input) => raw.components.timeline(input)
    },
    billing: {
      getSummary: async (input = {}) => raw.billing.getSummary(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.getSummary")),
      getUsage: async (input = {}) => raw.billing.getUsage(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.getUsage")),
      getAccruedUsageCharges: async (input = {}) => raw.billing.getAccruedUsageCharges(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.getAccruedUsageCharges")),
      listUsageInvoices: async (input = {}) => raw.billing.listUsageInvoices(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.listUsageInvoices")),
      listTransactions: async (input = {}) => raw.billing.listTransactions(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.listTransactions")),
      previewSubscriptionCancellation: async (input = {}) => raw.billing.previewSubscriptionCancellation(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.previewSubscriptionCancellation")),
      scheduleSubscriptionCancellation: async (input = {}) => raw.billing.scheduleSubscriptionCancellation(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.scheduleSubscriptionCancellation")),
      resumeSubscriptionCancellation: async (input = {}) => raw.billing.resumeSubscriptionCancellation(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.resumeSubscriptionCancellation")),
      getAutoTopUp: async (input = {}) => raw.billing.getAutoTopUp(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.getAutoTopUp")),
      updateAutoTopUp: async (input) => raw.billing.updateAutoTopUp(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.updateAutoTopUp")),
      purchaseCredits: async (input) => raw.billing.purchaseCredits(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.purchaseCredits")),
      listPlans: async (input = {}) => raw.billing.listPlans(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.listPlans")),
      previewPlanChange: async (input) => raw.billing.previewPlanChange(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.previewPlanChange")),
      changePlan: async (input) => raw.billing.changePlan(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.changePlan")),
      createCheckoutSession: async (input) => raw.billing.createCheckoutSession(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.createCheckoutSession")),
      getCheckoutSessionStatus: async (input) => raw.billing.getCheckoutSessionStatus(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.getCheckoutSessionStatus")),
      createPortalSession: async (input = {}) => raw.billing.createPortalSession(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.createPortalSession")),
      getPaymentMethod: async (input = {}) => raw.billing.getPaymentMethod(await resolveRequiredOrganizationScopedInput(options.credentialProvider, input, "billing.getPaymentMethod"))
    },
    tasks: {
      list: async (input = {}) => raw.tasks.list(await resolveRequiredProjectScopedInput(options.credentialProvider, input, "tasks.list")),
      skip: async (input) => raw.tasks.skip(await resolveOrganizationScopedInput(options.credentialProvider, await resolveProjectScopedInput(options.credentialProvider, input))),
      unskip: async (input) => raw.tasks.unskip(await resolveOrganizationScopedInput(options.credentialProvider, await resolveProjectScopedInput(options.credentialProvider, input))),
      create: async (input) => createTrackerTask(input, "tasks.create"),
      comment: async (input) => commentOnTrackerTask(input, "tasks.comment"),
      transition: async (input) => transitionTrackerTask(input, "tasks.transition")
    },
    recommendations: {
      list: async (input = {}) => raw.recommendations.list(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    repos: {
      list: async (input = {}) => raw.repos.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      add: async (input) => raw.repos.add(await resolveProjectScopedInput(options.credentialProvider, input)),
      remove: async (input) => raw.repos.remove(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    notificationDeliveryRules: {
      list: async (input = {}) => raw.notificationDeliveryRules.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      options: async (input = {}) => raw.notificationDeliveryRules.options(await resolveProjectScopedInput(options.credentialProvider, input)),
      create: async (input) => raw.notificationDeliveryRules.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.notificationDeliveryRules.update(await resolveProjectScopedInput(options.credentialProvider, input)),
      delete: async (input) => raw.notificationDeliveryRules.delete(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    taskCreationRules: {
      list: async (input = {}) => raw.taskCreationRules.list(await resolveProjectScopedInput(options.credentialProvider, input)),
      get: async (input) => raw.taskCreationRules.get(await resolveProjectScopedInput(options.credentialProvider, input)),
      create: async (input) => raw.taskCreationRules.create(await resolveProjectScopedInput(options.credentialProvider, input)),
      update: async (input) => raw.taskCreationRules.update(await resolveProjectScopedInput(options.credentialProvider, input)),
      delete: async (input) => raw.taskCreationRules.delete(await resolveProjectScopedInput(options.credentialProvider, input)),
      reorder: async (input) => raw.taskCreationRules.reorder(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    notificationChannels: {
      getProject: async (input = {}) => raw.notificationChannels.getProject(await resolveProjectScopedInput(options.credentialProvider, input))
    },
    webhooks: {
      list: async () => raw.webhooks.list({}),
      get: async (input) => raw.webhooks.get(input),
      create: async (input) => raw.webhooks.create(input),
      update: async (input) => raw.webhooks.update(input),
      delete: async (input) => raw.webhooks.delete(input),
      rotateSecret: async (input) => raw.webhooks.rotateSecret(input),
      enable: async (input) => raw.webhooks.enable(input),
      test: async (input) => raw.webhooks.test(input),
      subscribe: async (input) => raw.webhooks.subscribe(await resolveProjectScopedInput(options.credentialProvider, input)),
      unsubscribe: async (input) => raw.webhooks.unsubscribe(input),
      listDeliveries: async (input) => raw.webhooks.listDeliveries(input)
    }
  };
};
var startDeviceAuthorization = async (options = {}) => {
  const response = await getFetch(options.fetch)(withAuthPath(options.apiBaseUrl ?? DEFAULT_AUTH_API_BASE_URL, "/device/code"), {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      client_id: options.clientId ?? DEFAULT_DEVICE_CLIENT_ID,
      ...options.scope ? { scope: options.scope } : {}
    })
  });
  const payload = await response.json();
  if (!response.ok) {
    throw toDeviceAuthorizationError(payload, response.status);
  }
  const body = payload;
  return {
    deviceCode: expectString(body.device_code, "device_code"),
    userCode: expectString(body.user_code, "user_code"),
    verificationUri: expectString(body.verification_uri, "verification_uri"),
    verificationUriComplete: expectString(body.verification_uri_complete, "verification_uri_complete"),
    expiresIn: expectNumber(body.expires_in, "expires_in"),
    interval: expectNumber(body.interval, "interval")
  };
};
var pollDeviceAuthorization = async (options) => {
  const response = await getFetch(options.fetch)(withAuthPath(options.apiBaseUrl ?? DEFAULT_AUTH_API_BASE_URL, "/device/token"), {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      grant_type: DEVICE_CODE_GRANT_TYPE,
      device_code: options.deviceCode,
      client_id: options.clientId ?? DEFAULT_DEVICE_CLIENT_ID
    })
  });
  const payload = await response.json();
  if (response.ok) {
    const body = payload;
    return {
      status: "authorized",
      accessToken: expectString(body.access_token, "access_token"),
      tokenType: expectString(body.token_type, "token_type"),
      expiresIn: expectNumber(body.expires_in, "expires_in"),
      scope: typeof body.scope === "string" ? body.scope : ""
    };
  }
  const error = toDeviceAuthorizationErrorPayload(payload);
  if (!error) {
    throw new Error(`Device authorization failed with status ${response.status}`);
  }
  if (error.error === "authorization_pending") {
    return {
      status: "pending"
    };
  }
  if (error.error === "slow_down") {
    return {
      status: "pending",
      interval: 10
    };
  }
  if (error.error === "access_denied") {
    return {
      status: "denied",
      message: error.errorDescription
    };
  }
  if (error.error === "expired_token" || error.error === "invalid_grant") {
    return {
      status: "expired",
      message: error.errorDescription
    };
  }
  throw new Error(error.errorDescription);
};
var withApiVersion2 = (apiBaseUrl) => {
  const normalizedBaseUrl = apiBaseUrl.replace(/\/+$/, "");
  return normalizedBaseUrl.endsWith("/v1") ? normalizedBaseUrl : `${normalizedBaseUrl}/v1`;
};
var withAuthPath = (apiBaseUrl, path) => {
  const normalizedBaseUrl = apiBaseUrl.replace(/\/+$/, "");
  return `${normalizedBaseUrl}/api/auth${path}`;
};
var resolveListProjectsInput = async (credentialProvider, input) => {
  return resolveRequiredOrganizationScopedInput(credentialProvider, input, "projects.list");
};
var resolveOrganizationScopedInput = async (credentialProvider, input) => {
  const organizationId = input.organizationId ?? await credentialProvider.getOrganizationId?.();
  return organizationId ? { ...input, organizationId } : input;
};
var resolveRequiredOrganizationScopedInput = async (credentialProvider, input, operationId) => {
  const organizationId = input.organizationId ?? await credentialProvider.getOrganizationId?.();
  if (!organizationId) {
    throw new ORPCError2("BAD_REQUEST", {
      message: "Organization ID is required",
      data: {
        operationId,
        missingContext: ["organizationId"]
      },
      status: 400
    });
  }
  return { ...input, organizationId };
};
var resolveOnboardingSkipInput = async (credentialProvider, input) => input.organizationId !== undefined ? input : resolveOrganizationScopedInput(credentialProvider, await resolveProjectScopedInput(credentialProvider, input));
var resolveProjectScopedInput = async (credentialProvider, input) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  return projectId ? { ...input, projectId } : input;
};
var resolveRequiredProjectScopedInput = async (credentialProvider, input, operationId) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  if (!projectId) {
    throw new ORPCError2("BAD_REQUEST", {
      message: "Project ID is required",
      data: {
        operationId,
        missingContext: ["projectId"]
      },
      status: 400
    });
  }
  return { ...input, projectId };
};
var resolveListThreadsInput = async (credentialProvider, input) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  return projectId ? { ...input, projectId } : input;
};
var resolveListRunsInput = async (credentialProvider, input) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  return projectId ? { ...input, projectId } : input;
};
var resolveCreateThreadInput = async (credentialProvider, input) => {
  const projectId = input.projectId ?? await credentialProvider.getProjectId?.();
  return projectId ? { ...input, projectId } : input;
};
var resolveAppendMessageInput = (input) => {
  return {
    threadId: input.threadId,
    message: input.message,
    wait: input.wait ?? true,
    timeoutSeconds: input.timeoutSeconds ?? 20,
    ...input.automationId !== undefined ? { automationId: input.automationId } : {}
  };
};
var toApiErrorPayload = (value) => {
  if (!value || typeof value !== "object") {
    return null;
  }
  const record = value;
  if (typeof record.code !== "string" || typeof record.message !== "string" || typeof record.operationId !== "string") {
    return null;
  }
  return {
    code: record.code,
    message: record.message,
    operationId: record.operationId,
    missingContext: Array.isArray(record.missingContext) ? record.missingContext.filter((missingContext) => typeof missingContext === "string") : [],
    ...typeof record.reason === "string" ? { reason: record.reason } : {},
    ...typeof record.entitlementId === "string" ? { entitlementId: record.entitlementId } : {},
    ...typeof record.planSlug === "string" || record.planSlug === null ? { planSlug: record.planSlug } : {},
    ...typeof record.limit === "boolean" || typeof record.limit === "string" || typeof record.limit === "number" || record.limit === null ? { limit: record.limit } : {},
    ...typeof record.current === "number" ? { current: record.current } : {},
    ...typeof record.actionPath === "string" ? { actionPath: record.actionPath } : {},
    ...typeof record.retryAfterSeconds === "number" ? { retryAfterSeconds: record.retryAfterSeconds } : {},
    ...Array.isArray(record.issues) ? { issues: toApiErrorIssues(record.issues) } : {},
    ...toApiErrorDetails(record.details),
    ...Array.isArray(record.diagnostics) ? { diagnostics: record.diagnostics } : {},
    ...typeof record.currentRevision === "number" ? { currentRevision: record.currentRevision } : {}
  };
};
var toApiErrorDetails = (value) => {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return {};
  const details = Object.fromEntries(Object.entries(value).filter((entry) => typeof entry[1] === "string"));
  return Object.keys(details).length > 0 ? { details } : {};
};
var toApiErrorIssues = (value) => value.flatMap((issue) => {
  if (!issue || typeof issue !== "object")
    return [];
  const { path, message } = issue;
  if (typeof message !== "string")
    return [];
  return [
    {
      message,
      path: Array.isArray(path) ? path.filter((segment) => typeof segment === "string") : []
    }
  ];
});
var toDeviceAuthorizationErrorPayload = (value) => {
  if (!value || typeof value !== "object") {
    return null;
  }
  const record = value;
  if (typeof record.error !== "string" || typeof record.error_description !== "string") {
    return null;
  }
  return {
    error: record.error,
    errorDescription: record.error_description
  };
};
var toDeviceAuthorizationError = (value, status) => {
  const payload = toDeviceAuthorizationErrorPayload(value);
  return new Error(payload?.errorDescription ?? `Device authorization failed with status ${status}`);
};
var getFetch = (fetchImpl) => {
  return fetchImpl ?? globalThis.fetch;
};
var createDeferredHandle = (raw, result) => ({
  result,
  poll: () => raw.runs.get({ runId: result.runId }),
  waitForCompletion: async (options = {}) => waitForDeferredCompletion(raw, result, options)
});
var waitForDeferredCompletion = async (raw, initialResult, options) => {
  if (initialResult.completed) {
    return initialResult;
  }
  const intervalMs = options.intervalMs ?? 2000;
  const startedAt = Date.now();
  let currentResult = initialResult;
  while (!currentResult.completed) {
    if (options.timeoutMs !== undefined && Date.now() - startedAt >= options.timeoutMs) {
      return currentResult;
    }
    await delay2(intervalMs);
    currentResult = await raw.runs.get({ runId: currentResult.runId });
  }
  return currentResult;
};
var delay2 = async (milliseconds) => {
  await new Promise((resolve) => globalThis.setTimeout(resolve, milliseconds));
};
var expectString = (value, fieldName) => {
  if (typeof value === "string") {
    return value;
  }
  throw new Error(`Expected '${fieldName}' to be a string.`);
};
var expectNumber = (value, fieldName) => {
  if (typeof value === "number") {
    return value;
  }
  throw new Error(`Expected '${fieldName}' to be a number.`);
};
export {
  AgentStreamControlFrameSchema,
  ForwardLogsInputSchema,
  ForwardLogsOutputSchema,
  PublicAgentStreamEventSchema,
  PublicAgentStreamEventTypeSchema,
  WebSocketLogEntrySchema as TailLogEntrySchema,
  LogFiltersSchema as TailLogFiltersSchema,
  WebSocketLogResourceSchema as TailLogResourceSchema,
  TailLogsInputSchema,
  createClient,
  forwardLogsExamples,
  pollDeviceAuthorization,
  startDeviceAuthorization
};
