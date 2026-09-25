import type { SazabiMdxDiagnostic, SazabiMdxJsonValue } from "./sazabi-mdx-schemas.js";
interface StaticExpressionSuccess {
    success: true;
    value: SazabiMdxJsonValue;
}
interface StaticExpressionFailure {
    success: false;
    diagnostics: SazabiMdxDiagnostic[];
}
export type StaticExpressionResult = StaticExpressionSuccess | StaticExpressionFailure;
/**
 * Converts a parsed MDX expression into a static JSON-compatible value.
 */
export declare const staticJsonValueFromExpression: (expressionOrProgram: unknown) => StaticExpressionResult;
interface StaticJsxAttributesResult {
    props: Record<string, SazabiMdxJsonValue>;
    /** Paths are relative to the element's props. */
    diagnostics: SazabiMdxDiagnostic[];
}
/**
 * Reads parsed MDX JSX attributes as static props without executing
 * anything: string values, bare boolean props, and literal expressions.
 * Spreads, duplicate props, `style`, and event handlers are rejected.
 */
export declare const staticJsxAttributes: (attributes: readonly unknown[]) => StaticJsxAttributesResult;
export {};
