/**
 * Maximum size of a video file served by reference from project store
 * (verifier render-time check and the dashboard read-by-path contract).
 */
export declare const VIDEO_FILE_MAX_BYTES: number;
/**
 * Normalizes a video path relative to the project artifacts root. Accepts
 * `/home/sazabi/artifacts/<p>` or a relative `<p>`; rejects absolute or
 * escaping paths and requires a supported video extension.
 */
export declare const normalizeProjectStoreVideoPath: (artifactPath: string) => string;
export declare const videoContentTypeFromPath: (normalizedPath: string) => string;
