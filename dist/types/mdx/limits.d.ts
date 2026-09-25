import type { SazabiMdxLimits } from "./sazabi-mdx-schemas.js";
export declare const defaultSazabiMdxLimits: {
    maxSourceLength: number;
    maxNodeCount: number;
    maxComponentCount: number;
    maxTableRows: number;
    maxChartPoints: number;
    maxPropPayloadSize: number;
    maxComponentDepth: number;
    maxCodeBlockLength: number;
    maxTextLength: number;
};
/**
 * Merges caller-supplied partial limits with the safe package defaults.
 */
export declare const resolveSazabiMdxLimits: (limits?: Partial<SazabiMdxLimits>) => SazabiMdxLimits;
