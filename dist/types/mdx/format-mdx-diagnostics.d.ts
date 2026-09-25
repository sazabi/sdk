import type { SazabiMdxDiagnostic } from "./sazabi-mdx-schemas.js";
export declare const MDX_VALIDATION_FAILED_PREFIX = "Sazabi MDX validation failed";
export declare const isMdxValidationError: (error: unknown) => error is Error;
export declare const formatMdxDiagnostics: (diagnostics: SazabiMdxDiagnostic[]) => string;
