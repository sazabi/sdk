import type { SazabiMdxComponentDefinition, SazabiMdxComponentRegistry } from "./sazabi-mdx-schemas.js";
/**
 * Defines one allowlisted Sazabi MDX component and its prop validation schema.
 */
export declare const defineSazabiMdxComponent: <TProps extends Record<string, unknown>>(definition: SazabiMdxComponentDefinition<TProps>) => SazabiMdxComponentDefinition<TProps>;
/**
 * Builds a component registry keyed by component name.
 */
export declare const defineSazabiMdxRegistry: (definitions: readonly SazabiMdxComponentDefinition[]) => SazabiMdxComponentRegistry;
export declare const issueCardRefComponent: SazabiMdxComponentDefinition<{
    issueId: string;
}>;
/**
 * Interactive secure env-var form. Deliberately NOT in
 * `defaultSazabiMdxRegistry`: `request_secret` is its only producer (via
 * `buildSingleComponentSazabiMdxDocument`), so `render_mdx` rejects it at
 * compile time. The tool result tells the model to wait for submission, and
 * thread replay matches submissions to the `request_secret` tool call — a
 * model-authored instance would render a form that replay could never
 * resolve.
 */
export declare const secretInputComponent: SazabiMdxComponentDefinition<{
    variableName?: string | undefined;
    description?: string | undefined;
}>;
export declare const timeseriesComponent: SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const tableComponent: SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const codeSnippetComponent: SazabiMdxComponentDefinition<{
    path: string;
}>;
export declare const imageComponent: SazabiMdxComponentDefinition<{
    path: string;
    alt: string;
    title?: string | undefined;
}>;
export declare const videoComponent: SazabiMdxComponentDefinition<{
    path: string;
    alt: string;
    title?: string | undefined;
}>;
export declare const flameChartComponent: SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const waterfallChartComponent: SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const areaChartComponent: SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const treemapChartComponent: SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const graphChartComponent: SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const customArtifactRefComponent: SazabiMdxComponentDefinition<{
    artifactId: string;
    kind: "code_snippet" | "table" | "timeseries";
    title?: string | undefined;
}>;
export declare const pullRequestRefComponent: SazabiMdxComponentDefinition<{
    repositoryFullName: string;
    number: number;
}>;
export declare const commitRefComponent: SazabiMdxComponentDefinition<{
    repositoryFullName: string;
    sha: string;
}>;
export declare const repositoryRefComponent: SazabiMdxComponentDefinition<{
    repositoryFullName: string;
}>;
export declare const codeSnippetRefComponent: SazabiMdxComponentDefinition<{
    repositoryFullName: string;
    path: string;
    ref: string;
    startLine?: number | undefined;
    endLine?: number | undefined;
    title?: string | undefined;
}>;
export declare const metricComponent: SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
    label: string;
    value?: string | number | undefined;
    delta?: string | undefined;
    tone?: "danger" | "neutral" | "success" | "warning" | undefined;
}>;
export declare const mcpConnectorCardComponent: SazabiMdxComponentDefinition<{
    providerId: string;
    connectionId?: string | undefined;
    renderingMode?: "action" | "row" | undefined;
    title?: string | undefined;
}>;
export declare const mcpConnectorListComponent: SazabiMdxComponentDefinition<{
    providerIds?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}>;
export declare const logSourceConnectionCardComponent: SazabiMdxComponentDefinition<{
    provider: string;
    connectionId?: string | undefined;
    renderingMode?: "action" | "row" | undefined;
}>;
export declare const logSourceConnectionListComponent: SazabiMdxComponentDefinition<{
    providers?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}>;
export declare const logSourceSetupComponent: SazabiMdxComponentDefinition<{
    provider: string;
    renderingMode?: "action" | "row" | undefined;
}>;
export declare const logSourceActivityComponent: SazabiMdxComponentDefinition<{
    provider?: string | undefined;
    lookbackDays?: number | undefined;
}>;
export declare const dataSourceConnectionCardComponent: SazabiMdxComponentDefinition<{
    dataSourceType: string;
    connectionId?: string | undefined;
    renderingMode?: "action" | "row" | undefined;
}>;
export declare const dataSourceConnectionListComponent: SazabiMdxComponentDefinition<{
    dataSourceTypes?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}>;
export declare const dataSourceSetupComponent: SazabiMdxComponentDefinition<{
    dataSourceType: string;
    renderingMode?: "action" | "row" | undefined;
}>;
export declare const dataSourceActivityComponent: SazabiMdxComponentDefinition<{
    dataSourceType?: string | undefined;
    lookbackDays?: number | undefined;
}>;
export declare const integrationCardComponent: SazabiMdxComponentDefinition<{
    provider: string;
    connectionId?: string | undefined;
    renderingMode?: "action" | "row" | undefined;
}>;
export declare const integrationListComponent: SazabiMdxComponentDefinition<{
    providers?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}>;
export declare const connectedAccountCardComponent: SazabiMdxComponentDefinition<{
    provider: string;
    connectionId?: string | undefined;
    renderingMode?: "action" | "row" | undefined;
}>;
export declare const sandboxCliCardComponent: SazabiMdxComponentDefinition<{
    presetType: string;
    renderingMode?: "action" | "row" | undefined;
}>;
export declare const sandboxCliListComponent: SazabiMdxComponentDefinition<{
    presetTypes?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}>;
export declare const dashboardMetaComponent: SazabiMdxComponentDefinition<{
    version: 1;
    title: string;
    description: string;
    defaultTimeRange: {
        kind: "absolute";
        from: string;
        to: string;
    } | {
        kind: "relative";
        lookbackSeconds: number;
    };
    editBase?: {
        organizationId: string;
        projectId: string;
        dashboardId: string;
        revision: number;
    } | undefined;
}>;
export declare const gridComponent: SazabiMdxComponentDefinition<{
    columns: number;
}>;
export declare const gridItemComponent: SazabiMdxComponentDefinition<{
    id: string;
    span: number;
    height?: "compact" | "medium" | "tall" | undefined;
}>;
export declare const sazabiMdxComponentDefinitions: (SazabiMdxComponentDefinition<{
    issueId: string;
}> | SazabiMdxComponentDefinition<{
    id?: string | undefined;
    path?: string | undefined;
    artifact?: {
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
                    kind: "body";
                } | {
                    kind: "message";
                } | {
                    kind: "body_json";
                    path: string[];
                })[] | undefined;
                order?: "newest" | "oldest" | undefined;
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
        };
        view?: {
            unit?: string | undefined;
        } | undefined;
    } | undefined;
}> | SazabiMdxComponentDefinition<{
    path: string;
}> | SazabiMdxComponentDefinition<{
    artifactId: string;
    kind: "code_snippet" | "table" | "timeseries";
    title?: string | undefined;
}> | SazabiMdxComponentDefinition<{
    repositoryFullName: string;
}> | SazabiMdxComponentDefinition<{
    id: string;
    toolCallId?: string | undefined;
    params?: Record<string, import("./sazabi-mdx-schemas.js").SazabiMdxJsonValue> | undefined;
    title?: string | undefined;
}> | SazabiMdxComponentDefinition<{
    before: string;
    after: string;
    filename: string;
    language?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
}> | SazabiMdxComponentDefinition<{
    title?: string | undefined;
    columns?: string[] | undefined;
    rows: Record<string, import("./sazabi-mdx-schemas.js").SazabiMdxJsonValue>[];
}> | SazabiMdxComponentDefinition<{
    title?: string | undefined;
    type: "bar" | "line";
    xKey: string;
    yKey: string;
    seriesKey?: string | undefined;
    data: Record<string, import("./sazabi-mdx-schemas.js").SazabiMdxJsonValue>[];
}> | SazabiMdxComponentDefinition<{
    tone: "danger" | "info" | "success" | "warning";
    title?: string | undefined;
}> | SazabiMdxComponentDefinition<{
    label: string;
    status: "danger" | "info" | "neutral" | "success" | "warning";
}> | SazabiMdxComponentDefinition<{
    title: string;
    description?: string | undefined;
    href?: string | undefined;
    cta?: string | undefined;
    icon?: "data-sources" | "integrations" | "log-sources" | "mcp-connectors" | "sandbox" | undefined;
}> | SazabiMdxComponentDefinition<{
    providerId: string;
    connectionId?: string | undefined;
    renderingMode?: "action" | "row" | undefined;
    title?: string | undefined;
}> | SazabiMdxComponentDefinition<{
    providerIds?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}> | SazabiMdxComponentDefinition<{
    providers?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}> | SazabiMdxComponentDefinition<{
    provider: string;
    renderingMode?: "action" | "row" | undefined;
}> | SazabiMdxComponentDefinition<{
    provider?: string | undefined;
    lookbackDays?: number | undefined;
}> | SazabiMdxComponentDefinition<{
    dataSourceTypes?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}> | SazabiMdxComponentDefinition<{
    dataSourceType: string;
    renderingMode?: "action" | "row" | undefined;
}> | SazabiMdxComponentDefinition<{
    dataSourceType?: string | undefined;
    lookbackDays?: number | undefined;
}> | SazabiMdxComponentDefinition<{
    presetType: string;
    renderingMode?: "action" | "row" | undefined;
}> | SazabiMdxComponentDefinition<{
    presetTypes?: string[] | undefined;
    renderingMode?: "action" | "row" | undefined;
    showConnected?: boolean | undefined;
    showAvailable?: boolean | undefined;
}> | SazabiMdxComponentDefinition<{
    version: 1;
    title: string;
    description: string;
    defaultTimeRange: {
        kind: "absolute";
        from: string;
        to: string;
    } | {
        kind: "relative";
        lookbackSeconds: number;
    };
    editBase?: {
        organizationId: string;
        projectId: string;
        dashboardId: string;
        revision: number;
    } | undefined;
}> | SazabiMdxComponentDefinition<{
    columns: number;
}> | SazabiMdxComponentDefinition<{
    id: string;
    span: number;
    height?: "compact" | "medium" | "tall" | undefined;
}>)[];
export declare const defaultSazabiMdxRegistry: SazabiMdxComponentRegistry;
export declare const dashboardSazabiMdxRegistry: SazabiMdxComponentRegistry;
/**
 * Returns prompt-ready documentation for allowlisted Sazabi MDX components.
 */
export declare const describeSazabiMdxRegistry: (registry?: SazabiMdxComponentRegistry) => string;
