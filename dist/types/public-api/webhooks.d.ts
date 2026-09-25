import { z } from "zod";
export declare const WebhookSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    url: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        disabled: "disabled";
    }>;
    authHeaderName: z.ZodNullable<z.ZodString>;
    signingSecretRotatedAt: z.ZodNullable<z.ZodString>;
    consecutiveFailures: z.ZodNumber;
    disabledAt: z.ZodNullable<z.ZodString>;
    disabledReason: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export declare const WebhookSubscriptionSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    notificationTypes: z.ZodArray<z.ZodString>;
    severities: z.ZodArray<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    componentIds: z.ZodArray<z.ZodString>;
    includeDescendants: z.ZodBoolean;
}, z.core.$strip>;
export declare const WebhookDetailSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    url: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        disabled: "disabled";
    }>;
    authHeaderName: z.ZodNullable<z.ZodString>;
    signingSecretRotatedAt: z.ZodNullable<z.ZodString>;
    consecutiveFailures: z.ZodNumber;
    disabledAt: z.ZodNullable<z.ZodString>;
    disabledReason: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    subscriptions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        notificationTypes: z.ZodArray<z.ZodString>;
        severities: z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodArray<z.ZodString>;
        includeDescendants: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const WebhookDeliverySchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodNullable<z.ZodString>;
    notificationType: z.ZodString;
    outcome: z.ZodNullable<z.ZodEnum<{
        authorized: "authorized";
        delivered: "delivered";
        failed: "failed";
        suppressed: "suppressed";
    }>>;
    attempts: z.ZodNumber;
    error: z.ZodNullable<z.ZodString>;
    httpStatusCode: z.ZodNullable<z.ZodNumber>;
    sentAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export declare const WebhookIssueEventSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<{
        created: "created";
        ignored: "ignored";
        resolved: "resolved";
        updated: "updated";
    }>;
    actor: z.ZodObject<{
        type: z.ZodEnum<{
            agent: "agent";
            system: "system";
            user: "user";
        }>;
        id: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    note: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export declare const WebhookArtifactSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    contentType: z.ZodNullable<z.ZodString>;
    sizeBytes: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export declare const WebhookReportSchema: z.ZodObject<{
    format: z.ZodLiteral<"sazabi-mdx">;
    mdx: z.ZodString;
    text: z.ZodString;
    reportTruncated: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strip>;
/** IssueSchema is extended in place so issue webhooks cannot drift from issues.*. */
export declare const WebhookIssueSchema: z.ZodObject<{
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
    url: z.ZodString;
    component: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    event: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<{
            created: "created";
            ignored: "ignored";
            resolved: "resolved";
            updated: "updated";
        }>;
        actor: z.ZodObject<{
            type: z.ZodEnum<{
                agent: "agent";
                system: "system";
                user: "user";
            }>;
            id: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        note: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
    artifacts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    report: z.ZodNullable<z.ZodObject<{
        format: z.ZodLiteral<"sazabi-mdx">;
        mdx: z.ZodString;
        text: z.ZodString;
        reportTruncated: z.ZodOptional<z.ZodLiteral<true>>;
    }, z.core.$strip>>;
    rootCause: z.ZodNullable<z.ZodString>;
    summary: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const WebhookEnvelopeBaseSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_rejected: "issue_rejected";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
        test: "test";
    }>;
    apiVersion: z.ZodLiteral<"2026-09-01">;
    createdAt: z.ZodString;
    test: z.ZodBoolean;
    organization: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    project: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    notification: z.ZodObject<{
        title: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const IssueWebhookEnvelopeSchema: z.ZodObject<{
    id: z.ZodString;
    apiVersion: z.ZodLiteral<"2026-09-01">;
    createdAt: z.ZodString;
    organization: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    notification: z.ZodObject<{
        title: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>;
    test: z.ZodLiteral<false>;
    project: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>;
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
        url: z.ZodString;
        component: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        event: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                created: "created";
                ignored: "ignored";
                resolved: "resolved";
                updated: "updated";
            }>;
            actor: z.ZodObject<{
                type: z.ZodEnum<{
                    agent: "agent";
                    system: "system";
                    user: "user";
                }>;
                id: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            note: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
        }, z.core.$strip>;
        artifacts: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
            title: z.ZodString;
            url: z.ZodString;
            contentType: z.ZodNullable<z.ZodString>;
            sizeBytes: z.ZodNullable<z.ZodNumber>;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
        report: z.ZodNullable<z.ZodObject<{
            format: z.ZodLiteral<"sazabi-mdx">;
            mdx: z.ZodString;
            text: z.ZodString;
            reportTruncated: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strip>>;
        rootCause: z.ZodNullable<z.ZodString>;
        summary: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const NonIssueWebhookEnvelopeSchema: z.ZodObject<{
    id: z.ZodString;
    apiVersion: z.ZodLiteral<"2026-09-01">;
    createdAt: z.ZodString;
    organization: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    project: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    notification: z.ZodObject<{
        title: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_rejected: "issue_rejected";
    }>;
    test: z.ZodLiteral<false>;
}, z.core.$strip>;
export declare const TestWebhookEnvelopeSchema: z.ZodObject<{
    id: z.ZodString;
    apiVersion: z.ZodLiteral<"2026-09-01">;
    createdAt: z.ZodString;
    organization: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    project: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    notification: z.ZodObject<{
        title: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodLiteral<"test">;
    test: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const WebhookEnvelopeSchema: z.ZodUnion<readonly [z.ZodObject<{
    id: z.ZodString;
    apiVersion: z.ZodLiteral<"2026-09-01">;
    createdAt: z.ZodString;
    organization: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    notification: z.ZodObject<{
        title: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>;
    test: z.ZodLiteral<false>;
    project: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>;
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
        url: z.ZodString;
        component: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        event: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                created: "created";
                ignored: "ignored";
                resolved: "resolved";
                updated: "updated";
            }>;
            actor: z.ZodObject<{
                type: z.ZodEnum<{
                    agent: "agent";
                    system: "system";
                    user: "user";
                }>;
                id: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>;
            note: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
        }, z.core.$strip>;
        artifacts: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
            title: z.ZodString;
            url: z.ZodString;
            contentType: z.ZodNullable<z.ZodString>;
            sizeBytes: z.ZodNullable<z.ZodNumber>;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
        report: z.ZodNullable<z.ZodObject<{
            format: z.ZodLiteral<"sazabi-mdx">;
            mdx: z.ZodString;
            text: z.ZodString;
            reportTruncated: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strip>>;
        rootCause: z.ZodNullable<z.ZodString>;
        summary: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    apiVersion: z.ZodLiteral<"2026-09-01">;
    createdAt: z.ZodString;
    organization: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    project: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    notification: z.ZodObject<{
        title: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_rejected: "issue_rejected";
    }>;
    test: z.ZodLiteral<false>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    apiVersion: z.ZodLiteral<"2026-09-01">;
    createdAt: z.ZodString;
    organization: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    project: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    notification: z.ZodObject<{
        title: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodLiteral<"test">;
    test: z.ZodLiteral<true>;
}, z.core.$strip>]>;
export type WebhookEnvelope = z.infer<typeof WebhookEnvelopeSchema>;
export declare const webhooksList: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    webhooks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        url: z.ZodString;
        status: z.ZodEnum<{
            active: "active";
            disabled: "disabled";
        }>;
        authHeaderName: z.ZodNullable<z.ZodString>;
        signingSecretRotatedAt: z.ZodNullable<z.ZodString>;
        consecutiveFailures: z.ZodNumber;
        disabledAt: z.ZodNullable<z.ZodString>;
        disabledReason: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const webhooksGet: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    url: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        disabled: "disabled";
    }>;
    authHeaderName: z.ZodNullable<z.ZodString>;
    signingSecretRotatedAt: z.ZodNullable<z.ZodString>;
    consecutiveFailures: z.ZodNumber;
    disabledAt: z.ZodNullable<z.ZodString>;
    disabledReason: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    subscriptions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        notificationTypes: z.ZodArray<z.ZodString>;
        severities: z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodArray<z.ZodString>;
        includeDescendants: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const webhooksCreate: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    name: z.ZodString;
    url: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authHeaderName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authHeaderValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    url: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        disabled: "disabled";
    }>;
    authHeaderName: z.ZodNullable<z.ZodString>;
    signingSecretRotatedAt: z.ZodNullable<z.ZodString>;
    consecutiveFailures: z.ZodNumber;
    disabledAt: z.ZodNullable<z.ZodString>;
    disabledReason: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    signingSecret: z.ZodString;
}, z.core.$strip>, "api">;
export declare const webhooksUpdate: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authHeaderName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authHeaderValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    url: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        disabled: "disabled";
    }>;
    authHeaderName: z.ZodNullable<z.ZodString>;
    signingSecretRotatedAt: z.ZodNullable<z.ZodString>;
    consecutiveFailures: z.ZodNumber;
    disabledAt: z.ZodNullable<z.ZodString>;
    disabledReason: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const webhooksDelete: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
}, z.core.$strip>, z.ZodVoid, "api">;
export declare const webhooksRotateSecret: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    url: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        disabled: "disabled";
    }>;
    authHeaderName: z.ZodNullable<z.ZodString>;
    signingSecretRotatedAt: z.ZodNullable<z.ZodString>;
    consecutiveFailures: z.ZodNumber;
    disabledAt: z.ZodNullable<z.ZodString>;
    disabledReason: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    signingSecret: z.ZodString;
}, z.core.$strip>, "api">;
export declare const webhooksEnable: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    url: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        disabled: "disabled";
    }>;
    authHeaderName: z.ZodNullable<z.ZodString>;
    signingSecretRotatedAt: z.ZodNullable<z.ZodString>;
    consecutiveFailures: z.ZodNumber;
    disabledAt: z.ZodNullable<z.ZodString>;
    disabledReason: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const webhooksTest: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    delivered: z.ZodBoolean;
    statusCode: z.ZodNullable<z.ZodNumber>;
    error: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const webhooksSubscribe: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_rejected: "issue_rejected";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>>;
    componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    includeDescendants: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    notificationTypes: z.ZodArray<z.ZodString>;
    severities: z.ZodArray<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    componentIds: z.ZodArray<z.ZodString>;
    includeDescendants: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const webhooksUnsubscribe: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
    subscriptionId: z.ZodString;
}, z.core.$strip>, z.ZodVoid, "api">;
export declare const webhooksListDeliveries: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    webhookId: z.ZodString;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    deliveries: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodNullable<z.ZodString>;
        notificationType: z.ZodString;
        outcome: z.ZodNullable<z.ZodEnum<{
            authorized: "authorized";
            delivered: "delivered";
            failed: "failed";
            suppressed: "suppressed";
        }>>;
        attempts: z.ZodNumber;
        error: z.ZodNullable<z.ZodString>;
        httpStatusCode: z.ZodNullable<z.ZodNumber>;
        sentAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export type ListWebhooksInput = z.infer<typeof webhooksList.input>;
export type ListWebhooksOutput = z.infer<typeof webhooksList.output>;
export type GetWebhookInput = z.infer<typeof webhooksGet.input>;
export type GetWebhookOutput = z.infer<typeof webhooksGet.output>;
export type CreateWebhookInput = z.infer<typeof webhooksCreate.input>;
export type CreateWebhookOutput = z.infer<typeof webhooksCreate.output>;
export type UpdateWebhookInput = z.infer<typeof webhooksUpdate.input>;
export type UpdateWebhookOutput = z.infer<typeof webhooksUpdate.output>;
export type DeleteWebhookInput = z.infer<typeof webhooksDelete.input>;
export type DeleteWebhookOutput = z.infer<typeof webhooksDelete.output>;
export type RotateWebhookSecretInput = z.infer<typeof webhooksRotateSecret.input>;
export type RotateWebhookSecretOutput = z.infer<typeof webhooksRotateSecret.output>;
export type EnableWebhookInput = z.infer<typeof webhooksEnable.input>;
export type EnableWebhookOutput = z.infer<typeof webhooksEnable.output>;
export type TestWebhookInput = z.infer<typeof webhooksTest.input>;
export type TestWebhookOutput = z.infer<typeof webhooksTest.output>;
export type SubscribeWebhookInput = z.infer<typeof webhooksSubscribe.input>;
export type SubscribeWebhookOutput = z.infer<typeof webhooksSubscribe.output>;
export type UnsubscribeWebhookInput = z.infer<typeof webhooksUnsubscribe.input>;
export type UnsubscribeWebhookOutput = z.infer<typeof webhooksUnsubscribe.output>;
export type ListWebhookDeliveriesInput = z.infer<typeof webhooksListDeliveries.input>;
export type ListWebhookDeliveriesOutput = z.infer<typeof webhooksListDeliveries.output>;
