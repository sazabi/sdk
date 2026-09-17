import { z } from "zod";
/**
 * Support tickets: a customer's request for help from Sazabi's own support
 * desk. Pylon is the system of record; Sazabi stores nothing and returns
 * Pylon's ticket. A feature request is a support ticket flagged as one, the
 * same explicit path the dashboard widget's feature request form takes; the
 * support desk classifies everything else itself.
 */
export declare const FeatureRequestFlagSchema: z.ZodBoolean;
export declare const SUPPORT_TICKET_CHANNELS: readonly ["cli", "agent", "mcp", "api"];
export declare const SupportTicketChannelSchema: z.ZodEnum<{
    agent: "agent";
    api: "api";
    cli: "cli";
    mcp: "mcp";
}>;
export type SupportTicketChannel = z.infer<typeof SupportTicketChannelSchema>;
export declare const SupportTicketSchema: z.ZodObject<{
    id: z.ZodString;
    number: z.ZodNumber;
    organizationId: z.ZodString;
    projectId: z.ZodNullable<z.ZodString>;
    threadId: z.ZodNullable<z.ZodString>;
    featureRequest: z.ZodBoolean;
    title: z.ZodString;
    state: z.ZodString;
    filedThrough: z.ZodEnum<{
        agent: "agent";
        api: "api";
        cli: "cli";
        mcp: "mcp";
    }>;
    requester: z.ZodObject<{
        email: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export type SupportTicket = z.infer<typeof SupportTicketSchema>;
export declare const CreateSupportTicketInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    threadId: z.ZodOptional<z.ZodString>;
    featureRequest: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodString;
    body: z.ZodString;
}, z.core.$strip>;
export type CreateSupportTicketInput = z.infer<typeof CreateSupportTicketInputSchema>;
export declare const CreateSupportTicketOutputSchema: z.ZodObject<{
    supportTicket: z.ZodObject<{
        id: z.ZodString;
        number: z.ZodNumber;
        organizationId: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        threadId: z.ZodNullable<z.ZodString>;
        featureRequest: z.ZodBoolean;
        title: z.ZodString;
        state: z.ZodString;
        filedThrough: z.ZodEnum<{
            agent: "agent";
            api: "api";
            cli: "cli";
            mcp: "mcp";
        }>;
        requester: z.ZodObject<{
            email: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateSupportTicketOutput = z.infer<typeof CreateSupportTicketOutputSchema>;
export declare const GetSupportTicketAvailabilityInputSchema: z.ZodObject<{}, z.core.$strip>;
export type GetSupportTicketAvailabilityInput = z.infer<typeof GetSupportTicketAvailabilityInputSchema>;
export declare const SupportTicketAvailabilityReasonSchema: z.ZodEnum<{
    not_configured: "not_configured";
    provider_unavailable: "provider_unavailable";
}>;
export type SupportTicketAvailabilityReason = z.infer<typeof SupportTicketAvailabilityReasonSchema>;
export declare const GetSupportTicketAvailabilityOutputSchema: z.ZodObject<{
    available: z.ZodBoolean;
    reason: z.ZodNullable<z.ZodEnum<{
        not_configured: "not_configured";
        provider_unavailable: "provider_unavailable";
    }>>;
}, z.core.$strip>;
export type GetSupportTicketAvailabilityOutput = z.infer<typeof GetSupportTicketAvailabilityOutputSchema>;
export declare const createSupportTicket: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    threadId: z.ZodOptional<z.ZodString>;
    featureRequest: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodString;
    body: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    supportTicket: z.ZodObject<{
        id: z.ZodString;
        number: z.ZodNumber;
        organizationId: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        threadId: z.ZodNullable<z.ZodString>;
        featureRequest: z.ZodBoolean;
        title: z.ZodString;
        state: z.ZodString;
        filedThrough: z.ZodEnum<{
            agent: "agent";
            api: "api";
            cli: "cli";
            mcp: "mcp";
        }>;
        requester: z.ZodObject<{
            email: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const getSupportTicketAvailability: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    available: z.ZodBoolean;
    reason: z.ZodNullable<z.ZodEnum<{
        not_configured: "not_configured";
        provider_unavailable: "provider_unavailable";
    }>>;
}, z.core.$strip>, "api">;
export declare const supportTicketsContract: {
    create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
        threadId: z.ZodOptional<z.ZodString>;
        featureRequest: z.ZodOptional<z.ZodBoolean>;
        title: z.ZodString;
        body: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        supportTicket: z.ZodObject<{
            id: z.ZodString;
            number: z.ZodNumber;
            organizationId: z.ZodString;
            projectId: z.ZodNullable<z.ZodString>;
            threadId: z.ZodNullable<z.ZodString>;
            featureRequest: z.ZodBoolean;
            title: z.ZodString;
            state: z.ZodString;
            filedThrough: z.ZodEnum<{
                agent: "agent";
                api: "api";
                cli: "cli";
                mcp: "mcp";
            }>;
            requester: z.ZodObject<{
                email: z.ZodString;
                name: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            createdAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    availability: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        available: z.ZodBoolean;
        reason: z.ZodNullable<z.ZodEnum<{
            not_configured: "not_configured";
            provider_unavailable: "provider_unavailable";
        }>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
