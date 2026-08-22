import { z } from "zod";
export declare const RepoProviderSchema: z.ZodEnum<{
    bitbucket: "bitbucket";
    github: "github";
}>;
export type RepoProvider = z.infer<typeof RepoProviderSchema>;
export declare const RepoSchema: z.ZodObject<{
    id: z.ZodString;
    accessSourceId: z.ZodString;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
    }>;
    owner: z.ZodString;
    name: z.ZodString;
    fullName: z.ZodString;
    defaultBranch: z.ZodNullable<z.ZodString>;
    isPrivate: z.ZodBoolean;
    linked: z.ZodBoolean;
}, z.core.$strip>;
export type Repo = z.infer<typeof RepoSchema>;
export declare const ListReposInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListReposInput = z.infer<typeof ListReposInputSchema>;
export declare const ListReposOutputSchema: z.ZodObject<{
    repos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accessSourceId: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
        }>;
        owner: z.ZodString;
        name: z.ZodString;
        fullName: z.ZodString;
        defaultBranch: z.ZodNullable<z.ZodString>;
        isPrivate: z.ZodBoolean;
        linked: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListReposOutput = z.infer<typeof ListReposOutputSchema>;
export declare const AddReposInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    accessSourceIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AddReposInput = z.infer<typeof AddReposInputSchema>;
export declare const AddReposOutputSchema: z.ZodObject<{
    repos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accessSourceId: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
        }>;
        owner: z.ZodString;
        name: z.ZodString;
        fullName: z.ZodString;
        defaultBranch: z.ZodNullable<z.ZodString>;
        isPrivate: z.ZodBoolean;
        linked: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AddReposOutput = z.infer<typeof AddReposOutputSchema>;
export declare const RemoveRepoInputSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RemoveRepoInput = z.infer<typeof RemoveRepoInputSchema>;
export declare const RemoveRepoOutputSchema: z.ZodVoid;
export type RemoveRepoOutput = z.infer<typeof RemoveRepoOutputSchema>;
export declare const listRepos: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    repos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accessSourceId: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
        }>;
        owner: z.ZodString;
        name: z.ZodString;
        fullName: z.ZodString;
        defaultBranch: z.ZodNullable<z.ZodString>;
        isPrivate: z.ZodBoolean;
        linked: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const addRepos: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    accessSourceIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    repos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accessSourceId: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
        }>;
        owner: z.ZodString;
        name: z.ZodString;
        fullName: z.ZodString;
        defaultBranch: z.ZodNullable<z.ZodString>;
        isPrivate: z.ZodBoolean;
        linked: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const removeRepo: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodVoid, "api">;
