import { z } from "zod";
/**
 * Browser-safe data contracts for the universal chart artifact envelopes.
 * Renderers own layout and formatting; agents and verifiers share this file
 * for the data shape and resource limits.
 */
export declare const chartName: z.ZodString;
export declare const chartUnitSchema: z.ZodString;
export declare const chartTitleSchema: z.ZodString;
/** Adds one issue per repeated `name`; chart renderers key marks by name. */
export declare const addUniqueNameIssues: (values: readonly {
    name: string;
}[], field: "items" | "nodes" | "series", context: z.RefinementCtx) => void;
export declare const chartToneSchema: z.ZodEnum<{
    critical: "critical";
    danger: "danger";
    info: "info";
    neutral: "neutral";
    success: "success";
    warning: "warning";
}>;
export type ChartTone = z.infer<typeof chartToneSchema>;
export declare const hierarchyItemSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type HierarchyItem = z.infer<typeof hierarchyItemSchema>;
export declare const flameChartDataSchema: z.ZodObject<{
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
export type FlameChartData = z.infer<typeof flameChartDataSchema>;
export declare const treemapChartDataSchema: z.ZodObject<{
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
export type TreemapChartData = FlameChartData;
export declare const timelineItemSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type TimelineItem = z.infer<typeof timelineItemSchema>;
export declare const waterfallChartDataSchema: z.ZodObject<{
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
export type WaterfallChartData = z.infer<typeof waterfallChartDataSchema>;
export declare const seriesPointSchema: z.ZodObject<{
    x: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    y: z.ZodNumber;
}, z.core.$strict>;
export type SeriesPoint = z.infer<typeof seriesPointSchema>;
export declare const chartSeriesSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type ChartSeries = z.infer<typeof chartSeriesSchema>;
export declare const areaChartDataSchema: z.ZodObject<{
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
export type AreaChartData = z.infer<typeof areaChartDataSchema>;
export declare const graphNodeSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type GraphNode = z.infer<typeof graphNodeSchema>;
export declare const graphEdgeSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type GraphEdge = z.infer<typeof graphEdgeSchema>;
/** Graph node names are unique and every edge endpoint names a declared node. */
export declare const addGraphIssues: ({ nodes, edges, }: {
    nodes: readonly GraphNode[];
    edges: readonly GraphEdge[];
}, context: z.RefinementCtx) => void;
export declare const graphChartDataSchema: z.ZodObject<{
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
export type GraphChartData = z.infer<typeof graphChartDataSchema>;
export declare const flameChartArtifactFileSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const waterfallChartArtifactFileSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const areaChartArtifactFileSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const treemapChartArtifactFileSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const graphChartArtifactFileSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const universalChartArtifactFileSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strict>], "type">;
export type UniversalChartArtifactFile = z.infer<typeof universalChartArtifactFileSchema>;
