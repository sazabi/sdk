import { type SazabiMdxComponentDefinition, type SazabiMdxDocument, type SazabiMdxJsonValue } from "./sazabi-mdx-schemas.js";
/**
 * Builds a descriptor document containing a single registry component,
 * producing the same document `compileSazabiMdx` would for `<Name ...props />`.
 * Props are typed from the definition and validated against its propSchema,
 * so programmatic producers get the registry validation the document schema
 * alone does not enforce.
 */
export declare const buildSingleComponentSazabiMdxDocument: <TProps extends Record<string, SazabiMdxJsonValue | undefined>>(definition: SazabiMdxComponentDefinition<TProps>, props: TProps) => SazabiMdxDocument;
/**
 * Walks a descriptor document and returns the validated props of every
 * instance of the given registry component. Accepts untrusted persisted
 * data; returns an empty array when the document is absent or malformed.
 * Cardinality is the caller's decision — consumers wanting "the" instance
 * take the first element.
 */
export declare const findSazabiMdxComponentProps: <TProps extends Record<string, SazabiMdxJsonValue | undefined>>(document: unknown, definition: SazabiMdxComponentDefinition<TProps>) => TProps[];
