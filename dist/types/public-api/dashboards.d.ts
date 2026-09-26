import { z } from "zod";
export declare const ListDashboardsInputSchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodUUID>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strict>;
export type ListDashboardsInput = z.infer<typeof ListDashboardsInputSchema>;
export declare const ListDashboardsOutputSchema: z.ZodObject<{
    dashboards: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        revision: z.ZodNumber;
        createdAt: z.ZodISODateTime;
        updatedAt: z.ZodISODateTime;
        capabilities: z.ZodObject<{
            update: z.ZodBoolean;
            delete: z.ZodBoolean;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type ListDashboardsOutput = z.infer<typeof ListDashboardsOutputSchema>;
export declare const GetDashboardInputSchema: z.ZodObject<{
    id: z.ZodUUID;
    includeFiles: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>;
export type GetDashboardInput = z.infer<typeof GetDashboardInputSchema>;
export declare const GetDashboardOutputSchema: z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    definitionHash: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    source: z.ZodString;
    fileDescriptors: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        type: z.ZodEnum<{
            area_chart: "area_chart";
            flame_chart: "flame_chart";
            graph_chart: "graph_chart";
            metric: "metric";
            table: "table";
            timeseries: "timeseries";
            treemap_chart: "treemap_chart";
            waterfall_chart: "waterfall_chart";
        }>;
        bytes: z.ZodNumber;
        contentHash: z.ZodString;
    }, z.core.$strict>>;
    files: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
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
    }, z.core.$strict>], "type">]>>>;
}, z.core.$strict>;
export type GetDashboardOutput = z.infer<typeof GetDashboardOutputSchema>;
export declare const ValidateDashboardInputSchema: z.ZodObject<{
    input: z.ZodObject<{
        source: z.ZodString;
        files: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
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
        }, z.core.$strict>], "type">]>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>;
export type ValidateDashboardInput = z.infer<typeof ValidateDashboardInputSchema>;
export declare const ValidateDashboardOutputSchema: z.ZodObject<{
    valid: z.ZodBoolean;
    diagnostics: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        severity: z.ZodEnum<{
            error: "error";
            warning: "warning";
        }>;
        line: z.ZodOptional<z.ZodNumber>;
        column: z.ZodOptional<z.ZodNumber>;
        componentId: z.ZodOptional<z.ZodString>;
        filePath: z.ZodOptional<z.ZodString>;
        artifactPath: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        repairHint: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type ValidateDashboardOutput = z.infer<typeof ValidateDashboardOutputSchema>;
export declare const CreateDashboardInputSchema: z.ZodObject<{
    id: z.ZodUUID;
    input: z.ZodObject<{
        source: z.ZodString;
        files: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
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
        }, z.core.$strict>], "type">]>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>;
export type CreateDashboardInput = z.infer<typeof CreateDashboardInputSchema>;
export declare const UpdateDashboardInputSchema: z.ZodObject<{
    id: z.ZodUUID;
    input: z.ZodObject<{
        source: z.ZodString;
        files: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
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
        }, z.core.$strict>], "type">]>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>;
export type UpdateDashboardInput = z.infer<typeof UpdateDashboardInputSchema>;
export declare const DashboardWriteOutputSchema: z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    definitionHash: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    editBase: z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodUUID;
        dashboardId: z.ZodUUID;
        revision: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DashboardWriteOutput = z.infer<typeof DashboardWriteOutputSchema>;
export declare const RenderDashboardInputSchema: z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodOptional<z.ZodNumber>;
    timeRange: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">>;
    componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>;
export type RenderDashboardInput = z.infer<typeof RenderDashboardInputSchema>;
export declare const RenderDashboardOutputSchema: z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    definitionHash: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    resolvedTimeRange: z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>;
    document: z.ZodObject<{
        version: z.ZodLiteral<1>;
        root: z.ZodType<import("../mdx/index.js").SazabiMdxRootNode, unknown, z.core.$ZodTypeInternals<import("../mdx/index.js").SazabiMdxRootNode, unknown>>;
        componentNames: z.ZodArray<z.ZodString>;
        limits: z.ZodObject<{
            maxSourceLength: z.ZodNumber;
            maxNodeCount: z.ZodNumber;
            maxComponentCount: z.ZodNumber;
            maxTableRows: z.ZodNumber;
            maxChartPoints: z.ZodNumber;
            maxPropPayloadSize: z.ZodNumber;
            maxComponentDepth: z.ZodNumber;
            maxCodeBlockLength: z.ZodNumber;
            maxTextLength: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    requestedComponentIds: z.ZodArray<z.ZodString>;
    artifacts: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
        status: z.ZodLiteral<"ok">;
        data: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
        execution: z.ZodOptional<z.ZodObject<{
            spec: z.ZodObject<{
                version: z.ZodLiteral<2>;
                source: z.ZodObject<{
                    kind: z.ZodLiteral<"logs">;
                }, z.core.$strict>;
                predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown>>;
                dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"severity_number">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"column">;
                    name: z.ZodString;
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>;
                }, z.core.$strict>, z.ZodObject<{
                    op: z.ZodLiteral<"numeric">;
                    field: z.ZodType<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>>>;
                    order: z.ZodOptional<z.ZodEnum<{
                        newest: "newest";
                        oldest: "oldest";
                    }>>;
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
                }, z.core.$strict>], "op">;
                bucket: z.ZodOptional<z.ZodEnum<{
                    "1d": "1d";
                    "1h": "1h";
                    "1m": "1m";
                    "5m": "5m";
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
                exactness: z.ZodEnum<{
                    approximate_ok: "approximate_ok";
                    exact: "exact";
                }>;
                approximation: z.ZodOptional<z.ZodObject<{
                    maxRelativeError: z.ZodNumber;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            resolvedTimeRange: z.ZodObject<{
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>;
            meta: z.ZodObject<{
                representation: z.ZodEnum<{
                    event_volume: "event_volume";
                    exact_scan: "exact_scan";
                    log_volume: "log_volume";
                    pattern_index: "pattern_index";
                    pattern_volume: "pattern_volume";
                    request_metrics: "request_metrics";
                    sampled_scan: "sampled_scan";
                    standing: "standing";
                }>;
                exactness: z.ZodEnum<{
                    approximate: "approximate";
                    exact: "exact";
                }>;
                error: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"sampling">;
                    relativeBound: z.ZodNumber;
                    confidence: z.ZodLiteral<0.95>;
                    sampleFraction: z.ZodNumber;
                    cellRows: z.ZodNumber;
                    minCellRows: z.ZodNumber;
                    designEffect: z.ZodNumber;
                    omissionProbability: z.ZodObject<{
                        oneIdentity: z.ZodNumber;
                        boundedCell: z.ZodNumber;
                        boundedCellIdentities: z.ZodNumber;
                        maxMultiplicity: z.ZodNullable<z.ZodNumber>;
                        basis: z.ZodString;
                    }, z.core.$strict>;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"quantile_sketch">;
                    algorithm: z.ZodEnum<{
                        reservoir_sample: "reservoir_sample";
                        tdigest: "tdigest";
                    }>;
                    compression: z.ZodNumber;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"distinct_sketch">;
                    algorithm: z.ZodString;
                }, z.core.$strict>], "kind">>;
                estimate: z.ZodOptional<z.ZodObject<{
                    rows: z.ZodNumber;
                    bytes: z.ZodNumber;
                }, z.core.$strict>>;
                coverage: z.ZodObject<{
                    from: z.ZodISODateTime;
                    to: z.ZodISODateTime;
                    status: z.ZodEnum<{
                        complete: "complete";
                        partial: "partial";
                    }>;
                    reason: z.ZodOptional<z.ZodEnum<{
                        read_limit: "read_limit";
                        request_columns: "request_columns";
                        stored_range: "stored_range";
                    }>>;
                }, z.core.$strict>;
                freshness: z.ZodObject<{
                    watermark: z.ZodISODateTime;
                    openBucketFrom: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strict>;
                catalogRevision: z.ZodOptional<z.ZodString>;
                population: z.ZodOptional<z.ZodObject<{
                    kind: z.ZodLiteral<"services">;
                    services: z.ZodArray<z.ZodString>;
                    unmatchedRows: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            took: z.ZodNumber;
            executionMs: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>, z.ZodObject<{
        status: z.ZodLiteral<"empty">;
        execution: z.ZodObject<{
            spec: z.ZodObject<{
                version: z.ZodLiteral<2>;
                source: z.ZodObject<{
                    kind: z.ZodLiteral<"logs">;
                }, z.core.$strict>;
                predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown>>;
                dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"severity_number">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"column">;
                    name: z.ZodString;
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>;
                }, z.core.$strict>, z.ZodObject<{
                    op: z.ZodLiteral<"numeric">;
                    field: z.ZodType<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>>>;
                    order: z.ZodOptional<z.ZodEnum<{
                        newest: "newest";
                        oldest: "oldest";
                    }>>;
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
                }, z.core.$strict>], "op">;
                bucket: z.ZodOptional<z.ZodEnum<{
                    "1d": "1d";
                    "1h": "1h";
                    "1m": "1m";
                    "5m": "5m";
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
                exactness: z.ZodEnum<{
                    approximate_ok: "approximate_ok";
                    exact: "exact";
                }>;
                approximation: z.ZodOptional<z.ZodObject<{
                    maxRelativeError: z.ZodNumber;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            resolvedTimeRange: z.ZodObject<{
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>;
            meta: z.ZodObject<{
                representation: z.ZodEnum<{
                    event_volume: "event_volume";
                    exact_scan: "exact_scan";
                    log_volume: "log_volume";
                    pattern_index: "pattern_index";
                    pattern_volume: "pattern_volume";
                    request_metrics: "request_metrics";
                    sampled_scan: "sampled_scan";
                    standing: "standing";
                }>;
                exactness: z.ZodEnum<{
                    approximate: "approximate";
                    exact: "exact";
                }>;
                error: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"sampling">;
                    relativeBound: z.ZodNumber;
                    confidence: z.ZodLiteral<0.95>;
                    sampleFraction: z.ZodNumber;
                    cellRows: z.ZodNumber;
                    minCellRows: z.ZodNumber;
                    designEffect: z.ZodNumber;
                    omissionProbability: z.ZodObject<{
                        oneIdentity: z.ZodNumber;
                        boundedCell: z.ZodNumber;
                        boundedCellIdentities: z.ZodNumber;
                        maxMultiplicity: z.ZodNullable<z.ZodNumber>;
                        basis: z.ZodString;
                    }, z.core.$strict>;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"quantile_sketch">;
                    algorithm: z.ZodEnum<{
                        reservoir_sample: "reservoir_sample";
                        tdigest: "tdigest";
                    }>;
                    compression: z.ZodNumber;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"distinct_sketch">;
                    algorithm: z.ZodString;
                }, z.core.$strict>], "kind">>;
                estimate: z.ZodOptional<z.ZodObject<{
                    rows: z.ZodNumber;
                    bytes: z.ZodNumber;
                }, z.core.$strict>>;
                coverage: z.ZodObject<{
                    from: z.ZodISODateTime;
                    to: z.ZodISODateTime;
                    status: z.ZodEnum<{
                        complete: "complete";
                        partial: "partial";
                    }>;
                    reason: z.ZodOptional<z.ZodEnum<{
                        read_limit: "read_limit";
                        request_columns: "request_columns";
                        stored_range: "stored_range";
                    }>>;
                }, z.core.$strict>;
                freshness: z.ZodObject<{
                    watermark: z.ZodISODateTime;
                    openBucketFrom: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strict>;
                catalogRevision: z.ZodOptional<z.ZodString>;
                population: z.ZodOptional<z.ZodObject<{
                    kind: z.ZodLiteral<"services">;
                    services: z.ZodArray<z.ZodString>;
                    unmatchedRows: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            took: z.ZodNumber;
            executionMs: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        status: z.ZodLiteral<"rejected">;
        rejection: z.ZodObject<{
            status: z.ZodLiteral<"rejected">;
            spec: z.ZodObject<{
                version: z.ZodLiteral<2>;
                source: z.ZodObject<{
                    kind: z.ZodLiteral<"logs">;
                }, z.core.$strict>;
                predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown>>;
                dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"severity_number">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"column">;
                    name: z.ZodString;
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>;
                }, z.core.$strict>, z.ZodObject<{
                    op: z.ZodLiteral<"numeric">;
                    field: z.ZodType<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>>>;
                    order: z.ZodOptional<z.ZodEnum<{
                        newest: "newest";
                        oldest: "oldest";
                    }>>;
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
                }, z.core.$strict>], "op">;
                bucket: z.ZodOptional<z.ZodEnum<{
                    "1d": "1d";
                    "1h": "1h";
                    "1m": "1m";
                    "5m": "5m";
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
                exactness: z.ZodEnum<{
                    approximate_ok: "approximate_ok";
                    exact: "exact";
                }>;
                approximation: z.ZodOptional<z.ZodObject<{
                    maxRelativeError: z.ZodNumber;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            resolvedTimeRange: z.ZodObject<{
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>;
            reason: z.ZodString;
            suggestion: z.ZodOptional<z.ZodEnum<{
                allow_approximation: "allow_approximation";
                coarsen_bucket: "coarsen_bucket";
                narrow_window: "narrow_window";
                promote_attribute: "promote_attribute";
            }>>;
            skipped: z.ZodArray<z.ZodObject<{
                representation: z.ZodEnum<{
                    event_volume: "event_volume";
                    exact_scan: "exact_scan";
                    log_volume: "log_volume";
                    pattern_index: "pattern_index";
                    pattern_volume: "pattern_volume";
                    request_metrics: "request_metrics";
                    sampled_scan: "sampled_scan";
                    standing: "standing";
                }>;
                reason: z.ZodString;
                suggestion: z.ZodOptional<z.ZodEnum<{
                    allow_approximation: "allow_approximation";
                    coarsen_bucket: "coarsen_bucket";
                    narrow_window: "narrow_window";
                    promote_attribute: "promote_attribute";
                }>>;
            }, z.core.$strict>>;
            took: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        status: z.ZodLiteral<"error">;
        code: z.ZodString;
        message: z.ZodString;
        retryable: z.ZodBoolean;
    }, z.core.$strict>], "status">>;
    components: z.ZodArray<z.ZodObject<{
        component: z.ZodString;
        componentId: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        source: z.ZodEnum<{
            live_query: "live_query";
            static_artifact: "static_artifact";
            static_file: "static_file";
            static_props: "static_props";
        }>;
        status: z.ZodOptional<z.ZodEnum<{
            empty: "empty";
            error: "error";
            ok: "ok";
            rejected: "rejected";
        }>>;
        points: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type RenderDashboardOutput = z.infer<typeof RenderDashboardOutputSchema>;
export declare const DeleteDashboardInputSchema: z.ZodObject<{
    id: z.ZodUUID;
    expectedRevision: z.ZodNumber;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>;
export type DeleteDashboardInput = z.infer<typeof DeleteDashboardInputSchema>;
export declare const DeleteDashboardOutputSchema: z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    deletedAt: z.ZodISODateTime;
}, z.core.$strict>;
export type DeleteDashboardOutput = z.infer<typeof DeleteDashboardOutputSchema>;
export declare const listDashboards: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodUUID>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strict>, z.ZodObject<{
    dashboards: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        revision: z.ZodNumber;
        createdAt: z.ZodISODateTime;
        updatedAt: z.ZodISODateTime;
        capabilities: z.ZodObject<{
            update: z.ZodBoolean;
            delete: z.ZodBoolean;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strict>, "api">;
export declare const getDashboard: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    id: z.ZodUUID;
    includeFiles: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    definitionHash: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    source: z.ZodString;
    fileDescriptors: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        type: z.ZodEnum<{
            area_chart: "area_chart";
            flame_chart: "flame_chart";
            graph_chart: "graph_chart";
            metric: "metric";
            table: "table";
            timeseries: "timeseries";
            treemap_chart: "treemap_chart";
            waterfall_chart: "waterfall_chart";
        }>;
        bytes: z.ZodNumber;
        contentHash: z.ZodString;
    }, z.core.$strict>>;
    files: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
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
    }, z.core.$strict>], "type">]>>>;
}, z.core.$strict>, "api">;
export declare const validateDashboard: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    input: z.ZodObject<{
        source: z.ZodString;
        files: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
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
        }, z.core.$strict>], "type">]>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>, z.ZodObject<{
    valid: z.ZodBoolean;
    diagnostics: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        severity: z.ZodEnum<{
            error: "error";
            warning: "warning";
        }>;
        line: z.ZodOptional<z.ZodNumber>;
        column: z.ZodOptional<z.ZodNumber>;
        componentId: z.ZodOptional<z.ZodString>;
        filePath: z.ZodOptional<z.ZodString>;
        artifactPath: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        repairHint: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>, "api">;
export declare const createDashboard: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    id: z.ZodUUID;
    input: z.ZodObject<{
        source: z.ZodString;
        files: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
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
        }, z.core.$strict>], "type">]>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    definitionHash: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    editBase: z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodUUID;
        dashboardId: z.ZodUUID;
        revision: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>, "api">;
export declare const updateDashboard: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    id: z.ZodUUID;
    input: z.ZodObject<{
        source: z.ZodString;
        files: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
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
        }, z.core.$strict>], "type">]>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    definitionHash: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    editBase: z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodUUID;
        dashboardId: z.ZodUUID;
        revision: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>, "api">;
export declare const renderDashboard: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodOptional<z.ZodNumber>;
    timeRange: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">>;
    componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    definitionHash: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    resolvedTimeRange: z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>;
    document: z.ZodObject<{
        version: z.ZodLiteral<1>;
        root: z.ZodType<import("../mdx/index.js").SazabiMdxRootNode, unknown, z.core.$ZodTypeInternals<import("../mdx/index.js").SazabiMdxRootNode, unknown>>;
        componentNames: z.ZodArray<z.ZodString>;
        limits: z.ZodObject<{
            maxSourceLength: z.ZodNumber;
            maxNodeCount: z.ZodNumber;
            maxComponentCount: z.ZodNumber;
            maxTableRows: z.ZodNumber;
            maxChartPoints: z.ZodNumber;
            maxPropPayloadSize: z.ZodNumber;
            maxComponentDepth: z.ZodNumber;
            maxCodeBlockLength: z.ZodNumber;
            maxTextLength: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    requestedComponentIds: z.ZodArray<z.ZodString>;
    artifacts: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
        status: z.ZodLiteral<"ok">;
        data: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
        execution: z.ZodOptional<z.ZodObject<{
            spec: z.ZodObject<{
                version: z.ZodLiteral<2>;
                source: z.ZodObject<{
                    kind: z.ZodLiteral<"logs">;
                }, z.core.$strict>;
                predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown>>;
                dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"severity_number">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"column">;
                    name: z.ZodString;
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>;
                }, z.core.$strict>, z.ZodObject<{
                    op: z.ZodLiteral<"numeric">;
                    field: z.ZodType<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>>>;
                    order: z.ZodOptional<z.ZodEnum<{
                        newest: "newest";
                        oldest: "oldest";
                    }>>;
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
                }, z.core.$strict>], "op">;
                bucket: z.ZodOptional<z.ZodEnum<{
                    "1d": "1d";
                    "1h": "1h";
                    "1m": "1m";
                    "5m": "5m";
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
                exactness: z.ZodEnum<{
                    approximate_ok: "approximate_ok";
                    exact: "exact";
                }>;
                approximation: z.ZodOptional<z.ZodObject<{
                    maxRelativeError: z.ZodNumber;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            resolvedTimeRange: z.ZodObject<{
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>;
            meta: z.ZodObject<{
                representation: z.ZodEnum<{
                    event_volume: "event_volume";
                    exact_scan: "exact_scan";
                    log_volume: "log_volume";
                    pattern_index: "pattern_index";
                    pattern_volume: "pattern_volume";
                    request_metrics: "request_metrics";
                    sampled_scan: "sampled_scan";
                    standing: "standing";
                }>;
                exactness: z.ZodEnum<{
                    approximate: "approximate";
                    exact: "exact";
                }>;
                error: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"sampling">;
                    relativeBound: z.ZodNumber;
                    confidence: z.ZodLiteral<0.95>;
                    sampleFraction: z.ZodNumber;
                    cellRows: z.ZodNumber;
                    minCellRows: z.ZodNumber;
                    designEffect: z.ZodNumber;
                    omissionProbability: z.ZodObject<{
                        oneIdentity: z.ZodNumber;
                        boundedCell: z.ZodNumber;
                        boundedCellIdentities: z.ZodNumber;
                        maxMultiplicity: z.ZodNullable<z.ZodNumber>;
                        basis: z.ZodString;
                    }, z.core.$strict>;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"quantile_sketch">;
                    algorithm: z.ZodEnum<{
                        reservoir_sample: "reservoir_sample";
                        tdigest: "tdigest";
                    }>;
                    compression: z.ZodNumber;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"distinct_sketch">;
                    algorithm: z.ZodString;
                }, z.core.$strict>], "kind">>;
                estimate: z.ZodOptional<z.ZodObject<{
                    rows: z.ZodNumber;
                    bytes: z.ZodNumber;
                }, z.core.$strict>>;
                coverage: z.ZodObject<{
                    from: z.ZodISODateTime;
                    to: z.ZodISODateTime;
                    status: z.ZodEnum<{
                        complete: "complete";
                        partial: "partial";
                    }>;
                    reason: z.ZodOptional<z.ZodEnum<{
                        read_limit: "read_limit";
                        request_columns: "request_columns";
                        stored_range: "stored_range";
                    }>>;
                }, z.core.$strict>;
                freshness: z.ZodObject<{
                    watermark: z.ZodISODateTime;
                    openBucketFrom: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strict>;
                catalogRevision: z.ZodOptional<z.ZodString>;
                population: z.ZodOptional<z.ZodObject<{
                    kind: z.ZodLiteral<"services">;
                    services: z.ZodArray<z.ZodString>;
                    unmatchedRows: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            took: z.ZodNumber;
            executionMs: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>, z.ZodObject<{
        status: z.ZodLiteral<"empty">;
        execution: z.ZodObject<{
            spec: z.ZodObject<{
                version: z.ZodLiteral<2>;
                source: z.ZodObject<{
                    kind: z.ZodLiteral<"logs">;
                }, z.core.$strict>;
                predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown>>;
                dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"severity_number">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"column">;
                    name: z.ZodString;
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>;
                }, z.core.$strict>, z.ZodObject<{
                    op: z.ZodLiteral<"numeric">;
                    field: z.ZodType<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>>>;
                    order: z.ZodOptional<z.ZodEnum<{
                        newest: "newest";
                        oldest: "oldest";
                    }>>;
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
                }, z.core.$strict>], "op">;
                bucket: z.ZodOptional<z.ZodEnum<{
                    "1d": "1d";
                    "1h": "1h";
                    "1m": "1m";
                    "5m": "5m";
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
                exactness: z.ZodEnum<{
                    approximate_ok: "approximate_ok";
                    exact: "exact";
                }>;
                approximation: z.ZodOptional<z.ZodObject<{
                    maxRelativeError: z.ZodNumber;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            resolvedTimeRange: z.ZodObject<{
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>;
            meta: z.ZodObject<{
                representation: z.ZodEnum<{
                    event_volume: "event_volume";
                    exact_scan: "exact_scan";
                    log_volume: "log_volume";
                    pattern_index: "pattern_index";
                    pattern_volume: "pattern_volume";
                    request_metrics: "request_metrics";
                    sampled_scan: "sampled_scan";
                    standing: "standing";
                }>;
                exactness: z.ZodEnum<{
                    approximate: "approximate";
                    exact: "exact";
                }>;
                error: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"sampling">;
                    relativeBound: z.ZodNumber;
                    confidence: z.ZodLiteral<0.95>;
                    sampleFraction: z.ZodNumber;
                    cellRows: z.ZodNumber;
                    minCellRows: z.ZodNumber;
                    designEffect: z.ZodNumber;
                    omissionProbability: z.ZodObject<{
                        oneIdentity: z.ZodNumber;
                        boundedCell: z.ZodNumber;
                        boundedCellIdentities: z.ZodNumber;
                        maxMultiplicity: z.ZodNullable<z.ZodNumber>;
                        basis: z.ZodString;
                    }, z.core.$strict>;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"quantile_sketch">;
                    algorithm: z.ZodEnum<{
                        reservoir_sample: "reservoir_sample";
                        tdigest: "tdigest";
                    }>;
                    compression: z.ZodNumber;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"distinct_sketch">;
                    algorithm: z.ZodString;
                }, z.core.$strict>], "kind">>;
                estimate: z.ZodOptional<z.ZodObject<{
                    rows: z.ZodNumber;
                    bytes: z.ZodNumber;
                }, z.core.$strict>>;
                coverage: z.ZodObject<{
                    from: z.ZodISODateTime;
                    to: z.ZodISODateTime;
                    status: z.ZodEnum<{
                        complete: "complete";
                        partial: "partial";
                    }>;
                    reason: z.ZodOptional<z.ZodEnum<{
                        read_limit: "read_limit";
                        request_columns: "request_columns";
                        stored_range: "stored_range";
                    }>>;
                }, z.core.$strict>;
                freshness: z.ZodObject<{
                    watermark: z.ZodISODateTime;
                    openBucketFrom: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strict>;
                catalogRevision: z.ZodOptional<z.ZodString>;
                population: z.ZodOptional<z.ZodObject<{
                    kind: z.ZodLiteral<"services">;
                    services: z.ZodArray<z.ZodString>;
                    unmatchedRows: z.ZodNullable<z.ZodNumber>;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            took: z.ZodNumber;
            executionMs: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        status: z.ZodLiteral<"rejected">;
        rejection: z.ZodObject<{
            status: z.ZodLiteral<"rejected">;
            spec: z.ZodObject<{
                version: z.ZodLiteral<2>;
                source: z.ZodObject<{
                    kind: z.ZodLiteral<"logs">;
                }, z.core.$strict>;
                predicate: z.ZodType<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown, z.core.$ZodTypeInternals<import("../log-query/index.js").PredicateTree<{
                    kind: "service";
                } | {
                    kind: "severity_number";
                } | {
                    kind: "column";
                    name: string;
                } | {
                    kind: "attribute";
                    source: "log" | "resource" | "scope";
                    key: string;
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                }>, unknown>>;
                dimensions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    kind: z.ZodLiteral<"service">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"severity_number">;
                }, z.core.$strict>, z.ZodObject<{
                    kind: z.ZodLiteral<"column">;
                    name: z.ZodString;
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>;
                }, z.core.$strict>, z.ZodObject<{
                    op: z.ZodLiteral<"numeric">;
                    field: z.ZodType<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
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
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown, z.core.$ZodTypeInternals<{
                        kind: "service";
                    } | {
                        kind: "severity_number";
                    } | {
                        kind: "column";
                        name: string;
                    } | {
                        kind: "attribute";
                        source: "log" | "resource" | "scope";
                        key: string;
                    } | {
                        kind: "body";
                    } | {
                        kind: "message";
                    } | {
                        kind: "body_json";
                        path: string[];
                    }, unknown>>>>;
                    order: z.ZodOptional<z.ZodEnum<{
                        newest: "newest";
                        oldest: "oldest";
                    }>>;
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
                }, z.core.$strict>], "op">;
                bucket: z.ZodOptional<z.ZodEnum<{
                    "1d": "1d";
                    "1h": "1h";
                    "1m": "1m";
                    "5m": "5m";
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
                exactness: z.ZodEnum<{
                    approximate_ok: "approximate_ok";
                    exact: "exact";
                }>;
                approximation: z.ZodOptional<z.ZodObject<{
                    maxRelativeError: z.ZodNumber;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            resolvedTimeRange: z.ZodObject<{
                from: z.ZodISODateTime;
                to: z.ZodISODateTime;
            }, z.core.$strict>;
            reason: z.ZodString;
            suggestion: z.ZodOptional<z.ZodEnum<{
                allow_approximation: "allow_approximation";
                coarsen_bucket: "coarsen_bucket";
                narrow_window: "narrow_window";
                promote_attribute: "promote_attribute";
            }>>;
            skipped: z.ZodArray<z.ZodObject<{
                representation: z.ZodEnum<{
                    event_volume: "event_volume";
                    exact_scan: "exact_scan";
                    log_volume: "log_volume";
                    pattern_index: "pattern_index";
                    pattern_volume: "pattern_volume";
                    request_metrics: "request_metrics";
                    sampled_scan: "sampled_scan";
                    standing: "standing";
                }>;
                reason: z.ZodString;
                suggestion: z.ZodOptional<z.ZodEnum<{
                    allow_approximation: "allow_approximation";
                    coarsen_bucket: "coarsen_bucket";
                    narrow_window: "narrow_window";
                    promote_attribute: "promote_attribute";
                }>>;
            }, z.core.$strict>>;
            took: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        status: z.ZodLiteral<"error">;
        code: z.ZodString;
        message: z.ZodString;
        retryable: z.ZodBoolean;
    }, z.core.$strict>], "status">>;
    components: z.ZodArray<z.ZodObject<{
        component: z.ZodString;
        componentId: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        source: z.ZodEnum<{
            live_query: "live_query";
            static_artifact: "static_artifact";
            static_file: "static_file";
            static_props: "static_props";
        }>;
        status: z.ZodOptional<z.ZodEnum<{
            empty: "empty";
            error: "error";
            ok: "ok";
            rejected: "rejected";
        }>>;
        points: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>, "api">;
export declare const deleteDashboard: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    id: z.ZodUUID;
    expectedRevision: z.ZodNumber;
    projectId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strict>, z.ZodObject<{
    id: z.ZodUUID;
    revision: z.ZodNumber;
    deletedAt: z.ZodISODateTime;
}, z.core.$strict>, "api">;
