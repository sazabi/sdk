import { z } from "zod";
export declare const RepoProviderSchema: z.ZodEnum<{
    bitbucket: "bitbucket";
    github: "github";
}>;
export type RepoProvider = z.infer<typeof RepoProviderSchema>;
export declare const RepoSchema: z.ZodObject<{
    id: z.ZodString;
    accessSourceId: z.ZodString;
    source: z.ZodEnum<{
        githubApp: "githubApp";
        integration: "integration";
        personal: "personal";
    }>;
    sourceLabel: z.ZodString;
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
        source: z.ZodEnum<{
            githubApp: "githubApp";
            integration: "integration";
            personal: "personal";
        }>;
        sourceLabel: z.ZodString;
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
    removeIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type AddReposInput = z.infer<typeof AddReposInputSchema>;
export declare const AddReposResultSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    accessSourceId: z.ZodString;
    status: z.ZodLiteral<"linked">;
    repoId: z.ZodString;
    mappingId: z.ZodString;
    freshlyLinked: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    accessSourceId: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error: z.ZodObject<{
        code: z.ZodLiteral<"not_found">;
        message: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>], "status">;
export type AddReposResult = z.infer<typeof AddReposResultSchema>;
export declare const AddReposOutputSchema: z.ZodObject<{
    repos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accessSourceId: z.ZodString;
        source: z.ZodEnum<{
            githubApp: "githubApp";
            integration: "integration";
            personal: "personal";
        }>;
        sourceLabel: z.ZodString;
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
    results: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        accessSourceId: z.ZodString;
        status: z.ZodLiteral<"linked">;
        repoId: z.ZodString;
        mappingId: z.ZodString;
        freshlyLinked: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        accessSourceId: z.ZodString;
        status: z.ZodLiteral<"failed">;
        error: z.ZodObject<{
            code: z.ZodLiteral<"not_found">;
            message: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>], "status">>;
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
        source: z.ZodEnum<{
            githubApp: "githubApp";
            integration: "integration";
            personal: "personal";
        }>;
        sourceLabel: z.ZodString;
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
    removeIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    repos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accessSourceId: z.ZodString;
        source: z.ZodEnum<{
            githubApp: "githubApp";
            integration: "integration";
            personal: "personal";
        }>;
        sourceLabel: z.ZodString;
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
    results: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        accessSourceId: z.ZodString;
        status: z.ZodLiteral<"linked">;
        repoId: z.ZodString;
        mappingId: z.ZodString;
        freshlyLinked: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        accessSourceId: z.ZodString;
        status: z.ZodLiteral<"failed">;
        error: z.ZodObject<{
            code: z.ZodLiteral<"not_found">;
            message: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>], "status">>;
}, z.core.$strip>, "api">;
export declare const removeRepo: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodVoid, "api">;
export declare const GetRepoCapacityInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetRepoCapacityOutputSchema: z.ZodObject<{
    current: z.ZodNumber;
    countedRepoIds: z.ZodArray<z.ZodString>;
    exclusivelyMappedRepoIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type GetRepoCapacityInput = z.infer<typeof GetRepoCapacityInputSchema>;
export type GetRepoCapacityOutput = z.infer<typeof GetRepoCapacityOutputSchema>;
export declare const getRepoCapacity: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    current: z.ZodNumber;
    countedRepoIds: z.ZodArray<z.ZodString>;
    exclusivelyMappedRepoIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, "api">;
