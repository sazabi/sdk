import { z } from "zod";
/**
 * Shared organization member representation for admin-facing operations.
 */
export declare const OrganizationMemberSchema: z.ZodObject<{
    membershipId: z.ZodString;
    userId: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    email: z.ZodString;
    imageUrl: z.ZodNullable<z.ZodString>;
    role: z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * Input schema for listing organization members.
 */
export declare const ListMembersInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing organization members.
 */
export declare const ListMembersOutputSchema: z.ZodObject<{
    members: z.ZodArray<z.ZodObject<{
        membershipId: z.ZodString;
        userId: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Input schema for updating one member's role.
 */
export declare const UpdateMemberRoleInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    role: z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>;
}, z.core.$strip>;
/**
 * Output schema for updating one member's role.
 */
export declare const UpdateMemberRoleOutputSchema: z.ZodObject<{
    member: z.ZodObject<{
        membershipId: z.ZodString;
        userId: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for removing one member.
 */
export declare const RemoveMemberInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        userId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    userId: string;
    organizationId?: string | undefined;
}, {
    params: {
        userId: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>;
/**
 * Output schema for removing one member.
 */
export declare const RemoveMemberOutputSchema: z.ZodObject<{
    removedUserId: z.ZodString;
}, z.core.$strip>;
export declare const listMembers: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    members: z.ZodArray<z.ZodObject<{
        membershipId: z.ZodString;
        userId: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * Contract-first members.updateRole operation.
 */
export declare const updateMemberRole: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    role: z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>;
}, z.core.$strip>, z.ZodObject<{
    member: z.ZodObject<{
        membershipId: z.ZodString;
        userId: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Contract-first members.remove operation.
 */
export declare const removeMember: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        userId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    userId: string;
    organizationId?: string | undefined;
}, {
    params: {
        userId: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>, z.ZodObject<{
    removedUserId: z.ZodString;
}, z.core.$strip>, "api">;
/**
 * Members contract tree.
 */
export declare const membersContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        members: z.ZodArray<z.ZodObject<{
            membershipId: z.ZodString;
            userId: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            email: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
            role: z.ZodEnum<{
                admin: "admin";
                member: "member";
            }>;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly updateRole: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        userId: z.ZodString;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        member: z.ZodObject<{
            membershipId: z.ZodString;
            userId: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            email: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
            role: z.ZodEnum<{
                admin: "admin";
                member: "member";
            }>;
            createdAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly remove: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
        params: z.ZodObject<{
            userId: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            organizationId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodTransform<{
        userId: string;
        organizationId?: string | undefined;
    }, {
        params: {
            userId: string;
        };
        query: {
            organizationId?: string | undefined;
        };
    }>>, z.ZodObject<{
        removedUserId: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
export type OrganizationMember = z.infer<typeof OrganizationMemberSchema>;
export type ListMembersInput = z.infer<typeof ListMembersInputSchema>;
export type ListMembersOutput = z.infer<typeof ListMembersOutputSchema>;
export type UpdateMemberRoleInput = z.infer<typeof UpdateMemberRoleInputSchema>;
export type UpdateMemberRoleOutput = z.infer<typeof UpdateMemberRoleOutputSchema>;
export type RemoveMemberInput = z.infer<typeof RemoveMemberInputSchema>;
export type RemoveMemberOutput = z.infer<typeof RemoveMemberOutputSchema>;
