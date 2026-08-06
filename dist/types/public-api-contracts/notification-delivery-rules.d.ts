import { z } from "zod";
export declare const DeliveryRuleSeveritySchema: z.ZodEnum<{
    critical: "critical";
    high: "high";
    low: "low";
    medium: "medium";
}>;
export declare const DeliveryRuleConditionSchema: z.ZodObject<{
    componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        critical: "critical";
        high: "high";
        low: "low";
        medium: "medium";
    }>>>;
}, z.core.$strict>;
export declare const DeliveryRuleDestinationInputSchema: z.ZodObject<{
    channel: z.ZodEnum<{
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack_channel: "slack_channel";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>;
    destinationKey: z.ZodString;
}, z.core.$strip>;
export declare const DeliveryRuleDefinitionSchema: z.ZodObject<{
    destinations: z.ZodArray<z.ZodObject<{
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
    }, z.core.$strip>>;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
}, z.core.$strip>;
export declare const DeliveryRuleDestinationSchema: z.ZodObject<{
    id: z.ZodString;
    channel: z.ZodEnum<{
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack_channel: "slack_channel";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>;
    destinationKey: z.ZodString;
    displayName: z.ZodString;
}, z.core.$strip>;
export declare const DeliveryRuleComponentSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
}, z.core.$strip>;
export declare const ProjectDeliveryRuleSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type ProjectDeliveryRule = z.infer<typeof ProjectDeliveryRuleSchema>;
export declare const ListDeliveryRulesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListDeliveryRulesOutputSchema: z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        notificationTypes: z.ZodArray<z.ZodEnum<{
            automation_run_failed: "automation_run_failed";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
        }>>;
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodEnum<{
                incident_io: "incident_io";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack_channel: "slack_channel";
                teams_channel: "teams_channel";
                webhook: "webhook";
            }>;
            destinationKey: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>>;
        condition: z.ZodObject<{
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>>;
        }, z.core.$strict>;
        components: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const DeliveryRuleOptionsOutputSchema: z.ZodObject<{
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    notificationTypes: z.ZodArray<z.ZodObject<{
        notificationType: z.ZodEnum<{
            automation_run_failed: "automation_run_failed";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
        }>;
        label: z.ZodString;
        conditions: z.ZodArray<z.ZodEnum<{
            component: "component";
            severity: "severity";
        }>>;
    }, z.core.$strip>>;
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CreateDeliveryRuleInputSchema: z.ZodObject<{
    destinations: z.ZodArray<z.ZodObject<{
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
    }, z.core.$strip>>;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CreateDeliveryRuleOutputSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const UpdateDeliveryRuleInputSchema: z.ZodObject<{
    destinations: z.ZodArray<z.ZodObject<{
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
    }, z.core.$strip>>;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>;
export declare const UpdateDeliveryRuleOutputSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const DeleteDeliveryRuleInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteDeliveryRuleOutputSchema: z.ZodObject<{
    removed: z.ZodBoolean;
}, z.core.$strip>;
export type ListDeliveryRulesInput = z.infer<typeof ListDeliveryRulesInputSchema>;
export type ListDeliveryRulesOutput = z.infer<typeof ListDeliveryRulesOutputSchema>;
export type CreateDeliveryRuleInput = z.infer<typeof CreateDeliveryRuleInputSchema>;
export type CreateDeliveryRuleOutput = z.infer<typeof CreateDeliveryRuleOutputSchema>;
export type UpdateDeliveryRuleInput = z.infer<typeof UpdateDeliveryRuleInputSchema>;
export type UpdateDeliveryRuleOutput = z.infer<typeof UpdateDeliveryRuleOutputSchema>;
export type DeleteDeliveryRuleInput = z.infer<typeof DeleteDeliveryRuleInputSchema>;
export type DeleteDeliveryRuleOutput = z.infer<typeof DeleteDeliveryRuleOutputSchema>;
export declare const listDeliveryRules: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        notificationTypes: z.ZodArray<z.ZodEnum<{
            automation_run_failed: "automation_run_failed";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
        }>>;
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodEnum<{
                incident_io: "incident_io";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack_channel: "slack_channel";
                teams_channel: "teams_channel";
                webhook: "webhook";
            }>;
            destinationKey: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>>;
        condition: z.ZodObject<{
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>>;
        }, z.core.$strict>;
        components: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const getDeliveryRuleOptions: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    notificationTypes: z.ZodArray<z.ZodObject<{
        notificationType: z.ZodEnum<{
            automation_run_failed: "automation_run_failed";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
        }>;
        label: z.ZodString;
        conditions: z.ZodArray<z.ZodEnum<{
            component: "component";
            severity: "severity";
        }>>;
    }, z.core.$strip>>;
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const createDeliveryRule: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    destinations: z.ZodArray<z.ZodObject<{
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
    }, z.core.$strip>>;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const updateDeliveryRule: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    destinations: z.ZodArray<z.ZodObject<{
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
    }, z.core.$strip>>;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    notificationTypes: z.ZodArray<z.ZodEnum<{
        automation_run_failed: "automation_run_failed";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
    }>>;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodEnum<{
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>;
        destinationKey: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    condition: z.ZodObject<{
        componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            critical: "critical";
            high: "high";
            low: "low";
            medium: "medium";
        }>>>;
    }, z.core.$strict>;
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const deleteDeliveryRule: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    removed: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const notificationDeliveryRulesContract: {
    list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        rules: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            notificationTypes: z.ZodArray<z.ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            destinations: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                channel: z.ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: z.ZodString;
                displayName: z.ZodString;
            }, z.core.$strip>>;
            condition: z.ZodObject<{
                componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
                severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, z.core.$strict>;
            components: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
            }, z.core.$strip>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    options: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodEnum<{
                incident_io: "incident_io";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack_channel: "slack_channel";
                teams_channel: "teams_channel";
                webhook: "webhook";
            }>;
            destinationKey: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>>;
        notificationTypes: z.ZodArray<z.ZodObject<{
            notificationType: z.ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>;
            label: z.ZodString;
            conditions: z.ZodArray<z.ZodEnum<{
                component: "component";
                severity: "severity";
            }>>;
        }, z.core.$strip>>;
        components: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        destinations: z.ZodArray<z.ZodObject<{
            channel: z.ZodEnum<{
                incident_io: "incident_io";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack_channel: "slack_channel";
                teams_channel: "teams_channel";
                webhook: "webhook";
            }>;
            destinationKey: z.ZodString;
        }, z.core.$strip>>;
        notificationTypes: z.ZodArray<z.ZodEnum<{
            automation_run_failed: "automation_run_failed";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
        }>>;
        condition: z.ZodObject<{
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>>;
        }, z.core.$strict>;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        notificationTypes: z.ZodArray<z.ZodEnum<{
            automation_run_failed: "automation_run_failed";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
        }>>;
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodEnum<{
                incident_io: "incident_io";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack_channel: "slack_channel";
                teams_channel: "teams_channel";
                webhook: "webhook";
            }>;
            destinationKey: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>>;
        condition: z.ZodObject<{
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>>;
        }, z.core.$strict>;
        components: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        destinations: z.ZodArray<z.ZodObject<{
            channel: z.ZodEnum<{
                incident_io: "incident_io";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack_channel: "slack_channel";
                teams_channel: "teams_channel";
                webhook: "webhook";
            }>;
            destinationKey: z.ZodString;
        }, z.core.$strip>>;
        notificationTypes: z.ZodArray<z.ZodEnum<{
            automation_run_failed: "automation_run_failed";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
        }>>;
        condition: z.ZodObject<{
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>>;
        }, z.core.$strict>;
        projectId: z.ZodOptional<z.ZodString>;
        ruleId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        notificationTypes: z.ZodArray<z.ZodEnum<{
            automation_run_failed: "automation_run_failed";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
        }>>;
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodEnum<{
                incident_io: "incident_io";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack_channel: "slack_channel";
                teams_channel: "teams_channel";
                webhook: "webhook";
            }>;
            destinationKey: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>>;
        condition: z.ZodObject<{
            componentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            severities: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>>;
        }, z.core.$strict>;
        components: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        ruleId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        removed: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
