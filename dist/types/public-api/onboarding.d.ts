import { z } from "zod";
export declare const OnboardingStepIdSchema: z.ZodEnum<{
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
}>;
export declare const OnboardingGateSchema: z.ZodEnum<{
    "access-denied": "access-denied";
    blocked: "blocked";
    "needs-onboarding": "needs-onboarding";
    ready: "ready";
}>;
export declare const OnboardingCompletionStatusSchema: z.ZodEnum<{
    complete: "complete";
    incomplete: "incomplete";
    skipped: "skipped";
}>;
export declare const OnboardingInvitationSchema: z.ZodObject<{
    invitationId: z.ZodString;
    organizationId: z.ZodString;
    organizationName: z.ZodString;
    organizationSlug: z.ZodString;
    organizationImageUrl: z.ZodNullable<z.ZodString>;
    inviterName: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * One task's server-evaluated status on the onboarding snapshot (ENG-7745):
 * the row every current surface renders card state from. Keyed by the task
 * list's own ids and covering setup tasks; copy comes from the registry.
 */
export declare const OnboardingTaskStatusSchema: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodEnum<{
        complete: "complete";
        incomplete: "incomplete";
        skipped: "skipped";
        unavailable: "unavailable";
    }>;
    list: z.ZodEnum<{
        "getting-started": "getting-started";
        onboarding: "onboarding";
    }>;
    skippable: z.ZodBoolean;
}, z.core.$strip>;
export type OnboardingTaskStatus = z.infer<typeof OnboardingTaskStatusSchema>;
export declare const OnboardingSnapshotSchema: z.ZodObject<{
    gate: z.ZodEnum<{
        "access-denied": "access-denied";
        blocked: "blocked";
        "needs-onboarding": "needs-onboarding";
        ready: "ready";
    }>;
    canonicalStep: z.ZodNullable<z.ZodEnum<{
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
    organizationId: z.ZodNullable<z.ZodString>;
    projectId: z.ZodNullable<z.ZodString>;
    completionByStep: z.ZodRecord<z.ZodEnum<{
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
    }>, z.ZodEnum<{
        complete: "complete";
        incomplete: "incomplete";
        skipped: "skipped";
    }>>;
    githubSkipped: z.ZodBoolean;
    githubAppSkipped: z.ZodBoolean;
    slackSkipped: z.ZodBoolean;
    sampleIssueId: z.ZodNullable<z.ZodString>;
    tasks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodEnum<{
            complete: "complete";
            incomplete: "incomplete";
            skipped: "skipped";
            unavailable: "unavailable";
        }>;
        list: z.ZodEnum<{
            "getting-started": "getting-started";
            onboarding: "onboarding";
        }>;
        skippable: z.ZodBoolean;
    }, z.core.$strip>>;
    actorRole: z.ZodNullable<z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>>;
    requiredStep: z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>, z.ZodLiteral<"select-organization">]>>;
    isCompleted: z.ZodBoolean;
    onboardingRecommendationsThreadId: z.ZodNullable<z.ZodString>;
    hasOrganizations: z.ZodBoolean;
    hasPaidBillingSubscription: z.ZodBoolean;
    hasServiceableBillingSubscription: z.ZodBoolean;
    billingStepEnabled: z.ZodBoolean;
    pendingInvitations: z.ZodArray<z.ZodObject<{
        invitationId: z.ZodString;
        organizationId: z.ZodString;
        organizationName: z.ZodString;
        organizationSlug: z.ZodString;
        organizationImageUrl: z.ZodNullable<z.ZodString>;
        inviterName: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const GetOnboardingStateInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetOnboardingStateOutputSchema: z.ZodObject<{
    onboarding: z.ZodObject<{
        gate: z.ZodEnum<{
            "access-denied": "access-denied";
            blocked: "blocked";
            "needs-onboarding": "needs-onboarding";
            ready: "ready";
        }>;
        canonicalStep: z.ZodNullable<z.ZodEnum<{
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
        organizationId: z.ZodNullable<z.ZodString>;
        projectId: z.ZodNullable<z.ZodString>;
        completionByStep: z.ZodRecord<z.ZodEnum<{
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
        }>, z.ZodEnum<{
            complete: "complete";
            incomplete: "incomplete";
            skipped: "skipped";
        }>>;
        githubSkipped: z.ZodBoolean;
        githubAppSkipped: z.ZodBoolean;
        slackSkipped: z.ZodBoolean;
        sampleIssueId: z.ZodNullable<z.ZodString>;
        tasks: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            status: z.ZodEnum<{
                complete: "complete";
                incomplete: "incomplete";
                skipped: "skipped";
                unavailable: "unavailable";
            }>;
            list: z.ZodEnum<{
                "getting-started": "getting-started";
                onboarding: "onboarding";
            }>;
            skippable: z.ZodBoolean;
        }, z.core.$strip>>;
        actorRole: z.ZodNullable<z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>>;
        requiredStep: z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
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
        }>, z.ZodLiteral<"select-organization">]>>;
        isCompleted: z.ZodBoolean;
        onboardingRecommendationsThreadId: z.ZodNullable<z.ZodString>;
        hasOrganizations: z.ZodBoolean;
        hasPaidBillingSubscription: z.ZodBoolean;
        hasServiceableBillingSubscription: z.ZodBoolean;
        billingStepEnabled: z.ZodBoolean;
        pendingInvitations: z.ZodArray<z.ZodObject<{
            invitationId: z.ZodString;
            organizationId: z.ZodString;
            organizationName: z.ZodString;
            organizationSlug: z.ZodString;
            organizationImageUrl: z.ZodNullable<z.ZodString>;
            inviterName: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const getOnboardingState: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    onboarding: z.ZodObject<{
        gate: z.ZodEnum<{
            "access-denied": "access-denied";
            blocked: "blocked";
            "needs-onboarding": "needs-onboarding";
            ready: "ready";
        }>;
        canonicalStep: z.ZodNullable<z.ZodEnum<{
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
        organizationId: z.ZodNullable<z.ZodString>;
        projectId: z.ZodNullable<z.ZodString>;
        completionByStep: z.ZodRecord<z.ZodEnum<{
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
        }>, z.ZodEnum<{
            complete: "complete";
            incomplete: "incomplete";
            skipped: "skipped";
        }>>;
        githubSkipped: z.ZodBoolean;
        githubAppSkipped: z.ZodBoolean;
        slackSkipped: z.ZodBoolean;
        sampleIssueId: z.ZodNullable<z.ZodString>;
        tasks: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            status: z.ZodEnum<{
                complete: "complete";
                incomplete: "incomplete";
                skipped: "skipped";
                unavailable: "unavailable";
            }>;
            list: z.ZodEnum<{
                "getting-started": "getting-started";
                onboarding: "onboarding";
            }>;
            skippable: z.ZodBoolean;
        }, z.core.$strip>>;
        actorRole: z.ZodNullable<z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>>;
        requiredStep: z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
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
        }>, z.ZodLiteral<"select-organization">]>>;
        isCompleted: z.ZodBoolean;
        onboardingRecommendationsThreadId: z.ZodNullable<z.ZodString>;
        hasOrganizations: z.ZodBoolean;
        hasPaidBillingSubscription: z.ZodBoolean;
        hasServiceableBillingSubscription: z.ZodBoolean;
        billingStepEnabled: z.ZodBoolean;
        pendingInvitations: z.ZodArray<z.ZodObject<{
            invitationId: z.ZodString;
            organizationId: z.ZodString;
            organizationName: z.ZodString;
            organizationSlug: z.ZodString;
            organizationImageUrl: z.ZodNullable<z.ZodString>;
            inviterName: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const ContinueOnboardingWithFreeInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ContinueOnboardingWithFreeOutputSchema: z.ZodObject<{
    completed: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const continueOnboardingWithFree: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    completed: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export type ContinueOnboardingWithFreeInput = z.infer<typeof ContinueOnboardingWithFreeInputSchema>;
export type ContinueOnboardingWithFreeOutput = z.infer<typeof ContinueOnboardingWithFreeOutputSchema>;
export declare const SkipOnboardingIntegrationInputSchema: z.ZodObject<{
    integration: z.ZodEnum<{
        github: "github";
        slack: "slack";
    }>;
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const SkipOnboardingIntegrationOutputSchema: z.ZodObject<{
    skipped: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const skipOnboardingIntegration: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    integration: z.ZodEnum<{
        github: "github";
        slack: "slack";
    }>;
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    skipped: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const SkipOnboardingGithubAppInstallationInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const SkipOnboardingGithubAppInstallationOutputSchema: z.ZodObject<{
    skipped: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const skipOnboardingGithubAppInstallation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    skipped: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const SkipOnboardingSampleIssueInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const SkipOnboardingSampleIssueOutputSchema: z.ZodObject<{
    skipped: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const skipOnboardingSampleIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    skipped: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const CompleteOnboardingSampleIssueInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CompleteOnboardingSampleIssueOutputSchema: z.ZodObject<{
    completed: z.ZodLiteral<true>;
}, z.core.$strip>;
/**
 * Completes the sample-issue onboarding step (ENG-7347): the step is a static
 * exhibit viewed in the dashboard (or acknowledged from the CLI), and this
 * stamp is its only completion path. Mirrors the dashboard tRPC
 * `onboarding.completeSampleIssue` mutation (self-use §4.c parity).
 */
export declare const completeOnboardingSampleIssue: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    completed: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const FinishOnboardingInputSchema: z.ZodObject<{
    projectId: z.ZodString;
}, z.core.$strip>;
export declare const FinishOnboardingOutputSchema: z.ZodObject<{
    completed: z.ZodBoolean;
}, z.core.$strip>;
export declare const finishOnboarding: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    completed: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const onboardingContract: {
    readonly continueWithFree: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        completed: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getState: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        onboarding: z.ZodObject<{
            gate: z.ZodEnum<{
                "access-denied": "access-denied";
                blocked: "blocked";
                "needs-onboarding": "needs-onboarding";
                ready: "ready";
            }>;
            canonicalStep: z.ZodNullable<z.ZodEnum<{
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
            organizationId: z.ZodNullable<z.ZodString>;
            projectId: z.ZodNullable<z.ZodString>;
            completionByStep: z.ZodRecord<z.ZodEnum<{
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
            }>, z.ZodEnum<{
                complete: "complete";
                incomplete: "incomplete";
                skipped: "skipped";
            }>>;
            githubSkipped: z.ZodBoolean;
            githubAppSkipped: z.ZodBoolean;
            slackSkipped: z.ZodBoolean;
            sampleIssueId: z.ZodNullable<z.ZodString>;
            tasks: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                status: z.ZodEnum<{
                    complete: "complete";
                    incomplete: "incomplete";
                    skipped: "skipped";
                    unavailable: "unavailable";
                }>;
                list: z.ZodEnum<{
                    "getting-started": "getting-started";
                    onboarding: "onboarding";
                }>;
                skippable: z.ZodBoolean;
            }, z.core.$strip>>;
            actorRole: z.ZodNullable<z.ZodEnum<{
                admin: "admin";
                member: "member";
            }>>;
            requiredStep: z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
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
            }>, z.ZodLiteral<"select-organization">]>>;
            isCompleted: z.ZodBoolean;
            onboardingRecommendationsThreadId: z.ZodNullable<z.ZodString>;
            hasOrganizations: z.ZodBoolean;
            hasPaidBillingSubscription: z.ZodBoolean;
            hasServiceableBillingSubscription: z.ZodBoolean;
            billingStepEnabled: z.ZodBoolean;
            pendingInvitations: z.ZodArray<z.ZodObject<{
                invitationId: z.ZodString;
                organizationId: z.ZodString;
                organizationName: z.ZodString;
                organizationSlug: z.ZodString;
                organizationImageUrl: z.ZodNullable<z.ZodString>;
                inviterName: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly skipIntegration: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        integration: z.ZodEnum<{
            github: "github";
            slack: "slack";
        }>;
        organizationId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        skipped: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly skipGithubAppInstallation: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        skipped: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly skipSampleIssue: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        skipped: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly completeSampleIssue: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        completed: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly finish: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        completed: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
export type OnboardingStepId = z.infer<typeof OnboardingStepIdSchema>;
export type OnboardingGate = z.infer<typeof OnboardingGateSchema>;
export type OnboardingCompletionStatus = z.infer<typeof OnboardingCompletionStatusSchema>;
export type OnboardingInvitation = z.infer<typeof OnboardingInvitationSchema>;
export type OnboardingSnapshot = z.infer<typeof OnboardingSnapshotSchema>;
export type GetOnboardingStateInput = z.infer<typeof GetOnboardingStateInputSchema>;
export type GetOnboardingStateOutput = z.infer<typeof GetOnboardingStateOutputSchema>;
export type SkipOnboardingIntegrationInput = z.infer<typeof SkipOnboardingIntegrationInputSchema>;
export type SkipOnboardingIntegrationOutput = z.infer<typeof SkipOnboardingIntegrationOutputSchema>;
export type SkipOnboardingGithubAppInstallationInput = z.infer<typeof SkipOnboardingGithubAppInstallationInputSchema>;
export type SkipOnboardingGithubAppInstallationOutput = z.infer<typeof SkipOnboardingGithubAppInstallationOutputSchema>;
export type SkipOnboardingSampleIssueInput = z.infer<typeof SkipOnboardingSampleIssueInputSchema>;
export type SkipOnboardingSampleIssueOutput = z.infer<typeof SkipOnboardingSampleIssueOutputSchema>;
export type CompleteOnboardingSampleIssueInput = z.infer<typeof CompleteOnboardingSampleIssueInputSchema>;
export type CompleteOnboardingSampleIssueOutput = z.infer<typeof CompleteOnboardingSampleIssueOutputSchema>;
export type FinishOnboardingInput = z.infer<typeof FinishOnboardingInputSchema>;
export type FinishOnboardingOutput = z.infer<typeof FinishOnboardingOutputSchema>;
export declare const EnsureOnboardingDefaultProjectInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    region: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
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
}, z.core.$strip>;
export declare const EnsureOnboardingDefaultProjectOutputSchema: z.ZodObject<{
    project: z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
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
    }, z.core.$strip>;
    created: z.ZodBoolean;
}, z.core.$strip>;
/**
 * The onboarding project gate (ENG-7857). Creating a project and checking
 * whether one exists are one server-side decision under a per-organization
 * lock, so two onboarding surfaces running side by side (the dashboard and
 * the CLI) cannot both create the organization's first project.
 */
export declare const ensureOnboardingDefaultProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    region: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
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
}, z.core.$strip>, z.ZodObject<{
    project: z.ZodObject<{
        id: z.ZodString;
        organizationId: z.ZodString;
        name: z.ZodString;
        region: z.ZodEnum<{
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
    }, z.core.$strip>;
    created: z.ZodBoolean;
}, z.core.$strip>, "api">;
export type EnsureOnboardingDefaultProjectInput = z.infer<typeof EnsureOnboardingDefaultProjectInputSchema>;
export type EnsureOnboardingDefaultProjectOutput = z.infer<typeof EnsureOnboardingDefaultProjectOutputSchema>;
