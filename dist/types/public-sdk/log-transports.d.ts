import type { ContractRouterClient } from "@orpc/contract";
import type { OtlpLogsRequest } from "../otlp-contracts/index.js";
import type { ProjectRegion, PublicApiContract } from "../public-api/index.js";
import { z } from "zod";
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
 * Runtime dependencies for custom log transports.
 */
export interface LogTransportOptions {
    raw: ContractRouterClient<PublicApiContract>;
    credentialProvider: LogCredentialProvider;
    fetch?: typeof globalThis.fetch;
    intakeBaseUrl?: string;
}
/**
 * Creates the custom intake transport surface.
 */
export declare const createLogTransports: (options: LogTransportOptions) => {
    forward: (input: ForwardLogsParams) => Promise<ForwardLogsOutput>;
};
