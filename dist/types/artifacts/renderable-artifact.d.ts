import type { RenderableArtifact, StaticArtifactDefinition } from "./artifact-definition.js";
/**
 * Normalizes a static definition to the renderable version-2 shape
 * (docs/design/app/mdx-dashboards, "Versioned artifact definitions"): a
 * version-1 chart envelope's presentation fields move into `view` and its
 * data stays as authored. Stored files are never rewritten; every renderer
 * and the resolver read through this one mapping.
 */
export declare const toRenderableArtifact: (definition: StaticArtifactDefinition) => RenderableArtifact;
/**
 * How many values a renderer draws: series points that carry a value (a
 * `null` sample is a gap), table rows, hierarchy or timeline items, graph
 * nodes, or 1 for a metric. Zero means the component draws nothing.
 */
export declare const renderableArtifactPoints: (artifact: RenderableArtifact) => number;
