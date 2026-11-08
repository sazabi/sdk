import { z } from "zod";
export declare const AgentDispatchStatusSchema: z.ZodEnum<{
    cancel_requested: "cancel_requested";
    cancelled: "cancelled";
    completed: "completed";
    failed: "failed";
    paused: "paused";
    queued: "queued";
    running: "running";
    unknown: "unknown";
    waiting: "waiting";
}>;
export declare const AgentDispatchTurnSchema: z.ZodObject<{
    id: z.ZodString;
    direction: z.ZodEnum<{
        inbound: "inbound";
        outbound: "outbound";
    }>;
    text: z.ZodNullable<z.ZodString>;
    status: z.ZodNullable<z.ZodEnum<{
        cancel_requested: "cancel_requested";
        cancelled: "cancelled";
        completed: "completed";
        failed: "failed";
        paused: "paused";
        queued: "queued";
        running: "running";
        unknown: "unknown";
        waiting: "waiting";
    }>>;
    requestId: z.ZodNullable<z.ZodString>;
    userId: z.ZodNullable<z.ZodString>;
    externalId: z.ZodNullable<z.ZodString>;
    messageId: z.ZodString;
    sentAt: z.ZodNullable<z.ZodString>;
    settledAt: z.ZodNullable<z.ZodString>;
    deliveredAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export type AgentDispatchTurn = z.infer<typeof AgentDispatchTurnSchema>;
export declare const AgentDispatchProgressEntrySchema: z.ZodObject<{
    at: z.ZodString;
    role: z.ZodEnum<{
        agent: "agent";
        system: "system";
    }>;
    text: z.ZodString;
    vendorMessageId: z.ZodString;
}, z.core.$strip>;
export declare const AgentDispatchSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    id: z.ZodString;
    issueFixId: z.ZodNullable<z.ZodString>;
    issueId: z.ZodNullable<z.ZodString>;
    threadId: z.ZodString;
    connectionId: z.ZodString;
    provider: z.ZodString;
    requesterUserId: z.ZodNullable<z.ZodString>;
    connectionOwnerUserId: z.ZodString;
    clientRequestId: z.ZodString;
    status: z.ZodEnum<{
        cancel_requested: "cancel_requested";
        cancelled: "cancelled";
        completed: "completed";
        failed: "failed";
        paused: "paused";
        queued: "queued";
        running: "running";
        unknown: "unknown";
        waiting: "waiting";
    }>;
    externalSessionId: z.ZodNullable<z.ZodString>;
    externalTurnId: z.ZodNullable<z.ZodString>;
    sessionUrl: z.ZodNullable<z.ZodString>;
    repositoryUrl: z.ZodString;
    baseBranch: z.ZodString;
    result: z.ZodNullable<z.ZodString>;
    turns: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        direction: z.ZodEnum<{
            inbound: "inbound";
            outbound: "outbound";
        }>;
        text: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            cancel_requested: "cancel_requested";
            cancelled: "cancelled";
            completed: "completed";
            failed: "failed";
            paused: "paused";
            queued: "queued";
            running: "running";
            unknown: "unknown";
            waiting: "waiting";
        }>>;
        requestId: z.ZodNullable<z.ZodString>;
        userId: z.ZodNullable<z.ZodString>;
        externalId: z.ZodNullable<z.ZodString>;
        messageId: z.ZodString;
        sentAt: z.ZodNullable<z.ZodString>;
        settledAt: z.ZodNullable<z.ZodString>;
        deliveredAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    pullRequests: z.ZodArray<z.ZodString>;
    pullRequestDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        number: z.ZodNumber;
        repositoryFullName: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            closed: "closed";
            merged: "merged";
            open: "open";
        }>>;
    }, z.core.$strip>>>;
    progress: z.ZodArray<z.ZodObject<{
        at: z.ZodString;
        role: z.ZodEnum<{
            agent: "agent";
            system: "system";
        }>;
        text: z.ZodString;
        vendorMessageId: z.ZodString;
    }, z.core.$strip>>;
    reopenable: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type AgentDispatch = z.infer<typeof AgentDispatchSchema>;
export declare const ListAgentDispatchesInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    issueId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        cancel_requested: "cancel_requested";
        cancelled: "cancelled";
        completed: "completed";
        failed: "failed";
        paused: "paused";
        queued: "queued";
        running: "running";
        unknown: "unknown";
        waiting: "waiting";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const ListAgentDispatchesOutputSchema: z.ZodObject<{
    dispatches: z.ZodArray<z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodString;
        id: z.ZodString;
        issueFixId: z.ZodNullable<z.ZodString>;
        issueId: z.ZodNullable<z.ZodString>;
        threadId: z.ZodString;
        connectionId: z.ZodString;
        provider: z.ZodString;
        requesterUserId: z.ZodNullable<z.ZodString>;
        connectionOwnerUserId: z.ZodString;
        clientRequestId: z.ZodString;
        status: z.ZodEnum<{
            cancel_requested: "cancel_requested";
            cancelled: "cancelled";
            completed: "completed";
            failed: "failed";
            paused: "paused";
            queued: "queued";
            running: "running";
            unknown: "unknown";
            waiting: "waiting";
        }>;
        externalSessionId: z.ZodNullable<z.ZodString>;
        externalTurnId: z.ZodNullable<z.ZodString>;
        sessionUrl: z.ZodNullable<z.ZodString>;
        repositoryUrl: z.ZodString;
        baseBranch: z.ZodString;
        result: z.ZodNullable<z.ZodString>;
        turns: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            direction: z.ZodEnum<{
                inbound: "inbound";
                outbound: "outbound";
            }>;
            text: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<{
                cancel_requested: "cancel_requested";
                cancelled: "cancelled";
                completed: "completed";
                failed: "failed";
                paused: "paused";
                queued: "queued";
                running: "running";
                unknown: "unknown";
                waiting: "waiting";
            }>>;
            requestId: z.ZodNullable<z.ZodString>;
            userId: z.ZodNullable<z.ZodString>;
            externalId: z.ZodNullable<z.ZodString>;
            messageId: z.ZodString;
            sentAt: z.ZodNullable<z.ZodString>;
            settledAt: z.ZodNullable<z.ZodString>;
            deliveredAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
        pullRequests: z.ZodArray<z.ZodString>;
        pullRequestDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            number: z.ZodNumber;
            repositoryFullName: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<{
                closed: "closed";
                merged: "merged";
                open: "open";
            }>>;
        }, z.core.$strip>>>;
        progress: z.ZodArray<z.ZodObject<{
            at: z.ZodString;
            role: z.ZodEnum<{
                agent: "agent";
                system: "system";
            }>;
            text: z.ZodString;
            vendorMessageId: z.ZodString;
        }, z.core.$strip>>;
        reopenable: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const GetAgentDispatchInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    dispatchId: z.ZodString;
}, z.core.$strip>;
export declare const ReplyAgentDispatchInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    dispatchId: z.ZodString;
    clientRequestId: z.ZodString;
    text: z.ZodString;
}, z.core.$strip>;
export declare const CancelAgentDispatchInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    dispatchId: z.ZodString;
}, z.core.$strip>;
export type ListAgentDispatchesInput = z.infer<typeof ListAgentDispatchesInputSchema>;
export type ListAgentDispatchesOutput = z.infer<typeof ListAgentDispatchesOutputSchema>;
export type GetAgentDispatchInput = z.infer<typeof GetAgentDispatchInputSchema>;
export type ReplyAgentDispatchInput = z.infer<typeof ReplyAgentDispatchInputSchema>;
export type CancelAgentDispatchInput = z.infer<typeof CancelAgentDispatchInputSchema>;
export declare const listAgentDispatches: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    issueId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        cancel_requested: "cancel_requested";
        cancelled: "cancelled";
        completed: "completed";
        failed: "failed";
        paused: "paused";
        queued: "queued";
        running: "running";
        unknown: "unknown";
        waiting: "waiting";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    dispatches: z.ZodArray<z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodString;
        id: z.ZodString;
        issueFixId: z.ZodNullable<z.ZodString>;
        issueId: z.ZodNullable<z.ZodString>;
        threadId: z.ZodString;
        connectionId: z.ZodString;
        provider: z.ZodString;
        requesterUserId: z.ZodNullable<z.ZodString>;
        connectionOwnerUserId: z.ZodString;
        clientRequestId: z.ZodString;
        status: z.ZodEnum<{
            cancel_requested: "cancel_requested";
            cancelled: "cancelled";
            completed: "completed";
            failed: "failed";
            paused: "paused";
            queued: "queued";
            running: "running";
            unknown: "unknown";
            waiting: "waiting";
        }>;
        externalSessionId: z.ZodNullable<z.ZodString>;
        externalTurnId: z.ZodNullable<z.ZodString>;
        sessionUrl: z.ZodNullable<z.ZodString>;
        repositoryUrl: z.ZodString;
        baseBranch: z.ZodString;
        result: z.ZodNullable<z.ZodString>;
        turns: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            direction: z.ZodEnum<{
                inbound: "inbound";
                outbound: "outbound";
            }>;
            text: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<{
                cancel_requested: "cancel_requested";
                cancelled: "cancelled";
                completed: "completed";
                failed: "failed";
                paused: "paused";
                queued: "queued";
                running: "running";
                unknown: "unknown";
                waiting: "waiting";
            }>>;
            requestId: z.ZodNullable<z.ZodString>;
            userId: z.ZodNullable<z.ZodString>;
            externalId: z.ZodNullable<z.ZodString>;
            messageId: z.ZodString;
            sentAt: z.ZodNullable<z.ZodString>;
            settledAt: z.ZodNullable<z.ZodString>;
            deliveredAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
        pullRequests: z.ZodArray<z.ZodString>;
        pullRequestDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            number: z.ZodNumber;
            repositoryFullName: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<{
                closed: "closed";
                merged: "merged";
                open: "open";
            }>>;
        }, z.core.$strip>>>;
        progress: z.ZodArray<z.ZodObject<{
            at: z.ZodString;
            role: z.ZodEnum<{
                agent: "agent";
                system: "system";
            }>;
            text: z.ZodString;
            vendorMessageId: z.ZodString;
        }, z.core.$strip>>;
        reopenable: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const getAgentDispatch: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    dispatchId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    id: z.ZodString;
    issueFixId: z.ZodNullable<z.ZodString>;
    issueId: z.ZodNullable<z.ZodString>;
    threadId: z.ZodString;
    connectionId: z.ZodString;
    provider: z.ZodString;
    requesterUserId: z.ZodNullable<z.ZodString>;
    connectionOwnerUserId: z.ZodString;
    clientRequestId: z.ZodString;
    status: z.ZodEnum<{
        cancel_requested: "cancel_requested";
        cancelled: "cancelled";
        completed: "completed";
        failed: "failed";
        paused: "paused";
        queued: "queued";
        running: "running";
        unknown: "unknown";
        waiting: "waiting";
    }>;
    externalSessionId: z.ZodNullable<z.ZodString>;
    externalTurnId: z.ZodNullable<z.ZodString>;
    sessionUrl: z.ZodNullable<z.ZodString>;
    repositoryUrl: z.ZodString;
    baseBranch: z.ZodString;
    result: z.ZodNullable<z.ZodString>;
    turns: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        direction: z.ZodEnum<{
            inbound: "inbound";
            outbound: "outbound";
        }>;
        text: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            cancel_requested: "cancel_requested";
            cancelled: "cancelled";
            completed: "completed";
            failed: "failed";
            paused: "paused";
            queued: "queued";
            running: "running";
            unknown: "unknown";
            waiting: "waiting";
        }>>;
        requestId: z.ZodNullable<z.ZodString>;
        userId: z.ZodNullable<z.ZodString>;
        externalId: z.ZodNullable<z.ZodString>;
        messageId: z.ZodString;
        sentAt: z.ZodNullable<z.ZodString>;
        settledAt: z.ZodNullable<z.ZodString>;
        deliveredAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    pullRequests: z.ZodArray<z.ZodString>;
    pullRequestDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        number: z.ZodNumber;
        repositoryFullName: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            closed: "closed";
            merged: "merged";
            open: "open";
        }>>;
    }, z.core.$strip>>>;
    progress: z.ZodArray<z.ZodObject<{
        at: z.ZodString;
        role: z.ZodEnum<{
            agent: "agent";
            system: "system";
        }>;
        text: z.ZodString;
        vendorMessageId: z.ZodString;
    }, z.core.$strip>>;
    reopenable: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const replyAgentDispatch: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    dispatchId: z.ZodString;
    clientRequestId: z.ZodString;
    text: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    id: z.ZodString;
    issueFixId: z.ZodNullable<z.ZodString>;
    issueId: z.ZodNullable<z.ZodString>;
    threadId: z.ZodString;
    connectionId: z.ZodString;
    provider: z.ZodString;
    requesterUserId: z.ZodNullable<z.ZodString>;
    connectionOwnerUserId: z.ZodString;
    clientRequestId: z.ZodString;
    status: z.ZodEnum<{
        cancel_requested: "cancel_requested";
        cancelled: "cancelled";
        completed: "completed";
        failed: "failed";
        paused: "paused";
        queued: "queued";
        running: "running";
        unknown: "unknown";
        waiting: "waiting";
    }>;
    externalSessionId: z.ZodNullable<z.ZodString>;
    externalTurnId: z.ZodNullable<z.ZodString>;
    sessionUrl: z.ZodNullable<z.ZodString>;
    repositoryUrl: z.ZodString;
    baseBranch: z.ZodString;
    result: z.ZodNullable<z.ZodString>;
    turns: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        direction: z.ZodEnum<{
            inbound: "inbound";
            outbound: "outbound";
        }>;
        text: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            cancel_requested: "cancel_requested";
            cancelled: "cancelled";
            completed: "completed";
            failed: "failed";
            paused: "paused";
            queued: "queued";
            running: "running";
            unknown: "unknown";
            waiting: "waiting";
        }>>;
        requestId: z.ZodNullable<z.ZodString>;
        userId: z.ZodNullable<z.ZodString>;
        externalId: z.ZodNullable<z.ZodString>;
        messageId: z.ZodString;
        sentAt: z.ZodNullable<z.ZodString>;
        settledAt: z.ZodNullable<z.ZodString>;
        deliveredAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    pullRequests: z.ZodArray<z.ZodString>;
    pullRequestDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        number: z.ZodNumber;
        repositoryFullName: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            closed: "closed";
            merged: "merged";
            open: "open";
        }>>;
    }, z.core.$strip>>>;
    progress: z.ZodArray<z.ZodObject<{
        at: z.ZodString;
        role: z.ZodEnum<{
            agent: "agent";
            system: "system";
        }>;
        text: z.ZodString;
        vendorMessageId: z.ZodString;
    }, z.core.$strip>>;
    reopenable: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const cancelAgentDispatch: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    dispatchId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    id: z.ZodString;
    issueFixId: z.ZodNullable<z.ZodString>;
    issueId: z.ZodNullable<z.ZodString>;
    threadId: z.ZodString;
    connectionId: z.ZodString;
    provider: z.ZodString;
    requesterUserId: z.ZodNullable<z.ZodString>;
    connectionOwnerUserId: z.ZodString;
    clientRequestId: z.ZodString;
    status: z.ZodEnum<{
        cancel_requested: "cancel_requested";
        cancelled: "cancelled";
        completed: "completed";
        failed: "failed";
        paused: "paused";
        queued: "queued";
        running: "running";
        unknown: "unknown";
        waiting: "waiting";
    }>;
    externalSessionId: z.ZodNullable<z.ZodString>;
    externalTurnId: z.ZodNullable<z.ZodString>;
    sessionUrl: z.ZodNullable<z.ZodString>;
    repositoryUrl: z.ZodString;
    baseBranch: z.ZodString;
    result: z.ZodNullable<z.ZodString>;
    turns: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        direction: z.ZodEnum<{
            inbound: "inbound";
            outbound: "outbound";
        }>;
        text: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            cancel_requested: "cancel_requested";
            cancelled: "cancelled";
            completed: "completed";
            failed: "failed";
            paused: "paused";
            queued: "queued";
            running: "running";
            unknown: "unknown";
            waiting: "waiting";
        }>>;
        requestId: z.ZodNullable<z.ZodString>;
        userId: z.ZodNullable<z.ZodString>;
        externalId: z.ZodNullable<z.ZodString>;
        messageId: z.ZodString;
        sentAt: z.ZodNullable<z.ZodString>;
        settledAt: z.ZodNullable<z.ZodString>;
        deliveredAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    pullRequests: z.ZodArray<z.ZodString>;
    pullRequestDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        number: z.ZodNumber;
        repositoryFullName: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            closed: "closed";
            merged: "merged";
            open: "open";
        }>>;
    }, z.core.$strip>>>;
    progress: z.ZodArray<z.ZodObject<{
        at: z.ZodString;
        role: z.ZodEnum<{
            agent: "agent";
            system: "system";
        }>;
        text: z.ZodString;
        vendorMessageId: z.ZodString;
    }, z.core.$strip>>;
    reopenable: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
/** The vendor environment the selected coding agent fixes in (a Replicas organization environment). */
export declare const AgentDispatchProjectDefaultEnvironmentSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * The agent a project's fixes go to (ENG-10725): a connected coding agent
 * account, or Sazabi's agent (`provider: "sazabi"`, no connection).
 */
export declare const AgentDispatchProjectDefaultSchema: z.ZodObject<{
    provider: z.ZodEnum<{
        capy: "capy";
        claude: "claude";
        codex: "codex";
        cursor: "cursor";
        devin: "devin";
        hoplite: "hoplite";
        replicas: "replicas";
        sazabi: "sazabi";
        tembo: "tembo";
        warp: "warp";
    }>;
    connectionId: z.ZodNullable<z.ZodString>;
    displayName: z.ZodString;
    environment: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const GetAgentDispatchProjectDefaultInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
}, z.core.$strip>;
export declare const AgentDispatchProjectDefaultOutputSchema: z.ZodObject<{
    default: z.ZodNullable<z.ZodObject<{
        provider: z.ZodEnum<{
            capy: "capy";
            claude: "claude";
            codex: "codex";
            cursor: "cursor";
            devin: "devin";
            hoplite: "hoplite";
            replicas: "replicas";
            sazabi: "sazabi";
            tembo: "tembo";
            warp: "warp";
        }>;
        connectionId: z.ZodNullable<z.ZodString>;
        displayName: z.ZodString;
        environment: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    autoFix: z.ZodBoolean;
    connectionBroken: z.ZodBoolean;
    agents: z.ZodArray<z.ZodObject<{
        provider: z.ZodEnum<{
            capy: "capy";
            claude: "claude";
            codex: "codex";
            cursor: "cursor";
            devin: "devin";
            hoplite: "hoplite";
            replicas: "replicas";
            tembo: "tembo";
            warp: "warp";
        }>;
        connectionId: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SetAgentDispatchProjectDefaultInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    agent: z.ZodNullable<z.ZodUnion<readonly [z.ZodObject<{
        provider: z.ZodEnum<{
            capy: "capy";
            claude: "claude";
            codex: "codex";
            cursor: "cursor";
            devin: "devin";
            hoplite: "hoplite";
            replicas: "replicas";
            tembo: "tembo";
            warp: "warp";
        }>;
        connectionId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        provider: z.ZodLiteral<"sazabi">;
    }, z.core.$strip>]>>;
    autoFix: z.ZodOptional<z.ZodBoolean>;
    clearEnvironment: z.ZodDefault<z.ZodBoolean>;
    environmentId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AgentDispatchProjectDefault = z.infer<typeof AgentDispatchProjectDefaultSchema>;
export type AgentDispatchProjectDefaultOutput = z.infer<typeof AgentDispatchProjectDefaultOutputSchema>;
export type SetAgentDispatchProjectDefaultInput = z.infer<typeof SetAgentDispatchProjectDefaultInputSchema>;
export declare const getAgentDispatchProjectDefault: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    default: z.ZodNullable<z.ZodObject<{
        provider: z.ZodEnum<{
            capy: "capy";
            claude: "claude";
            codex: "codex";
            cursor: "cursor";
            devin: "devin";
            hoplite: "hoplite";
            replicas: "replicas";
            sazabi: "sazabi";
            tembo: "tembo";
            warp: "warp";
        }>;
        connectionId: z.ZodNullable<z.ZodString>;
        displayName: z.ZodString;
        environment: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    autoFix: z.ZodBoolean;
    connectionBroken: z.ZodBoolean;
    agents: z.ZodArray<z.ZodObject<{
        provider: z.ZodEnum<{
            capy: "capy";
            claude: "claude";
            codex: "codex";
            cursor: "cursor";
            devin: "devin";
            hoplite: "hoplite";
            replicas: "replicas";
            tembo: "tembo";
            warp: "warp";
        }>;
        connectionId: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const updateAgentDispatchProjectDefault: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodString;
    agent: z.ZodNullable<z.ZodUnion<readonly [z.ZodObject<{
        provider: z.ZodEnum<{
            capy: "capy";
            claude: "claude";
            codex: "codex";
            cursor: "cursor";
            devin: "devin";
            hoplite: "hoplite";
            replicas: "replicas";
            tembo: "tembo";
            warp: "warp";
        }>;
        connectionId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        provider: z.ZodLiteral<"sazabi">;
    }, z.core.$strip>]>>;
    autoFix: z.ZodOptional<z.ZodBoolean>;
    clearEnvironment: z.ZodDefault<z.ZodBoolean>;
    environmentId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    default: z.ZodNullable<z.ZodObject<{
        provider: z.ZodEnum<{
            capy: "capy";
            claude: "claude";
            codex: "codex";
            cursor: "cursor";
            devin: "devin";
            hoplite: "hoplite";
            replicas: "replicas";
            sazabi: "sazabi";
            tembo: "tembo";
            warp: "warp";
        }>;
        connectionId: z.ZodNullable<z.ZodString>;
        displayName: z.ZodString;
        environment: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    autoFix: z.ZodBoolean;
    connectionBroken: z.ZodBoolean;
    agents: z.ZodArray<z.ZodObject<{
        provider: z.ZodEnum<{
            capy: "capy";
            claude: "claude";
            codex: "codex";
            cursor: "cursor";
            devin: "devin";
            hoplite: "hoplite";
            replicas: "replicas";
            tembo: "tembo";
            warp: "warp";
        }>;
        connectionId: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
