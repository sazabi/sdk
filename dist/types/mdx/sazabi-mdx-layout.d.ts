import type { SazabiMdxComponentNode, SazabiMdxDiagnostic, SazabiMdxNode } from "./sazabi-mdx-schemas.js";
/**
 * Cross-node layout rules shared by chat and dashboards (docs/design/app/
 * mdx-dashboards, "MDX owns content and layout"). Prop schemas validate one
 * component at a time; these rules need the parent and the whole document.
 */
export type SazabiMdxPositionOf = (node: SazabiMdxComponentNode) => SazabiMdxDiagnostic["position"];
type Parent = {
    kind: "root";
} | {
    kind: "node";
    node: SazabiMdxNode;
};
interface VisitedComponent {
    node: SazabiMdxComponentNode;
    parent: Parent;
    /** Index among the parent's children. */
    index: number;
}
/** Every component in document order with its immediate parent. */
export declare const collectSazabiMdxComponents: (rootChildren: readonly SazabiMdxNode[]) => VisitedComponent[];
/**
 * The document-unique identity of a component, or undefined: `GridItem.id`
 * and the `id` of artifact-bound components share one namespace. Other
 * components' `id` props mean something else (a log record id, for one).
 */
export declare const sazabiMdxComponentId: (node: SazabiMdxComponentNode) => string | undefined;
/** Components whose data comes from an `artifact` or `path` binding. */
export declare const isSazabiMdxArtifactBound: (node: SazabiMdxComponentNode) => boolean;
export declare const verifySazabiMdxLayout: (rootChildren: readonly SazabiMdxNode[], positionOf: SazabiMdxPositionOf) => SazabiMdxDiagnostic[];
export {};
