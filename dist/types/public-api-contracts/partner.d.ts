/**
 * Partner API contract definitions.
 *
 * This module defines the contract-first partner API for managing
 * superorganizations, organizations, projects, and partner-scoped keys.
 */
import { z } from "zod";
/**
 * Project regions available through the partner API.
 */
export declare const PartnerProjectRegionSchema: z.ZodEnum<{
    "eu-central-1": "eu-central-1";
    "us-east-1": "us-east-1";
    "us-east-2": "us-east-2";
    "us-west-2": "us-west-2";
}>;
/**
 * Superorganization returned by the partner API.
 */
export declare const SuperorganizationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for the authenticated superorganization.
 */
export declare const GetSuperorganizationOutputSchema: z.ZodObject<{
    superorganization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Organization representation returned by the partner API.
 */
export declare const PartnerOrganizationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * Input schema for listing organizations.
 */
export declare const ListOrganizationsInputSchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing organizations.
 */
export declare const ListOrganizationsOutputSchema: z.ZodObject<{
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for fetching one organization.
 */
export declare const GetOrganizationInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for fetching one organization.
 */
export declare const GetOrganizationOutputSchema: z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for creating one organization.
 */
export declare const CreateOrganizationInputSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for creating one organization.
 */
export declare const CreateOrganizationOutputSchema: z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for updating one organization.
 */
export declare const UpdateOrganizationInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for updating one organization.
 */
export declare const UpdateOrganizationOutputSchema: z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for deleting one organization.
 */
export declare const DeleteOrganizationInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        organizationId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    organizationId: string;
}, {
    params: {
        organizationId: string;
    };
    query: Record<string, never>;
}>>;
/**
 * Output schema for deleting one organization.
 */
export declare const DeleteOrganizationOutputSchema: z.ZodVoid;
/**
 * Project representation returned by the partner API.
 */
export declare const PartnerProjectSchema: z.ZodObject<{
    id: z.ZodString;
    organizationId: z.ZodString;
    name: z.ZodString;
    region: z.ZodEnum<{
        "eu-central-1": "eu-central-1";
        "us-east-1": "us-east-1";
        "us-east-2": "us-east-2";
        "us-west-2": "us-west-2";
    }>;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * Input schema for listing projects under one organization.
 */
export declare const ListProjectsInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing projects.
 */
export declare const ListProjectsOutputSchema: z.ZodObject<{
    projects: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
            "eu-central-1": "eu-central-1";
            "us-east-1": "us-east-1";
            "us-east-2": "us-east-2";
            "us-west-2": "us-west-2";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for fetching one project.
 */
export declare const GetProjectInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for fetching one project.
 */
export declare const GetPartnerProjectOutputSchema: z.ZodObject<{
    project: z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
            "eu-central-1": "eu-central-1";
            "us-east-1": "us-east-1";
            "us-east-2": "us-east-2";
            "us-west-2": "us-west-2";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for creating one project.
 */
export declare const CreateProjectInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    name: z.ZodString;
    region: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        "eu-central-1": "eu-central-1";
        "us-east-1": "us-east-1";
        "us-east-2": "us-east-2";
        "us-west-2": "us-west-2";
    }>>>;
}, z.core.$strip>;
/**
 * Output schema for creating one project.
 */
export declare const CreateProjectOutputSchema: z.ZodObject<{
    project: z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
            "eu-central-1": "eu-central-1";
            "us-east-1": "us-east-1";
            "us-east-2": "us-east-2";
            "us-west-2": "us-west-2";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for updating one project.
 */
export declare const UpdateProjectInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for updating one project.
 */
export declare const UpdateProjectOutputSchema: z.ZodObject<{
    project: z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
            "eu-central-1": "eu-central-1";
            "us-east-1": "us-east-1";
            "us-east-2": "us-east-2";
            "us-west-2": "us-west-2";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for deleting one project.
 */
export declare const DeleteProjectInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    organizationId: string;
    projectId: string;
}, {
    params: {
        organizationId: string;
        projectId: string;
    };
    query: Record<string, never>;
}>>;
/**
 * Output schema for deleting one project.
 */
export declare const DeleteProjectOutputSchema: z.ZodVoid;
/**
 * Secret key representation returned by the partner API.
 */
export declare const PartnerSecretKeySchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    expiresAt: z.ZodNullable<z.ZodString>;
    lastUsedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * Input schema for listing secret keys under one organization.
 */
export declare const ListPartnerSecretKeysInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing secret keys.
 */
export declare const ListPartnerSecretKeysOutputSchema: z.ZodObject<{
    secretKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for creating one secret key.
 */
export declare const CreatePartnerSecretKeyInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    name: z.ZodString;
    expiresAt: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for creating one secret key.
 * Returns the plaintext value exactly once.
 */
export declare const CreatePartnerSecretKeyOutputSchema: z.ZodObject<{
    secretKey: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for deleting one secret key.
 */
export declare const DeletePartnerSecretKeyInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        organizationId: z.ZodString;
        keyId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    organizationId: string;
    keyId: string;
}, {
    params: {
        organizationId: string;
        keyId: string;
    };
    query: Record<string, never>;
}>>;
/**
 * Output schema for deleting one secret key.
 */
export declare const DeletePartnerSecretKeyOutputSchema: z.ZodVoid;
/**
 * Public key representation returned by the partner API.
 */
export declare const PartnerPublicKeySchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    expiresAt: z.ZodNullable<z.ZodString>;
    lastUsedAt: z.ZodNullable<z.ZodString>;
    deactivatedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * Input schema for listing public keys under one project.
 */
export declare const ListPartnerPublicKeysInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing public keys.
 */
export declare const ListPartnerPublicKeysOutputSchema: z.ZodObject<{
    publicKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * Input schema for deactivating one public key.
 */
export declare const DeactivatePartnerPublicKeyInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodString;
        keyId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    organizationId: string;
    projectId: string;
    keyId: string;
}, {
    params: {
        organizationId: string;
        projectId: string;
        keyId: string;
    };
    query: Record<string, never>;
}>>;
/**
 * Output schema for deactivating one public key.
 */
export declare const DeactivatePartnerPublicKeyOutputSchema: z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Contract-first partner superorganization getter.
 */
export declare const getPartnerSuperorganization: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    superorganization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner organizations.list operation.
 */
export declare const listPartnerOrganizations: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner organizations.get operation.
 */
export declare const getPartnerOrganization: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner organizations.create operation.
 */
export declare const createPartnerOrganization: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner organizations.update operation.
 */
export declare const updatePartnerOrganization: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner organizations.delete operation.
 */
export declare const deletePartnerOrganization: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        organizationId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    organizationId: string;
}, {
    params: {
        organizationId: string;
    };
    query: Record<string, never>;
}>>, z.ZodVoid, "partner">;
/**
 * Contract-first partner projects.list operation.
 */
export declare const listPartnerProjects: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    projects: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
            "eu-central-1": "eu-central-1";
            "us-east-1": "us-east-1";
            "us-east-2": "us-east-2";
            "us-west-2": "us-west-2";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner projects.get operation.
 */
export declare const getPartnerProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    project: z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
            "eu-central-1": "eu-central-1";
            "us-east-1": "us-east-1";
            "us-east-2": "us-east-2";
            "us-west-2": "us-west-2";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner projects.create operation.
 */
export declare const createPartnerProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    name: z.ZodString;
    region: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        "eu-central-1": "eu-central-1";
        "us-east-1": "us-east-1";
        "us-east-2": "us-east-2";
        "us-west-2": "us-west-2";
    }>>>;
}, z.core.$strip>, z.ZodObject<{
    project: z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
            "eu-central-1": "eu-central-1";
            "us-east-1": "us-east-1";
            "us-east-2": "us-east-2";
            "us-west-2": "us-west-2";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner projects.update operation.
 */
export declare const updatePartnerProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    project: z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
            "eu-central-1": "eu-central-1";
            "us-east-1": "us-east-1";
            "us-east-2": "us-east-2";
            "us-west-2": "us-west-2";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner projects.delete operation.
 */
export declare const deletePartnerProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    organizationId: string;
    projectId: string;
}, {
    params: {
        organizationId: string;
        projectId: string;
    };
    query: Record<string, never>;
}>>, z.ZodVoid, "partner">;
/**
 * Contract-first partner secretKeys.list operation.
 */
export declare const listPartnerSecretKeys: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    secretKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner secretKeys.create operation.
 */
export declare const createPartnerSecretKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    name: z.ZodString;
    expiresAt: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    secretKey: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner secretKeys.delete operation.
 */
export declare const deletePartnerSecretKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        organizationId: z.ZodString;
        keyId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    organizationId: string;
    keyId: string;
}, {
    params: {
        organizationId: string;
        keyId: string;
    };
    query: Record<string, never>;
}>>, z.ZodVoid, "partner">;
/**
 * Contract-first partner publicKeys.list operation.
 */
export declare const listPartnerPublicKeys: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    publicKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "partner">;
/**
 * Contract-first partner publicKeys.deactivate operation.
 */
export declare const deactivatePartnerPublicKey: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodString;
        keyId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    organizationId: string;
    projectId: string;
    keyId: string;
}, {
    params: {
        organizationId: string;
        projectId: string;
        keyId: string;
    };
    query: Record<string, never>;
}>>, z.ZodObject<{
    publicKey: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        expiresAt: z.ZodNullable<z.ZodString>;
        lastUsedAt: z.ZodNullable<z.ZodString>;
        deactivatedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "partner">;
/**
 * Contract tree for partner API operations.
 */
export declare const partnerApiContract: {
    readonly superorganization: {
        readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
            superorganization: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
    };
    readonly organizations: {
        readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            cursor: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            organizations: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>>;
            nextCursor: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            organizationId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            organization: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            organization: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            organizationId: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            organization: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        readonly delete: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
            params: z.ZodObject<{
                organizationId: z.ZodString;
            }, z.core.$strip>;
            query: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>, z.ZodTransform<{
            organizationId: string;
        }, {
            params: {
                organizationId: string;
            };
            query: Record<string, never>;
        }>>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
    };
    readonly projects: {
        readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            organizationId: z.ZodString;
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            cursor: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            projects: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                organizationId: z.ZodString;
                name: z.ZodString;
                region: z.ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-2": "us-west-2";
                }>;
                createdAt: z.ZodString;
            }, z.core.$strip>>;
            nextCursor: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            organizationId: z.ZodString;
            projectId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            project: z.ZodObject<{
                id: z.ZodString;
                organizationId: z.ZodString;
                name: z.ZodString;
                region: z.ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-2": "us-west-2";
                }>;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            organizationId: z.ZodString;
            name: z.ZodString;
            region: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                "eu-central-1": "eu-central-1";
                "us-east-1": "us-east-1";
                "us-east-2": "us-east-2";
                "us-west-2": "us-west-2";
            }>>>;
        }, z.core.$strip>, z.ZodObject<{
            project: z.ZodObject<{
                id: z.ZodString;
                organizationId: z.ZodString;
                name: z.ZodString;
                region: z.ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-2": "us-west-2";
                }>;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            organizationId: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            project: z.ZodObject<{
                id: z.ZodString;
                organizationId: z.ZodString;
                name: z.ZodString;
                region: z.ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-2": "us-west-2";
                }>;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        readonly delete: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
            params: z.ZodObject<{
                organizationId: z.ZodString;
                projectId: z.ZodString;
            }, z.core.$strip>;
            query: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>, z.ZodTransform<{
            organizationId: string;
            projectId: string;
        }, {
            params: {
                organizationId: string;
                projectId: string;
            };
            query: Record<string, never>;
        }>>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
    };
    readonly keys: {
        readonly secretKeys: {
            readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
                organizationId: z.ZodString;
                limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
                cursor: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                secretKeys: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    projectId: z.ZodNullable<z.ZodString>;
                    name: z.ZodString;
                    expiresAt: z.ZodNullable<z.ZodString>;
                    lastUsedAt: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodString;
                }, z.core.$strip>>;
                nextCursor: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
            readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
                organizationId: z.ZodString;
                name: z.ZodString;
                expiresAt: z.ZodOptional<z.ZodString>;
                projectId: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                secretKey: z.ZodObject<{
                    id: z.ZodString;
                    projectId: z.ZodNullable<z.ZodString>;
                    name: z.ZodString;
                    expiresAt: z.ZodNullable<z.ZodString>;
                    lastUsedAt: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodString;
                    value: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
            readonly delete: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
                params: z.ZodObject<{
                    organizationId: z.ZodString;
                    keyId: z.ZodString;
                }, z.core.$strip>;
                query: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodTransform<{
                organizationId: string;
                keyId: string;
            }, {
                params: {
                    organizationId: string;
                    keyId: string;
                };
                query: Record<string, never>;
            }>>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        };
        readonly publicKeys: {
            readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
                organizationId: z.ZodString;
                projectId: z.ZodString;
                limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
                cursor: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                publicKeys: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    projectId: z.ZodString;
                    name: z.ZodString;
                    expiresAt: z.ZodNullable<z.ZodString>;
                    lastUsedAt: z.ZodNullable<z.ZodString>;
                    deactivatedAt: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodString;
                }, z.core.$strip>>;
                nextCursor: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
            readonly deactivate: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
                params: z.ZodObject<{
                    organizationId: z.ZodString;
                    projectId: z.ZodString;
                    keyId: z.ZodString;
                }, z.core.$strip>;
                query: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodTransform<{
                organizationId: string;
                projectId: string;
                keyId: string;
            }, {
                params: {
                    organizationId: string;
                    projectId: string;
                    keyId: string;
                };
                query: Record<string, never>;
            }>>, z.ZodObject<{
                publicKey: z.ZodObject<{
                    id: z.ZodString;
                    projectId: z.ZodString;
                    name: z.ZodString;
                    expiresAt: z.ZodNullable<z.ZodString>;
                    lastUsedAt: z.ZodNullable<z.ZodString>;
                    deactivatedAt: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"partner">>;
        };
    };
};
/**
 * Operation tree mirroring the partner API contract structure.
 */
export declare const partnerApiOperations: {
    readonly superorganization: {
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
            superorganization: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, "partner">;
    };
    readonly organizations: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            cursor: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            organizations: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>>;
            nextCursor: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>, "partner">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
            organizationId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            organization: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, "partner">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            organization: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, "partner">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
            organizationId: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            organization: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, "partner">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
            params: z.ZodObject<{
                organizationId: z.ZodString;
            }, z.core.$strip>;
            query: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>, z.ZodTransform<{
            organizationId: string;
        }, {
            params: {
                organizationId: string;
            };
            query: Record<string, never>;
        }>>, z.ZodVoid, "partner">;
    };
    readonly projects: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
            organizationId: z.ZodString;
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            cursor: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            projects: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                organizationId: z.ZodString;
                name: z.ZodString;
                region: z.ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-2": "us-west-2";
                }>;
                createdAt: z.ZodString;
            }, z.core.$strip>>;
            nextCursor: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>, "partner">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
            organizationId: z.ZodString;
            projectId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            project: z.ZodObject<{
                id: z.ZodString;
                organizationId: z.ZodString;
                name: z.ZodString;
                region: z.ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-2": "us-west-2";
                }>;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, "partner">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
            organizationId: z.ZodString;
            name: z.ZodString;
            region: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                "eu-central-1": "eu-central-1";
                "us-east-1": "us-east-1";
                "us-east-2": "us-east-2";
                "us-west-2": "us-west-2";
            }>>>;
        }, z.core.$strip>, z.ZodObject<{
            project: z.ZodObject<{
                id: z.ZodString;
                organizationId: z.ZodString;
                name: z.ZodString;
                region: z.ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-2": "us-west-2";
                }>;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, "partner">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
            organizationId: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            project: z.ZodObject<{
                id: z.ZodString;
                organizationId: z.ZodString;
                name: z.ZodString;
                region: z.ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-2": "us-west-2";
                }>;
                createdAt: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, "partner">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
            params: z.ZodObject<{
                organizationId: z.ZodString;
                projectId: z.ZodString;
            }, z.core.$strip>;
            query: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>, z.ZodTransform<{
            organizationId: string;
            projectId: string;
        }, {
            params: {
                organizationId: string;
                projectId: string;
            };
            query: Record<string, never>;
        }>>, z.ZodVoid, "partner">;
    };
    readonly keys: {
        readonly secretKeys: {
            readonly list: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
                organizationId: z.ZodString;
                limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
                cursor: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                secretKeys: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    projectId: z.ZodNullable<z.ZodString>;
                    name: z.ZodString;
                    expiresAt: z.ZodNullable<z.ZodString>;
                    lastUsedAt: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodString;
                }, z.core.$strip>>;
                nextCursor: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>, "partner">;
            readonly create: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
                organizationId: z.ZodString;
                name: z.ZodString;
                expiresAt: z.ZodOptional<z.ZodString>;
                projectId: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                secretKey: z.ZodObject<{
                    id: z.ZodString;
                    projectId: z.ZodNullable<z.ZodString>;
                    name: z.ZodString;
                    expiresAt: z.ZodNullable<z.ZodString>;
                    lastUsedAt: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodString;
                    value: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, "partner">;
            readonly delete: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
                params: z.ZodObject<{
                    organizationId: z.ZodString;
                    keyId: z.ZodString;
                }, z.core.$strip>;
                query: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodTransform<{
                organizationId: string;
                keyId: string;
            }, {
                params: {
                    organizationId: string;
                    keyId: string;
                };
                query: Record<string, never>;
            }>>, z.ZodVoid, "partner">;
        };
        readonly publicKeys: {
            readonly list: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
                organizationId: z.ZodString;
                projectId: z.ZodString;
                limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
                cursor: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                publicKeys: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    projectId: z.ZodString;
                    name: z.ZodString;
                    expiresAt: z.ZodNullable<z.ZodString>;
                    lastUsedAt: z.ZodNullable<z.ZodString>;
                    deactivatedAt: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodString;
                }, z.core.$strip>>;
                nextCursor: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>, "partner">;
            readonly deactivate: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
                params: z.ZodObject<{
                    organizationId: z.ZodString;
                    projectId: z.ZodString;
                    keyId: z.ZodString;
                }, z.core.$strip>;
                query: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodTransform<{
                organizationId: string;
                projectId: string;
                keyId: string;
            }, {
                params: {
                    organizationId: string;
                    projectId: string;
                    keyId: string;
                };
                query: Record<string, never>;
            }>>, z.ZodObject<{
                publicKey: z.ZodObject<{
                    id: z.ZodString;
                    projectId: z.ZodString;
                    name: z.ZodString;
                    expiresAt: z.ZodNullable<z.ZodString>;
                    lastUsedAt: z.ZodNullable<z.ZodString>;
                    deactivatedAt: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, "partner">;
        };
    };
};
export type PartnerApiContract = typeof partnerApiContract;
export type PartnerProjectRegion = z.infer<typeof PartnerProjectRegionSchema>;
export type Superorganization = z.infer<typeof SuperorganizationSchema>;
export type GetSuperorganizationOutput = z.infer<typeof GetSuperorganizationOutputSchema>;
export type PartnerOrganization = z.infer<typeof PartnerOrganizationSchema>;
export type ListOrganizationsInput = z.infer<typeof ListOrganizationsInputSchema>;
export type ListOrganizationsOutput = z.infer<typeof ListOrganizationsOutputSchema>;
export type GetOrganizationInput = z.infer<typeof GetOrganizationInputSchema>;
export type GetOrganizationOutput = z.infer<typeof GetOrganizationOutputSchema>;
export type CreateOrganizationInput = z.infer<typeof CreateOrganizationInputSchema>;
export type CreateOrganizationOutput = z.infer<typeof CreateOrganizationOutputSchema>;
export type UpdateOrganizationInput = z.infer<typeof UpdateOrganizationInputSchema>;
export type UpdateOrganizationOutput = z.infer<typeof UpdateOrganizationOutputSchema>;
export type DeleteOrganizationInput = z.infer<typeof DeleteOrganizationInputSchema>;
export type DeleteOrganizationOutput = z.infer<typeof DeleteOrganizationOutputSchema>;
export type PartnerProject = z.infer<typeof PartnerProjectSchema>;
export type ListProjectsInput = z.infer<typeof ListProjectsInputSchema>;
export type ListProjectsOutput = z.infer<typeof ListProjectsOutputSchema>;
export type GetProjectInput = z.infer<typeof GetProjectInputSchema>;
export type GetPartnerProjectOutput = z.infer<typeof GetPartnerProjectOutputSchema>;
export type CreateProjectInput = z.infer<typeof CreateProjectInputSchema>;
export type CreateProjectOutput = z.infer<typeof CreateProjectOutputSchema>;
export type UpdateProjectInput = z.infer<typeof UpdateProjectInputSchema>;
export type UpdateProjectOutput = z.infer<typeof UpdateProjectOutputSchema>;
export type DeleteProjectInput = z.infer<typeof DeleteProjectInputSchema>;
export type DeleteProjectOutput = z.infer<typeof DeleteProjectOutputSchema>;
export type PartnerSecretKey = z.infer<typeof PartnerSecretKeySchema>;
export type ListPartnerSecretKeysInput = z.infer<typeof ListPartnerSecretKeysInputSchema>;
export type ListPartnerSecretKeysOutput = z.infer<typeof ListPartnerSecretKeysOutputSchema>;
export type CreatePartnerSecretKeyInput = z.infer<typeof CreatePartnerSecretKeyInputSchema>;
export type CreatePartnerSecretKeyOutput = z.infer<typeof CreatePartnerSecretKeyOutputSchema>;
export type DeletePartnerSecretKeyInput = z.infer<typeof DeletePartnerSecretKeyInputSchema>;
export type DeletePartnerSecretKeyOutput = z.infer<typeof DeletePartnerSecretKeyOutputSchema>;
export type PartnerPublicKey = z.infer<typeof PartnerPublicKeySchema>;
export type ListPartnerPublicKeysInput = z.infer<typeof ListPartnerPublicKeysInputSchema>;
export type ListPartnerPublicKeysOutput = z.infer<typeof ListPartnerPublicKeysOutputSchema>;
export type DeactivatePartnerPublicKeyInput = z.infer<typeof DeactivatePartnerPublicKeyInputSchema>;
export type DeactivatePartnerPublicKeyOutput = z.infer<typeof DeactivatePartnerPublicKeyOutputSchema>;
