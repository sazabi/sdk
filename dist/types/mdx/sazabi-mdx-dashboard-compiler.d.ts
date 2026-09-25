import { type SazabiMdxArtifactBinding } from "./sazabi-mdx-artifact-props.js";
import type { DashboardEditBase, DashboardMetaProps } from "./sazabi-mdx-dashboard-schemas.js";
import type { SazabiMdxComponentInstance, SazabiMdxDiagnostic, SazabiMdxDocument } from "./sazabi-mdx-schemas.js";
/**
 * Compiles a saved dashboard's MDX (docs/design/app/mdx-dashboards): the
 * shared compiler and layout rules over the dashboard component set, plus the
 * rules only a dashboard has. The caller supplies the admission limits so the
 * owner, transports, and clients enforce one set of numbers.
 */
export interface DashboardMdxLimits {
    /** Canonical MDX (edit metadata excluded). */
    maxSourceCharacters: number;
    /** Serialized `editBase`, allowed on top of the source limit. */
    maxEditBaseBytes: number;
    /** One inline `artifact={...}` envelope, compact JSON bytes. */
    maxInlineEnvelopeBytes: number;
    /** Rendered charts, tables, metrics, and rich components. */
    maxVisualElements: number;
    /** Distinct live queries across the document. */
    maxDistinctQueries: number;
}
export interface DashboardMdxCompileSuccess {
    success: true;
    /** The shared render tree, with `editBase` removed from `DashboardMeta`. */
    document: SazabiMdxDocument;
    meta: Omit<DashboardMetaProps, "editBase">;
    /** The edit base the author's file carried, if any. */
    editBase: DashboardEditBase | null;
    /** What persistence stores and the definition hash covers. */
    canonicalSource: string;
    /** Artifact-bound components by their document-unique id. */
    bindings: Record<string, SazabiMdxArtifactBinding>;
    componentInstances: SazabiMdxComponentInstance[];
    diagnostics: SazabiMdxDiagnostic[];
}
export type DashboardMdxCompileResult = DashboardMdxCompileSuccess | {
    success: false;
    diagnostics: SazabiMdxDiagnostic[];
};
export declare const compileDashboardMdx: (source: string, limits: DashboardMdxLimits) => DashboardMdxCompileResult;
