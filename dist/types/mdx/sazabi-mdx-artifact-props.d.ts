import { type ArtifactDefinition, type SupportedArtifactType } from "../artifacts/index.js";
import { z } from "zod";
import type { SazabiMdxJsonValue } from "./sazabi-mdx-schemas.js";
/**
 * Artifact binding props shared by chat and dashboards (docs/design/app/
 * mdx-dashboards, "Shared MDX and artifact contract"). An artifact-bound
 * component takes exactly one of an inline `artifact={...}` definition or a
 * `path="..."` static file, plus an optional stable `id` that dashboards
 * require. The inline definition's `type` must be the component's own.
 */
/** The artifact type each artifact-bound component renders. */
export declare const SAZABI_MDX_ARTIFACT_TYPE_BY_COMPONENT: {
    readonly Timeseries: "timeseries";
    readonly AreaChart: "area_chart";
    readonly Table: "table";
    readonly Metric: "metric";
    readonly FlameChart: "flame_chart";
    readonly WaterfallChart: "waterfall_chart";
    readonly TreemapChart: "treemap_chart";
    readonly GraphChart: "graph_chart";
};
export type SazabiMdxArtifactComponentName = keyof typeof SAZABI_MDX_ARTIFACT_TYPE_BY_COMPONENT;
export declare const isSazabiMdxArtifactComponentName: (name: string) => name is SazabiMdxArtifactComponentName;
/** An inline artifact definition whose `type` is the component's. */
export declare const artifactPropSchemaFor: (type: SupportedArtifactType) => z.ZodType<ArtifactDefinition>;
/**
 * Props of a file-or-inline artifact component: `id`, and exactly one of
 * `path` or `artifact`.
 */
export declare const artifactBindingPropsSchema: (type: SupportedArtifactType) => z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
    artifact: z.ZodOptional<z.ZodType<{
        version: 1;
        type: "flame_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "waterfall_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                start: number;
                duration: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "area_chart";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number;
                }[];
            }[];
            stacked?: boolean | undefined;
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "treemap_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "graph_chart";
        data: {
            nodes: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                value?: number | undefined;
                detail?: string | undefined;
            }[];
            edges: {
                from: string;
                to: string;
                label?: string | undefined;
                value?: number | undefined;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
            }[];
            title?: string | undefined;
        };
    } | {
        version: 2;
        type: "area_chart";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number | null;
                }[];
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            stacked?: boolean | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "timeseries";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number | null;
                }[];
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            mode?: "area" | "bar" | "line" | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "table";
        data: {
            rows: Record<string, string | number | boolean | null>[];
        };
        view?: {
            title?: string | undefined;
            columns?: {
                field: string;
                label?: string | undefined;
                unit?: string | undefined;
            }[] | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "metric";
        data: {
            value: string | number;
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "flame_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "waterfall_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                start: number;
                duration: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "treemap_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "graph_chart";
        data: {
            nodes: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                value?: number | undefined;
                detail?: string | undefined;
            }[];
            edges: {
                from: string;
                to: string;
                label?: string | undefined;
                value?: number | undefined;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "area_chart";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            stacked?: boolean | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "timeseries";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            mode?: "area" | "bar" | "line" | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "table";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            columns?: {
                field: string;
                label?: string | undefined;
                unit?: string | undefined;
            }[] | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "metric";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        version: 1;
        type: "flame_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "waterfall_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                start: number;
                duration: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "area_chart";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number;
                }[];
            }[];
            stacked?: boolean | undefined;
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "treemap_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "graph_chart";
        data: {
            nodes: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                value?: number | undefined;
                detail?: string | undefined;
            }[];
            edges: {
                from: string;
                to: string;
                label?: string | undefined;
                value?: number | undefined;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
            }[];
            title?: string | undefined;
        };
    } | {
        version: 2;
        type: "area_chart";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number | null;
                }[];
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            stacked?: boolean | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "timeseries";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number | null;
                }[];
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            mode?: "area" | "bar" | "line" | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "table";
        data: {
            rows: Record<string, string | number | boolean | null>[];
        };
        view?: {
            title?: string | undefined;
            columns?: {
                field: string;
                label?: string | undefined;
                unit?: string | undefined;
            }[] | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "metric";
        data: {
            value: string | number;
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "flame_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "waterfall_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                start: number;
                duration: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "treemap_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "graph_chart";
        data: {
            nodes: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                value?: number | undefined;
                detail?: string | undefined;
            }[];
            edges: {
                from: string;
                to: string;
                label?: string | undefined;
                value?: number | undefined;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "area_chart";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            stacked?: boolean | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "timeseries";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            mode?: "area" | "bar" | "line" | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "table";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            columns?: {
                field: string;
                label?: string | undefined;
                unit?: string | undefined;
            }[] | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "metric";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    }, unknown>>>;
}, z.core.$strict>;
/**
 * Metric keeps its inline `value` and gains `artifact`/`path` alternatives;
 * exactly one of the three supplies the number.
 */
export declare const metricPropsSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
    artifact: z.ZodOptional<z.ZodType<{
        version: 1;
        type: "flame_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "waterfall_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                start: number;
                duration: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "area_chart";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number;
                }[];
            }[];
            stacked?: boolean | undefined;
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "treemap_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "graph_chart";
        data: {
            nodes: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                value?: number | undefined;
                detail?: string | undefined;
            }[];
            edges: {
                from: string;
                to: string;
                label?: string | undefined;
                value?: number | undefined;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
            }[];
            title?: string | undefined;
        };
    } | {
        version: 2;
        type: "area_chart";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number | null;
                }[];
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            stacked?: boolean | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "timeseries";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number | null;
                }[];
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            mode?: "area" | "bar" | "line" | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "table";
        data: {
            rows: Record<string, string | number | boolean | null>[];
        };
        view?: {
            title?: string | undefined;
            columns?: {
                field: string;
                label?: string | undefined;
                unit?: string | undefined;
            }[] | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "metric";
        data: {
            value: string | number;
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "flame_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "waterfall_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                start: number;
                duration: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "treemap_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "graph_chart";
        data: {
            nodes: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                value?: number | undefined;
                detail?: string | undefined;
            }[];
            edges: {
                from: string;
                to: string;
                label?: string | undefined;
                value?: number | undefined;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "area_chart";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            stacked?: boolean | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "timeseries";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            mode?: "area" | "bar" | "line" | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "table";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            columns?: {
                field: string;
                label?: string | undefined;
                unit?: string | undefined;
            }[] | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "metric";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        version: 1;
        type: "flame_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "waterfall_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                start: number;
                duration: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "area_chart";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number;
                }[];
            }[];
            stacked?: boolean | undefined;
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "treemap_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
            unit?: string | undefined;
            title?: string | undefined;
        };
    } | {
        version: 1;
        type: "graph_chart";
        data: {
            nodes: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                value?: number | undefined;
                detail?: string | undefined;
            }[];
            edges: {
                from: string;
                to: string;
                label?: string | undefined;
                value?: number | undefined;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
            }[];
            title?: string | undefined;
        };
    } | {
        version: 2;
        type: "area_chart";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number | null;
                }[];
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            stacked?: boolean | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "timeseries";
        data: {
            series: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                points: {
                    x: string | number;
                    y: number | null;
                }[];
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            mode?: "area" | "bar" | "line" | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "table";
        data: {
            rows: Record<string, string | number | boolean | null>[];
        };
        view?: {
            title?: string | undefined;
            columns?: {
                field: string;
                label?: string | undefined;
                unit?: string | undefined;
            }[] | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "metric";
        data: {
            value: string | number;
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "flame_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "waterfall_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                start: number;
                duration: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "treemap_chart";
        data: {
            items: {
                name: string;
                parent?: string | undefined;
                value: number;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                detail?: string | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "graph_chart";
        data: {
            nodes: {
                name: string;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
                value?: number | undefined;
                detail?: string | undefined;
            }[];
            edges: {
                from: string;
                to: string;
                label?: string | undefined;
                value?: number | undefined;
                tone?: "critical" | "danger" | "info" | "neutral" | "success" | "warning" | undefined;
            }[];
        };
        view?: {
            title?: string | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "area_chart";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            stacked?: boolean | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "timeseries";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            unit?: string | undefined;
            mode?: "area" | "bar" | "line" | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "table";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            title?: string | undefined;
            columns?: {
                field: string;
                label?: string | undefined;
                unit?: string | undefined;
            }[] | undefined;
        } | undefined;
    } | {
        version: 2;
        type: "metric";
        query: {
            version: 2;
            source: {
                kind: "logs";
            };
            predicate: import("../log-query/index.js").PredicateTree<{
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            }>;
            dimensions: ({
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
                kind: "pattern";
            } | {
                kind: "body";
            } | {
                kind: "message";
            } | {
                kind: "body_json";
                path: string[];
            })[];
            measure: {
                op: "count";
            } | {
                op: "event_rate";
            } | {
                op: "distinct";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
            } | {
                op: "numeric";
                field: {
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                };
                parseAs: "float64";
                aggregate: "avg" | "max" | "min" | "p50" | "p95" | "p99" | "sum";
                invalidValues: "drop" | "error";
            } | {
                op: "recent_rows";
                limit: number;
                fields?: ({
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
                    kind: "pattern";
                } | {
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
            } | {
                op: "error_count";
            } | {
                op: "duration";
                aggregate: "avg" | "max" | "p50" | "p95" | "p99" | "sum";
            };
            bucket?: "1d" | "1h" | "1m" | "5m" | undefined;
            output: "evidence" | "series" | "table";
            series?: {
                limit: number;
                overflow: "drop" | "other";
            } | undefined;
            exactness: "approximate_ok" | "exact";
            approximation?: {
                maxRelativeError: number;
            } | undefined;
            anchor?: {
                kind: "pattern";
                query: string;
            } | {
                kind: "patterns";
                patternIds: string[];
            } | undefined;
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    }, unknown>>>;
    label: z.ZodString;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    delta: z.ZodOptional<z.ZodString>;
    tone: z.ZodOptional<z.ZodEnum<{
        danger: "danger";
        neutral: "neutral";
        success: "success";
        warning: "warning";
    }>>;
}, z.core.$strict>;
/** Where an artifact-bound component's data comes from. */
export type SazabiMdxArtifactBinding = {
    kind: "inline";
    definition: ArtifactDefinition;
} | {
    kind: "file";
    path: string;
};
/**
 * Reads the binding of an artifact-bound component from its compiled props,
 * or null for components without one (including an inline-value Metric).
 * Props are trusted to have passed the component's schema.
 */
export declare const sazabiMdxArtifactBinding: (name: string, props: Record<string, SazabiMdxJsonValue>) => SazabiMdxArtifactBinding | null;
