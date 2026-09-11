import { z } from "zod";
export declare const AutomationTemplateGroupSchema: z.ZodEnum<{
    "investigate-source-events": "investigate-source-events";
    "status-page-monitor": "status-page-monitor";
}>;
export type AutomationTemplateGroup = z.infer<typeof AutomationTemplateGroupSchema>;
export declare const AutomationTemplateKindSchema: z.ZodEnum<{
    script: "script";
    signal: "signal";
}>;
export type AutomationTemplateKind = z.infer<typeof AutomationTemplateKindSchema>;
export declare const AutomationTemplateSchema: z.ZodObject<{
    id: z.ZodString;
    templateGroup: z.ZodEnum<{
        "investigate-source-events": "investigate-source-events";
        "status-page-monitor": "status-page-monitor";
    }>;
    kind: z.ZodEnum<{
        script: "script";
        signal: "signal";
    }>;
    name: z.ZodString;
    description: z.ZodString;
    sourceKey: z.ZodNullable<z.ZodString>;
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
        templateGroup: z.ZodEnum<{
            "investigate-source-events": "investigate-source-events";
            "status-page-monitor": "status-page-monitor";
        }>;
        kind: z.ZodEnum<{
            script: "script";
            signal: "signal";
        }>;
        name: z.ZodString;
        description: z.ZodString;
        sourceKey: z.ZodNullable<z.ZodString>;
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
        templateGroup: z.ZodEnum<{
            "investigate-source-events": "investigate-source-events";
            "status-page-monitor": "status-page-monitor";
        }>;
        kind: z.ZodEnum<{
            script: "script";
            signal: "signal";
        }>;
        name: z.ZodString;
        description: z.ZodString;
        sourceKey: z.ZodNullable<z.ZodString>;
        defaultCron: z.ZodNullable<z.ZodString>;
        expression: z.ZodNullable<z.ZodString>;
        version: z.ZodNumber;
        publishedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const automationTemplatesContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        templates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            templateGroup: z.ZodEnum<{
                "investigate-source-events": "investigate-source-events";
                "status-page-monitor": "status-page-monitor";
            }>;
            kind: z.ZodEnum<{
                script: "script";
                signal: "signal";
            }>;
            name: z.ZodString;
            description: z.ZodString;
            sourceKey: z.ZodNullable<z.ZodString>;
            defaultCron: z.ZodNullable<z.ZodString>;
            expression: z.ZodNullable<z.ZodString>;
            version: z.ZodNumber;
            publishedAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
