import { z } from "zod";
export declare const MEMORY_CURATED_KINDS: readonly ["note", "runbook"];
export declare const MEMORY_KINDS: readonly ["note", "runbook", "change"];
export declare const MemoryKindSchema: z.ZodEnum<{
    change: "change";
    note: "note";
    runbook: "runbook";
}>;
export type MemoryKind = z.infer<typeof MemoryKindSchema>;
export declare const MemoryCuratedKindSchema: z.ZodEnum<{
    note: "note";
    runbook: "runbook";
}>;
export type MemoryCuratedKind = z.infer<typeof MemoryCuratedKindSchema>;
export declare const MemoryPathSchema: z.ZodString;
export type MemoryPath = z.infer<typeof MemoryPathSchema>;
export declare const MemoryBodySchema: z.ZodString;
export type MemoryBody = z.infer<typeof MemoryBodySchema>;
export declare const MemoryDurationSchema: z.ZodString;
export type MemoryDuration = z.infer<typeof MemoryDurationSchema>;
export declare const MemoryKindFilterSchema: z.ZodPipe<z.ZodString, z.ZodTransform<("change" | "note" | "runbook")[], string>>;
export declare const MemoryDocumentSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    kind: z.ZodEnum<{
        change: "change";
        note: "note";
        runbook: "runbook";
    }>;
    managed: z.ZodBoolean;
    path: z.ZodNullable<z.ZodString>;
    title: z.ZodNullable<z.ZodString>;
    contentHash: z.ZodString;
    attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type MemoryDocument = z.infer<typeof MemoryDocumentSchema>;
export declare const MemoryDocumentDetailSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    kind: z.ZodEnum<{
        change: "change";
        note: "note";
        runbook: "runbook";
    }>;
    managed: z.ZodBoolean;
    path: z.ZodNullable<z.ZodString>;
    title: z.ZodNullable<z.ZodString>;
    contentHash: z.ZodString;
    attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    body: z.ZodString;
}, z.core.$strip>;
export type MemoryDocumentDetail = z.infer<typeof MemoryDocumentDetailSchema>;
export declare const PutProjectMemoryInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    path: z.ZodString;
    body: z.ZodString;
    kind: z.ZodDefault<z.ZodEnum<{
        note: "note";
        runbook: "runbook";
    }>>;
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PutProjectMemoryInput = z.infer<typeof PutProjectMemoryInputSchema>;
export declare const PutProjectMemoryOutputSchema: z.ZodObject<{
    document: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        kind: z.ZodEnum<{
            change: "change";
            note: "note";
            runbook: "runbook";
        }>;
        managed: z.ZodBoolean;
        path: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        body: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PutProjectMemoryOutput = z.infer<typeof PutProjectMemoryOutputSchema>;
export declare const GetProjectMemoryInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetProjectMemoryInput = z.infer<typeof GetProjectMemoryInputSchema>;
export declare const GetProjectMemoryOutputSchema: z.ZodObject<{
    document: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        kind: z.ZodEnum<{
            change: "change";
            note: "note";
            runbook: "runbook";
        }>;
        managed: z.ZodBoolean;
        path: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        body: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetProjectMemoryOutput = z.infer<typeof GetProjectMemoryOutputSchema>;
export declare const ListProjectMemoryInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    kind: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<("change" | "note" | "runbook")[], string>>>;
    since: z.ZodOptional<z.ZodString>;
    service: z.ZodOptional<z.ZodString>;
    pathPrefix: z.ZodOptional<z.ZodString>;
    managed: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListProjectMemoryInput = z.infer<typeof ListProjectMemoryInputSchema>;
export declare const ListProjectMemoryOutputSchema: z.ZodObject<{
    documents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        kind: z.ZodEnum<{
            change: "change";
            note: "note";
            runbook: "runbook";
        }>;
        managed: z.ZodBoolean;
        path: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListProjectMemoryOutput = z.infer<typeof ListProjectMemoryOutputSchema>;
export declare const MemorySearchHitSchema: z.ZodObject<{
    documentId: z.ZodString;
    kind: z.ZodEnum<{
        change: "change";
        note: "note";
        runbook: "runbook";
    }>;
    managed: z.ZodBoolean;
    path: z.ZodNullable<z.ZodString>;
    title: z.ZodNullable<z.ZodString>;
    snippet: z.ZodString;
    score: z.ZodNumber;
}, z.core.$strip>;
export type MemorySearchHit = z.infer<typeof MemorySearchHitSchema>;
export declare const MemorySearchEmptyVerdictSchema: z.ZodObject<{
    calibrated: z.ZodLiteral<true>;
    minScoreThreshold: z.ZodNumber;
    queryTerms: z.ZodArray<z.ZodString>;
    message: z.ZodString;
}, z.core.$strip>;
export type MemorySearchEmptyVerdict = z.infer<typeof MemorySearchEmptyVerdictSchema>;
export declare const SearchProjectMemoryInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    kind: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<("change" | "note" | "runbook")[], string>>>;
    since: z.ZodOptional<z.ZodString>;
    service: z.ZodOptional<z.ZodString>;
    pathPrefix: z.ZodOptional<z.ZodString>;
    managed: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type SearchProjectMemoryInput = z.infer<typeof SearchProjectMemoryInputSchema>;
export declare const SearchProjectMemoryOutputSchema: z.ZodObject<{
    hits: z.ZodArray<z.ZodObject<{
        documentId: z.ZodString;
        kind: z.ZodEnum<{
            change: "change";
            note: "note";
            runbook: "runbook";
        }>;
        managed: z.ZodBoolean;
        path: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        snippet: z.ZodString;
        score: z.ZodNumber;
    }, z.core.$strip>>;
    emptyVerdict: z.ZodNullable<z.ZodObject<{
        calibrated: z.ZodLiteral<true>;
        minScoreThreshold: z.ZodNumber;
        queryTerms: z.ZodArray<z.ZodString>;
        message: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SearchProjectMemoryOutput = z.infer<typeof SearchProjectMemoryOutputSchema>;
export declare const DeleteProjectMemoryInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeleteProjectMemoryInput = z.infer<typeof DeleteProjectMemoryInputSchema>;
export declare const DeleteProjectMemoryOutputSchema: z.ZodObject<{
    deleted: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteProjectMemoryOutput = z.infer<typeof DeleteProjectMemoryOutputSchema>;
export declare const putProjectMemory: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    path: z.ZodString;
    body: z.ZodString;
    kind: z.ZodDefault<z.ZodEnum<{
        note: "note";
        runbook: "runbook";
    }>>;
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    document: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        kind: z.ZodEnum<{
            change: "change";
            note: "note";
            runbook: "runbook";
        }>;
        managed: z.ZodBoolean;
        path: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        body: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const getProjectMemory: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    document: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        kind: z.ZodEnum<{
            change: "change";
            note: "note";
            runbook: "runbook";
        }>;
        managed: z.ZodBoolean;
        path: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        body: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const listProjectMemory: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    kind: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<("change" | "note" | "runbook")[], string>>>;
    since: z.ZodOptional<z.ZodString>;
    service: z.ZodOptional<z.ZodString>;
    pathPrefix: z.ZodOptional<z.ZodString>;
    managed: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    documents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        kind: z.ZodEnum<{
            change: "change";
            note: "note";
            runbook: "runbook";
        }>;
        managed: z.ZodBoolean;
        path: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        contentHash: z.ZodString;
        attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const searchProjectMemory: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    kind: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<("change" | "note" | "runbook")[], string>>>;
    since: z.ZodOptional<z.ZodString>;
    service: z.ZodOptional<z.ZodString>;
    pathPrefix: z.ZodOptional<z.ZodString>;
    managed: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    hits: z.ZodArray<z.ZodObject<{
        documentId: z.ZodString;
        kind: z.ZodEnum<{
            change: "change";
            note: "note";
            runbook: "runbook";
        }>;
        managed: z.ZodBoolean;
        path: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        snippet: z.ZodString;
        score: z.ZodNumber;
    }, z.core.$strip>>;
    emptyVerdict: z.ZodNullable<z.ZodObject<{
        calibrated: z.ZodLiteral<true>;
        minScoreThreshold: z.ZodNumber;
        queryTerms: z.ZodArray<z.ZodString>;
        message: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const deleteProjectMemory: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    deleted: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const memoryContract: {
    readonly put: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        path: z.ZodString;
        body: z.ZodString;
        kind: z.ZodDefault<z.ZodEnum<{
            note: "note";
            runbook: "runbook";
        }>>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        document: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            kind: z.ZodEnum<{
                change: "change";
                note: "note";
                runbook: "runbook";
            }>;
            managed: z.ZodBoolean;
            path: z.ZodNullable<z.ZodString>;
            title: z.ZodNullable<z.ZodString>;
            contentHash: z.ZodString;
            attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            body: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        document: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            kind: z.ZodEnum<{
                change: "change";
                note: "note";
                runbook: "runbook";
            }>;
            managed: z.ZodBoolean;
            path: z.ZodNullable<z.ZodString>;
            title: z.ZodNullable<z.ZodString>;
            contentHash: z.ZodString;
            attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            body: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        kind: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<("change" | "note" | "runbook")[], string>>>;
        since: z.ZodOptional<z.ZodString>;
        service: z.ZodOptional<z.ZodString>;
        pathPrefix: z.ZodOptional<z.ZodString>;
        managed: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        documents: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            kind: z.ZodEnum<{
                change: "change";
                note: "note";
                runbook: "runbook";
            }>;
            managed: z.ZodBoolean;
            path: z.ZodNullable<z.ZodString>;
            title: z.ZodNullable<z.ZodString>;
            contentHash: z.ZodString;
            attrs: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly search: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        query: z.ZodString;
        kind: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<("change" | "note" | "runbook")[], string>>>;
        since: z.ZodOptional<z.ZodString>;
        service: z.ZodOptional<z.ZodString>;
        pathPrefix: z.ZodOptional<z.ZodString>;
        managed: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        hits: z.ZodArray<z.ZodObject<{
            documentId: z.ZodString;
            kind: z.ZodEnum<{
                change: "change";
                note: "note";
                runbook: "runbook";
            }>;
            managed: z.ZodBoolean;
            path: z.ZodNullable<z.ZodString>;
            title: z.ZodNullable<z.ZodString>;
            snippet: z.ZodString;
            score: z.ZodNumber;
        }, z.core.$strip>>;
        emptyVerdict: z.ZodNullable<z.ZodObject<{
            calibrated: z.ZodLiteral<true>;
            minScoreThreshold: z.ZodNumber;
            queryTerms: z.ZodArray<z.ZodString>;
            message: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        deleted: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
