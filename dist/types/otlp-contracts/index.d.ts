/**
 * OTLP (OpenTelemetry Protocol) type definitions.
 *
 * Provides TypeScript interfaces for OTLP log structures used across
 * the Sazabi platform for log ingestion and transformation.
 *
 * @see https://opentelemetry.io/docs/specs/otlp/
 */
/**
 * OTLP attribute value types.
 *
 * Represents the various data types that can be stored in OTLP attributes.
 * Only one field should be populated per value.
 */
export interface OtlpAttributeValue {
    stringValue?: string;
    intValue?: string | number;
    doubleValue?: number;
    boolValue?: boolean;
    arrayValue?: {
        values: OtlpAttributeValue[];
    };
    kvlistValue?: {
        values: Array<{
            key: string;
            value: OtlpAttributeValue;
        }>;
    };
    bytesValue?: string | Buffer;
}
/**
 * OTLP attribute structure.
 *
 * Key-value pairs that provide metadata about logs, resources, and scopes.
 */
export interface OtlpAttribute {
    key: string;
    value?: OtlpAttributeValue;
}
/**
 * OTLP resource structure.
 *
 * Represents the entity producing telemetry (e.g., service, host, container).
 */
export interface OtlpResource {
    attributes?: OtlpAttribute[];
    droppedAttributesCount?: number;
    schemaUrl?: string;
}
/**
 * OTLP instrumentation scope.
 *
 * Identifies the instrumentation library that produced the telemetry.
 */
export interface OtlpScope {
    name?: string;
    version?: string;
    attributes?: OtlpAttribute[];
    droppedAttributesCount?: number;
}
/**
 * OTLP log record structure.
 *
 * Represents a single log entry with its metadata and content.
 */
export interface OtlpLogRecord {
    /** Timestamp when the log was generated (nanoseconds since epoch). */
    timeUnixNano?: string | number;
    /** Timestamp when the log was observed (nanoseconds since epoch). */
    observedTimeUnixNano?: string | number;
    /** Numerical severity level (1-24, where 9 = INFO). */
    severityNumber?: number;
    /** Text representation of severity (e.g., "INFO", "ERROR"). */
    severityText?: string;
    /** The log message body. */
    body?: OtlpAttributeValue;
    /** Attributes specific to this log record. */
    attributes?: OtlpAttribute[];
    /** Number of attributes dropped due to limits. */
    droppedAttributesCount?: number;
    /** Trace context flags. */
    flags?: number;
    /** Trace ID (16 bytes) for distributed tracing. */
    traceId?: string | Buffer;
    /** Span ID (8 bytes) for distributed tracing. */
    spanId?: string | Buffer;
    /** Event name for log events. */
    eventName?: string;
}
/**
 * OTLP scope logs structure.
 *
 * Groups log records by their instrumentation scope.
 */
export interface OtlpScopeLog {
    scope?: OtlpScope | null;
    logRecords?: OtlpLogRecord[];
    schemaUrl?: string | null;
}
/**
 * OTLP resource logs structure.
 *
 * Groups scope logs by their resource (e.g., service, host).
 */
export interface OtlpResourceLog {
    resource?: OtlpResource;
    scopeLogs?: OtlpScopeLog[];
    schemaUrl?: string;
}
/**
 * OTLP logs export request structure.
 *
 * Top-level structure for OTLP log payloads sent to ingestion endpoints.
 */
export interface OtlpLogsRequest {
    resourceLogs?: OtlpResourceLog[];
}
/**
 * Span kind values.
 *
 * Indicates the relationship between the span and its parent/children.
 */
export declare const OtlpSpanKind: {
    readonly SPAN_KIND_UNSPECIFIED: 0;
    readonly SPAN_KIND_INTERNAL: 1;
    readonly SPAN_KIND_SERVER: 2;
    readonly SPAN_KIND_CLIENT: 3;
    readonly SPAN_KIND_PRODUCER: 4;
    readonly SPAN_KIND_CONSUMER: 5;
};
/** Type for OtlpSpanKind values */
export type OtlpSpanKindValue = (typeof OtlpSpanKind)[keyof typeof OtlpSpanKind];
/**
 * Span status code values.
 */
export declare const OtlpStatusCode: {
    readonly STATUS_CODE_UNSET: 0;
    readonly STATUS_CODE_OK: 1;
    readonly STATUS_CODE_ERROR: 2;
};
/** Type for OtlpStatusCode values */
export type OtlpStatusCodeValue = (typeof OtlpStatusCode)[keyof typeof OtlpStatusCode];
/**
 * OTLP span status structure.
 *
 * Represents the status of a span (OK, ERROR, or UNSET).
 */
export interface OtlpSpanStatus {
    /** Human-readable message describing the status. */
    message?: string;
    /** Status code (UNSET, OK, or ERROR). */
    code?: OtlpStatusCodeValue | number;
}
/**
 * OTLP span event structure.
 *
 * Represents a timed event within a span (e.g., exception, log message).
 */
export interface OtlpSpanEvent {
    /** Timestamp of the event (nanoseconds since epoch). */
    timeUnixNano?: string | number;
    /** Name of the event. */
    name?: string;
    /** Attributes associated with the event. */
    attributes?: OtlpAttribute[];
    /** Number of attributes dropped due to limits. */
    droppedAttributesCount?: number;
}
/**
 * OTLP span link structure.
 *
 * Represents a link to another span (for distributed tracing across services).
 */
export interface OtlpSpanLink {
    /** Trace ID of the linked span. */
    traceId?: string | Buffer;
    /** Span ID of the linked span. */
    spanId?: string | Buffer;
    /** Trace state of the linked span. */
    traceState?: string;
    /** Attributes associated with the link. */
    attributes?: OtlpAttribute[];
    /** Number of attributes dropped due to limits. */
    droppedAttributesCount?: number;
    /** Trace flags of the linked span. */
    flags?: number;
}
/**
 * OTLP span structure.
 *
 * Represents a single span in a trace.
 */
export interface OtlpSpan {
    /** Trace ID (16 bytes) for distributed tracing. */
    traceId?: string | Buffer;
    /** Span ID (8 bytes) identifying this span. */
    spanId?: string | Buffer;
    /** Trace state string for vendor-specific trace information. */
    traceState?: string;
    /** Parent span ID (8 bytes), empty for root spans. */
    parentSpanId?: string | Buffer;
    /** Trace flags. */
    flags?: number;
    /** Human-readable name of the span (e.g., operation name). */
    name?: string;
    /** Span kind (INTERNAL, SERVER, CLIENT, PRODUCER, CONSUMER). */
    kind?: OtlpSpanKindValue | number;
    /** Start timestamp (nanoseconds since epoch). */
    startTimeUnixNano?: string | number;
    /** End timestamp (nanoseconds since epoch). */
    endTimeUnixNano?: string | number;
    /** Attributes associated with this span. */
    attributes?: OtlpAttribute[];
    /** Number of attributes dropped due to limits. */
    droppedAttributesCount?: number;
    /** Events that occurred during the span. */
    events?: OtlpSpanEvent[];
    /** Number of events dropped due to limits. */
    droppedEventsCount?: number;
    /** Links to other spans. */
    links?: OtlpSpanLink[];
    /** Number of links dropped due to limits. */
    droppedLinksCount?: number;
    /** Status of the span. */
    status?: OtlpSpanStatus;
}
/**
 * OTLP scope spans structure.
 *
 * Groups spans by their instrumentation scope.
 */
export interface OtlpScopeSpan {
    scope?: OtlpScope | null;
    spans?: OtlpSpan[];
    schemaUrl?: string | null;
}
/**
 * OTLP resource spans structure.
 *
 * Groups scope spans by their resource (e.g., service, host).
 */
export interface OtlpResourceSpan {
    resource?: OtlpResource;
    scopeSpans?: OtlpScopeSpan[];
    schemaUrl?: string;
}
/**
 * OTLP traces export request structure.
 *
 * Top-level structure for OTLP trace payloads sent to ingestion endpoints.
 */
export interface OtlpTracesRequest {
    resourceSpans?: OtlpResourceSpan[];
}
/**
 * Maps span kind number to human-readable string.
 */
export declare const spanKindToString: (kind?: OtlpSpanKindValue | number) => string;
/**
 * Maps status code number to human-readable string.
 */
export declare const statusCodeToString: (code?: OtlpStatusCodeValue | number) => string;
