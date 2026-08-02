import { z } from "zod";
/**
 * Delivery rules (the notification-delivery-rules design): project-scoped,
 * delivery-side conditions evaluated after the preference gates. Suppress
 * rules gate a channel; route rules select a subset of the project's
 * configured destinations. Rules only ever narrow the preference result.
 */
export declare const DeliveryRuleConditionSchema: z.ZodObject<{
    minSeverity: z.ZodOptional<z.ZodEnum<{
        critical: "critical";
        high: "high";
        medium: "medium";
    }>>;
    component: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const DeliveryRuleDestinationSchema: z.ZodObject<{
    id: z.ZodString;
    channel: z.ZodString;
    destinationKey: z.ZodString;
    displayName: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const RouteRuleDestinationInputSchema: z.ZodObject<{
    channel: z.ZodEnum<{
        slack_channel: "slack_channel";
        teams_channel: "teams_channel";
    }>;
    destinationKey: z.ZodString;
}, z.core.$strip>;
export declare const ProjectDeliveryRuleSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    channel: z.ZodNullable<z.ZodEnum<{
        email: "email";
        in_app: "in_app";
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        slack_channel: "slack_channel";
        sms: "sms";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>>;
    notificationType: z.ZodNullable<z.ZodEnum<{
        automation_finished: "automation_finished";
        automation_run_failed: "automation_run_failed";
        billing_auto_top_up_failed: "billing_auto_top_up_failed";
        billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
        billing_credit_balance_depleted: "billing_credit_balance_depleted";
        billing_credit_balance_low: "billing_credit_balance_low";
        billing_invoice_paid: "billing_invoice_paid";
        billing_negative_balance_collected: "billing_negative_balance_collected";
        billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
        billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
        billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
        billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
        code_repo_connected: "code_repo_connected";
        code_repo_disconnected: "code_repo_disconnected";
        data_source_connected: "data_source_connected";
        data_source_disconnected: "data_source_disconnected";
        github_connected: "github_connected";
        github_disconnected: "github_disconnected";
        integration_connected: "integration_connected";
        integration_disconnected: "integration_disconnected";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
        mcp_connector_added: "mcp_connector_added";
        mcp_connector_removed: "mcp_connector_removed";
        member_invited: "member_invited";
        project_created: "project_created";
        project_deleted: "project_deleted";
        public_key_deactivated: "public_key_deactivated";
        sandbox_created: "sandbox_created";
        sandbox_deleted: "sandbox_deleted";
        secret_key_created: "secret_key_created";
        secret_key_deleted: "secret_key_deleted";
        security_alert: "security_alert";
        user_removed: "user_removed";
    }>>;
    priority: z.ZodNumber;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            medium: "medium";
        }>>;
        component: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    outcome: z.ZodEnum<{
        route: "route";
        suppress: "suppress";
    }>;
    enabled: z.ZodBoolean;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodString;
        destinationKey: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
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
        channel: z.ZodNullable<z.ZodEnum<{
            email: "email";
            in_app: "in_app";
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            slack_channel: "slack_channel";
            sms: "sms";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>>;
        notificationType: z.ZodNullable<z.ZodEnum<{
            automation_finished: "automation_finished";
            automation_run_failed: "automation_run_failed";
            billing_auto_top_up_failed: "billing_auto_top_up_failed";
            billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
            billing_credit_balance_depleted: "billing_credit_balance_depleted";
            billing_credit_balance_low: "billing_credit_balance_low";
            billing_invoice_paid: "billing_invoice_paid";
            billing_negative_balance_collected: "billing_negative_balance_collected";
            billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
            billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
            billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
            billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
            code_repo_connected: "code_repo_connected";
            code_repo_disconnected: "code_repo_disconnected";
            data_source_connected: "data_source_connected";
            data_source_disconnected: "data_source_disconnected";
            github_connected: "github_connected";
            github_disconnected: "github_disconnected";
            integration_connected: "integration_connected";
            integration_disconnected: "integration_disconnected";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
            mcp_connector_added: "mcp_connector_added";
            mcp_connector_removed: "mcp_connector_removed";
            member_invited: "member_invited";
            project_created: "project_created";
            project_deleted: "project_deleted";
            public_key_deactivated: "public_key_deactivated";
            sandbox_created: "sandbox_created";
            sandbox_deleted: "sandbox_deleted";
            secret_key_created: "secret_key_created";
            secret_key_deleted: "secret_key_deleted";
            security_alert: "security_alert";
            user_removed: "user_removed";
        }>>;
        priority: z.ZodNumber;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                medium: "medium";
            }>>;
            component: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>;
        outcome: z.ZodEnum<{
            route: "route";
            suppress: "suppress";
        }>;
        enabled: z.ZodBoolean;
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodString;
            destinationKey: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListDeliveryRulesInput = z.infer<typeof ListDeliveryRulesInputSchema>;
export type ListDeliveryRulesOutput = z.infer<typeof ListDeliveryRulesOutputSchema>;
export declare const CreateDeliveryRuleInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    outcome: z.ZodEnum<{
        route: "route";
        suppress: "suppress";
    }>;
    channel: z.ZodNullable<z.ZodEnum<{
        email: "email";
        in_app: "in_app";
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        slack_channel: "slack_channel";
        sms: "sms";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>>;
    notificationType: z.ZodNullable<z.ZodEnum<{
        automation_finished: "automation_finished";
        automation_run_failed: "automation_run_failed";
        billing_auto_top_up_failed: "billing_auto_top_up_failed";
        billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
        billing_credit_balance_depleted: "billing_credit_balance_depleted";
        billing_credit_balance_low: "billing_credit_balance_low";
        billing_invoice_paid: "billing_invoice_paid";
        billing_negative_balance_collected: "billing_negative_balance_collected";
        billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
        billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
        billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
        billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
        code_repo_connected: "code_repo_connected";
        code_repo_disconnected: "code_repo_disconnected";
        data_source_connected: "data_source_connected";
        data_source_disconnected: "data_source_disconnected";
        github_connected: "github_connected";
        github_disconnected: "github_disconnected";
        integration_connected: "integration_connected";
        integration_disconnected: "integration_disconnected";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
        mcp_connector_added: "mcp_connector_added";
        mcp_connector_removed: "mcp_connector_removed";
        member_invited: "member_invited";
        project_created: "project_created";
        project_deleted: "project_deleted";
        public_key_deactivated: "public_key_deactivated";
        sandbox_created: "sandbox_created";
        sandbox_deleted: "sandbox_deleted";
        secret_key_created: "secret_key_created";
        secret_key_deleted: "secret_key_deleted";
        security_alert: "security_alert";
        user_removed: "user_removed";
    }>>;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            medium: "medium";
        }>>;
        component: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    destinations: z.ZodDefault<z.ZodArray<z.ZodObject<{
        channel: z.ZodEnum<{
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
        }>;
        destinationKey: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const CreateDeliveryRuleOutputSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    channel: z.ZodNullable<z.ZodEnum<{
        email: "email";
        in_app: "in_app";
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        slack_channel: "slack_channel";
        sms: "sms";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>>;
    notificationType: z.ZodNullable<z.ZodEnum<{
        automation_finished: "automation_finished";
        automation_run_failed: "automation_run_failed";
        billing_auto_top_up_failed: "billing_auto_top_up_failed";
        billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
        billing_credit_balance_depleted: "billing_credit_balance_depleted";
        billing_credit_balance_low: "billing_credit_balance_low";
        billing_invoice_paid: "billing_invoice_paid";
        billing_negative_balance_collected: "billing_negative_balance_collected";
        billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
        billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
        billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
        billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
        code_repo_connected: "code_repo_connected";
        code_repo_disconnected: "code_repo_disconnected";
        data_source_connected: "data_source_connected";
        data_source_disconnected: "data_source_disconnected";
        github_connected: "github_connected";
        github_disconnected: "github_disconnected";
        integration_connected: "integration_connected";
        integration_disconnected: "integration_disconnected";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
        mcp_connector_added: "mcp_connector_added";
        mcp_connector_removed: "mcp_connector_removed";
        member_invited: "member_invited";
        project_created: "project_created";
        project_deleted: "project_deleted";
        public_key_deactivated: "public_key_deactivated";
        sandbox_created: "sandbox_created";
        sandbox_deleted: "sandbox_deleted";
        secret_key_created: "secret_key_created";
        secret_key_deleted: "secret_key_deleted";
        security_alert: "security_alert";
        user_removed: "user_removed";
    }>>;
    priority: z.ZodNumber;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            medium: "medium";
        }>>;
        component: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    outcome: z.ZodEnum<{
        route: "route";
        suppress: "suppress";
    }>;
    enabled: z.ZodBoolean;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodString;
        destinationKey: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type CreateDeliveryRuleInput = z.infer<typeof CreateDeliveryRuleInputSchema>;
export type CreateDeliveryRuleOutput = z.infer<typeof CreateDeliveryRuleOutputSchema>;
export declare const SetDeliveryRuleEnabledInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export declare const SetDeliveryRuleEnabledOutputSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    channel: z.ZodNullable<z.ZodEnum<{
        email: "email";
        in_app: "in_app";
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        slack_channel: "slack_channel";
        sms: "sms";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>>;
    notificationType: z.ZodNullable<z.ZodEnum<{
        automation_finished: "automation_finished";
        automation_run_failed: "automation_run_failed";
        billing_auto_top_up_failed: "billing_auto_top_up_failed";
        billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
        billing_credit_balance_depleted: "billing_credit_balance_depleted";
        billing_credit_balance_low: "billing_credit_balance_low";
        billing_invoice_paid: "billing_invoice_paid";
        billing_negative_balance_collected: "billing_negative_balance_collected";
        billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
        billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
        billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
        billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
        code_repo_connected: "code_repo_connected";
        code_repo_disconnected: "code_repo_disconnected";
        data_source_connected: "data_source_connected";
        data_source_disconnected: "data_source_disconnected";
        github_connected: "github_connected";
        github_disconnected: "github_disconnected";
        integration_connected: "integration_connected";
        integration_disconnected: "integration_disconnected";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
        mcp_connector_added: "mcp_connector_added";
        mcp_connector_removed: "mcp_connector_removed";
        member_invited: "member_invited";
        project_created: "project_created";
        project_deleted: "project_deleted";
        public_key_deactivated: "public_key_deactivated";
        sandbox_created: "sandbox_created";
        sandbox_deleted: "sandbox_deleted";
        secret_key_created: "secret_key_created";
        secret_key_deleted: "secret_key_deleted";
        security_alert: "security_alert";
        user_removed: "user_removed";
    }>>;
    priority: z.ZodNumber;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            medium: "medium";
        }>>;
        component: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    outcome: z.ZodEnum<{
        route: "route";
        suppress: "suppress";
    }>;
    enabled: z.ZodBoolean;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodString;
        destinationKey: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type SetDeliveryRuleEnabledInput = z.infer<typeof SetDeliveryRuleEnabledInputSchema>;
export type SetDeliveryRuleEnabledOutput = z.infer<typeof SetDeliveryRuleEnabledOutputSchema>;
export declare const DeleteDeliveryRuleInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteDeliveryRuleOutputSchema: z.ZodObject<{
    removed: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteDeliveryRuleInput = z.infer<typeof DeleteDeliveryRuleInputSchema>;
export type DeleteDeliveryRuleOutput = z.infer<typeof DeleteDeliveryRuleOutputSchema>;
export declare const listDeliveryRules: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        channel: z.ZodNullable<z.ZodEnum<{
            email: "email";
            in_app: "in_app";
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            slack_channel: "slack_channel";
            sms: "sms";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>>;
        notificationType: z.ZodNullable<z.ZodEnum<{
            automation_finished: "automation_finished";
            automation_run_failed: "automation_run_failed";
            billing_auto_top_up_failed: "billing_auto_top_up_failed";
            billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
            billing_credit_balance_depleted: "billing_credit_balance_depleted";
            billing_credit_balance_low: "billing_credit_balance_low";
            billing_invoice_paid: "billing_invoice_paid";
            billing_negative_balance_collected: "billing_negative_balance_collected";
            billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
            billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
            billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
            billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
            code_repo_connected: "code_repo_connected";
            code_repo_disconnected: "code_repo_disconnected";
            data_source_connected: "data_source_connected";
            data_source_disconnected: "data_source_disconnected";
            github_connected: "github_connected";
            github_disconnected: "github_disconnected";
            integration_connected: "integration_connected";
            integration_disconnected: "integration_disconnected";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
            mcp_connector_added: "mcp_connector_added";
            mcp_connector_removed: "mcp_connector_removed";
            member_invited: "member_invited";
            project_created: "project_created";
            project_deleted: "project_deleted";
            public_key_deactivated: "public_key_deactivated";
            sandbox_created: "sandbox_created";
            sandbox_deleted: "sandbox_deleted";
            secret_key_created: "secret_key_created";
            secret_key_deleted: "secret_key_deleted";
            security_alert: "security_alert";
            user_removed: "user_removed";
        }>>;
        priority: z.ZodNumber;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                medium: "medium";
            }>>;
            component: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>;
        outcome: z.ZodEnum<{
            route: "route";
            suppress: "suppress";
        }>;
        enabled: z.ZodBoolean;
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodString;
            destinationKey: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const createDeliveryRule: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    outcome: z.ZodEnum<{
        route: "route";
        suppress: "suppress";
    }>;
    channel: z.ZodNullable<z.ZodEnum<{
        email: "email";
        in_app: "in_app";
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        slack_channel: "slack_channel";
        sms: "sms";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>>;
    notificationType: z.ZodNullable<z.ZodEnum<{
        automation_finished: "automation_finished";
        automation_run_failed: "automation_run_failed";
        billing_auto_top_up_failed: "billing_auto_top_up_failed";
        billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
        billing_credit_balance_depleted: "billing_credit_balance_depleted";
        billing_credit_balance_low: "billing_credit_balance_low";
        billing_invoice_paid: "billing_invoice_paid";
        billing_negative_balance_collected: "billing_negative_balance_collected";
        billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
        billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
        billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
        billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
        code_repo_connected: "code_repo_connected";
        code_repo_disconnected: "code_repo_disconnected";
        data_source_connected: "data_source_connected";
        data_source_disconnected: "data_source_disconnected";
        github_connected: "github_connected";
        github_disconnected: "github_disconnected";
        integration_connected: "integration_connected";
        integration_disconnected: "integration_disconnected";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
        mcp_connector_added: "mcp_connector_added";
        mcp_connector_removed: "mcp_connector_removed";
        member_invited: "member_invited";
        project_created: "project_created";
        project_deleted: "project_deleted";
        public_key_deactivated: "public_key_deactivated";
        sandbox_created: "sandbox_created";
        sandbox_deleted: "sandbox_deleted";
        secret_key_created: "secret_key_created";
        secret_key_deleted: "secret_key_deleted";
        security_alert: "security_alert";
        user_removed: "user_removed";
    }>>;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            medium: "medium";
        }>>;
        component: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    destinations: z.ZodDefault<z.ZodArray<z.ZodObject<{
        channel: z.ZodEnum<{
            slack_channel: "slack_channel";
            teams_channel: "teams_channel";
        }>;
        destinationKey: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    channel: z.ZodNullable<z.ZodEnum<{
        email: "email";
        in_app: "in_app";
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        slack_channel: "slack_channel";
        sms: "sms";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>>;
    notificationType: z.ZodNullable<z.ZodEnum<{
        automation_finished: "automation_finished";
        automation_run_failed: "automation_run_failed";
        billing_auto_top_up_failed: "billing_auto_top_up_failed";
        billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
        billing_credit_balance_depleted: "billing_credit_balance_depleted";
        billing_credit_balance_low: "billing_credit_balance_low";
        billing_invoice_paid: "billing_invoice_paid";
        billing_negative_balance_collected: "billing_negative_balance_collected";
        billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
        billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
        billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
        billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
        code_repo_connected: "code_repo_connected";
        code_repo_disconnected: "code_repo_disconnected";
        data_source_connected: "data_source_connected";
        data_source_disconnected: "data_source_disconnected";
        github_connected: "github_connected";
        github_disconnected: "github_disconnected";
        integration_connected: "integration_connected";
        integration_disconnected: "integration_disconnected";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
        mcp_connector_added: "mcp_connector_added";
        mcp_connector_removed: "mcp_connector_removed";
        member_invited: "member_invited";
        project_created: "project_created";
        project_deleted: "project_deleted";
        public_key_deactivated: "public_key_deactivated";
        sandbox_created: "sandbox_created";
        sandbox_deleted: "sandbox_deleted";
        secret_key_created: "secret_key_created";
        secret_key_deleted: "secret_key_deleted";
        security_alert: "security_alert";
        user_removed: "user_removed";
    }>>;
    priority: z.ZodNumber;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            medium: "medium";
        }>>;
        component: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    outcome: z.ZodEnum<{
        route: "route";
        suppress: "suppress";
    }>;
    enabled: z.ZodBoolean;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodString;
        destinationKey: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const setDeliveryRuleEnabled: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    ruleId: z.ZodString;
    enabled: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    channel: z.ZodNullable<z.ZodEnum<{
        email: "email";
        in_app: "in_app";
        incident_io: "incident_io";
        pagerduty: "pagerduty";
        rootly: "rootly";
        slack: "slack";
        slack_channel: "slack_channel";
        sms: "sms";
        teams_channel: "teams_channel";
        webhook: "webhook";
    }>>;
    notificationType: z.ZodNullable<z.ZodEnum<{
        automation_finished: "automation_finished";
        automation_run_failed: "automation_run_failed";
        billing_auto_top_up_failed: "billing_auto_top_up_failed";
        billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
        billing_credit_balance_depleted: "billing_credit_balance_depleted";
        billing_credit_balance_low: "billing_credit_balance_low";
        billing_invoice_paid: "billing_invoice_paid";
        billing_negative_balance_collected: "billing_negative_balance_collected";
        billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
        billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
        billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
        billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
        code_repo_connected: "code_repo_connected";
        code_repo_disconnected: "code_repo_disconnected";
        data_source_connected: "data_source_connected";
        data_source_disconnected: "data_source_disconnected";
        github_connected: "github_connected";
        github_disconnected: "github_disconnected";
        integration_connected: "integration_connected";
        integration_disconnected: "integration_disconnected";
        issue_ignored: "issue_ignored";
        issue_resolved: "issue_resolved";
        issue_triggered: "issue_triggered";
        mcp_connector_added: "mcp_connector_added";
        mcp_connector_removed: "mcp_connector_removed";
        member_invited: "member_invited";
        project_created: "project_created";
        project_deleted: "project_deleted";
        public_key_deactivated: "public_key_deactivated";
        sandbox_created: "sandbox_created";
        sandbox_deleted: "sandbox_deleted";
        secret_key_created: "secret_key_created";
        secret_key_deleted: "secret_key_deleted";
        security_alert: "security_alert";
        user_removed: "user_removed";
    }>>;
    priority: z.ZodNumber;
    condition: z.ZodObject<{
        minSeverity: z.ZodOptional<z.ZodEnum<{
            critical: "critical";
            high: "high";
            medium: "medium";
        }>>;
        component: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    outcome: z.ZodEnum<{
        route: "route";
        suppress: "suppress";
    }>;
    enabled: z.ZodBoolean;
    destinations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        channel: z.ZodString;
        destinationKey: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
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
            channel: z.ZodNullable<z.ZodEnum<{
                email: "email";
                in_app: "in_app";
                incident_io: "incident_io";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack: "slack";
                slack_channel: "slack_channel";
                sms: "sms";
                teams_channel: "teams_channel";
                webhook: "webhook";
            }>>;
            notificationType: z.ZodNullable<z.ZodEnum<{
                automation_finished: "automation_finished";
                automation_run_failed: "automation_run_failed";
                billing_auto_top_up_failed: "billing_auto_top_up_failed";
                billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
                billing_credit_balance_depleted: "billing_credit_balance_depleted";
                billing_credit_balance_low: "billing_credit_balance_low";
                billing_invoice_paid: "billing_invoice_paid";
                billing_negative_balance_collected: "billing_negative_balance_collected";
                billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
                billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
                billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
                billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
                code_repo_connected: "code_repo_connected";
                code_repo_disconnected: "code_repo_disconnected";
                data_source_connected: "data_source_connected";
                data_source_disconnected: "data_source_disconnected";
                github_connected: "github_connected";
                github_disconnected: "github_disconnected";
                integration_connected: "integration_connected";
                integration_disconnected: "integration_disconnected";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
                mcp_connector_added: "mcp_connector_added";
                mcp_connector_removed: "mcp_connector_removed";
                member_invited: "member_invited";
                project_created: "project_created";
                project_deleted: "project_deleted";
                public_key_deactivated: "public_key_deactivated";
                sandbox_created: "sandbox_created";
                sandbox_deleted: "sandbox_deleted";
                secret_key_created: "secret_key_created";
                secret_key_deleted: "secret_key_deleted";
                security_alert: "security_alert";
                user_removed: "user_removed";
            }>>;
            priority: z.ZodNumber;
            condition: z.ZodObject<{
                minSeverity: z.ZodOptional<z.ZodEnum<{
                    critical: "critical";
                    high: "high";
                    medium: "medium";
                }>>;
                component: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>;
            outcome: z.ZodEnum<{
                route: "route";
                suppress: "suppress";
            }>;
            enabled: z.ZodBoolean;
            destinations: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                channel: z.ZodString;
                destinationKey: z.ZodString;
                displayName: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        outcome: z.ZodEnum<{
            route: "route";
            suppress: "suppress";
        }>;
        channel: z.ZodNullable<z.ZodEnum<{
            email: "email";
            in_app: "in_app";
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            slack_channel: "slack_channel";
            sms: "sms";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>>;
        notificationType: z.ZodNullable<z.ZodEnum<{
            automation_finished: "automation_finished";
            automation_run_failed: "automation_run_failed";
            billing_auto_top_up_failed: "billing_auto_top_up_failed";
            billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
            billing_credit_balance_depleted: "billing_credit_balance_depleted";
            billing_credit_balance_low: "billing_credit_balance_low";
            billing_invoice_paid: "billing_invoice_paid";
            billing_negative_balance_collected: "billing_negative_balance_collected";
            billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
            billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
            billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
            billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
            code_repo_connected: "code_repo_connected";
            code_repo_disconnected: "code_repo_disconnected";
            data_source_connected: "data_source_connected";
            data_source_disconnected: "data_source_disconnected";
            github_connected: "github_connected";
            github_disconnected: "github_disconnected";
            integration_connected: "integration_connected";
            integration_disconnected: "integration_disconnected";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
            mcp_connector_added: "mcp_connector_added";
            mcp_connector_removed: "mcp_connector_removed";
            member_invited: "member_invited";
            project_created: "project_created";
            project_deleted: "project_deleted";
            public_key_deactivated: "public_key_deactivated";
            sandbox_created: "sandbox_created";
            sandbox_deleted: "sandbox_deleted";
            secret_key_created: "secret_key_created";
            secret_key_deleted: "secret_key_deleted";
            security_alert: "security_alert";
            user_removed: "user_removed";
        }>>;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                medium: "medium";
            }>>;
            component: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>;
        destinations: z.ZodDefault<z.ZodArray<z.ZodObject<{
            channel: z.ZodEnum<{
                slack_channel: "slack_channel";
                teams_channel: "teams_channel";
            }>;
            destinationKey: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        channel: z.ZodNullable<z.ZodEnum<{
            email: "email";
            in_app: "in_app";
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            slack_channel: "slack_channel";
            sms: "sms";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>>;
        notificationType: z.ZodNullable<z.ZodEnum<{
            automation_finished: "automation_finished";
            automation_run_failed: "automation_run_failed";
            billing_auto_top_up_failed: "billing_auto_top_up_failed";
            billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
            billing_credit_balance_depleted: "billing_credit_balance_depleted";
            billing_credit_balance_low: "billing_credit_balance_low";
            billing_invoice_paid: "billing_invoice_paid";
            billing_negative_balance_collected: "billing_negative_balance_collected";
            billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
            billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
            billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
            billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
            code_repo_connected: "code_repo_connected";
            code_repo_disconnected: "code_repo_disconnected";
            data_source_connected: "data_source_connected";
            data_source_disconnected: "data_source_disconnected";
            github_connected: "github_connected";
            github_disconnected: "github_disconnected";
            integration_connected: "integration_connected";
            integration_disconnected: "integration_disconnected";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
            mcp_connector_added: "mcp_connector_added";
            mcp_connector_removed: "mcp_connector_removed";
            member_invited: "member_invited";
            project_created: "project_created";
            project_deleted: "project_deleted";
            public_key_deactivated: "public_key_deactivated";
            sandbox_created: "sandbox_created";
            sandbox_deleted: "sandbox_deleted";
            secret_key_created: "secret_key_created";
            secret_key_deleted: "secret_key_deleted";
            security_alert: "security_alert";
            user_removed: "user_removed";
        }>>;
        priority: z.ZodNumber;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                medium: "medium";
            }>>;
            component: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>;
        outcome: z.ZodEnum<{
            route: "route";
            suppress: "suppress";
        }>;
        enabled: z.ZodBoolean;
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodString;
            destinationKey: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    setEnabled: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        ruleId: z.ZodString;
        enabled: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        channel: z.ZodNullable<z.ZodEnum<{
            email: "email";
            in_app: "in_app";
            incident_io: "incident_io";
            pagerduty: "pagerduty";
            rootly: "rootly";
            slack: "slack";
            slack_channel: "slack_channel";
            sms: "sms";
            teams_channel: "teams_channel";
            webhook: "webhook";
        }>>;
        notificationType: z.ZodNullable<z.ZodEnum<{
            automation_finished: "automation_finished";
            automation_run_failed: "automation_run_failed";
            billing_auto_top_up_failed: "billing_auto_top_up_failed";
            billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
            billing_credit_balance_depleted: "billing_credit_balance_depleted";
            billing_credit_balance_low: "billing_credit_balance_low";
            billing_invoice_paid: "billing_invoice_paid";
            billing_negative_balance_collected: "billing_negative_balance_collected";
            billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
            billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
            billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
            billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
            code_repo_connected: "code_repo_connected";
            code_repo_disconnected: "code_repo_disconnected";
            data_source_connected: "data_source_connected";
            data_source_disconnected: "data_source_disconnected";
            github_connected: "github_connected";
            github_disconnected: "github_disconnected";
            integration_connected: "integration_connected";
            integration_disconnected: "integration_disconnected";
            issue_ignored: "issue_ignored";
            issue_resolved: "issue_resolved";
            issue_triggered: "issue_triggered";
            mcp_connector_added: "mcp_connector_added";
            mcp_connector_removed: "mcp_connector_removed";
            member_invited: "member_invited";
            project_created: "project_created";
            project_deleted: "project_deleted";
            public_key_deactivated: "public_key_deactivated";
            sandbox_created: "sandbox_created";
            sandbox_deleted: "sandbox_deleted";
            secret_key_created: "secret_key_created";
            secret_key_deleted: "secret_key_deleted";
            security_alert: "security_alert";
            user_removed: "user_removed";
        }>>;
        priority: z.ZodNumber;
        condition: z.ZodObject<{
            minSeverity: z.ZodOptional<z.ZodEnum<{
                critical: "critical";
                high: "high";
                medium: "medium";
            }>>;
            component: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>;
        outcome: z.ZodEnum<{
            route: "route";
            suppress: "suppress";
        }>;
        enabled: z.ZodBoolean;
        destinations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            channel: z.ZodString;
            destinationKey: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
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
