import { z } from "zod";
export declare const IssueSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>;
    severity: z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>;
    statusComponentId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
    mutedAt: z.ZodNullable<z.ZodString>;
    muteHitCount: z.ZodNumber;
    lastActivityAt: z.ZodNullable<z.ZodString>;
    lastDeliveredAt: z.ZodNullable<z.ZodString>;
    locked: z.ZodBoolean;
    redacted: z.ZodBoolean;
}, z.core.$strip>;
export type Issue = z.infer<typeof IssueSchema>;
export declare const IssueSlackChannelSchema: z.ZodObject<{
    channelId: z.ZodNullable<z.ZodString>;
    channelName: z.ZodNullable<z.ZodString>;
    threadTs: z.ZodNullable<z.ZodString>;
    permalink: z.ZodNullable<z.ZodString>;
    workspaceName: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type IssueSlackChannel = z.infer<typeof IssueSlackChannelSchema>;
export declare const IssueDetailSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>;
    severity: z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>;
    statusComponentId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
    mutedAt: z.ZodNullable<z.ZodString>;
    muteHitCount: z.ZodNumber;
    lastActivityAt: z.ZodNullable<z.ZodString>;
    lastDeliveredAt: z.ZodNullable<z.ZodString>;
    locked: z.ZodBoolean;
    redacted: z.ZodBoolean;
    slackChannels: z.ZodArray<z.ZodObject<{
        channelId: z.ZodNullable<z.ZodString>;
        channelName: z.ZodNullable<z.ZodString>;
        threadTs: z.ZodNullable<z.ZodString>;
        permalink: z.ZodNullable<z.ZodString>;
        workspaceName: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IssueDetail = z.infer<typeof IssueDetailSchema>;
export declare const IssueSearchItemSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>;
    severity: z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>;
    statusComponentId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
    mutedAt: z.ZodNullable<z.ZodString>;
    muteHitCount: z.ZodNumber;
    lastActivityAt: z.ZodNullable<z.ZodString>;
    lastDeliveredAt: z.ZodNullable<z.ZodString>;
    locked: z.ZodBoolean;
    redacted: z.ZodBoolean;
    delivery: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, z.core.$strip>;
export type IssueSearchItem = z.infer<typeof IssueSearchItemSchema>;
export declare const CreateIssueInputObjectSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    contentMdx: z.ZodString;
    severity: z.ZodDefault<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
    statusStartedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CreateIssueInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    contentMdx: z.ZodString;
    severity: z.ZodDefault<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
    statusStartedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateIssueInput = z.infer<typeof CreateIssueInputSchema>;
export declare const CreateIssueOutputSchema: z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
    duplicateIssueId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateIssueOutput = z.infer<typeof CreateIssueOutputSchema>;
export declare const ListIssuesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>>;
    severity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListIssuesInput = z.infer<typeof ListIssuesInputSchema>;
export declare const ListIssuesOutputSchema: z.ZodObject<{
    issues: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListIssuesOutput = z.infer<typeof ListIssuesOutputSchema>;
export declare const SearchIssuesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>>;
    severity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    includeDeliveryMetadata: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>;
export type SearchIssuesInput = z.infer<typeof SearchIssuesInputSchema>;
export declare const SearchIssuesOutputSchema: z.ZodObject<{
    issues: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
        delivery: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type SearchIssuesOutput = z.infer<typeof SearchIssuesOutputSchema>;
export declare const CountIssuesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>>;
    severity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CountIssuesInput = z.infer<typeof CountIssuesInputSchema>;
export declare const IssueCountBreakdownSchema: z.ZodObject<{
    open: z.ZodNumber;
    resolved: z.ZodNumber;
    ignored: z.ZodNumber;
}, z.core.$strip>;
export declare const IssueSeverityCountBreakdownSchema: z.ZodObject<{
    low: z.ZodNumber;
    medium: z.ZodNumber;
    high: z.ZodNumber;
    critical: z.ZodNumber;
}, z.core.$strip>;
export declare const CountIssuesOutputSchema: z.ZodObject<{
    total: z.ZodNumber;
    byStatus: z.ZodObject<{
        open: z.ZodNumber;
        resolved: z.ZodNumber;
        ignored: z.ZodNumber;
    }, z.core.$strip>;
    bySeverity: z.ZodObject<{
        low: z.ZodNumber;
        medium: z.ZodNumber;
        high: z.ZodNumber;
        critical: z.ZodNumber;
    }, z.core.$strip>;
    filters: z.ZodObject<{
        name: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>>;
        severity: z.ZodNullable<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        statusComponentId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CountIssuesOutput = z.infer<typeof CountIssuesOutputSchema>;
export declare const GetIssueInputSchema: z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>;
export type GetIssueInput = z.infer<typeof GetIssueInputSchema>;
export declare const GetIssueOutputSchema: z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
        slackChannels: z.ZodArray<z.ZodObject<{
            channelId: z.ZodNullable<z.ZodString>;
            channelName: z.ZodNullable<z.ZodString>;
            threadTs: z.ZodNullable<z.ZodString>;
            permalink: z.ZodNullable<z.ZodString>;
            workspaceName: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetIssueOutput = z.infer<typeof GetIssueOutputSchema>;
export declare const ResolveIssueInputSchema: z.ZodObject<{
    issueId: z.ZodString;
    statusResolvedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ResolveIssueInput = z.infer<typeof ResolveIssueInputSchema>;
export declare const ResolveIssueOutputSchema: z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ResolveIssueOutput = z.infer<typeof ResolveIssueOutputSchema>;
export declare const IgnoreIssueInputSchema: z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>;
export type IgnoreIssueInput = z.infer<typeof IgnoreIssueInputSchema>;
export declare const IgnoreIssueOutputSchema: z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IgnoreIssueOutput = z.infer<typeof IgnoreIssueOutputSchema>;
export declare const ReopenIssueInputSchema: z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>;
export type ReopenIssueInput = z.infer<typeof ReopenIssueInputSchema>;
export declare const ReopenIssueOutputSchema: z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ReopenIssueOutput = z.infer<typeof ReopenIssueOutputSchema>;
export declare const MuteIssueInputSchema: z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>;
export type MuteIssueInput = z.infer<typeof MuteIssueInputSchema>;
export declare const MuteIssueOutputSchema: z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MuteIssueOutput = z.infer<typeof MuteIssueOutputSchema>;
export declare const UnmuteIssueInputSchema: z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>;
export type UnmuteIssueInput = z.infer<typeof UnmuteIssueInputSchema>;
export declare const UnmuteIssueOutputSchema: z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UnmuteIssueOutput = z.infer<typeof UnmuteIssueOutputSchema>;
export declare const createIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    contentMdx: z.ZodString;
    severity: z.ZodDefault<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
    statusStartedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
    duplicateIssueId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const listIssues: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>>;
    severity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    issues: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const searchIssues: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>>;
    severity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    includeDeliveryMetadata: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>, z.ZodObject<{
    issues: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
        delivery: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const countIssues: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ignored: "ignored";
        open: "open";
        resolved: "resolved";
    }>>;
    severity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    statusComponentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    total: z.ZodNumber;
    byStatus: z.ZodObject<{
        open: z.ZodNumber;
        resolved: z.ZodNumber;
        ignored: z.ZodNumber;
    }, z.core.$strip>;
    bySeverity: z.ZodObject<{
        low: z.ZodNumber;
        medium: z.ZodNumber;
        high: z.ZodNumber;
        critical: z.ZodNumber;
    }, z.core.$strip>;
    filters: z.ZodObject<{
        name: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>>;
        severity: z.ZodNullable<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        statusComponentId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const getIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
        slackChannels: z.ZodArray<z.ZodObject<{
            channelId: z.ZodNullable<z.ZodString>;
            channelName: z.ZodNullable<z.ZodString>;
            threadTs: z.ZodNullable<z.ZodString>;
            permalink: z.ZodNullable<z.ZodString>;
            workspaceName: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const resolveIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
    statusResolvedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const ignoreIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const reopenIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const muteIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const unmuteIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    issue: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>;
        severity: z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>;
        statusComponentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const issuesContract: {
    readonly count: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>>;
        severity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        statusComponentId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        total: z.ZodNumber;
        byStatus: z.ZodObject<{
            open: z.ZodNumber;
            resolved: z.ZodNumber;
            ignored: z.ZodNumber;
        }, z.core.$strip>;
        bySeverity: z.ZodObject<{
            low: z.ZodNumber;
            medium: z.ZodNumber;
            high: z.ZodNumber;
            critical: z.ZodNumber;
        }, z.core.$strip>;
        filters: z.ZodObject<{
            name: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>>;
            severity: z.ZodNullable<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            statusComponentId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        contentMdx: z.ZodString;
        severity: z.ZodDefault<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        statusComponentId: z.ZodOptional<z.ZodString>;
        statusStartedAt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        issue: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>;
            severity: z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
            statusComponentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
        }, z.core.$strip>;
        duplicateIssueId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>>;
        severity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        statusComponentId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        issues: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>;
            severity: z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
            statusComponentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly search: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            ignored: "ignored";
            open: "open";
            resolved: "resolved";
        }>>;
        severity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        statusComponentId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        includeDeliveryMetadata: z.ZodDefault<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    }, z.core.$strip>, z.ZodObject<{
        issues: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>;
            severity: z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
            statusComponentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
            delivery: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        issueId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        issue: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>;
            severity: z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
            statusComponentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
            slackChannels: z.ZodArray<z.ZodObject<{
                channelId: z.ZodNullable<z.ZodString>;
                channelName: z.ZodNullable<z.ZodString>;
                threadTs: z.ZodNullable<z.ZodString>;
                permalink: z.ZodNullable<z.ZodString>;
                workspaceName: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly resolve: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        issueId: z.ZodString;
        statusResolvedAt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        issue: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>;
            severity: z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
            statusComponentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly ignore: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        issueId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        issue: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>;
            severity: z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
            statusComponentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly mute: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        issueId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        issue: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>;
            severity: z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
            statusComponentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly unmute: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        issueId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        issue: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>;
            severity: z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
            statusComponentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
