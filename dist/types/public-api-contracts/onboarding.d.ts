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
export declare const OnboardingSnapshotSchema: z.ZodObject<{
    gate: z.ZodEnum<{
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
    readonly getState: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        onboarding: z.ZodObject<{
            gate: z.ZodEnum<{
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
export type FinishOnboardingInput = z.infer<typeof FinishOnboardingInputSchema>;
export type FinishOnboardingOutput = z.infer<typeof FinishOnboardingOutputSchema>;
