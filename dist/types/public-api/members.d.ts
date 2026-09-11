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
 * A pending organization invitation.
 */
export declare const OrganizationInvitationSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    role: z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>;
    status: z.ZodString;
    createdAt: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strip>;
/**
 * A member selector: either an opaque user ID, or a URL-encoded email address.
 * The server resolves an email to its user ID; a user ID never contains "@",
 * so the two cases are unambiguous.
 */
export declare const MemberSelectorSchema: z.ZodString;
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
    member: z.ZodString;
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
        member: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    member: string;
    organizationId?: string | undefined;
}, {
    params: {
        member: string;
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
    member: z.ZodString;
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
        member: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    member: string;
    organizationId?: string | undefined;
}, {
    params: {
        member: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>, z.ZodObject<{
    removedUserId: z.ZodString;
}, z.core.$strip>, "api">;
/**
 * Input schema for inviting a member by email.
 */
export declare const InviteMemberInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    role: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>>>;
}, z.core.$strip>;
/**
 * Output schema for inviting a member.
 */
export declare const InviteMemberOutputSchema: z.ZodObject<{
    invitation: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        status: z.ZodString;
        createdAt: z.ZodString;
        expiresAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Input schema for listing pending invitations.
 */
export declare const ListInvitationsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing pending invitations.
 */
export declare const ListInvitationsOutputSchema: z.ZodObject<{
    invitations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        status: z.ZodString;
        createdAt: z.ZodString;
        expiresAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Input schema for revoking a pending invitation.
 */
export declare const RevokeInvitationInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        invitationId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    invitationId: string;
    organizationId?: string | undefined;
}, {
    params: {
        invitationId: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>;
/**
 * Output schema for revoking a pending invitation.
 */
export declare const RevokeInvitationOutputSchema: z.ZodObject<{
    revokedInvitationId: z.ZodString;
}, z.core.$strip>;
export declare const inviteMember: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    role: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>>>;
}, z.core.$strip>, z.ZodObject<{
    invitation: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        status: z.ZodString;
        createdAt: z.ZodString;
        expiresAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const listInvitations: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    invitations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        status: z.ZodString;
        createdAt: z.ZodString;
        expiresAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const revokeInvitation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        invitationId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    invitationId: string;
    organizationId?: string | undefined;
}, {
    params: {
        invitationId: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>, z.ZodObject<{
    revokedInvitationId: z.ZodString;
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
        member: z.ZodString;
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
            member: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            organizationId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodTransform<{
        member: string;
        organizationId?: string | undefined;
    }, {
        params: {
            member: string;
        };
        query: {
            organizationId?: string | undefined;
        };
    }>>, z.ZodObject<{
        removedUserId: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly invite: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        email: z.ZodString;
        role: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>>>;
    }, z.core.$strip>, z.ZodObject<{
        invitation: z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            role: z.ZodEnum<{
                admin: "admin";
                member: "member";
            }>;
            status: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listInvitations: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        invitations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            role: z.ZodEnum<{
                admin: "admin";
                member: "member";
            }>;
            status: z.ZodString;
            createdAt: z.ZodString;
            expiresAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly revokeInvitation: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
        params: z.ZodObject<{
            invitationId: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            organizationId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodTransform<{
        invitationId: string;
        organizationId?: string | undefined;
    }, {
        params: {
            invitationId: string;
        };
        query: {
            organizationId?: string | undefined;
        };
    }>>, z.ZodObject<{
        revokedInvitationId: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
export type OrganizationMember = z.infer<typeof OrganizationMemberSchema>;
export type OrganizationInvitation = z.infer<typeof OrganizationInvitationSchema>;
export type ListMembersInput = z.infer<typeof ListMembersInputSchema>;
export type ListMembersOutput = z.infer<typeof ListMembersOutputSchema>;
export type UpdateMemberRoleInput = z.infer<typeof UpdateMemberRoleInputSchema>;
export type UpdateMemberRoleOutput = z.infer<typeof UpdateMemberRoleOutputSchema>;
export type RemoveMemberInput = z.infer<typeof RemoveMemberInputSchema>;
export type RemoveMemberOutput = z.infer<typeof RemoveMemberOutputSchema>;
export type InviteMemberInput = z.infer<typeof InviteMemberInputSchema>;
export type InviteMemberOutput = z.infer<typeof InviteMemberOutputSchema>;
export type ListInvitationsInput = z.infer<typeof ListInvitationsInputSchema>;
export type ListInvitationsOutput = z.infer<typeof ListInvitationsOutputSchema>;
export type RevokeInvitationInput = z.infer<typeof RevokeInvitationInputSchema>;
export type RevokeInvitationOutput = z.infer<typeof RevokeInvitationOutputSchema>;
