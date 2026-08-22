import { z } from "zod";
/**
 * First-party integration providers, mirroring the `integration_provider`
 * database enum and the `@sazabi/integrations` registry. Kept inline so this
 * isomorphic contract package does not pull in the server-only integrations
 * package (which imports Node crypto and database access).
 */
export declare const INTEGRATION_PROVIDER_VALUES: readonly ["slack", "github", "linear", "pagerduty", "victorops", "rootly", "incident_io", "webhook", "teams", "bitbucket", "jira"];
export declare const IntegrationProviderEnum: z.ZodEnum<{
    bitbucket: "bitbucket";
    github: "github";
    incident_io: "incident_io";
    jira: "jira";
    linear: "linear";
    pagerduty: "pagerduty";
    rootly: "rootly";
    slack: "slack";
    teams: "teams";
    victorops: "victorops";
    webhook: "webhook";
}>;
/** Auth flow a provider uses to connect. */
export declare const IntegrationAuthTypeEnum: z.ZodEnum<{
    api_key: "api_key";
    app_installation: "app_installation";
    oauth: "oauth";
}>;
/** Capabilities an integration exposes once connected. */
export declare const IntegrationCapabilityEnum: z.ZodEnum<{
    alert_routing: "alert_routing";
    code_search: "code_search";
    health_check: "health_check";
    inbound_webhooks: "inbound_webhooks";
    messaging: "messaging";
}>;
/** Lifecycle status of a connection. */
export declare const IntegrationConnectionStatusEnum: z.ZodEnum<{
    connected: "connected";
    error: "error";
    pending: "pending";
    revoked: "revoked";
}>;
/** Health-check status of a connection. */
export declare const IntegrationHealthStatusEnum: z.ZodEnum<{
    healthy: "healthy";
    unhealthy: "unhealthy";
    unknown: "unknown";
}>;
/**
 * One credential field an `api_key` provider requires at connect time,
 * derived server-side from the provider definition so clients stay
 * schema-free.
 */
export declare const IntegrationCredentialFieldSchema: z.ZodObject<{
    name: z.ZodString;
    label: z.ZodString;
    required: z.ZodBoolean;
    secret: z.ZodBoolean;
    description: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * One available integration provider in the catalog, with the connection count
 * for the current organization. Contains no secrets.
 */
export declare const IntegrationProviderSchema: z.ZodObject<{
    id: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        incident_io: "incident_io";
        jira: "jira";
        linear: "linear";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        teams: "teams";
        victorops: "victorops";
        webhook: "webhook";
    }>;
    name: z.ZodString;
    description: z.ZodString;
    authType: z.ZodEnum<{
        api_key: "api_key";
        app_installation: "app_installation";
        oauth: "oauth";
    }>;
    capabilities: z.ZodArray<z.ZodEnum<{
        alert_routing: "alert_routing";
        code_search: "code_search";
        health_check: "health_check";
        inbound_webhooks: "inbound_webhooks";
        messaging: "messaging";
    }>>;
    connectionCount: z.ZodNumber;
    credentialFields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        label: z.ZodString;
        required: z.ZodBoolean;
        secret: z.ZodBoolean;
        description: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    browserConnectSupported: z.ZodBoolean;
}, z.core.$strip>;
/**
 * One integration connection record. Only non-secret fields are exposed;
 * encrypted credentials are never returned.
 */
export declare const IntegrationConnectionSchema: z.ZodObject<{
    id: z.ZodString;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        incident_io: "incident_io";
        jira: "jira";
        linear: "linear";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        teams: "teams";
        victorops: "victorops";
        webhook: "webhook";
    }>;
    displayName: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        connected: "connected";
        error: "error";
        pending: "pending";
        revoked: "revoked";
    }>;
    isActive: z.ZodBoolean;
    needsAttention: z.ZodBoolean;
    metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    healthStatus: z.ZodEnum<{
        healthy: "healthy";
        unhealthy: "unhealthy";
        unknown: "unknown";
    }>;
    healthMessage: z.ZodNullable<z.ZodString>;
    healthCheckedAt: z.ZodNullable<z.ZodString>;
    healthConsecutiveFailures: z.ZodNumber;
    connectedBy: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const ExternalIdentityJitPolicySchema: z.ZodObject<{
    organizationEnabled: z.ZodBoolean;
    connectionEnabled: z.ZodBoolean;
    effectiveEnabled: z.ZodBoolean;
}, z.core.$strip>;
export declare const ListIntegrationProvidersInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListIntegrationProvidersInput = z.infer<typeof ListIntegrationProvidersInputSchema>;
export declare const ListIntegrationProvidersOutputSchema: z.ZodObject<{
    providers: z.ZodArray<z.ZodObject<{
        id: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        name: z.ZodString;
        description: z.ZodString;
        authType: z.ZodEnum<{
            api_key: "api_key";
            app_installation: "app_installation";
            oauth: "oauth";
        }>;
        capabilities: z.ZodArray<z.ZodEnum<{
            alert_routing: "alert_routing";
            code_search: "code_search";
            health_check: "health_check";
            inbound_webhooks: "inbound_webhooks";
            messaging: "messaging";
        }>>;
        connectionCount: z.ZodNumber;
        credentialFields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            label: z.ZodString;
            required: z.ZodBoolean;
            secret: z.ZodBoolean;
            description: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
        browserConnectSupported: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListIntegrationProvidersOutput = z.infer<typeof ListIntegrationProvidersOutputSchema>;
export declare const listIntegrationProviders: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    providers: z.ZodArray<z.ZodObject<{
        id: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        name: z.ZodString;
        description: z.ZodString;
        authType: z.ZodEnum<{
            api_key: "api_key";
            app_installation: "app_installation";
            oauth: "oauth";
        }>;
        capabilities: z.ZodArray<z.ZodEnum<{
            alert_routing: "alert_routing";
            code_search: "code_search";
            health_check: "health_check";
            inbound_webhooks: "inbound_webhooks";
            messaging: "messaging";
        }>>;
        connectionCount: z.ZodNumber;
        credentialFields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            label: z.ZodString;
            required: z.ZodBoolean;
            secret: z.ZodBoolean;
            description: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
        browserConnectSupported: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const ListIntegrationConnectionsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        incident_io: "incident_io";
        jira: "jira";
        linear: "linear";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        teams: "teams";
        victorops: "victorops";
        webhook: "webhook";
    }>>;
}, z.core.$strip>;
export declare const ListIntegrationConnectionsOutputSchema: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListIntegrationConnectionsInput = z.infer<typeof ListIntegrationConnectionsInputSchema>;
export type ListIntegrationConnectionsOutput = z.infer<typeof ListIntegrationConnectionsOutputSchema>;
export declare const listIntegrationConnections: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        incident_io: "incident_io";
        jira: "jira";
        linear: "linear";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        teams: "teams";
        victorops: "victorops";
        webhook: "webhook";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const GetIntegrationConnectionInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>;
export declare const GetIntegrationConnectionOutputSchema: z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetIntegrationConnectionInput = z.infer<typeof GetIntegrationConnectionInputSchema>;
export type GetIntegrationConnectionOutput = z.infer<typeof GetIntegrationConnectionOutputSchema>;
export declare const getIntegrationConnection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const CreateIntegrationConnectionInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        incident_io: "incident_io";
        jira: "jira";
        linear: "linear";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        teams: "teams";
        victorops: "victorops";
        webhook: "webhook";
    }>;
    displayName: z.ZodOptional<z.ZodString>;
    credentials: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>;
export declare const CreateIntegrationConnectionOutputSchema: z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateIntegrationConnectionInput = z.infer<typeof CreateIntegrationConnectionInputSchema>;
export type CreateIntegrationConnectionOutput = z.infer<typeof CreateIntegrationConnectionOutputSchema>;
export declare const createIntegrationConnection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        incident_io: "incident_io";
        jira: "jira";
        linear: "linear";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        teams: "teams";
        victorops: "victorops";
        webhook: "webhook";
    }>;
    displayName: z.ZodOptional<z.ZodString>;
    credentials: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>, z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const BeginIntegrationConnectInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        incident_io: "incident_io";
        jira: "jira";
        linear: "linear";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        teams: "teams";
        victorops: "victorops";
        webhook: "webhook";
    }>;
    displayName: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const BeginIntegrationConnectOutputSchema: z.ZodObject<{
    url: z.ZodString;
    attemptId: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strip>;
export type BeginIntegrationConnectInput = z.infer<typeof BeginIntegrationConnectInputSchema>;
export type BeginIntegrationConnectOutput = z.infer<typeof BeginIntegrationConnectOutputSchema>;
export declare const beginIntegrationConnect: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        bitbucket: "bitbucket";
        github: "github";
        incident_io: "incident_io";
        jira: "jira";
        linear: "linear";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        teams: "teams";
        victorops: "victorops";
        webhook: "webhook";
    }>;
    displayName: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    url: z.ZodString;
    attemptId: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const IntegrationConnectAttemptStatusEnum: z.ZodEnum<{
    completed: "completed";
    expired: "expired";
    failed: "failed";
    not_connected: "not_connected";
    pending: "pending";
}>;
export declare const GetIntegrationConnectAttemptInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    attemptId: z.ZodString;
}, z.core.$strip>;
export declare const GetIntegrationConnectAttemptOutputSchema: z.ZodObject<{
    status: z.ZodEnum<{
        completed: "completed";
        expired: "expired";
        failed: "failed";
        not_connected: "not_connected";
        pending: "pending";
    }>;
    errorCode: z.ZodNullable<z.ZodString>;
    connection: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetIntegrationConnectAttemptInput = z.infer<typeof GetIntegrationConnectAttemptInputSchema>;
export type GetIntegrationConnectAttemptOutput = z.infer<typeof GetIntegrationConnectAttemptOutputSchema>;
export declare const getIntegrationConnectAttempt: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    attemptId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodEnum<{
        completed: "completed";
        expired: "expired";
        failed: "failed";
        not_connected: "not_connected";
        pending: "pending";
    }>;
    errorCode: z.ZodNullable<z.ZodString>;
    connection: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const DisconnectIntegrationConnectionInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>;
export declare const DisconnectIntegrationConnectionOutputSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
export type DisconnectIntegrationConnectionInput = z.infer<typeof DisconnectIntegrationConnectionInputSchema>;
export type DisconnectIntegrationConnectionOutput = z.infer<typeof DisconnectIntegrationConnectionOutputSchema>;
export declare const disconnectIntegrationConnection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const UpdateIntegrationConnectionCredentialsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    credentials: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>;
export declare const UpdateIntegrationConnectionCredentialsOutputSchema: z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateIntegrationConnectionCredentialsInput = z.infer<typeof UpdateIntegrationConnectionCredentialsInputSchema>;
export type UpdateIntegrationConnectionCredentialsOutput = z.infer<typeof UpdateIntegrationConnectionCredentialsOutputSchema>;
export declare const updateIntegrationConnectionCredentials: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    credentials: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>, z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
            bitbucket: "bitbucket";
            github: "github";
            incident_io: "incident_io";
            jira: "jira";
            linear: "linear";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            teams: "teams";
            victorops: "victorops";
            webhook: "webhook";
        }>;
        displayName: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            connected: "connected";
            error: "error";
            pending: "pending";
            revoked: "revoked";
        }>;
        isActive: z.ZodBoolean;
        needsAttention: z.ZodBoolean;
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        healthStatus: z.ZodEnum<{
            healthy: "healthy";
            unhealthy: "unhealthy";
            unknown: "unknown";
        }>;
        healthMessage: z.ZodNullable<z.ZodString>;
        healthCheckedAt: z.ZodNullable<z.ZodString>;
        healthConsecutiveFailures: z.ZodNumber;
        connectedBy: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const ExternalIdentityJitOrganizationPolicySchema: z.ZodObject<{
    organizationEnabled: z.ZodBoolean;
    effectiveEnabled: z.ZodBoolean;
}, z.core.$strip>;
export declare const getOrganizationExternalIdentityJitPolicy: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    organizationEnabled: z.ZodBoolean;
    effectiveEnabled: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const updateOrganizationExternalIdentityJitPolicy: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    enabled: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    organizationEnabled: z.ZodBoolean;
    effectiveEnabled: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const getConnectionExternalIdentityJitPolicy: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    organizationEnabled: z.ZodBoolean;
    connectionEnabled: z.ZodBoolean;
    effectiveEnabled: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const updateConnectionExternalIdentityJitPolicy: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    enabled: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    organizationEnabled: z.ZodBoolean;
    connectionEnabled: z.ZodBoolean;
    effectiveEnabled: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const SlackConfigurationSchema: z.ZodObject<{
    connectionId: z.ZodString;
    defaultProjectId: z.ZodNullable<z.ZodString>;
    automaticResponses: z.ZodBoolean;
    acknowledgementMessage: z.ZodBoolean;
}, z.core.$strip>;
export type SlackConfiguration = z.infer<typeof SlackConfigurationSchema>;
export declare const GetSlackConfigurationInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>;
export type GetSlackConfigurationInput = z.infer<typeof GetSlackConfigurationInputSchema>;
export type GetSlackConfigurationOutput = z.infer<typeof SlackConfigurationSchema>;
export declare const getSlackConfiguration: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    connectionId: z.ZodString;
    defaultProjectId: z.ZodNullable<z.ZodString>;
    automaticResponses: z.ZodBoolean;
    acknowledgementMessage: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const UpdateSlackConfigurationInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    defaultProjectId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    automaticResponses: z.ZodOptional<z.ZodBoolean>;
    acknowledgementMessage: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateSlackConfigurationInput = z.infer<typeof UpdateSlackConfigurationInputSchema>;
export type UpdateSlackConfigurationOutput = z.infer<typeof SlackConfigurationSchema>;
export declare const updateSlackConfiguration: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    defaultProjectId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    automaticResponses: z.ZodOptional<z.ZodBoolean>;
    acknowledgementMessage: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    connectionId: z.ZodString;
    defaultProjectId: z.ZodNullable<z.ZodString>;
    automaticResponses: z.ZodBoolean;
    acknowledgementMessage: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const SlackChannelProjectMappingSchema: z.ZodObject<{
    connectionId: z.ZodString;
    slackChannelId: z.ZodString;
    slackChannelName: z.ZodString;
    projectId: z.ZodString;
}, z.core.$strip>;
export type SlackChannelProjectMapping = z.infer<typeof SlackChannelProjectMappingSchema>;
export declare const ListSlackChannelProjectMappingsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>;
export declare const ListSlackChannelProjectMappingsOutputSchema: z.ZodObject<{
    mappings: z.ZodArray<z.ZodObject<{
        connectionId: z.ZodString;
        slackChannelId: z.ZodString;
        slackChannelName: z.ZodString;
        projectId: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListSlackChannelProjectMappingsInput = z.infer<typeof ListSlackChannelProjectMappingsInputSchema>;
export type ListSlackChannelProjectMappingsOutput = z.infer<typeof ListSlackChannelProjectMappingsOutputSchema>;
export declare const listSlackChannelProjectMappings: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    mappings: z.ZodArray<z.ZodObject<{
        connectionId: z.ZodString;
        slackChannelId: z.ZodString;
        slackChannelName: z.ZodString;
        projectId: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const SetSlackChannelProjectMappingInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    slackChannelId: z.ZodString;
    slackChannelName: z.ZodOptional<z.ZodString>;
    projectId: z.ZodString;
}, z.core.$strip>;
export type SetSlackChannelProjectMappingInput = z.infer<typeof SetSlackChannelProjectMappingInputSchema>;
export type SetSlackChannelProjectMappingOutput = z.infer<typeof SlackChannelProjectMappingSchema>;
export declare const setSlackChannelProjectMapping: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    slackChannelId: z.ZodString;
    slackChannelName: z.ZodOptional<z.ZodString>;
    projectId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    connectionId: z.ZodString;
    slackChannelId: z.ZodString;
    slackChannelName: z.ZodString;
    projectId: z.ZodString;
}, z.core.$strip>, "api">;
export declare const DeleteSlackChannelProjectMappingInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    slackChannelId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteSlackChannelProjectMappingOutputSchema: z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteSlackChannelProjectMappingInput = z.infer<typeof DeleteSlackChannelProjectMappingInputSchema>;
export type DeleteSlackChannelProjectMappingOutput = z.infer<typeof DeleteSlackChannelProjectMappingOutputSchema>;
export declare const deleteSlackChannelProjectMapping: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    slackChannelId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>, "api">;
