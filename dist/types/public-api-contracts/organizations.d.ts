import { z } from "zod";
/**
 * Shared organization representation for public API responses.
 */
export declare const OrganizationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
/**
 * Organization summary used when listing the current user's organizations.
 */
export declare const ListedOrganizationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>>;
}, z.core.$strip>;
/**
 * Input schema for listing organizations.
 */
export declare const ListOrganizationsInputSchema: z.ZodObject<{}, z.core.$strip>;
/**
 * Output schema for listing organizations.
 */
export declare const ListOrganizationsOutputSchema: z.ZodObject<{
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodOptional<z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Input schema for getting one organization.
 */
export declare const GetOrganizationInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for getting one organization.
 */
export declare const GetOrganizationOutputSchema: z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for updating one organization.
 */
export declare const UpdateOrganizationInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for updating one organization.
 */
export declare const UpdateOrganizationOutputSchema: z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for creating one organization (user session).
 */
export declare const CreateOrganizationInputSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for creating one organization (user session).
 */
export declare const CreateOrganizationOutputSchema: z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Contract-first organizations.create operation (user bearer session).
 */
export declare const createOrganization: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first organizations.list operation.
 */
export declare const listOrganizations: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodOptional<z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * Contract-first organizations.get operation.
 */
export declare const getOrganization: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first organizations.update operation.
 */
export declare const updateOrganization: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Organizations contract tree.
 */
export declare const organizationsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        organizations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            slug: z.ZodString;
            logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            role: z.ZodOptional<z.ZodEnum<{
                admin: "admin";
                member: "member";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        organization: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            slug: z.ZodString;
            logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        organization: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            slug: z.ZodString;
            logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        organization: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            slug: z.ZodString;
            logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
export type Organization = z.infer<typeof OrganizationSchema>;
export type ListedOrganization = z.infer<typeof ListedOrganizationSchema>;
export type ListOrganizationsInput = z.infer<typeof ListOrganizationsInputSchema>;
export type ListOrganizationsOutput = z.infer<typeof ListOrganizationsOutputSchema>;
export type GetOrganizationInput = z.infer<typeof GetOrganizationInputSchema>;
export type GetOrganizationOutput = z.infer<typeof GetOrganizationOutputSchema>;
export type UpdateOrganizationInput = z.infer<typeof UpdateOrganizationInputSchema>;
export type CreateOrganizationInput = z.infer<typeof CreateOrganizationInputSchema>;
export type CreateOrganizationOutput = z.infer<typeof CreateOrganizationOutputSchema>;
export type UpdateOrganizationOutput = z.infer<typeof UpdateOrganizationOutputSchema>;
