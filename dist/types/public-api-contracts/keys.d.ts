import { z } from "zod";
/**
 * Schema for public key responses.
 */
export declare const PublicKeySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    expiresAt: z.ZodNullable<z.ZodString>;
    lastUsedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    projectId: z.ZodString;
    dataSourceConnectionId: z.ZodNullable<z.ZodString>;
    deactivatedAt: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for secret key responses.
 * Secret keys are optionally project-scoped within an organization.
 */
export declare const SecretKeySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    expiresAt: z.ZodNullable<z.ZodString>;
    lastUsedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    projectId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for listing keys.
 */
export declare const ListKeysInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing public keys.
 */
export declare const ListPublicKeysOutputSchema: z.ZodObject<{
    publicKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing secret keys.
 */
export declare const ListSecretKeysOutputSchema: z.ZodObject<{
    secretKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for getting a single key.
 */
export declare const GetKeyInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    keyId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for getting a single public key.
 */
export declare const GetPublicKeyOutputSchema: z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Output schema for getting a single secret key.
 */
export declare const GetSecretKeyOutputSchema: z.ZodObject<{
    secretKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Output schema for public key creation.
 * Includes the plaintext key value (only returned once).
 * Still used by the log-forwarding ensure operation.
 */
export declare const CreatePublicKeyOutputSchema: z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
        value: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const EnsureLogForwardingPublicKeyInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for secret key creation.
 * Includes the plaintext key value (only returned once).
 */
export declare const CreateSecretKeyOutputSchema: z.ZodObject<{
    secretKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        value: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for updating a key.
 */
export declare const UpdateKeyInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    keyId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Input schema for deactivating a public key.
 */
export declare const DeactivatePublicKeyInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        keyId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    keyId: string;
    projectId?: string | undefined;
}, {
    params: {
        keyId: string;
    };
    query: {
        projectId?: string | undefined;
    };
}>>;
/**
 * Output schema for public key deactivation.
 */
export declare const DeactivatePublicKeyOutputSchema: z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Output schema for key deletion (204 No Content).
 */
export declare const DeleteKeyOutputSchema: z.ZodVoid;
/**
 * Input schema for listing secret keys (org-scoped).
 */
export declare const ListSecretKeysInputSchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for getting a single secret key (org-scoped).
 */
export declare const GetSecretKeyInputSchema: z.ZodObject<{
    keyId: z.ZodString;
}, z.core.$strip>;
/**
 * Input schema for creating a secret key (org-scoped, optionally project-scoped).
 */
export declare const CreateSecretKeyInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    expiresAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for updating a secret key (org-scoped).
 */
export declare const UpdateSecretKeyInputSchema: z.ZodObject<{
    keyId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Input schema for deleting a secret key (org-scoped).
 */
export declare const DeleteSecretKeyInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        keyId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    keyId: string;
}, {
    params: {
        keyId: string;
    };
}>>;
/**
 * Contract-first publicKeys.list operation.
 */
export declare const listPublicKeys: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    publicKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
/**
 * Contract-first publicKeys.get operation.
 */
export declare const getPublicKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    keyId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first publicKeys.ensureLogForwarding operation.
 */
export declare const ensureLogForwardingPublicKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
        value: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first publicKeys.update operation.
 */
export declare const updatePublicKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    keyId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first publicKeys.deactivate operation.
 */
export declare const deactivatePublicKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        keyId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    keyId: string;
    projectId?: string | undefined;
}, {
    params: {
        keyId: string;
    };
    query: {
        projectId?: string | undefined;
    };
}>>, z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodString;
        dataSourceConnectionId: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first secretKeys.list operation.
 */
export declare const listSecretKeys: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    secretKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
/**
 * Contract-first secretKeys.get operation.
 */
export declare const getSecretKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    keyId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    secretKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first secretKeys.create operation.
 */
export declare const createSecretKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    expiresAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    secretKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        value: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first secretKeys.update operation.
 */
export declare const updateSecretKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    keyId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    secretKey: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first secretKeys.delete operation.
 */
export declare const deleteSecretKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        keyId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    keyId: string;
}, {
    params: {
        keyId: string;
    };
}>>, z.ZodVoid, "api">;
/**
 * Public key contract tree.
 */
export declare const publicKeysContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        publicKeys: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodString;
            dataSourceConnectionId: z.ZodNullable<z.ZodString>;
            deactivatedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        keyId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        publicKey: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodString;
            dataSourceConnectionId: z.ZodNullable<z.ZodString>;
            deactivatedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly ensureLogForwarding: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        publicKey: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodString;
            dataSourceConnectionId: z.ZodNullable<z.ZodString>;
            deactivatedAt: z.ZodNullable<z.ZodString>;
            value: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        keyId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        publicKey: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodString;
            dataSourceConnectionId: z.ZodNullable<z.ZodString>;
            deactivatedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly deactivate: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
        params: z.ZodObject<{
            keyId: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            projectId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodTransform<{
        keyId: string;
        projectId?: string | undefined;
    }, {
        params: {
            keyId: string;
        };
        query: {
            projectId?: string | undefined;
        };
    }>>, z.ZodObject<{
        publicKey: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodString;
            dataSourceConnectionId: z.ZodNullable<z.ZodString>;
            deactivatedAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
/**
 * Secret key contract tree.
 */
export declare const secretKeysContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        secretKeys: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        keyId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        secretKey: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        expiresAt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        secretKey: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodNullable<z.ZodString>;
            value: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        keyId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        secretKey: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            expiresAt: z.ZodNullable<z.ZodString>;
            lastUsedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            projectId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly delete: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
        params: z.ZodObject<{
            keyId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodTransform<{
        keyId: string;
    }, {
        params: {
            keyId: string;
        };
    }>>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
export type PublicKey = z.infer<typeof PublicKeySchema>;
export type SecretKey = z.infer<typeof SecretKeySchema>;
export type ListKeysInput = z.infer<typeof ListKeysInputSchema>;
export type ListPublicKeysOutput = z.infer<typeof ListPublicKeysOutputSchema>;
export type ListSecretKeysOutput = z.infer<typeof ListSecretKeysOutputSchema>;
export type ListSecretKeysInput = z.infer<typeof ListSecretKeysInputSchema>;
export type GetKeyInput = z.infer<typeof GetKeyInputSchema>;
export type GetSecretKeyInput = z.infer<typeof GetSecretKeyInputSchema>;
export type GetPublicKeyOutput = z.infer<typeof GetPublicKeyOutputSchema>;
export type GetSecretKeyOutput = z.infer<typeof GetSecretKeyOutputSchema>;
export type EnsureLogForwardingPublicKeyInput = z.infer<typeof EnsureLogForwardingPublicKeyInputSchema>;
export type CreateSecretKeyInput = z.infer<typeof CreateSecretKeyInputSchema>;
export type CreatePublicKeyOutput = z.infer<typeof CreatePublicKeyOutputSchema>;
export type CreateSecretKeyOutput = z.infer<typeof CreateSecretKeyOutputSchema>;
export type UpdateKeyInput = z.infer<typeof UpdateKeyInputSchema>;
export type UpdateSecretKeyInput = z.infer<typeof UpdateSecretKeyInputSchema>;
export type DeactivatePublicKeyInput = z.infer<typeof DeactivatePublicKeyInputSchema>;
export type DeactivatePublicKeyOutput = z.infer<typeof DeactivatePublicKeyOutputSchema>;
export type DeleteSecretKeyInput = z.infer<typeof DeleteSecretKeyInputSchema>;
export type DeleteKeyOutput = z.infer<typeof DeleteKeyOutputSchema>;
