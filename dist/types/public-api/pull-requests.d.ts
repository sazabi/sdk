import { z } from "zod";
export declare const PullRequestStatusSchema: z.ZodEnum<{
    closed: "closed";
    merged: "merged";
    open: "open";
}>;
export type PullRequestStatus = z.infer<typeof PullRequestStatusSchema>;
export declare const PullRequestReviewStateSchema: z.ZodEnum<{
    approved: "approved";
    changes_requested: "changes_requested";
    review_required: "review_required";
}>;
export declare const PullRequestChecksStateSchema: z.ZodEnum<{
    failing: "failing";
    passing: "passing";
    pending: "pending";
}>;
export declare const PullRequestSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    repositoryFullName: z.ZodString;
    pullRequestId: z.ZodString;
    githubPullRequestId: z.ZodNumber;
    title: z.ZodNullable<z.ZodString>;
    url: z.ZodNullable<z.ZodString>;
    status: z.ZodNullable<z.ZodEnum<{
        closed: "closed";
        merged: "merged";
        open: "open";
    }>>;
    reviewState: z.ZodNullable<z.ZodEnum<{
        approved: "approved";
        changes_requested: "changes_requested";
        review_required: "review_required";
    }>>;
    checksState: z.ZodNullable<z.ZodEnum<{
        failing: "failing";
        passing: "passing";
        pending: "pending";
    }>>;
    requestedByUserId: z.ZodNullable<z.ZodString>;
    authorLogin: z.ZodNullable<z.ZodString>;
    githubAuthorLogin: z.ZodNullable<z.ZodString>;
    threadId: z.ZodNullable<z.ZodString>;
    runId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    mergedAt: z.ZodNullable<z.ZodString>;
    closedAt: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type PullRequest = z.infer<typeof PullRequestSchema>;
export declare const ListPullRequestsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        closed: "closed";
        merged: "merged";
        open: "open";
    }>>;
    repositoryFullName: z.ZodOptional<z.ZodString>;
    requestedByUserId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListPullRequestsInput = z.infer<typeof ListPullRequestsInputSchema>;
export declare const ListPullRequestsOutputSchema: z.ZodObject<{
    pullRequests: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        repositoryFullName: z.ZodString;
        pullRequestId: z.ZodString;
        githubPullRequestId: z.ZodNumber;
        title: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            closed: "closed";
            merged: "merged";
            open: "open";
        }>>;
        reviewState: z.ZodNullable<z.ZodEnum<{
            approved: "approved";
            changes_requested: "changes_requested";
            review_required: "review_required";
        }>>;
        checksState: z.ZodNullable<z.ZodEnum<{
            failing: "failing";
            passing: "passing";
            pending: "pending";
        }>>;
        requestedByUserId: z.ZodNullable<z.ZodString>;
        authorLogin: z.ZodNullable<z.ZodString>;
        githubAuthorLogin: z.ZodNullable<z.ZodString>;
        threadId: z.ZodNullable<z.ZodString>;
        runId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        mergedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListPullRequestsOutput = z.infer<typeof ListPullRequestsOutputSchema>;
export declare const listPullRequests: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        closed: "closed";
        merged: "merged";
        open: "open";
    }>>;
    repositoryFullName: z.ZodOptional<z.ZodString>;
    requestedByUserId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    pullRequests: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        repositoryFullName: z.ZodString;
        pullRequestId: z.ZodString;
        githubPullRequestId: z.ZodNumber;
        title: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            closed: "closed";
            merged: "merged";
            open: "open";
        }>>;
        reviewState: z.ZodNullable<z.ZodEnum<{
            approved: "approved";
            changes_requested: "changes_requested";
            review_required: "review_required";
        }>>;
        checksState: z.ZodNullable<z.ZodEnum<{
            failing: "failing";
            passing: "passing";
            pending: "pending";
        }>>;
        requestedByUserId: z.ZodNullable<z.ZodString>;
        authorLogin: z.ZodNullable<z.ZodString>;
        githubAuthorLogin: z.ZodNullable<z.ZodString>;
        threadId: z.ZodNullable<z.ZodString>;
        runId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        mergedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const pullRequestsContract: {
    list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            closed: "closed";
            merged: "merged";
            open: "open";
        }>>;
        repositoryFullName: z.ZodOptional<z.ZodString>;
        requestedByUserId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        pullRequests: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            repositoryFullName: z.ZodString;
            pullRequestId: z.ZodString;
            githubPullRequestId: z.ZodNumber;
            title: z.ZodNullable<z.ZodString>;
            url: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<{
                closed: "closed";
                merged: "merged";
                open: "open";
            }>>;
            reviewState: z.ZodNullable<z.ZodEnum<{
                approved: "approved";
                changes_requested: "changes_requested";
                review_required: "review_required";
            }>>;
            checksState: z.ZodNullable<z.ZodEnum<{
                failing: "failing";
                passing: "passing";
                pending: "pending";
            }>>;
            requestedByUserId: z.ZodNullable<z.ZodString>;
            authorLogin: z.ZodNullable<z.ZodString>;
            githubAuthorLogin: z.ZodNullable<z.ZodString>;
            threadId: z.ZodNullable<z.ZodString>;
            runId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            mergedAt: z.ZodNullable<z.ZodString>;
            closedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
