import { z } from "zod";
/** Presentation only; resource owners retain their own lifecycle and evidence. */
export declare const ConnectionStatusSchema: z.ZodObject<{
    state: z.ZodEnum<{
        connected: "connected";
        connecting: "connecting";
        needs_attention: "needs_attention";
        not_connected: "not_connected";
    }>;
    reasonCode: z.ZodNullable<z.ZodEnum<{
        configuration_invalid: "configuration_invalid";
        credentials_rejected: "credentials_rejected";
        discovery_failed: "discovery_failed";
        health_check_failed: "health_check_failed";
        permissions_missing: "permissions_missing";
        recovery_required: "recovery_required";
        stream_failed: "stream_failed";
    }>>;
    checkedAt: z.ZodNullable<z.ZodString>;
    verification: z.ZodEnum<{
        unverified: "unverified";
        verified: "verified";
    }>;
}, z.core.$strip>;
export type ConnectionStatus = z.infer<typeof ConnectionStatusSchema>;
export declare const ConnectionResourceKindSchema: z.ZodEnum<{
    connected_account: "connected_account";
    integration: "integration";
    log_source: "log_source";
    mcp_connector: "mcp_connector";
    sandbox_cli: "sandbox_cli";
}>;
export declare const ConnectionScopeSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        organization: "organization";
        project: "project";
        user: "user";
    }>;
    id: z.ZodString;
}, z.core.$strip>;
export declare const ConnectionRemediationTargetSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        connected_account: "connected_account";
        integration: "integration";
        log_source: "log_source";
        mcp_connector: "mcp_connector";
        sandbox_cli: "sandbox_cli";
    }>;
    resourceId: z.ZodString;
    providerId: z.ZodString;
    scope: z.ZodObject<{
        kind: z.ZodEnum<{
            organization: "organization";
            project: "project";
            user: "user";
        }>;
        id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ConnectionRecoverySchema: z.ZodObject<{
    action: z.ZodNullable<z.ZodEnum<{
        manage_installation: "manage_installation";
        manage_owner: "manage_owner";
        reconnect: "reconnect";
        review_setup: "review_setup";
        update_credentials: "update_credentials";
    }>>;
    canCheck: z.ZodBoolean;
    canDisconnect: z.ZodBoolean;
    target: z.ZodOptional<z.ZodObject<{
        kind: z.ZodEnum<{
            connected_account: "connected_account";
            integration: "integration";
            log_source: "log_source";
            mcp_connector: "mcp_connector";
            sandbox_cli: "sandbox_cli";
        }>;
        resourceId: z.ZodString;
        providerId: z.ZodString;
        scope: z.ZodObject<{
            kind: z.ZodEnum<{
                organization: "organization";
                project: "project";
                user: "user";
            }>;
            id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ConnectionRecovery = z.infer<typeof ConnectionRecoverySchema>;
export declare const ConnectionAttentionItemSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        connected_account: "connected_account";
        integration: "integration";
        log_source: "log_source";
        mcp_connector: "mcp_connector";
        sandbox_cli: "sandbox_cli";
    }>;
    resourceId: z.ZodString;
    providerId: z.ZodString;
    scope: z.ZodObject<{
        kind: z.ZodEnum<{
            organization: "organization";
            project: "project";
            user: "user";
        }>;
        id: z.ZodString;
    }, z.core.$strip>;
    id: z.ZodString;
    displayName: z.ZodString;
    status: z.ZodObject<{
        state: z.ZodEnum<{
            connected: "connected";
            connecting: "connecting";
            needs_attention: "needs_attention";
            not_connected: "not_connected";
        }>;
        reasonCode: z.ZodNullable<z.ZodEnum<{
            configuration_invalid: "configuration_invalid";
            credentials_rejected: "credentials_rejected";
            discovery_failed: "discovery_failed";
            health_check_failed: "health_check_failed";
            permissions_missing: "permissions_missing";
            recovery_required: "recovery_required";
            stream_failed: "stream_failed";
        }>>;
        checkedAt: z.ZodNullable<z.ZodString>;
        verification: z.ZodEnum<{
            unverified: "unverified";
            verified: "verified";
        }>;
    }, z.core.$strip>;
    remediationTarget: z.ZodObject<{
        kind: z.ZodEnum<{
            connected_account: "connected_account";
            integration: "integration";
            log_source: "log_source";
            mcp_connector: "mcp_connector";
            sandbox_cli: "sandbox_cli";
        }>;
        resourceId: z.ZodString;
        providerId: z.ZodString;
        scope: z.ZodObject<{
            kind: z.ZodEnum<{
                organization: "organization";
                project: "project";
                user: "user";
            }>;
            id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ConnectionAttentionSummarySchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            connected_account: "connected_account";
            integration: "integration";
            log_source: "log_source";
            mcp_connector: "mcp_connector";
            sandbox_cli: "sandbox_cli";
        }>;
        resourceId: z.ZodString;
        providerId: z.ZodString;
        scope: z.ZodObject<{
            kind: z.ZodEnum<{
                organization: "organization";
                project: "project";
                user: "user";
            }>;
            id: z.ZodString;
        }, z.core.$strip>;
        id: z.ZodString;
        displayName: z.ZodString;
        status: z.ZodObject<{
            state: z.ZodEnum<{
                connected: "connected";
                connecting: "connecting";
                needs_attention: "needs_attention";
                not_connected: "not_connected";
            }>;
            reasonCode: z.ZodNullable<z.ZodEnum<{
                configuration_invalid: "configuration_invalid";
                credentials_rejected: "credentials_rejected";
                discovery_failed: "discovery_failed";
                health_check_failed: "health_check_failed";
                permissions_missing: "permissions_missing";
                recovery_required: "recovery_required";
                stream_failed: "stream_failed";
            }>>;
            checkedAt: z.ZodNullable<z.ZodString>;
            verification: z.ZodEnum<{
                unverified: "unverified";
                verified: "verified";
            }>;
        }, z.core.$strip>;
        remediationTarget: z.ZodObject<{
            kind: z.ZodEnum<{
                connected_account: "connected_account";
                integration: "integration";
                log_source: "log_source";
                mcp_connector: "mcp_connector";
                sandbox_cli: "sandbox_cli";
            }>;
            resourceId: z.ZodString;
            providerId: z.ZodString;
            scope: z.ZodObject<{
                kind: z.ZodEnum<{
                    organization: "organization";
                    project: "project";
                    user: "user";
                }>;
                id: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    total: z.ZodNumber;
    coverage: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            connected_account: "connected_account";
            integration: "integration";
            log_source: "log_source";
            mcp_connector: "mcp_connector";
            sandbox_cli: "sandbox_cli";
        }>;
        scope: z.ZodNullable<z.ZodObject<{
            kind: z.ZodEnum<{
                organization: "organization";
                project: "project";
                user: "user";
            }>;
            id: z.ZodString;
        }, z.core.$strip>>;
        state: z.ZodEnum<{
            complete: "complete";
            not_applicable: "not_applicable";
            unavailable: "unavailable";
        }>;
        canRetainPrevious: z.ZodBoolean;
    }, z.core.$strip>>;
    evaluatedAt: z.ZodString;
}, z.core.$strip>;
export type ConnectionAttentionItem = z.infer<typeof ConnectionAttentionItemSchema>;
export type ConnectionAttentionSummary = z.infer<typeof ConnectionAttentionSummarySchema>;
