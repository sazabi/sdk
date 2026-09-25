import type { SazabiMdxDocument } from "./sazabi-mdx-schemas.js";
/**
 * Flattens a Sazabi MDX document into plain text for model-context replay.
 * Deterministic, capped at {@link MAX_MODEL_TEXT_LENGTH} characters.
 */
export declare const sazabiMdxDocumentToModelText: (document: SazabiMdxDocument) => string;
