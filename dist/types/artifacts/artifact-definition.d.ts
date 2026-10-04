import { type LogQuerySpecV2 } from "../log-query/index.js";
import { z } from "zod";
/**
 * Version-2 artifact definitions (docs/design/app/mdx-dashboards). A v2
 * envelope carries exactly one of static `data` or a live Log Query Spec v2
 * `query`; typed presentation lives in `view`. Version-1 chart envelopes stay
 * readable beside it. Browser-safe: chat, dashboard, terminal, and image
 * renderers share these schemas.
 */
export declare const SUPPORTED_ARTIFACT_TYPES: readonly ["area_chart", "timeseries", "table", "metric", "flame_chart", "waterfall_chart", "treemap_chart", "graph_chart"];
export type SupportedArtifactType = (typeof SUPPORTED_ARTIFACT_TYPES)[number];
/**
 * Types with a deterministic live adapter in the first release. Flame,
 * waterfall, treemap, and graph charts are static only: v2 has no trace
 * source and flat grouped rows cannot imply a hierarchy or a graph.
 */
export declare const SUPPORTED_QUERY_ARTIFACT_TYPES: readonly ["area_chart", "timeseries", "table", "metric"];
export type SupportedQueryArtifactType = (typeof SUPPORTED_QUERY_ARTIFACT_TYPES)[number];
/** The area chart renderer draws at most this many series, overflow included. */
export declare const SERIES_ARTIFACT_MAX_SERIES = 8;
export declare const TABLE_ARTIFACT_MAX_ROWS = 200;
export declare const TABLE_ARTIFACT_MAX_COLUMNS = 30;
/**
 * A v2 series point. `y: null` is a missing sample: renderers draw a gap and
 * never interpolate or zero-fill it. Version-1 envelopes keep finite `y`.
 */
export declare const seriesArtifactPointSchema: z.ZodObject<{
    x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    y: z.ZodNullable<z.ZodNumber>;
}, z.core.$strict>;
export type SeriesArtifactPoint = z.infer<typeof seriesArtifactPointSchema>;
export declare const seriesArtifactSeriesSchema: z.ZodObject<{
    name: z.ZodString;
    tone: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        danger: "danger";
        info: "info";
        neutral: "neutral";
        success: "success";
        warning: "warning";
    }>>;
    points: z.ZodArray<z.ZodObject<{
        x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        y: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type SeriesArtifactSeries = z.infer<typeof seriesArtifactSeriesSchema>;
/** Renderer data per artifact type: the shape the component already draws. */
export declare const artifactDataSchemaByType: {
    readonly area_chart: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    readonly timeseries: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    readonly table: z.ZodObject<{
        rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNull, z.ZodBoolean, z.ZodNumber, z.ZodString]>>>;
    }, z.core.$strict>;
    readonly metric: z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strict>;
    readonly flame_chart: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    readonly waterfall_chart: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            start: z.ZodNumber;
            duration: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    readonly treemap_chart: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    readonly graph_chart: z.ZodObject<{
        nodes: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            value: z.ZodOptional<z.ZodNumber>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        edges: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
};
export type ArtifactDataByType = {
    [T in SupportedArtifactType]: z.infer<(typeof artifactDataSchemaByType)[T]>;
};
/** Typed presentation per artifact type. No functions or expressions. */
export declare const artifactViewSchemaByType: {
    readonly area_chart: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        stacked: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    readonly timeseries: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            area: "area";
            bar: "bar";
            line: "line";
        }>>;
    }, z.core.$strict>;
    readonly table: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            unit: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
    }, z.core.$strict>;
    readonly metric: z.ZodObject<{
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    readonly flame_chart: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    readonly waterfall_chart: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    readonly treemap_chart: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    readonly graph_chart: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
};
export type ArtifactViewByType = {
    [T in SupportedArtifactType]: z.infer<(typeof artifactViewSchemaByType)[T]>;
};
export type StaticArtifact<T extends SupportedArtifactType> = {
    version: 2;
    type: T;
    data: ArtifactDataByType[T];
    query?: never;
    view?: ArtifactViewByType[T];
};
export type QueryArtifact<T extends SupportedQueryArtifactType> = {
    version: 2;
    type: T;
    query: LogQuerySpecV2;
    data?: never;
    view?: ArtifactViewByType[T];
};
export declare const staticArtifactV2Schema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"area_chart">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        stacked: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"timeseries">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            area: "area";
            bar: "bar";
            line: "line";
        }>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"table">;
    data: z.ZodObject<{
        rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNull, z.ZodBoolean, z.ZodNumber, z.ZodString]>>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            unit: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"metric">;
    data: z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"flame_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"waterfall_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            start: z.ZodNumber;
            duration: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"treemap_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"graph_chart">;
    data: z.ZodObject<{
        nodes: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            value: z.ZodOptional<z.ZodNumber>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        edges: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>], "type">;
export type StaticArtifactV2 = {
    [T in SupportedArtifactType]: StaticArtifact<T>;
}[SupportedArtifactType];
export declare const queryArtifactV2Schema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"area_chart">;
    query: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        stacked: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"timeseries">;
    query: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            area: "area";
            bar: "bar";
            line: "line";
        }>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"table">;
    query: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            unit: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"metric">;
    query: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    view: z.ZodOptional<z.ZodObject<{
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>], "type">;
export type QueryArtifactV2 = {
    [T in SupportedQueryArtifactType]: QueryArtifact<T>;
}[SupportedQueryArtifactType];
/**
 * Validated renderer input: what a resolver hands a component after adapting
 * a query result or normalizing a static definition.
 */
export declare const renderableArtifactSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"area_chart">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        stacked: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"timeseries">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            area: "area";
            bar: "bar";
            line: "line";
        }>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"table">;
    data: z.ZodObject<{
        rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNull, z.ZodBoolean, z.ZodNumber, z.ZodString]>>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            unit: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"metric">;
    data: z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"flame_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"waterfall_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            start: z.ZodNumber;
            duration: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"treemap_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"graph_chart">;
    data: z.ZodObject<{
        nodes: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            value: z.ZodOptional<z.ZodNumber>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        edges: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>], "type">;
export type RenderableArtifact = StaticArtifactV2;
/** A static definition a `path` binding may name: v1 chart envelope or v2 static. */
export declare const staticArtifactDefinitionSchema: z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"flame_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        unit: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"waterfall_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            start: z.ZodNumber;
            duration: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        unit: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"area_chart">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNumber;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        stacked: z.ZodOptional<z.ZodBoolean>;
        unit: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"treemap_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        unit: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"graph_chart">;
    data: z.ZodObject<{
        nodes: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            value: z.ZodOptional<z.ZodNumber>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        edges: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
        }, z.core.$strict>>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>], "type">, z.ZodDiscriminatedUnion<[z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"area_chart">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        stacked: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"timeseries">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            area: "area";
            bar: "bar";
            line: "line";
        }>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"table">;
    data: z.ZodObject<{
        rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNull, z.ZodBoolean, z.ZodNumber, z.ZodString]>>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            unit: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"metric">;
    data: z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"flame_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"waterfall_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            start: z.ZodNumber;
            duration: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"treemap_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"graph_chart">;
    data: z.ZodObject<{
        nodes: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            value: z.ZodOptional<z.ZodNumber>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        edges: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>], "type">]>;
export type StaticArtifactDefinition = z.infer<typeof staticArtifactDefinitionSchema>;
/**
 * Every artifact definition an `artifact` prop or stored binding may hold.
 * `data` and `query` are mutually exclusive: the strict v2 members accept
 * exactly one of them.
 */
export declare const artifactDefinitionSchema: z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"flame_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        unit: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"waterfall_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            start: z.ZodNumber;
            duration: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        unit: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"area_chart">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNumber;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        stacked: z.ZodOptional<z.ZodBoolean>;
        unit: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"treemap_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        unit: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<1>;
    type: z.ZodLiteral<"graph_chart">;
    data: z.ZodObject<{
        nodes: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            value: z.ZodOptional<z.ZodNumber>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        edges: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
        }, z.core.$strict>>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>], "type">, z.ZodDiscriminatedUnion<[z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"area_chart">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        stacked: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"timeseries">;
    data: z.ZodObject<{
        series: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            points: z.ZodArray<z.ZodObject<{
                x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                y: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            area: "area";
            bar: "bar";
            line: "line";
        }>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"table">;
    data: z.ZodObject<{
        rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNull, z.ZodBoolean, z.ZodNumber, z.ZodString]>>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            unit: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"metric">;
    data: z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"flame_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"waterfall_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            start: z.ZodNumber;
            duration: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"treemap_chart">;
    data: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            parent: z.ZodOptional<z.ZodString>;
            value: z.ZodNumber;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"graph_chart">;
    data: z.ZodObject<{
        nodes: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
            value: z.ZodOptional<z.ZodNumber>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        edges: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
            tone: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                danger: "danger";
                info: "info";
                neutral: "neutral";
                success: "success";
                warning: "warning";
            }>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>], "type">, z.ZodDiscriminatedUnion<[z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"area_chart">;
    query: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        stacked: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"timeseries">;
    query: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            area: "area";
            bar: "bar";
            line: "line";
        }>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"table">;
    query: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    view: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            unit: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    version: z.ZodLiteral<2>;
    type: z.ZodLiteral<"metric">;
    query: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodObject<{
        version: z.ZodLiteral<2>;
        predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
            kind: "body_json";
            path: string[];
        } | {
            kind: "service";
        } | {
            kind: "severity";
        } | {
            kind: "column";
            name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
        } | {
            kind: "attribute";
            source: "log" | "resource" | "scope";
            key: string;
        } | {
            kind: "body";
        } | {
            kind: "message";
        }>, unknown>>;
        dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"service">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"severity">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"column">;
            name: z.ZodEnum<{
                "deployment.environment": "deployment.environment";
                "event.name": "event.name";
                "http.request.body.size": "http.request.body.size";
                "http.request.method": "http.request.method";
                "http.response.body.size": "http.response.body.size";
                "http.response.status_code": "http.response.status_code";
                "http.route": "http.route";
                "k8s.pod.name": "k8s.pod.name";
                "log.record.uid": "log.record.uid";
                operation_kind: "operation_kind";
                "server.address": "server.address";
                severity_text: "severity_text";
                span_id: "span_id";
                trace_id: "trace_id";
                "url.path": "url.path";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"attribute">;
            source: z.ZodEnum<{
                log: "log";
                resource: "resource";
                scope: "scope";
            }>;
            key: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"message">;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"body_json">;
            path: z.ZodArray<z.ZodString>;
        }, z.core.$strict>], "kind">>;
        measure: z.ZodDiscriminatedUnion<[z.ZodObject<{
            op: z.ZodLiteral<"count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"event_rate">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"distinct">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"numeric">;
            field: z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>;
            parseAs: z.ZodLiteral<"float64">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                min: "min";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
            invalidValues: z.ZodEnum<{
                drop: "drop";
                error: "error";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"recent_rows">;
            limit: z.ZodNumber;
            fields: z.ZodOptional<z.ZodArray<z.ZodType<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown, z.core.$ZodTypeInternals<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }, unknown>>>>;
            order: z.ZodOptional<z.ZodEnum<{
                newest: "newest";
                oldest: "oldest";
            }>>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"request_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"error_count">;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"duration">;
            aggregate: z.ZodEnum<{
                avg: "avg";
                max: "max";
                p50: "p50";
                p95: "p95";
                p99: "p99";
                sum: "sum";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            op: z.ZodLiteral<"ratio">;
            numerator: z.ZodType<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                kind: "body_json";
                path: string[];
            } | {
                kind: "service";
            } | {
                kind: "severity";
            } | {
                kind: "column";
                name: "deployment.environment" | "event.name" | "http.request.body.size" | "http.request.method" | "http.response.body.size" | "http.response.status_code" | "http.route" | "k8s.pod.name" | "log.record.uid" | "operation_kind" | "server.address" | "severity_text" | "span_id" | "trace_id" | "url.path";
            } | {
                kind: "attribute";
                source: "log" | "resource" | "scope";
                key: string;
            } | {
                kind: "body";
            } | {
                kind: "message";
            }>, unknown>>;
        }, z.core.$strict>], "op">;
        bucket: z.ZodOptional<z.ZodEnum<{
            "10m": "10m";
            "12h": "12h";
            "15m": "15m";
            "1d": "1d";
            "1h": "1h";
            "1m": "1m";
            "30m": "30m";
            "5m": "5m";
            "6h": "6h";
        }>>;
        output: z.ZodEnum<{
            evidence: "evidence";
            series: "series";
            table: "table";
        }>;
        series: z.ZodOptional<z.ZodObject<{
            limit: z.ZodNumber;
            overflow: z.ZodEnum<{
                drop: "drop";
                other: "other";
            }>;
        }, z.core.$strict>>;
        order: z.ZodOptional<z.ZodObject<{
            by: z.ZodEnum<{
                dimension: "dimension";
                value: "value";
            }>;
            direction: z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>;
        }, z.core.$strict>>;
        exactness: z.ZodEnum<{
            approximate_ok: "approximate_ok";
            exact: "exact";
        }>;
        approximation: z.ZodOptional<z.ZodObject<{
            maxRelativeError: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    view: z.ZodOptional<z.ZodObject<{
        unit: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>], "type">]>;
export type ArtifactDefinition = z.infer<typeof artifactDefinitionSchema>;
