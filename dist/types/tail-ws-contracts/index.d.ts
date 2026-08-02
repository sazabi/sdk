/**
 * Shared types for the Sazabi tail WebSocket API.
 *
 * These types define the contract between the tail WebSocket server
 * and clients (CLI, web app, etc.).
 */
import { z } from "zod";
/**
 * Schema for log-stream filter criteria.
 */
export declare const LogFiltersSchema: z.ZodObject<{
    severities: z.ZodOptional<z.ZodArray<z.ZodString>>;
    services: z.ZodOptional<z.ZodArray<z.ZodString>>;
    environments: z.ZodOptional<z.ZodArray<z.ZodString>>;
    searchTerm: z.ZodOptional<z.ZodString>;
    traceId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Filter criteria for log streaming.
 */
export type LogFilters = z.infer<typeof LogFiltersSchema>;
/**
 * Schema for tailed log resource metadata.
 */
export declare const WebSocketLogResourceSchema: z.ZodObject<{
    service: z.ZodString;
    namespace: z.ZodString;
    environment: z.ZodString;
    host: z.ZodString;
    container: z.ZodString;
    pod: z.ZodString;
}, z.core.$strip>;
/**
 * Resource metadata attached to a tailed log event.
 */
export type WebSocketLogResource = z.infer<typeof WebSocketLogResourceSchema>;
/**
 * Schema for an individual tailed log entry.
 */
export declare const WebSocketLogEntrySchema: z.ZodObject<{
    id: z.ZodString;
    timestamp: z.ZodString;
    severity: z.ZodString;
    body: z.ZodString;
    service: z.ZodString;
    traceId: z.ZodString;
    spanId: z.ZodString;
    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
    resource: z.ZodObject<{
        service: z.ZodString;
        namespace: z.ZodString;
        environment: z.ZodString;
        host: z.ZodString;
        container: z.ZodString;
        pod: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Individual log entry sent to WebSocket clients.
 */
export type WebSocketLogEntry = z.infer<typeof WebSocketLogEntrySchema>;
/**
 * Schema for one WebSocket message sent by the tail service.
 */
export declare const WebSocketLogMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"logs">;
    timestamp: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        timestamp: z.ZodString;
        severity: z.ZodString;
        body: z.ZodString;
        service: z.ZodString;
        traceId: z.ZodString;
        spanId: z.ZodString;
        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        resource: z.ZodObject<{
            service: z.ZodString;
            namespace: z.ZodString;
            environment: z.ZodString;
            host: z.ZodString;
            container: z.ZodString;
            pod: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Message format sent to WebSocket clients.
 */
export type WebSocketLogMessage = z.infer<typeof WebSocketLogMessageSchema>;
