import type { SazabiMdxDocument, SazabiMdxNode } from "./sazabi-mdx-schemas.js";
/**
 * Splits a compiled Sazabi MDX document into the two pieces a non-MDX
 * surface (Slack, Teams, GitHub, Linear, SMS, email, …) needs:
 *
 * - `markdown`: prose (headings, paragraphs, lists, blockquotes, code, …)
 *   serialized back to plain markdown, ready for a surface-specific markdown
 *   converter (e.g. `convertMarkdownToSlackMrkdwn`).
 * - `visualDocument`: a sub-document containing only the top-level
 *   registered components and tables, meant to be rendered to images via the
 *   existing `runMdxRender()` / `collectOutboundArtifactFiles()` pipeline.
 *
 * The dashboard (an MDX-native surface) does not use this split — it renders
 * the full document directly.
 */
export interface SplitSazabiMdxDocumentResult {
    markdown: string;
    visualDocument: SazabiMdxDocument | null;
}
export declare const splitSazabiMdxDocumentForNonMdxSurface: (document: SazabiMdxDocument) => SplitSazabiMdxDocumentResult;
/** Renders one top-level (block) node to a markdown string. */
export declare const renderMdxNodeToMarkdown: (node: SazabiMdxNode) => string;
