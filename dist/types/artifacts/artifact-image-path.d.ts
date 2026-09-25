/**
 * Maximum size of an image file served by reference from project store
 * (verifier render-time check and the dashboard read-by-path contract).
 */
export declare const IMAGE_FILE_MAX_BYTES: number;
/**
 * Normalizes an image path relative to the project artifacts root. Accepts
 * `/home/sazabi/artifacts/<p>` or a relative `<p>`; rejects absolute or
 * escaping paths and requires a supported image extension.
 */
export declare const normalizeProjectStoreImagePath: (artifactPath: string) => string;
export declare const imageContentTypeFromPath: (normalizedPath: string) => string;
