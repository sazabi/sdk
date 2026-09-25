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
    componentId: z.ZodNullable<z.ZodString>;
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
export declare const IssueTaskLinkSchema: z.ZodObject<{
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    identifier: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
export type IssueTaskLink = z.infer<typeof IssueTaskLinkSchema>;
export declare const IssuePullRequestSchema: z.ZodObject<{
    id: z.ZodString;
    number: z.ZodNumber;
    repositoryFullName: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
    url: z.ZodNullable<z.ZodString>;
    status: z.ZodNullable<z.ZodEnum<{
        closed: "closed";
        merged: "merged";
        open: "open";
    }>>;
    reviewState: z.ZodNullable<z.ZodEnum<{
        approved: "approved";
        changes_requested: "changes_requested";
        review_required: "review_required";
    }>>;
    checksState: z.ZodNullable<z.ZodEnum<{
        failing: "failing";
        passing: "passing";
        pending: "pending";
    }>>;
}, z.core.$strip>;
export type IssuePullRequest = z.infer<typeof IssuePullRequestSchema>;
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
    componentId: z.ZodNullable<z.ZodString>;
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
    taskLinks: z.ZodArray<z.ZodObject<{
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        identifier: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>>;
    pullRequests: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        number: z.ZodNumber;
        repositoryFullName: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<{
            closed: "closed";
            merged: "merged";
            open: "open";
        }>>;
        reviewState: z.ZodNullable<z.ZodEnum<{
            approved: "approved";
            changes_requested: "changes_requested";
            review_required: "review_required";
        }>>;
        checksState: z.ZodNullable<z.ZodEnum<{
            failing: "failing";
            passing: "passing";
            pending: "pending";
        }>>;
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
    componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
    possibleDuplicateOfIssueId: z.ZodOptional<z.ZodString>;
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
    componentId: z.ZodOptional<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
    componentId: z.ZodOptional<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        taskLinks: z.ZodArray<z.ZodObject<{
            provider: z.ZodEnum<{
                github: "github";
                jira: "jira";
                linear: "linear";
            }>;
            identifier: z.ZodString;
            url: z.ZodString;
        }, z.core.$strip>>;
        pullRequests: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            number: z.ZodNumber;
            repositoryFullName: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            url: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<{
                closed: "closed";
                merged: "merged";
                open: "open";
            }>>;
            reviewState: z.ZodNullable<z.ZodEnum<{
                approved: "approved";
                changes_requested: "changes_requested";
                review_required: "review_required";
            }>>;
            checksState: z.ZodNullable<z.ZodEnum<{
                failing: "failing";
                passing: "passing";
                pending: "pending";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetIssueOutput = z.infer<typeof GetIssueOutputSchema>;
export declare const IssueRejectionReasonSchema: z.ZodEnum<{
    duplicate: "duplicate";
    incorrect: "incorrect";
    not_relevant: "not_relevant";
}>;
export type IssueRejectionReason = z.infer<typeof IssueRejectionReasonSchema>;
export declare const IssueRejectionAdjustmentSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"pending">;
    rejectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"applied">;
    rejectionId: z.ZodString;
    originalBillingEventId: z.ZodString;
    correctionBillingEventId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodLiteral<"not_needed">;
    rejectionId: z.ZodString;
    originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>], "status">;
export declare const IssueRejectionReceiptSchema: z.ZodObject<{
    id: z.ZodString;
    issueId: z.ZodString;
    billingCycleId: z.ZodString;
    actorUserId: z.ZodString;
    reason: z.ZodEnum<{
        duplicate: "duplicate";
        incorrect: "incorrect";
        not_relevant: "not_relevant";
    }>;
    acceptedAt: z.ZodString;
    deadlineAt: z.ZodString;
    adjustment: z.ZodDiscriminatedUnion<[z.ZodObject<{
        status: z.ZodLiteral<"pending">;
        rejectionId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<"applied">;
        rejectionId: z.ZodString;
        originalBillingEventId: z.ZodString;
        correctionBillingEventId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodLiteral<"not_needed">;
        rejectionId: z.ZodString;
        originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>], "status">;
}, z.core.$strip>;
export type IssueRejectionReceipt = z.infer<typeof IssueRejectionReceiptSchema>;
export declare const IssueRejectionContextSchema: z.ZodObject<{
    issueId: z.ZodString;
    reasonChoices: z.ZodArray<z.ZodEnum<{
        duplicate: "duplicate";
        incorrect: "incorrect";
        not_relevant: "not_relevant";
    }>>;
    cycleLabel: z.ZodOptional<z.ZodString>;
    eligible: z.ZodBoolean;
    reason: z.ZodOptional<z.ZodEnum<{
        already_invoiced: "already_invoiced";
        already_rejected: "already_rejected";
        configuration_unavailable: "configuration_unavailable";
        expired: "expired";
        invalid_issue_state: "invalid_issue_state";
        issue_deleted: "issue_deleted";
        issue_not_found: "issue_not_found";
        quota_exhausted: "quota_exhausted";
    }>>;
    billingCycleId: z.ZodOptional<z.ZodString>;
    cycleStartsAt: z.ZodOptional<z.ZodString>;
    cycleEndsAt: z.ZodOptional<z.ZodString>;
    deadlineAt: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNumber>;
    used: z.ZodOptional<z.ZodNumber>;
    remaining: z.ZodOptional<z.ZodNumber>;
    billingEffect: z.ZodOptional<z.ZodObject<{
        kind: z.ZodLiteral<"issue_usage_unit_correction">;
        currency: z.ZodString;
        unitPrice: z.ZodString;
    }, z.core.$strip>>;
    receipt: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        issueId: z.ZodString;
        billingCycleId: z.ZodString;
        actorUserId: z.ZodString;
        reason: z.ZodEnum<{
            duplicate: "duplicate";
            incorrect: "incorrect";
            not_relevant: "not_relevant";
        }>;
        acceptedAt: z.ZodString;
        deadlineAt: z.ZodString;
        adjustment: z.ZodDiscriminatedUnion<[z.ZodObject<{
            status: z.ZodLiteral<"pending">;
            rejectionId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            status: z.ZodLiteral<"applied">;
            rejectionId: z.ZodString;
            originalBillingEventId: z.ZodString;
            correctionBillingEventId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            status: z.ZodLiteral<"not_needed">;
            rejectionId: z.ZodString;
            originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>], "status">;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IssueRejectionContext = z.infer<typeof IssueRejectionContextSchema>;
export declare const GetIssueRejectionContextInputSchema: z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>;
export type GetIssueRejectionContextInput = z.infer<typeof GetIssueRejectionContextInputSchema>;
export declare const GetIssueRejectionContextOutputSchema: z.ZodObject<{
    context: z.ZodObject<{
        issueId: z.ZodString;
        reasonChoices: z.ZodArray<z.ZodEnum<{
            duplicate: "duplicate";
            incorrect: "incorrect";
            not_relevant: "not_relevant";
        }>>;
        cycleLabel: z.ZodOptional<z.ZodString>;
        eligible: z.ZodBoolean;
        reason: z.ZodOptional<z.ZodEnum<{
            already_invoiced: "already_invoiced";
            already_rejected: "already_rejected";
            configuration_unavailable: "configuration_unavailable";
            expired: "expired";
            invalid_issue_state: "invalid_issue_state";
            issue_deleted: "issue_deleted";
            issue_not_found: "issue_not_found";
            quota_exhausted: "quota_exhausted";
        }>>;
        billingCycleId: z.ZodOptional<z.ZodString>;
        cycleStartsAt: z.ZodOptional<z.ZodString>;
        cycleEndsAt: z.ZodOptional<z.ZodString>;
        deadlineAt: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodNumber>;
        used: z.ZodOptional<z.ZodNumber>;
        remaining: z.ZodOptional<z.ZodNumber>;
        billingEffect: z.ZodOptional<z.ZodObject<{
            kind: z.ZodLiteral<"issue_usage_unit_correction">;
            currency: z.ZodString;
            unitPrice: z.ZodString;
        }, z.core.$strip>>;
        receipt: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            issueId: z.ZodString;
            billingCycleId: z.ZodString;
            actorUserId: z.ZodString;
            reason: z.ZodEnum<{
                duplicate: "duplicate";
                incorrect: "incorrect";
                not_relevant: "not_relevant";
            }>;
            acceptedAt: z.ZodString;
            deadlineAt: z.ZodString;
            adjustment: z.ZodDiscriminatedUnion<[z.ZodObject<{
                status: z.ZodLiteral<"pending">;
                rejectionId: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<"applied">;
                rejectionId: z.ZodString;
                originalBillingEventId: z.ZodString;
                correctionBillingEventId: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<"not_needed">;
                rejectionId: z.ZodString;
                originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>], "status">;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetIssueRejectionContextOutput = z.infer<typeof GetIssueRejectionContextOutputSchema>;
export declare const RejectIssueInputSchema: z.ZodObject<{
    issueId: z.ZodString;
    reason: z.ZodEnum<{
        duplicate: "duplicate";
        incorrect: "incorrect";
        not_relevant: "not_relevant";
    }>;
}, z.core.$strip>;
export type RejectIssueInput = z.infer<typeof RejectIssueInputSchema>;
export declare const RejectIssueOutputSchema: z.ZodObject<{
    replay: z.ZodBoolean;
    receipt: z.ZodObject<{
        id: z.ZodString;
        issueId: z.ZodString;
        billingCycleId: z.ZodString;
        actorUserId: z.ZodString;
        reason: z.ZodEnum<{
            duplicate: "duplicate";
            incorrect: "incorrect";
            not_relevant: "not_relevant";
        }>;
        acceptedAt: z.ZodString;
        deadlineAt: z.ZodString;
        adjustment: z.ZodDiscriminatedUnion<[z.ZodObject<{
            status: z.ZodLiteral<"pending">;
            rejectionId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            status: z.ZodLiteral<"applied">;
            rejectionId: z.ZodString;
            originalBillingEventId: z.ZodString;
            correctionBillingEventId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            status: z.ZodLiteral<"not_needed">;
            rejectionId: z.ZodString;
            originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>], "status">;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RejectIssueOutput = z.infer<typeof RejectIssueOutputSchema>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
export declare const ReassignAndReopenIssueInputSchema: z.ZodObject<{
    issueId: z.ZodString;
    targetComponentId: z.ZodString;
}, z.core.$strip>;
export type ReassignAndReopenIssueInput = z.infer<typeof ReassignAndReopenIssueInputSchema>;
export declare const ReassignAndReopenIssueOutputSchema: z.ZodObject<{
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
        componentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
}, z.core.$strip>;
export type ReassignAndReopenIssueOutput = z.infer<typeof ReassignAndReopenIssueOutputSchema>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
    contentMdx: z.ZodOptional<z.ZodString>;
    severity: z.ZodDefault<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    componentId: z.ZodOptional<z.ZodString>;
    statusStartedAt: z.ZodOptional<z.ZodString>;
    suspectedPullRequest: z.ZodOptional<z.ZodObject<{
        provider: z.ZodDefault<z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
        }>>;
        repositoryFullName: z.ZodString;
        number: z.ZodNumber;
    }, z.core.$strip>>;
    sample: z.ZodOptional<z.ZodBoolean>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
    possibleDuplicateOfIssueId: z.ZodOptional<z.ZodString>;
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
    componentId: z.ZodOptional<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
    componentId: z.ZodOptional<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        taskLinks: z.ZodArray<z.ZodObject<{
            provider: z.ZodEnum<{
                github: "github";
                jira: "jira";
                linear: "linear";
            }>;
            identifier: z.ZodString;
            url: z.ZodString;
        }, z.core.$strip>>;
        pullRequests: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            number: z.ZodNumber;
            repositoryFullName: z.ZodString;
            title: z.ZodNullable<z.ZodString>;
            url: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<{
                closed: "closed";
                merged: "merged";
                open: "open";
            }>>;
            reviewState: z.ZodNullable<z.ZodEnum<{
                approved: "approved";
                changes_requested: "changes_requested";
                review_required: "review_required";
            }>>;
            checksState: z.ZodNullable<z.ZodEnum<{
                failing: "failing";
                passing: "passing";
                pending: "pending";
            }>>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
export declare const getIssueRejectionContext: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    context: z.ZodObject<{
        issueId: z.ZodString;
        reasonChoices: z.ZodArray<z.ZodEnum<{
            duplicate: "duplicate";
            incorrect: "incorrect";
            not_relevant: "not_relevant";
        }>>;
        cycleLabel: z.ZodOptional<z.ZodString>;
        eligible: z.ZodBoolean;
        reason: z.ZodOptional<z.ZodEnum<{
            already_invoiced: "already_invoiced";
            already_rejected: "already_rejected";
            configuration_unavailable: "configuration_unavailable";
            expired: "expired";
            invalid_issue_state: "invalid_issue_state";
            issue_deleted: "issue_deleted";
            issue_not_found: "issue_not_found";
            quota_exhausted: "quota_exhausted";
        }>>;
        billingCycleId: z.ZodOptional<z.ZodString>;
        cycleStartsAt: z.ZodOptional<z.ZodString>;
        cycleEndsAt: z.ZodOptional<z.ZodString>;
        deadlineAt: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodNumber>;
        used: z.ZodOptional<z.ZodNumber>;
        remaining: z.ZodOptional<z.ZodNumber>;
        billingEffect: z.ZodOptional<z.ZodObject<{
            kind: z.ZodLiteral<"issue_usage_unit_correction">;
            currency: z.ZodString;
            unitPrice: z.ZodString;
        }, z.core.$strip>>;
        receipt: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            issueId: z.ZodString;
            billingCycleId: z.ZodString;
            actorUserId: z.ZodString;
            reason: z.ZodEnum<{
                duplicate: "duplicate";
                incorrect: "incorrect";
                not_relevant: "not_relevant";
            }>;
            acceptedAt: z.ZodString;
            deadlineAt: z.ZodString;
            adjustment: z.ZodDiscriminatedUnion<[z.ZodObject<{
                status: z.ZodLiteral<"pending">;
                rejectionId: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<"applied">;
                rejectionId: z.ZodString;
                originalBillingEventId: z.ZodString;
                correctionBillingEventId: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<"not_needed">;
                rejectionId: z.ZodString;
                originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>], "status">;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const rejectIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
    reason: z.ZodEnum<{
        duplicate: "duplicate";
        incorrect: "incorrect";
        not_relevant: "not_relevant";
    }>;
}, z.core.$strip>, z.ZodObject<{
    replay: z.ZodBoolean;
    receipt: z.ZodObject<{
        id: z.ZodString;
        issueId: z.ZodString;
        billingCycleId: z.ZodString;
        actorUserId: z.ZodString;
        reason: z.ZodEnum<{
            duplicate: "duplicate";
            incorrect: "incorrect";
            not_relevant: "not_relevant";
        }>;
        acceptedAt: z.ZodString;
        deadlineAt: z.ZodString;
        adjustment: z.ZodDiscriminatedUnion<[z.ZodObject<{
            status: z.ZodLiteral<"pending">;
            rejectionId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            status: z.ZodLiteral<"applied">;
            rejectionId: z.ZodString;
            originalBillingEventId: z.ZodString;
            correctionBillingEventId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            status: z.ZodLiteral<"not_needed">;
            rejectionId: z.ZodString;
            originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>], "status">;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
export declare const reassignAndReopenIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    issueId: z.ZodString;
    targetComponentId: z.ZodString;
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
        componentId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        mutedAt: z.ZodNullable<z.ZodString>;
        muteHitCount: z.ZodNumber;
        lastActivityAt: z.ZodNullable<z.ZodString>;
        lastDeliveredAt: z.ZodNullable<z.ZodString>;
        locked: z.ZodBoolean;
        redacted: z.ZodBoolean;
    }, z.core.$strip>;
    sourceComponentId: z.ZodString;
    targetComponentId: z.ZodString;
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
        componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodNullable<z.ZodString>;
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
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        contentMdx: z.ZodOptional<z.ZodString>;
        severity: z.ZodDefault<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentId: z.ZodOptional<z.ZodString>;
        statusStartedAt: z.ZodOptional<z.ZodString>;
        suspectedPullRequest: z.ZodOptional<z.ZodObject<{
            provider: z.ZodDefault<z.ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
            }>>;
            repositoryFullName: z.ZodString;
            number: z.ZodNumber;
        }, z.core.$strip>>;
        sample: z.ZodOptional<z.ZodBoolean>;
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
            componentId: z.ZodNullable<z.ZodString>;
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
        possibleDuplicateOfIssueId: z.ZodOptional<z.ZodString>;
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
        componentId: z.ZodOptional<z.ZodString>;
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
            componentId: z.ZodNullable<z.ZodString>;
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
        componentId: z.ZodOptional<z.ZodString>;
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
            componentId: z.ZodNullable<z.ZodString>;
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
            componentId: z.ZodNullable<z.ZodString>;
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
            taskLinks: z.ZodArray<z.ZodObject<{
                provider: z.ZodEnum<{
                    github: "github";
                    jira: "jira";
                    linear: "linear";
                }>;
                identifier: z.ZodString;
                url: z.ZodString;
            }, z.core.$strip>>;
            pullRequests: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                number: z.ZodNumber;
                repositoryFullName: z.ZodString;
                title: z.ZodNullable<z.ZodString>;
                url: z.ZodNullable<z.ZodString>;
                status: z.ZodNullable<z.ZodEnum<{
                    closed: "closed";
                    merged: "merged";
                    open: "open";
                }>>;
                reviewState: z.ZodNullable<z.ZodEnum<{
                    approved: "approved";
                    changes_requested: "changes_requested";
                    review_required: "review_required";
                }>>;
                checksState: z.ZodNullable<z.ZodEnum<{
                    failing: "failing";
                    passing: "passing";
                    pending: "pending";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getRejectionContext: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        issueId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        context: z.ZodObject<{
            issueId: z.ZodString;
            reasonChoices: z.ZodArray<z.ZodEnum<{
                duplicate: "duplicate";
                incorrect: "incorrect";
                not_relevant: "not_relevant";
            }>>;
            cycleLabel: z.ZodOptional<z.ZodString>;
            eligible: z.ZodBoolean;
            reason: z.ZodOptional<z.ZodEnum<{
                already_invoiced: "already_invoiced";
                already_rejected: "already_rejected";
                configuration_unavailable: "configuration_unavailable";
                expired: "expired";
                invalid_issue_state: "invalid_issue_state";
                issue_deleted: "issue_deleted";
                issue_not_found: "issue_not_found";
                quota_exhausted: "quota_exhausted";
            }>>;
            billingCycleId: z.ZodOptional<z.ZodString>;
            cycleStartsAt: z.ZodOptional<z.ZodString>;
            cycleEndsAt: z.ZodOptional<z.ZodString>;
            deadlineAt: z.ZodOptional<z.ZodString>;
            limit: z.ZodOptional<z.ZodNumber>;
            used: z.ZodOptional<z.ZodNumber>;
            remaining: z.ZodOptional<z.ZodNumber>;
            billingEffect: z.ZodOptional<z.ZodObject<{
                kind: z.ZodLiteral<"issue_usage_unit_correction">;
                currency: z.ZodString;
                unitPrice: z.ZodString;
            }, z.core.$strip>>;
            receipt: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                issueId: z.ZodString;
                billingCycleId: z.ZodString;
                actorUserId: z.ZodString;
                reason: z.ZodEnum<{
                    duplicate: "duplicate";
                    incorrect: "incorrect";
                    not_relevant: "not_relevant";
                }>;
                acceptedAt: z.ZodString;
                deadlineAt: z.ZodString;
                adjustment: z.ZodDiscriminatedUnion<[z.ZodObject<{
                    status: z.ZodLiteral<"pending">;
                    rejectionId: z.ZodString;
                }, z.core.$strip>, z.ZodObject<{
                    status: z.ZodLiteral<"applied">;
                    rejectionId: z.ZodString;
                    originalBillingEventId: z.ZodString;
                    correctionBillingEventId: z.ZodString;
                }, z.core.$strip>, z.ZodObject<{
                    status: z.ZodLiteral<"not_needed">;
                    rejectionId: z.ZodString;
                    originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, z.core.$strip>], "status">;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly reject: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        issueId: z.ZodString;
        reason: z.ZodEnum<{
            duplicate: "duplicate";
            incorrect: "incorrect";
            not_relevant: "not_relevant";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        replay: z.ZodBoolean;
        receipt: z.ZodObject<{
            id: z.ZodString;
            issueId: z.ZodString;
            billingCycleId: z.ZodString;
            actorUserId: z.ZodString;
            reason: z.ZodEnum<{
                duplicate: "duplicate";
                incorrect: "incorrect";
                not_relevant: "not_relevant";
            }>;
            acceptedAt: z.ZodString;
            deadlineAt: z.ZodString;
            adjustment: z.ZodDiscriminatedUnion<[z.ZodObject<{
                status: z.ZodLiteral<"pending">;
                rejectionId: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<"applied">;
                rejectionId: z.ZodString;
                originalBillingEventId: z.ZodString;
                correctionBillingEventId: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                status: z.ZodLiteral<"not_needed">;
                rejectionId: z.ZodString;
                originalBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                correctionBillingEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>], "status">;
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
            componentId: z.ZodNullable<z.ZodString>;
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
            componentId: z.ZodNullable<z.ZodString>;
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
    readonly reopen: import("@orpc/contract").ContractProcedure<z.ZodObject<{
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
            componentId: z.ZodNullable<z.ZodString>;
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
    readonly reassignAndReopen: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        issueId: z.ZodString;
        targetComponentId: z.ZodString;
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
            componentId: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            resolvedAt: z.ZodNullable<z.ZodString>;
            mutedAt: z.ZodNullable<z.ZodString>;
            muteHitCount: z.ZodNumber;
            lastActivityAt: z.ZodNullable<z.ZodString>;
            lastDeliveredAt: z.ZodNullable<z.ZodString>;
            locked: z.ZodBoolean;
            redacted: z.ZodBoolean;
        }, z.core.$strip>;
        sourceComponentId: z.ZodString;
        targetComponentId: z.ZodString;
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
            componentId: z.ZodNullable<z.ZodString>;
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
            componentId: z.ZodNullable<z.ZodString>;
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
