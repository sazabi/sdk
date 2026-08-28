/**
 * Public API contracts for sandbox CLI preset inspection.
 *
 * These operations are read-only. They expose the available sandbox CLI
 * presets with their environment variable requirements and setup skills,
 * without returning any secret material.
 */
import { z } from "zod";
/**
 * One sandbox CLI preset type in the catalog.
 */
export declare const SandboxPresetTypeInfoSchema: z.ZodObject<{
    type: z.ZodString;
    label: z.ZodString;
    executableNames: z.ZodArray<z.ZodString>;
    envVarKeys: z.ZodArray<z.ZodString>;
    setupSkill: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type SandboxPresetTypeInfo = z.infer<typeof SandboxPresetTypeInfoSchema>;
export declare const ListSandboxPresetTypesInputSchema: z.ZodObject<{}, z.core.$strip>;
export declare const ListSandboxPresetTypesOutputSchema: z.ZodObject<{
    types: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        label: z.ZodString;
        executableNames: z.ZodArray<z.ZodString>;
        envVarKeys: z.ZodArray<z.ZodString>;
        setupSkill: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListSandboxPresetTypesOutput = z.infer<typeof ListSandboxPresetTypesOutputSchema>;
export declare const listSandboxPresetTypes: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    types: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        label: z.ZodString;
        executableNames: z.ZodArray<z.ZodString>;
        envVarKeys: z.ZodArray<z.ZodString>;
        setupSkill: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const SandboxPresetCredentialSourceSchema: z.ZodEnum<{
    bitbucket_integration: "bitbucket_integration";
    github_app: "github_app";
    personal_access_token: "personal_access_token";
    stored_credentials: "stored_credentials";
    tailscale_federated_identity: "tailscale_federated_identity";
}>;
export declare const SandboxPresetConnectionSchema: z.ZodObject<{
    presetType: z.ZodString;
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
export type SandboxPresetConnection = z.infer<typeof SandboxPresetConnectionSchema>;
export declare const ListSandboxPresetConnectionsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListSandboxPresetConnectionsOutputSchema: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        presetType: z.ZodString;
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
export type ListSandboxPresetConnectionsInput = z.infer<typeof ListSandboxPresetConnectionsInputSchema>;
export type ListSandboxPresetConnectionsOutput = z.infer<typeof ListSandboxPresetConnectionsOutputSchema>;
export declare const listSandboxPresetConnections: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        presetType: z.ZodString;
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
 * One preset environment variable (name + secret value).
 *
 * `value` is write-only credential material. It is accepted on input, encrypted
 * server-side, and NEVER returned in any response.
 */
export declare const SandboxPresetEnvVarSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export declare const UpsertSandboxPresetInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    presetType: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Response intentionally excludes all env var values — only the resulting key
 * names are echoed back so callers can confirm what was stored.
 */
export declare const UpsertSandboxPresetOutputSchema: z.ZodObject<{
    projectId: z.ZodString;
    presetType: z.ZodString;
    envVarKeys: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type UpsertSandboxPresetInput = z.infer<typeof UpsertSandboxPresetInputSchema>;
export type UpsertSandboxPresetOutput = z.infer<typeof UpsertSandboxPresetOutputSchema>;
export declare const upsertSandboxPreset: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    presetType: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    presetType: z.ZodString;
    envVarKeys: z.ZodArray<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const DeleteSandboxPresetInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    presetType: z.ZodString;
}, z.core.$strip>;
export declare const DeleteSandboxPresetOutputSchema: z.ZodObject<{
    projectId: z.ZodString;
    presetType: z.ZodString;
    deleted: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteSandboxPresetInput = z.infer<typeof DeleteSandboxPresetInputSchema>;
export type DeleteSandboxPresetOutput = z.infer<typeof DeleteSandboxPresetOutputSchema>;
export declare const deleteSandboxPreset: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    presetType: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    presetType: z.ZodString;
    deleted: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const TestSandboxPresetInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    presetType: z.ZodString;
    environmentVariables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const TestSandboxPresetOutputSchema: z.ZodObject<{
    status: z.ZodEnum<{
        failed: "failed";
        success: "success";
    }>;
    message: z.ZodNullable<z.ZodString>;
    stdout: z.ZodString;
    stderr: z.ZodString;
}, z.core.$strip>;
export type TestSandboxPresetInput = z.infer<typeof TestSandboxPresetInputSchema>;
export type TestSandboxPresetOutput = z.infer<typeof TestSandboxPresetOutputSchema>;
export declare const testSandboxPreset: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    presetType: z.ZodString;
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
export declare const sandboxPresetsContract: {
    readonly deletePreset: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        presetType: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        projectId: z.ZodString;
        presetType: z.ZodString;
        deleted: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listConnections: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        connections: z.ZodArray<z.ZodObject<{
            presetType: z.ZodString;
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
    readonly testPreset: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        presetType: z.ZodString;
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
    readonly upsertPreset: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        presetType: z.ZodString;
        environmentVariables: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        projectId: z.ZodString;
        presetType: z.ZodString;
        envVarKeys: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
