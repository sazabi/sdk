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
                    script: "script";
                }>;
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
                    script: "script";
                }>;
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
                    script: "script";
                }>;
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
                    script: "script";
                }>;
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
            observedServiceNames: import("zod").ZodArray<import("zod").ZodString>;
            observedAttributeKeys: import("zod").ZodArray<import("zod").ZodString>;
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
        readonly searchNatural: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            answer: import("zod").ZodString;
            steps: import("zod").ZodNumber;
            toolCalls: import("zod").ZodNumber;
            compacted: import("zod").ZodBoolean;
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
                modelProvider: import("zod").ZodOptional<import("zod").ZodString>;
                modelId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    };
    readonly dataSources: {
        readonly listTypes: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            types: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
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
        readonly listConnections: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            dataSourceType: import("zod").ZodOptional<import("zod").ZodEnum<{
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
            connections: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceType: import("zod").ZodEnum<{
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
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
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getConnection: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connection: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceType: import("zod").ZodEnum<{
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
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
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listInstances: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            dataSourceType: import("zod").ZodOptional<import("zod").ZodEnum<{
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
            instances: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                dataSourceType: import("zod").ZodEnum<{
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
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
                label: import("zod").ZodNullable<import("zod").ZodString>;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                connectionDisplayName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                streamName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getInstance: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            instanceId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            instance: import("zod").ZodObject<{
                id: import("zod").ZodString;
                dataSourceType: import("zod").ZodEnum<{
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
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
                label: import("zod").ZodNullable<import("zod").ZodString>;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                connectionDisplayName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                streamName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly createConnection: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            dataSourceType: import("zod").ZodEnum<{
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
            metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
            displayName: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            publicKey: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly disconnectConnection: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
            connectionTeardownError: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listStreams: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            streams: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                displayName: import("zod").ZodString;
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
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly listInstanceStreams: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            instanceId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            streams: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                displayName: import("zod").ZodString;
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
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly createStream: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            displayName: import("zod").ZodString;
            config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            publicKey: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly getStream: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            stream: import("zod").ZodObject<{
                id: import("zod").ZodString;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                displayName: import("zod").ZodString;
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
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly deleteStream: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
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
                channel: import("zod").ZodNullable<import("zod").ZodEnum<{
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
                notificationType: import("zod").ZodNullable<import("zod").ZodEnum<{
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
                priority: import("zod").ZodNumber;
                condition: import("zod").ZodObject<{
                    minSeverity: import("zod").ZodOptional<import("zod").ZodEnum<{
                        critical: "critical";
                        high: "high";
                        medium: "medium";
                    }>>;
                    component: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strict>;
                outcome: import("zod").ZodEnum<{
                    route: "route";
                    suppress: "suppress";
                }>;
                enabled: import("zod").ZodBoolean;
                destinations: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    channel: import("zod").ZodString;
                    destinationKey: import("zod").ZodString;
                    displayName: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            outcome: import("zod").ZodEnum<{
                route: "route";
                suppress: "suppress";
            }>;
            channel: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            notificationType: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            condition: import("zod").ZodObject<{
                minSeverity: import("zod").ZodOptional<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    medium: "medium";
                }>>;
                component: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>;
            destinations: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                }>;
                destinationKey: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodString;
            channel: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            notificationType: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            priority: import("zod").ZodNumber;
            condition: import("zod").ZodObject<{
                minSeverity: import("zod").ZodOptional<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    medium: "medium";
                }>>;
                component: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>;
            outcome: import("zod").ZodEnum<{
                route: "route";
                suppress: "suppress";
            }>;
            enabled: import("zod").ZodBoolean;
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodString;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            createdAt: import("zod").ZodString;
            updatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly setEnabled: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            ruleId: import("zod").ZodString;
            enabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodString;
            channel: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            notificationType: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            priority: import("zod").ZodNumber;
            condition: import("zod").ZodObject<{
                minSeverity: import("zod").ZodOptional<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    medium: "medium";
                }>>;
                component: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>;
            outcome: import("zod").ZodEnum<{
                route: "route";
                suppress: "suppress";
            }>;
            enabled: import("zod").ZodBoolean;
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodString;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
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
            connectedOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
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
    };
    readonly sandboxPresets: {
        readonly listConnections: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connections: import("zod").ZodArray<import("zod").ZodObject<{
                presetType: import("zod").ZodString;
                credentialSource: import("zod").ZodEnum<{
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
    readonly onboarding: {
        readonly getState: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
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
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly skipGithubAppInstallation: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly skipSampleIssue: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
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
            userId: import("zod").ZodString;
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
                userId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            userId: string;
            organizationId?: string | undefined;
        }, {
            params: {
                userId: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            removedUserId: import("zod").ZodString;
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
            statusComponentId: import("zod").ZodOptional<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly create: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            contentMdx: import("zod").ZodString;
            severity: import("zod").ZodDefault<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            statusComponentId: import("zod").ZodOptional<import("zod").ZodString>;
            statusStartedAt: import("zod").ZodOptional<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
            statusComponentId: import("zod").ZodOptional<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
            statusComponentId: import("zod").ZodOptional<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                    data_source: "data_source";
                    integration: "integration";
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
    readonly statusComponents: {
        readonly list: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            includeDeleted: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            statusComponents: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly get: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            statusComponent: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly register: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            statusComponent: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
        readonly deregister: import("@orpc/contract").ContractProcedure<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            reason: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            statusComponent: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
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
                    script: "script";
                }>;
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
                    script: "script";
                }>;
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
                    script: "script";
                }>;
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
                    script: "script";
                }>;
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
            observedServiceNames: import("zod").ZodArray<import("zod").ZodString>;
            observedAttributeKeys: import("zod").ZodArray<import("zod").ZodString>;
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
        readonly searchNatural: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            query: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            answer: import("zod").ZodString;
            steps: import("zod").ZodNumber;
            toolCalls: import("zod").ZodNumber;
            compacted: import("zod").ZodBoolean;
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
                modelProvider: import("zod").ZodOptional<import("zod").ZodString>;
                modelId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
    };
    readonly dataSources: {
        readonly listTypes: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            types: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
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
        readonly listConnections: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            dataSourceType: import("zod").ZodOptional<import("zod").ZodEnum<{
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
            connections: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceType: import("zod").ZodEnum<{
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
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
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connection: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                dataSourceType: import("zod").ZodEnum<{
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
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
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listInstances: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            dataSourceType: import("zod").ZodOptional<import("zod").ZodEnum<{
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
            instances: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                dataSourceType: import("zod").ZodEnum<{
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
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
                label: import("zod").ZodNullable<import("zod").ZodString>;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                connectionDisplayName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                streamName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getInstance: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            instanceId: import("zod").ZodString;
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            instance: import("zod").ZodObject<{
                id: import("zod").ZodString;
                dataSourceType: import("zod").ZodEnum<{
                    cloudflare: "cloudflare";
                    cloudflare_workers: "cloudflare_workers";
                    cloudwatch: "cloudwatch";
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
                label: import("zod").ZodNullable<import("zod").ZodString>;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                streamCount: import("zod").ZodNumber;
                createdAt: import("zod").ZodString;
                connectionDisplayName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                streamName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly createConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            dataSourceType: import("zod").ZodEnum<{
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
            metadata: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
            displayName: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            publicKey: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly disconnectConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
            connectionTeardownError: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listStreams: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            streams: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                displayName: import("zod").ZodString;
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
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly listInstanceStreams: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            instanceId: import("zod").ZodString;
            enabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            streams: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                displayName: import("zod").ZodString;
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
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly createStream: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            connectionId: import("zod").ZodString;
            displayName: import("zod").ZodString;
            config: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            publicKey: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly getStream: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            stream: import("zod").ZodObject<{
                id: import("zod").ZodString;
                connectionId: import("zod").ZodNullable<import("zod").ZodString>;
                displayName: import("zod").ZodString;
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
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly deleteStream: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
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
                channel: import("zod").ZodNullable<import("zod").ZodEnum<{
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
                notificationType: import("zod").ZodNullable<import("zod").ZodEnum<{
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
                priority: import("zod").ZodNumber;
                condition: import("zod").ZodObject<{
                    minSeverity: import("zod").ZodOptional<import("zod").ZodEnum<{
                        critical: "critical";
                        high: "high";
                        medium: "medium";
                    }>>;
                    component: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strict>;
                outcome: import("zod").ZodEnum<{
                    route: "route";
                    suppress: "suppress";
                }>;
                enabled: import("zod").ZodBoolean;
                destinations: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    channel: import("zod").ZodString;
                    destinationKey: import("zod").ZodString;
                    displayName: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
                createdAt: import("zod").ZodString;
                updatedAt: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            outcome: import("zod").ZodEnum<{
                route: "route";
                suppress: "suppress";
            }>;
            channel: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            notificationType: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            condition: import("zod").ZodObject<{
                minSeverity: import("zod").ZodOptional<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    medium: "medium";
                }>>;
                component: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>;
            destinations: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                channel: import("zod").ZodEnum<{
                    slack_channel: "slack_channel";
                    teams_channel: "teams_channel";
                }>;
                destinationKey: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodString;
            channel: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            notificationType: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            priority: import("zod").ZodNumber;
            condition: import("zod").ZodObject<{
                minSeverity: import("zod").ZodOptional<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    medium: "medium";
                }>>;
                component: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>;
            outcome: import("zod").ZodEnum<{
                route: "route";
                suppress: "suppress";
            }>;
            enabled: import("zod").ZodBoolean;
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodString;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            createdAt: import("zod").ZodString;
            updatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, "api">;
        readonly setEnabled: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            ruleId: import("zod").ZodString;
            enabled: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            id: import("zod").ZodString;
            projectId: import("zod").ZodString;
            channel: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            notificationType: import("zod").ZodNullable<import("zod").ZodEnum<{
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
            priority: import("zod").ZodNumber;
            condition: import("zod").ZodObject<{
                minSeverity: import("zod").ZodOptional<import("zod").ZodEnum<{
                    critical: "critical";
                    high: "high";
                    medium: "medium";
                }>>;
                component: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>;
            outcome: import("zod").ZodEnum<{
                route: "route";
                suppress: "suppress";
            }>;
            enabled: import("zod").ZodBoolean;
            destinations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                channel: import("zod").ZodString;
                destinationKey: import("zod").ZodString;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
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
            connectedOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
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
    };
    readonly sandboxPresets: {
        readonly listConnections: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            connections: import("zod").ZodArray<import("zod").ZodObject<{
                presetType: import("zod").ZodString;
                credentialSource: import("zod").ZodEnum<{
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
        readonly getState: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
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
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly skipGithubAppInstallation: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            skipped: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly skipSampleIssue: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
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
            userId: import("zod").ZodString;
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
                userId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                organizationId: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, import("zod").ZodTransform<{
            userId: string;
            organizationId?: string | undefined;
        }, {
            params: {
                userId: string;
            };
            query: {
                organizationId?: string | undefined;
            };
        }>>, import("zod").ZodObject<{
            removedUserId: import("zod").ZodString;
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
                    cli: "cli";
                    github: "github";
                    linear: "linear";
                    mcp: "mcp";
                    slack: "slack";
                    teams: "teams";
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
            statusComponentId: import("zod").ZodOptional<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly create: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodOptional<import("zod").ZodString>;
            contentMdx: import("zod").ZodString;
            severity: import("zod").ZodDefault<import("zod").ZodEnum<{
                critical: "critical";
                high: "high";
                low: "low";
                medium: "medium";
            }>>;
            statusComponentId: import("zod").ZodOptional<import("zod").ZodString>;
            statusStartedAt: import("zod").ZodOptional<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
            statusComponentId: import("zod").ZodOptional<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
            statusComponentId: import("zod").ZodOptional<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                statusComponentId: import("zod").ZodNullable<import("zod").ZodString>;
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
                    data_source: "data_source";
                    integration: "integration";
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
    readonly statusComponents: {
        readonly list: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            cursor: import("zod").ZodOptional<import("zod").ZodString>;
            includeDeleted: import("zod").ZodDefault<import("zod").ZodUnion<readonly [import("zod").ZodBoolean, import("zod").ZodCodec<import("zod").ZodString, import("zod").ZodBoolean>]>>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            statusComponents: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            nextCursor: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly get: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            statusComponent: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly register: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            projectId: import("zod").ZodOptional<import("zod").ZodString>;
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            statusComponent: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
        readonly deregister: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
            componentId: import("zod").ZodString;
            reason: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, import("zod").ZodObject<{
            statusComponent: import("zod").ZodObject<{
                id: import("zod").ZodString;
                projectId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                currentStatus: import("zod").ZodEnum<{
                    degraded: "degraded";
                    operational: "operational";
                    outage: "outage";
                }>;
                firstSeenAt: import("zod").ZodString;
                lastSeenAt: import("zod").ZodString;
                deletedAt: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
        }, import("zod/v4/core").$strip>, "api">;
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
