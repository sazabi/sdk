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
/**
 * A ticket read back from the support desk. Unlike a ticket just filed, the
 * desk holds no Sazabi organization, project, or thread for it (those travel
 * only in the ticket body's footer), and a ticket filed from the dashboard
 * widget carries no channel.
 */
export declare const SupportTicketSummarySchema: z.ZodObject<{
    id: z.ZodString;
    number: z.ZodNumber;
    featureRequest: z.ZodBoolean;
    title: z.ZodString;
    state: z.ZodString;
    filedThrough: z.ZodNullable<z.ZodEnum<{
        agent: "agent";
        api: "api";
        cli: "cli";
        mcp: "mcp";
    }>>;
    requester: z.ZodObject<{
        email: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export type SupportTicketSummary = z.infer<typeof SupportTicketSummarySchema>;
export declare const SupportTicketStatusFilterSchema: z.ZodEnum<{
    closed: "closed";
    new: "new";
    on_hold: "on_hold";
    open: "open";
    waiting_on_customer: "waiting_on_customer";
    waiting_on_you: "waiting_on_you";
}>;
export declare const ListSupportTicketsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        closed: "closed";
        new: "new";
        on_hold: "on_hold";
        open: "open";
        waiting_on_customer: "waiting_on_customer";
        waiting_on_you: "waiting_on_you";
    }>, z.ZodArray<z.ZodEnum<{
        closed: "closed";
        new: "new";
        on_hold: "on_hold";
        open: "open";
        waiting_on_customer: "waiting_on_customer";
        waiting_on_you: "waiting_on_you";
    }>>]>>;
    featureRequest: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListSupportTicketsInput = z.infer<typeof ListSupportTicketsInputSchema>;
export declare const ListSupportTicketsOutputSchema: z.ZodObject<{
    supportTickets: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        number: z.ZodNumber;
        featureRequest: z.ZodBoolean;
        title: z.ZodString;
        state: z.ZodString;
        filedThrough: z.ZodNullable<z.ZodEnum<{
            agent: "agent";
            api: "api";
            cli: "cli";
            mcp: "mcp";
        }>>;
        requester: z.ZodObject<{
            email: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListSupportTicketsOutput = z.infer<typeof ListSupportTicketsOutputSchema>;
export declare const GetSupportTicketInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    ticketId: z.ZodString;
}, z.core.$strip>;
export type GetSupportTicketInput = z.infer<typeof GetSupportTicketInputSchema>;
export declare const GetSupportTicketOutputSchema: z.ZodObject<{
    supportTicket: z.ZodObject<{
        id: z.ZodString;
        number: z.ZodNumber;
        featureRequest: z.ZodBoolean;
        title: z.ZodString;
        state: z.ZodString;
        filedThrough: z.ZodNullable<z.ZodEnum<{
            agent: "agent";
            api: "api";
            cli: "cli";
            mcp: "mcp";
        }>>;
        requester: z.ZodObject<{
            email: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetSupportTicketOutput = z.infer<typeof GetSupportTicketOutputSchema>;
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
export declare const listSupportTickets: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        closed: "closed";
        new: "new";
        on_hold: "on_hold";
        open: "open";
        waiting_on_customer: "waiting_on_customer";
        waiting_on_you: "waiting_on_you";
    }>, z.ZodArray<z.ZodEnum<{
        closed: "closed";
        new: "new";
        on_hold: "on_hold";
        open: "open";
        waiting_on_customer: "waiting_on_customer";
        waiting_on_you: "waiting_on_you";
    }>>]>>;
    featureRequest: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    supportTickets: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        number: z.ZodNumber;
        featureRequest: z.ZodBoolean;
        title: z.ZodString;
        state: z.ZodString;
        filedThrough: z.ZodNullable<z.ZodEnum<{
            agent: "agent";
            api: "api";
            cli: "cli";
            mcp: "mcp";
        }>>;
        requester: z.ZodObject<{
            email: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const getSupportTicket: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    ticketId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    supportTicket: z.ZodObject<{
        id: z.ZodString;
        number: z.ZodNumber;
        featureRequest: z.ZodBoolean;
        title: z.ZodString;
        state: z.ZodString;
        filedThrough: z.ZodNullable<z.ZodEnum<{
            agent: "agent";
            api: "api";
            cli: "cli";
            mcp: "mcp";
        }>>;
        requester: z.ZodObject<{
            email: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
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
    list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            closed: "closed";
            new: "new";
            on_hold: "on_hold";
            open: "open";
            waiting_on_customer: "waiting_on_customer";
            waiting_on_you: "waiting_on_you";
        }>, z.ZodArray<z.ZodEnum<{
            closed: "closed";
            new: "new";
            on_hold: "on_hold";
            open: "open";
            waiting_on_customer: "waiting_on_customer";
            waiting_on_you: "waiting_on_you";
        }>>]>>;
        featureRequest: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        supportTickets: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            number: z.ZodNumber;
            featureRequest: z.ZodBoolean;
            title: z.ZodString;
            state: z.ZodString;
            filedThrough: z.ZodNullable<z.ZodEnum<{
                agent: "agent";
                api: "api";
                cli: "cli";
                mcp: "mcp";
            }>>;
            requester: z.ZodObject<{
                email: z.ZodString;
                name: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        ticketId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        supportTicket: z.ZodObject<{
            id: z.ZodString;
            number: z.ZodNumber;
            featureRequest: z.ZodBoolean;
            title: z.ZodString;
            state: z.ZodString;
            filedThrough: z.ZodNullable<z.ZodEnum<{
                agent: "agent";
                api: "api";
                cli: "cli";
                mcp: "mcp";
            }>>;
            requester: z.ZodObject<{
                email: z.ZodString;
                name: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            createdAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
