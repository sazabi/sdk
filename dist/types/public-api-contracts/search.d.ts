import { z } from "zod";
/**
 * Shared input schema for project-scoped search endpoints.
 */
export declare const SearchInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
/**
 * Input schema for thread search with additional filters.
 */
export declare const SearchThreadsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        archived: "archived";
        regular: "regular";
    }>>;
}, z.core.$strip>;
/**
 * Input schema for message search with additional filters.
 */
export declare const SearchMessagesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    threadId: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        assistant: "assistant";
        user: "user";
    }>>;
}, z.core.$strip>;
/**
 * Schema for thread search results.
 */
export declare const SearchThreadsOutputSchema: z.ZodObject<{
    threads: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        labels: z.ZodArray<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        highlights: z.ZodArray<z.ZodString>;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        totalResults: z.ZodNumber;
        totalPages: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Schema for message search results.
 */
export declare const SearchMessagesOutputSchema: z.ZodObject<{
    messages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        threadId: z.ZodString;
        threadTitle: z.ZodString;
        role: z.ZodEnum<{
            assistant: "assistant";
            user: "user";
        }>;
        content: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        highlights: z.ZodArray<z.ZodString>;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        totalResults: z.ZodNumber;
        totalPages: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Contract-first search.threads operation.
 */
export declare const searchThreads: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        archived: "archived";
        regular: "regular";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    threads: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        status: z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>;
        labels: z.ZodArray<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        highlights: z.ZodArray<z.ZodString>;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        totalResults: z.ZodNumber;
        totalPages: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first search.messages operation.
 */
export declare const searchMessages: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    threadId: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        assistant: "assistant";
        user: "user";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    messages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        threadId: z.ZodString;
        threadTitle: z.ZodString;
        role: z.ZodEnum<{
            assistant: "assistant";
            user: "user";
        }>;
        content: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        highlights: z.ZodArray<z.ZodString>;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        totalResults: z.ZodNumber;
        totalPages: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Search contract tree.
 */
export declare const searchContract: {
    readonly threads: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        query: z.ZodString;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        status: z.ZodOptional<z.ZodEnum<{
            archived: "archived";
            regular: "regular";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        threads: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodOptional<z.ZodString>;
            title: z.ZodString;
            status: z.ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>;
            labels: z.ZodArray<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            highlights: z.ZodArray<z.ZodString>;
            score: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        pagination: z.ZodObject<{
            page: z.ZodNumber;
            limit: z.ZodNumber;
            totalResults: z.ZodNumber;
            totalPages: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly messages: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        query: z.ZodString;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        threadId: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodEnum<{
            assistant: "assistant";
            user: "user";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        messages: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            threadId: z.ZodString;
            threadTitle: z.ZodString;
            role: z.ZodEnum<{
                assistant: "assistant";
                user: "user";
            }>;
            content: z.ZodString;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            highlights: z.ZodArray<z.ZodString>;
            score: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        pagination: z.ZodObject<{
            page: z.ZodNumber;
            limit: z.ZodNumber;
            totalResults: z.ZodNumber;
            totalPages: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
export type SearchInput = z.infer<typeof SearchInputSchema>;
export type SearchThreadsInput = z.infer<typeof SearchThreadsInputSchema>;
export type SearchMessagesInput = z.infer<typeof SearchMessagesInputSchema>;
export type SearchThreadsOutput = z.infer<typeof SearchThreadsOutputSchema>;
export type SearchMessagesOutput = z.infer<typeof SearchMessagesOutputSchema>;
