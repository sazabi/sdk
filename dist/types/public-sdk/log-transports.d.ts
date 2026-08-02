import type { ContractRouterClient } from "@orpc/contract";
import type { OtlpLogsRequest } from "../otlp-contracts/index.js";
import type { ProjectRegion, PublicApiContract } from "../public-api-contracts/index.js";
import { type WebSocketLogEntry as TailLogEntry, WebSocketLogEntrySchema as TailLogEntrySchema, type LogFilters as TailLogFilters, LogFiltersSchema as TailLogFiltersSchema, type WebSocketLogResource as TailLogResource, WebSocketLogResourceSchema as TailLogResourceSchema } from "../tail-ws-contracts/index.js";
import { z } from "zod";
export type { TailLogEntry, TailLogFilters, TailLogResource };
export { TailLogEntrySchema, TailLogFiltersSchema, TailLogResourceSchema };
/**
 * Input accepted by the tail SSE helper.
 */
export declare const TailLogsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodObject<{
        severities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        services: z.ZodOptional<z.ZodArray<z.ZodString>>;
        environments: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchTerm: z.ZodOptional<z.ZodString>;
        traceId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TailLogsInput = z.infer<typeof TailLogsInputSchema>;
/**
 * Input accepted by the OTLP log forwarding helper.
 */
export declare const ForwardLogsInputSchema: z.ZodObject<{
    publicKey: z.ZodString;
    logs: z.ZodCustom<OtlpLogsRequest, OtlpLogsRequest>;
}, z.core.$strip>;
export type ForwardLogsInput = z.infer<typeof ForwardLogsInputSchema>;
/**
 * Result returned by the OTLP log forwarding helper.
 */
export declare const ForwardLogsOutputSchema: z.ZodObject<{
    forwardedCount: z.ZodNumber;
    failedCount: z.ZodNumber;
}, z.core.$strip>;
export type ForwardLogsOutput = z.infer<typeof ForwardLogsOutputSchema>;
/**
 * Agent-readable examples for the SDK's OTLP intake helper.
 */
export declare const forwardLogsExamples: {
    name: string;
    input: {
        publicKey: string;
        logs: {
            resourceLogs: {
                resource: {
                    attributes: {
                        key: string;
                        value: {
                            stringValue: string;
                        };
                    }[];
                };
                scopeLogs: {
                    scope: {
                        name: string;
                        version: string;
                    };
                    logRecords: {
                        severityText: string;
                        body: {
                            stringValue: string;
                        };
                    }[];
                }[];
            }[];
        };
    };
    output: {
        forwardedCount: number;
        failedCount: number;
    };
}[];
/**
 * Minimal credential provider shape needed by log transports.
 */
export interface LogCredentialProvider {
    getToken(): string | Promise<string>;
    getProjectId?(): string | undefined | Promise<string | undefined>;
}
/**
 * Caller-facing params for tail transport.
 */
export interface TailLogsParams extends TailLogsInput {
    region?: ProjectRegion;
    signal?: AbortSignal;
}
/**
 * Caller-facing params for intake transport.
 */
export interface ForwardLogsParams extends ForwardLogsInput {
    projectId?: string;
    region?: ProjectRegion;
    sazabiInternalForwarding?: {
        secret: string;
        source?: string;
    };
}
/**
 * Async iterator returned by the tail transport.
 */
export type TailLogStream = AsyncIterableIterator<TailLogEntry>;
/**
 * Runtime dependencies for custom log transports.
 */
export interface LogTransportOptions {
    raw: ContractRouterClient<PublicApiContract>;
    credentialProvider: LogCredentialProvider;
    fetch?: typeof globalThis.fetch;
    /** Used to infer non-production SSE defaults when `tailBaseUrl` is omitted. */
    apiBaseUrl?: string;
    intakeBaseUrl?: string;
    tailBaseUrl?: string;
}
/**
 * Creates the custom tail and intake transport surface.
 */
export declare const createLogTransports: (options: LogTransportOptions) => {
    tail: (input: TailLogsParams) => Promise<TailLogStream>;
    forward: (input: ForwardLogsParams) => Promise<ForwardLogsOutput>;
};
