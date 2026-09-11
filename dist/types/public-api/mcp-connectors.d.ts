/**
 * Public API contracts for MCP connector inspection, management, and tool dispatch.
 *
 * List, get, details, providers, search, and describe expose configured
 * connectors and their executable tool surface without secret material.
 * `call` invokes one vendor tool through that connection's own credential.
 * Create, update, disconnect, setReadOnly, and OAuth endpoints mutate connectors.
 */
import { z } from "zod";
/** Install status values mirroring the MCP connection lifecycle. */
export declare const MCP_CONNECTOR_INSTALL_STATUS_VALUES: readonly ["configured", "authorizing", "connected", "error"];
/** Connection source: a built-in preset provider or a custom server. */
export declare const MCP_CONNECTOR_SOURCE_VALUES: readonly ["preset", "custom"];
/** Transport values supported by MCP connections. */
export declare const MCP_CONNECTOR_TRANSPORT_VALUES: readonly ["streamable-http", "sse"];
/** Auth mode values supported by MCP connections. */
export declare const MCP_CONNECTOR_AUTH_MODE_VALUES: readonly ["none", "headers", "oauth", "aws-sigv4"];
/**
 * One configured MCP connector. Secret material (headers, tokens, granted
 * scopes) is intentionally omitted from this shape.
 */
export declare const McpConnectorSchema: z.ZodObject<{
    connectionId: z.ZodString;
    connectionKey: z.ZodString;
    providerId: z.ZodString;
    displayName: z.ZodString;
    source: z.ZodEnum<{
        custom: "custom";
        preset: "preset";
    }>;
    installStatus: z.ZodEnum<{
        authorizing: "authorizing";
        configured: "configured";
        connected: "connected";
        error: "error";
    }>;
    authMode: z.ZodEnum<{
        "aws-sigv4": "aws-sigv4";
        headers: "headers";
        none: "none";
        oauth: "oauth";
    }>;
    transport: z.ZodEnum<{
        sse: "sse";
        "streamable-http": "streamable-http";
    }>;
    serverUrl: z.ZodString;
    readOnly: z.ZodBoolean;
    management: z.ZodObject<{
        mode: z.ZodEnum<{
            system: "system";
            user: "user";
        }>;
        managedBy: z.ZodNullable<z.ZodObject<{
            type: z.ZodLiteral<"integration">;
            id: z.ZodString;
            displayName: z.ZodString;
            iconKey: z.ZodString;
        }, z.core.$strip>>;
        capabilities: z.ZodObject<{
            canRename: z.ZodBoolean;
            canEditCredentials: z.ZodBoolean;
            canSetReadOnly: z.ZodBoolean;
            canConfigureTools: z.ZodBoolean;
            canDisconnect: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>;
    enabledToolCount: z.ZodNumber;
    connectedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type McpConnector = z.infer<typeof McpConnectorSchema>;
/**
 * One tool exposed by an MCP connector.
 */
export declare const McpConnectorToolSchema: z.ZodObject<{
    name: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    isReadOnly: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type McpConnectorTool = z.infer<typeof McpConnectorToolSchema>;
export declare const ListMcpConnectorsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    connectedOnly: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>;
export declare const ListMcpConnectorsOutputSchema: z.ZodObject<{
    connectors: z.ZodArray<z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListMcpConnectorsInput = z.infer<typeof ListMcpConnectorsInputSchema>;
export type ListMcpConnectorsOutput = z.infer<typeof ListMcpConnectorsOutputSchema>;
export declare const listMcpConnectors: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    connectedOnly: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>, z.ZodObject<{
    connectors: z.ZodArray<z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const GetMcpConnectorInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetMcpConnectorOutputSchema: z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetMcpConnectorInput = z.infer<typeof GetMcpConnectorInputSchema>;
export type GetMcpConnectorOutput = z.infer<typeof GetMcpConnectorOutputSchema>;
export declare const getMcpConnector: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const GetMcpConnectorDetailsInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetMcpConnectorDetailsOutputSchema: z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
    tools: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        isReadOnly: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetMcpConnectorDetailsInput = z.infer<typeof GetMcpConnectorDetailsInputSchema>;
export type GetMcpConnectorDetailsOutput = z.infer<typeof GetMcpConnectorDetailsOutputSchema>;
export declare const getMcpConnectorDetails: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
    tools: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        isReadOnly: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * One MCP connector provider in the catalog (preset, not custom).
 */
export declare const McpProviderInfoSchema: z.ZodObject<{
    providerId: z.ZodString;
    label: z.ZodString;
    authMode: z.ZodEnum<{
        "aws-sigv4": "aws-sigv4";
        headers: "headers";
        none: "none";
        oauth: "oauth";
    }>;
    availability: z.ZodEnum<{
        "custom-only": "custom-only";
        disabled: "disabled";
        enabled: "enabled";
    }>;
    setupSkill: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type McpProviderInfo = z.infer<typeof McpProviderInfoSchema>;
export declare const ListMcpProvidersInputSchema: z.ZodObject<{}, z.core.$strip>;
export declare const ListMcpProvidersOutputSchema: z.ZodObject<{
    providers: z.ZodArray<z.ZodObject<{
        providerId: z.ZodString;
        label: z.ZodString;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        availability: z.ZodEnum<{
            "custom-only": "custom-only";
            disabled: "disabled";
            enabled: "enabled";
        }>;
        setupSkill: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListMcpProvidersOutput = z.infer<typeof ListMcpProvidersOutputSchema>;
export declare const listMcpProviders: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    providers: z.ZodArray<z.ZodObject<{
        providerId: z.ZodString;
        label: z.ZodString;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        availability: z.ZodEnum<{
            "custom-only": "custom-only";
            disabled: "disabled";
            enabled: "enabled";
        }>;
        setupSkill: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const McpConnectorIndexEntrySchema: z.ZodObject<{
    connectionKey: z.ZodString;
    displayName: z.ZodString;
    providerId: z.ZodString;
    toolCount: z.ZodNumber;
}, z.core.$strip>;
export type McpConnectorIndexEntry = z.infer<typeof McpConnectorIndexEntrySchema>;
export declare const McpConnectorToolSearchHitSchema: z.ZodObject<{
    connectionKey: z.ZodString;
    toolName: z.ZodString;
    providerId: z.ZodString;
    displayName: z.ZodString;
    isReadOnly: z.ZodBoolean;
    description: z.ZodString;
    score: z.ZodNumber;
    inputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type McpConnectorToolSearchHit = z.infer<typeof McpConnectorToolSearchHitSchema>;
export declare const SearchMcpConnectorToolsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    namespace: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    includeInputSchema: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>;
export declare const SearchMcpConnectorToolsOutputSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        connectors: "connectors";
        tools: "tools";
    }>;
    total: z.ZodNumber;
    connectors: z.ZodArray<z.ZodObject<{
        connectionKey: z.ZodString;
        displayName: z.ZodString;
        providerId: z.ZodString;
        toolCount: z.ZodNumber;
    }, z.core.$strip>>;
    tools: z.ZodArray<z.ZodObject<{
        connectionKey: z.ZodString;
        toolName: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        isReadOnly: z.ZodBoolean;
        description: z.ZodString;
        score: z.ZodNumber;
        inputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SearchMcpConnectorToolsInput = z.infer<typeof SearchMcpConnectorToolsInputSchema>;
export type SearchMcpConnectorToolsOutput = z.infer<typeof SearchMcpConnectorToolsOutputSchema>;
export declare const searchMcpConnectorTools: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    namespace: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    includeInputSchema: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodEnum<{
        connectors: "connectors";
        tools: "tools";
    }>;
    total: z.ZodNumber;
    connectors: z.ZodArray<z.ZodObject<{
        connectionKey: z.ZodString;
        displayName: z.ZodString;
        providerId: z.ZodString;
        toolCount: z.ZodNumber;
    }, z.core.$strip>>;
    tools: z.ZodArray<z.ZodObject<{
        connectionKey: z.ZodString;
        toolName: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        isReadOnly: z.ZodBoolean;
        description: z.ZodString;
        score: z.ZodNumber;
        inputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const DescribeMcpConnectorToolInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    connectionKey: z.ZodString;
    toolName: z.ZodString;
}, z.core.$strip>;
export declare const DescribeMcpConnectorToolOutputSchema: z.ZodObject<{
    connectionKey: z.ZodString;
    toolName: z.ZodString;
    providerId: z.ZodString;
    displayName: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    isReadOnly: z.ZodBoolean;
    inputSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>;
export type DescribeMcpConnectorToolInput = z.infer<typeof DescribeMcpConnectorToolInputSchema>;
export type DescribeMcpConnectorToolOutput = z.infer<typeof DescribeMcpConnectorToolOutputSchema>;
export declare const describeMcpConnectorTool: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    connectionKey: z.ZodString;
    toolName: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    connectionKey: z.ZodString;
    toolName: z.ZodString;
    providerId: z.ZodString;
    displayName: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    isReadOnly: z.ZodBoolean;
    inputSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>, "api">;
export declare const CallMcpConnectorToolInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    connectionKey: z.ZodString;
    toolName: z.ZodString;
    arguments: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export declare const CallMcpConnectorToolOutputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    ok: z.ZodLiteral<true>;
    connectionKey: z.ZodString;
    toolName: z.ZodString;
    result: z.ZodUnknown;
    structuredContent: z.ZodOptional<z.ZodUnknown>;
    content: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    text: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    code: z.ZodEnum<{
        MCP_ERROR: "MCP_ERROR";
        READ_ONLY: "READ_ONLY";
        TOOL_NOT_ENABLED: "TOOL_NOT_ENABLED";
    }>;
    message: z.ZodString;
}, z.core.$strip>], "ok">;
export type CallMcpConnectorToolInput = z.infer<typeof CallMcpConnectorToolInputSchema>;
export type CallMcpConnectorToolOutput = z.infer<typeof CallMcpConnectorToolOutputSchema>;
export declare const callMcpConnectorTool: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    connectionKey: z.ZodString;
    toolName: z.ZodString;
    arguments: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    ok: z.ZodLiteral<true>;
    connectionKey: z.ZodString;
    toolName: z.ZodString;
    result: z.ZodUnknown;
    structuredContent: z.ZodOptional<z.ZodUnknown>;
    content: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    text: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    code: z.ZodEnum<{
        MCP_ERROR: "MCP_ERROR";
        READ_ONLY: "READ_ONLY";
        TOOL_NOT_ENABLED: "TOOL_NOT_ENABLED";
    }>;
    message: z.ZodString;
}, z.core.$strip>], "ok">, "api">;
export declare const McpConnectorHeaderSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type McpConnectorHeader = z.infer<typeof McpConnectorHeaderSchema>;
export declare const McpConnectorAwsSigV4Schema: z.ZodObject<{
    accessKeyId: z.ZodString;
    secretAccessKey: z.ZodString;
    sessionToken: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
}, z.core.$strip>;
export type McpConnectorAwsSigV4 = z.infer<typeof McpConnectorAwsSigV4Schema>;
export declare const CreateMcpConnectorInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    serverUrl: z.ZodString;
    transport: z.ZodEnum<{
        sse: "sse";
        "streamable-http": "streamable-http";
    }>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    awsSigV4: z.ZodOptional<z.ZodObject<{
        accessKeyId: z.ZodString;
        secretAccessKey: z.ZodString;
        sessionToken: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
    }, z.core.$strip>>;
    providerId: z.ZodString;
    readOnly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const CreateMcpConnectorOutputSchema: z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateMcpConnectorInput = z.infer<typeof CreateMcpConnectorInputSchema>;
export type CreateMcpConnectorOutput = z.infer<typeof CreateMcpConnectorOutputSchema>;
export declare const createMcpConnector: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    serverUrl: z.ZodString;
    transport: z.ZodEnum<{
        sse: "sse";
        "streamable-http": "streamable-http";
    }>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    awsSigV4: z.ZodOptional<z.ZodObject<{
        accessKeyId: z.ZodString;
        secretAccessKey: z.ZodString;
        sessionToken: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
    }, z.core.$strip>>;
    providerId: z.ZodString;
    readOnly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const UpdateMcpConnectorInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    serverUrl: z.ZodOptional<z.ZodString>;
    transport: z.ZodOptional<z.ZodEnum<{
        sse: "sse";
        "streamable-http": "streamable-http";
    }>>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    awsSigV4: z.ZodOptional<z.ZodObject<{
        accessKeyId: z.ZodString;
        secretAccessKey: z.ZodString;
        sessionToken: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const UpdateMcpConnectorOutputSchema: z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateMcpConnectorInput = z.infer<typeof UpdateMcpConnectorInputSchema>;
export type UpdateMcpConnectorOutput = z.infer<typeof UpdateMcpConnectorOutputSchema>;
export declare const updateMcpConnector: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    serverUrl: z.ZodOptional<z.ZodString>;
    transport: z.ZodOptional<z.ZodEnum<{
        sse: "sse";
        "streamable-http": "streamable-http";
    }>>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    awsSigV4: z.ZodOptional<z.ZodObject<{
        accessKeyId: z.ZodString;
        secretAccessKey: z.ZodString;
        sessionToken: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const DisconnectMcpConnectorInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const DisconnectMcpConnectorOutputSchema: z.ZodVoid;
export type DisconnectMcpConnectorInput = z.infer<typeof DisconnectMcpConnectorInputSchema>;
export declare const disconnectMcpConnector: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodVoid, "api">;
export declare const SetMcpConnectorReadOnlyInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    readOnly: z.ZodBoolean;
}, z.core.$strip>;
export declare const SetMcpConnectorReadOnlyOutputSchema: z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SetMcpConnectorReadOnlyInput = z.infer<typeof SetMcpConnectorReadOnlyInputSchema>;
export type SetMcpConnectorReadOnlyOutput = z.infer<typeof SetMcpConnectorReadOnlyOutputSchema>;
export declare const setMcpConnectorReadOnly: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    readOnly: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    connector: z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const BeginMcpOAuthInstallInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    providerId: z.ZodString;
    requestedScopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    serverUrl: z.ZodOptional<z.ZodString>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    returnTo: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const BeginMcpOAuthInstallOutputSchema: z.ZodObject<{
    authorizationUrl: z.ZodString;
    connectionId: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strip>;
export type BeginMcpOAuthInstallInput = z.infer<typeof BeginMcpOAuthInstallInputSchema>;
export type BeginMcpOAuthInstallOutput = z.infer<typeof BeginMcpOAuthInstallOutputSchema>;
export declare const beginMcpOAuthInstall: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    providerId: z.ZodString;
    requestedScopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    serverUrl: z.ZodOptional<z.ZodString>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    returnTo: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    authorizationUrl: z.ZodString;
    connectionId: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const GetMcpOAuthInstallAttemptInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetMcpOAuthInstallAttemptOutputSchema: z.ZodObject<{
    status: z.ZodEnum<{
        authorizing: "authorizing";
        connected: "connected";
        error: "error";
    }>;
    connector: z.ZodOptional<z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetMcpOAuthInstallAttemptInput = z.infer<typeof GetMcpOAuthInstallAttemptInputSchema>;
export type GetMcpOAuthInstallAttemptOutput = z.infer<typeof GetMcpOAuthInstallAttemptOutputSchema>;
export declare const getMcpOAuthInstallAttempt: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodEnum<{
        authorizing: "authorizing";
        connected: "connected";
        error: "error";
    }>;
    connector: z.ZodOptional<z.ZodObject<{
        connectionId: z.ZodString;
        connectionKey: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        source: z.ZodEnum<{
            custom: "custom";
            preset: "preset";
        }>;
        installStatus: z.ZodEnum<{
            authorizing: "authorizing";
            configured: "configured";
            connected: "connected";
            error: "error";
        }>;
        authMode: z.ZodEnum<{
            "aws-sigv4": "aws-sigv4";
            headers: "headers";
            none: "none";
            oauth: "oauth";
        }>;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        serverUrl: z.ZodString;
        readOnly: z.ZodBoolean;
        management: z.ZodObject<{
            mode: z.ZodEnum<{
                system: "system";
                user: "user";
            }>;
            managedBy: z.ZodNullable<z.ZodObject<{
                type: z.ZodLiteral<"integration">;
                id: z.ZodString;
                displayName: z.ZodString;
                iconKey: z.ZodString;
            }, z.core.$strip>>;
            capabilities: z.ZodObject<{
                canRename: z.ZodBoolean;
                canEditCredentials: z.ZodBoolean;
                canSetReadOnly: z.ZodBoolean;
                canConfigureTools: z.ZodBoolean;
                canDisconnect: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        enabledToolCount: z.ZodNumber;
        connectedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const mcpConnectorsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        connectedOnly: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    }, z.core.$strip>, z.ZodObject<{
        connectors: z.ZodArray<z.ZodObject<{
            connectionId: z.ZodString;
            connectionKey: z.ZodString;
            providerId: z.ZodString;
            displayName: z.ZodString;
            source: z.ZodEnum<{
                custom: "custom";
                preset: "preset";
            }>;
            installStatus: z.ZodEnum<{
                authorizing: "authorizing";
                configured: "configured";
                connected: "connected";
                error: "error";
            }>;
            authMode: z.ZodEnum<{
                "aws-sigv4": "aws-sigv4";
                headers: "headers";
                none: "none";
                oauth: "oauth";
            }>;
            transport: z.ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            serverUrl: z.ZodString;
            readOnly: z.ZodBoolean;
            management: z.ZodObject<{
                mode: z.ZodEnum<{
                    system: "system";
                    user: "user";
                }>;
                managedBy: z.ZodNullable<z.ZodObject<{
                    type: z.ZodLiteral<"integration">;
                    id: z.ZodString;
                    displayName: z.ZodString;
                    iconKey: z.ZodString;
                }, z.core.$strip>>;
                capabilities: z.ZodObject<{
                    canRename: z.ZodBoolean;
                    canEditCredentials: z.ZodBoolean;
                    canSetReadOnly: z.ZodBoolean;
                    canConfigureTools: z.ZodBoolean;
                    canDisconnect: z.ZodBoolean;
                }, z.core.$strip>;
            }, z.core.$strip>;
            enabledToolCount: z.ZodNumber;
            connectedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        connector: z.ZodObject<{
            connectionId: z.ZodString;
            connectionKey: z.ZodString;
            providerId: z.ZodString;
            displayName: z.ZodString;
            source: z.ZodEnum<{
                custom: "custom";
                preset: "preset";
            }>;
            installStatus: z.ZodEnum<{
                authorizing: "authorizing";
                configured: "configured";
                connected: "connected";
                error: "error";
            }>;
            authMode: z.ZodEnum<{
                "aws-sigv4": "aws-sigv4";
                headers: "headers";
                none: "none";
                oauth: "oauth";
            }>;
            transport: z.ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            serverUrl: z.ZodString;
            readOnly: z.ZodBoolean;
            management: z.ZodObject<{
                mode: z.ZodEnum<{
                    system: "system";
                    user: "user";
                }>;
                managedBy: z.ZodNullable<z.ZodObject<{
                    type: z.ZodLiteral<"integration">;
                    id: z.ZodString;
                    displayName: z.ZodString;
                    iconKey: z.ZodString;
                }, z.core.$strip>>;
                capabilities: z.ZodObject<{
                    canRename: z.ZodBoolean;
                    canEditCredentials: z.ZodBoolean;
                    canSetReadOnly: z.ZodBoolean;
                    canConfigureTools: z.ZodBoolean;
                    canDisconnect: z.ZodBoolean;
                }, z.core.$strip>;
            }, z.core.$strip>;
            enabledToolCount: z.ZodNumber;
            connectedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly details: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        connector: z.ZodObject<{
            connectionId: z.ZodString;
            connectionKey: z.ZodString;
            providerId: z.ZodString;
            displayName: z.ZodString;
            source: z.ZodEnum<{
                custom: "custom";
                preset: "preset";
            }>;
            installStatus: z.ZodEnum<{
                authorizing: "authorizing";
                configured: "configured";
                connected: "connected";
                error: "error";
            }>;
            authMode: z.ZodEnum<{
                "aws-sigv4": "aws-sigv4";
                headers: "headers";
                none: "none";
                oauth: "oauth";
            }>;
            transport: z.ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            serverUrl: z.ZodString;
            readOnly: z.ZodBoolean;
            management: z.ZodObject<{
                mode: z.ZodEnum<{
                    system: "system";
                    user: "user";
                }>;
                managedBy: z.ZodNullable<z.ZodObject<{
                    type: z.ZodLiteral<"integration">;
                    id: z.ZodString;
                    displayName: z.ZodString;
                    iconKey: z.ZodString;
                }, z.core.$strip>>;
                capabilities: z.ZodObject<{
                    canRename: z.ZodBoolean;
                    canEditCredentials: z.ZodBoolean;
                    canSetReadOnly: z.ZodBoolean;
                    canConfigureTools: z.ZodBoolean;
                    canDisconnect: z.ZodBoolean;
                }, z.core.$strip>;
            }, z.core.$strip>;
            enabledToolCount: z.ZodNumber;
            connectedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
        tools: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            title: z.ZodString;
            description: z.ZodString;
            isReadOnly: z.ZodBoolean;
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listProviders: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        providers: z.ZodArray<z.ZodObject<{
            providerId: z.ZodString;
            label: z.ZodString;
            authMode: z.ZodEnum<{
                "aws-sigv4": "aws-sigv4";
                headers: "headers";
                none: "none";
                oauth: "oauth";
            }>;
            availability: z.ZodEnum<{
                "custom-only": "custom-only";
                disabled: "disabled";
                enabled: "enabled";
            }>;
            setupSkill: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly search: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        query: z.ZodOptional<z.ZodString>;
        namespace: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        includeInputSchema: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodCodec<z.ZodString, z.ZodBoolean>]>>;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodEnum<{
            connectors: "connectors";
            tools: "tools";
        }>;
        total: z.ZodNumber;
        connectors: z.ZodArray<z.ZodObject<{
            connectionKey: z.ZodString;
            displayName: z.ZodString;
            providerId: z.ZodString;
            toolCount: z.ZodNumber;
        }, z.core.$strip>>;
        tools: z.ZodArray<z.ZodObject<{
            connectionKey: z.ZodString;
            toolName: z.ZodString;
            providerId: z.ZodString;
            displayName: z.ZodString;
            isReadOnly: z.ZodBoolean;
            description: z.ZodString;
            score: z.ZodNumber;
            inputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly describe: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        connectionKey: z.ZodString;
        toolName: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        connectionKey: z.ZodString;
        toolName: z.ZodString;
        providerId: z.ZodString;
        displayName: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        isReadOnly: z.ZodBoolean;
        inputSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly call: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        connectionKey: z.ZodString;
        toolName: z.ZodString;
        arguments: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
        ok: z.ZodLiteral<true>;
        connectionKey: z.ZodString;
        toolName: z.ZodString;
        result: z.ZodUnknown;
        structuredContent: z.ZodOptional<z.ZodUnknown>;
        content: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        text: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        ok: z.ZodLiteral<false>;
        code: z.ZodEnum<{
            MCP_ERROR: "MCP_ERROR";
            READ_ONLY: "READ_ONLY";
            TOOL_NOT_ENABLED: "TOOL_NOT_ENABLED";
        }>;
        message: z.ZodString;
    }, z.core.$strip>], "ok">, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        serverUrl: z.ZodString;
        transport: z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>;
        headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>>;
        awsSigV4: z.ZodOptional<z.ZodObject<{
            accessKeyId: z.ZodString;
            secretAccessKey: z.ZodString;
            sessionToken: z.ZodOptional<z.ZodString>;
            region: z.ZodString;
        }, z.core.$strip>>;
        providerId: z.ZodString;
        readOnly: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        connector: z.ZodObject<{
            connectionId: z.ZodString;
            connectionKey: z.ZodString;
            providerId: z.ZodString;
            displayName: z.ZodString;
            source: z.ZodEnum<{
                custom: "custom";
                preset: "preset";
            }>;
            installStatus: z.ZodEnum<{
                authorizing: "authorizing";
                configured: "configured";
                connected: "connected";
                error: "error";
            }>;
            authMode: z.ZodEnum<{
                "aws-sigv4": "aws-sigv4";
                headers: "headers";
                none: "none";
                oauth: "oauth";
            }>;
            transport: z.ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            serverUrl: z.ZodString;
            readOnly: z.ZodBoolean;
            management: z.ZodObject<{
                mode: z.ZodEnum<{
                    system: "system";
                    user: "user";
                }>;
                managedBy: z.ZodNullable<z.ZodObject<{
                    type: z.ZodLiteral<"integration">;
                    id: z.ZodString;
                    displayName: z.ZodString;
                    iconKey: z.ZodString;
                }, z.core.$strip>>;
                capabilities: z.ZodObject<{
                    canRename: z.ZodBoolean;
                    canEditCredentials: z.ZodBoolean;
                    canSetReadOnly: z.ZodBoolean;
                    canConfigureTools: z.ZodBoolean;
                    canDisconnect: z.ZodBoolean;
                }, z.core.$strip>;
            }, z.core.$strip>;
            enabledToolCount: z.ZodNumber;
            connectedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        serverUrl: z.ZodOptional<z.ZodString>;
        transport: z.ZodOptional<z.ZodEnum<{
            sse: "sse";
            "streamable-http": "streamable-http";
        }>>;
        headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>>;
        awsSigV4: z.ZodOptional<z.ZodObject<{
            accessKeyId: z.ZodString;
            secretAccessKey: z.ZodString;
            sessionToken: z.ZodOptional<z.ZodString>;
            region: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        connector: z.ZodObject<{
            connectionId: z.ZodString;
            connectionKey: z.ZodString;
            providerId: z.ZodString;
            displayName: z.ZodString;
            source: z.ZodEnum<{
                custom: "custom";
                preset: "preset";
            }>;
            installStatus: z.ZodEnum<{
                authorizing: "authorizing";
                configured: "configured";
                connected: "connected";
                error: "error";
            }>;
            authMode: z.ZodEnum<{
                "aws-sigv4": "aws-sigv4";
                headers: "headers";
                none: "none";
                oauth: "oauth";
            }>;
            transport: z.ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            serverUrl: z.ZodString;
            readOnly: z.ZodBoolean;
            management: z.ZodObject<{
                mode: z.ZodEnum<{
                    system: "system";
                    user: "user";
                }>;
                managedBy: z.ZodNullable<z.ZodObject<{
                    type: z.ZodLiteral<"integration">;
                    id: z.ZodString;
                    displayName: z.ZodString;
                    iconKey: z.ZodString;
                }, z.core.$strip>>;
                capabilities: z.ZodObject<{
                    canRename: z.ZodBoolean;
                    canEditCredentials: z.ZodBoolean;
                    canSetReadOnly: z.ZodBoolean;
                    canConfigureTools: z.ZodBoolean;
                    canDisconnect: z.ZodBoolean;
                }, z.core.$strip>;
            }, z.core.$strip>;
            enabledToolCount: z.ZodNumber;
            connectedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly disconnect: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly setReadOnly: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        readOnly: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        connector: z.ZodObject<{
            connectionId: z.ZodString;
            connectionKey: z.ZodString;
            providerId: z.ZodString;
            displayName: z.ZodString;
            source: z.ZodEnum<{
                custom: "custom";
                preset: "preset";
            }>;
            installStatus: z.ZodEnum<{
                authorizing: "authorizing";
                configured: "configured";
                connected: "connected";
                error: "error";
            }>;
            authMode: z.ZodEnum<{
                "aws-sigv4": "aws-sigv4";
                headers: "headers";
                none: "none";
                oauth: "oauth";
            }>;
            transport: z.ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            serverUrl: z.ZodString;
            readOnly: z.ZodBoolean;
            management: z.ZodObject<{
                mode: z.ZodEnum<{
                    system: "system";
                    user: "user";
                }>;
                managedBy: z.ZodNullable<z.ZodObject<{
                    type: z.ZodLiteral<"integration">;
                    id: z.ZodString;
                    displayName: z.ZodString;
                    iconKey: z.ZodString;
                }, z.core.$strip>>;
                capabilities: z.ZodObject<{
                    canRename: z.ZodBoolean;
                    canEditCredentials: z.ZodBoolean;
                    canSetReadOnly: z.ZodBoolean;
                    canConfigureTools: z.ZodBoolean;
                    canDisconnect: z.ZodBoolean;
                }, z.core.$strip>;
            }, z.core.$strip>;
            enabledToolCount: z.ZodNumber;
            connectedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly beginOAuthInstall: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        providerId: z.ZodString;
        requestedScopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
        serverUrl: z.ZodOptional<z.ZodString>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        returnTo: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        authorizationUrl: z.ZodString;
        connectionId: z.ZodString;
        expiresAt: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getOAuthInstallAttempt: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodEnum<{
            authorizing: "authorizing";
            connected: "connected";
            error: "error";
        }>;
        connector: z.ZodOptional<z.ZodObject<{
            connectionId: z.ZodString;
            connectionKey: z.ZodString;
            providerId: z.ZodString;
            displayName: z.ZodString;
            source: z.ZodEnum<{
                custom: "custom";
                preset: "preset";
            }>;
            installStatus: z.ZodEnum<{
                authorizing: "authorizing";
                configured: "configured";
                connected: "connected";
                error: "error";
            }>;
            authMode: z.ZodEnum<{
                "aws-sigv4": "aws-sigv4";
                headers: "headers";
                none: "none";
                oauth: "oauth";
            }>;
            transport: z.ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            serverUrl: z.ZodString;
            readOnly: z.ZodBoolean;
            management: z.ZodObject<{
                mode: z.ZodEnum<{
                    system: "system";
                    user: "user";
                }>;
                managedBy: z.ZodNullable<z.ZodObject<{
                    type: z.ZodLiteral<"integration">;
                    id: z.ZodString;
                    displayName: z.ZodString;
                    iconKey: z.ZodString;
                }, z.core.$strip>>;
                capabilities: z.ZodObject<{
                    canRename: z.ZodBoolean;
                    canEditCredentials: z.ZodBoolean;
                    canSetReadOnly: z.ZodBoolean;
                    canConfigureTools: z.ZodBoolean;
                    canDisconnect: z.ZodBoolean;
                }, z.core.$strip>;
            }, z.core.$strip>;
            enabledToolCount: z.ZodNumber;
            connectedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
