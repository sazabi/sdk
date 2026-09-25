export type ProjectStoreMediaKind = "image" | "video";
export interface ResolvedProjectStoreMediaPath {
    kind: ProjectStoreMediaKind;
    normalizedPath: string;
    contentType: string;
    maxBytes: number;
}
/**
 * Resolves a project-store media path as either an image or a video artifact.
 * Image extensions are tried first so existing Image paths keep their contract.
 */
export declare const resolveProjectStoreMediaPath: (artifactPath: string) => ResolvedProjectStoreMediaPath;
