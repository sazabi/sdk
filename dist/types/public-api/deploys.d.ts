import { z } from "zod";
export declare const DeploySchema: z.ZodObject<{
    id: z.ZodString;
    service: z.ZodString;
    environment: z.ZodNullable<z.ZodString>;
    version: z.ZodString;
    commitSha: z.ZodNullable<z.ZodString>;
    url: z.ZodNullable<z.ZodString>;
    deployedAt: z.ZodString;
    createdAt: z.ZodString;
}, z.core.$strip>;
export type Deploy = z.infer<typeof DeploySchema>;
/** How far back a deploy may be recorded: daily recaps read 13 months. */
export declare const DEPLOY_MAX_AGE_DAYS = 30;
export declare const CreateDeployInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    service: z.ZodString;
    version: z.ZodString;
    environment: z.ZodOptional<z.ZodString>;
    commitSha: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    deployedAt: z.ZodOptional<z.ZodString>;
    idempotencyKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateDeployInput = z.infer<typeof CreateDeployInputSchema>;
export declare const CreateDeployOutputSchema: z.ZodObject<{
    deploy: z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        environment: z.ZodNullable<z.ZodString>;
        version: z.ZodString;
        commitSha: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        deployedAt: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
    created: z.ZodBoolean;
}, z.core.$strip>;
export type CreateDeployOutput = z.infer<typeof CreateDeployOutputSchema>;
export declare const ListDeploysInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    service: z.ZodOptional<z.ZodString>;
    since: z.ZodOptional<z.ZodString>;
    until: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListDeploysInput = z.infer<typeof ListDeploysInputSchema>;
export declare const ListDeploysOutputSchema: z.ZodObject<{
    deploys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        environment: z.ZodNullable<z.ZodString>;
        version: z.ZodString;
        commitSha: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        deployedAt: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListDeploysOutput = z.infer<typeof ListDeploysOutputSchema>;
export declare const createDeploy: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    service: z.ZodString;
    version: z.ZodString;
    environment: z.ZodOptional<z.ZodString>;
    commitSha: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    deployedAt: z.ZodOptional<z.ZodString>;
    idempotencyKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    deploy: z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        environment: z.ZodNullable<z.ZodString>;
        version: z.ZodString;
        commitSha: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        deployedAt: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
    created: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const listDeploys: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    service: z.ZodOptional<z.ZodString>;
    since: z.ZodOptional<z.ZodString>;
    until: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    deploys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        service: z.ZodString;
        environment: z.ZodNullable<z.ZodString>;
        version: z.ZodString;
        commitSha: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        deployedAt: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
