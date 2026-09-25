import { z } from "zod";
export declare const CreateIssueInputObjectSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    contentMdx: z.ZodOptional<z.ZodString>;
    severity: z.ZodDefault<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    componentId: z.ZodOptional<z.ZodString>;
    statusStartedAt: z.ZodOptional<z.ZodString>;
    suspectedPullRequest: z.ZodOptional<z.ZodObject<{
        provider: z.ZodDefault<z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
        }>>;
        repositoryFullName: z.ZodString;
        number: z.ZodNumber;
    }, z.core.$strip>>;
    sample: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const CreateIssueInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    contentMdx: z.ZodOptional<z.ZodString>;
    severity: z.ZodDefault<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    componentId: z.ZodOptional<z.ZodString>;
    statusStartedAt: z.ZodOptional<z.ZodString>;
    suspectedPullRequest: z.ZodOptional<z.ZodObject<{
        provider: z.ZodDefault<z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
        }>>;
        repositoryFullName: z.ZodString;
        number: z.ZodNumber;
    }, z.core.$strip>>;
    sample: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateIssueInput = z.infer<typeof CreateIssueInputSchema>;
