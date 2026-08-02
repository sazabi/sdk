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
