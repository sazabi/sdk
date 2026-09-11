import { z } from "zod";
/** Public artifact metadata; storage keys are never exposed. */
export declare const ArtifactSchema: z.ZodObject<{
    id: z.ZodString;
    issueId: z.ZodNullable<z.ZodString>;
    type: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    contentType: z.ZodNullable<z.ZodString>;
    sizeBytes: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export type Artifact = z.infer<typeof ArtifactSchema>;
declare const artifactPage: z.ZodObject<{
    artifacts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        issueId: z.ZodNullable<z.ZodString>;
        type: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ArtifactsPage = z.infer<typeof artifactPage>;
declare const artifactsListInput: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    issueId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListArtifactsInput = z.infer<typeof artifactsListInput>;
export type ListArtifactsOutput = ArtifactsPage;
export declare const artifactsList: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    issueId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    artifacts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        issueId: z.ZodNullable<z.ZodString>;
        type: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const artifactsListIssueArtifacts: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    artifacts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        issueId: z.ZodNullable<z.ZodString>;
        type: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export type ListIssueArtifactsInput = z.infer<typeof artifactsListIssueArtifacts.input>;
export type ListIssueArtifactsOutput = ArtifactsPage;
export declare const artifactsGetArtifact: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    artifactId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    issueId: z.ZodNullable<z.ZodString>;
    type: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    contentType: z.ZodNullable<z.ZodString>;
    sizeBytes: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodString;
}, z.core.$strip>, "api">;
export type GetArtifactInput = z.infer<typeof artifactsGetArtifact.input>;
export type GetArtifactOutput = z.infer<typeof artifactsGetArtifact.output>;
export declare const artifactsDownload: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    artifactId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    url: z.ZodString;
    expiresAt: z.ZodString;
    contentType: z.ZodNullable<z.ZodString>;
    sizeBytes: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>, "api">;
export type DownloadArtifactInput = z.infer<typeof artifactsDownload.input>;
export type DownloadArtifactOutput = z.infer<typeof artifactsDownload.output>;
export declare const artifactsDelete: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    artifactId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodVoid, "api">;
export type DeleteArtifactInput = z.infer<typeof artifactsDelete.input>;
export type DeleteArtifactOutput = z.infer<typeof artifactsDelete.output>;
export {};
