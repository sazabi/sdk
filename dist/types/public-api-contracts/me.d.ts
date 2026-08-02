import { z } from "zod";
/**
 * Organization membership role exposed to CLI and SDK consumers.
 */
export declare const OrganizationMembershipRoleSchema: z.ZodEnum<{
    admin: "admin";
    member: "member";
}>;
/**
 * Organization summary used in current-credential responses.
 */
export declare const AuthOrganizationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>;
}, z.core.$strip>;
/**
 * User summary used in current-credential responses.
 */
export declare const AuthUserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    email: z.ZodString;
}, z.core.$strip>;
/**
 * Output for user-token current-credential responses.
 */
export declare const UserMeSchema: z.ZodObject<{
    credentialType: z.ZodLiteral<"user">;
    user: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
    }, z.core.$strip>;
    activeOrganizationId: z.ZodNullable<z.ZodString>;
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Output for secret-key current-credential responses.
 */
export declare const SecretMeSchema: z.ZodObject<{
    credentialType: z.ZodLiteral<"secret">;
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    keyName: z.ZodString;
}, z.core.$strip>;
/**
 * Output for partner-key current-credential responses.
 */
export declare const PartnerMeSchema: z.ZodObject<{
    credentialType: z.ZodLiteral<"partner">;
    superorganization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for current-credential lookup.
 */
export declare const MeInputSchema: z.ZodObject<{}, z.core.$strip>;
/**
 * Output schema for current-credential lookup.
 */
export declare const MeOutputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    credentialType: z.ZodLiteral<"user">;
    user: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
    }, z.core.$strip>;
    activeOrganizationId: z.ZodNullable<z.ZodString>;
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    credentialType: z.ZodLiteral<"secret">;
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    keyName: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    credentialType: z.ZodLiteral<"partner">;
    superorganization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>], "credentialType">;
/**
 * Contract-first current-credential operation.
 */
export declare const me: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    credentialType: z.ZodLiteral<"user">;
    user: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
    }, z.core.$strip>;
    activeOrganizationId: z.ZodNullable<z.ZodString>;
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    credentialType: z.ZodLiteral<"secret">;
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    keyName: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    credentialType: z.ZodLiteral<"partner">;
    superorganization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>], "credentialType">, "api">;
/**
 * Contract for the current-credential endpoint.
 */
export declare const meContract: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    credentialType: z.ZodLiteral<"user">;
    user: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
    }, z.core.$strip>;
    activeOrganizationId: z.ZodNullable<z.ZodString>;
    organizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    credentialType: z.ZodLiteral<"secret">;
    organization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    keyName: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    credentialType: z.ZodLiteral<"partner">;
    superorganization: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>], "credentialType">, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
export type AuthOrganization = z.infer<typeof AuthOrganizationSchema>;
export type AuthUser = z.infer<typeof AuthUserSchema>;
export type UserMe = z.infer<typeof UserMeSchema>;
export type SecretMe = z.infer<typeof SecretMeSchema>;
export type PartnerMe = z.infer<typeof PartnerMeSchema>;
export type OrganizationMembershipRole = z.infer<typeof OrganizationMembershipRoleSchema>;
export type MeInput = z.infer<typeof MeInputSchema>;
export type MeOutput = z.infer<typeof MeOutputSchema>;
