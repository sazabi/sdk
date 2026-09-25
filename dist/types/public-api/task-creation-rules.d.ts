import { z } from "zod";
export declare const TASK_RULE_PROVIDERS: readonly ["linear", "jira", "github"];
export declare const TaskCreationRuleProviderSchema: z.ZodEnum<{
    github: "github";
    jira: "jira";
    linear: "linear";
}>;
export type TaskCreationRuleProvider = z.infer<typeof TaskCreationRuleProviderSchema>;
export declare const TASK_RULE_SEVERITIES: readonly ["low", "medium", "high", "critical"];
export declare const TaskCreationRuleSeveritySchema: z.ZodEnum<{
    critical: "critical";
    high: "high";
    low: "low";
    medium: "medium";
}>;
export type TaskCreationRuleSeverity = z.infer<typeof TaskCreationRuleSeveritySchema>;
export declare const TaskCreationRuleConditionSchema: z.ZodObject<{
    minSeverity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>;
    componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    includeDescendants: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export type TaskCreationRuleCondition = z.infer<typeof TaskCreationRuleConditionSchema>;
export declare const TaskCreationRuleSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    connectionId: z.ZodString;
    enabled: z.ZodBoolean;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    defaultItemType: z.ZodNullable<z.ZodString>;
    defaultState: z.ZodNullable<z.ZodString>;
    priority: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type TaskCreationRule = z.infer<typeof TaskCreationRuleSchema>;
export declare const ListTaskCreationRulesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListTaskCreationRulesInput = z.infer<typeof ListTaskCreationRulesInputSchema>;
export declare const ListTaskCreationRulesOutputSchema: z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        connectionId: z.ZodString;
        enabled: z.ZodBoolean;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        containerId: z.ZodString;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
        defaultItemType: z.ZodNullable<z.ZodString>;
        defaultState: z.ZodNullable<z.ZodString>;
        priority: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListTaskCreationRulesOutput = z.infer<typeof ListTaskCreationRulesOutputSchema>;
export declare const listTaskCreationRules: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        connectionId: z.ZodString;
        enabled: z.ZodBoolean;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        containerId: z.ZodString;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
        defaultItemType: z.ZodNullable<z.ZodString>;
        defaultState: z.ZodNullable<z.ZodString>;
        priority: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const GetTaskCreationRuleInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>;
export type GetTaskCreationRuleInput = z.infer<typeof GetTaskCreationRuleInputSchema>;
export declare const GetTaskCreationRuleOutputSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    connectionId: z.ZodString;
    enabled: z.ZodBoolean;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    defaultItemType: z.ZodNullable<z.ZodString>;
    defaultState: z.ZodNullable<z.ZodString>;
    priority: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type GetTaskCreationRuleOutput = z.infer<typeof GetTaskCreationRuleOutputSchema>;
export declare const getTaskCreationRule: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    connectionId: z.ZodString;
    enabled: z.ZodBoolean;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    defaultItemType: z.ZodNullable<z.ZodString>;
    defaultState: z.ZodNullable<z.ZodString>;
    priority: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const CreateTaskCreationRuleInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodOptional<z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    defaultItemType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultState: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type CreateTaskCreationRuleInput = z.infer<typeof CreateTaskCreationRuleInputSchema>;
export declare const CreateTaskCreationRuleOutputSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    connectionId: z.ZodString;
    enabled: z.ZodBoolean;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    defaultItemType: z.ZodNullable<z.ZodString>;
    defaultState: z.ZodNullable<z.ZodString>;
    priority: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type CreateTaskCreationRuleOutput = z.infer<typeof CreateTaskCreationRuleOutputSchema>;
export declare const createTaskCreationRule: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodString;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodOptional<z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    defaultItemType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultState: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    connectionId: z.ZodString;
    enabled: z.ZodBoolean;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    defaultItemType: z.ZodNullable<z.ZodString>;
    defaultState: z.ZodNullable<z.ZodString>;
    priority: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const UpdateTaskCreationRuleConditionSchema: z.ZodObject<{
    minSeverity: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>>;
    componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    includeDescendants: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export type UpdateTaskCreationRuleCondition = z.infer<typeof UpdateTaskCreationRuleConditionSchema>;
export declare const UpdateTaskCreationRuleInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
    connectionId: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>>;
    containerId: z.ZodOptional<z.ZodString>;
    condition: z.ZodOptional<z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    defaultItemType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultState: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type UpdateTaskCreationRuleInput = z.infer<typeof UpdateTaskCreationRuleInputSchema>;
export declare const UpdateTaskCreationRuleOutputSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    connectionId: z.ZodString;
    enabled: z.ZodBoolean;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    defaultItemType: z.ZodNullable<z.ZodString>;
    defaultState: z.ZodNullable<z.ZodString>;
    priority: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type UpdateTaskCreationRuleOutput = z.infer<typeof UpdateTaskCreationRuleOutputSchema>;
export declare const updateTaskCreationRule: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
    connectionId: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>>;
    containerId: z.ZodOptional<z.ZodString>;
    condition: z.ZodOptional<z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    defaultItemType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultState: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    connectionId: z.ZodString;
    enabled: z.ZodBoolean;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    containerId: z.ZodString;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>;
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        includeDescendants: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    defaultItemType: z.ZodNullable<z.ZodString>;
    defaultState: z.ZodNullable<z.ZodString>;
    priority: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const DeleteTaskCreationRuleInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>;
export type DeleteTaskCreationRuleInput = z.infer<typeof DeleteTaskCreationRuleInputSchema>;
export declare const DeleteTaskCreationRuleOutputSchema: z.ZodObject<{
    removed: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteTaskCreationRuleOutput = z.infer<typeof DeleteTaskCreationRuleOutputSchema>;
export declare const deleteTaskCreationRule: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    removed: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const ReorderTaskCreationRulesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    orderedRuleIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ReorderTaskCreationRulesInput = z.infer<typeof ReorderTaskCreationRulesInputSchema>;
export declare const ReorderTaskCreationRulesOutputSchema: z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        connectionId: z.ZodString;
        enabled: z.ZodBoolean;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        containerId: z.ZodString;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
        defaultItemType: z.ZodNullable<z.ZodString>;
        defaultState: z.ZodNullable<z.ZodString>;
        priority: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ReorderTaskCreationRulesOutput = z.infer<typeof ReorderTaskCreationRulesOutputSchema>;
export declare const reorderTaskCreationRules: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    orderedRuleIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        connectionId: z.ZodString;
        enabled: z.ZodBoolean;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        containerId: z.ZodString;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
        defaultItemType: z.ZodNullable<z.ZodString>;
        defaultState: z.ZodNullable<z.ZodString>;
        priority: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const taskCreationRulesContract: {
    list: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        rules: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            connectionId: z.ZodString;
            enabled: z.ZodBoolean;
            provider: z.ZodEnum<{
                github: "github";
                jira: "jira";
                linear: "linear";
            }>;
            containerId: z.ZodString;
            condition: z.ZodObject<{
                minSeverity: z.ZodOptional<z.ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>;
                componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
                includeDescendants: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>;
            defaultItemType: z.ZodNullable<z.ZodString>;
            defaultState: z.ZodNullable<z.ZodString>;
            priority: z.ZodNumber;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, "api">;
    get: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        ruleId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        connectionId: z.ZodString;
        enabled: z.ZodBoolean;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        containerId: z.ZodString;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
        defaultItemType: z.ZodNullable<z.ZodString>;
        defaultState: z.ZodNullable<z.ZodString>;
        priority: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>, "api">;
    create: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        connectionId: z.ZodString;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        containerId: z.ZodString;
        condition: z.ZodOptional<z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        defaultItemType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultState: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priority: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        connectionId: z.ZodString;
        enabled: z.ZodBoolean;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        containerId: z.ZodString;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
        defaultItemType: z.ZodNullable<z.ZodString>;
        defaultState: z.ZodNullable<z.ZodString>;
        priority: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>, "api">;
    update: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        ruleId: z.ZodString;
        connectionId: z.ZodOptional<z.ZodString>;
        provider: z.ZodOptional<z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>>;
        containerId: z.ZodOptional<z.ZodString>;
        condition: z.ZodOptional<z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        defaultItemType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultState: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priority: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        connectionId: z.ZodString;
        enabled: z.ZodBoolean;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        containerId: z.ZodString;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            includeDescendants: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
        defaultItemType: z.ZodNullable<z.ZodString>;
        defaultState: z.ZodNullable<z.ZodString>;
        priority: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>, "api">;
    delete: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        ruleId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        removed: z.ZodBoolean;
    }, z.core.$strip>, "api">;
    reorder: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        orderedRuleIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        rules: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            connectionId: z.ZodString;
            enabled: z.ZodBoolean;
            provider: z.ZodEnum<{
                github: "github";
                jira: "jira";
                linear: "linear";
            }>;
            containerId: z.ZodString;
            condition: z.ZodObject<{
                minSeverity: z.ZodOptional<z.ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>;
                componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
                includeDescendants: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>;
            defaultItemType: z.ZodNullable<z.ZodString>;
            defaultState: z.ZodNullable<z.ZodString>;
            priority: z.ZodNumber;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, "api">;
};
