import { z } from "zod";
/**
 * Org-scoped team representation. Teams are arbitrary named groups of
 * organization members; membership grants no permissions.
 */
export declare const TeamSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    memberCount: z.ZodNumber;
}, z.core.$strip>;
export type Team = z.infer<typeof TeamSchema>;
/**
 * Team member representation with joined user profile data.
 */
export declare const TeamMemberSchema: z.ZodObject<{
    userId: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    email: z.ZodString;
    addedAt: z.ZodString;
}, z.core.$strip>;
export type TeamMember = z.infer<typeof TeamMemberSchema>;
export declare const ListTeamsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListTeamsInput = z.infer<typeof ListTeamsInputSchema>;
export declare const ListTeamsOutputSchema: z.ZodObject<{
    teams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        memberCount: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListTeamsOutput = z.infer<typeof ListTeamsOutputSchema>;
export declare const CreateTeamInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateTeamInput = z.infer<typeof CreateTeamInputSchema>;
export declare const CreateTeamOutputSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type CreateTeamOutput = z.infer<typeof CreateTeamOutputSchema>;
export declare const UpdateTeamInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    teamId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type UpdateTeamInput = z.infer<typeof UpdateTeamInputSchema>;
export declare const UpdateTeamOutputSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type UpdateTeamOutput = z.infer<typeof UpdateTeamOutputSchema>;
export declare const DeleteTeamInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        teamId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    teamId: string;
    organizationId?: string | undefined;
}, {
    params: {
        teamId: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>;
export type DeleteTeamInput = z.infer<typeof DeleteTeamInputSchema>;
export declare const DeleteTeamOutputSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
export type DeleteTeamOutput = z.infer<typeof DeleteTeamOutputSchema>;
export declare const AddTeamMemberInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    teamId: z.ZodString;
    userId: z.ZodString;
}, z.core.$strip>;
export type AddTeamMemberInput = z.infer<typeof AddTeamMemberInputSchema>;
export declare const AddTeamMemberOutputSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type AddTeamMemberOutput = z.infer<typeof AddTeamMemberOutputSchema>;
export declare const RemoveTeamMemberInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        teamId: z.ZodString;
        userId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    teamId: string;
    userId: string;
    organizationId?: string | undefined;
}, {
    params: {
        teamId: string;
        userId: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>;
export type RemoveTeamMemberInput = z.infer<typeof RemoveTeamMemberInputSchema>;
export declare const RemoveTeamMemberOutputSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
export type RemoveTeamMemberOutput = z.infer<typeof RemoveTeamMemberOutputSchema>;
export declare const ListTeamMembersInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    teamId: z.ZodString;
}, z.core.$strip>;
export type ListTeamMembersInput = z.infer<typeof ListTeamMembersInputSchema>;
export declare const ListTeamMembersOutputSchema: z.ZodObject<{
    members: z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
        addedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListTeamMembersOutput = z.infer<typeof ListTeamMembersOutputSchema>;
export declare const listTeams: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    teams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        memberCount: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const createTeam: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, "api">;
export declare const updateTeam: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    teamId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, "api">;
export declare const deleteTeam: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        teamId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    teamId: string;
    organizationId?: string | undefined;
}, {
    params: {
        teamId: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>, z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const addTeamMember: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    teamId: z.ZodString;
    userId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, "api">;
export declare const removeTeamMember: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        teamId: z.ZodString;
        userId: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodTransform<{
    teamId: string;
    userId: string;
    organizationId?: string | undefined;
}, {
    params: {
        teamId: string;
        userId: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>, z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const listTeamMembers: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    teamId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    members: z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodString;
        addedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * Teams contract tree.
 */
export declare const teamsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        teams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            memberCount: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        teamId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly delete: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
        params: z.ZodObject<{
            teamId: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            organizationId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodTransform<{
        teamId: string;
        organizationId?: string | undefined;
    }, {
        params: {
            teamId: string;
        };
        query: {
            organizationId?: string | undefined;
        };
    }>>, z.ZodObject<{
        success: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly addMember: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        teamId: z.ZodString;
        userId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly removeMember: import("@orpc/contract").ContractProcedure<z.ZodPipe<z.ZodObject<{
        params: z.ZodObject<{
            teamId: z.ZodString;
            userId: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            organizationId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodTransform<{
        teamId: string;
        userId: string;
        organizationId?: string | undefined;
    }, {
        params: {
            teamId: string;
            userId: string;
        };
        query: {
            organizationId?: string | undefined;
        };
    }>>, z.ZodObject<{
        success: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listMembers: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        teamId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        members: z.ZodArray<z.ZodObject<{
            userId: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            email: z.ZodString;
            addedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
