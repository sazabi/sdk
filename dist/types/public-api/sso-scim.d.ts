import { z } from "zod";
export declare const GetSsoScimInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const EnableSsoScimInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const RotateSsoScimTokenInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const DisableSsoScimInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const PauseSsoScimInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ResumeSsoScimInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const SetSsoScimThresholdInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    threshold: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export declare const getSsoScim: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    scim: z.ZodNullable<z.ZodObject<{
        connectionId: z.ZodString;
        baseUrl: z.ZodString;
        enabled: z.ZodBoolean;
        enabledAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        scimOnly: z.ZodBoolean;
        lastChangeAt: z.ZodNullable<z.ZodString>;
        deactivationThreshold: z.ZodNullable<z.ZodNumber>;
        tokens: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            prefix: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            lastUsedIp: z.ZodNullable<z.ZodString>;
            createdByUserId: z.ZodNullable<z.ZodString>;
            createdBySecretKeyId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const enableSsoScim: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    scim: z.ZodObject<{
        connectionId: z.ZodString;
        baseUrl: z.ZodString;
        enabled: z.ZodBoolean;
        enabledAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        scimOnly: z.ZodBoolean;
        lastChangeAt: z.ZodNullable<z.ZodString>;
        deactivationThreshold: z.ZodNullable<z.ZodNumber>;
        tokens: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            prefix: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            lastUsedIp: z.ZodNullable<z.ZodString>;
            createdByUserId: z.ZodNullable<z.ZodString>;
            createdBySecretKeyId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    enabled: z.ZodBoolean;
    token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const rotateSsoScimToken: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    scim: z.ZodObject<{
        connectionId: z.ZodString;
        baseUrl: z.ZodString;
        enabled: z.ZodBoolean;
        enabledAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        scimOnly: z.ZodBoolean;
        lastChangeAt: z.ZodNullable<z.ZodString>;
        deactivationThreshold: z.ZodNullable<z.ZodNumber>;
        tokens: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            prefix: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            lastUsedIp: z.ZodNullable<z.ZodString>;
            createdByUserId: z.ZodNullable<z.ZodString>;
            createdBySecretKeyId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    token: z.ZodString;
}, z.core.$strip>, "api">;
export declare const disableSsoScim: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    scim: z.ZodObject<{
        connectionId: z.ZodString;
        baseUrl: z.ZodString;
        enabled: z.ZodBoolean;
        enabledAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        scimOnly: z.ZodBoolean;
        lastChangeAt: z.ZodNullable<z.ZodString>;
        deactivationThreshold: z.ZodNullable<z.ZodNumber>;
        tokens: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            prefix: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            lastUsedIp: z.ZodNullable<z.ZodString>;
            createdByUserId: z.ZodNullable<z.ZodString>;
            createdBySecretKeyId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    disabled: z.ZodBoolean;
    revokedTokenCount: z.ZodNumber;
}, z.core.$strip>, "api">;
export declare const pauseSsoScim: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    scim: z.ZodObject<{
        connectionId: z.ZodString;
        baseUrl: z.ZodString;
        enabled: z.ZodBoolean;
        enabledAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        scimOnly: z.ZodBoolean;
        lastChangeAt: z.ZodNullable<z.ZodString>;
        deactivationThreshold: z.ZodNullable<z.ZodNumber>;
        tokens: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            prefix: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            lastUsedIp: z.ZodNullable<z.ZodString>;
            createdByUserId: z.ZodNullable<z.ZodString>;
            createdBySecretKeyId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    paused: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const resumeSsoScim: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    scim: z.ZodObject<{
        connectionId: z.ZodString;
        baseUrl: z.ZodString;
        enabled: z.ZodBoolean;
        enabledAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        scimOnly: z.ZodBoolean;
        lastChangeAt: z.ZodNullable<z.ZodString>;
        deactivationThreshold: z.ZodNullable<z.ZodNumber>;
        tokens: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            prefix: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            lastUsedIp: z.ZodNullable<z.ZodString>;
            createdByUserId: z.ZodNullable<z.ZodString>;
            createdBySecretKeyId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    resumed: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const setSsoScimThreshold: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    threshold: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    scim: z.ZodObject<{
        connectionId: z.ZodString;
        baseUrl: z.ZodString;
        enabled: z.ZodBoolean;
        enabledAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        scimOnly: z.ZodBoolean;
        lastChangeAt: z.ZodNullable<z.ZodString>;
        deactivationThreshold: z.ZodNullable<z.ZodNumber>;
        tokens: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            prefix: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            lastUsedIp: z.ZodNullable<z.ZodString>;
            createdByUserId: z.ZodNullable<z.ZodString>;
            createdBySecretKeyId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const MismatchSsoScimInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListSsoScimMembersInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const mismatchSsoScim: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    report: z.ZodNullable<z.ZodObject<{
        connectionId: z.ZodString;
        generatedAt: z.ZodString;
        signInWindowDays: z.ZodNumber;
        lastRequestAt: z.ZodNullable<z.ZodString>;
        lastChangeAt: z.ZodNullable<z.ZodString>;
        signedInWithoutScimRecord: z.ZodObject<{
            members: z.ZodArray<z.ZodObject<{
                userId: z.ZodString;
                email: z.ZodString;
                name: z.ZodString;
                lastSignInAt: z.ZodString;
                linkedAt: z.ZodString;
            }, z.core.$strip>>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>;
        scimRecordsNeverSignedIn: z.ZodObject<{
            records: z.ZodArray<z.ZodObject<{
                scimUserId: z.ZodString;
                userId: z.ZodString;
                email: z.ZodString;
                name: z.ZodString;
                userName: z.ZodString;
                externalId: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>>;
            truncated: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const listSsoScimMembers: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    members: z.ZodArray<z.ZodObject<{
        scimUserId: z.ZodString;
        userId: z.ZodString;
        email: z.ZodString;
        name: z.ZodString;
        role: z.ZodString;
        userName: z.ZodString;
        externalId: z.ZodString;
        active: z.ZodBoolean;
        connectionId: z.ZodString;
        connectionState: z.ZodEnum<{
            deleted: "deleted";
            live: "live";
            scim_off: "scim_off";
        }>;
        provisionedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
