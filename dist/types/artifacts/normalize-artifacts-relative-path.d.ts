/**
 * Normalizes a path to one relative to the project artifacts root. Accepts
 * `/home/sazabi/artifacts/<p>` or a relative `<p>`; rejects absolute or
 * escaping paths.
 *
 * Pure string logic (no `node:path`) so the shared implementation stays
 * client-safe for browser consumers of this package.
 */
export declare const normalizeArtifactsRelativePath: (artifactPath: string, bareDirectoryMessage: string) => string;
