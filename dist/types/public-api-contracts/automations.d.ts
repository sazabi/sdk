import { z } from "zod";
export declare const AutomationRunStatusSchema: z.ZodEnum<{
    cancelled: "cancelled";
    failed: "failed";
    running: "running";
    succeeded: "succeeded";
    timed_out: "timed_out";
}>;
export type AutomationRunStatus = z.infer<typeof AutomationRunStatusSchema>;
export declare const AutomationRunSummarySchema: z.ZodObject<{
    id: z.ZodString;
    automationRunKey: z.ZodString;
    status: z.ZodEnum<{
        cancelled: "cancelled";
        failed: "failed";
        running: "running";
        succeeded: "succeeded";
        timed_out: "timed_out";
    }>;
    startedAt: z.ZodString;
    completedAt: z.ZodNullable<z.ZodString>;
    durationMs: z.ZodNullable<z.ZodNumber>;
    exitCode: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export type AutomationRunSummary = z.infer<typeof AutomationRunSummarySchema>;
/**
 * A single automation run. Extends the run summary surfaced on automation list
 * items with scheduling and failure fields. The run's underlying execution
 * thread is intentionally not exposed: those threads are hidden and not
 * readable through the public API.
 */
export declare const AutomationRunSchema: z.ZodObject<{
    id: z.ZodString;
    automationRunKey: z.ZodString;
    status: z.ZodEnum<{
        cancelled: "cancelled";
        failed: "failed";
        running: "running";
        succeeded: "succeeded";
        timed_out: "timed_out";
    }>;
    startedAt: z.ZodString;
    completedAt: z.ZodNullable<z.ZodString>;
    durationMs: z.ZodNullable<z.ZodNumber>;
    exitCode: z.ZodNullable<z.ZodNumber>;
    scheduledAt: z.ZodNullable<z.ZodString>;
    dueAt: z.ZodNullable<z.ZodString>;
    errorMessage: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AutomationRun = z.infer<typeof AutomationRunSchema>;
/**
 * An automation run including its owning automation ID, returned when fetching a
 * single run (where the automation is not otherwise implied by the response).
 */
export declare const AutomationRunDetailSchema: z.ZodObject<{
    id: z.ZodString;
    automationRunKey: z.ZodString;
    status: z.ZodEnum<{
        cancelled: "cancelled";
        failed: "failed";
        running: "running";
        succeeded: "succeeded";
        timed_out: "timed_out";
    }>;
    startedAt: z.ZodString;
    completedAt: z.ZodNullable<z.ZodString>;
    durationMs: z.ZodNullable<z.ZodNumber>;
    exitCode: z.ZodNullable<z.ZodNumber>;
    scheduledAt: z.ZodNullable<z.ZodString>;
    dueAt: z.ZodNullable<z.ZodString>;
    errorMessage: z.ZodNullable<z.ZodString>;
    automationId: z.ZodString;
}, z.core.$strip>;
export type AutomationRunDetail = z.infer<typeof AutomationRunDetailSchema>;
export declare const AutomationSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    kind: z.ZodEnum<{
        script: "script";
    }>;
    scriptId: z.ZodNullable<z.ZodString>;
    scriptName: z.ZodNullable<z.ZodString>;
    source: z.ZodEnum<{
        custom: "custom";
        sazabi_managed: "sazabi_managed";
    }>;
    enabled: z.ZodBoolean;
    cronExpression: z.ZodNullable<z.ZodString>;
    timezone: z.ZodString;
    timeoutSeconds: z.ZodNullable<z.ZodNumber>;
    health: z.ZodEnum<{
        failing: "failing";
        healthy: "healthy";
        never_run: "never_run";
    }>;
    lastRun: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        automationRunKey: z.ZodString;
        status: z.ZodEnum<{
            cancelled: "cancelled";
            failed: "failed";
            running: "running";
            succeeded: "succeeded";
            timed_out: "timed_out";
        }>;
        startedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
        exitCode: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    successRate: z.ZodNullable<z.ZodNumber>;
    runCount: z.ZodNumber;
    failedRunCount: z.ZodNumber;
}, z.core.$strip>;
export type Automation = z.infer<typeof AutomationSchema>;
export declare const AutomationDetailSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    kind: z.ZodEnum<{
        script: "script";
    }>;
    scriptId: z.ZodNullable<z.ZodString>;
    scriptName: z.ZodNullable<z.ZodString>;
    source: z.ZodEnum<{
        custom: "custom";
        sazabi_managed: "sazabi_managed";
    }>;
    enabled: z.ZodBoolean;
    cronExpression: z.ZodNullable<z.ZodString>;
    timezone: z.ZodString;
    timeoutSeconds: z.ZodNullable<z.ZodNumber>;
    health: z.ZodEnum<{
        failing: "failing";
        healthy: "healthy";
        never_run: "never_run";
    }>;
    lastRun: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        automationRunKey: z.ZodString;
        status: z.ZodEnum<{
            cancelled: "cancelled";
            failed: "failed";
            running: "running";
            succeeded: "succeeded";
            timed_out: "timed_out";
        }>;
        startedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
        exitCode: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    successRate: z.ZodNullable<z.ZodNumber>;
    runCount: z.ZodNumber;
    failedRunCount: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    recordedHistoryStartsAt: z.ZodString;
    scriptIdentifier: z.ZodNullable<z.ZodString>;
    canToggle: z.ZodBoolean;
}, z.core.$strip>;
export type AutomationDetail = z.infer<typeof AutomationDetailSchema>;
export declare const ListAutomationsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        paused: "paused";
    }>>;
    health: z.ZodOptional<z.ZodEnum<{
        failing: "failing";
        healthy: "healthy";
        never_run: "never_run";
    }>>;
    source: z.ZodOptional<z.ZodEnum<{
        custom: "custom";
        sazabi_managed: "sazabi_managed";
    }>>;
    sort: z.ZodDefault<z.ZodEnum<{
        failures: "failures";
        last_run: "last_run";
        name: "name";
        runs: "runs";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListAutomationsInput = z.infer<typeof ListAutomationsInputSchema>;
export declare const ListAutomationsOutputSchema: z.ZodObject<{
    automations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListAutomationsOutput = z.infer<typeof ListAutomationsOutputSchema>;
export declare const GetAutomationInputSchema: z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetAutomationInput = z.infer<typeof GetAutomationInputSchema>;
export declare const GetAutomationOutputSchema: z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetAutomationOutput = z.infer<typeof GetAutomationOutputSchema>;
export declare const CreateAutomationInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scriptId: z.ZodOptional<z.ZodString>;
    script: z.ZodOptional<z.ZodString>;
    cronExpression: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
    timeoutSeconds: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateAutomationInput = z.infer<typeof CreateAutomationInputSchema>;
export declare const CreateAutomationOutputSchema: z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateAutomationOutput = z.infer<typeof CreateAutomationOutputSchema>;
export declare const UpdateAutomationInputSchema: z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cronExpression: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
    timeoutSeconds: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type UpdateAutomationInput = z.infer<typeof UpdateAutomationInputSchema>;
export declare const UpdateAutomationOutputSchema: z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateAutomationOutput = z.infer<typeof UpdateAutomationOutputSchema>;
export declare const EnableAutomationInputSchema: z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EnableAutomationInput = z.infer<typeof EnableAutomationInputSchema>;
export declare const EnableAutomationOutputSchema: z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type EnableAutomationOutput = z.infer<typeof EnableAutomationOutputSchema>;
export declare const DisableAutomationInputSchema: z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DisableAutomationInput = z.infer<typeof DisableAutomationInputSchema>;
export declare const DisableAutomationOutputSchema: z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type DisableAutomationOutput = z.infer<typeof DisableAutomationOutputSchema>;
export declare const listAutomations: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        paused: "paused";
    }>>;
    health: z.ZodOptional<z.ZodEnum<{
        failing: "failing";
        healthy: "healthy";
        never_run: "never_run";
    }>>;
    source: z.ZodOptional<z.ZodEnum<{
        custom: "custom";
        sazabi_managed: "sazabi_managed";
    }>>;
    sort: z.ZodDefault<z.ZodEnum<{
        failures: "failures";
        last_run: "last_run";
        name: "name";
        runs: "runs";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    automations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const getAutomation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const createAutomation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scriptId: z.ZodOptional<z.ZodString>;
    script: z.ZodOptional<z.ZodString>;
    cronExpression: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
    timeoutSeconds: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const updateAutomation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cronExpression: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
    timeoutSeconds: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const enableAutomation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const disableAutomation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    automation: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodEnum<{
            script: "script";
        }>;
        scriptId: z.ZodNullable<z.ZodString>;
        scriptName: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>;
        enabled: z.ZodBoolean;
        cronExpression: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        timeoutSeconds: z.ZodNullable<z.ZodNumber>;
        health: z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>;
        lastRun: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            automationRunKey: z.ZodString;
            status: z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>;
            startedAt: z.ZodString;
            completedAt: z.ZodNullable<z.ZodString>;
            durationMs: z.ZodNullable<z.ZodNumber>;
            exitCode: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        successRate: z.ZodNullable<z.ZodNumber>;
        runCount: z.ZodNumber;
        failedRunCount: z.ZodNumber;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        recordedHistoryStartsAt: z.ZodString;
        scriptIdentifier: z.ZodNullable<z.ZodString>;
        canToggle: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const ListAutomationRunsInputSchema: z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        cancelled: "cancelled";
        failed: "failed";
        running: "running";
        succeeded: "succeeded";
        timed_out: "timed_out";
    }>, z.ZodArray<z.ZodEnum<{
        cancelled: "cancelled";
        failed: "failed";
        running: "running";
        succeeded: "succeeded";
        timed_out: "timed_out";
    }>>]>>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListAutomationRunsInput = z.infer<typeof ListAutomationRunsInputSchema>;
export declare const ListAutomationRunsOutputSchema: z.ZodObject<{
    runs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        automationRunKey: z.ZodString;
        status: z.ZodEnum<{
            cancelled: "cancelled";
            failed: "failed";
            running: "running";
            succeeded: "succeeded";
            timed_out: "timed_out";
        }>;
        startedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
        exitCode: z.ZodNullable<z.ZodNumber>;
        scheduledAt: z.ZodNullable<z.ZodString>;
        dueAt: z.ZodNullable<z.ZodString>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    recordedHistoryStartsAt: z.ZodString;
}, z.core.$strip>;
export type ListAutomationRunsOutput = z.infer<typeof ListAutomationRunsOutputSchema>;
export declare const GetAutomationRunInputSchema: z.ZodObject<{
    automationId: z.ZodString;
    runId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetAutomationRunInput = z.infer<typeof GetAutomationRunInputSchema>;
export declare const GetAutomationRunOutputSchema: z.ZodObject<{
    run: z.ZodObject<{
        id: z.ZodString;
        automationRunKey: z.ZodString;
        status: z.ZodEnum<{
            cancelled: "cancelled";
            failed: "failed";
            running: "running";
            succeeded: "succeeded";
            timed_out: "timed_out";
        }>;
        startedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
        exitCode: z.ZodNullable<z.ZodNumber>;
        scheduledAt: z.ZodNullable<z.ZodString>;
        dueAt: z.ZodNullable<z.ZodString>;
        errorMessage: z.ZodNullable<z.ZodString>;
        automationId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetAutomationRunOutput = z.infer<typeof GetAutomationRunOutputSchema>;
export declare const listAutomationRuns: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    automationId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        cancelled: "cancelled";
        failed: "failed";
        running: "running";
        succeeded: "succeeded";
        timed_out: "timed_out";
    }>, z.ZodArray<z.ZodEnum<{
        cancelled: "cancelled";
        failed: "failed";
        running: "running";
        succeeded: "succeeded";
        timed_out: "timed_out";
    }>>]>>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    runs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        automationRunKey: z.ZodString;
        status: z.ZodEnum<{
            cancelled: "cancelled";
            failed: "failed";
            running: "running";
            succeeded: "succeeded";
            timed_out: "timed_out";
        }>;
        startedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
        exitCode: z.ZodNullable<z.ZodNumber>;
        scheduledAt: z.ZodNullable<z.ZodString>;
        dueAt: z.ZodNullable<z.ZodString>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    recordedHistoryStartsAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const getAutomationRun: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    automationId: z.ZodString;
    runId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    run: z.ZodObject<{
        id: z.ZodString;
        automationRunKey: z.ZodString;
        status: z.ZodEnum<{
            cancelled: "cancelled";
            failed: "failed";
            running: "running";
            succeeded: "succeeded";
            timed_out: "timed_out";
        }>;
        startedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
        exitCode: z.ZodNullable<z.ZodNumber>;
        scheduledAt: z.ZodNullable<z.ZodString>;
        dueAt: z.ZodNullable<z.ZodString>;
        errorMessage: z.ZodNullable<z.ZodString>;
        automationId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
/**
 * Execution status of the sandbox command that produced an automation run's
 * captured output. Mirrors the database `sandbox_command_status` enum, defined
 * here so the contract package does not depend on the server schema.
 */
export declare const AutomationRunCommandStatusSchema: z.ZodEnum<{
    failed: "failed";
    queued: "queued";
    running: "running";
    succeeded: "succeeded";
    timed_out: "timed_out";
}>;
export type AutomationRunCommandStatus = z.infer<typeof AutomationRunCommandStatusSchema>;
/**
 * Captured stdout/stderr for a single automation run. The run's hidden
 * execution thread is never exposed; these logs come from the run's sandbox
 * command. When the command's output exceeded the inline preview limit, the
 * full payload is read from durable storage and `truncated` is true.
 */
export declare const AutomationRunLogsSchema: z.ZodObject<{
    stdout: z.ZodString;
    stderr: z.ZodString;
    exitCode: z.ZodNullable<z.ZodNumber>;
    status: z.ZodEnum<{
        failed: "failed";
        queued: "queued";
        running: "running";
        succeeded: "succeeded";
        timed_out: "timed_out";
    }>;
    truncated: z.ZodBoolean;
    startedAt: z.ZodNullable<z.ZodString>;
    completedAt: z.ZodNullable<z.ZodString>;
    durationMs: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export type AutomationRunLogs = z.infer<typeof AutomationRunLogsSchema>;
export declare const GetAutomationRunLogsInputSchema: z.ZodObject<{
    automationId: z.ZodString;
    runId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetAutomationRunLogsInput = z.infer<typeof GetAutomationRunLogsInputSchema>;
export declare const GetAutomationRunLogsOutputSchema: z.ZodObject<{
    logs: z.ZodObject<{
        stdout: z.ZodString;
        stderr: z.ZodString;
        exitCode: z.ZodNullable<z.ZodNumber>;
        status: z.ZodEnum<{
            failed: "failed";
            queued: "queued";
            running: "running";
            succeeded: "succeeded";
            timed_out: "timed_out";
        }>;
        truncated: z.ZodBoolean;
        startedAt: z.ZodNullable<z.ZodString>;
        completedAt: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetAutomationRunLogsOutput = z.infer<typeof GetAutomationRunLogsOutputSchema>;
export declare const getAutomationRunLogs: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    automationId: z.ZodString;
    runId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    logs: z.ZodObject<{
        stdout: z.ZodString;
        stderr: z.ZodString;
        exitCode: z.ZodNullable<z.ZodNumber>;
        status: z.ZodEnum<{
            failed: "failed";
            queued: "queued";
            running: "running";
            succeeded: "succeeded";
            timed_out: "timed_out";
        }>;
        truncated: z.ZodBoolean;
        startedAt: z.ZodNullable<z.ZodString>;
        completedAt: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const automationsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        search: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            active: "active";
            paused: "paused";
        }>>;
        health: z.ZodOptional<z.ZodEnum<{
            failing: "failing";
            healthy: "healthy";
            never_run: "never_run";
        }>>;
        source: z.ZodOptional<z.ZodEnum<{
            custom: "custom";
            sazabi_managed: "sazabi_managed";
        }>>;
        sort: z.ZodDefault<z.ZodEnum<{
            failures: "failures";
            last_run: "last_run";
            name: "name";
            runs: "runs";
        }>>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        cursor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        automations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodEnum<{
                script: "script";
            }>;
            scriptId: z.ZodNullable<z.ZodString>;
            scriptName: z.ZodNullable<z.ZodString>;
            source: z.ZodEnum<{
                custom: "custom";
                sazabi_managed: "sazabi_managed";
            }>;
            enabled: z.ZodBoolean;
            cronExpression: z.ZodNullable<z.ZodString>;
            timezone: z.ZodString;
            timeoutSeconds: z.ZodNullable<z.ZodNumber>;
            health: z.ZodEnum<{
                failing: "failing";
                healthy: "healthy";
                never_run: "never_run";
            }>;
            lastRun: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                automationRunKey: z.ZodString;
                status: z.ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                startedAt: z.ZodString;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
                exitCode: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            successRate: z.ZodNullable<z.ZodNumber>;
            runCount: z.ZodNumber;
            failedRunCount: z.ZodNumber;
        }, z.core.$strip>>;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        automationId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        automation: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodEnum<{
                script: "script";
            }>;
            scriptId: z.ZodNullable<z.ZodString>;
            scriptName: z.ZodNullable<z.ZodString>;
            source: z.ZodEnum<{
                custom: "custom";
                sazabi_managed: "sazabi_managed";
            }>;
            enabled: z.ZodBoolean;
            cronExpression: z.ZodNullable<z.ZodString>;
            timezone: z.ZodString;
            timeoutSeconds: z.ZodNullable<z.ZodNumber>;
            health: z.ZodEnum<{
                failing: "failing";
                healthy: "healthy";
                never_run: "never_run";
            }>;
            lastRun: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                automationRunKey: z.ZodString;
                status: z.ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                startedAt: z.ZodString;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
                exitCode: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            successRate: z.ZodNullable<z.ZodNumber>;
            runCount: z.ZodNumber;
            failedRunCount: z.ZodNumber;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            recordedHistoryStartsAt: z.ZodString;
            scriptIdentifier: z.ZodNullable<z.ZodString>;
            canToggle: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        scriptId: z.ZodOptional<z.ZodString>;
        script: z.ZodOptional<z.ZodString>;
        cronExpression: z.ZodOptional<z.ZodString>;
        timezone: z.ZodOptional<z.ZodString>;
        timeoutSeconds: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        automation: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodEnum<{
                script: "script";
            }>;
            scriptId: z.ZodNullable<z.ZodString>;
            scriptName: z.ZodNullable<z.ZodString>;
            source: z.ZodEnum<{
                custom: "custom";
                sazabi_managed: "sazabi_managed";
            }>;
            enabled: z.ZodBoolean;
            cronExpression: z.ZodNullable<z.ZodString>;
            timezone: z.ZodString;
            timeoutSeconds: z.ZodNullable<z.ZodNumber>;
            health: z.ZodEnum<{
                failing: "failing";
                healthy: "healthy";
                never_run: "never_run";
            }>;
            lastRun: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                automationRunKey: z.ZodString;
                status: z.ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                startedAt: z.ZodString;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
                exitCode: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            successRate: z.ZodNullable<z.ZodNumber>;
            runCount: z.ZodNumber;
            failedRunCount: z.ZodNumber;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            recordedHistoryStartsAt: z.ZodString;
            scriptIdentifier: z.ZodNullable<z.ZodString>;
            canToggle: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        automationId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cronExpression: z.ZodOptional<z.ZodString>;
        timezone: z.ZodOptional<z.ZodString>;
        timeoutSeconds: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        automation: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodEnum<{
                script: "script";
            }>;
            scriptId: z.ZodNullable<z.ZodString>;
            scriptName: z.ZodNullable<z.ZodString>;
            source: z.ZodEnum<{
                custom: "custom";
                sazabi_managed: "sazabi_managed";
            }>;
            enabled: z.ZodBoolean;
            cronExpression: z.ZodNullable<z.ZodString>;
            timezone: z.ZodString;
            timeoutSeconds: z.ZodNullable<z.ZodNumber>;
            health: z.ZodEnum<{
                failing: "failing";
                healthy: "healthy";
                never_run: "never_run";
            }>;
            lastRun: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                automationRunKey: z.ZodString;
                status: z.ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                startedAt: z.ZodString;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
                exitCode: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            successRate: z.ZodNullable<z.ZodNumber>;
            runCount: z.ZodNumber;
            failedRunCount: z.ZodNumber;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            recordedHistoryStartsAt: z.ZodString;
            scriptIdentifier: z.ZodNullable<z.ZodString>;
            canToggle: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly enable: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        automationId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        automation: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodEnum<{
                script: "script";
            }>;
            scriptId: z.ZodNullable<z.ZodString>;
            scriptName: z.ZodNullable<z.ZodString>;
            source: z.ZodEnum<{
                custom: "custom";
                sazabi_managed: "sazabi_managed";
            }>;
            enabled: z.ZodBoolean;
            cronExpression: z.ZodNullable<z.ZodString>;
            timezone: z.ZodString;
            timeoutSeconds: z.ZodNullable<z.ZodNumber>;
            health: z.ZodEnum<{
                failing: "failing";
                healthy: "healthy";
                never_run: "never_run";
            }>;
            lastRun: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                automationRunKey: z.ZodString;
                status: z.ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                startedAt: z.ZodString;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
                exitCode: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            successRate: z.ZodNullable<z.ZodNumber>;
            runCount: z.ZodNumber;
            failedRunCount: z.ZodNumber;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            recordedHistoryStartsAt: z.ZodString;
            scriptIdentifier: z.ZodNullable<z.ZodString>;
            canToggle: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly disable: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        automationId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        automation: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodEnum<{
                script: "script";
            }>;
            scriptId: z.ZodNullable<z.ZodString>;
            scriptName: z.ZodNullable<z.ZodString>;
            source: z.ZodEnum<{
                custom: "custom";
                sazabi_managed: "sazabi_managed";
            }>;
            enabled: z.ZodBoolean;
            cronExpression: z.ZodNullable<z.ZodString>;
            timezone: z.ZodString;
            timeoutSeconds: z.ZodNullable<z.ZodNumber>;
            health: z.ZodEnum<{
                failing: "failing";
                healthy: "healthy";
                never_run: "never_run";
            }>;
            lastRun: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                automationRunKey: z.ZodString;
                status: z.ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                startedAt: z.ZodString;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
                exitCode: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            successRate: z.ZodNullable<z.ZodNumber>;
            runCount: z.ZodNumber;
            failedRunCount: z.ZodNumber;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            recordedHistoryStartsAt: z.ZodString;
            scriptIdentifier: z.ZodNullable<z.ZodString>;
            canToggle: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly runs: {
        readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            automationId: z.ZodString;
            projectId: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>, z.ZodArray<z.ZodEnum<{
                cancelled: "cancelled";
                failed: "failed";
                running: "running";
                succeeded: "succeeded";
                timed_out: "timed_out";
            }>>]>>;
            cursor: z.ZodOptional<z.ZodString>;
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>, z.ZodObject<{
            runs: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                automationRunKey: z.ZodString;
                status: z.ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                startedAt: z.ZodString;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
                exitCode: z.ZodNullable<z.ZodNumber>;
                scheduledAt: z.ZodNullable<z.ZodString>;
                dueAt: z.ZodNullable<z.ZodString>;
                errorMessage: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            nextCursor: z.ZodNullable<z.ZodString>;
            recordedHistoryStartsAt: z.ZodString;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            automationId: z.ZodString;
            runId: z.ZodString;
            projectId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            run: z.ZodObject<{
                id: z.ZodString;
                automationRunKey: z.ZodString;
                status: z.ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                startedAt: z.ZodString;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
                exitCode: z.ZodNullable<z.ZodNumber>;
                scheduledAt: z.ZodNullable<z.ZodString>;
                dueAt: z.ZodNullable<z.ZodString>;
                errorMessage: z.ZodNullable<z.ZodString>;
                automationId: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly logs: import("@orpc/contract").ContractProcedure<z.ZodObject<{
            automationId: z.ZodString;
            runId: z.ZodString;
            projectId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            logs: z.ZodObject<{
                stdout: z.ZodString;
                stderr: z.ZodString;
                exitCode: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<{
                    failed: "failed";
                    queued: "queued";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>;
                truncated: z.ZodBoolean;
                startedAt: z.ZodNullable<z.ZodString>;
                completedAt: z.ZodNullable<z.ZodString>;
                durationMs: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>;
        }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
};
