/**
 * Maximum size of a custom artifact JSON file served by reference (verifier
 * render-time check and the dashboard read-by-path contract share this cap).
 */
export declare const ARTIFACT_FILE_MAX_BYTES: number;
/**
 * Normalizes a custom artifact file path to a path relative to the project
 * artifacts root. Accepts `/home/sazabi/artifacts/<p>` or a relative `<p>`;
 * rejects absolute or escaping paths and requires a `.json` extension.
 *
 * Pure string logic (no `node:path`) so the shared implementation stays
 * client-safe for browser consumers of this package.
 */
export declare const normalizeCustomArtifactPath: (artifactPath: string) => string;
