import { z } from "zod";
export declare const AutomationTemplateGroupSchema: z.ZodString;
export type AutomationTemplateGroup = z.infer<typeof AutomationTemplateGroupSchema>;
export declare const AutomationTemplateKindSchema: z.ZodEnum<{
    script: "script";
    signal: "signal";
}>;
export type AutomationTemplateKind = z.infer<typeof AutomationTemplateKindSchema>;
export declare const AutomationTemplateSchema: z.ZodObject<{
    id: z.ZodString;
    templateGroup: z.ZodString;
    kind: z.ZodEnum<{
        script: "script";
        signal: "signal";
    }>;
    name: z.ZodString;
    description: z.ZodString;
    prerequisites: z.ZodArray<z.ZodObject<{
        anyOf: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                integration: "integration";
                log_source: "log_source";
                mcp_connector: "mcp_connector";
                repository: "repository";
                sandbox_cli: "sandbox_cli";
            }>;
            key: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    inputSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodEnum<{
            boolean: "boolean";
            number: "number";
            string: "string";
        }>;
        required: z.ZodOptional<z.ZodBoolean>;
        default: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    }, z.core.$strip>>;
    defaultCron: z.ZodNullable<z.ZodString>;
    expression: z.ZodNullable<z.ZodString>;
    version: z.ZodNumber;
    publishedAt: z.ZodString;
}, z.core.$strip>;
export type AutomationTemplate = z.infer<typeof AutomationTemplateSchema>;
export declare const ListAutomationTemplatesInputSchema: z.ZodObject<{}, z.core.$strip>;
export type ListAutomationTemplatesInput = z.infer<typeof ListAutomationTemplatesInputSchema>;
export declare const ListAutomationTemplatesOutputSchema: z.ZodObject<{
    templates: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        templateGroup: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
            signal: "signal";
        }>;
        name: z.ZodString;
        description: z.ZodString;
        prerequisites: z.ZodArray<z.ZodObject<{
            anyOf: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    integration: "integration";
                    log_source: "log_source";
                    mcp_connector: "mcp_connector";
                    repository: "repository";
                    sandbox_cli: "sandbox_cli";
                }>;
                key: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        inputSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodEnum<{
                boolean: "boolean";
                number: "number";
                string: "string";
            }>;
            required: z.ZodOptional<z.ZodBoolean>;
            default: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        }, z.core.$strip>>;
        defaultCron: z.ZodNullable<z.ZodString>;
        expression: z.ZodNullable<z.ZodString>;
        version: z.ZodNumber;
        publishedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListAutomationTemplatesOutput = z.infer<typeof ListAutomationTemplatesOutputSchema>;
export declare const listAutomationTemplates: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    templates: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        templateGroup: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
            signal: "signal";
        }>;
        name: z.ZodString;
        description: z.ZodString;
        prerequisites: z.ZodArray<z.ZodObject<{
            anyOf: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    integration: "integration";
                    log_source: "log_source";
                    mcp_connector: "mcp_connector";
                    repository: "repository";
                    sandbox_cli: "sandbox_cli";
                }>;
                key: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        inputSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodEnum<{
                boolean: "boolean";
                number: "number";
                string: "string";
            }>;
            required: z.ZodOptional<z.ZodBoolean>;
            default: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        }, z.core.$strip>>;
        defaultCron: z.ZodNullable<z.ZodString>;
        expression: z.ZodNullable<z.ZodString>;
        version: z.ZodNumber;
        publishedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const InstallAutomationTemplateInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    templateId: z.ZodString;
    expectedVersion: z.ZodNumber;
    name: z.ZodString;
    inputs: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    enabled: z.ZodBoolean;
}, z.core.$strict>;
export type InstallAutomationTemplateInput = z.infer<typeof InstallAutomationTemplateInputSchema>;
export declare const InstallAutomationTemplateOutputSchema: z.ZodObject<{
    automationId: z.ZodString;
    configurationRevision: z.ZodNumber;
}, z.core.$strip>;
export type InstallAutomationTemplateOutput = z.infer<typeof InstallAutomationTemplateOutputSchema>;
export declare const installAutomationTemplate: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    templateId: z.ZodString;
    expectedVersion: z.ZodNumber;
    name: z.ZodString;
    inputs: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    enabled: z.ZodBoolean;
}, z.core.$strict>, z.ZodObject<{
    automationId: z.ZodString;
    configurationRevision: z.ZodNumber;
}, z.core.$strip>, "api">;
export declare const GetAutomationTemplateReadinessInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    templateId: z.ZodString;
    expectedVersion: z.ZodCoercedNumber<unknown>;
}, z.core.$strict>;
export type GetAutomationTemplateReadinessInput = z.infer<typeof GetAutomationTemplateReadinessInputSchema>;
export declare const GetAutomationTemplateReadinessOutputSchema: z.ZodObject<{
    templateVersion: z.ZodNumber;
    ready: z.ZodBoolean;
    unmet: z.ZodArray<z.ZodObject<{
        anyOf: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                integration: "integration";
                log_source: "log_source";
                mcp_connector: "mcp_connector";
                repository: "repository";
                sandbox_cli: "sandbox_cli";
            }>;
            key: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetAutomationTemplateReadinessOutput = z.infer<typeof GetAutomationTemplateReadinessOutputSchema>;
export declare const getAutomationTemplateReadiness: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    templateId: z.ZodString;
    expectedVersion: z.ZodCoercedNumber<unknown>;
}, z.core.$strict>, z.ZodObject<{
    templateVersion: z.ZodNumber;
    ready: z.ZodBoolean;
    unmet: z.ZodArray<z.ZodObject<{
        anyOf: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                integration: "integration";
                log_source: "log_source";
                mcp_connector: "mcp_connector";
                repository: "repository";
                sandbox_cli: "sandbox_cli";
            }>;
            key: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const automationTemplatesContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        templates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            templateGroup: z.ZodString;
            kind: z.ZodEnum<{
                script: "script";
                signal: "signal";
            }>;
            name: z.ZodString;
            description: z.ZodString;
            prerequisites: z.ZodArray<z.ZodObject<{
                anyOf: z.ZodArray<z.ZodObject<{
                    kind: z.ZodEnum<{
                        integration: "integration";
                        log_source: "log_source";
                        mcp_connector: "mcp_connector";
                        repository: "repository";
                        sandbox_cli: "sandbox_cli";
                    }>;
                    key: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            inputSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<{
                    boolean: "boolean";
                    number: "number";
                    string: "string";
                }>;
                required: z.ZodOptional<z.ZodBoolean>;
                default: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            }, z.core.$strip>>;
            defaultCron: z.ZodNullable<z.ZodString>;
            expression: z.ZodNullable<z.ZodString>;
            version: z.ZodNumber;
            publishedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly install: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        templateId: z.ZodString;
        expectedVersion: z.ZodNumber;
        name: z.ZodString;
        inputs: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        enabled: z.ZodBoolean;
    }, z.core.$strict>, z.ZodObject<{
        automationId: z.ZodString;
        configurationRevision: z.ZodNumber;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly readiness: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        templateId: z.ZodString;
        expectedVersion: z.ZodCoercedNumber<unknown>;
    }, z.core.$strict>, z.ZodObject<{
        templateVersion: z.ZodNumber;
        ready: z.ZodBoolean;
        unmet: z.ZodArray<z.ZodObject<{
            anyOf: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    integration: "integration";
                    log_source: "log_source";
                    mcp_connector: "mcp_connector";
                    repository: "repository";
                    sandbox_cli: "sandbox_cli";
                }>;
                key: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
