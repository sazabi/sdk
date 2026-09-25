import { type SazabiMdxPositionOf } from "./sazabi-mdx-layout.js";
import type { SazabiMdxCompileResult, SazabiMdxComponentRegistry, SazabiMdxDocument, SazabiMdxNode } from "./sazabi-mdx-schemas.js";
export interface SazabiMdxCompileOptions {
    limits?: Partial<SazabiMdxDocument["limits"]>;
}
/**
 * Compiles Sazabi MDX source to a safe typed JSON render tree.
 */
export declare const compileSazabiMdx: (source: string, registry: SazabiMdxComponentRegistry, options?: SazabiMdxCompileOptions) => SazabiMdxCompileResult;
/**
 * The compiler with component source positions kept, so later document-level
 * passes (dashboard rules) can locate their findings in the author's file.
 */
export declare const compileSazabiMdxTree: (source: string, registry: SazabiMdxComponentRegistry, options?: SazabiMdxCompileOptions) => {
    result: SazabiMdxCompileResult;
    children: SazabiMdxNode[];
    positionOf: SazabiMdxPositionOf;
};
