import { z } from "zod";
/**
 * Connected-account providers that can be managed via the CLI/public API.
 * Kept inline so this isomorphic package does not pull in server-only code.
 */
export declare const CONNECTED_ACCOUNT_PROVIDER_VALUES: readonly ["github", "google", "microsoft", "linear", "bitbucket", "slack"];
export declare const ConnectedAccountProviderEnum: z.ZodEnum<{
    bitbucket: "bitbucket";
    github: "github";
    google: "google";
    linear: "linear";
    microsoft: "microsoft";
    slack: "slack";
}>;
export declare const BeginConnectedAccountConnectInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        google: "google";
        linear: "linear";
        microsoft: "microsoft";
        slack: "slack";
    }>;
}, z.core.$strip>;
export declare const BeginConnectedAccountConnectOutputSchema: z.ZodObject<{
    url: z.ZodString;
    attemptId: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strip>;
export type BeginConnectedAccountConnectInput = z.infer<typeof BeginConnectedAccountConnectInputSchema>;
export type BeginConnectedAccountConnectOutput = z.infer<typeof BeginConnectedAccountConnectOutputSchema>;
export declare const beginConnectedAccountConnect: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        google: "google";
        linear: "linear";
        microsoft: "microsoft";
        slack: "slack";
    }>;
}, z.core.$strip>, z.ZodObject<{
    url: z.ZodString;
    attemptId: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const ConnectedAccountConnectAttemptStatusEnum: z.ZodEnum<{
    completed: "completed";
    expired: "expired";
    failed: "failed";
    pending: "pending";
}>;
export declare const GetConnectedAccountConnectAttemptInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    attemptId: z.ZodString;
}, z.core.$strip>;
export declare const GetConnectedAccountConnectAttemptOutputSchema: z.ZodObject<{
    status: z.ZodEnum<{
        completed: "completed";
        expired: "expired";
        failed: "failed";
        pending: "pending";
    }>;
    errorCode: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetConnectedAccountConnectAttemptInput = z.infer<typeof GetConnectedAccountConnectAttemptInputSchema>;
export type GetConnectedAccountConnectAttemptOutput = z.infer<typeof GetConnectedAccountConnectAttemptOutputSchema>;
export declare const getConnectedAccountConnectAttempt: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    attemptId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodEnum<{
        completed: "completed";
        expired: "expired";
        failed: "failed";
        pending: "pending";
    }>;
    errorCode: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const ListConnectedAccountsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ConnectedAccountSchema: z.ZodObject<{
    provider: z.ZodString;
    externalName: z.ZodNullable<z.ZodString>;
    externalLogin: z.ZodNullable<z.ZodString>;
    connectedAt: z.ZodNullable<z.ZodString>;
    authMode: z.ZodNullable<z.ZodEnum<{
        oauth: "oauth";
        pat: "pat";
    }>>;
    needsReconnect: z.ZodBoolean;
}, z.core.$strip>;
export declare const ListConnectedAccountsOutputSchema: z.ZodObject<{
    accounts: z.ZodArray<z.ZodObject<{
        provider: z.ZodString;
        externalName: z.ZodNullable<z.ZodString>;
        externalLogin: z.ZodNullable<z.ZodString>;
        connectedAt: z.ZodNullable<z.ZodString>;
        authMode: z.ZodNullable<z.ZodEnum<{
            oauth: "oauth";
            pat: "pat";
        }>>;
        needsReconnect: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListConnectedAccountsInput = z.infer<typeof ListConnectedAccountsInputSchema>;
export type ListConnectedAccountsOutput = z.infer<typeof ListConnectedAccountsOutputSchema>;
export type ConnectedAccount = z.infer<typeof ConnectedAccountSchema>;
export declare const listConnectedAccounts: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    accounts: z.ZodArray<z.ZodObject<{
        provider: z.ZodString;
        externalName: z.ZodNullable<z.ZodString>;
        externalLogin: z.ZodNullable<z.ZodString>;
        connectedAt: z.ZodNullable<z.ZodString>;
        authMode: z.ZodNullable<z.ZodEnum<{
            oauth: "oauth";
            pat: "pat";
        }>>;
        needsReconnect: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const DisconnectConnectedAccountInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        google: "google";
        linear: "linear";
        microsoft: "microsoft";
        slack: "slack";
    }>;
}, z.core.$strip>;
export declare const DisconnectConnectedAccountOutputSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
export type DisconnectConnectedAccountInput = z.infer<typeof DisconnectConnectedAccountInputSchema>;
export type DisconnectConnectedAccountOutput = z.infer<typeof DisconnectConnectedAccountOutputSchema>;
export declare const disconnectConnectedAccount: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        google: "google";
        linear: "linear";
        microsoft: "microsoft";
        slack: "slack";
    }>;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
