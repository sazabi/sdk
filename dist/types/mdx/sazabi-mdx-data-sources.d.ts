import type { SazabiMdxNode } from "./sazabi-mdx-schemas.js";
/**
 * Where a visual component's data comes from. Only `live_query` reads the
 * project's telemetry; every `static_*` source draws what the author wrote.
 */
export declare const SAZABI_MDX_DATA_SOURCES: readonly [
/** An inline `artifact={{ query }}`, run over the selected window. */
"live_query", 
/** A `path="..."` static file. */
"static_file", 
/** An inline `artifact={{ data }}` definition. */
"static_artifact", 
/** Literal props: a Metric `value`, Chart `data`, or DataTable `rows`. */
"static_props"];
export type SazabiMdxDataSource = (typeof SAZABI_MDX_DATA_SOURCES)[number];
export interface SazabiMdxDataComponent {
    component: string;
    /** Stable id; every artifact-bound component has one. */
    componentId?: string;
    /** The title or Metric label the component shows, when authored in the MDX. */
    title?: string;
    source: SazabiMdxDataSource;
    /** Values a `static_props` component draws; bound components learn theirs on resolution. */
    points?: number;
}
/**
 * Every chart, table, and metric in a render tree, in document order, with
 * the source of its data. Literal-prop components are included so no caller
 * can mistake authored numbers for resolved telemetry.
 */
export declare const describeSazabiMdxDataComponents: (rootChildren: readonly SazabiMdxNode[]) => SazabiMdxDataComponent[];
