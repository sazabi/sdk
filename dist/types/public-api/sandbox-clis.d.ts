import { z } from "zod";
/**
 * One sandbox CLI type in the catalog.
 */
export declare const SandboxCliTypeInfoSchema: z.ZodObject<{
    type: z.ZodString;
    label: z.ZodString;
    executableNames: z.ZodArray<z.ZodString>;
    envVarKeys: z.ZodArray<z.ZodString>;
    setupSkill: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type SandboxCliTypeInfo = z.infer<typeof SandboxCliTypeInfoSchema>;
export declare const ListSandboxCliTypesInputSchema: z.ZodObject<{}, z.core.$strip>;
export declare const ListSandboxCliTypesOutputSchema: z.ZodObject<{
    types: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        label: z.ZodString;
        executableNames: z.ZodArray<z.ZodString>;
        envVarKeys: z.ZodArray<z.ZodString>;
        setupSkill: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListSandboxCliTypesOutput = z.infer<typeof ListSandboxCliTypesOutputSchema>;
export declare const listSandboxCliTypes: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    types: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        label: z.ZodString;
        executableNames: z.ZodArray<z.ZodString>;
        envVarKeys: z.ZodArray<z.ZodString>;
        setupSkill: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const SandboxCliCredentialSourceSchema: z.ZodEnum<{
    bitbucket_integration: "bitbucket_integration";
    github_app: "github_app";
    personal_access_token: "personal_access_token";
    stored_credentials: "stored_credentials";
    tailscale_federated_identity: "tailscale_federated_identity";
}>;
export declare const SandboxCliConnectionSchema: z.ZodObject<{
    connectionStatus: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    recovery: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    cliType: z.ZodString;
    credentialSource: z.ZodEnum<{
        bitbucket_integration: "bitbucket_integration";
        github_app: "github_app";
        personal_access_token: "personal_access_token";
        stored_credentials: "stored_credentials";
        tailscale_federated_identity: "tailscale_federated_identity";
    }>;
    isSystemManaged: z.ZodBoolean;
    fallbackConfigured: z.ZodBoolean;
    envVarKeys: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type SandboxCliConnection = z.infer<typeof SandboxCliConnectionSchema>;
export declare const ListSandboxCliConnectionsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListSandboxCliConnectionsOutputSchema: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        connectionStatus: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        recovery: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        cliType: z.ZodString;
        credentialSource: z.ZodEnum<{
            bitbucket_integration: "bitbucket_integration";
            github_app: "github_app";
            personal_access_token: "personal_access_token";
            stored_credentials: "stored_credentials";
            tailscale_federated_identity: "tailscale_federated_identity";
        }>;
        isSystemManaged: z.ZodBoolean;
        fallbackConfigured: z.ZodBoolean;
        envVarKeys: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListSandboxCliConnectionsInput = z.infer<typeof ListSandboxCliConnectionsInputSchema>;
export type ListSandboxCliConnectionsOutput = z.infer<typeof ListSandboxCliConnectionsOutputSchema>;
export declare const listSandboxCliConnections: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        connectionStatus: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        recovery: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        cliType: z.ZodString;
        credentialSource: z.ZodEnum<{
            bitbucket_integration: "bitbucket_integration";
            github_app: "github_app";
            personal_access_token: "personal_access_token";
            stored_credentials: "stored_credentials";
            tailscale_federated_identity: "tailscale_federated_identity";
        }>;
        isSystemManaged: z.ZodBoolean;
        fallbackConfigured: z.ZodBoolean;
        envVarKeys: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * One sandbox CLI environment variable (name + secret value).
 *
 * `value` is write-only credential material. It is accepted on input, encrypted
 * server-side, and NEVER returned in any response.
 */
export declare const SandboxCliEnvVarSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export declare const UpsertSandboxCliInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    cliType: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Response intentionally excludes all env var values — only the resulting key
 * names are echoed back so callers can confirm what was stored.
 */
export declare const UpsertSandboxCliOutputSchema: z.ZodObject<{
    projectId: z.ZodString;
    cliType: z.ZodString;
    envVarKeys: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type UpsertSandboxCliInput = z.infer<typeof UpsertSandboxCliInputSchema>;
export type UpsertSandboxCliOutput = z.infer<typeof UpsertSandboxCliOutputSchema>;
export declare const upsertSandboxCli: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    cliType: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    cliType: z.ZodString;
    envVarKeys: z.ZodArray<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const DeleteSandboxCliInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    cliType: z.ZodString;
}, z.core.$strip>;
export declare const DeleteSandboxCliOutputSchema: z.ZodObject<{
    projectId: z.ZodString;
    cliType: z.ZodString;
    deleted: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteSandboxCliInput = z.infer<typeof DeleteSandboxCliInputSchema>;
export type DeleteSandboxCliOutput = z.infer<typeof DeleteSandboxCliOutputSchema>;
export declare const deleteSandboxCli: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    cliType: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    cliType: z.ZodString;
    deleted: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const TestSandboxCliInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    cliType: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const TestSandboxCliOutputSchema: z.ZodObject<{
    status: z.ZodEnum<{
        failed: "failed";
        success: "success";
    }>;
    message: z.ZodNullable<z.ZodString>;
    stdout: z.ZodString;
    stderr: z.ZodString;
}, z.core.$strip>;
export type TestSandboxCliInput = z.infer<typeof TestSandboxCliInputSchema>;
export type TestSandboxCliOutput = z.infer<typeof TestSandboxCliOutputSchema>;
export declare const testSandboxCli: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    cliType: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodEnum<{
        failed: "failed";
        success: "success";
    }>;
    message: z.ZodNullable<z.ZodString>;
    stdout: z.ZodString;
    stderr: z.ZodString;
}, z.core.$strip>, "api">;
export declare const sandboxClisContract: {
    readonly deleteCli: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        cliType: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        projectId: z.ZodString;
        cliType: z.ZodString;
        deleted: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listConnections: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        connections: z.ZodArray<z.ZodObject<{
            connectionStatus: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            recovery: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            cliType: z.ZodString;
            credentialSource: z.ZodEnum<{
                bitbucket_integration: "bitbucket_integration";
                github_app: "github_app";
                personal_access_token: "personal_access_token";
                stored_credentials: "stored_credentials";
                tailscale_federated_identity: "tailscale_federated_identity";
            }>;
            isSystemManaged: z.ZodBoolean;
            fallbackConfigured: z.ZodBoolean;
            envVarKeys: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listTypes: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        types: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            label: z.ZodString;
            executableNames: z.ZodArray<z.ZodString>;
            envVarKeys: z.ZodArray<z.ZodString>;
            setupSkill: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly testCli: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        cliType: z.ZodString;
        environmentVariables: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodEnum<{
            failed: "failed";
            success: "success";
        }>;
        message: z.ZodNullable<z.ZodString>;
        stdout: z.ZodString;
        stderr: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly upsertCli: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        cliType: z.ZodString;
        environmentVariables: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        projectId: z.ZodString;
        cliType: z.ZodString;
        envVarKeys: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
/** Check only the currently stored revision; draft testing remains separate. */
export declare const verifySandboxCli: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    cliType: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    outcome: z.ZodEnum<{
        healthy: "healthy";
        inconclusive: "inconclusive";
        superseded: "superseded";
        unhealthy: "unhealthy";
    }>;
}, z.core.$strip>, "api">;
