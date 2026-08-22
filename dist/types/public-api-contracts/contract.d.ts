/**
 * Contract tree for public API operations that are implemented contract-first.
 */
export declare const publicApiContract: {
    readonly me: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
        credentialType: import("zod").ZodLiteral<"user">;
        user: import("zod").ZodObject<{
            id: import("zod").ZodString;
            name: import("zod").ZodNullable<import("zod").ZodString>;
            email: import("zod").ZodString;
        }, import("zod/v4/core").$strip>;
        activeOrganizationId: import("zod").ZodNullable<import("zod").ZodString>;
        authorizedOrganizationId: import("zod").ZodNullable<import("zod").ZodString>;
        authorizedProjectId: import("zod").ZodNullable<import("zod").ZodString>;
        organizations: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodString;
            name: import("zod").ZodString;
            slug: import("zod").ZodString;
            logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            role: import("zod").ZodEnum<{
                admin: "admin";
                member: "member";
            }>;
        }, import("zod/v4/core").$strip>>;
    }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
        credentialType: import("zod").ZodLiteral<"secret">;
        organization: import("zod").ZodObject<{
            id: import("zod").ZodString;
            name: import("zod").ZodString;
            slug: import("zod").ZodString;
            logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>;
        keyName: import("zod").ZodString;
    }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
        credentialType: import("zod").ZodLiteral<"partner">;
        superorganization: import("zod").ZodObject<{
            id: import("zod").ZodString;
            name: import("zod").ZodString;
        }, import("zod/v4/core").$strip>;
    }, import("zod/v4/core").$strip>], "credentialType">, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly automations: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            search: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                active: "active";
                paused: "paused";
            }>>;
            health: import("zod").ZodOptional<import("zod").ZodEnum<{
                failing: "failing";
                healthy: "healthy";
                never_run: "never_run";
            }>>;
            source: import("zod").ZodOptional<import("zod").ZodEnum<{
                custom: "custom";
                sazabi_managed: "sazabi_managed";
            }>>;
            sort: import("zod").ZodDefault<import("zod").ZodEnum<{
                failures: "failures";
                last_run: "last_run";
                name: "name";
                runs: "runs";
            }>>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            automationId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            scriptId: import("zod").ZodOptional<import("zod").ZodString>;
            script: import("zod").ZodOptional<import("zod").ZodString>;
            expressionId: import("zod").ZodOptional<import("zod").ZodString>;
            cronExpression: import("zod").ZodOptional<import("zod").ZodString>;
            timezone: import("zod").ZodOptional<import("zod").ZodString>;
            timeoutSeconds: import("zod").ZodOptional<import("zod").ZodCoercedNumber<unknown>>;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            automationId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            cronExpression: import("zod").ZodOptional<import("zod").ZodString>;
            timezone: import("zod").ZodOptional<import("zod").ZodString>;
            timeoutSeconds: import("zod").ZodOptional<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly enable: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            automationId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly disable: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            automationId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly runs: {
            readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
                automationId: import("zod").ZodString;
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                status: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>, import("zod").ZodArray<import("zod").ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>>]>>;
                cursor: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                runs: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                    scheduledAt: import("zod").ZodNullable<import("zod").ZodString>;
                    dueAt: import("zod").ZodNullable<import("zod").ZodString>;
                    errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
                recordedHistoryStartsAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
            readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
                automationId: import("zod").ZodString;
                runId: import("zod").ZodString;
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                run: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                    scheduledAt: import("zod").ZodNullable<import("zod").ZodString>;
                    dueAt: import("zod").ZodNullable<import("zod").ZodString>;
                    errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                    automationId: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
            readonly logs: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
                automationId: import("zod").ZodString;
                runId: import("zod").ZodString;
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                logs: import("zod").ZodObject<{
                    stdout: import("zod").ZodString;
                    stderr: import("zod").ZodString;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                    status: import("zod").ZodEnum<{
                        failed: "failed";
                        queued: "queued";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    truncated: import("zod").ZodBoolean;
                    startedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        };
    };
    readonly logs: {
        readonly query: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            search: import("zod").ZodOptional<import("zod").ZodObject<{
                query: import("zod").ZodString;
                fields: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                mode: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<{
                    all: "all";
                    any: "any";
                    phrase: "phrase";
                }>>>;
            }, import("zod/v4/core").$strip>>;
            filters: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                field: import("zod").ZodString;
                op: import("zod").ZodEnum<{
                    between: "between";
                    contains: "contains";
                    eq: "eq";
                    exists: "exists";
                    gt: "gt";
                    gte: "gte";
                    in: "in";
                    lt: "lt";
                    lte: "lte";
                    neq: "neq";
                    starts_with: "starts_with";
                }>;
                value: import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodNumber]>>, import("zod").ZodObject<{
                    from: import("zod").ZodString;
                    to: import("zod").ZodString;
                }, import("zod/v4/core").$strip>]>;
            }, import("zod/v4/core").$strip>>>;
            select: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            sort: import("zod").ZodOptional<import("zod").ZodObject<{
                field: import("zod").ZodString;
                direction: import("zod").ZodDefault<import("zod").ZodEnum<{
                    asc: "asc";
                    desc: "desc";
                }>>;
            }, import("zod/v4/core").$strip>>;
            pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodNumber>;
                cursor: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            data: import("zod").ZodArray<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
            meta: import("zod").ZodObject<{
                count: import("zod").ZodNumber;
                took: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly schema: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            question: import("zod").ZodOptional<import("zod").ZodString>;
            topK: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            backend: import("zod").ZodObject<{
                id: import("zod").ZodEnum<{
                    axiom: "axiom";
                    "better-stack": "better-stack";
                    clickhouse: "clickhouse";
                    cloudwatch: "cloudwatch";
                    datadog: "datadog";
                    gcp: "gcp";
                    mezmo: "mezmo";
                    posthog: "posthog";
                    sentry: "sentry";
                }>;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    external: "external";
                    native: "native";
                }>;
            }, import("zod/v4/core").$strip>;
            features: import("zod").ZodArray<import("zod").ZodString>;
            commands: import("zod").ZodArray<import("zod").ZodEnum<{
                nativeQuery: "nativeQuery";
                patterns: "patterns";
                query: "query";
                schema: "schema";
                volume: "volume";
            }>>;
            queryableFields: import("zod").ZodArray<import("zod").ZodString>;
            searchableFields: import("zod").ZodArray<import("zod").ZodString>;
            question: import("zod").ZodOptional<import("zod").ZodString>;
            selectedBundles: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                service: import("zod").ZodString;
                keys: import("zod").ZodArray<import("zod").ZodString>;
                rowCount: import("zod").ZodNumber;
                score: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>>;
            selectedAttributeKeys: import("zod").ZodArray<import("zod").ZodString>;
            observedServiceNames: import("zod").ZodArray<import("zod").ZodString>;
            observedAttributeKeys: import("zod").ZodArray<import("zod").ZodString>;
            indexStatus: import("zod").ZodEnum<{
                empty: "empty";
                ready: "ready";
                skipped: "skipped";
                unavailable: "unavailable";
            }>;
            schemaContext: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly volume: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            startDate: import("zod").ZodString;
            endDate: import("zod").ZodString;
            interval: import("zod").ZodOptional<import("zod").ZodEnum<{
                "15m": "15m";
                "1h": "1h";
                "1m": "1m";
                "5m": "5m";
            }>>;
            groupBy: import("zod").ZodOptional<import("zod").ZodEnum<{
                environment: "environment";
                service_name: "service_name";
                severity_text: "severity_text";
            }>>;
            filters: import("zod").ZodOptional<import("zod").ZodObject<{
                service_name: import("zod").ZodOptional<import("zod").ZodString>;
                severity_text: import("zod").ZodOptional<import("zod").ZodString>;
                environment: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            total: import("zod").ZodNumber;
            startDate: import("zod").ZodString;
            endDate: import("zod").ZodString;
            interval: import("zod").ZodEnum<{
                "15m": "15m";
                "1h": "1h";
                "1m": "1m";
                "5m": "5m";
            }>;
            series: import("zod").ZodArray<import("zod").ZodObject<{
                group: import("zod").ZodString;
                total: import("zod").ZodNumber;
                points: import("zod").ZodArray<import("zod").ZodObject<{
                    bucket: import("zod").ZodString;
                    count: import("zod").ZodNumber;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly patterns: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodOptional<import("zod").ZodString>;
            severity: import("zod").ZodOptional<import("zod").ZodString>;
            startDate: import("zod").ZodOptional<import("zod").ZodString>;
            endDate: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodNumber>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            patterns: import("zod").ZodArray<import("zod").ZodObject<{
                serviceName: import("zod").ZodNullable<import("zod").ZodString>;
                fingerprint: import("zod").ZodString;
                pattern: import("zod").ZodString;
                severity: import("zod").ZodNullable<import("zod").ZodString>;
                occurrences: import("zod").ZodNumber;
                firstSeen: import("zod").ZodNullable<import("zod").ZodString>;
                lastSeen: import("zod").ZodNullable<import("zod").ZodString>;
                representativeId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            meta: import("zod").ZodObject<{
                backendId: import("zod").ZodEnum<{
                    axiom: "axiom";
                    "better-stack": "better-stack";
                    clickhouse: "clickhouse";
                    cloudwatch: "cloudwatch";
                    datadog: "datadog";
                    gcp: "gcp";
                    mezmo: "mezmo";
                    posthog: "posthog";
                    sentry: "sentry";
                }>;
                count: import("zod").ZodNumber;
                took: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly nativeQuery: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            result: import("zod").ZodString;
            format: import("zod").ZodLiteral<"text">;
            meta: import("zod").ZodObject<{
                backendId: import("zod").ZodEnum<{
                    axiom: "axiom";
                    "better-stack": "better-stack";
                    clickhouse: "clickhouse";
                    cloudwatch: "cloudwatch";
                    datadog: "datadog";
                    gcp: "gcp";
                    mezmo: "mezmo";
                    posthog: "posthog";
                    sentry: "sentry";
                }>;
                took: import("zod").ZodNumber;
                truncated: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly logSources: {
        readonly listProviders: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            providers: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                modes: import("zod").ZodArray<import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>>;
                metadataFields: import("zod").ZodArray<import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    type: import("zod").ZodString;
                    required: import("zod").ZodBoolean;
                    sensitive: import("zod").ZodBoolean;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                setupSkill: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodOptional<import("zod").ZodEnum<{
                claude_code: "claude_code";
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
                codex: "codex";
                convex: "convex";
                datadog: "datadog";
                daytona: "daytona";
                digital_ocean: "digital_ocean";
                e2b: "e2b";
                elastic_cloud: "elastic_cloud";
                fluent_bit: "fluent_bit";
                fly_io: "fly_io";
                gcp: "gcp";
                grafana_alloy: "grafana_alloy";
                inngest: "inngest";
                langchain: "langchain";
                mastra: "mastra";
                neon: "neon";
                netlify: "netlify";
                openrouter: "openrouter";
                otel: "otel";
                otel_collector: "otel_collector";
                otel_metrics: "otel_metrics";
                plain: "plain";
                porter: "porter";
                posthog: "posthog";
                posthog_sdk: "posthog_sdk";
                prometheus: "prometheus";
                railway: "railway";
                render: "render";
                respan: "respan";
                sentry: "sentry";
                sentry_platform: "sentry_platform";
                supabase: "supabase";
                temporal: "temporal";
                trigger_dev: "trigger_dev";
                vector: "vector";
                vercel: "vercel";
                webhook_events: "webhook_events";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            logSources: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    claude_code: "claude_code";
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
                    codex: "codex";
                    convex: "convex";
                    datadog: "datadog";
                    daytona: "daytona";
                    digital_ocean: "digital_ocean";
                    e2b: "e2b";
                    elastic_cloud: "elastic_cloud";
                    fluent_bit: "fluent_bit";
                    fly_io: "fly_io";
                    gcp: "gcp";
                    grafana_alloy: "grafana_alloy";
                    inngest: "inngest";
                    langchain: "langchain";
                    mastra: "mastra";
                    neon: "neon";
                    netlify: "netlify";
                    openrouter: "openrouter";
                    otel: "otel";
                    otel_collector: "otel_collector";
                    otel_metrics: "otel_metrics";
                    plain: "plain";
                    porter: "porter";
                    posthog: "posthog";
                    posthog_sdk: "posthog_sdk";
                    prometheus: "prometheus";
                    railway: "railway";
                    render: "render";
                    respan: "respan";
                    sentry: "sentry";
                    sentry_platform: "sentry_platform";
                    supabase: "supabase";
                    temporal: "temporal";
                    trigger_dev: "trigger_dev";
                    vector: "vector";
                    vercel: "vercel";
                    webhook_events: "webhook_events";
                }>;
                mode: import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>;
                name: import("zod").ZodString;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                claude_code: "claude_code";
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
                codex: "codex";
                convex: "convex";
                datadog: "datadog";
                daytona: "daytona";
                digital_ocean: "digital_ocean";
                e2b: "e2b";
                elastic_cloud: "elastic_cloud";
                fluent_bit: "fluent_bit";
                fly_io: "fly_io";
                gcp: "gcp";
                grafana_alloy: "grafana_alloy";
                inngest: "inngest";
                langchain: "langchain";
                mastra: "mastra";
                neon: "neon";
                netlify: "netlify";
                openrouter: "openrouter";
                otel: "otel";
                otel_collector: "otel_collector";
                otel_metrics: "otel_metrics";
                plain: "plain";
                porter: "porter";
                posthog: "posthog";
                posthog_sdk: "posthog_sdk";
                prometheus: "prometheus";
                railway: "railway";
                render: "render";
                respan: "respan";
                sentry: "sentry";
                sentry_platform: "sentry_platform";
                supabase: "supabase";
                temporal: "temporal";
                trigger_dev: "trigger_dev";
                vector: "vector";
                vercel: "vercel";
                webhook_events: "webhook_events";
            }>;
            mode: import("zod").ZodOptional<import("zod").ZodEnum<{
                connectionless: "connectionless";
                managed: "managed";
            }>>;
            metadata: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            logSource: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    claude_code: "claude_code";
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
                    codex: "codex";
                    convex: "convex";
                    datadog: "datadog";
                    daytona: "daytona";
                    digital_ocean: "digital_ocean";
                    e2b: "e2b";
                    elastic_cloud: "elastic_cloud";
                    fluent_bit: "fluent_bit";
                    fly_io: "fly_io";
                    gcp: "gcp";
                    grafana_alloy: "grafana_alloy";
                    inngest: "inngest";
                    langchain: "langchain";
                    mastra: "mastra";
                    neon: "neon";
                    netlify: "netlify";
                    openrouter: "openrouter";
                    otel: "otel";
                    otel_collector: "otel_collector";
                    otel_metrics: "otel_metrics";
                    plain: "plain";
                    porter: "porter";
                    posthog: "posthog";
                    posthog_sdk: "posthog_sdk";
                    prometheus: "prometheus";
                    railway: "railway";
                    render: "render";
                    respan: "respan";
                    sentry: "sentry";
                    sentry_platform: "sentry_platform";
                    supabase: "supabase";
                    temporal: "temporal";
                    trigger_dev: "trigger_dev";
                    vector: "vector";
                    vercel: "vercel";
                    webhook_events: "webhook_events";
                }>;
                mode: import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>;
                name: import("zod").ZodString;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            streamId: import("zod").ZodOptional<import("zod").ZodString>;
            publicKey: import("zod").ZodOptional<import("zod").ZodString>;
            endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                kind: import("zod").ZodEnum<{
                    hostPort: "hostPort";
                    url: "url";
                }>;
                label: import("zod").ZodOptional<import("zod").ZodString>;
                url: import("zod").ZodOptional<import("zod").ZodString>;
                host: import("zod").ZodOptional<import("zod").ZodString>;
                port: import("zod").ZodOptional<import("zod").ZodNumber>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                    label: import("zod").ZodString;
                    value: import("zod").ZodString;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            logSource: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    claude_code: "claude_code";
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
                    codex: "codex";
                    convex: "convex";
                    datadog: "datadog";
                    daytona: "daytona";
                    digital_ocean: "digital_ocean";
                    e2b: "e2b";
                    elastic_cloud: "elastic_cloud";
                    fluent_bit: "fluent_bit";
                    fly_io: "fly_io";
                    gcp: "gcp";
                    grafana_alloy: "grafana_alloy";
                    inngest: "inngest";
                    langchain: "langchain";
                    mastra: "mastra";
                    neon: "neon";
                    netlify: "netlify";
                    openrouter: "openrouter";
                    otel: "otel";
                    otel_collector: "otel_collector";
                    otel_metrics: "otel_metrics";
                    plain: "plain";
                    porter: "porter";
                    posthog: "posthog";
                    posthog_sdk: "posthog_sdk";
                    prometheus: "prometheus";
                    railway: "railway";
                    render: "render";
                    respan: "respan";
                    sentry: "sentry";
                    sentry_platform: "sentry_platform";
                    supabase: "supabase";
                    temporal: "temporal";
                    trigger_dev: "trigger_dev";
                    vector: "vector";
                    vercel: "vercel";
                    webhook_events: "webhook_events";
                }>;
                mode: import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>;
                name: import("zod").ZodString;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                streams: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    logSourceId: import("zod").ZodString;
                    displayName: import("zod").ZodNullable<import("zod").ZodString>;
                    config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                    status: import("zod").ZodEnum<{
                        active: "active";
                        error: "error";
                        pending: "pending";
                        provisioning: "provisioning";
                    }>;
                    errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                    enabled: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodString;
                    endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        kind: import("zod").ZodEnum<{
                            hostPort: "hostPort";
                            url: "url";
                        }>;
                        label: import("zod").ZodOptional<import("zod").ZodString>;
                        url: import("zod").ZodOptional<import("zod").ZodString>;
                        host: import("zod").ZodOptional<import("zod").ZodString>;
                        port: import("zod").ZodOptional<import("zod").ZodNumber>;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                        extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                            label: import("zod").ZodString;
                            value: import("zod").ZodString;
                            description: import("zod").ZodOptional<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            logSource: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    claude_code: "claude_code";
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
                    codex: "codex";
                    convex: "convex";
                    datadog: "datadog";
                    daytona: "daytona";
                    digital_ocean: "digital_ocean";
                    e2b: "e2b";
                    elastic_cloud: "elastic_cloud";
                    fluent_bit: "fluent_bit";
                    fly_io: "fly_io";
                    gcp: "gcp";
                    grafana_alloy: "grafana_alloy";
                    inngest: "inngest";
                    langchain: "langchain";
                    mastra: "mastra";
                    neon: "neon";
                    netlify: "netlify";
                    openrouter: "openrouter";
                    otel: "otel";
                    otel_collector: "otel_collector";
                    otel_metrics: "otel_metrics";
                    plain: "plain";
                    porter: "porter";
                    posthog: "posthog";
                    posthog_sdk: "posthog_sdk";
                    prometheus: "prometheus";
                    railway: "railway";
                    render: "render";
                    respan: "respan";
                    sentry: "sentry";
                    sentry_platform: "sentry_platform";
                    supabase: "supabase";
                    temporal: "temporal";
                    trigger_dev: "trigger_dev";
                    vector: "vector";
                    vercel: "vercel";
                    webhook_events: "webhook_events";
                }>;
                mode: import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>;
                name: import("zod").ZodString;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
            teardownError: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly logStreams: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            streams: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                logSourceId: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                status: import("zod").ZodEnum<{
                    active: "active";
                    error: "error";
                    pending: "pending";
                    provisioning: "provisioning";
                }>;
                errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                enabled: import("zod").ZodBoolean;
                createdAt: import("zod").ZodString;
                endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        hostPort: "hostPort";
                        url: "url";
                    }>;
                    label: import("zod").ZodOptional<import("zod").ZodString>;
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    host: import("zod").ZodOptional<import("zod").ZodString>;
                    port: import("zod").ZodOptional<import("zod").ZodNumber>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                        label: import("zod").ZodString;
                        value: import("zod").ZodString;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
            config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            stream: import("zod").ZodObject<{
                id: import("zod").ZodString;
                logSourceId: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                status: import("zod").ZodEnum<{
                    active: "active";
                    error: "error";
                    pending: "pending";
                    provisioning: "provisioning";
                }>;
                errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                enabled: import("zod").ZodBoolean;
                createdAt: import("zod").ZodString;
                endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        hostPort: "hostPort";
                        url: "url";
                    }>;
                    label: import("zod").ZodOptional<import("zod").ZodString>;
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    host: import("zod").ZodOptional<import("zod").ZodString>;
                    port: import("zod").ZodOptional<import("zod").ZodNumber>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                        label: import("zod").ZodString;
                        value: import("zod").ZodString;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            stream: import("zod").ZodObject<{
                id: import("zod").ZodString;
                logSourceId: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                status: import("zod").ZodEnum<{
                    active: "active";
                    error: "error";
                    pending: "pending";
                    provisioning: "provisioning";
                }>;
                errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                enabled: import("zod").ZodBoolean;
                createdAt: import("zod").ZodString;
                endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        hostPort: "hostPort";
                        url: "url";
                    }>;
                    label: import("zod").ZodOptional<import("zod").ZodString>;
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    host: import("zod").ZodOptional<import("zod").ZodString>;
                    port: import("zod").ZodOptional<import("zod").ZodNumber>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                        label: import("zod").ZodString;
                        value: import("zod").ZodString;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly reassign: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            targetLogSourceId: import("zod").ZodString;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            stream: import("zod").ZodObject<{
                id: import("zod").ZodString;
                logSourceId: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                status: import("zod").ZodEnum<{
                    active: "active";
                    error: "error";
                    pending: "pending";
                    provisioning: "provisioning";
                }>;
                errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                enabled: import("zod").ZodBoolean;
                createdAt: import("zod").ZodString;
                endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        hostPort: "hostPort";
                        url: "url";
                    }>;
                    label: import("zod").ZodOptional<import("zod").ZodString>;
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    host: import("zod").ZodOptional<import("zod").ZodString>;
                    port: import("zod").ZodOptional<import("zod").ZodNumber>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                        label: import("zod").ZodString;
                        value: import("zod").ZodString;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly connectedAccounts: {
        readonly beginConnect: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                google: "google";
                linear: "linear";
                microsoft: "microsoft";
                slack: "slack";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            url: import("zod").ZodString;
            attemptId: import("zod").ZodString;
            expiresAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getConnectAttempt: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            attemptId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                completed: "completed";
                expired: "expired";
                failed: "failed";
                pending: "pending";
            }>;
            errorCode: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            accounts: import("zod").ZodArray<import("zod").ZodObject<{
                provider: import("zod").ZodString;
                externalName: import("zod").ZodNullable<import("zod").ZodString>;
                externalLogin: import("zod").ZodNullable<import("zod").ZodString>;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                authMode: import("zod").ZodNullable<import("zod").ZodEnum<{
                    oauth: "oauth";
                    pat: "pat";
                }>>;
                needsReconnect: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly disconnect: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                google: "google";
                linear: "linear";
                microsoft: "microsoft";
                slack: "slack";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly integrations: {
        readonly listProviders: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            providers: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                authType: import("zod").ZodEnum<{
                    api_key: "api_key";
                    app_installation: "app_installation";
                    oauth: "oauth";
                }>;
                capabilities: import("zod").ZodArray<import("zod").ZodEnum<{
                    alert_routing: "alert_routing";
                    code_search: "code_search";
                    health_check: "health_check";
                    inbound_webhooks: "inbound_webhooks";
                    messaging: "messaging";
                }>>;
                connectionCount: import("zod").ZodNumber;
                credentialFields: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    label: import("zod").ZodString;
                    required: import("zod").ZodBoolean;
                    secret: import("zod").ZodBoolean;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>>;
                browserConnectSupported: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listConnections: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodOptional<import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                incident_io: "incident_io";
                jira: "jira";
                linear: "linear";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack: "slack";
                teams: "teams";
                victorops: "victorops";
                webhook: "webhook";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connections: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getConnection: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connection: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly createConnection: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                incident_io: "incident_io";
                jira: "jira";
                linear: "linear";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack: "slack";
                teams: "teams";
                victorops: "victorops";
                webhook: "webhook";
            }>;
            displayName: import("zod").ZodOptional<import("zod").ZodString>;
            credentials: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connection: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly beginConnect: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                incident_io: "incident_io";
                jira: "jira";
                linear: "linear";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack: "slack";
                teams: "teams";
                victorops: "victorops";
                webhook: "webhook";
            }>;
            displayName: import("zod").ZodOptional<import("zod").ZodString>;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            url: import("zod").ZodString;
            attemptId: import("zod").ZodString;
            expiresAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getConnectAttempt: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            attemptId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                completed: "completed";
                expired: "expired";
                failed: "failed";
                not_connected: "not_connected";
                pending: "pending";
            }>;
            errorCode: import("zod").ZodNullable<import("zod").ZodString>;
            connection: import("zod").ZodOptional<import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly disconnectConnection: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly updateConnectionCredentials: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            credentials: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connection: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getOrganizationExternalIdentityJitPolicy: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizationEnabled: import("zod").ZodBoolean;
            effectiveEnabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly updateOrganizationExternalIdentityJitPolicy: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            enabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizationEnabled: import("zod").ZodBoolean;
            effectiveEnabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getConnectionExternalIdentityJitPolicy: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizationEnabled: import("zod").ZodBoolean;
            connectionEnabled: import("zod").ZodBoolean;
            effectiveEnabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly updateConnectionExternalIdentityJitPolicy: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            enabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizationEnabled: import("zod").ZodBoolean;
            connectionEnabled: import("zod").ZodBoolean;
            effectiveEnabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getSlackConfiguration: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            defaultProjectId: import("zod").ZodNullable<import("zod").ZodString>;
            automaticResponses: import("zod").ZodBoolean;
            acknowledgementMessage: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly updateSlackConfiguration: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            defaultProjectId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            automaticResponses: import("zod").ZodOptional<import("zod").ZodBoolean>;
            acknowledgementMessage: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            defaultProjectId: import("zod").ZodNullable<import("zod").ZodString>;
            automaticResponses: import("zod").ZodBoolean;
            acknowledgementMessage: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listSlackChannelProjectMappings: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            mappings: import("zod").ZodArray<import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                slackChannelId: import("zod").ZodString;
                slackChannelName: import("zod").ZodString;
                projectId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly setSlackChannelProjectMapping: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            slackChannelId: import("zod").ZodString;
            slackChannelName: import("zod").ZodOptional<import("zod").ZodString>;
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            slackChannelId: import("zod").ZodString;
            slackChannelName: import("zod").ZodString;
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly deleteSlackChannelProjectMapping: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            slackChannelId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly notificationChannels: {
        readonly getProject: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            channelCards: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
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
                }>;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                scope: import("zod").ZodEnum<{
                    personal: "personal";
                    project: "project";
                }>;
                enabled: import("zod").ZodNullable<import("zod").ZodBoolean>;
                preferenceId: import("zod").ZodNullable<import("zod").ZodString>;
                prerequisite: import("zod").ZodObject<{
                    status: import("zod").ZodEnum<{
                        degraded: "degraded";
                        missing: "missing";
                        ready: "ready";
                        unavailable: "unavailable";
                    }>;
                    statusLabel: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                action: import("zod").ZodNullable<import("zod").ZodObject<{
                    label: import("zod").ZodString;
                    href: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
                destinations: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    label: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        active: "active";
                        degraded: "degraded";
                        inactive: "inactive";
                    }>;
                    statusLabel: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
                destinationManagement: import("zod").ZodEnum<{
                    integration_connections: "integration_connections";
                    none: "none";
                    slack_channels: "slack_channels";
                    teams_channels: "teams_channels";
                    webhook_endpoints: "webhook_endpoints";
                }>;
                canCreateDestinations: import("zod").ZodBoolean;
                supportedNotificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                    automation_finished: "automation_finished";
                    automation_run_failed: "automation_run_failed";
                    billing_auto_top_up_failed: "billing_auto_top_up_failed";
                    billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
                    billing_credit_balance_depleted: "billing_credit_balance_depleted";
                    billing_credit_balance_low: "billing_credit_balance_low";
                    billing_invoice_paid: "billing_invoice_paid";
                    billing_invoice_payment_failed: "billing_invoice_payment_failed";
                    billing_negative_balance_collected: "billing_negative_balance_collected";
                    billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
                    billing_payment_method_changed: "billing_payment_method_changed";
                    billing_payment_method_expiring: "billing_payment_method_expiring";
                    billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
                    billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
                    billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
                    billing_subscription_canceled: "billing_subscription_canceled";
                    billing_subscription_cancellation_scheduled: "billing_subscription_cancellation_scheduled";
                    code_repo_connected: "code_repo_connected";
                    code_repo_disconnected: "code_repo_disconnected";
                    github_connected: "github_connected";
                    github_disconnected: "github_disconnected";
                    integration_connected: "integration_connected";
                    integration_disconnected: "integration_disconnected";
                    issue_ignored: "issue_ignored";
                    issue_resolved: "issue_resolved";
                    issue_triggered: "issue_triggered";
                    log_source_connected: "log_source_connected";
                    log_source_disconnected: "log_source_disconnected";
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
            }, import("zod/v4/core").$strip>>;
            channels: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                enabled: import("zod").ZodBoolean;
                preferenceId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            notificationTypePreferences: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                notificationType: import("zod").ZodEnum<{
                    automation_finished: "automation_finished";
                    automation_run_failed: "automation_run_failed";
                    billing_auto_top_up_failed: "billing_auto_top_up_failed";
                    billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
                    billing_credit_balance_depleted: "billing_credit_balance_depleted";
                    billing_credit_balance_low: "billing_credit_balance_low";
                    billing_invoice_paid: "billing_invoice_paid";
                    billing_invoice_payment_failed: "billing_invoice_payment_failed";
                    billing_negative_balance_collected: "billing_negative_balance_collected";
                    billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
                    billing_payment_method_changed: "billing_payment_method_changed";
                    billing_payment_method_expiring: "billing_payment_method_expiring";
                    billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
                    billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
                    billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
                    billing_subscription_canceled: "billing_subscription_canceled";
                    billing_subscription_cancellation_scheduled: "billing_subscription_cancellation_scheduled";
                    code_repo_connected: "code_repo_connected";
                    code_repo_disconnected: "code_repo_disconnected";
                    github_connected: "github_connected";
                    github_disconnected: "github_disconnected";
                    integration_connected: "integration_connected";
                    integration_disconnected: "integration_disconnected";
                    issue_ignored: "issue_ignored";
                    issue_resolved: "issue_resolved";
                    issue_triggered: "issue_triggered";
                    log_source_connected: "log_source_connected";
                    log_source_disconnected: "log_source_disconnected";
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
                }>;
                enabled: import("zod").ZodBoolean;
                preferenceId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            issueNotificationMinSeverity: import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly notificationDeliveryRules: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            rules: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                    automation_run_failed: "automation_run_failed";
                    issue_ignored: "issue_ignored";
                    issue_resolved: "issue_resolved";
                    issue_triggered: "issue_triggered";
                }>>;
                destinations: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    channel: import("zod").ZodEnum<{
                        incident_io: "incident_io";
                        pagerduty: "pagerduty";
                        rootly: "rootly";
                        slack_channel: "slack_channel";
                        teams_channel: "teams_channel";
                        webhook: "webhook";
                    }>;
                    destinationKey: import("zod").ZodString;
                    displayName: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
                condition: import("zod").ZodObject<{
                    severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                        critical: "critical";
                        high: "high";
                        low: "low";
                        medium: "medium";
                    }>>>;
                }, import("zod/v4/core").$strict>;
                component: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    label: import("zod").ZodString;
                    lifecycle: import("zod").ZodEnum<{
                        active: "active";
                        merged: "merged";
                        retired: "retired";
                    }>;
                }, import("zod/v4/core").$strip>>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                includeDescendants: import("zod").ZodBoolean;
                suspendedAt: import("zod").ZodNullable<import("zod").ZodString>;
                suspensionReason: import("zod").ZodNullable<import("zod").ZodString>;
                components: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    label: import("zod").ZodString;
                    lifecycle: import("zod").ZodEnum<{
                        active: "active";
                        merged: "merged";
                        retired: "retired";
                    }>;
                }, import("zod/v4/core").$strip>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly options: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            notificationTypes: import("zod").ZodArray<import("zod").ZodObject<{
                notificationType: import("zod").ZodEnum<{
                    automation_run_failed: "automation_run_failed";
                    issue_ignored: "issue_ignored";
                    issue_resolved: "issue_resolved";
                    issue_triggered: "issue_triggered";
                }>;
                label: import("zod").ZodString;
                conditions: import("zod").ZodArray<import("zod").ZodEnum<{
                    component: "component";
                    severity: "severity";
                }>>;
            }, import("zod/v4/core").$strip>>;
            components: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            componentIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            includeDescendants: import("zod").ZodDefault<import("zod").ZodBoolean>;
            condition: import("zod").ZodUnion<readonly [import("zod").ZodObject<{
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
                componentIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>]>;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodString;
            notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            condition: import("zod").ZodObject<{
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>;
            component: import("zod").ZodNullable<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
            componentId: import("zod").ZodNullable<import("zod").ZodString>;
            includeDescendants: import("zod").ZodBoolean;
            suspendedAt: import("zod").ZodNullable<import("zod").ZodString>;
            suspensionReason: import("zod").ZodNullable<import("zod").ZodString>;
            components: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
            createdAt: import("zod").ZodString;
            updatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            componentIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            includeDescendants: import("zod").ZodDefault<import("zod").ZodBoolean>;
            condition: import("zod").ZodUnion<readonly [import("zod").ZodObject<{
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
                componentIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>]>;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            ruleId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodString;
            notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            condition: import("zod").ZodObject<{
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>;
            component: import("zod").ZodNullable<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
            componentId: import("zod").ZodNullable<import("zod").ZodString>;
            includeDescendants: import("zod").ZodBoolean;
            suspendedAt: import("zod").ZodNullable<import("zod").ZodString>;
            suspensionReason: import("zod").ZodNullable<import("zod").ZodString>;
            components: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
            createdAt: import("zod").ZodString;
            updatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            ruleId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            removed: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly mcpConnectors: {
        readonly listProviders: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            providers: import("zod").ZodArray<import("zod").ZodObject<{
                providerId: import("zod").ZodString;
                label: import("zod").ZodString;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                availability: import("zod").ZodEnum<{
                    "custom-only": "custom-only";
                    disabled: "disabled";
                    enabled: "enabled";
                }>;
                setupSkill: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            connectedOnly: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectors: import("zod").ZodArray<import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly details: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            tools: import("zod").ZodArray<import("zod").ZodObject<{
                name: import("zod").ZodString;
                title: import("zod").ZodString;
                description: import("zod").ZodString;
                isReadOnly: import("zod").ZodBoolean;
                enabled: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly search: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodOptional<import("zod").ZodString>;
            namespace: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            offset: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            includeInputSchema: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            kind: import("zod").ZodEnum<{
                connectors: "connectors";
                tools: "tools";
            }>;
            total: import("zod").ZodNumber;
            connectors: import("zod").ZodArray<import("zod").ZodObject<{
                connectionKey: import("zod").ZodString;
                displayName: import("zod").ZodString;
                providerId: import("zod").ZodString;
                toolCount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
            tools: import("zod").ZodArray<import("zod").ZodObject<{
                connectionKey: import("zod").ZodString;
                toolName: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                isReadOnly: import("zod").ZodBoolean;
                description: import("zod").ZodString;
                score: import("zod").ZodNumber;
                inputSchema: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly describe: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionKey: import("zod").ZodString;
            toolName: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionKey: import("zod").ZodString;
            toolName: import("zod").ZodString;
            providerId: import("zod").ZodString;
            displayName: import("zod").ZodString;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            isReadOnly: import("zod").ZodBoolean;
            inputSchema: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly call: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionKey: import("zod").ZodString;
            toolName: import("zod").ZodString;
            arguments: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
            ok: import("zod").ZodLiteral<true>;
            connectionKey: import("zod").ZodString;
            toolName: import("zod").ZodString;
            result: import("zod").ZodUnknown;
            structuredContent: import("zod").ZodOptional<import("zod").ZodUnknown>;
            content: import("zod").ZodArray<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
            text: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            ok: import("zod").ZodLiteral<false>;
            code: import("zod").ZodEnum<{
                MCP_ERROR: "MCP_ERROR";
                READ_ONLY: "READ_ONLY";
                TOOL_NOT_ENABLED: "TOOL_NOT_ENABLED";
            }>;
            message: import("zod").ZodString;
        }, import("zod/v4/core").$strip>], "ok">, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            serverUrl: import("zod").ZodString;
            transport: import("zod").ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            headers: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>>;
            awsSigV4: import("zod").ZodOptional<import("zod").ZodObject<{
                accessKeyId: import("zod").ZodString;
                secretAccessKey: import("zod").ZodString;
                sessionToken: import("zod").ZodOptional<import("zod").ZodString>;
                region: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            providerId: import("zod").ZodString;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            serverUrl: import("zod").ZodOptional<import("zod").ZodString>;
            transport: import("zod").ZodOptional<import("zod").ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>>;
            headers: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>>;
            awsSigV4: import("zod").ZodOptional<import("zod").ZodObject<{
                accessKeyId: import("zod").ZodString;
                secretAccessKey: import("zod").ZodString;
                sessionToken: import("zod").ZodOptional<import("zod").ZodString>;
                region: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly disconnect: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly setReadOnly: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            readOnly: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly beginOAuthInstall: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            providerId: import("zod").ZodString;
            requestedScopes: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            serverUrl: import("zod").ZodOptional<import("zod").ZodString>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            returnTo: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            authorizationUrl: import("zod").ZodString;
            connectionId: import("zod").ZodString;
            expiresAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getOAuthInstallAttempt: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                authorizing: "authorizing";
                connected: "connected";
                error: "error";
            }>;
            connector: import("zod").ZodOptional<import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly sandboxPresets: {
        readonly deletePreset: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            presetType: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            projectId: import("zod").ZodString;
            presetType: import("zod").ZodString;
            deleted: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listConnections: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connections: import("zod").ZodArray<import("zod").ZodObject<{
                presetType: import("zod").ZodString;
                credentialSource: import("zod").ZodEnum<{
                    bitbucket_integration: "bitbucket_integration";
                    github_app: "github_app";
                    personal_access_token: "personal_access_token";
                    stored_credentials: "stored_credentials";
                }>;
                isSystemManaged: import("zod").ZodBoolean;
                fallbackConfigured: import("zod").ZodBoolean;
                envVarKeys: import("zod").ZodArray<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listTypes: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            types: import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                label: import("zod").ZodString;
                executableNames: import("zod").ZodArray<import("zod").ZodString>;
                envVarKeys: import("zod").ZodArray<import("zod").ZodString>;
                setupSkill: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly testPreset: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            presetType: import("zod").ZodString;
            environmentVariables: import("zod").ZodArray<import("zod").ZodObject<{
                key: import("zod").ZodString;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                failed: "failed";
                success: "success";
            }>;
            message: import("zod").ZodNullable<import("zod").ZodString>;
            stdout: import("zod").ZodString;
            stderr: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly upsertPreset: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            presetType: import("zod").ZodString;
            environmentVariables: import("zod").ZodArray<import("zod").ZodObject<{
                key: import("zod").ZodString;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            projectId: import("zod").ZodString;
            presetType: import("zod").ZodString;
            envVarKeys: import("zod").ZodArray<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly scripts: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            search: import("zod").ZodOptional<import("zod").ZodString>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            scripts: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            name: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            script: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                content: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            content: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            script: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                content: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            name: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            script: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                content: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            name: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly logMatchExpressions: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expressions: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            expressionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expression: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            expression: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expression: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            expressionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            expression: import("zod").ZodOptional<import("zod").ZodString>;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expression: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly disable: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            expressionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expression: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly signalDefinitions: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinitions: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            signalDefinitionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinition: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            expression: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinition: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            signalDefinitionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            expression: import("zod").ZodOptional<import("zod").ZodString>;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinition: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly disable: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            signalDefinitionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinition: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            signalDefinitionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly memory: {
        readonly put: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            path: import("zod").ZodString;
            body: import("zod").ZodString;
            kind: import("zod").ZodDefault<import("zod").ZodEnum<{
                note: "note";
                runbook: "runbook";
            }>>;
            title: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            document: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    change: "change";
                    note: "note";
                    runbook: "runbook";
                }>;
                managed: import("zod").ZodBoolean;
                path: import("zod").ZodNullable<import("zod").ZodString>;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                attrs: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                body: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            id: import("zod").ZodOptional<import("zod").ZodString>;
            path: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            document: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    change: "change";
                    note: "note";
                    runbook: "runbook";
                }>;
                managed: import("zod").ZodBoolean;
                path: import("zod").ZodNullable<import("zod").ZodString>;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                attrs: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                body: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            kind: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<("change" | "note" | "runbook")[], string>>>;
            since: import("zod").ZodOptional<import("zod").ZodString>;
            service: import("zod").ZodOptional<import("zod").ZodString>;
            pathPrefix: import("zod").ZodOptional<import("zod").ZodString>;
            managed: import("zod").ZodOptional<import("zod").ZodCoercedBoolean<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            documents: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    change: "change";
                    note: "note";
                    runbook: "runbook";
                }>;
                managed: import("zod").ZodBoolean;
                path: import("zod").ZodNullable<import("zod").ZodString>;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                attrs: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly search: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
            kind: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<("change" | "note" | "runbook")[], string>>>;
            since: import("zod").ZodOptional<import("zod").ZodString>;
            service: import("zod").ZodOptional<import("zod").ZodString>;
            pathPrefix: import("zod").ZodOptional<import("zod").ZodString>;
            managed: import("zod").ZodOptional<import("zod").ZodCoercedBoolean<unknown>>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            hits: import("zod").ZodArray<import("zod").ZodObject<{
                documentId: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    change: "change";
                    note: "note";
                    runbook: "runbook";
                }>;
                managed: import("zod").ZodBoolean;
                path: import("zod").ZodNullable<import("zod").ZodString>;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                snippet: import("zod").ZodString;
                score: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
            emptyVerdict: import("zod").ZodNullable<import("zod").ZodObject<{
                calibrated: import("zod").ZodLiteral<true>;
                minScoreThreshold: import("zod").ZodNumber;
                queryTerms: import("zod").ZodArray<import("zod").ZodString>;
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            id: import("zod").ZodOptional<import("zod").ZodString>;
            path: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly onboarding: {
        readonly getState: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            onboarding: import("zod").ZodObject<{
                gate: import("zod").ZodEnum<{
                    blocked: "blocked";
                    "needs-onboarding": "needs-onboarding";
                    ready: "ready";
                }>;
                canonicalStep: import("zod").ZodNullable<import("zod").ZodEnum<{
                    "accept-invite": "accept-invite";
                    billing: "billing";
                    "configure-code-search": "configure-code-search";
                    "configure-project": "configure-project";
                    "configure-slack-notifications": "configure-slack-notifications";
                    "confirm-issue": "confirm-issue";
                    "connect-github-account": "connect-github-account";
                    "create-organization": "create-organization";
                    finish: "finish";
                    "install-github-app": "install-github-app";
                    "install-slack-app": "install-slack-app";
                    "trigger-issue": "trigger-issue";
                    "verify-email": "verify-email";
                }>>;
                organizationId: import("zod").ZodNullable<import("zod").ZodString>;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
                completionByStep: import("zod").ZodRecord<import("zod").ZodEnum<{
                    "accept-invite": "accept-invite";
                    billing: "billing";
                    "configure-code-search": "configure-code-search";
                    "configure-project": "configure-project";
                    "configure-slack-notifications": "configure-slack-notifications";
                    "confirm-issue": "confirm-issue";
                    "connect-github-account": "connect-github-account";
                    "create-organization": "create-organization";
                    finish: "finish";
                    "install-github-app": "install-github-app";
                    "install-slack-app": "install-slack-app";
                    "trigger-issue": "trigger-issue";
                    "verify-email": "verify-email";
                }>, import("zod").ZodEnum<{
                    complete: "complete";
                    incomplete: "incomplete";
                    skipped: "skipped";
                }>>;
                githubSkipped: import("zod").ZodBoolean;
                githubAppSkipped: import("zod").ZodBoolean;
                slackSkipped: import("zod").ZodBoolean;
                sampleIssueId: import("zod").ZodNullable<import("zod").ZodString>;
                actorRole: import("zod").ZodNullable<import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>>;
                requiredStep: import("zod").ZodNullable<import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                    "accept-invite": "accept-invite";
                    billing: "billing";
                    "configure-code-search": "configure-code-search";
                    "configure-project": "configure-project";
                    "configure-slack-notifications": "configure-slack-notifications";
                    "confirm-issue": "confirm-issue";
                    "connect-github-account": "connect-github-account";
                    "create-organization": "create-organization";
                    finish: "finish";
                    "install-github-app": "install-github-app";
                    "install-slack-app": "install-slack-app";
                    "trigger-issue": "trigger-issue";
                    "verify-email": "verify-email";
                }>, import("zod").ZodLiteral<"select-organization">]>>;
                isCompleted: import("zod").ZodBoolean;
                onboardingRecommendationsThreadId: import("zod").ZodNullable<import("zod").ZodString>;
                hasOrganizations: import("zod").ZodBoolean;
                hasPaidBillingSubscription: import("zod").ZodBoolean;
                billingStepEnabled: import("zod").ZodBoolean;
                pendingInvitations: import("zod").ZodArray<import("zod").ZodObject<{
                    invitationId: import("zod").ZodString;
                    organizationId: import("zod").ZodString;
                    organizationName: import("zod").ZodString;
                    organizationSlug: import("zod").ZodString;
                    organizationImageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    inviterName: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly skipIntegration: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            integration: import("zod").ZodEnum<{
                github: "github";
                slack: "slack";
            }>;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly skipGithubAppInstallation: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly skipSampleIssue: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly finish: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            completed: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly organizations: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                slug: import("zod").ZodString;
                logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                role: import("zod").ZodOptional<import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organization: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                slug: import("zod").ZodString;
                logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            name: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organization: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                slug: import("zod").ZodString;
                logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodString;
            name: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organization: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                slug: import("zod").ZodString;
                logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly members: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            members: import("zod").ZodArray<import("zod").ZodObject<{
                membershipId: import("zod").ZodString;
                userId: import("zod").ZodString;
                name: import("zod").ZodNullable<import("zod").ZodString>;
                email: import("zod").ZodString;
                imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                role: import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly updateRole: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            member: import("zod").ZodString;
            role: import("zod").ZodEnum<{
                admin: "admin";
                member: "member";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            member: import("zod").ZodObject<{
                membershipId: import("zod").ZodString;
                userId: import("zod").ZodString;
                name: import("zod").ZodNullable<import("zod").ZodString>;
                email: import("zod").ZodString;
                imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                role: import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly remove: import("@orpc/contract").ContractProcedure<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                member: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            member: string;
            organizationId?: string | undefined;
        }, {
            params: {
                member: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            removedUserId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly invite: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            email: import("zod").ZodString;
            role: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<{
                admin: "admin";
                member: "member";
            }>>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            invitation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                email: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>;
                status: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                expiresAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listInvitations: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            invitations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                email: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>;
                status: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                expiresAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly revokeInvitation: import("@orpc/contract").ContractProcedure<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                invitationId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            invitationId: string;
            organizationId?: string | undefined;
        }, {
            params: {
                invitationId: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            revokedInvitationId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly teams: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            teams: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                memberCount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            teamId: import("zod").ZodString;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                teamId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            teamId: string;
            organizationId?: string | undefined;
        }, {
            params: {
                teamId: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly addMember: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            teamId: import("zod").ZodString;
            userId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly removeMember: import("@orpc/contract").ContractProcedure<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                teamId: import("zod").ZodString;
                userId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            teamId: string;
            userId: string;
            organizationId?: string | undefined;
        }, {
            params: {
                teamId: string;
                userId: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listMembers: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            teamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            members: import("zod").ZodArray<import("zod").ZodObject<{
                userId: import("zod").ZodString;
                name: import("zod").ZodNullable<import("zod").ZodString>;
                email: import("zod").ZodString;
                addedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly publicKeys: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            publicKeys: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            keyId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            publicKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly ensureLogForwarding: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            publicKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            keyId: import("zod").ZodString;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            expiresAt: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            publicKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly deactivate: import("@orpc/contract").ContractProcedure<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                keyId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            keyId: string;
            projectId?: string | undefined;
        }, {
            params: {
                keyId: string;
            };
            query: {
                projectId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            publicKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly secretKeys: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            secretKeys: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            keyId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            secretKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            expiresAt: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            secretKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            keyId: import("zod").ZodString;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            expiresAt: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            secretKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                keyId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            keyId: string;
        }, {
            params: {
                keyId: string;
            };
        }>>, import("zod").ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly projects: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            projects: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                name: import("zod").ZodString;
                region: import("zod").ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "eu-central-2": "eu-central-2";
                    "eu-north-1": "eu-north-1";
                    "eu-south-1": "eu-south-1";
                    "eu-south-2": "eu-south-2";
                    "eu-west-1": "eu-west-1";
                    "eu-west-2": "eu-west-2";
                    "eu-west-3": "eu-west-3";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-1": "us-west-1";
                    "us-west-2": "us-west-2";
                }>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            project: import("zod").ZodObject<{
                id: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                name: import("zod").ZodString;
                region: import("zod").ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "eu-central-2": "eu-central-2";
                    "eu-north-1": "eu-north-1";
                    "eu-south-1": "eu-south-1";
                    "eu-south-2": "eu-south-2";
                    "eu-west-1": "eu-west-1";
                    "eu-west-2": "eu-west-2";
                    "eu-west-3": "eu-west-3";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-1": "us-west-1";
                    "us-west-2": "us-west-2";
                }>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            region: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<{
                "eu-central-1": "eu-central-1";
                "eu-central-2": "eu-central-2";
                "eu-north-1": "eu-north-1";
                "eu-south-1": "eu-south-1";
                "eu-south-2": "eu-south-2";
                "eu-west-1": "eu-west-1";
                "eu-west-2": "eu-west-2";
                "eu-west-3": "eu-west-3";
                "us-east-1": "us-east-1";
                "us-east-2": "us-east-2";
                "us-west-1": "us-west-1";
                "us-west-2": "us-west-2";
            }>>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            project: import("zod").ZodObject<{
                id: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                name: import("zod").ZodString;
                region: import("zod").ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "eu-central-2": "eu-central-2";
                    "eu-north-1": "eu-north-1";
                    "eu-south-1": "eu-south-1";
                    "eu-south-2": "eu-south-2";
                    "eu-west-1": "eu-west-1";
                    "eu-west-2": "eu-west-2";
                    "eu-west-3": "eu-west-3";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-1": "us-west-1";
                    "us-west-2": "us-west-2";
                }>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodString;
            name: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            project: import("zod").ZodObject<{
                id: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                name: import("zod").ZodString;
                region: import("zod").ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "eu-central-2": "eu-central-2";
                    "eu-north-1": "eu-north-1";
                    "eu-south-1": "eu-south-1";
                    "eu-south-2": "eu-south-2";
                    "eu-west-1": "eu-west-1";
                    "eu-west-2": "eu-west-2";
                    "eu-west-3": "eu-west-3";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-1": "us-west-1";
                    "us-west-2": "us-west-2";
                }>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly delete: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly search: {
        readonly threads: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            page: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            threads: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                title: import("zod").ZodString;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                labels: import("zod").ZodArray<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                highlights: import("zod").ZodArray<import("zod").ZodString>;
                score: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>>;
            pagination: import("zod").ZodObject<{
                page: import("zod").ZodNumber;
                limit: import("zod").ZodNumber;
                totalResults: import("zod").ZodNumber;
                totalPages: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly messages: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            page: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            threadId: import("zod").ZodOptional<import("zod").ZodString>;
            role: import("zod").ZodOptional<import("zod").ZodEnum<{
                assistant: "assistant";
                user: "user";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            messages: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                threadId: import("zod").ZodString;
                threadTitle: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    assistant: "assistant";
                    user: "user";
                }>;
                content: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                highlights: import("zod").ZodArray<import("zod").ZodString>;
                score: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>>;
            pagination: import("zod").ZodObject<{
                page: import("zod").ZodNumber;
                limit: import("zod").ZodNumber;
                totalResults: import("zod").ZodNumber;
                totalPages: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly messages: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            messages: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    assistant: "assistant";
                    user: "user";
                }>;
                content: import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"message">;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"reasoning">;
                    reasoning: import("zod").ZodString;
                    status: import("zod").ZodOptional<import("zod").ZodEnum<{
                        complete: "complete";
                        in_progress: "in_progress";
                    }>>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"tool_call">;
                    name: import("zod").ZodString;
                    params: import("zod").ZodOptional<import("zod").ZodAny>;
                    result: import("zod").ZodOptional<import("zod").ZodAny>;
                    status: import("zod").ZodOptional<import("zod").ZodEnum<{
                        error: "error";
                        in_progress: "in_progress";
                        success: "success";
                        unknown: "unknown";
                    }>>;
                    toolCallId: import("zod").ZodOptional<import("zod").ZodString>;
                    durationMs: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"artifact">;
                    name: import("zod").ZodEnum<{
                        alert_card: "alert_card";
                        integration_required: "integration_required";
                        issue_card: "issue_card";
                        log_detail: "log_detail";
                        mdx: "mdx";
                        table: "table";
                        timeseries: "timeseries";
                    }>;
                    data: import("zod").ZodAny;
                    toolCallId: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"fork">;
                    sourceThreadId: import("zod").ZodString;
                    sourceMessageId: import("zod").ZodString;
                    sourceThreadTitle: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"summary">;
                    summary: import("zod").ZodString;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"slack_context">;
                    channelId: import("zod").ZodString;
                    isTruncated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    messages: import("zod").ZodArray<import("zod").ZodObject<{
                        timestamp: import("zod").ZodString;
                        slackUserId: import("zod").ZodOptional<import("zod").ZodString>;
                        displayName: import("zod").ZodString;
                        text: import("zod").ZodString;
                        isBot: import("zod").ZodBoolean;
                        files: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            mimetype: import("zod").ZodString;
                            size: import("zod").ZodOptional<import("zod").ZodNumber>;
                            attachmentId: import("zod").ZodOptional<import("zod").ZodString>;
                            ingestionStatus: import("zod").ZodOptional<import("zod").ZodEnum<{
                                attached: "attached";
                                oversized: "oversized";
                                skipped: "skipped";
                                unavailable: "unavailable";
                                unsupported: "unsupported";
                            }>>;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"teams_context">;
                    conversationId: import("zod").ZodString;
                    isTruncated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    messages: import("zod").ZodArray<import("zod").ZodObject<{
                        activityId: import("zod").ZodOptional<import("zod").ZodString>;
                        displayName: import("zod").ZodString;
                        text: import("zod").ZodString;
                        isBot: import("zod").ZodBoolean;
                        createdDateTime: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>]>>;
                source: import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly append: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            message: import("zod").ZodString;
            wait: import("zod").ZodDefault<import("zod").ZodBoolean>;
            timeoutSeconds: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            automationId: import("zod").ZodOptional<import("zod").ZodString>;
            ambientServiceRun: import("zod").ZodOptional<import("zod").ZodLiteral<true>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            completed: import("zod").ZodBoolean;
            threadId: import("zod").ZodString;
            runId: import("zod").ZodString;
            messageId: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodEnum<{
                aborted: "aborted";
                completed: "completed";
                error: "error";
                processing: "processing";
            }>;
            response: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly threads: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            threads: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            thread: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            messages: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    assistant: "assistant";
                    user: "user";
                }>;
                content: import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"message">;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"reasoning">;
                    reasoning: import("zod").ZodString;
                    status: import("zod").ZodOptional<import("zod").ZodEnum<{
                        complete: "complete";
                        in_progress: "in_progress";
                    }>>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"tool_call">;
                    name: import("zod").ZodString;
                    params: import("zod").ZodOptional<import("zod").ZodAny>;
                    result: import("zod").ZodOptional<import("zod").ZodAny>;
                    status: import("zod").ZodOptional<import("zod").ZodEnum<{
                        error: "error";
                        in_progress: "in_progress";
                        success: "success";
                        unknown: "unknown";
                    }>>;
                    toolCallId: import("zod").ZodOptional<import("zod").ZodString>;
                    durationMs: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"artifact">;
                    name: import("zod").ZodEnum<{
                        alert_card: "alert_card";
                        integration_required: "integration_required";
                        issue_card: "issue_card";
                        log_detail: "log_detail";
                        mdx: "mdx";
                        table: "table";
                        timeseries: "timeseries";
                    }>;
                    data: import("zod").ZodAny;
                    toolCallId: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"fork">;
                    sourceThreadId: import("zod").ZodString;
                    sourceMessageId: import("zod").ZodString;
                    sourceThreadTitle: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"summary">;
                    summary: import("zod").ZodString;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"slack_context">;
                    channelId: import("zod").ZodString;
                    isTruncated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    messages: import("zod").ZodArray<import("zod").ZodObject<{
                        timestamp: import("zod").ZodString;
                        slackUserId: import("zod").ZodOptional<import("zod").ZodString>;
                        displayName: import("zod").ZodString;
                        text: import("zod").ZodString;
                        isBot: import("zod").ZodBoolean;
                        files: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            mimetype: import("zod").ZodString;
                            size: import("zod").ZodOptional<import("zod").ZodNumber>;
                            attachmentId: import("zod").ZodOptional<import("zod").ZodString>;
                            ingestionStatus: import("zod").ZodOptional<import("zod").ZodEnum<{
                                attached: "attached";
                                oversized: "oversized";
                                skipped: "skipped";
                                unavailable: "unavailable";
                                unsupported: "unsupported";
                            }>>;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"teams_context">;
                    conversationId: import("zod").ZodString;
                    isTruncated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    messages: import("zod").ZodArray<import("zod").ZodObject<{
                        activityId: import("zod").ZodOptional<import("zod").ZodString>;
                        displayName: import("zod").ZodString;
                        text: import("zod").ZodString;
                        isBot: import("zod").ZodBoolean;
                        createdDateTime: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>]>>;
                source: import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getStatus: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                idle: "idle";
                processing: "processing";
            }>;
            lastRunStatus: import("zod").ZodNullable<import("zod").ZodEnum<{
                error: "error";
            }>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly stop: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            message: import("zod").ZodString;
            wait: import("zod").ZodDefault<import("zod").ZodBoolean>;
            timeoutSeconds: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            automationId: import("zod").ZodOptional<import("zod").ZodString>;
            ambientServiceRun: import("zod").ZodOptional<import("zod").ZodLiteral<true>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            completed: import("zod").ZodBoolean;
            threadId: import("zod").ZodString;
            runId: import("zod").ZodString;
            messageId: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodEnum<{
                aborted: "aborted";
                completed: "completed";
                error: "error";
                processing: "processing";
            }>;
            response: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly update: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            status: import("zod").ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            thread: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly fork: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            messageId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            thread: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly setVisibility: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            visibility: import("zod").ZodEnum<{
                organization: "organization";
                private: "private";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            thread: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            visibility: import("zod").ZodEnum<{
                organization: "organization";
                private: "private";
            }>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly createShareLink: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            share: import("zod").ZodObject<{
                shareId: import("zod").ZodString;
                threadId: import("zod").ZodString;
                url: import("zod").ZodString;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listShareLinks: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            shares: import("zod").ZodArray<import("zod").ZodObject<{
                shareId: import("zod").ZodString;
                threadId: import("zod").ZodString;
                url: import("zod").ZodString;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly revokeShareLink: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            shareId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly runs: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            runs: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                threadId: import("zod").ZodString;
                userMessageId: import("zod").ZodNullable<import("zod").ZodString>;
                assistantMessageId: import("zod").ZodNullable<import("zod").ZodString>;
                parentRunId: import("zod").ZodNullable<import("zod").ZodString>;
                workflowRunId: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    aborted: "aborted";
                    completed: "completed";
                    error: "error";
                    processing: "processing";
                }>;
                source: import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                completedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listForThread: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            runs: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                threadId: import("zod").ZodString;
                userMessageId: import("zod").ZodNullable<import("zod").ZodString>;
                assistantMessageId: import("zod").ZodNullable<import("zod").ZodString>;
                parentRunId: import("zod").ZodNullable<import("zod").ZodString>;
                workflowRunId: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    aborted: "aborted";
                    completed: "completed";
                    error: "error";
                    processing: "processing";
                }>;
                source: import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                completedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            runId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            completed: import("zod").ZodBoolean;
            threadId: import("zod").ZodString;
            runId: import("zod").ZodString;
            messageId: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodEnum<{
                aborted: "aborted";
                completed: "completed";
                error: "error";
                processing: "processing";
            }>;
            response: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly cancel: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            runId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly pullRequests: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                closed: "closed";
                merged: "merged";
                open: "open";
            }>>;
            repositoryFullName: import("zod").ZodOptional<import("zod").ZodString>;
            requestedByUserId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            pullRequests: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                repositoryFullName: import("zod").ZodString;
                pullRequestId: import("zod").ZodString;
                githubPullRequestId: import("zod").ZodNumber;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                url: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodNullable<import("zod").ZodEnum<{
                    closed: "closed";
                    merged: "merged";
                    open: "open";
                }>>;
                reviewState: import("zod").ZodNullable<import("zod").ZodEnum<{
                    approved: "approved";
                    changes_requested: "changes_requested";
                    review_required: "review_required";
                }>>;
                checksState: import("zod").ZodNullable<import("zod").ZodEnum<{
                    failing: "failing";
                    passing: "passing";
                    pending: "pending";
                }>>;
                requestedByUserId: import("zod").ZodNullable<import("zod").ZodString>;
                authorLogin: import("zod").ZodNullable<import("zod").ZodString>;
                githubAuthorLogin: import("zod").ZodNullable<import("zod").ZodString>;
                threadId: import("zod").ZodNullable<import("zod").ZodString>;
                runId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                mergedAt: import("zod").ZodNullable<import("zod").ZodString>;
                closedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly issues: {
        readonly count: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>>;
            severity: import("zod").ZodOptional<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            total: import("zod").ZodNumber;
            byStatus: import("zod").ZodObject<{
                open: import("zod").ZodNumber;
                resolved: import("zod").ZodNumber;
                ignored: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
            bySeverity: import("zod").ZodObject<{
                low: import("zod").ZodNumber;
                medium: import("zod").ZodNumber;
                high: import("zod").ZodNumber;
                critical: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
            filters: import("zod").ZodObject<{
                name: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodNullable<import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>>;
                severity: import("zod").ZodNullable<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            contentMdx: import("zod").ZodOptional<import("zod").ZodString>;
            severity: import("zod").ZodDefault<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            statusStartedAt: import("zod").ZodOptional<import("zod").ZodString>;
            sample: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
            duplicateIssueId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>>;
            severity: import("zod").ZodOptional<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issues: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly search: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>>;
            severity: import("zod").ZodOptional<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            includeDeliveryMetadata: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issues: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
                delivery: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
                slackChannels: import("zod").ZodArray<import("zod").ZodObject<{
                    channelId: import("zod").ZodNullable<import("zod").ZodString>;
                    channelName: import("zod").ZodNullable<import("zod").ZodString>;
                    threadTs: import("zod").ZodNullable<import("zod").ZodString>;
                    permalink: import("zod").ZodNullable<import("zod").ZodString>;
                    workspaceName: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly resolve: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
            statusResolvedAt: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly ignore: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly reopen: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly reassignAndReopen: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
            targetComponentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
            sourceComponentId: import("zod").ZodString;
            targetComponentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly mute: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly unmute: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly workItems: {
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            container: import("zod").ZodString;
            title: import("zod").ZodString;
            bodyMarkdown: import("zod").ZodOptional<import("zod").ZodString>;
            state: import("zod").ZodOptional<import("zod").ZodString>;
            itemType: import("zod").ZodOptional<import("zod").ZodString>;
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            clientRequestId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            identifier: import("zod").ZodString;
            title: import("zod").ZodString;
            url: import("zod").ZodString;
            state: import("zod").ZodString;
            attribution: import("zod").ZodOptional<import("zod").ZodObject<{
                kind: import("zod").ZodEnum<{
                    user: "user";
                    workspace: "workspace";
                }>;
                name: import("zod").ZodOptional<import("zod").ZodString>;
                email: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            reused: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly comment: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            itemId: import("zod").ZodString;
            bodyMarkdown: import("zod").ZodString;
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            identifier: import("zod").ZodString;
            url: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly transition: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            itemId: import("zod").ZodString;
            state: import("zod").ZodString;
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            identifier: import("zod").ZodString;
            title: import("zod").ZodString;
            url: import("zod").ZodString;
            state: import("zod").ZodString;
            changed: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly billing: {
        readonly getSummary: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            billingModel: import("zod").ZodEnum<{
                "credit-balance-v1": "credit-balance-v1";
            }>;
            billable: import("zod").ZodBoolean;
            nonBillableReason: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodString;
            planName: import("zod").ZodNullable<import("zod").ZodString>;
            planSlug: import("zod").ZodNullable<import("zod").ZodString>;
            currency: import("zod").ZodNullable<import("zod").ZodString>;
            currentBalance: import("zod").ZodNullable<import("zod").ZodString>;
            targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
            currentCycle: import("zod").ZodNullable<import("zod").ZodObject<{
                startsAt: import("zod").ZodString;
                endsAt: import("zod").ZodString;
                billableStartsAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            currentPeriodEstimate: import("zod").ZodNullable<import("zod").ZodObject<{
                subscriptionChargeAmount: import("zod").ZodString;
                creditDeficitAmount: import("zod").ZodString;
                creditDeficitChargeAmount: import("zod").ZodString;
                totalAmount: import("zod").ZodString;
                currency: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            pendingDowngrade: import("zod").ZodNullable<import("zod").ZodObject<{
                billingSubscriptionChangeId: import("zod").ZodString;
                effectiveAt: import("zod").ZodString;
                planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                planName: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            subscription: import("zod").ZodNullable<import("zod").ZodObject<{
                id: import("zod").ZodString;
                status: import("zod").ZodString;
                billingPlanId: import("zod").ZodString;
                priceBookId: import("zod").ZodString;
                cycleType: import("zod").ZodString;
                cancelAt: import("zod").ZodNullable<import("zod").ZodString>;
                canceledAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            collection: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    current: "current";
                    delinquent: "delinquent";
                    payment_retrying: "payment_retrying";
                }>;
                outstandingCredits: import("zod").ZodNullable<import("zod").ZodString>;
                outstandingAmount: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                scheduledAttemptsMade: import("zod").ZodNumber;
                nextRetryAt: import("zod").ZodNullable<import("zod").ZodString>;
                billingInvoiceId: import("zod").ZodNullable<import("zod").ZodString>;
                hostedInvoiceUrl: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            currentPlan: import("zod").ZodNullable<import("zod").ZodObject<{
                slug: import("zod").ZodString;
                name: import("zod").ZodString;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                subscriptionStatus: import("zod").ZodString;
                cycleStartsAt: import("zod").ZodNullable<import("zod").ZodString>;
                cycleEndsAt: import("zod").ZodNullable<import("zod").ZodString>;
                renewalAt: import("zod").ZodNullable<import("zod").ZodString>;
                pendingSwitch: import("zod").ZodNullable<import("zod").ZodObject<{
                    billingSubscriptionChangeId: import("zod").ZodString;
                    effectiveAt: import("zod").ZodString;
                    planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                    planName: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNullable<import("zod").ZodString>;
                    currency: import("zod").ZodNullable<import("zod").ZodString>;
                    targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                pendingCancellation: import("zod").ZodNullable<import("zod").ZodObject<{
                    effectiveAt: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getUsage: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            cycle: import("zod").ZodDefault<import("zod").ZodEnum<{
                current: "current";
                previous: "previous";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            cycle: import("zod").ZodNullable<import("zod").ZodObject<{
                startsAt: import("zod").ZodString;
                endsAt: import("zod").ZodString;
                billableStartsAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            usage: import("zod").ZodArray<import("zod").ZodObject<{
                dimension: import("zod").ZodEnum<{
                    automation_runs_completed: "automation_runs_completed";
                    input_tokens: "input_tokens";
                    issues_created: "issues_created";
                    logs_accepted_bytes: "logs_accepted_bytes";
                    logs_ingested_bytes: "logs_ingested_bytes";
                    output_tokens: "output_tokens";
                    pull_request_reviews_completed: "pull_request_reviews_completed";
                    pull_requests_created: "pull_requests_created";
                }>;
                totalQuantity: import("zod").ZodString;
                ratedQuantity: import("zod").ZodString;
                creditsConsumed: import("zod").ZodString;
                sourceBreakdown: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listTransactions: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            page: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            items: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                transactionType: import("zod").ZodEnum<{
                    adjustment: "adjustment";
                    auto_top_up: "auto_top_up";
                    cycle_top_up: "cycle_top_up";
                    deficit_settlement: "deficit_settlement";
                    migration_opening_balance: "migration_opening_balance";
                    one_off_top_up: "one_off_top_up";
                    upgrade_top_up: "upgrade_top_up";
                    usage_debit: "usage_debit";
                    void: "void";
                }>;
                creditDelta: import("zod").ZodString;
                balanceAfter: import("zod").ZodString;
                occurredAt: import("zod").ZodString;
                billingInvoiceId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            pagination: import("zod").ZodObject<{
                page: import("zod").ZodNumber;
                limit: import("zod").ZodNumber;
                total: import("zod").ZodNumber;
                totalPages: import("zod").ZodNumber;
                hasNext: import("zod").ZodBoolean;
                hasPrev: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getAutoTopUp: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            supported: import("zod").ZodBoolean;
            enabled: import("zod").ZodBoolean;
            triggerCreditBalance: import("zod").ZodString;
            topUpAmount: import("zod").ZodString;
            cycleSpendingLimit: import("zod").ZodString;
            currency: import("zod").ZodString;
            creditsToGrant: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly updateAutoTopUp: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            enabled: import("zod").ZodBoolean;
            triggerCreditBalance: import("zod").ZodString;
            topUpAmount: import("zod").ZodString;
            cycleSpendingLimit: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            supported: import("zod").ZodBoolean;
            enabled: import("zod").ZodBoolean;
            triggerCreditBalance: import("zod").ZodString;
            topUpAmount: import("zod").ZodString;
            cycleSpendingLimit: import("zod").ZodString;
            currency: import("zod").ZodString;
            creditsToGrant: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly purchaseCredits: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            amount: import("zod").ZodString;
            idempotencyKey: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                paid: "paid";
                pending_payment: "pending_payment";
            }>;
            billingInvoiceId: import("zod").ZodString;
            topUpAmount: import("zod").ZodString;
            creditsToGrant: import("zod").ZodString;
            currency: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listPlans: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            billingModel: import("zod").ZodString;
            currentPlanSlug: import("zod").ZodNullable<import("zod").ZodString>;
            hasActiveStripeBilling: import("zod").ZodBoolean;
            plans: import("zod").ZodArray<import("zod").ZodObject<{
                slug: import("zod").ZodString;
                billingModel: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                bestFor: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodString;
                currency: import("zod").ZodString;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                logsIncludedBytes: import("zod").ZodString;
                inputTokensIncluded: import("zod").ZodString;
                outputTokensIncluded: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly previewPlanChange: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            planSlug: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            calculatedAt: import("zod").ZodString;
            type: import("zod").ZodEnum<{
                downgrade: "downgrade";
                upgrade: "upgrade";
            }>;
            effectiveAt: import("zod").ZodString;
            currency: import("zod").ZodString;
            currentPlanSlug: import("zod").ZodString;
            targetPlanSlug: import("zod").ZodString;
            currentPlanName: import("zod").ZodString;
            targetPlanName: import("zod").ZodString;
            currentPlanPrice: import("zod").ZodString;
            targetPlanPrice: import("zod").ZodString;
            currentTargetCreditBalance: import("zod").ZodString;
            targetCreditBalance: import("zod").ZodString;
            creditDeficitAmount: import("zod").ZodString;
            creditDeficitChargeAmount: import("zod").ZodString;
            additionalCreditPrice: import("zod").ZodString;
            immediateChargeAmount: import("zod").ZodString;
            subscriptionChargeAmount: import("zod").ZodString;
            proratedCreditGrantAmount: import("zod").ZodString;
            remainingCycleFraction: import("zod").ZodString;
            nextCycleChargeAmount: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly previewSubscriptionCancellation: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            currentPlan: import("zod").ZodObject<{
                slug: import("zod").ZodString;
                name: import("zod").ZodString;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                subscriptionStatus: import("zod").ZodString;
                cycleStartsAt: import("zod").ZodNullable<import("zod").ZodString>;
                cycleEndsAt: import("zod").ZodNullable<import("zod").ZodString>;
                renewalAt: import("zod").ZodNullable<import("zod").ZodString>;
                pendingSwitch: import("zod").ZodNullable<import("zod").ZodObject<{
                    billingSubscriptionChangeId: import("zod").ZodString;
                    effectiveAt: import("zod").ZodString;
                    planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                    planName: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNullable<import("zod").ZodString>;
                    currency: import("zod").ZodNullable<import("zod").ZodString>;
                    targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                pendingCancellation: import("zod").ZodNullable<import("zod").ZodObject<{
                    effectiveAt: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
            effectiveAt: import("zod").ZodString;
            currentBalance: import("zod").ZodString;
            servicePolicy: import("zod").ZodLiteral<"active_until_period_end">;
            creditPolicy: import("zod").ZodLiteral<"dormant_until_resubscription">;
            scheduledFinalCharge: import("zod").ZodNullable<import("zod").ZodString>;
            autoTopUpEnabled: import("zod").ZodBoolean;
            pendingDowngrade: import("zod").ZodNullable<import("zod").ZodObject<{
                billingSubscriptionChangeId: import("zod").ZodString;
                effectiveAt: import("zod").ZodString;
                planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                planName: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            collectionState: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    current: "current";
                    delinquent: "delinquent";
                    payment_retrying: "payment_retrying";
                }>;
                outstandingCredits: import("zod").ZodNullable<import("zod").ZodString>;
                outstandingAmount: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                scheduledAttemptsMade: import("zod").ZodNumber;
                nextRetryAt: import("zod").ZodNullable<import("zod").ZodString>;
                billingInvoiceId: import("zod").ZodNullable<import("zod").ZodString>;
                hostedInvoiceUrl: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            calculatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly scheduleSubscriptionCancellation: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            currentPlan: import("zod").ZodObject<{
                slug: import("zod").ZodString;
                name: import("zod").ZodString;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                subscriptionStatus: import("zod").ZodString;
                cycleStartsAt: import("zod").ZodNullable<import("zod").ZodString>;
                cycleEndsAt: import("zod").ZodNullable<import("zod").ZodString>;
                renewalAt: import("zod").ZodNullable<import("zod").ZodString>;
                pendingSwitch: import("zod").ZodNullable<import("zod").ZodObject<{
                    billingSubscriptionChangeId: import("zod").ZodString;
                    effectiveAt: import("zod").ZodString;
                    planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                    planName: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNullable<import("zod").ZodString>;
                    currency: import("zod").ZodNullable<import("zod").ZodString>;
                    targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                pendingCancellation: import("zod").ZodNullable<import("zod").ZodObject<{
                    effectiveAt: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
            effectiveAt: import("zod").ZodString;
            currentBalance: import("zod").ZodString;
            servicePolicy: import("zod").ZodLiteral<"active_until_period_end">;
            creditPolicy: import("zod").ZodLiteral<"dormant_until_resubscription">;
            scheduledFinalCharge: import("zod").ZodNullable<import("zod").ZodString>;
            autoTopUpEnabled: import("zod").ZodBoolean;
            pendingDowngrade: import("zod").ZodNullable<import("zod").ZodObject<{
                billingSubscriptionChangeId: import("zod").ZodString;
                effectiveAt: import("zod").ZodString;
                planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                planName: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            collectionState: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    current: "current";
                    delinquent: "delinquent";
                    payment_retrying: "payment_retrying";
                }>;
                outstandingCredits: import("zod").ZodNullable<import("zod").ZodString>;
                outstandingAmount: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                scheduledAttemptsMade: import("zod").ZodNumber;
                nextRetryAt: import("zod").ZodNullable<import("zod").ZodString>;
                billingInvoiceId: import("zod").ZodNullable<import("zod").ZodString>;
                hostedInvoiceUrl: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            calculatedAt: import("zod").ZodString;
            billingSubscriptionChangeId: import("zod").ZodString;
            alreadyScheduled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly resumeSubscriptionCancellation: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            billingSubscriptionId: import("zod").ZodString;
            resumed: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly changePlan: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            planSlug: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            billingSubscriptionChangeId: import("zod").ZodString;
            billingSubscriptionId: import("zod").ZodString;
            status: import("zod").ZodString;
            type: import("zod").ZodString;
            effectiveAt: import("zod").ZodString;
            invoiceId: import("zod").ZodNullable<import("zod").ZodString>;
            creditDeficitAmount: import("zod").ZodOptional<import("zod").ZodString>;
            creditDeficitChargeAmount: import("zod").ZodOptional<import("zod").ZodString>;
            creditTopUpAmount: import("zod").ZodOptional<import("zod").ZodString>;
            immediateChargeAmount: import("zod").ZodOptional<import("zod").ZodString>;
            subscriptionChargeAmount: import("zod").ZodOptional<import("zod").ZodString>;
            proratedCreditGrantAmount: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly createCheckoutSession: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            planSlug: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            sessionId: import("zod").ZodString;
            checkoutUrl: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getCheckoutSessionStatus: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            sessionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                active: "active";
                expired: "expired";
                pending: "pending";
            }>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly createPortalSession: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            portalUrl: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getPaymentMethod: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            hasPaymentMethod: import("zod").ZodBoolean;
            brand: import("zod").ZodNullable<import("zod").ZodString>;
            last4: import("zod").ZodNullable<import("zod").ZodString>;
            type: import("zod").ZodNullable<import("zod").ZodString>;
            expiryMonth: import("zod").ZodNullable<import("zod").ZodNumber>;
            expiryYear: import("zod").ZodNullable<import("zod").ZodNumber>;
            isDefault: import("zod").ZodBoolean;
            display: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly tasks: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            tasks: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                description: import("zod").ZodString;
                instructions: import("zod").ZodString;
                completed: import("zod").ZodBoolean;
                completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                category: import("zod").ZodEnum<{
                    onboarding: "onboarding";
                    setup: "setup";
                }>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly recommendations: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            recommendations: import("zod").ZodArray<import("zod").ZodObject<{
                kind: import("zod").ZodEnum<{
                    integration: "integration";
                    log_source: "log_source";
                    mcp_connector: "mcp_connector";
                    sandbox_cli: "sandbox_cli";
                }>;
                targetId: import("zod").ZodString;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    recommended: "recommended";
                }>;
                roiScore: import("zod").ZodNumber;
                priority: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly repos: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            repos: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                accessSourceId: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                }>;
                owner: import("zod").ZodString;
                name: import("zod").ZodString;
                fullName: import("zod").ZodString;
                defaultBranch: import("zod").ZodNullable<import("zod").ZodString>;
                isPrivate: import("zod").ZodBoolean;
                linked: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly add: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            accessSourceIds: import("zod").ZodArray<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            repos: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                accessSourceId: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                }>;
                owner: import("zod").ZodString;
                name: import("zod").ZodString;
                fullName: import("zod").ZodString;
                defaultBranch: import("zod").ZodNullable<import("zod").ZodString>;
                isPrivate: import("zod").ZodBoolean;
                linked: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly remove: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly components: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            includeDeleted: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            components: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                origin: import("zod").ZodEnum<{
                    code_detected: "code_detected";
                    log_observed: "log_observed";
                    user_declared: "user_declared";
                }>;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
                observationState: import("zod").ZodEnum<{
                    observed: "observed";
                    stale: "stale";
                    unobserved: "unobserved";
                }>;
                registryRevision: import("zod").ZodNumber;
                canonicalComponentId: import("zod").ZodString;
                mergedIntoComponentId: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
                retiredAt: import("zod").ZodNullable<import("zod").ZodString>;
                retirementReason: import("zod").ZodNullable<import("zod").ZodString>;
                legacyStateUnknown: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            component: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                origin: import("zod").ZodEnum<{
                    code_detected: "code_detected";
                    log_observed: "log_observed";
                    user_declared: "user_declared";
                }>;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
                observationState: import("zod").ZodEnum<{
                    observed: "observed";
                    stale: "stale";
                    unobserved: "unobserved";
                }>;
                registryRevision: import("zod").ZodNumber;
                canonicalComponentId: import("zod").ZodString;
                mergedIntoComponentId: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
                retiredAt: import("zod").ZodNullable<import("zod").ZodString>;
                retirementReason: import("zod").ZodNullable<import("zod").ZodString>;
                legacyStateUnknown: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly register: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            requestId: import("zod").ZodOptional<import("zod").ZodString>;
            origin: import("zod").ZodOptional<import("zod").ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            component: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                origin: import("zod").ZodEnum<{
                    code_detected: "code_detected";
                    log_observed: "log_observed";
                    user_declared: "user_declared";
                }>;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
                observationState: import("zod").ZodEnum<{
                    observed: "observed";
                    stale: "stale";
                    unobserved: "unobserved";
                }>;
                registryRevision: import("zod").ZodNumber;
                canonicalComponentId: import("zod").ZodString;
                mergedIntoComponentId: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
                retiredAt: import("zod").ZodNullable<import("zod").ZodString>;
                retirementReason: import("zod").ZodNullable<import("zod").ZodString>;
                legacyStateUnknown: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly deregister: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            reason: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
            status: import("zod").ZodLiteral<"observation_withdrawn">;
            componentId: import("zod").ZodString;
            sourceType: import("zod").ZodLiteral<"secret_key">;
            withdrawn: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodLiteral<"retirement_confirmation_required">;
            preview: import("zod").ZodObject<{
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                canonicalComponentName: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    retired: "retired";
                }>;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                requiresCanonicalGroupConfirmation: import("zod").ZodBoolean;
                recommendationScopeEnabled: import("zod").ZodLiteral<false>;
                dependents: import("zod").ZodObject<{
                    openIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    activeComponentIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    automationBindingIds: import("zod").ZodArray<import("zod").ZodString>;
                    notificationRuleIds: import("zod").ZodArray<import("zod").ZodString>;
                    dataSourceMappingIds: import("zod").ZodArray<import("zod").ZodString>;
                    observationIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipIds: import("zod").ZodArray<import("zod").ZodString>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                    externalIncidentIds: import("zod").ZodArray<import("zod").ZodString>;
                    authorizedDeliveryIds: import("zod").ZodArray<import("zod").ZodString>;
                    authorizedAutomationRunIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
                counts: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>], "status">, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly rename: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            name: import("zod").ZodString;
            requestId: import("zod").ZodString;
            reason: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            component: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                origin: import("zod").ZodEnum<{
                    code_detected: "code_detected";
                    log_observed: "log_observed";
                    user_declared: "user_declared";
                }>;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
                observationState: import("zod").ZodEnum<{
                    observed: "observed";
                    stale: "stale";
                    unobserved: "unobserved";
                }>;
                registryRevision: import("zod").ZodNumber;
                canonicalComponentId: import("zod").ZodString;
                mergedIntoComponentId: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
                retiredAt: import("zod").ZodNullable<import("zod").ZodString>;
                retirementReason: import("zod").ZodNullable<import("zod").ZodString>;
                legacyStateUnknown: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly assignTeam: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            teamId: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            teamId: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly retirementPreview: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            preview: import("zod").ZodObject<{
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                canonicalComponentName: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    retired: "retired";
                }>;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                requiresCanonicalGroupConfirmation: import("zod").ZodBoolean;
                recommendationScopeEnabled: import("zod").ZodLiteral<false>;
                dependents: import("zod").ZodObject<{
                    openIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    activeComponentIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    automationBindingIds: import("zod").ZodArray<import("zod").ZodString>;
                    notificationRuleIds: import("zod").ZodArray<import("zod").ZodString>;
                    dataSourceMappingIds: import("zod").ZodArray<import("zod").ZodString>;
                    observationIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipIds: import("zod").ZodArray<import("zod").ZodString>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                    externalIncidentIds: import("zod").ZodArray<import("zod").ZodString>;
                    authorizedDeliveryIds: import("zod").ZodArray<import("zod").ZodString>;
                    authorizedAutomationRunIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
                counts: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly retire: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            requestId: import("zod").ZodString;
            reason: import("zod").ZodString;
            componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            confirmCanonicalGroup: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            result: import("zod").ZodObject<{
                operationId: import("zod").ZodString;
                status: import("zod").ZodEnum<{
                    committed: "committed";
                    complete: "complete";
                    followup_failed: "followup_failed";
                }>;
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                counts: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                authorizedDeliveryIds: import("zod").ZodArray<import("zod").ZodString>;
                authorizedAutomationRunIds: import("zod").ZodArray<import("zod").ZodString>;
                manualExternalIncidentIds: import("zod").ZodArray<import("zod").ZodString>;
                issueAutomationSuppressions: import("zod").ZodNumber;
                outboxEffectCount: import("zod").ZodNumber;
                manifest: import("zod").ZodObject<{
                    notificationRules: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                    automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                    relationships: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                followups: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly restorationPreview: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            retirementOperationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            preview: import("zod").ZodObject<{
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                canonicalComponentName: import("zod").ZodString;
                retirementOperationId: import("zod").ZodString;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                eligible: import("zod").ZodObject<{
                    notificationRuleIds: import("zod").ZodArray<import("zod").ZodString>;
                    automationBindingIds: import("zod").ZodArray<import("zod").ZodString>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly restore: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            retirementOperationId: import("zod").ZodString;
            requestId: import("zod").ZodString;
            reason: import("zod").ZodString;
            componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            selections: import("zod").ZodDefault<import("zod").ZodObject<{
                notificationRuleIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                automationBindingIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                recommendationScopeIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                relationshipIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            result: import("zod").ZodObject<{
                operationId: import("zod").ZodString;
                status: import("zod").ZodLiteral<"complete">;
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                restored: import("zod").ZodObject<{
                    notificationRuleIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                    automationBindingIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                    recommendationScopeIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                    relationshipIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly mergePreview: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            sourceComponentId: import("zod").ZodString;
            targetComponentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            preview: import("zod").ZodObject<{
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                projectId: import("zod").ZodString;
                sourceGroupComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                targetGroupComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                inventory: import("zod").ZodObject<{
                    openIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    componentIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    observationIds: import("zod").ZodArray<import("zod").ZodString>;
                    dataSourceMappingIds: import("zod").ZodArray<import("zod").ZodString>;
                    nameIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipIds: import("zod").ZodArray<import("zod").ZodString>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
                notificationPolicies: import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: import("zod").ZodString;
                    sourceRowRevision: import("zod").ZodNumber;
                    sourceComponentId: import("zod").ZodString;
                    equivalentPolicyId: import("zod").ZodNullable<import("zod").ZodString>;
                    equivalent: import("zod").ZodBoolean;
                    defaultDisposition: import("zod").ZodEnum<{
                        deduplicate: "deduplicate";
                        suspend: "suspend";
                    }>;
                    allowedDispositions: import("zod").ZodArray<import("zod").ZodEnum<{
                        move: "move";
                        suspend: "suspend";
                    }>>;
                    beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: import("zod").ZodString;
                    sourceRowRevision: import("zod").ZodNumber;
                    sourceComponentId: import("zod").ZodString;
                    equivalentPolicyId: import("zod").ZodNullable<import("zod").ZodString>;
                    equivalent: import("zod").ZodBoolean;
                    defaultDisposition: import("zod").ZodEnum<{
                        deduplicate: "deduplicate";
                        suspend: "suspend";
                    }>;
                    allowedDispositions: import("zod").ZodArray<import("zod").ZodEnum<{
                        move: "move";
                        suspend: "suspend";
                    }>>;
                    beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                notificationScopeChanges: import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: import("zod").ZodString;
                    ownerComponentId: import("zod").ZodString;
                    rowRevision: import("zod").ZodNumber;
                    beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                automationScopeChanges: import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: import("zod").ZodString;
                    ownerComponentId: import("zod").ZodString;
                    rowRevision: import("zod").ZodNumber;
                    beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                relationshipChanges: import("zod").ZodArray<import("zod").ZodObject<{
                    relationshipId: import("zod").ZodString;
                    action: import("zod").ZodEnum<{
                        close_duplicate: "close_duplicate";
                        close_self: "close_self";
                        rewire: "rewire";
                    }>;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    beforeSourceComponentId: import("zod").ZodString;
                    beforeTargetComponentId: import("zod").ZodString;
                    afterSourceComponentId: import("zod").ZodString;
                    afterTargetComponentId: import("zod").ZodString;
                    survivingRelationshipId: import("zod").ZodNullable<import("zod").ZodString>;
                    beforeRowRevision: import("zod").ZodNumber;
                    afterRowRevision: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                recommendationScopeEnabled: import("zod").ZodLiteral<false>;
                dependentCount: import("zod").ZodNumber;
                ordinaryTransactionLimit: import("zod").ZodNumber;
                operatorAssistanceRequired: import("zod").ZodBoolean;
                confirmationRequired: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly merge: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            sourceComponentId: import("zod").ZodString;
            targetComponentId: import("zod").ZodString;
            requestId: import("zod").ZodString;
            reason: import("zod").ZodString;
            componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            policyDispositions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                disposition: import("zod").ZodEnum<{
                    move: "move";
                    suspend: "suspend";
                }>;
                beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            confirmPolicyImpact: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            result: import("zod").ZodObject<{
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                operationId: import("zod").ZodString;
                status: import("zod").ZodLiteral<"complete">;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                manifest: import("zod").ZodObject<{
                    componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                    redirectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    dataSourceMappingIds: import("zod").ZodArray<import("zod").ZodString>;
                    movedAliasIds: import("zod").ZodArray<import("zod").ZodString>;
                    historicalDisplayIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipChanges: import("zod").ZodArray<import("zod").ZodObject<{
                        relationshipId: import("zod").ZodString;
                        action: import("zod").ZodEnum<{
                            close_duplicate: "close_duplicate";
                            close_self: "close_self";
                            rewire: "rewire";
                        }>;
                        relationshipType: import("zod").ZodEnum<{
                            depends_on: "depends_on";
                            part_of: "part_of";
                        }>;
                        beforeSourceComponentId: import("zod").ZodString;
                        beforeTargetComponentId: import("zod").ZodString;
                        afterSourceComponentId: import("zod").ZodString;
                        afterTargetComponentId: import("zod").ZodString;
                        survivingRelationshipId: import("zod").ZodNullable<import("zod").ZodString>;
                        beforeRowRevision: import("zod").ZodNumber;
                        afterRowRevision: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, import("zod/v4/core").$strip>>;
                    notificationPolicies: import("zod").ZodArray<import("zod").ZodObject<{
                        policyId: import("zod").ZodString;
                        action: import("zod").ZodEnum<{
                            deduplicated: "deduplicated";
                            moved: "moved";
                            suspended: "suspended";
                        }>;
                        equivalentPolicyId: import("zod").ZodNullable<import("zod").ZodString>;
                        beforeRowRevision: import("zod").ZodNumber;
                        afterRowRevision: import("zod").ZodNumber;
                        beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                        policyId: import("zod").ZodString;
                        action: import("zod").ZodEnum<{
                            deduplicated: "deduplicated";
                            moved: "moved";
                            suspended: "suspended";
                        }>;
                        equivalentPolicyId: import("zod").ZodNullable<import("zod").ZodString>;
                        beforeRowRevision: import("zod").ZodNumber;
                        afterRowRevision: import("zod").ZodNumber;
                        beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    notificationScopeChanges: import("zod").ZodArray<import("zod").ZodObject<{
                        kind: import("zod").ZodEnum<{
                            automation_binding: "automation_binding";
                            notification_rule: "notification_rule";
                        }>;
                        policyId: import("zod").ZodString;
                        ownerComponentId: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                        beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    automationScopeChanges: import("zod").ZodArray<import("zod").ZodObject<{
                        kind: import("zod").ZodEnum<{
                            automation_binding: "automation_binding";
                            notification_rule: "notification_rule";
                        }>;
                        policyId: import("zod").ZodString;
                        ownerComponentId: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                        beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly relationships: {
            readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                includeHistorical: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                relationships: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    source: import("zod").ZodObject<{
                        originalComponentId: import("zod").ZodString;
                        effectiveComponentId: import("zod").ZodString;
                        name: import("zod").ZodString;
                        lifecycle: import("zod").ZodEnum<{
                            active: "active";
                            merged: "merged";
                            retired: "retired";
                        }>;
                        observationState: import("zod").ZodEnum<{
                            observed: "observed";
                            stale: "stale";
                            unobserved: "unobserved";
                        }>;
                    }, import("zod/v4/core").$strip>;
                    target: import("zod").ZodObject<{
                        originalComponentId: import("zod").ZodString;
                        effectiveComponentId: import("zod").ZodString;
                        name: import("zod").ZodString;
                        lifecycle: import("zod").ZodEnum<{
                            active: "active";
                            merged: "merged";
                            retired: "retired";
                        }>;
                        observationState: import("zod").ZodEnum<{
                            observed: "observed";
                            stale: "stale";
                            unobserved: "unobserved";
                        }>;
                    }, import("zod/v4/core").$strip>;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    createdAt: import("zod").ZodString;
                    endedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    endReason: import("zod").ZodNullable<import("zod").ZodString>;
                    rowRevision: import("zod").ZodNumber;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
            readonly preview: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                relationshipType: import("zod").ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                action: import("zod").ZodEnum<{
                    add: "add";
                    remove: "remove";
                }>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                preview: import("zod").ZodObject<{
                    sourceComponentId: import("zod").ZodString;
                    targetComponentId: import("zod").ZodString;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    action: import("zod").ZodEnum<{
                        add: "add";
                        remove: "remove";
                    }>;
                    organizationId: import("zod").ZodString;
                    projectId: import("zod").ZodString;
                    relationshipId: import("zod").ZodNullable<import("zod").ZodString>;
                    componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                    policyImpact: import("zod").ZodObject<{
                        notificationRules: import("zod").ZodArray<import("zod").ZodObject<{
                            ruleId: import("zod").ZodString;
                            ruleGroupId: import("zod").ZodNullable<import("zod").ZodString>;
                            ownerComponentId: import("zod").ZodString;
                            destinationIds: import("zod").ZodArray<import("zod").ZodString>;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                            bindingId: import("zod").ZodString;
                            automationId: import("zod").ZodString;
                            ownerComponentId: import("zod").ZodString;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
                    confirmationRequired: import("zod").ZodBoolean;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
            readonly add: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                relationshipType: import("zod").ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                requestId: import("zod").ZodString;
                reason: import("zod").ZodString;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                confirmPolicyImpact: import("zod").ZodDefault<import("zod").ZodBoolean>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                result: import("zod").ZodObject<{
                    action: import("zod").ZodEnum<{
                        add: "add";
                        remove: "remove";
                    }>;
                    relationshipId: import("zod").ZodString;
                    sourceComponentId: import("zod").ZodString;
                    targetComponentId: import("zod").ZodString;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    policyImpact: import("zod").ZodObject<{
                        notificationRules: import("zod").ZodArray<import("zod").ZodObject<{
                            ruleId: import("zod").ZodString;
                            ruleGroupId: import("zod").ZodNullable<import("zod").ZodString>;
                            ownerComponentId: import("zod").ZodString;
                            destinationIds: import("zod").ZodArray<import("zod").ZodString>;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                            bindingId: import("zod").ZodString;
                            automationId: import("zod").ZodString;
                            ownerComponentId: import("zod").ZodString;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
            readonly remove: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                relationshipType: import("zod").ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                requestId: import("zod").ZodString;
                reason: import("zod").ZodString;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                confirmPolicyImpact: import("zod").ZodDefault<import("zod").ZodBoolean>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                result: import("zod").ZodObject<{
                    action: import("zod").ZodEnum<{
                        add: "add";
                        remove: "remove";
                    }>;
                    relationshipId: import("zod").ZodString;
                    sourceComponentId: import("zod").ZodString;
                    targetComponentId: import("zod").ZodString;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    policyImpact: import("zod").ZodObject<{
                        notificationRules: import("zod").ZodArray<import("zod").ZodObject<{
                            ruleId: import("zod").ZodString;
                            ruleGroupId: import("zod").ZodNullable<import("zod").ZodString>;
                            ownerComponentId: import("zod").ZodString;
                            destinationIds: import("zod").ZodArray<import("zod").ZodString>;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                            bindingId: import("zod").ZodString;
                            automationId: import("zod").ZodString;
                            ownerComponentId: import("zod").ZodString;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        };
        readonly incidents: {
            readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                componentId: import("zod").ZodOptional<import("zod").ZodString>;
                activeOnly: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
                cursor: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                incidents: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    componentId: import("zod").ZodString;
                    projectId: import("zod").ZodString;
                    severity: import("zod").ZodEnum<{
                        degraded: "degraded";
                        outage: "outage";
                    }>;
                    summary: import("zod").ZodString;
                    startedAt: import("zod").ZodString;
                    resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        };
        readonly timeline: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            windowStart: import("zod").ZodOptional<import("zod").ZodString>;
            windowEnd: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            windowStart: import("zod").ZodString;
            windowEnd: import("zod").ZodString;
            timeline: import("zod").ZodArray<import("zod").ZodObject<{
                timestamp: import("zod").ZodString;
                status: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                    unknown: "unknown";
                }>;
            }, import("zod/v4/core").$strip>>;
            incidents: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                componentId: import("zod").ZodString;
                projectId: import("zod").ZodString;
                severity: import("zod").ZodEnum<{
                    degraded: "degraded";
                    outage: "outage";
                }>;
                summary: import("zod").ZodString;
                startedAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
};
/**
 * Operation tree mirroring the public API contract structure.
 */
export declare const publicApiOperations: {
    readonly me: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
        credentialType: import("zod").ZodLiteral<"user">;
        user: import("zod").ZodObject<{
            id: import("zod").ZodString;
            name: import("zod").ZodNullable<import("zod").ZodString>;
            email: import("zod").ZodString;
        }, import("zod/v4/core").$strip>;
        activeOrganizationId: import("zod").ZodNullable<import("zod").ZodString>;
        authorizedOrganizationId: import("zod").ZodNullable<import("zod").ZodString>;
        authorizedProjectId: import("zod").ZodNullable<import("zod").ZodString>;
        organizations: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodString;
            name: import("zod").ZodString;
            slug: import("zod").ZodString;
            logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            role: import("zod").ZodEnum<{
                admin: "admin";
                member: "member";
            }>;
        }, import("zod/v4/core").$strip>>;
    }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
        credentialType: import("zod").ZodLiteral<"secret">;
        organization: import("zod").ZodObject<{
            id: import("zod").ZodString;
            name: import("zod").ZodString;
            slug: import("zod").ZodString;
            logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>;
        keyName: import("zod").ZodString;
    }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
        credentialType: import("zod").ZodLiteral<"partner">;
        superorganization: import("zod").ZodObject<{
            id: import("zod").ZodString;
            name: import("zod").ZodString;
        }, import("zod/v4/core").$strip>;
    }, import("zod/v4/core").$strip>], "credentialType">, "api">;
    readonly automations: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            search: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                active: "active";
                paused: "paused";
            }>>;
            health: import("zod").ZodOptional<import("zod").ZodEnum<{
                failing: "failing";
                healthy: "healthy";
                never_run: "never_run";
            }>>;
            source: import("zod").ZodOptional<import("zod").ZodEnum<{
                custom: "custom";
                sazabi_managed: "sazabi_managed";
            }>>;
            sort: import("zod").ZodDefault<import("zod").ZodEnum<{
                failures: "failures";
                last_run: "last_run";
                name: "name";
                runs: "runs";
            }>>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            automationId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            scriptId: import("zod").ZodOptional<import("zod").ZodString>;
            script: import("zod").ZodOptional<import("zod").ZodString>;
            expressionId: import("zod").ZodOptional<import("zod").ZodString>;
            cronExpression: import("zod").ZodOptional<import("zod").ZodString>;
            timezone: import("zod").ZodOptional<import("zod").ZodString>;
            timeoutSeconds: import("zod").ZodOptional<import("zod").ZodCoercedNumber<unknown>>;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            automationId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            cronExpression: import("zod").ZodOptional<import("zod").ZodString>;
            timezone: import("zod").ZodOptional<import("zod").ZodString>;
            timeoutSeconds: import("zod").ZodOptional<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly enable: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            automationId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly disable: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            automationId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            automation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    log_match: "log_match";
                    script: "script";
                }>;
                scriptId: import("zod").ZodNullable<import("zod").ZodString>;
                scriptName: import("zod").ZodNullable<import("zod").ZodString>;
                logMatchExpressionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalDefinitionId: import("zod").ZodNullable<import("zod").ZodString>;
                signalType: import("zod").ZodNullable<import("zod").ZodEnum<{
                    expression_matched: "expression_matched";
                }>>;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    sazabi_managed: "sazabi_managed";
                }>;
                enabled: import("zod").ZodBoolean;
                cronExpression: import("zod").ZodNullable<import("zod").ZodString>;
                timezone: import("zod").ZodString;
                timeoutSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                health: import("zod").ZodEnum<{
                    failing: "failing";
                    healthy: "healthy";
                    never_run: "never_run";
                }>;
                lastRun: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                successRate: import("zod").ZodNullable<import("zod").ZodNumber>;
                runCount: import("zod").ZodNumber;
                failedRunCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                recordedHistoryStartsAt: import("zod").ZodString;
                scriptIdentifier: import("zod").ZodNullable<import("zod").ZodString>;
                canToggle: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly runs: {
            readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
                automationId: import("zod").ZodString;
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                status: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>, import("zod").ZodArray<import("zod").ZodEnum<{
                    cancelled: "cancelled";
                    failed: "failed";
                    running: "running";
                    succeeded: "succeeded";
                    timed_out: "timed_out";
                }>>]>>;
                cursor: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                runs: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                    scheduledAt: import("zod").ZodNullable<import("zod").ZodString>;
                    dueAt: import("zod").ZodNullable<import("zod").ZodString>;
                    errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
                recordedHistoryStartsAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>, "api">;
            readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
                automationId: import("zod").ZodString;
                runId: import("zod").ZodString;
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                run: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    automationRunKey: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        cancelled: "cancelled";
                        failed: "failed";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    startedAt: import("zod").ZodString;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                    scheduledAt: import("zod").ZodNullable<import("zod").ZodString>;
                    dueAt: import("zod").ZodNullable<import("zod").ZodString>;
                    errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                    automationId: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, "api">;
            readonly logs: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
                automationId: import("zod").ZodString;
                runId: import("zod").ZodString;
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                logs: import("zod").ZodObject<{
                    stdout: import("zod").ZodString;
                    stderr: import("zod").ZodString;
                    exitCode: import("zod").ZodNullable<import("zod").ZodNumber>;
                    status: import("zod").ZodEnum<{
                        failed: "failed";
                        queued: "queued";
                        running: "running";
                        succeeded: "succeeded";
                        timed_out: "timed_out";
                    }>;
                    truncated: import("zod").ZodBoolean;
                    startedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    durationMs: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, "api">;
        };
    };
    readonly logs: {
        readonly query: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            search: import("zod").ZodOptional<import("zod").ZodObject<{
                query: import("zod").ZodString;
                fields: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                mode: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<{
                    all: "all";
                    any: "any";
                    phrase: "phrase";
                }>>>;
            }, import("zod/v4/core").$strip>>;
            filters: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                field: import("zod").ZodString;
                op: import("zod").ZodEnum<{
                    between: "between";
                    contains: "contains";
                    eq: "eq";
                    exists: "exists";
                    gt: "gt";
                    gte: "gte";
                    in: "in";
                    lt: "lt";
                    lte: "lte";
                    neq: "neq";
                    starts_with: "starts_with";
                }>;
                value: import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodNumber]>>, import("zod").ZodObject<{
                    from: import("zod").ZodString;
                    to: import("zod").ZodString;
                }, import("zod/v4/core").$strip>]>;
            }, import("zod/v4/core").$strip>>>;
            select: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            sort: import("zod").ZodOptional<import("zod").ZodObject<{
                field: import("zod").ZodString;
                direction: import("zod").ZodDefault<import("zod").ZodEnum<{
                    asc: "asc";
                    desc: "desc";
                }>>;
            }, import("zod/v4/core").$strip>>;
            pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodNumber>;
                cursor: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            data: import("zod").ZodArray<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
            meta: import("zod").ZodObject<{
                count: import("zod").ZodNumber;
                took: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly schema: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            question: import("zod").ZodOptional<import("zod").ZodString>;
            topK: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            backend: import("zod").ZodObject<{
                id: import("zod").ZodEnum<{
                    axiom: "axiom";
                    "better-stack": "better-stack";
                    clickhouse: "clickhouse";
                    cloudwatch: "cloudwatch";
                    datadog: "datadog";
                    gcp: "gcp";
                    mezmo: "mezmo";
                    posthog: "posthog";
                    sentry: "sentry";
                }>;
                name: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    external: "external";
                    native: "native";
                }>;
            }, import("zod/v4/core").$strip>;
            features: import("zod").ZodArray<import("zod").ZodString>;
            commands: import("zod").ZodArray<import("zod").ZodEnum<{
                nativeQuery: "nativeQuery";
                patterns: "patterns";
                query: "query";
                schema: "schema";
                volume: "volume";
            }>>;
            queryableFields: import("zod").ZodArray<import("zod").ZodString>;
            searchableFields: import("zod").ZodArray<import("zod").ZodString>;
            question: import("zod").ZodOptional<import("zod").ZodString>;
            selectedBundles: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                service: import("zod").ZodString;
                keys: import("zod").ZodArray<import("zod").ZodString>;
                rowCount: import("zod").ZodNumber;
                score: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>>;
            selectedAttributeKeys: import("zod").ZodArray<import("zod").ZodString>;
            observedServiceNames: import("zod").ZodArray<import("zod").ZodString>;
            observedAttributeKeys: import("zod").ZodArray<import("zod").ZodString>;
            indexStatus: import("zod").ZodEnum<{
                empty: "empty";
                ready: "ready";
                skipped: "skipped";
                unavailable: "unavailable";
            }>;
            schemaContext: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly volume: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            startDate: import("zod").ZodString;
            endDate: import("zod").ZodString;
            interval: import("zod").ZodOptional<import("zod").ZodEnum<{
                "15m": "15m";
                "1h": "1h";
                "1m": "1m";
                "5m": "5m";
            }>>;
            groupBy: import("zod").ZodOptional<import("zod").ZodEnum<{
                environment: "environment";
                service_name: "service_name";
                severity_text: "severity_text";
            }>>;
            filters: import("zod").ZodOptional<import("zod").ZodObject<{
                service_name: import("zod").ZodOptional<import("zod").ZodString>;
                severity_text: import("zod").ZodOptional<import("zod").ZodString>;
                environment: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            total: import("zod").ZodNumber;
            startDate: import("zod").ZodString;
            endDate: import("zod").ZodString;
            interval: import("zod").ZodEnum<{
                "15m": "15m";
                "1h": "1h";
                "1m": "1m";
                "5m": "5m";
            }>;
            series: import("zod").ZodArray<import("zod").ZodObject<{
                group: import("zod").ZodString;
                total: import("zod").ZodNumber;
                points: import("zod").ZodArray<import("zod").ZodObject<{
                    bucket: import("zod").ZodString;
                    count: import("zod").ZodNumber;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly patterns: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodOptional<import("zod").ZodString>;
            severity: import("zod").ZodOptional<import("zod").ZodString>;
            startDate: import("zod").ZodOptional<import("zod").ZodString>;
            endDate: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodNumber>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            patterns: import("zod").ZodArray<import("zod").ZodObject<{
                serviceName: import("zod").ZodNullable<import("zod").ZodString>;
                fingerprint: import("zod").ZodString;
                pattern: import("zod").ZodString;
                severity: import("zod").ZodNullable<import("zod").ZodString>;
                occurrences: import("zod").ZodNumber;
                firstSeen: import("zod").ZodNullable<import("zod").ZodString>;
                lastSeen: import("zod").ZodNullable<import("zod").ZodString>;
                representativeId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            meta: import("zod").ZodObject<{
                backendId: import("zod").ZodEnum<{
                    axiom: "axiom";
                    "better-stack": "better-stack";
                    clickhouse: "clickhouse";
                    cloudwatch: "cloudwatch";
                    datadog: "datadog";
                    gcp: "gcp";
                    mezmo: "mezmo";
                    posthog: "posthog";
                    sentry: "sentry";
                }>;
                count: import("zod").ZodNumber;
                took: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly nativeQuery: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            result: import("zod").ZodString;
            format: import("zod").ZodLiteral<"text">;
            meta: import("zod").ZodObject<{
                backendId: import("zod").ZodEnum<{
                    axiom: "axiom";
                    "better-stack": "better-stack";
                    clickhouse: "clickhouse";
                    cloudwatch: "cloudwatch";
                    datadog: "datadog";
                    gcp: "gcp";
                    mezmo: "mezmo";
                    posthog: "posthog";
                    sentry: "sentry";
                }>;
                took: import("zod").ZodNumber;
                truncated: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly logSources: {
        readonly listProviders: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            providers: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                modes: import("zod").ZodArray<import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>>;
                metadataFields: import("zod").ZodArray<import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    type: import("zod").ZodString;
                    required: import("zod").ZodBoolean;
                    sensitive: import("zod").ZodBoolean;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                setupSkill: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodOptional<import("zod").ZodEnum<{
                claude_code: "claude_code";
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
                codex: "codex";
                convex: "convex";
                datadog: "datadog";
                daytona: "daytona";
                digital_ocean: "digital_ocean";
                e2b: "e2b";
                elastic_cloud: "elastic_cloud";
                fluent_bit: "fluent_bit";
                fly_io: "fly_io";
                gcp: "gcp";
                grafana_alloy: "grafana_alloy";
                inngest: "inngest";
                langchain: "langchain";
                mastra: "mastra";
                neon: "neon";
                netlify: "netlify";
                openrouter: "openrouter";
                otel: "otel";
                otel_collector: "otel_collector";
                otel_metrics: "otel_metrics";
                plain: "plain";
                porter: "porter";
                posthog: "posthog";
                posthog_sdk: "posthog_sdk";
                prometheus: "prometheus";
                railway: "railway";
                render: "render";
                respan: "respan";
                sentry: "sentry";
                sentry_platform: "sentry_platform";
                supabase: "supabase";
                temporal: "temporal";
                trigger_dev: "trigger_dev";
                vector: "vector";
                vercel: "vercel";
                webhook_events: "webhook_events";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            logSources: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    claude_code: "claude_code";
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
                    codex: "codex";
                    convex: "convex";
                    datadog: "datadog";
                    daytona: "daytona";
                    digital_ocean: "digital_ocean";
                    e2b: "e2b";
                    elastic_cloud: "elastic_cloud";
                    fluent_bit: "fluent_bit";
                    fly_io: "fly_io";
                    gcp: "gcp";
                    grafana_alloy: "grafana_alloy";
                    inngest: "inngest";
                    langchain: "langchain";
                    mastra: "mastra";
                    neon: "neon";
                    netlify: "netlify";
                    openrouter: "openrouter";
                    otel: "otel";
                    otel_collector: "otel_collector";
                    otel_metrics: "otel_metrics";
                    plain: "plain";
                    porter: "porter";
                    posthog: "posthog";
                    posthog_sdk: "posthog_sdk";
                    prometheus: "prometheus";
                    railway: "railway";
                    render: "render";
                    respan: "respan";
                    sentry: "sentry";
                    sentry_platform: "sentry_platform";
                    supabase: "supabase";
                    temporal: "temporal";
                    trigger_dev: "trigger_dev";
                    vector: "vector";
                    vercel: "vercel";
                    webhook_events: "webhook_events";
                }>;
                mode: import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>;
                name: import("zod").ZodString;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                claude_code: "claude_code";
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
                codex: "codex";
                convex: "convex";
                datadog: "datadog";
                daytona: "daytona";
                digital_ocean: "digital_ocean";
                e2b: "e2b";
                elastic_cloud: "elastic_cloud";
                fluent_bit: "fluent_bit";
                fly_io: "fly_io";
                gcp: "gcp";
                grafana_alloy: "grafana_alloy";
                inngest: "inngest";
                langchain: "langchain";
                mastra: "mastra";
                neon: "neon";
                netlify: "netlify";
                openrouter: "openrouter";
                otel: "otel";
                otel_collector: "otel_collector";
                otel_metrics: "otel_metrics";
                plain: "plain";
                porter: "porter";
                posthog: "posthog";
                posthog_sdk: "posthog_sdk";
                prometheus: "prometheus";
                railway: "railway";
                render: "render";
                respan: "respan";
                sentry: "sentry";
                sentry_platform: "sentry_platform";
                supabase: "supabase";
                temporal: "temporal";
                trigger_dev: "trigger_dev";
                vector: "vector";
                vercel: "vercel";
                webhook_events: "webhook_events";
            }>;
            mode: import("zod").ZodOptional<import("zod").ZodEnum<{
                connectionless: "connectionless";
                managed: "managed";
            }>>;
            metadata: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            logSource: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    claude_code: "claude_code";
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
                    codex: "codex";
                    convex: "convex";
                    datadog: "datadog";
                    daytona: "daytona";
                    digital_ocean: "digital_ocean";
                    e2b: "e2b";
                    elastic_cloud: "elastic_cloud";
                    fluent_bit: "fluent_bit";
                    fly_io: "fly_io";
                    gcp: "gcp";
                    grafana_alloy: "grafana_alloy";
                    inngest: "inngest";
                    langchain: "langchain";
                    mastra: "mastra";
                    neon: "neon";
                    netlify: "netlify";
                    openrouter: "openrouter";
                    otel: "otel";
                    otel_collector: "otel_collector";
                    otel_metrics: "otel_metrics";
                    plain: "plain";
                    porter: "porter";
                    posthog: "posthog";
                    posthog_sdk: "posthog_sdk";
                    prometheus: "prometheus";
                    railway: "railway";
                    render: "render";
                    respan: "respan";
                    sentry: "sentry";
                    sentry_platform: "sentry_platform";
                    supabase: "supabase";
                    temporal: "temporal";
                    trigger_dev: "trigger_dev";
                    vector: "vector";
                    vercel: "vercel";
                    webhook_events: "webhook_events";
                }>;
                mode: import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>;
                name: import("zod").ZodString;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            streamId: import("zod").ZodOptional<import("zod").ZodString>;
            publicKey: import("zod").ZodOptional<import("zod").ZodString>;
            endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                kind: import("zod").ZodEnum<{
                    hostPort: "hostPort";
                    url: "url";
                }>;
                label: import("zod").ZodOptional<import("zod").ZodString>;
                url: import("zod").ZodOptional<import("zod").ZodString>;
                host: import("zod").ZodOptional<import("zod").ZodString>;
                port: import("zod").ZodOptional<import("zod").ZodNumber>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                    label: import("zod").ZodString;
                    value: import("zod").ZodString;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            logSource: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    claude_code: "claude_code";
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
                    codex: "codex";
                    convex: "convex";
                    datadog: "datadog";
                    daytona: "daytona";
                    digital_ocean: "digital_ocean";
                    e2b: "e2b";
                    elastic_cloud: "elastic_cloud";
                    fluent_bit: "fluent_bit";
                    fly_io: "fly_io";
                    gcp: "gcp";
                    grafana_alloy: "grafana_alloy";
                    inngest: "inngest";
                    langchain: "langchain";
                    mastra: "mastra";
                    neon: "neon";
                    netlify: "netlify";
                    openrouter: "openrouter";
                    otel: "otel";
                    otel_collector: "otel_collector";
                    otel_metrics: "otel_metrics";
                    plain: "plain";
                    porter: "porter";
                    posthog: "posthog";
                    posthog_sdk: "posthog_sdk";
                    prometheus: "prometheus";
                    railway: "railway";
                    render: "render";
                    respan: "respan";
                    sentry: "sentry";
                    sentry_platform: "sentry_platform";
                    supabase: "supabase";
                    temporal: "temporal";
                    trigger_dev: "trigger_dev";
                    vector: "vector";
                    vercel: "vercel";
                    webhook_events: "webhook_events";
                }>;
                mode: import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>;
                name: import("zod").ZodString;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                streams: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    logSourceId: import("zod").ZodString;
                    displayName: import("zod").ZodNullable<import("zod").ZodString>;
                    config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                    status: import("zod").ZodEnum<{
                        active: "active";
                        error: "error";
                        pending: "pending";
                        provisioning: "provisioning";
                    }>;
                    errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                    enabled: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodString;
                    endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        kind: import("zod").ZodEnum<{
                            hostPort: "hostPort";
                            url: "url";
                        }>;
                        label: import("zod").ZodOptional<import("zod").ZodString>;
                        url: import("zod").ZodOptional<import("zod").ZodString>;
                        host: import("zod").ZodOptional<import("zod").ZodString>;
                        port: import("zod").ZodOptional<import("zod").ZodNumber>;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                        extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                            label: import("zod").ZodString;
                            value: import("zod").ZodString;
                            description: import("zod").ZodOptional<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            logSource: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    claude_code: "claude_code";
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
                    codex: "codex";
                    convex: "convex";
                    datadog: "datadog";
                    daytona: "daytona";
                    digital_ocean: "digital_ocean";
                    e2b: "e2b";
                    elastic_cloud: "elastic_cloud";
                    fluent_bit: "fluent_bit";
                    fly_io: "fly_io";
                    gcp: "gcp";
                    grafana_alloy: "grafana_alloy";
                    inngest: "inngest";
                    langchain: "langchain";
                    mastra: "mastra";
                    neon: "neon";
                    netlify: "netlify";
                    openrouter: "openrouter";
                    otel: "otel";
                    otel_collector: "otel_collector";
                    otel_metrics: "otel_metrics";
                    plain: "plain";
                    porter: "porter";
                    posthog: "posthog";
                    posthog_sdk: "posthog_sdk";
                    prometheus: "prometheus";
                    railway: "railway";
                    render: "render";
                    respan: "respan";
                    sentry: "sentry";
                    sentry_platform: "sentry_platform";
                    supabase: "supabase";
                    temporal: "temporal";
                    trigger_dev: "trigger_dev";
                    vector: "vector";
                    vercel: "vercel";
                    webhook_events: "webhook_events";
                }>;
                mode: import("zod").ZodEnum<{
                    connectionless: "connectionless";
                    managed: "managed";
                }>;
                name: import("zod").ZodString;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
            teardownError: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly logStreams: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            streams: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                logSourceId: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                status: import("zod").ZodEnum<{
                    active: "active";
                    error: "error";
                    pending: "pending";
                    provisioning: "provisioning";
                }>;
                errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                enabled: import("zod").ZodBoolean;
                createdAt: import("zod").ZodString;
                endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        hostPort: "hostPort";
                        url: "url";
                    }>;
                    label: import("zod").ZodOptional<import("zod").ZodString>;
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    host: import("zod").ZodOptional<import("zod").ZodString>;
                    port: import("zod").ZodOptional<import("zod").ZodNumber>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                        label: import("zod").ZodString;
                        value: import("zod").ZodString;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            logSourceId: import("zod").ZodString;
            config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            stream: import("zod").ZodObject<{
                id: import("zod").ZodString;
                logSourceId: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                status: import("zod").ZodEnum<{
                    active: "active";
                    error: "error";
                    pending: "pending";
                    provisioning: "provisioning";
                }>;
                errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                enabled: import("zod").ZodBoolean;
                createdAt: import("zod").ZodString;
                endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        hostPort: "hostPort";
                        url: "url";
                    }>;
                    label: import("zod").ZodOptional<import("zod").ZodString>;
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    host: import("zod").ZodOptional<import("zod").ZodString>;
                    port: import("zod").ZodOptional<import("zod").ZodNumber>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                        label: import("zod").ZodString;
                        value: import("zod").ZodString;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            stream: import("zod").ZodObject<{
                id: import("zod").ZodString;
                logSourceId: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                status: import("zod").ZodEnum<{
                    active: "active";
                    error: "error";
                    pending: "pending";
                    provisioning: "provisioning";
                }>;
                errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                enabled: import("zod").ZodBoolean;
                createdAt: import("zod").ZodString;
                endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        hostPort: "hostPort";
                        url: "url";
                    }>;
                    label: import("zod").ZodOptional<import("zod").ZodString>;
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    host: import("zod").ZodOptional<import("zod").ZodString>;
                    port: import("zod").ZodOptional<import("zod").ZodNumber>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                        label: import("zod").ZodString;
                        value: import("zod").ZodString;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly reassign: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            targetLogSourceId: import("zod").ZodString;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            stream: import("zod").ZodObject<{
                id: import("zod").ZodString;
                logSourceId: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                status: import("zod").ZodEnum<{
                    active: "active";
                    error: "error";
                    pending: "pending";
                    provisioning: "provisioning";
                }>;
                errorMessage: import("zod").ZodNullable<import("zod").ZodString>;
                enabled: import("zod").ZodBoolean;
                createdAt: import("zod").ZodString;
                endpointCards: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        hostPort: "hostPort";
                        url: "url";
                    }>;
                    label: import("zod").ZodOptional<import("zod").ZodString>;
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    host: import("zod").ZodOptional<import("zod").ZodString>;
                    port: import("zod").ZodOptional<import("zod").ZodNumber>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    extraCredential: import("zod").ZodOptional<import("zod").ZodObject<{
                        label: import("zod").ZodString;
                        value: import("zod").ZodString;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly connectedAccounts: {
        readonly beginConnect: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                google: "google";
                linear: "linear";
                microsoft: "microsoft";
                slack: "slack";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            url: import("zod").ZodString;
            attemptId: import("zod").ZodString;
            expiresAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getConnectAttempt: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            attemptId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                completed: "completed";
                expired: "expired";
                failed: "failed";
                pending: "pending";
            }>;
            errorCode: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            accounts: import("zod").ZodArray<import("zod").ZodObject<{
                provider: import("zod").ZodString;
                externalName: import("zod").ZodNullable<import("zod").ZodString>;
                externalLogin: import("zod").ZodNullable<import("zod").ZodString>;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                authMode: import("zod").ZodNullable<import("zod").ZodEnum<{
                    oauth: "oauth";
                    pat: "pat";
                }>>;
                needsReconnect: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly disconnect: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                google: "google";
                linear: "linear";
                microsoft: "microsoft";
                slack: "slack";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly integrations: {
        readonly listProviders: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            providers: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                authType: import("zod").ZodEnum<{
                    api_key: "api_key";
                    app_installation: "app_installation";
                    oauth: "oauth";
                }>;
                capabilities: import("zod").ZodArray<import("zod").ZodEnum<{
                    alert_routing: "alert_routing";
                    code_search: "code_search";
                    health_check: "health_check";
                    inbound_webhooks: "inbound_webhooks";
                    messaging: "messaging";
                }>>;
                connectionCount: import("zod").ZodNumber;
                credentialFields: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    label: import("zod").ZodString;
                    required: import("zod").ZodBoolean;
                    secret: import("zod").ZodBoolean;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>>;
                browserConnectSupported: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listConnections: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodOptional<import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                incident_io: "incident_io";
                jira: "jira";
                linear: "linear";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack: "slack";
                teams: "teams";
                victorops: "victorops";
                webhook: "webhook";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connections: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connection: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly createConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                incident_io: "incident_io";
                jira: "jira";
                linear: "linear";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack: "slack";
                teams: "teams";
                victorops: "victorops";
                webhook: "webhook";
            }>;
            displayName: import("zod").ZodOptional<import("zod").ZodString>;
            credentials: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connection: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly beginConnect: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            provider: import("zod").ZodEnum<{
                bitbucket: "bitbucket";
                github: "github";
                incident_io: "incident_io";
                jira: "jira";
                linear: "linear";
                pagerduty: "pagerduty";
                rootly: "rootly";
                slack: "slack";
                teams: "teams";
                victorops: "victorops";
                webhook: "webhook";
            }>;
            displayName: import("zod").ZodOptional<import("zod").ZodString>;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            url: import("zod").ZodString;
            attemptId: import("zod").ZodString;
            expiresAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getConnectAttempt: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            attemptId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                completed: "completed";
                expired: "expired";
                failed: "failed";
                not_connected: "not_connected";
                pending: "pending";
            }>;
            errorCode: import("zod").ZodNullable<import("zod").ZodString>;
            connection: import("zod").ZodOptional<import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly disconnectConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly updateConnectionCredentials: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            credentials: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connection: import("zod").ZodObject<{
                id: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                    incident_io: "incident_io";
                    jira: "jira";
                    linear: "linear";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack: "slack";
                    teams: "teams";
                    victorops: "victorops";
                    webhook: "webhook";
                }>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    error: "error";
                    pending: "pending";
                    revoked: "revoked";
                }>;
                isActive: import("zod").ZodBoolean;
                needsAttention: import("zod").ZodBoolean;
                metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                healthStatus: import("zod").ZodEnum<{
                    healthy: "healthy";
                    unhealthy: "unhealthy";
                    unknown: "unknown";
                }>;
                healthMessage: import("zod").ZodNullable<import("zod").ZodString>;
                healthCheckedAt: import("zod").ZodNullable<import("zod").ZodString>;
                healthConsecutiveFailures: import("zod").ZodNumber;
                connectedBy: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getOrganizationExternalIdentityJitPolicy: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizationEnabled: import("zod").ZodBoolean;
            effectiveEnabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly updateOrganizationExternalIdentityJitPolicy: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            enabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizationEnabled: import("zod").ZodBoolean;
            effectiveEnabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getConnectionExternalIdentityJitPolicy: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizationEnabled: import("zod").ZodBoolean;
            connectionEnabled: import("zod").ZodBoolean;
            effectiveEnabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly updateConnectionExternalIdentityJitPolicy: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            enabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizationEnabled: import("zod").ZodBoolean;
            connectionEnabled: import("zod").ZodBoolean;
            effectiveEnabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getSlackConfiguration: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            defaultProjectId: import("zod").ZodNullable<import("zod").ZodString>;
            automaticResponses: import("zod").ZodBoolean;
            acknowledgementMessage: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly updateSlackConfiguration: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            defaultProjectId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            automaticResponses: import("zod").ZodOptional<import("zod").ZodBoolean>;
            acknowledgementMessage: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            defaultProjectId: import("zod").ZodNullable<import("zod").ZodString>;
            automaticResponses: import("zod").ZodBoolean;
            acknowledgementMessage: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listSlackChannelProjectMappings: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            mappings: import("zod").ZodArray<import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                slackChannelId: import("zod").ZodString;
                slackChannelName: import("zod").ZodString;
                projectId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly setSlackChannelProjectMapping: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            slackChannelId: import("zod").ZodString;
            slackChannelName: import("zod").ZodOptional<import("zod").ZodString>;
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            slackChannelId: import("zod").ZodString;
            slackChannelName: import("zod").ZodString;
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly deleteSlackChannelProjectMapping: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionId: import("zod").ZodString;
            slackChannelId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly notificationChannels: {
        readonly getProject: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            channelCards: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
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
                }>;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                scope: import("zod").ZodEnum<{
                    personal: "personal";
                    project: "project";
                }>;
                enabled: import("zod").ZodNullable<import("zod").ZodBoolean>;
                preferenceId: import("zod").ZodNullable<import("zod").ZodString>;
                prerequisite: import("zod").ZodObject<{
                    status: import("zod").ZodEnum<{
                        degraded: "degraded";
                        missing: "missing";
                        ready: "ready";
                        unavailable: "unavailable";
                    }>;
                    statusLabel: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                action: import("zod").ZodNullable<import("zod").ZodObject<{
                    label: import("zod").ZodString;
                    href: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
                destinations: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    label: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        active: "active";
                        degraded: "degraded";
                        inactive: "inactive";
                    }>;
                    statusLabel: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
                destinationManagement: import("zod").ZodEnum<{
                    integration_connections: "integration_connections";
                    none: "none";
                    slack_channels: "slack_channels";
                    teams_channels: "teams_channels";
                    webhook_endpoints: "webhook_endpoints";
                }>;
                canCreateDestinations: import("zod").ZodBoolean;
                supportedNotificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                    automation_finished: "automation_finished";
                    automation_run_failed: "automation_run_failed";
                    billing_auto_top_up_failed: "billing_auto_top_up_failed";
                    billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
                    billing_credit_balance_depleted: "billing_credit_balance_depleted";
                    billing_credit_balance_low: "billing_credit_balance_low";
                    billing_invoice_paid: "billing_invoice_paid";
                    billing_invoice_payment_failed: "billing_invoice_payment_failed";
                    billing_negative_balance_collected: "billing_negative_balance_collected";
                    billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
                    billing_payment_method_changed: "billing_payment_method_changed";
                    billing_payment_method_expiring: "billing_payment_method_expiring";
                    billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
                    billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
                    billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
                    billing_subscription_canceled: "billing_subscription_canceled";
                    billing_subscription_cancellation_scheduled: "billing_subscription_cancellation_scheduled";
                    code_repo_connected: "code_repo_connected";
                    code_repo_disconnected: "code_repo_disconnected";
                    github_connected: "github_connected";
                    github_disconnected: "github_disconnected";
                    integration_connected: "integration_connected";
                    integration_disconnected: "integration_disconnected";
                    issue_ignored: "issue_ignored";
                    issue_resolved: "issue_resolved";
                    issue_triggered: "issue_triggered";
                    log_source_connected: "log_source_connected";
                    log_source_disconnected: "log_source_disconnected";
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
            }, import("zod/v4/core").$strip>>;
            channels: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                enabled: import("zod").ZodBoolean;
                preferenceId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            notificationTypePreferences: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                notificationType: import("zod").ZodEnum<{
                    automation_finished: "automation_finished";
                    automation_run_failed: "automation_run_failed";
                    billing_auto_top_up_failed: "billing_auto_top_up_failed";
                    billing_auto_top_up_settings_changed: "billing_auto_top_up_settings_changed";
                    billing_credit_balance_depleted: "billing_credit_balance_depleted";
                    billing_credit_balance_low: "billing_credit_balance_low";
                    billing_invoice_paid: "billing_invoice_paid";
                    billing_invoice_payment_failed: "billing_invoice_payment_failed";
                    billing_negative_balance_collected: "billing_negative_balance_collected";
                    billing_negative_balance_collection_failed: "billing_negative_balance_collection_failed";
                    billing_payment_method_changed: "billing_payment_method_changed";
                    billing_payment_method_expiring: "billing_payment_method_expiring";
                    billing_plan_downgrade_applied: "billing_plan_downgrade_applied";
                    billing_plan_downgrade_scheduled: "billing_plan_downgrade_scheduled";
                    billing_plan_upgrade_applied: "billing_plan_upgrade_applied";
                    billing_subscription_canceled: "billing_subscription_canceled";
                    billing_subscription_cancellation_scheduled: "billing_subscription_cancellation_scheduled";
                    code_repo_connected: "code_repo_connected";
                    code_repo_disconnected: "code_repo_disconnected";
                    github_connected: "github_connected";
                    github_disconnected: "github_disconnected";
                    integration_connected: "integration_connected";
                    integration_disconnected: "integration_disconnected";
                    issue_ignored: "issue_ignored";
                    issue_resolved: "issue_resolved";
                    issue_triggered: "issue_triggered";
                    log_source_connected: "log_source_connected";
                    log_source_disconnected: "log_source_disconnected";
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
                }>;
                enabled: import("zod").ZodBoolean;
                preferenceId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            issueNotificationMinSeverity: import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly notificationDeliveryRules: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            rules: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                    automation_run_failed: "automation_run_failed";
                    issue_ignored: "issue_ignored";
                    issue_resolved: "issue_resolved";
                    issue_triggered: "issue_triggered";
                }>>;
                destinations: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    channel: import("zod").ZodEnum<{
                        incident_io: "incident_io";
                        pagerduty: "pagerduty";
                        rootly: "rootly";
                        slack_channel: "slack_channel";
                        teams_channel: "teams_channel";
                        webhook: "webhook";
                    }>;
                    destinationKey: import("zod").ZodString;
                    displayName: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
                condition: import("zod").ZodObject<{
                    severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                        critical: "critical";
                        high: "high";
                        low: "low";
                        medium: "medium";
                    }>>>;
                }, import("zod/v4/core").$strict>;
                component: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    label: import("zod").ZodString;
                    lifecycle: import("zod").ZodEnum<{
                        active: "active";
                        merged: "merged";
                        retired: "retired";
                    }>;
                }, import("zod/v4/core").$strip>>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                includeDescendants: import("zod").ZodBoolean;
                suspendedAt: import("zod").ZodNullable<import("zod").ZodString>;
                suspensionReason: import("zod").ZodNullable<import("zod").ZodString>;
                components: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    label: import("zod").ZodString;
                    lifecycle: import("zod").ZodEnum<{
                        active: "active";
                        merged: "merged";
                        retired: "retired";
                    }>;
                }, import("zod/v4/core").$strip>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly options: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            notificationTypes: import("zod").ZodArray<import("zod").ZodObject<{
                notificationType: import("zod").ZodEnum<{
                    automation_run_failed: "automation_run_failed";
                    issue_ignored: "issue_ignored";
                    issue_resolved: "issue_resolved";
                    issue_triggered: "issue_triggered";
                }>;
                label: import("zod").ZodString;
                conditions: import("zod").ZodArray<import("zod").ZodEnum<{
                    component: "component";
                    severity: "severity";
                }>>;
            }, import("zod/v4/core").$strip>>;
            components: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            componentIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            includeDescendants: import("zod").ZodDefault<import("zod").ZodBoolean>;
            condition: import("zod").ZodUnion<readonly [import("zod").ZodObject<{
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
                componentIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>]>;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodString;
            notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            condition: import("zod").ZodObject<{
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>;
            component: import("zod").ZodNullable<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
            componentId: import("zod").ZodNullable<import("zod").ZodString>;
            includeDescendants: import("zod").ZodBoolean;
            suspendedAt: import("zod").ZodNullable<import("zod").ZodString>;
            suspensionReason: import("zod").ZodNullable<import("zod").ZodString>;
            components: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
            createdAt: import("zod").ZodString;
            updatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            componentIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            includeDescendants: import("zod").ZodDefault<import("zod").ZodBoolean>;
            condition: import("zod").ZodUnion<readonly [import("zod").ZodObject<{
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
                componentIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>]>;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            ruleId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodString;
            notificationTypes: import("zod").ZodArray<import("zod").ZodEnum<{
                automation_run_failed: "automation_run_failed";
                issue_ignored: "issue_ignored";
                issue_resolved: "issue_resolved";
                issue_triggered: "issue_triggered";
            }>>;
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodEnum<{
                    incident_io: "incident_io";
                    pagerduty: "pagerduty";
                    rootly: "rootly";
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                    webhook: "webhook";
                }>;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            condition: import("zod").ZodObject<{
                severities: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>>;
            }, import("zod/v4/core").$strict>;
            component: import("zod").ZodNullable<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
            componentId: import("zod").ZodNullable<import("zod").ZodString>;
            includeDescendants: import("zod").ZodBoolean;
            suspendedAt: import("zod").ZodNullable<import("zod").ZodString>;
            suspensionReason: import("zod").ZodNullable<import("zod").ZodString>;
            components: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
            }, import("zod/v4/core").$strip>>;
            createdAt: import("zod").ZodString;
            updatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            ruleId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            removed: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly mcpConnectors: {
        readonly listProviders: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            providers: import("zod").ZodArray<import("zod").ZodObject<{
                providerId: import("zod").ZodString;
                label: import("zod").ZodString;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                availability: import("zod").ZodEnum<{
                    "custom-only": "custom-only";
                    disabled: "disabled";
                    enabled: "enabled";
                }>;
                setupSkill: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            connectedOnly: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectors: import("zod").ZodArray<import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly details: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            tools: import("zod").ZodArray<import("zod").ZodObject<{
                name: import("zod").ZodString;
                title: import("zod").ZodString;
                description: import("zod").ZodString;
                isReadOnly: import("zod").ZodBoolean;
                enabled: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly search: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodOptional<import("zod").ZodString>;
            namespace: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            offset: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            includeInputSchema: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            kind: import("zod").ZodEnum<{
                connectors: "connectors";
                tools: "tools";
            }>;
            total: import("zod").ZodNumber;
            connectors: import("zod").ZodArray<import("zod").ZodObject<{
                connectionKey: import("zod").ZodString;
                displayName: import("zod").ZodString;
                providerId: import("zod").ZodString;
                toolCount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
            tools: import("zod").ZodArray<import("zod").ZodObject<{
                connectionKey: import("zod").ZodString;
                toolName: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                isReadOnly: import("zod").ZodBoolean;
                description: import("zod").ZodString;
                score: import("zod").ZodNumber;
                inputSchema: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly describe: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionKey: import("zod").ZodString;
            toolName: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionKey: import("zod").ZodString;
            toolName: import("zod").ZodString;
            providerId: import("zod").ZodString;
            displayName: import("zod").ZodString;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            isReadOnly: import("zod").ZodBoolean;
            inputSchema: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly call: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            connectionKey: import("zod").ZodString;
            toolName: import("zod").ZodString;
            arguments: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
            ok: import("zod").ZodLiteral<true>;
            connectionKey: import("zod").ZodString;
            toolName: import("zod").ZodString;
            result: import("zod").ZodUnknown;
            structuredContent: import("zod").ZodOptional<import("zod").ZodUnknown>;
            content: import("zod").ZodArray<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
            text: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            ok: import("zod").ZodLiteral<false>;
            code: import("zod").ZodEnum<{
                MCP_ERROR: "MCP_ERROR";
                READ_ONLY: "READ_ONLY";
                TOOL_NOT_ENABLED: "TOOL_NOT_ENABLED";
            }>;
            message: import("zod").ZodString;
        }, import("zod/v4/core").$strip>], "ok">, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            serverUrl: import("zod").ZodString;
            transport: import("zod").ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>;
            headers: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>>;
            awsSigV4: import("zod").ZodOptional<import("zod").ZodObject<{
                accessKeyId: import("zod").ZodString;
                secretAccessKey: import("zod").ZodString;
                sessionToken: import("zod").ZodOptional<import("zod").ZodString>;
                region: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            providerId: import("zod").ZodString;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            serverUrl: import("zod").ZodOptional<import("zod").ZodString>;
            transport: import("zod").ZodOptional<import("zod").ZodEnum<{
                sse: "sse";
                "streamable-http": "streamable-http";
            }>>;
            headers: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>>;
            awsSigV4: import("zod").ZodOptional<import("zod").ZodObject<{
                accessKeyId: import("zod").ZodString;
                secretAccessKey: import("zod").ZodString;
                sessionToken: import("zod").ZodOptional<import("zod").ZodString>;
                region: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly disconnect: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, "api">;
        readonly setReadOnly: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            readOnly: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connector: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly beginOAuthInstall: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            providerId: import("zod").ZodString;
            requestedScopes: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            serverUrl: import("zod").ZodOptional<import("zod").ZodString>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            returnTo: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            authorizationUrl: import("zod").ZodString;
            connectionId: import("zod").ZodString;
            expiresAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getOAuthInstallAttempt: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                authorizing: "authorizing";
                connected: "connected";
                error: "error";
            }>;
            connector: import("zod").ZodOptional<import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                connectionKey: import("zod").ZodString;
                providerId: import("zod").ZodString;
                displayName: import("zod").ZodString;
                source: import("zod").ZodEnum<{
                    custom: "custom";
                    preset: "preset";
                }>;
                installStatus: import("zod").ZodEnum<{
                    authorizing: "authorizing";
                    configured: "configured";
                    connected: "connected";
                    error: "error";
                }>;
                authMode: import("zod").ZodEnum<{
                    "aws-sigv4": "aws-sigv4";
                    headers: "headers";
                    none: "none";
                    oauth: "oauth";
                }>;
                transport: import("zod").ZodEnum<{
                    sse: "sse";
                    "streamable-http": "streamable-http";
                }>;
                serverUrl: import("zod").ZodString;
                readOnly: import("zod").ZodBoolean;
                management: import("zod").ZodObject<{
                    mode: import("zod").ZodEnum<{
                        system: "system";
                        user: "user";
                    }>;
                    managedBy: import("zod").ZodNullable<import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"integration">;
                        id: import("zod").ZodString;
                        displayName: import("zod").ZodString;
                        iconKey: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    capabilities: import("zod").ZodObject<{
                        canRename: import("zod").ZodBoolean;
                        canEditCredentials: import("zod").ZodBoolean;
                        canSetReadOnly: import("zod").ZodBoolean;
                        canConfigureTools: import("zod").ZodBoolean;
                        canDisconnect: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                enabledToolCount: import("zod").ZodNumber;
                connectedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly sandboxPresets: {
        readonly deletePreset: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            presetType: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            projectId: import("zod").ZodString;
            presetType: import("zod").ZodString;
            deleted: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listConnections: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connections: import("zod").ZodArray<import("zod").ZodObject<{
                presetType: import("zod").ZodString;
                credentialSource: import("zod").ZodEnum<{
                    bitbucket_integration: "bitbucket_integration";
                    github_app: "github_app";
                    personal_access_token: "personal_access_token";
                    stored_credentials: "stored_credentials";
                }>;
                isSystemManaged: import("zod").ZodBoolean;
                fallbackConfigured: import("zod").ZodBoolean;
                envVarKeys: import("zod").ZodArray<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listTypes: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            types: import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                label: import("zod").ZodString;
                executableNames: import("zod").ZodArray<import("zod").ZodString>;
                envVarKeys: import("zod").ZodArray<import("zod").ZodString>;
                setupSkill: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly testPreset: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            presetType: import("zod").ZodString;
            environmentVariables: import("zod").ZodArray<import("zod").ZodObject<{
                key: import("zod").ZodString;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                failed: "failed";
                success: "success";
            }>;
            message: import("zod").ZodNullable<import("zod").ZodString>;
            stdout: import("zod").ZodString;
            stderr: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly upsertPreset: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            presetType: import("zod").ZodString;
            environmentVariables: import("zod").ZodArray<import("zod").ZodObject<{
                key: import("zod").ZodString;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            projectId: import("zod").ZodString;
            presetType: import("zod").ZodString;
            envVarKeys: import("zod").ZodArray<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly scripts: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            search: import("zod").ZodOptional<import("zod").ZodString>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            scripts: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            name: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            script: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                content: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            content: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            script: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                content: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            name: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            script: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                content: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            name: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, "api">;
    };
    readonly logMatchExpressions: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expressions: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            expressionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expression: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            expression: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expression: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            expressionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            expression: import("zod").ZodOptional<import("zod").ZodString>;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expression: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly disable: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            expressionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            expression: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly signalDefinitions: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinitions: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            signalDefinitionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinition: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            expression: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinition: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            signalDefinitionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            expression: import("zod").ZodOptional<import("zod").ZodString>;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinition: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly disable: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            signalDefinitionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            signalDefinition: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                expression: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                compiledVersion: import("zod").ZodNumber;
                linkedAutomationIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            signalDefinitionId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, "api">;
    };
    readonly memory: {
        readonly put: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            path: import("zod").ZodString;
            body: import("zod").ZodString;
            kind: import("zod").ZodDefault<import("zod").ZodEnum<{
                note: "note";
                runbook: "runbook";
            }>>;
            title: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            document: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    change: "change";
                    note: "note";
                    runbook: "runbook";
                }>;
                managed: import("zod").ZodBoolean;
                path: import("zod").ZodNullable<import("zod").ZodString>;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                attrs: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                body: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            id: import("zod").ZodOptional<import("zod").ZodString>;
            path: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            document: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    change: "change";
                    note: "note";
                    runbook: "runbook";
                }>;
                managed: import("zod").ZodBoolean;
                path: import("zod").ZodNullable<import("zod").ZodString>;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                attrs: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                body: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            kind: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<("change" | "note" | "runbook")[], string>>>;
            since: import("zod").ZodOptional<import("zod").ZodString>;
            service: import("zod").ZodOptional<import("zod").ZodString>;
            pathPrefix: import("zod").ZodOptional<import("zod").ZodString>;
            managed: import("zod").ZodOptional<import("zod").ZodCoercedBoolean<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            documents: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    change: "change";
                    note: "note";
                    runbook: "runbook";
                }>;
                managed: import("zod").ZodBoolean;
                path: import("zod").ZodNullable<import("zod").ZodString>;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                contentHash: import("zod").ZodString;
                attrs: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly search: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
            kind: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<("change" | "note" | "runbook")[], string>>>;
            since: import("zod").ZodOptional<import("zod").ZodString>;
            service: import("zod").ZodOptional<import("zod").ZodString>;
            pathPrefix: import("zod").ZodOptional<import("zod").ZodString>;
            managed: import("zod").ZodOptional<import("zod").ZodCoercedBoolean<unknown>>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            hits: import("zod").ZodArray<import("zod").ZodObject<{
                documentId: import("zod").ZodString;
                kind: import("zod").ZodEnum<{
                    change: "change";
                    note: "note";
                    runbook: "runbook";
                }>;
                managed: import("zod").ZodBoolean;
                path: import("zod").ZodNullable<import("zod").ZodString>;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                snippet: import("zod").ZodString;
                score: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
            emptyVerdict: import("zod").ZodNullable<import("zod").ZodObject<{
                calibrated: import("zod").ZodLiteral<true>;
                minScoreThreshold: import("zod").ZodNumber;
                queryTerms: import("zod").ZodArray<import("zod").ZodString>;
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            id: import("zod").ZodOptional<import("zod").ZodString>;
            path: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, "api">;
    };
    readonly organizations: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organizations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                slug: import("zod").ZodString;
                logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                role: import("zod").ZodOptional<import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organization: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                slug: import("zod").ZodString;
                logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            name: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organization: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                slug: import("zod").ZodString;
                logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodString;
            name: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            organization: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                slug: import("zod").ZodString;
                logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly onboarding: {
        readonly getState: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            onboarding: import("zod").ZodObject<{
                gate: import("zod").ZodEnum<{
                    blocked: "blocked";
                    "needs-onboarding": "needs-onboarding";
                    ready: "ready";
                }>;
                canonicalStep: import("zod").ZodNullable<import("zod").ZodEnum<{
                    "accept-invite": "accept-invite";
                    billing: "billing";
                    "configure-code-search": "configure-code-search";
                    "configure-project": "configure-project";
                    "configure-slack-notifications": "configure-slack-notifications";
                    "confirm-issue": "confirm-issue";
                    "connect-github-account": "connect-github-account";
                    "create-organization": "create-organization";
                    finish: "finish";
                    "install-github-app": "install-github-app";
                    "install-slack-app": "install-slack-app";
                    "trigger-issue": "trigger-issue";
                    "verify-email": "verify-email";
                }>>;
                organizationId: import("zod").ZodNullable<import("zod").ZodString>;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
                completionByStep: import("zod").ZodRecord<import("zod").ZodEnum<{
                    "accept-invite": "accept-invite";
                    billing: "billing";
                    "configure-code-search": "configure-code-search";
                    "configure-project": "configure-project";
                    "configure-slack-notifications": "configure-slack-notifications";
                    "confirm-issue": "confirm-issue";
                    "connect-github-account": "connect-github-account";
                    "create-organization": "create-organization";
                    finish: "finish";
                    "install-github-app": "install-github-app";
                    "install-slack-app": "install-slack-app";
                    "trigger-issue": "trigger-issue";
                    "verify-email": "verify-email";
                }>, import("zod").ZodEnum<{
                    complete: "complete";
                    incomplete: "incomplete";
                    skipped: "skipped";
                }>>;
                githubSkipped: import("zod").ZodBoolean;
                githubAppSkipped: import("zod").ZodBoolean;
                slackSkipped: import("zod").ZodBoolean;
                sampleIssueId: import("zod").ZodNullable<import("zod").ZodString>;
                actorRole: import("zod").ZodNullable<import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>>;
                requiredStep: import("zod").ZodNullable<import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                    "accept-invite": "accept-invite";
                    billing: "billing";
                    "configure-code-search": "configure-code-search";
                    "configure-project": "configure-project";
                    "configure-slack-notifications": "configure-slack-notifications";
                    "confirm-issue": "confirm-issue";
                    "connect-github-account": "connect-github-account";
                    "create-organization": "create-organization";
                    finish: "finish";
                    "install-github-app": "install-github-app";
                    "install-slack-app": "install-slack-app";
                    "trigger-issue": "trigger-issue";
                    "verify-email": "verify-email";
                }>, import("zod").ZodLiteral<"select-organization">]>>;
                isCompleted: import("zod").ZodBoolean;
                onboardingRecommendationsThreadId: import("zod").ZodNullable<import("zod").ZodString>;
                hasOrganizations: import("zod").ZodBoolean;
                hasPaidBillingSubscription: import("zod").ZodBoolean;
                billingStepEnabled: import("zod").ZodBoolean;
                pendingInvitations: import("zod").ZodArray<import("zod").ZodObject<{
                    invitationId: import("zod").ZodString;
                    organizationId: import("zod").ZodString;
                    organizationName: import("zod").ZodString;
                    organizationSlug: import("zod").ZodString;
                    organizationImageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    inviterName: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly skipIntegration: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            integration: import("zod").ZodEnum<{
                github: "github";
                slack: "slack";
            }>;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly skipGithubAppInstallation: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly skipSampleIssue: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly finish: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            completed: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly members: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            members: import("zod").ZodArray<import("zod").ZodObject<{
                membershipId: import("zod").ZodString;
                userId: import("zod").ZodString;
                name: import("zod").ZodNullable<import("zod").ZodString>;
                email: import("zod").ZodString;
                imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                role: import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly updateRole: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            member: import("zod").ZodString;
            role: import("zod").ZodEnum<{
                admin: "admin";
                member: "member";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            member: import("zod").ZodObject<{
                membershipId: import("zod").ZodString;
                userId: import("zod").ZodString;
                name: import("zod").ZodNullable<import("zod").ZodString>;
                email: import("zod").ZodString;
                imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                role: import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly remove: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                member: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            member: string;
            organizationId?: string | undefined;
        }, {
            params: {
                member: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            removedUserId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly invite: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            email: import("zod").ZodString;
            role: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<{
                admin: "admin";
                member: "member";
            }>>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            invitation: import("zod").ZodObject<{
                id: import("zod").ZodString;
                email: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>;
                status: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                expiresAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listInvitations: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            invitations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                email: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    admin: "admin";
                    member: "member";
                }>;
                status: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                expiresAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly revokeInvitation: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                invitationId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            invitationId: string;
            organizationId?: string | undefined;
        }, {
            params: {
                invitationId: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            revokedInvitationId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly teams: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            teams: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                memberCount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            teamId: import("zod").ZodString;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                teamId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            teamId: string;
            organizationId?: string | undefined;
        }, {
            params: {
                teamId: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly addMember: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            teamId: import("zod").ZodString;
            userId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly removeMember: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                teamId: import("zod").ZodString;
                userId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            teamId: string;
            userId: string;
            organizationId?: string | undefined;
        }, {
            params: {
                teamId: string;
                userId: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listMembers: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            teamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            members: import("zod").ZodArray<import("zod").ZodObject<{
                userId: import("zod").ZodString;
                name: import("zod").ZodNullable<import("zod").ZodString>;
                email: import("zod").ZodString;
                addedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly publicKeys: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            publicKeys: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            keyId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            publicKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly ensureLogForwarding: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            publicKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            keyId: import("zod").ZodString;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            expiresAt: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            publicKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly deactivate: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                keyId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            keyId: string;
            projectId?: string | undefined;
        }, {
            params: {
                keyId: string;
            };
            query: {
                projectId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            publicKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceConnectionId: import("zod").ZodNullable<import("zod").ZodString>;
                deactivatedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly secretKeys: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            secretKeys: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            keyId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            secretKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            expiresAt: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            secretKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
                value: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            keyId: import("zod").ZodString;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            expiresAt: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            secretKey: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastUsedAt: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                projectId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodPipe<import("zod").ZodObject<{
            params: import("zod").ZodObject<{
                keyId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            keyId: string;
        }, {
            params: {
                keyId: string;
            };
        }>>, import("zod").ZodVoid, "api">;
    };
    readonly projects: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            projects: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                name: import("zod").ZodString;
                region: import("zod").ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "eu-central-2": "eu-central-2";
                    "eu-north-1": "eu-north-1";
                    "eu-south-1": "eu-south-1";
                    "eu-south-2": "eu-south-2";
                    "eu-west-1": "eu-west-1";
                    "eu-west-2": "eu-west-2";
                    "eu-west-3": "eu-west-3";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-1": "us-west-1";
                    "us-west-2": "us-west-2";
                }>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            project: import("zod").ZodObject<{
                id: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                name: import("zod").ZodString;
                region: import("zod").ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "eu-central-2": "eu-central-2";
                    "eu-north-1": "eu-north-1";
                    "eu-south-1": "eu-south-1";
                    "eu-south-2": "eu-south-2";
                    "eu-west-1": "eu-west-1";
                    "eu-west-2": "eu-west-2";
                    "eu-west-3": "eu-west-3";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-1": "us-west-1";
                    "us-west-2": "us-west-2";
                }>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            region: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<{
                "eu-central-1": "eu-central-1";
                "eu-central-2": "eu-central-2";
                "eu-north-1": "eu-north-1";
                "eu-south-1": "eu-south-1";
                "eu-south-2": "eu-south-2";
                "eu-west-1": "eu-west-1";
                "eu-west-2": "eu-west-2";
                "eu-west-3": "eu-west-3";
                "us-east-1": "us-east-1";
                "us-east-2": "us-east-2";
                "us-west-1": "us-west-1";
                "us-west-2": "us-west-2";
            }>>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            project: import("zod").ZodObject<{
                id: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                name: import("zod").ZodString;
                region: import("zod").ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "eu-central-2": "eu-central-2";
                    "eu-north-1": "eu-north-1";
                    "eu-south-1": "eu-south-1";
                    "eu-south-2": "eu-south-2";
                    "eu-west-1": "eu-west-1";
                    "eu-west-2": "eu-west-2";
                    "eu-west-3": "eu-west-3";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-1": "us-west-1";
                    "us-west-2": "us-west-2";
                }>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodString;
            name: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            project: import("zod").ZodObject<{
                id: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                name: import("zod").ZodString;
                region: import("zod").ZodEnum<{
                    "eu-central-1": "eu-central-1";
                    "eu-central-2": "eu-central-2";
                    "eu-north-1": "eu-north-1";
                    "eu-south-1": "eu-south-1";
                    "eu-south-2": "eu-south-2";
                    "eu-west-1": "eu-west-1";
                    "eu-west-2": "eu-west-2";
                    "eu-west-3": "eu-west-3";
                    "us-east-1": "us-east-1";
                    "us-east-2": "us-east-2";
                    "us-west-1": "us-west-1";
                    "us-west-2": "us-west-2";
                }>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly delete: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, "api">;
    };
    readonly search: {
        readonly threads: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            page: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            threads: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                title: import("zod").ZodString;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                labels: import("zod").ZodArray<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                highlights: import("zod").ZodArray<import("zod").ZodString>;
                score: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>>;
            pagination: import("zod").ZodObject<{
                page: import("zod").ZodNumber;
                limit: import("zod").ZodNumber;
                totalResults: import("zod").ZodNumber;
                totalPages: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly messages: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            page: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            threadId: import("zod").ZodOptional<import("zod").ZodString>;
            role: import("zod").ZodOptional<import("zod").ZodEnum<{
                assistant: "assistant";
                user: "user";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            messages: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                threadId: import("zod").ZodString;
                threadTitle: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    assistant: "assistant";
                    user: "user";
                }>;
                content: import("zod").ZodString;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                highlights: import("zod").ZodArray<import("zod").ZodString>;
                score: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>>;
            pagination: import("zod").ZodObject<{
                page: import("zod").ZodNumber;
                limit: import("zod").ZodNumber;
                totalResults: import("zod").ZodNumber;
                totalPages: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly messages: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            messages: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    assistant: "assistant";
                    user: "user";
                }>;
                content: import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"message">;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"reasoning">;
                    reasoning: import("zod").ZodString;
                    status: import("zod").ZodOptional<import("zod").ZodEnum<{
                        complete: "complete";
                        in_progress: "in_progress";
                    }>>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"tool_call">;
                    name: import("zod").ZodString;
                    params: import("zod").ZodOptional<import("zod").ZodAny>;
                    result: import("zod").ZodOptional<import("zod").ZodAny>;
                    status: import("zod").ZodOptional<import("zod").ZodEnum<{
                        error: "error";
                        in_progress: "in_progress";
                        success: "success";
                        unknown: "unknown";
                    }>>;
                    toolCallId: import("zod").ZodOptional<import("zod").ZodString>;
                    durationMs: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"artifact">;
                    name: import("zod").ZodEnum<{
                        alert_card: "alert_card";
                        integration_required: "integration_required";
                        issue_card: "issue_card";
                        log_detail: "log_detail";
                        mdx: "mdx";
                        table: "table";
                        timeseries: "timeseries";
                    }>;
                    data: import("zod").ZodAny;
                    toolCallId: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"fork">;
                    sourceThreadId: import("zod").ZodString;
                    sourceMessageId: import("zod").ZodString;
                    sourceThreadTitle: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"summary">;
                    summary: import("zod").ZodString;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"slack_context">;
                    channelId: import("zod").ZodString;
                    isTruncated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    messages: import("zod").ZodArray<import("zod").ZodObject<{
                        timestamp: import("zod").ZodString;
                        slackUserId: import("zod").ZodOptional<import("zod").ZodString>;
                        displayName: import("zod").ZodString;
                        text: import("zod").ZodString;
                        isBot: import("zod").ZodBoolean;
                        files: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            mimetype: import("zod").ZodString;
                            size: import("zod").ZodOptional<import("zod").ZodNumber>;
                            attachmentId: import("zod").ZodOptional<import("zod").ZodString>;
                            ingestionStatus: import("zod").ZodOptional<import("zod").ZodEnum<{
                                attached: "attached";
                                oversized: "oversized";
                                skipped: "skipped";
                                unavailable: "unavailable";
                                unsupported: "unsupported";
                            }>>;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"teams_context">;
                    conversationId: import("zod").ZodString;
                    isTruncated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    messages: import("zod").ZodArray<import("zod").ZodObject<{
                        activityId: import("zod").ZodOptional<import("zod").ZodString>;
                        displayName: import("zod").ZodString;
                        text: import("zod").ZodString;
                        isBot: import("zod").ZodBoolean;
                        createdDateTime: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>]>>;
                source: import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly append: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            message: import("zod").ZodString;
            wait: import("zod").ZodDefault<import("zod").ZodBoolean>;
            timeoutSeconds: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            automationId: import("zod").ZodOptional<import("zod").ZodString>;
            ambientServiceRun: import("zod").ZodOptional<import("zod").ZodLiteral<true>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            completed: import("zod").ZodBoolean;
            threadId: import("zod").ZodString;
            runId: import("zod").ZodString;
            messageId: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodEnum<{
                aborted: "aborted";
                completed: "completed";
                error: "error";
                processing: "processing";
            }>;
            response: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly threads: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            threads: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            thread: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            messages: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                role: import("zod").ZodEnum<{
                    assistant: "assistant";
                    user: "user";
                }>;
                content: import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"message">;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"reasoning">;
                    reasoning: import("zod").ZodString;
                    status: import("zod").ZodOptional<import("zod").ZodEnum<{
                        complete: "complete";
                        in_progress: "in_progress";
                    }>>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"tool_call">;
                    name: import("zod").ZodString;
                    params: import("zod").ZodOptional<import("zod").ZodAny>;
                    result: import("zod").ZodOptional<import("zod").ZodAny>;
                    status: import("zod").ZodOptional<import("zod").ZodEnum<{
                        error: "error";
                        in_progress: "in_progress";
                        success: "success";
                        unknown: "unknown";
                    }>>;
                    toolCallId: import("zod").ZodOptional<import("zod").ZodString>;
                    durationMs: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"artifact">;
                    name: import("zod").ZodEnum<{
                        alert_card: "alert_card";
                        integration_required: "integration_required";
                        issue_card: "issue_card";
                        log_detail: "log_detail";
                        mdx: "mdx";
                        table: "table";
                        timeseries: "timeseries";
                    }>;
                    data: import("zod").ZodAny;
                    toolCallId: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"fork">;
                    sourceThreadId: import("zod").ZodString;
                    sourceMessageId: import("zod").ZodString;
                    sourceThreadTitle: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"summary">;
                    summary: import("zod").ZodString;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"slack_context">;
                    channelId: import("zod").ZodString;
                    isTruncated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    messages: import("zod").ZodArray<import("zod").ZodObject<{
                        timestamp: import("zod").ZodString;
                        slackUserId: import("zod").ZodOptional<import("zod").ZodString>;
                        displayName: import("zod").ZodString;
                        text: import("zod").ZodString;
                        isBot: import("zod").ZodBoolean;
                        files: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            mimetype: import("zod").ZodString;
                            size: import("zod").ZodOptional<import("zod").ZodNumber>;
                            attachmentId: import("zod").ZodOptional<import("zod").ZodString>;
                            ingestionStatus: import("zod").ZodOptional<import("zod").ZodEnum<{
                                attached: "attached";
                                oversized: "oversized";
                                skipped: "skipped";
                                unavailable: "unavailable";
                                unsupported: "unsupported";
                            }>>;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"teams_context">;
                    conversationId: import("zod").ZodString;
                    isTruncated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    messages: import("zod").ZodArray<import("zod").ZodObject<{
                        activityId: import("zod").ZodOptional<import("zod").ZodString>;
                        displayName: import("zod").ZodString;
                        text: import("zod").ZodString;
                        isBot: import("zod").ZodBoolean;
                        createdDateTime: import("zod").ZodOptional<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>]>>;
                source: import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getStatus: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                idle: "idle";
                processing: "processing";
            }>;
            lastRunStatus: import("zod").ZodNullable<import("zod").ZodEnum<{
                error: "error";
            }>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly stop: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            message: import("zod").ZodString;
            wait: import("zod").ZodDefault<import("zod").ZodBoolean>;
            timeoutSeconds: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            automationId: import("zod").ZodOptional<import("zod").ZodString>;
            ambientServiceRun: import("zod").ZodOptional<import("zod").ZodLiteral<true>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            completed: import("zod").ZodBoolean;
            threadId: import("zod").ZodString;
            runId: import("zod").ZodString;
            messageId: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodEnum<{
                aborted: "aborted";
                completed: "completed";
                error: "error";
                processing: "processing";
            }>;
            response: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly update: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            status: import("zod").ZodEnum<{
                archived: "archived";
                regular: "regular";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            thread: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly fork: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            messageId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            thread: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly setVisibility: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            visibility: import("zod").ZodEnum<{
                organization: "organization";
                private: "private";
            }>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            thread: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    archived: "archived";
                    regular: "regular";
                }>;
                source: import("zod").ZodNullable<import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            visibility: import("zod").ZodEnum<{
                organization: "organization";
                private: "private";
            }>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly createShareLink: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            share: import("zod").ZodObject<{
                shareId: import("zod").ZodString;
                threadId: import("zod").ZodString;
                url: import("zod").ZodString;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listShareLinks: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            shares: import("zod").ZodArray<import("zod").ZodObject<{
                shareId: import("zod").ZodString;
                threadId: import("zod").ZodString;
                url: import("zod").ZodString;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly revokeShareLink: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            shareId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, "api">;
    };
    readonly runs: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            runs: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                threadId: import("zod").ZodString;
                userMessageId: import("zod").ZodNullable<import("zod").ZodString>;
                assistantMessageId: import("zod").ZodNullable<import("zod").ZodString>;
                parentRunId: import("zod").ZodNullable<import("zod").ZodString>;
                workflowRunId: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    aborted: "aborted";
                    completed: "completed";
                    error: "error";
                    processing: "processing";
                }>;
                source: import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                completedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listForThread: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            threadId: import("zod").ZodString;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            runs: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                threadId: import("zod").ZodString;
                userMessageId: import("zod").ZodNullable<import("zod").ZodString>;
                assistantMessageId: import("zod").ZodNullable<import("zod").ZodString>;
                parentRunId: import("zod").ZodNullable<import("zod").ZodString>;
                workflowRunId: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    aborted: "aborted";
                    completed: "completed";
                    error: "error";
                    processing: "processing";
                }>;
                source: import("zod").ZodEnum<{
                    agent: "agent";
                    api: "api";
                    app: "app";
                    bitbucket: "bitbucket";
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    sdk: "sdk";
                    slack: "slack";
                    system: "system";
                    teams: "teams";
                    web: "web";
                }>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
                completedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            runId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            completed: import("zod").ZodBoolean;
            threadId: import("zod").ZodString;
            runId: import("zod").ZodString;
            messageId: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodEnum<{
                aborted: "aborted";
                completed: "completed";
                error: "error";
                processing: "processing";
            }>;
            response: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly cancel: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            runId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly issues: {
        readonly count: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>>;
            severity: import("zod").ZodOptional<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            total: import("zod").ZodNumber;
            byStatus: import("zod").ZodObject<{
                open: import("zod").ZodNumber;
                resolved: import("zod").ZodNumber;
                ignored: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
            bySeverity: import("zod").ZodObject<{
                low: import("zod").ZodNumber;
                medium: import("zod").ZodNumber;
                high: import("zod").ZodNumber;
                critical: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
            filters: import("zod").ZodObject<{
                name: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodNullable<import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>>;
                severity: import("zod").ZodNullable<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            contentMdx: import("zod").ZodOptional<import("zod").ZodString>;
            severity: import("zod").ZodDefault<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            statusStartedAt: import("zod").ZodOptional<import("zod").ZodString>;
            sample: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
            duplicateIssueId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>>;
            severity: import("zod").ZodOptional<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issues: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly search: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                ignored: "ignored";
                open: "open";
                resolved: "resolved";
            }>>;
            severity: import("zod").ZodOptional<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            componentId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            includeDeliveryMetadata: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issues: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
                delivery: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
                slackChannels: import("zod").ZodArray<import("zod").ZodObject<{
                    channelId: import("zod").ZodNullable<import("zod").ZodString>;
                    channelName: import("zod").ZodNullable<import("zod").ZodString>;
                    threadTs: import("zod").ZodNullable<import("zod").ZodString>;
                    permalink: import("zod").ZodNullable<import("zod").ZodString>;
                    workspaceName: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly resolve: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
            statusResolvedAt: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly ignore: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly reopen: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly reassignAndReopen: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
            targetComponentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
            sourceComponentId: import("zod").ZodString;
            targetComponentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly mute: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly unmute: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            issueId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            issue: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodEnum<{
                    ignored: "ignored";
                    open: "open";
                    resolved: "resolved";
                }>;
                severity: import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    low: "low";
                    medium: "medium";
                }>;
                componentId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                mutedAt: import("zod").ZodNullable<import("zod").ZodString>;
                muteHitCount: import("zod").ZodNumber;
                lastActivityAt: import("zod").ZodNullable<import("zod").ZodString>;
                lastDeliveredAt: import("zod").ZodNullable<import("zod").ZodString>;
                locked: import("zod").ZodBoolean;
                redacted: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly workItems: {
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            container: import("zod").ZodString;
            title: import("zod").ZodString;
            bodyMarkdown: import("zod").ZodOptional<import("zod").ZodString>;
            state: import("zod").ZodOptional<import("zod").ZodString>;
            itemType: import("zod").ZodOptional<import("zod").ZodString>;
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            clientRequestId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            identifier: import("zod").ZodString;
            title: import("zod").ZodString;
            url: import("zod").ZodString;
            state: import("zod").ZodString;
            attribution: import("zod").ZodOptional<import("zod").ZodObject<{
                kind: import("zod").ZodEnum<{
                    user: "user";
                    workspace: "workspace";
                }>;
                name: import("zod").ZodOptional<import("zod").ZodString>;
                email: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            reused: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly comment: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            itemId: import("zod").ZodString;
            bodyMarkdown: import("zod").ZodString;
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            identifier: import("zod").ZodString;
            url: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly transition: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            itemId: import("zod").ZodString;
            state: import("zod").ZodString;
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            identifier: import("zod").ZodString;
            title: import("zod").ZodString;
            url: import("zod").ZodString;
            state: import("zod").ZodString;
            changed: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly pullRequests: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<{
                closed: "closed";
                merged: "merged";
                open: "open";
            }>>;
            repositoryFullName: import("zod").ZodOptional<import("zod").ZodString>;
            requestedByUserId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            pullRequests: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                repositoryFullName: import("zod").ZodString;
                pullRequestId: import("zod").ZodString;
                githubPullRequestId: import("zod").ZodNumber;
                title: import("zod").ZodNullable<import("zod").ZodString>;
                url: import("zod").ZodNullable<import("zod").ZodString>;
                status: import("zod").ZodNullable<import("zod").ZodEnum<{
                    closed: "closed";
                    merged: "merged";
                    open: "open";
                }>>;
                reviewState: import("zod").ZodNullable<import("zod").ZodEnum<{
                    approved: "approved";
                    changes_requested: "changes_requested";
                    review_required: "review_required";
                }>>;
                checksState: import("zod").ZodNullable<import("zod").ZodEnum<{
                    failing: "failing";
                    passing: "passing";
                    pending: "pending";
                }>>;
                requestedByUserId: import("zod").ZodNullable<import("zod").ZodString>;
                authorLogin: import("zod").ZodNullable<import("zod").ZodString>;
                githubAuthorLogin: import("zod").ZodNullable<import("zod").ZodString>;
                threadId: import("zod").ZodNullable<import("zod").ZodString>;
                runId: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
                mergedAt: import("zod").ZodNullable<import("zod").ZodString>;
                closedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly billing: {
        readonly getSummary: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            billingModel: import("zod").ZodEnum<{
                "credit-balance-v1": "credit-balance-v1";
            }>;
            billable: import("zod").ZodBoolean;
            nonBillableReason: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodString;
            planName: import("zod").ZodNullable<import("zod").ZodString>;
            planSlug: import("zod").ZodNullable<import("zod").ZodString>;
            currency: import("zod").ZodNullable<import("zod").ZodString>;
            currentBalance: import("zod").ZodNullable<import("zod").ZodString>;
            targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
            currentCycle: import("zod").ZodNullable<import("zod").ZodObject<{
                startsAt: import("zod").ZodString;
                endsAt: import("zod").ZodString;
                billableStartsAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            currentPeriodEstimate: import("zod").ZodNullable<import("zod").ZodObject<{
                subscriptionChargeAmount: import("zod").ZodString;
                creditDeficitAmount: import("zod").ZodString;
                creditDeficitChargeAmount: import("zod").ZodString;
                totalAmount: import("zod").ZodString;
                currency: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            pendingDowngrade: import("zod").ZodNullable<import("zod").ZodObject<{
                billingSubscriptionChangeId: import("zod").ZodString;
                effectiveAt: import("zod").ZodString;
                planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                planName: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            subscription: import("zod").ZodNullable<import("zod").ZodObject<{
                id: import("zod").ZodString;
                status: import("zod").ZodString;
                billingPlanId: import("zod").ZodString;
                priceBookId: import("zod").ZodString;
                cycleType: import("zod").ZodString;
                cancelAt: import("zod").ZodNullable<import("zod").ZodString>;
                canceledAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            collection: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    current: "current";
                    delinquent: "delinquent";
                    payment_retrying: "payment_retrying";
                }>;
                outstandingCredits: import("zod").ZodNullable<import("zod").ZodString>;
                outstandingAmount: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                scheduledAttemptsMade: import("zod").ZodNumber;
                nextRetryAt: import("zod").ZodNullable<import("zod").ZodString>;
                billingInvoiceId: import("zod").ZodNullable<import("zod").ZodString>;
                hostedInvoiceUrl: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            currentPlan: import("zod").ZodNullable<import("zod").ZodObject<{
                slug: import("zod").ZodString;
                name: import("zod").ZodString;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                subscriptionStatus: import("zod").ZodString;
                cycleStartsAt: import("zod").ZodNullable<import("zod").ZodString>;
                cycleEndsAt: import("zod").ZodNullable<import("zod").ZodString>;
                renewalAt: import("zod").ZodNullable<import("zod").ZodString>;
                pendingSwitch: import("zod").ZodNullable<import("zod").ZodObject<{
                    billingSubscriptionChangeId: import("zod").ZodString;
                    effectiveAt: import("zod").ZodString;
                    planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                    planName: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNullable<import("zod").ZodString>;
                    currency: import("zod").ZodNullable<import("zod").ZodString>;
                    targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                pendingCancellation: import("zod").ZodNullable<import("zod").ZodObject<{
                    effectiveAt: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getUsage: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            cycle: import("zod").ZodDefault<import("zod").ZodEnum<{
                current: "current";
                previous: "previous";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            cycle: import("zod").ZodNullable<import("zod").ZodObject<{
                startsAt: import("zod").ZodString;
                endsAt: import("zod").ZodString;
                billableStartsAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
            usage: import("zod").ZodArray<import("zod").ZodObject<{
                dimension: import("zod").ZodEnum<{
                    automation_runs_completed: "automation_runs_completed";
                    input_tokens: "input_tokens";
                    issues_created: "issues_created";
                    logs_accepted_bytes: "logs_accepted_bytes";
                    logs_ingested_bytes: "logs_ingested_bytes";
                    output_tokens: "output_tokens";
                    pull_request_reviews_completed: "pull_request_reviews_completed";
                    pull_requests_created: "pull_requests_created";
                }>;
                totalQuantity: import("zod").ZodString;
                ratedQuantity: import("zod").ZodString;
                creditsConsumed: import("zod").ZodString;
                sourceBreakdown: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listTransactions: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            page: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            items: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                transactionType: import("zod").ZodEnum<{
                    adjustment: "adjustment";
                    auto_top_up: "auto_top_up";
                    cycle_top_up: "cycle_top_up";
                    deficit_settlement: "deficit_settlement";
                    migration_opening_balance: "migration_opening_balance";
                    one_off_top_up: "one_off_top_up";
                    upgrade_top_up: "upgrade_top_up";
                    usage_debit: "usage_debit";
                    void: "void";
                }>;
                creditDelta: import("zod").ZodString;
                balanceAfter: import("zod").ZodString;
                occurredAt: import("zod").ZodString;
                billingInvoiceId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            pagination: import("zod").ZodObject<{
                page: import("zod").ZodNumber;
                limit: import("zod").ZodNumber;
                total: import("zod").ZodNumber;
                totalPages: import("zod").ZodNumber;
                hasNext: import("zod").ZodBoolean;
                hasPrev: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getAutoTopUp: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            supported: import("zod").ZodBoolean;
            enabled: import("zod").ZodBoolean;
            triggerCreditBalance: import("zod").ZodString;
            topUpAmount: import("zod").ZodString;
            cycleSpendingLimit: import("zod").ZodString;
            currency: import("zod").ZodString;
            creditsToGrant: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly updateAutoTopUp: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            enabled: import("zod").ZodBoolean;
            triggerCreditBalance: import("zod").ZodString;
            topUpAmount: import("zod").ZodString;
            cycleSpendingLimit: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            supported: import("zod").ZodBoolean;
            enabled: import("zod").ZodBoolean;
            triggerCreditBalance: import("zod").ZodString;
            topUpAmount: import("zod").ZodString;
            cycleSpendingLimit: import("zod").ZodString;
            currency: import("zod").ZodString;
            creditsToGrant: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly purchaseCredits: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            amount: import("zod").ZodString;
            idempotencyKey: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                paid: "paid";
                pending_payment: "pending_payment";
            }>;
            billingInvoiceId: import("zod").ZodString;
            topUpAmount: import("zod").ZodString;
            creditsToGrant: import("zod").ZodString;
            currency: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listPlans: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            billingModel: import("zod").ZodString;
            currentPlanSlug: import("zod").ZodNullable<import("zod").ZodString>;
            hasActiveStripeBilling: import("zod").ZodBoolean;
            plans: import("zod").ZodArray<import("zod").ZodObject<{
                slug: import("zod").ZodString;
                billingModel: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                bestFor: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodString;
                currency: import("zod").ZodString;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                logsIncludedBytes: import("zod").ZodString;
                inputTokensIncluded: import("zod").ZodString;
                outputTokensIncluded: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly previewPlanChange: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            planSlug: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            calculatedAt: import("zod").ZodString;
            type: import("zod").ZodEnum<{
                downgrade: "downgrade";
                upgrade: "upgrade";
            }>;
            effectiveAt: import("zod").ZodString;
            currency: import("zod").ZodString;
            currentPlanSlug: import("zod").ZodString;
            targetPlanSlug: import("zod").ZodString;
            currentPlanName: import("zod").ZodString;
            targetPlanName: import("zod").ZodString;
            currentPlanPrice: import("zod").ZodString;
            targetPlanPrice: import("zod").ZodString;
            currentTargetCreditBalance: import("zod").ZodString;
            targetCreditBalance: import("zod").ZodString;
            creditDeficitAmount: import("zod").ZodString;
            creditDeficitChargeAmount: import("zod").ZodString;
            additionalCreditPrice: import("zod").ZodString;
            immediateChargeAmount: import("zod").ZodString;
            subscriptionChargeAmount: import("zod").ZodString;
            proratedCreditGrantAmount: import("zod").ZodString;
            remainingCycleFraction: import("zod").ZodString;
            nextCycleChargeAmount: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly previewSubscriptionCancellation: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            currentPlan: import("zod").ZodObject<{
                slug: import("zod").ZodString;
                name: import("zod").ZodString;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                subscriptionStatus: import("zod").ZodString;
                cycleStartsAt: import("zod").ZodNullable<import("zod").ZodString>;
                cycleEndsAt: import("zod").ZodNullable<import("zod").ZodString>;
                renewalAt: import("zod").ZodNullable<import("zod").ZodString>;
                pendingSwitch: import("zod").ZodNullable<import("zod").ZodObject<{
                    billingSubscriptionChangeId: import("zod").ZodString;
                    effectiveAt: import("zod").ZodString;
                    planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                    planName: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNullable<import("zod").ZodString>;
                    currency: import("zod").ZodNullable<import("zod").ZodString>;
                    targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                pendingCancellation: import("zod").ZodNullable<import("zod").ZodObject<{
                    effectiveAt: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
            effectiveAt: import("zod").ZodString;
            currentBalance: import("zod").ZodString;
            servicePolicy: import("zod").ZodLiteral<"active_until_period_end">;
            creditPolicy: import("zod").ZodLiteral<"dormant_until_resubscription">;
            scheduledFinalCharge: import("zod").ZodNullable<import("zod").ZodString>;
            autoTopUpEnabled: import("zod").ZodBoolean;
            pendingDowngrade: import("zod").ZodNullable<import("zod").ZodObject<{
                billingSubscriptionChangeId: import("zod").ZodString;
                effectiveAt: import("zod").ZodString;
                planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                planName: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            collectionState: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    current: "current";
                    delinquent: "delinquent";
                    payment_retrying: "payment_retrying";
                }>;
                outstandingCredits: import("zod").ZodNullable<import("zod").ZodString>;
                outstandingAmount: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                scheduledAttemptsMade: import("zod").ZodNumber;
                nextRetryAt: import("zod").ZodNullable<import("zod").ZodString>;
                billingInvoiceId: import("zod").ZodNullable<import("zod").ZodString>;
                hostedInvoiceUrl: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            calculatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly scheduleSubscriptionCancellation: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            currentPlan: import("zod").ZodObject<{
                slug: import("zod").ZodString;
                name: import("zod").ZodString;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                subscriptionStatus: import("zod").ZodString;
                cycleStartsAt: import("zod").ZodNullable<import("zod").ZodString>;
                cycleEndsAt: import("zod").ZodNullable<import("zod").ZodString>;
                renewalAt: import("zod").ZodNullable<import("zod").ZodString>;
                pendingSwitch: import("zod").ZodNullable<import("zod").ZodObject<{
                    billingSubscriptionChangeId: import("zod").ZodString;
                    effectiveAt: import("zod").ZodString;
                    planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                    planName: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNullable<import("zod").ZodString>;
                    currency: import("zod").ZodNullable<import("zod").ZodString>;
                    targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                pendingCancellation: import("zod").ZodNullable<import("zod").ZodObject<{
                    effectiveAt: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
            effectiveAt: import("zod").ZodString;
            currentBalance: import("zod").ZodString;
            servicePolicy: import("zod").ZodLiteral<"active_until_period_end">;
            creditPolicy: import("zod").ZodLiteral<"dormant_until_resubscription">;
            scheduledFinalCharge: import("zod").ZodNullable<import("zod").ZodString>;
            autoTopUpEnabled: import("zod").ZodBoolean;
            pendingDowngrade: import("zod").ZodNullable<import("zod").ZodObject<{
                billingSubscriptionChangeId: import("zod").ZodString;
                effectiveAt: import("zod").ZodString;
                planSlug: import("zod").ZodNullable<import("zod").ZodString>;
                planName: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                targetCreditBalance: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            collectionState: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    current: "current";
                    delinquent: "delinquent";
                    payment_retrying: "payment_retrying";
                }>;
                outstandingCredits: import("zod").ZodNullable<import("zod").ZodString>;
                outstandingAmount: import("zod").ZodNullable<import("zod").ZodString>;
                currency: import("zod").ZodNullable<import("zod").ZodString>;
                scheduledAttemptsMade: import("zod").ZodNumber;
                nextRetryAt: import("zod").ZodNullable<import("zod").ZodString>;
                billingInvoiceId: import("zod").ZodNullable<import("zod").ZodString>;
                hostedInvoiceUrl: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            calculatedAt: import("zod").ZodString;
            billingSubscriptionChangeId: import("zod").ZodString;
            alreadyScheduled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, "api">;
        readonly resumeSubscriptionCancellation: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            billingSubscriptionId: import("zod").ZodString;
            resumed: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly changePlan: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            planSlug: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            billingSubscriptionChangeId: import("zod").ZodString;
            billingSubscriptionId: import("zod").ZodString;
            status: import("zod").ZodString;
            type: import("zod").ZodString;
            effectiveAt: import("zod").ZodString;
            invoiceId: import("zod").ZodNullable<import("zod").ZodString>;
            creditDeficitAmount: import("zod").ZodOptional<import("zod").ZodString>;
            creditDeficitChargeAmount: import("zod").ZodOptional<import("zod").ZodString>;
            creditTopUpAmount: import("zod").ZodOptional<import("zod").ZodString>;
            immediateChargeAmount: import("zod").ZodOptional<import("zod").ZodString>;
            subscriptionChargeAmount: import("zod").ZodOptional<import("zod").ZodString>;
            proratedCreditGrantAmount: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly createCheckoutSession: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            planSlug: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            sessionId: import("zod").ZodString;
            checkoutUrl: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getCheckoutSessionStatus: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            sessionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                active: "active";
                expired: "expired";
                pending: "pending";
            }>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly createPortalSession: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            portalUrl: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getPaymentMethod: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            organizationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            hasPaymentMethod: import("zod").ZodBoolean;
            brand: import("zod").ZodNullable<import("zod").ZodString>;
            last4: import("zod").ZodNullable<import("zod").ZodString>;
            type: import("zod").ZodNullable<import("zod").ZodString>;
            expiryMonth: import("zod").ZodNullable<import("zod").ZodNumber>;
            expiryYear: import("zod").ZodNullable<import("zod").ZodNumber>;
            isDefault: import("zod").ZodBoolean;
            display: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly tasks: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            tasks: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                label: import("zod").ZodString;
                description: import("zod").ZodString;
                instructions: import("zod").ZodString;
                completed: import("zod").ZodBoolean;
                completedAt: import("zod").ZodNullable<import("zod").ZodString>;
                category: import("zod").ZodEnum<{
                    onboarding: "onboarding";
                    setup: "setup";
                }>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly recommendations: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            recommendations: import("zod").ZodArray<import("zod").ZodObject<{
                kind: import("zod").ZodEnum<{
                    integration: "integration";
                    log_source: "log_source";
                    mcp_connector: "mcp_connector";
                    sandbox_cli: "sandbox_cli";
                }>;
                targetId: import("zod").ZodString;
                status: import("zod").ZodEnum<{
                    connected: "connected";
                    recommended: "recommended";
                }>;
                roiScore: import("zod").ZodNumber;
                priority: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly repos: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            repos: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                accessSourceId: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                }>;
                owner: import("zod").ZodString;
                name: import("zod").ZodString;
                fullName: import("zod").ZodString;
                defaultBranch: import("zod").ZodNullable<import("zod").ZodString>;
                isPrivate: import("zod").ZodBoolean;
                linked: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly add: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            accessSourceIds: import("zod").ZodArray<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            repos: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                accessSourceId: import("zod").ZodString;
                provider: import("zod").ZodEnum<{
                    bitbucket: "bitbucket";
                    github: "github";
                }>;
                owner: import("zod").ZodString;
                name: import("zod").ZodString;
                fullName: import("zod").ZodString;
                defaultBranch: import("zod").ZodNullable<import("zod").ZodString>;
                isPrivate: import("zod").ZodBoolean;
                linked: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly remove: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodVoid, "api">;
    };
    readonly components: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            includeDeleted: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            components: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                origin: import("zod").ZodEnum<{
                    code_detected: "code_detected";
                    log_observed: "log_observed";
                    user_declared: "user_declared";
                }>;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
                observationState: import("zod").ZodEnum<{
                    observed: "observed";
                    stale: "stale";
                    unobserved: "unobserved";
                }>;
                registryRevision: import("zod").ZodNumber;
                canonicalComponentId: import("zod").ZodString;
                mergedIntoComponentId: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
                retiredAt: import("zod").ZodNullable<import("zod").ZodString>;
                retirementReason: import("zod").ZodNullable<import("zod").ZodString>;
                legacyStateUnknown: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            component: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                origin: import("zod").ZodEnum<{
                    code_detected: "code_detected";
                    log_observed: "log_observed";
                    user_declared: "user_declared";
                }>;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
                observationState: import("zod").ZodEnum<{
                    observed: "observed";
                    stale: "stale";
                    unobserved: "unobserved";
                }>;
                registryRevision: import("zod").ZodNumber;
                canonicalComponentId: import("zod").ZodString;
                mergedIntoComponentId: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
                retiredAt: import("zod").ZodNullable<import("zod").ZodString>;
                retirementReason: import("zod").ZodNullable<import("zod").ZodString>;
                legacyStateUnknown: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly register: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            requestId: import("zod").ZodOptional<import("zod").ZodString>;
            origin: import("zod").ZodOptional<import("zod").ZodEnum<{
                code_detected: "code_detected";
                log_observed: "log_observed";
            }>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            component: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                origin: import("zod").ZodEnum<{
                    code_detected: "code_detected";
                    log_observed: "log_observed";
                    user_declared: "user_declared";
                }>;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
                observationState: import("zod").ZodEnum<{
                    observed: "observed";
                    stale: "stale";
                    unobserved: "unobserved";
                }>;
                registryRevision: import("zod").ZodNumber;
                canonicalComponentId: import("zod").ZodString;
                mergedIntoComponentId: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
                retiredAt: import("zod").ZodNullable<import("zod").ZodString>;
                retirementReason: import("zod").ZodNullable<import("zod").ZodString>;
                legacyStateUnknown: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly deregister: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            reason: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
            status: import("zod").ZodLiteral<"observation_withdrawn">;
            componentId: import("zod").ZodString;
            sourceType: import("zod").ZodLiteral<"secret_key">;
            withdrawn: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            status: import("zod").ZodLiteral<"retirement_confirmation_required">;
            preview: import("zod").ZodObject<{
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                canonicalComponentName: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    retired: "retired";
                }>;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                requiresCanonicalGroupConfirmation: import("zod").ZodBoolean;
                recommendationScopeEnabled: import("zod").ZodLiteral<false>;
                dependents: import("zod").ZodObject<{
                    openIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    activeComponentIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    automationBindingIds: import("zod").ZodArray<import("zod").ZodString>;
                    notificationRuleIds: import("zod").ZodArray<import("zod").ZodString>;
                    dataSourceMappingIds: import("zod").ZodArray<import("zod").ZodString>;
                    observationIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipIds: import("zod").ZodArray<import("zod").ZodString>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                    externalIncidentIds: import("zod").ZodArray<import("zod").ZodString>;
                    authorizedDeliveryIds: import("zod").ZodArray<import("zod").ZodString>;
                    authorizedAutomationRunIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
                counts: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>], "status">, "api">;
        readonly rename: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            name: import("zod").ZodString;
            requestId: import("zod").ZodString;
            reason: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            component: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                origin: import("zod").ZodEnum<{
                    code_detected: "code_detected";
                    log_observed: "log_observed";
                    user_declared: "user_declared";
                }>;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    merged: "merged";
                    retired: "retired";
                }>;
                observationState: import("zod").ZodEnum<{
                    observed: "observed";
                    stale: "stale";
                    unobserved: "unobserved";
                }>;
                registryRevision: import("zod").ZodNumber;
                canonicalComponentId: import("zod").ZodString;
                mergedIntoComponentId: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
                retiredAt: import("zod").ZodNullable<import("zod").ZodString>;
                retirementReason: import("zod").ZodNullable<import("zod").ZodString>;
                legacyStateUnknown: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly assignTeam: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            teamId: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            teamId: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly retirementPreview: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            preview: import("zod").ZodObject<{
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                canonicalComponentName: import("zod").ZodString;
                lifecycle: import("zod").ZodEnum<{
                    active: "active";
                    retired: "retired";
                }>;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                requiresCanonicalGroupConfirmation: import("zod").ZodBoolean;
                recommendationScopeEnabled: import("zod").ZodLiteral<false>;
                dependents: import("zod").ZodObject<{
                    openIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    activeComponentIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    automationBindingIds: import("zod").ZodArray<import("zod").ZodString>;
                    notificationRuleIds: import("zod").ZodArray<import("zod").ZodString>;
                    dataSourceMappingIds: import("zod").ZodArray<import("zod").ZodString>;
                    observationIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipIds: import("zod").ZodArray<import("zod").ZodString>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                    externalIncidentIds: import("zod").ZodArray<import("zod").ZodString>;
                    authorizedDeliveryIds: import("zod").ZodArray<import("zod").ZodString>;
                    authorizedAutomationRunIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
                counts: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly retire: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            requestId: import("zod").ZodString;
            reason: import("zod").ZodString;
            componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            confirmCanonicalGroup: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            result: import("zod").ZodObject<{
                operationId: import("zod").ZodString;
                status: import("zod").ZodEnum<{
                    committed: "committed";
                    complete: "complete";
                    followup_failed: "followup_failed";
                }>;
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                counts: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                authorizedDeliveryIds: import("zod").ZodArray<import("zod").ZodString>;
                authorizedAutomationRunIds: import("zod").ZodArray<import("zod").ZodString>;
                manualExternalIncidentIds: import("zod").ZodArray<import("zod").ZodString>;
                issueAutomationSuppressions: import("zod").ZodNumber;
                outboxEffectCount: import("zod").ZodNumber;
                manifest: import("zod").ZodObject<{
                    notificationRules: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                    automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                    relationships: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                followups: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly restorationPreview: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            retirementOperationId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            preview: import("zod").ZodObject<{
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                canonicalComponentName: import("zod").ZodString;
                retirementOperationId: import("zod").ZodString;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                eligible: import("zod").ZodObject<{
                    notificationRuleIds: import("zod").ZodArray<import("zod").ZodString>;
                    automationBindingIds: import("zod").ZodArray<import("zod").ZodString>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly restore: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            retirementOperationId: import("zod").ZodString;
            requestId: import("zod").ZodString;
            reason: import("zod").ZodString;
            componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            selections: import("zod").ZodDefault<import("zod").ZodObject<{
                notificationRuleIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                automationBindingIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                recommendationScopeIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                relationshipIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            result: import("zod").ZodObject<{
                operationId: import("zod").ZodString;
                status: import("zod").ZodLiteral<"complete">;
                requestedComponentId: import("zod").ZodString;
                canonicalComponentId: import("zod").ZodString;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                restored: import("zod").ZodObject<{
                    notificationRuleIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                    automationBindingIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                    recommendationScopeIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                    relationshipIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly mergePreview: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            sourceComponentId: import("zod").ZodString;
            targetComponentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            preview: import("zod").ZodObject<{
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                organizationId: import("zod").ZodString;
                projectId: import("zod").ZodString;
                sourceGroupComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                targetGroupComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                inventory: import("zod").ZodObject<{
                    openIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    componentIssueIds: import("zod").ZodArray<import("zod").ZodString>;
                    observationIds: import("zod").ZodArray<import("zod").ZodString>;
                    dataSourceMappingIds: import("zod").ZodArray<import("zod").ZodString>;
                    nameIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipIds: import("zod").ZodArray<import("zod").ZodString>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
                notificationPolicies: import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: import("zod").ZodString;
                    sourceRowRevision: import("zod").ZodNumber;
                    sourceComponentId: import("zod").ZodString;
                    equivalentPolicyId: import("zod").ZodNullable<import("zod").ZodString>;
                    equivalent: import("zod").ZodBoolean;
                    defaultDisposition: import("zod").ZodEnum<{
                        deduplicate: "deduplicate";
                        suspend: "suspend";
                    }>;
                    allowedDispositions: import("zod").ZodArray<import("zod").ZodEnum<{
                        move: "move";
                        suspend: "suspend";
                    }>>;
                    beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: import("zod").ZodString;
                    sourceRowRevision: import("zod").ZodNumber;
                    sourceComponentId: import("zod").ZodString;
                    equivalentPolicyId: import("zod").ZodNullable<import("zod").ZodString>;
                    equivalent: import("zod").ZodBoolean;
                    defaultDisposition: import("zod").ZodEnum<{
                        deduplicate: "deduplicate";
                        suspend: "suspend";
                    }>;
                    allowedDispositions: import("zod").ZodArray<import("zod").ZodEnum<{
                        move: "move";
                        suspend: "suspend";
                    }>>;
                    beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                notificationScopeChanges: import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: import("zod").ZodString;
                    ownerComponentId: import("zod").ZodString;
                    rowRevision: import("zod").ZodNumber;
                    beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                automationScopeChanges: import("zod").ZodArray<import("zod").ZodObject<{
                    kind: import("zod").ZodEnum<{
                        automation_binding: "automation_binding";
                        notification_rule: "notification_rule";
                    }>;
                    policyId: import("zod").ZodString;
                    ownerComponentId: import("zod").ZodString;
                    rowRevision: import("zod").ZodNumber;
                    beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                relationshipChanges: import("zod").ZodArray<import("zod").ZodObject<{
                    relationshipId: import("zod").ZodString;
                    action: import("zod").ZodEnum<{
                        close_duplicate: "close_duplicate";
                        close_self: "close_self";
                        rewire: "rewire";
                    }>;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    beforeSourceComponentId: import("zod").ZodString;
                    beforeTargetComponentId: import("zod").ZodString;
                    afterSourceComponentId: import("zod").ZodString;
                    afterTargetComponentId: import("zod").ZodString;
                    survivingRelationshipId: import("zod").ZodNullable<import("zod").ZodString>;
                    beforeRowRevision: import("zod").ZodNumber;
                    afterRowRevision: import("zod").ZodNullable<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>>;
                recommendationScopeEnabled: import("zod").ZodLiteral<false>;
                dependentCount: import("zod").ZodNumber;
                ordinaryTransactionLimit: import("zod").ZodNumber;
                operatorAssistanceRequired: import("zod").ZodBoolean;
                confirmationRequired: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly merge: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            sourceComponentId: import("zod").ZodString;
            targetComponentId: import("zod").ZodString;
            requestId: import("zod").ZodString;
            reason: import("zod").ZodString;
            componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            policyDispositions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                disposition: import("zod").ZodEnum<{
                    move: "move";
                    suspend: "suspend";
                }>;
                beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            confirmPolicyImpact: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            result: import("zod").ZodObject<{
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                operationId: import("zod").ZodString;
                status: import("zod").ZodLiteral<"complete">;
                affectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                manifest: import("zod").ZodObject<{
                    componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                    redirectedComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    dataSourceMappingIds: import("zod").ZodArray<import("zod").ZodString>;
                    movedAliasIds: import("zod").ZodArray<import("zod").ZodString>;
                    historicalDisplayIds: import("zod").ZodArray<import("zod").ZodString>;
                    relationshipChanges: import("zod").ZodArray<import("zod").ZodObject<{
                        relationshipId: import("zod").ZodString;
                        action: import("zod").ZodEnum<{
                            close_duplicate: "close_duplicate";
                            close_self: "close_self";
                            rewire: "rewire";
                        }>;
                        relationshipType: import("zod").ZodEnum<{
                            depends_on: "depends_on";
                            part_of: "part_of";
                        }>;
                        beforeSourceComponentId: import("zod").ZodString;
                        beforeTargetComponentId: import("zod").ZodString;
                        afterSourceComponentId: import("zod").ZodString;
                        afterTargetComponentId: import("zod").ZodString;
                        survivingRelationshipId: import("zod").ZodNullable<import("zod").ZodString>;
                        beforeRowRevision: import("zod").ZodNumber;
                        afterRowRevision: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, import("zod/v4/core").$strip>>;
                    notificationPolicies: import("zod").ZodArray<import("zod").ZodObject<{
                        policyId: import("zod").ZodString;
                        action: import("zod").ZodEnum<{
                            deduplicated: "deduplicated";
                            moved: "moved";
                            suspended: "suspended";
                        }>;
                        equivalentPolicyId: import("zod").ZodNullable<import("zod").ZodString>;
                        beforeRowRevision: import("zod").ZodNumber;
                        afterRowRevision: import("zod").ZodNumber;
                        beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                        policyId: import("zod").ZodString;
                        action: import("zod").ZodEnum<{
                            deduplicated: "deduplicated";
                            moved: "moved";
                            suspended: "suspended";
                        }>;
                        equivalentPolicyId: import("zod").ZodNullable<import("zod").ZodString>;
                        beforeRowRevision: import("zod").ZodNumber;
                        afterRowRevision: import("zod").ZodNumber;
                        beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    notificationScopeChanges: import("zod").ZodArray<import("zod").ZodObject<{
                        kind: import("zod").ZodEnum<{
                            automation_binding: "automation_binding";
                            notification_rule: "notification_rule";
                        }>;
                        policyId: import("zod").ZodString;
                        ownerComponentId: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                        beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    automationScopeChanges: import("zod").ZodArray<import("zod").ZodObject<{
                        kind: import("zod").ZodEnum<{
                            automation_binding: "automation_binding";
                            notification_rule: "notification_rule";
                        }>;
                        policyId: import("zod").ZodString;
                        ownerComponentId: import("zod").ZodString;
                        rowRevision: import("zod").ZodNumber;
                        beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    recommendationScopeIds: import("zod").ZodArray<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly relationships: {
            readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                includeHistorical: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                relationships: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    source: import("zod").ZodObject<{
                        originalComponentId: import("zod").ZodString;
                        effectiveComponentId: import("zod").ZodString;
                        name: import("zod").ZodString;
                        lifecycle: import("zod").ZodEnum<{
                            active: "active";
                            merged: "merged";
                            retired: "retired";
                        }>;
                        observationState: import("zod").ZodEnum<{
                            observed: "observed";
                            stale: "stale";
                            unobserved: "unobserved";
                        }>;
                    }, import("zod/v4/core").$strip>;
                    target: import("zod").ZodObject<{
                        originalComponentId: import("zod").ZodString;
                        effectiveComponentId: import("zod").ZodString;
                        name: import("zod").ZodString;
                        lifecycle: import("zod").ZodEnum<{
                            active: "active";
                            merged: "merged";
                            retired: "retired";
                        }>;
                        observationState: import("zod").ZodEnum<{
                            observed: "observed";
                            stale: "stale";
                            unobserved: "unobserved";
                        }>;
                    }, import("zod/v4/core").$strip>;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    createdAt: import("zod").ZodString;
                    endedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    endReason: import("zod").ZodNullable<import("zod").ZodString>;
                    rowRevision: import("zod").ZodNumber;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>, "api">;
            readonly preview: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                relationshipType: import("zod").ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                action: import("zod").ZodEnum<{
                    add: "add";
                    remove: "remove";
                }>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                preview: import("zod").ZodObject<{
                    sourceComponentId: import("zod").ZodString;
                    targetComponentId: import("zod").ZodString;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    action: import("zod").ZodEnum<{
                        add: "add";
                        remove: "remove";
                    }>;
                    organizationId: import("zod").ZodString;
                    projectId: import("zod").ZodString;
                    relationshipId: import("zod").ZodNullable<import("zod").ZodString>;
                    componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                    policyImpact: import("zod").ZodObject<{
                        notificationRules: import("zod").ZodArray<import("zod").ZodObject<{
                            ruleId: import("zod").ZodString;
                            ruleGroupId: import("zod").ZodNullable<import("zod").ZodString>;
                            ownerComponentId: import("zod").ZodString;
                            destinationIds: import("zod").ZodArray<import("zod").ZodString>;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                            bindingId: import("zod").ZodString;
                            automationId: import("zod").ZodString;
                            ownerComponentId: import("zod").ZodString;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
                    confirmationRequired: import("zod").ZodBoolean;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, "api">;
            readonly add: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                relationshipType: import("zod").ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                requestId: import("zod").ZodString;
                reason: import("zod").ZodString;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                confirmPolicyImpact: import("zod").ZodDefault<import("zod").ZodBoolean>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                result: import("zod").ZodObject<{
                    action: import("zod").ZodEnum<{
                        add: "add";
                        remove: "remove";
                    }>;
                    relationshipId: import("zod").ZodString;
                    sourceComponentId: import("zod").ZodString;
                    targetComponentId: import("zod").ZodString;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    policyImpact: import("zod").ZodObject<{
                        notificationRules: import("zod").ZodArray<import("zod").ZodObject<{
                            ruleId: import("zod").ZodString;
                            ruleGroupId: import("zod").ZodNullable<import("zod").ZodString>;
                            ownerComponentId: import("zod").ZodString;
                            destinationIds: import("zod").ZodArray<import("zod").ZodString>;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                            bindingId: import("zod").ZodString;
                            automationId: import("zod").ZodString;
                            ownerComponentId: import("zod").ZodString;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, "api">;
            readonly remove: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                sourceComponentId: import("zod").ZodString;
                targetComponentId: import("zod").ZodString;
                relationshipType: import("zod").ZodEnum<{
                    depends_on: "depends_on";
                    part_of: "part_of";
                }>;
                requestId: import("zod").ZodString;
                reason: import("zod").ZodString;
                componentRevisions: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
                confirmPolicyImpact: import("zod").ZodDefault<import("zod").ZodBoolean>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                result: import("zod").ZodObject<{
                    action: import("zod").ZodEnum<{
                        add: "add";
                        remove: "remove";
                    }>;
                    relationshipId: import("zod").ZodString;
                    sourceComponentId: import("zod").ZodString;
                    targetComponentId: import("zod").ZodString;
                    relationshipType: import("zod").ZodEnum<{
                        depends_on: "depends_on";
                        part_of: "part_of";
                    }>;
                    policyImpact: import("zod").ZodObject<{
                        notificationRules: import("zod").ZodArray<import("zod").ZodObject<{
                            ruleId: import("zod").ZodString;
                            ruleGroupId: import("zod").ZodNullable<import("zod").ZodString>;
                            ownerComponentId: import("zod").ZodString;
                            destinationIds: import("zod").ZodArray<import("zod").ZodString>;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        automationBindings: import("zod").ZodArray<import("zod").ZodObject<{
                            bindingId: import("zod").ZodString;
                            automationId: import("zod").ZodString;
                            ownerComponentId: import("zod").ZodString;
                            beforeComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                            afterComponentIds: import("zod").ZodArray<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>, "api">;
        };
        readonly incidents: {
            readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
                projectId: import("zod").ZodOptional<import("zod").ZodString>;
                componentId: import("zod").ZodOptional<import("zod").ZodString>;
                activeOnly: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
                cursor: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
                incidents: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    componentId: import("zod").ZodString;
                    projectId: import("zod").ZodString;
                    severity: import("zod").ZodEnum<{
                        degraded: "degraded";
                        outage: "outage";
                    }>;
                    summary: import("zod").ZodString;
                    startedAt: import("zod").ZodString;
                    resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>, "api">;
        };
        readonly timeline: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            windowStart: import("zod").ZodOptional<import("zod").ZodString>;
            windowEnd: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            windowStart: import("zod").ZodString;
            windowEnd: import("zod").ZodString;
            timeline: import("zod").ZodArray<import("zod").ZodObject<{
                timestamp: import("zod").ZodString;
                status: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                    unknown: "unknown";
                }>;
            }, import("zod/v4/core").$strip>>;
            incidents: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                componentId: import("zod").ZodString;
                projectId: import("zod").ZodString;
                severity: import("zod").ZodEnum<{
                    degraded: "degraded";
                    outage: "outage";
                }>;
                summary: import("zod").ZodString;
                startedAt: import("zod").ZodString;
                resolvedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
    };
};
export type PublicApiContract = typeof publicApiContract;
