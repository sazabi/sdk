import { z } from "zod";
export declare const BillingUsageDimensionSchema: z.ZodEnum<{
    automation_runs_completed: "automation_runs_completed";
    input_tokens: "input_tokens";
    issues_created: "issues_created";
    logs_accepted_bytes: "logs_accepted_bytes";
    logs_ingested_bytes: "logs_ingested_bytes";
    output_tokens: "output_tokens";
    pull_request_reviews_completed: "pull_request_reviews_completed";
    pull_requests_created: "pull_requests_created";
}>;
export type BillingUsageDimension = z.infer<typeof BillingUsageDimensionSchema>;
export declare const BillingTransactionTypeSchema: z.ZodEnum<{
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
export type BillingTransactionType = z.infer<typeof BillingTransactionTypeSchema>;
export declare const BillingTransactionDirectionSchema: z.ZodEnum<{
    credit: "credit";
    debit: "debit";
}>;
export type BillingTransactionDirection = z.infer<typeof BillingTransactionDirectionSchema>;
export declare const BillingTransactionReasonSchema: z.ZodEnum<{
    adjustment: "adjustment";
    auto_purchase: "auto_purchase";
    cycle_renewal: "cycle_renewal";
    deficit_settlement: "deficit_settlement";
    migration_opening_balance: "migration_opening_balance";
    one_off_purchase: "one_off_purchase";
    plan_upgrade: "plan_upgrade";
    usage: "usage";
}>;
export type BillingTransactionReason = z.infer<typeof BillingTransactionReasonSchema>;
export declare const GetBillingSummaryInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetBillingSummaryInput = z.infer<typeof GetBillingSummaryInputSchema>;
export declare const BillingCollectionSummarySchema: z.ZodObject<{
    status: z.ZodEnum<{
        current: "current";
        delinquent: "delinquent";
        payment_retrying: "payment_retrying";
    }>;
    outstandingCredits: z.ZodNullable<z.ZodString>;
    outstandingAmount: z.ZodNullable<z.ZodString>;
    currency: z.ZodNullable<z.ZodString>;
    scheduledAttemptsMade: z.ZodNumber;
    nextRetryAt: z.ZodNullable<z.ZodString>;
    billingInvoiceId: z.ZodNullable<z.ZodString>;
    hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type BillingCollectionSummary = z.infer<typeof BillingCollectionSummarySchema>;
export declare const GetBillingSummaryOutputSchema: z.ZodObject<{
    billingModel: z.ZodEnum<{
        "credit-balance-v1": "credit-balance-v1";
    }>;
    billable: z.ZodBoolean;
    nonBillableReason: z.ZodNullable<z.ZodString>;
    status: z.ZodString;
    planName: z.ZodNullable<z.ZodString>;
    planSlug: z.ZodNullable<z.ZodString>;
    currency: z.ZodNullable<z.ZodString>;
    currentBalance: z.ZodNullable<z.ZodString>;
    targetCreditBalance: z.ZodNullable<z.ZodString>;
    currentCycle: z.ZodNullable<z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
        billableStartsAt: z.ZodString;
    }, z.core.$strip>>;
    currentPeriodEstimate: z.ZodNullable<z.ZodObject<{
        subscriptionChargeAmount: z.ZodString;
        creditDeficitAmount: z.ZodString;
        creditDeficitChargeAmount: z.ZodString;
        totalAmount: z.ZodString;
        currency: z.ZodString;
    }, z.core.$strip>>;
    pendingDowngrade: z.ZodNullable<z.ZodObject<{
        billingSubscriptionChangeId: z.ZodString;
        effectiveAt: z.ZodString;
        planSlug: z.ZodNullable<z.ZodString>;
        planName: z.ZodNullable<z.ZodString>;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    subscription: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodString;
        billingPlanId: z.ZodString;
        cycleType: z.ZodString;
        cancelAt: z.ZodNullable<z.ZodString>;
        canceledAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    collection: z.ZodObject<{
        status: z.ZodEnum<{
            current: "current";
            delinquent: "delinquent";
            payment_retrying: "payment_retrying";
        }>;
        outstandingCredits: z.ZodNullable<z.ZodString>;
        outstandingAmount: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        scheduledAttemptsMade: z.ZodNumber;
        nextRetryAt: z.ZodNullable<z.ZodString>;
        billingInvoiceId: z.ZodNullable<z.ZodString>;
        hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    currentPlan: z.ZodNullable<z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        subscriptionStatus: z.ZodString;
        cycleStartsAt: z.ZodNullable<z.ZodString>;
        cycleEndsAt: z.ZodNullable<z.ZodString>;
        renewalAt: z.ZodNullable<z.ZodString>;
        pendingSwitch: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        pendingCancellation: z.ZodNullable<z.ZodObject<{
            effectiveAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetBillingSummaryOutput = z.infer<typeof GetBillingSummaryOutputSchema>;
export declare const GetBillingUsageInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    cycle: z.ZodDefault<z.ZodEnum<{
        current: "current";
        previous: "previous";
    }>>;
}, z.core.$strip>;
export type GetBillingUsageInput = z.infer<typeof GetBillingUsageInputSchema>;
export declare const BillingUsageRowSchema: z.ZodObject<{
    dimension: z.ZodEnum<{
        automation_runs_completed: "automation_runs_completed";
        input_tokens: "input_tokens";
        issues_created: "issues_created";
        logs_accepted_bytes: "logs_accepted_bytes";
        logs_ingested_bytes: "logs_ingested_bytes";
        output_tokens: "output_tokens";
        pull_request_reviews_completed: "pull_request_reviews_completed";
        pull_requests_created: "pull_requests_created";
    }>;
    totalQuantity: z.ZodString;
    ratedQuantity: z.ZodString;
    creditsConsumed: z.ZodString;
    sourceBreakdown: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type BillingUsageRow = z.infer<typeof BillingUsageRowSchema>;
export declare const GetBillingUsageOutputSchema: z.ZodObject<{
    cycle: z.ZodNullable<z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
        billableStartsAt: z.ZodString;
    }, z.core.$strip>>;
    usage: z.ZodArray<z.ZodObject<{
        dimension: z.ZodEnum<{
            automation_runs_completed: "automation_runs_completed";
            input_tokens: "input_tokens";
            issues_created: "issues_created";
            logs_accepted_bytes: "logs_accepted_bytes";
            logs_ingested_bytes: "logs_ingested_bytes";
            output_tokens: "output_tokens";
            pull_request_reviews_completed: "pull_request_reviews_completed";
            pull_requests_created: "pull_requests_created";
        }>;
        totalQuantity: z.ZodString;
        ratedQuantity: z.ZodString;
        creditsConsumed: z.ZodString;
        sourceBreakdown: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetBillingUsageOutput = z.infer<typeof GetBillingUsageOutputSchema>;
export declare const ListBillingTransactionsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListBillingTransactionsInput = z.infer<typeof ListBillingTransactionsInputSchema>;
export declare const BillingTransactionSchema: z.ZodObject<{
    id: z.ZodString;
    transactionType: z.ZodEnum<{
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
    creditDelta: z.ZodString;
    direction: z.ZodEnum<{
        credit: "credit";
        debit: "debit";
    }>;
    reason: z.ZodEnum<{
        adjustment: "adjustment";
        auto_purchase: "auto_purchase";
        cycle_renewal: "cycle_renewal";
        deficit_settlement: "deficit_settlement";
        migration_opening_balance: "migration_opening_balance";
        one_off_purchase: "one_off_purchase";
        plan_upgrade: "plan_upgrade";
        usage: "usage";
    }>;
    amount: z.ZodString;
    balanceAfter: z.ZodString;
    occurredAt: z.ZodString;
    billingInvoiceId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type BillingTransaction = z.infer<typeof BillingTransactionSchema>;
export declare const ListBillingTransactionsOutputSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        transactionType: z.ZodEnum<{
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
        creditDelta: z.ZodString;
        direction: z.ZodEnum<{
            credit: "credit";
            debit: "debit";
        }>;
        reason: z.ZodEnum<{
            adjustment: "adjustment";
            auto_purchase: "auto_purchase";
            cycle_renewal: "cycle_renewal";
            deficit_settlement: "deficit_settlement";
            migration_opening_balance: "migration_opening_balance";
            one_off_purchase: "one_off_purchase";
            plan_upgrade: "plan_upgrade";
            usage: "usage";
        }>;
        amount: z.ZodString;
        balanceAfter: z.ZodString;
        occurredAt: z.ZodString;
        billingInvoiceId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ListBillingTransactionsOutput = z.infer<typeof ListBillingTransactionsOutputSchema>;
export declare const getBillingSummary: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    billingModel: z.ZodEnum<{
        "credit-balance-v1": "credit-balance-v1";
    }>;
    billable: z.ZodBoolean;
    nonBillableReason: z.ZodNullable<z.ZodString>;
    status: z.ZodString;
    planName: z.ZodNullable<z.ZodString>;
    planSlug: z.ZodNullable<z.ZodString>;
    currency: z.ZodNullable<z.ZodString>;
    currentBalance: z.ZodNullable<z.ZodString>;
    targetCreditBalance: z.ZodNullable<z.ZodString>;
    currentCycle: z.ZodNullable<z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
        billableStartsAt: z.ZodString;
    }, z.core.$strip>>;
    currentPeriodEstimate: z.ZodNullable<z.ZodObject<{
        subscriptionChargeAmount: z.ZodString;
        creditDeficitAmount: z.ZodString;
        creditDeficitChargeAmount: z.ZodString;
        totalAmount: z.ZodString;
        currency: z.ZodString;
    }, z.core.$strip>>;
    pendingDowngrade: z.ZodNullable<z.ZodObject<{
        billingSubscriptionChangeId: z.ZodString;
        effectiveAt: z.ZodString;
        planSlug: z.ZodNullable<z.ZodString>;
        planName: z.ZodNullable<z.ZodString>;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    subscription: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodString;
        billingPlanId: z.ZodString;
        cycleType: z.ZodString;
        cancelAt: z.ZodNullable<z.ZodString>;
        canceledAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    collection: z.ZodObject<{
        status: z.ZodEnum<{
            current: "current";
            delinquent: "delinquent";
            payment_retrying: "payment_retrying";
        }>;
        outstandingCredits: z.ZodNullable<z.ZodString>;
        outstandingAmount: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        scheduledAttemptsMade: z.ZodNumber;
        nextRetryAt: z.ZodNullable<z.ZodString>;
        billingInvoiceId: z.ZodNullable<z.ZodString>;
        hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    currentPlan: z.ZodNullable<z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        subscriptionStatus: z.ZodString;
        cycleStartsAt: z.ZodNullable<z.ZodString>;
        cycleEndsAt: z.ZodNullable<z.ZodString>;
        renewalAt: z.ZodNullable<z.ZodString>;
        pendingSwitch: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        pendingCancellation: z.ZodNullable<z.ZodObject<{
            effectiveAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const getBillingUsage: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    cycle: z.ZodDefault<z.ZodEnum<{
        current: "current";
        previous: "previous";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    cycle: z.ZodNullable<z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
        billableStartsAt: z.ZodString;
    }, z.core.$strip>>;
    usage: z.ZodArray<z.ZodObject<{
        dimension: z.ZodEnum<{
            automation_runs_completed: "automation_runs_completed";
            input_tokens: "input_tokens";
            issues_created: "issues_created";
            logs_accepted_bytes: "logs_accepted_bytes";
            logs_ingested_bytes: "logs_ingested_bytes";
            output_tokens: "output_tokens";
            pull_request_reviews_completed: "pull_request_reviews_completed";
            pull_requests_created: "pull_requests_created";
        }>;
        totalQuantity: z.ZodString;
        ratedQuantity: z.ZodString;
        creditsConsumed: z.ZodString;
        sourceBreakdown: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const listBillingTransactions: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        transactionType: z.ZodEnum<{
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
        creditDelta: z.ZodString;
        direction: z.ZodEnum<{
            credit: "credit";
            debit: "debit";
        }>;
        reason: z.ZodEnum<{
            adjustment: "adjustment";
            auto_purchase: "auto_purchase";
            cycle_renewal: "cycle_renewal";
            deficit_settlement: "deficit_settlement";
            migration_opening_balance: "migration_opening_balance";
            one_off_purchase: "one_off_purchase";
            plan_upgrade: "plan_upgrade";
            usage: "usage";
        }>;
        amount: z.ZodString;
        balanceAfter: z.ZodString;
        occurredAt: z.ZodString;
        billingInvoiceId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const GetAutoTopUpInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetAutoTopUpInput = z.infer<typeof GetAutoTopUpInputSchema>;
export declare const AutoTopUpSettingsSchema: z.ZodObject<{
    supported: z.ZodBoolean;
    enabled: z.ZodBoolean;
    triggerCreditBalance: z.ZodString;
    topUpAmount: z.ZodString;
    cycleSpendingLimit: z.ZodString;
    currency: z.ZodString;
    creditsToGrant: z.ZodNullable<z.ZodString>;
    status: z.ZodString;
}, z.core.$strip>;
export type AutoTopUpSettings = z.infer<typeof AutoTopUpSettingsSchema>;
export declare const UpdateAutoTopUpInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    enabled: z.ZodBoolean;
    triggerCreditBalance: z.ZodString;
    topUpAmount: z.ZodString;
    cycleSpendingLimit: z.ZodString;
}, z.core.$strip>;
export type UpdateAutoTopUpInput = z.infer<typeof UpdateAutoTopUpInputSchema>;
export declare const PurchaseCreditsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    amount: z.ZodString;
    idempotencyKey: z.ZodString;
}, z.core.$strip>;
export type PurchaseCreditsInput = z.infer<typeof PurchaseCreditsInputSchema>;
export declare const PurchaseCreditsOutputSchema: z.ZodObject<{
    status: z.ZodEnum<{
        paid: "paid";
        pending_payment: "pending_payment";
    }>;
    billingInvoiceId: z.ZodString;
    topUpAmount: z.ZodString;
    creditsToGrant: z.ZodString;
    currency: z.ZodString;
}, z.core.$strip>;
export type PurchaseCreditsOutput = z.infer<typeof PurchaseCreditsOutputSchema>;
export declare const ListPlansInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListPlansInput = z.infer<typeof ListPlansInputSchema>;
export declare const BillingPlanSchema: z.ZodObject<{
    slug: z.ZodString;
    billingModel: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    bestFor: z.ZodNullable<z.ZodString>;
    price: z.ZodString;
    currency: z.ZodString;
    targetCreditBalance: z.ZodNullable<z.ZodString>;
    logsIncludedBytes: z.ZodString;
    inputTokensIncluded: z.ZodString;
    outputTokensIncluded: z.ZodString;
}, z.core.$strip>;
export type BillingPlan = z.infer<typeof BillingPlanSchema>;
export declare const ListPlansOutputSchema: z.ZodObject<{
    billingModel: z.ZodString;
    currentPlanSlug: z.ZodNullable<z.ZodString>;
    hasActiveStripeBilling: z.ZodBoolean;
    plans: z.ZodArray<z.ZodObject<{
        slug: z.ZodString;
        billingModel: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        bestFor: z.ZodNullable<z.ZodString>;
        price: z.ZodString;
        currency: z.ZodString;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        logsIncludedBytes: z.ZodString;
        inputTokensIncluded: z.ZodString;
        outputTokensIncluded: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListPlansOutput = z.infer<typeof ListPlansOutputSchema>;
export declare const PreviewPlanChangeInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    planSlug: z.ZodString;
}, z.core.$strip>;
export type PreviewPlanChangeInput = z.infer<typeof PreviewPlanChangeInputSchema>;
export declare const PreviewPlanChangeOutputSchema: z.ZodObject<{
    calculatedAt: z.ZodString;
    type: z.ZodEnum<{
        downgrade: "downgrade";
        upgrade: "upgrade";
    }>;
    effectiveAt: z.ZodString;
    currency: z.ZodString;
    currentPlanSlug: z.ZodString;
    targetPlanSlug: z.ZodString;
    currentPlanName: z.ZodString;
    targetPlanName: z.ZodString;
    currentPlanPrice: z.ZodString;
    targetPlanPrice: z.ZodString;
    currentTargetCreditBalance: z.ZodString;
    targetCreditBalance: z.ZodString;
    creditDeficitAmount: z.ZodString;
    creditDeficitChargeAmount: z.ZodString;
    additionalCreditPrice: z.ZodString;
    immediateChargeAmount: z.ZodString;
    subscriptionChargeAmount: z.ZodString;
    proratedCreditGrantAmount: z.ZodString;
    remainingCycleFraction: z.ZodString;
    nextCycleChargeAmount: z.ZodString;
}, z.core.$strip>;
export type PreviewPlanChangeOutput = z.infer<typeof PreviewPlanChangeOutputSchema>;
export declare const ChangePlanInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    planSlug: z.ZodString;
}, z.core.$strip>;
export type ChangePlanInput = z.infer<typeof ChangePlanInputSchema>;
export declare const ChangePlanOutputSchema: z.ZodObject<{
    billingSubscriptionChangeId: z.ZodString;
    billingSubscriptionId: z.ZodString;
    status: z.ZodString;
    type: z.ZodString;
    effectiveAt: z.ZodString;
    invoiceId: z.ZodNullable<z.ZodString>;
    creditDeficitAmount: z.ZodOptional<z.ZodString>;
    creditDeficitChargeAmount: z.ZodOptional<z.ZodString>;
    creditTopUpAmount: z.ZodOptional<z.ZodString>;
    immediateChargeAmount: z.ZodOptional<z.ZodString>;
    subscriptionChargeAmount: z.ZodOptional<z.ZodString>;
    proratedCreditGrantAmount: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ChangePlanOutput = z.infer<typeof ChangePlanOutputSchema>;
export declare const CreateCheckoutSessionInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    planSlug: z.ZodString;
}, z.core.$strip>;
export type CreateCheckoutSessionInput = z.infer<typeof CreateCheckoutSessionInputSchema>;
export declare const CreateCheckoutSessionOutputSchema: z.ZodObject<{
    sessionId: z.ZodString;
    checkoutUrl: z.ZodString;
}, z.core.$strip>;
export type CreateCheckoutSessionOutput = z.infer<typeof CreateCheckoutSessionOutputSchema>;
export declare const GetCheckoutSessionStatusInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodString;
}, z.core.$strip>;
export type GetCheckoutSessionStatusInput = z.infer<typeof GetCheckoutSessionStatusInputSchema>;
export declare const CheckoutSessionStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        active: "active";
        expired: "expired";
        pending: "pending";
    }>;
}, z.core.$strip>;
export type CheckoutSessionStatus = z.infer<typeof CheckoutSessionStatusSchema>;
export declare const CreatePortalSessionInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreatePortalSessionInput = z.infer<typeof CreatePortalSessionInputSchema>;
export declare const CreatePortalSessionOutputSchema: z.ZodObject<{
    portalUrl: z.ZodString;
}, z.core.$strip>;
export type CreatePortalSessionOutput = z.infer<typeof CreatePortalSessionOutputSchema>;
export declare const GetPaymentMethodInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetPaymentMethodInput = z.infer<typeof GetPaymentMethodInputSchema>;
export declare const PaymentMethodSummarySchema: z.ZodObject<{
    hasPaymentMethod: z.ZodBoolean;
    brand: z.ZodNullable<z.ZodString>;
    last4: z.ZodNullable<z.ZodString>;
    type: z.ZodNullable<z.ZodString>;
    expiryMonth: z.ZodNullable<z.ZodNumber>;
    expiryYear: z.ZodNullable<z.ZodNumber>;
    isDefault: z.ZodBoolean;
    display: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type PaymentMethodSummary = z.infer<typeof PaymentMethodSummarySchema>;
export declare const BillingCurrentPlanSchema: z.ZodObject<{
    slug: z.ZodString;
    name: z.ZodString;
    price: z.ZodNullable<z.ZodString>;
    currency: z.ZodNullable<z.ZodString>;
    targetCreditBalance: z.ZodNullable<z.ZodString>;
    subscriptionStatus: z.ZodString;
    cycleStartsAt: z.ZodNullable<z.ZodString>;
    cycleEndsAt: z.ZodNullable<z.ZodString>;
    renewalAt: z.ZodNullable<z.ZodString>;
    pendingSwitch: z.ZodNullable<z.ZodObject<{
        billingSubscriptionChangeId: z.ZodString;
        effectiveAt: z.ZodString;
        planSlug: z.ZodNullable<z.ZodString>;
        planName: z.ZodNullable<z.ZodString>;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    pendingCancellation: z.ZodNullable<z.ZodObject<{
        effectiveAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SubscriptionCancellationInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const SubscriptionCancellationPreviewSchema: z.ZodObject<{
    currentPlan: z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        subscriptionStatus: z.ZodString;
        cycleStartsAt: z.ZodNullable<z.ZodString>;
        cycleEndsAt: z.ZodNullable<z.ZodString>;
        renewalAt: z.ZodNullable<z.ZodString>;
        pendingSwitch: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        pendingCancellation: z.ZodNullable<z.ZodObject<{
            effectiveAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    effectiveAt: z.ZodString;
    currentBalance: z.ZodString;
    servicePolicy: z.ZodLiteral<"active_until_period_end">;
    creditPolicy: z.ZodLiteral<"dormant_until_resubscription">;
    scheduledFinalCharge: z.ZodNullable<z.ZodString>;
    autoTopUpEnabled: z.ZodBoolean;
    pendingDowngrade: z.ZodNullable<z.ZodObject<{
        billingSubscriptionChangeId: z.ZodString;
        effectiveAt: z.ZodString;
        planSlug: z.ZodNullable<z.ZodString>;
        planName: z.ZodNullable<z.ZodString>;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    collectionState: z.ZodObject<{
        status: z.ZodEnum<{
            current: "current";
            delinquent: "delinquent";
            payment_retrying: "payment_retrying";
        }>;
        outstandingCredits: z.ZodNullable<z.ZodString>;
        outstandingAmount: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        scheduledAttemptsMade: z.ZodNumber;
        nextRetryAt: z.ZodNullable<z.ZodString>;
        billingInvoiceId: z.ZodNullable<z.ZodString>;
        hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    calculatedAt: z.ZodString;
}, z.core.$strip>;
export declare const ScheduleSubscriptionCancellationOutputSchema: z.ZodObject<{
    currentPlan: z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        subscriptionStatus: z.ZodString;
        cycleStartsAt: z.ZodNullable<z.ZodString>;
        cycleEndsAt: z.ZodNullable<z.ZodString>;
        renewalAt: z.ZodNullable<z.ZodString>;
        pendingSwitch: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        pendingCancellation: z.ZodNullable<z.ZodObject<{
            effectiveAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    effectiveAt: z.ZodString;
    currentBalance: z.ZodString;
    servicePolicy: z.ZodLiteral<"active_until_period_end">;
    creditPolicy: z.ZodLiteral<"dormant_until_resubscription">;
    scheduledFinalCharge: z.ZodNullable<z.ZodString>;
    autoTopUpEnabled: z.ZodBoolean;
    pendingDowngrade: z.ZodNullable<z.ZodObject<{
        billingSubscriptionChangeId: z.ZodString;
        effectiveAt: z.ZodString;
        planSlug: z.ZodNullable<z.ZodString>;
        planName: z.ZodNullable<z.ZodString>;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    collectionState: z.ZodObject<{
        status: z.ZodEnum<{
            current: "current";
            delinquent: "delinquent";
            payment_retrying: "payment_retrying";
        }>;
        outstandingCredits: z.ZodNullable<z.ZodString>;
        outstandingAmount: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        scheduledAttemptsMade: z.ZodNumber;
        nextRetryAt: z.ZodNullable<z.ZodString>;
        billingInvoiceId: z.ZodNullable<z.ZodString>;
        hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    calculatedAt: z.ZodString;
    billingSubscriptionChangeId: z.ZodString;
    alreadyScheduled: z.ZodBoolean;
}, z.core.$strip>;
export declare const ResumeSubscriptionCancellationOutputSchema: z.ZodObject<{
    billingSubscriptionId: z.ZodString;
    resumed: z.ZodLiteral<true>;
}, z.core.$strip>;
export type SubscriptionCancellationInput = z.infer<typeof SubscriptionCancellationInputSchema>;
export type SubscriptionCancellationPreview = z.infer<typeof SubscriptionCancellationPreviewSchema>;
export type ScheduleSubscriptionCancellationOutput = z.infer<typeof ScheduleSubscriptionCancellationOutputSchema>;
export type ResumeSubscriptionCancellationOutput = z.infer<typeof ResumeSubscriptionCancellationOutputSchema>;
export declare const getAutoTopUp: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    supported: z.ZodBoolean;
    enabled: z.ZodBoolean;
    triggerCreditBalance: z.ZodString;
    topUpAmount: z.ZodString;
    cycleSpendingLimit: z.ZodString;
    currency: z.ZodString;
    creditsToGrant: z.ZodNullable<z.ZodString>;
    status: z.ZodString;
}, z.core.$strip>, "api">;
export declare const updateAutoTopUp: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    enabled: z.ZodBoolean;
    triggerCreditBalance: z.ZodString;
    topUpAmount: z.ZodString;
    cycleSpendingLimit: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    supported: z.ZodBoolean;
    enabled: z.ZodBoolean;
    triggerCreditBalance: z.ZodString;
    topUpAmount: z.ZodString;
    cycleSpendingLimit: z.ZodString;
    currency: z.ZodString;
    creditsToGrant: z.ZodNullable<z.ZodString>;
    status: z.ZodString;
}, z.core.$strip>, "api">;
export declare const purchaseCredits: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    amount: z.ZodString;
    idempotencyKey: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodEnum<{
        paid: "paid";
        pending_payment: "pending_payment";
    }>;
    billingInvoiceId: z.ZodString;
    topUpAmount: z.ZodString;
    creditsToGrant: z.ZodString;
    currency: z.ZodString;
}, z.core.$strip>, "api">;
export declare const listPlans: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    billingModel: z.ZodString;
    currentPlanSlug: z.ZodNullable<z.ZodString>;
    hasActiveStripeBilling: z.ZodBoolean;
    plans: z.ZodArray<z.ZodObject<{
        slug: z.ZodString;
        billingModel: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        bestFor: z.ZodNullable<z.ZodString>;
        price: z.ZodString;
        currency: z.ZodString;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        logsIncludedBytes: z.ZodString;
        inputTokensIncluded: z.ZodString;
        outputTokensIncluded: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const previewPlanChange: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    planSlug: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    calculatedAt: z.ZodString;
    type: z.ZodEnum<{
        downgrade: "downgrade";
        upgrade: "upgrade";
    }>;
    effectiveAt: z.ZodString;
    currency: z.ZodString;
    currentPlanSlug: z.ZodString;
    targetPlanSlug: z.ZodString;
    currentPlanName: z.ZodString;
    targetPlanName: z.ZodString;
    currentPlanPrice: z.ZodString;
    targetPlanPrice: z.ZodString;
    currentTargetCreditBalance: z.ZodString;
    targetCreditBalance: z.ZodString;
    creditDeficitAmount: z.ZodString;
    creditDeficitChargeAmount: z.ZodString;
    additionalCreditPrice: z.ZodString;
    immediateChargeAmount: z.ZodString;
    subscriptionChargeAmount: z.ZodString;
    proratedCreditGrantAmount: z.ZodString;
    remainingCycleFraction: z.ZodString;
    nextCycleChargeAmount: z.ZodString;
}, z.core.$strip>, "api">;
export declare const changePlan: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    planSlug: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    billingSubscriptionChangeId: z.ZodString;
    billingSubscriptionId: z.ZodString;
    status: z.ZodString;
    type: z.ZodString;
    effectiveAt: z.ZodString;
    invoiceId: z.ZodNullable<z.ZodString>;
    creditDeficitAmount: z.ZodOptional<z.ZodString>;
    creditDeficitChargeAmount: z.ZodOptional<z.ZodString>;
    creditTopUpAmount: z.ZodOptional<z.ZodString>;
    immediateChargeAmount: z.ZodOptional<z.ZodString>;
    subscriptionChargeAmount: z.ZodOptional<z.ZodString>;
    proratedCreditGrantAmount: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const createCheckoutSession: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    planSlug: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    sessionId: z.ZodString;
    checkoutUrl: z.ZodString;
}, z.core.$strip>, "api">;
export declare const getCheckoutSessionStatus: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodEnum<{
        active: "active";
        expired: "expired";
        pending: "pending";
    }>;
}, z.core.$strip>, "api">;
export declare const createPortalSession: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    portalUrl: z.ZodString;
}, z.core.$strip>, "api">;
export declare const getPaymentMethod: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    hasPaymentMethod: z.ZodBoolean;
    brand: z.ZodNullable<z.ZodString>;
    last4: z.ZodNullable<z.ZodString>;
    type: z.ZodNullable<z.ZodString>;
    expiryMonth: z.ZodNullable<z.ZodNumber>;
    expiryYear: z.ZodNullable<z.ZodNumber>;
    isDefault: z.ZodBoolean;
    display: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const previewSubscriptionCancellation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    currentPlan: z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        subscriptionStatus: z.ZodString;
        cycleStartsAt: z.ZodNullable<z.ZodString>;
        cycleEndsAt: z.ZodNullable<z.ZodString>;
        renewalAt: z.ZodNullable<z.ZodString>;
        pendingSwitch: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        pendingCancellation: z.ZodNullable<z.ZodObject<{
            effectiveAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    effectiveAt: z.ZodString;
    currentBalance: z.ZodString;
    servicePolicy: z.ZodLiteral<"active_until_period_end">;
    creditPolicy: z.ZodLiteral<"dormant_until_resubscription">;
    scheduledFinalCharge: z.ZodNullable<z.ZodString>;
    autoTopUpEnabled: z.ZodBoolean;
    pendingDowngrade: z.ZodNullable<z.ZodObject<{
        billingSubscriptionChangeId: z.ZodString;
        effectiveAt: z.ZodString;
        planSlug: z.ZodNullable<z.ZodString>;
        planName: z.ZodNullable<z.ZodString>;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    collectionState: z.ZodObject<{
        status: z.ZodEnum<{
            current: "current";
            delinquent: "delinquent";
            payment_retrying: "payment_retrying";
        }>;
        outstandingCredits: z.ZodNullable<z.ZodString>;
        outstandingAmount: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        scheduledAttemptsMade: z.ZodNumber;
        nextRetryAt: z.ZodNullable<z.ZodString>;
        billingInvoiceId: z.ZodNullable<z.ZodString>;
        hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    calculatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const scheduleSubscriptionCancellation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    currentPlan: z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        subscriptionStatus: z.ZodString;
        cycleStartsAt: z.ZodNullable<z.ZodString>;
        cycleEndsAt: z.ZodNullable<z.ZodString>;
        renewalAt: z.ZodNullable<z.ZodString>;
        pendingSwitch: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        pendingCancellation: z.ZodNullable<z.ZodObject<{
            effectiveAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    effectiveAt: z.ZodString;
    currentBalance: z.ZodString;
    servicePolicy: z.ZodLiteral<"active_until_period_end">;
    creditPolicy: z.ZodLiteral<"dormant_until_resubscription">;
    scheduledFinalCharge: z.ZodNullable<z.ZodString>;
    autoTopUpEnabled: z.ZodBoolean;
    pendingDowngrade: z.ZodNullable<z.ZodObject<{
        billingSubscriptionChangeId: z.ZodString;
        effectiveAt: z.ZodString;
        planSlug: z.ZodNullable<z.ZodString>;
        planName: z.ZodNullable<z.ZodString>;
        price: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    collectionState: z.ZodObject<{
        status: z.ZodEnum<{
            current: "current";
            delinquent: "delinquent";
            payment_retrying: "payment_retrying";
        }>;
        outstandingCredits: z.ZodNullable<z.ZodString>;
        outstandingAmount: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        scheduledAttemptsMade: z.ZodNumber;
        nextRetryAt: z.ZodNullable<z.ZodString>;
        billingInvoiceId: z.ZodNullable<z.ZodString>;
        hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    calculatedAt: z.ZodString;
    billingSubscriptionChangeId: z.ZodString;
    alreadyScheduled: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const resumeSubscriptionCancellation: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    billingSubscriptionId: z.ZodString;
    resumed: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const BillingUsageInvoiceLineItemSchema: z.ZodObject<{
    productKey: z.ZodEnum<{
        automation_runs_completed: "automation_runs_completed";
        input_tokens: "input_tokens";
        issues_created: "issues_created";
        logs_accepted_bytes: "logs_accepted_bytes";
        logs_ingested_bytes: "logs_ingested_bytes";
        output_tokens: "output_tokens";
        pull_request_reviews_completed: "pull_request_reviews_completed";
        pull_requests_created: "pull_requests_created";
    }>;
    displayName: z.ZodString;
    meteredQuantity: z.ZodString;
    includedQuantity: z.ZodString;
    overageQuantity: z.ZodString;
    unitPrice: z.ZodString;
    amount: z.ZodString;
}, z.core.$strip>;
export type BillingUsageInvoiceLineItem = z.infer<typeof BillingUsageInvoiceLineItemSchema>;
export declare const BillingUsageInvoiceSchema: z.ZodObject<{
    id: z.ZodString;
    cycleStartsAt: z.ZodString;
    cycleEndsAt: z.ZodString;
    status: z.ZodString;
    currency: z.ZodString;
    subtotalAmount: z.ZodString;
    totalAmount: z.ZodString;
    lineItems: z.ZodArray<z.ZodObject<{
        productKey: z.ZodEnum<{
            automation_runs_completed: "automation_runs_completed";
            input_tokens: "input_tokens";
            issues_created: "issues_created";
            logs_accepted_bytes: "logs_accepted_bytes";
            logs_ingested_bytes: "logs_ingested_bytes";
            output_tokens: "output_tokens";
            pull_request_reviews_completed: "pull_request_reviews_completed";
            pull_requests_created: "pull_requests_created";
        }>;
        displayName: z.ZodString;
        meteredQuantity: z.ZodString;
        includedQuantity: z.ZodString;
        overageQuantity: z.ZodString;
        unitPrice: z.ZodString;
        amount: z.ZodString;
    }, z.core.$strip>>;
    hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
    finalizedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export type BillingUsageInvoice = z.infer<typeof BillingUsageInvoiceSchema>;
export type ListUsageInvoicesInput = z.infer<typeof ListUsageInvoicesInputSchema>;
export type ListUsageInvoicesOutput = z.infer<typeof ListUsageInvoicesOutputSchema>;
export type GetAccruedUsageChargesInput = z.infer<typeof GetAccruedUsageChargesInputSchema>;
export type GetAccruedUsageChargesOutput = z.infer<typeof GetAccruedUsageChargesOutputSchema>;
export declare const ListUsageInvoicesInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const ListUsageInvoicesOutputSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        cycleStartsAt: z.ZodString;
        cycleEndsAt: z.ZodString;
        status: z.ZodString;
        currency: z.ZodString;
        subtotalAmount: z.ZodString;
        totalAmount: z.ZodString;
        lineItems: z.ZodArray<z.ZodObject<{
            productKey: z.ZodEnum<{
                automation_runs_completed: "automation_runs_completed";
                input_tokens: "input_tokens";
                issues_created: "issues_created";
                logs_accepted_bytes: "logs_accepted_bytes";
                logs_ingested_bytes: "logs_ingested_bytes";
                output_tokens: "output_tokens";
                pull_request_reviews_completed: "pull_request_reviews_completed";
                pull_requests_created: "pull_requests_created";
            }>;
            displayName: z.ZodString;
            meteredQuantity: z.ZodString;
            includedQuantity: z.ZodString;
            overageQuantity: z.ZodString;
            unitPrice: z.ZodString;
            amount: z.ZodString;
        }, z.core.$strip>>;
        hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
        finalizedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const listUsageInvoices: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>, z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        cycleStartsAt: z.ZodString;
        cycleEndsAt: z.ZodString;
        status: z.ZodString;
        currency: z.ZodString;
        subtotalAmount: z.ZodString;
        totalAmount: z.ZodString;
        lineItems: z.ZodArray<z.ZodObject<{
            productKey: z.ZodEnum<{
                automation_runs_completed: "automation_runs_completed";
                input_tokens: "input_tokens";
                issues_created: "issues_created";
                logs_accepted_bytes: "logs_accepted_bytes";
                logs_ingested_bytes: "logs_ingested_bytes";
                output_tokens: "output_tokens";
                pull_request_reviews_completed: "pull_request_reviews_completed";
                pull_requests_created: "pull_requests_created";
            }>;
            displayName: z.ZodString;
            meteredQuantity: z.ZodString;
            includedQuantity: z.ZodString;
            overageQuantity: z.ZodString;
            unitPrice: z.ZodString;
            amount: z.ZodString;
        }, z.core.$strip>>;
        hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
        finalizedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const GetAccruedUsageChargesInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetAccruedUsageChargesOutputSchema: z.ZodObject<{
    cycle: z.ZodNullable<z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strip>>;
    currency: z.ZodNullable<z.ZodString>;
    settlesInCents: z.ZodBoolean;
    lineItems: z.ZodArray<z.ZodObject<{
        productKey: z.ZodEnum<{
            automation_runs_completed: "automation_runs_completed";
            input_tokens: "input_tokens";
            issues_created: "issues_created";
            logs_accepted_bytes: "logs_accepted_bytes";
            logs_ingested_bytes: "logs_ingested_bytes";
            output_tokens: "output_tokens";
            pull_request_reviews_completed: "pull_request_reviews_completed";
            pull_requests_created: "pull_requests_created";
        }>;
        displayName: z.ZodString;
        meteredQuantity: z.ZodString;
        includedQuantity: z.ZodString;
        overageQuantity: z.ZodString;
        unitPrice: z.ZodString;
        amount: z.ZodString;
    }, z.core.$strip>>;
    totalAmount: z.ZodString;
}, z.core.$strip>;
export declare const getAccruedUsageCharges: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    cycle: z.ZodNullable<z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strip>>;
    currency: z.ZodNullable<z.ZodString>;
    settlesInCents: z.ZodBoolean;
    lineItems: z.ZodArray<z.ZodObject<{
        productKey: z.ZodEnum<{
            automation_runs_completed: "automation_runs_completed";
            input_tokens: "input_tokens";
            issues_created: "issues_created";
            logs_accepted_bytes: "logs_accepted_bytes";
            logs_ingested_bytes: "logs_ingested_bytes";
            output_tokens: "output_tokens";
            pull_request_reviews_completed: "pull_request_reviews_completed";
            pull_requests_created: "pull_requests_created";
        }>;
        displayName: z.ZodString;
        meteredQuantity: z.ZodString;
        includedQuantity: z.ZodString;
        overageQuantity: z.ZodString;
        unitPrice: z.ZodString;
        amount: z.ZodString;
    }, z.core.$strip>>;
    totalAmount: z.ZodString;
}, z.core.$strip>, "api">;
export declare const billingContract: {
    readonly getSummary: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        billingModel: z.ZodEnum<{
            "credit-balance-v1": "credit-balance-v1";
        }>;
        billable: z.ZodBoolean;
        nonBillableReason: z.ZodNullable<z.ZodString>;
        status: z.ZodString;
        planName: z.ZodNullable<z.ZodString>;
        planSlug: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        currentBalance: z.ZodNullable<z.ZodString>;
        targetCreditBalance: z.ZodNullable<z.ZodString>;
        currentCycle: z.ZodNullable<z.ZodObject<{
            startsAt: z.ZodString;
            endsAt: z.ZodString;
            billableStartsAt: z.ZodString;
        }, z.core.$strip>>;
        currentPeriodEstimate: z.ZodNullable<z.ZodObject<{
            subscriptionChargeAmount: z.ZodString;
            creditDeficitAmount: z.ZodString;
            creditDeficitChargeAmount: z.ZodString;
            totalAmount: z.ZodString;
            currency: z.ZodString;
        }, z.core.$strip>>;
        pendingDowngrade: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        subscription: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            status: z.ZodString;
            billingPlanId: z.ZodString;
            cycleType: z.ZodString;
            cancelAt: z.ZodNullable<z.ZodString>;
            canceledAt: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        collection: z.ZodObject<{
            status: z.ZodEnum<{
                current: "current";
                delinquent: "delinquent";
                payment_retrying: "payment_retrying";
            }>;
            outstandingCredits: z.ZodNullable<z.ZodString>;
            outstandingAmount: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            scheduledAttemptsMade: z.ZodNumber;
            nextRetryAt: z.ZodNullable<z.ZodString>;
            billingInvoiceId: z.ZodNullable<z.ZodString>;
            hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        currentPlan: z.ZodNullable<z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
            subscriptionStatus: z.ZodString;
            cycleStartsAt: z.ZodNullable<z.ZodString>;
            cycleEndsAt: z.ZodNullable<z.ZodString>;
            renewalAt: z.ZodNullable<z.ZodString>;
            pendingSwitch: z.ZodNullable<z.ZodObject<{
                billingSubscriptionChangeId: z.ZodString;
                effectiveAt: z.ZodString;
                planSlug: z.ZodNullable<z.ZodString>;
                planName: z.ZodNullable<z.ZodString>;
                price: z.ZodNullable<z.ZodString>;
                currency: z.ZodNullable<z.ZodString>;
                targetCreditBalance: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            pendingCancellation: z.ZodNullable<z.ZodObject<{
                effectiveAt: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getUsage: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        cycle: z.ZodDefault<z.ZodEnum<{
            current: "current";
            previous: "previous";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        cycle: z.ZodNullable<z.ZodObject<{
            startsAt: z.ZodString;
            endsAt: z.ZodString;
            billableStartsAt: z.ZodString;
        }, z.core.$strip>>;
        usage: z.ZodArray<z.ZodObject<{
            dimension: z.ZodEnum<{
                automation_runs_completed: "automation_runs_completed";
                input_tokens: "input_tokens";
                issues_created: "issues_created";
                logs_accepted_bytes: "logs_accepted_bytes";
                logs_ingested_bytes: "logs_ingested_bytes";
                output_tokens: "output_tokens";
                pull_request_reviews_completed: "pull_request_reviews_completed";
                pull_requests_created: "pull_requests_created";
            }>;
            totalQuantity: z.ZodString;
            ratedQuantity: z.ZodString;
            creditsConsumed: z.ZodString;
            sourceBreakdown: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getAccruedUsageCharges: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        cycle: z.ZodNullable<z.ZodObject<{
            startsAt: z.ZodString;
            endsAt: z.ZodString;
        }, z.core.$strip>>;
        currency: z.ZodNullable<z.ZodString>;
        settlesInCents: z.ZodBoolean;
        lineItems: z.ZodArray<z.ZodObject<{
            productKey: z.ZodEnum<{
                automation_runs_completed: "automation_runs_completed";
                input_tokens: "input_tokens";
                issues_created: "issues_created";
                logs_accepted_bytes: "logs_accepted_bytes";
                logs_ingested_bytes: "logs_ingested_bytes";
                output_tokens: "output_tokens";
                pull_request_reviews_completed: "pull_request_reviews_completed";
                pull_requests_created: "pull_requests_created";
            }>;
            displayName: z.ZodString;
            meteredQuantity: z.ZodString;
            includedQuantity: z.ZodString;
            overageQuantity: z.ZodString;
            unitPrice: z.ZodString;
            amount: z.ZodString;
        }, z.core.$strip>>;
        totalAmount: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listUsageInvoices: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            cycleStartsAt: z.ZodString;
            cycleEndsAt: z.ZodString;
            status: z.ZodString;
            currency: z.ZodString;
            subtotalAmount: z.ZodString;
            totalAmount: z.ZodString;
            lineItems: z.ZodArray<z.ZodObject<{
                productKey: z.ZodEnum<{
                    automation_runs_completed: "automation_runs_completed";
                    input_tokens: "input_tokens";
                    issues_created: "issues_created";
                    logs_accepted_bytes: "logs_accepted_bytes";
                    logs_ingested_bytes: "logs_ingested_bytes";
                    output_tokens: "output_tokens";
                    pull_request_reviews_completed: "pull_request_reviews_completed";
                    pull_requests_created: "pull_requests_created";
                }>;
                displayName: z.ZodString;
                meteredQuantity: z.ZodString;
                includedQuantity: z.ZodString;
                overageQuantity: z.ZodString;
                unitPrice: z.ZodString;
                amount: z.ZodString;
            }, z.core.$strip>>;
            hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
            finalizedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listTransactions: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>, z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            transactionType: z.ZodEnum<{
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
            creditDelta: z.ZodString;
            direction: z.ZodEnum<{
                credit: "credit";
                debit: "debit";
            }>;
            reason: z.ZodEnum<{
                adjustment: "adjustment";
                auto_purchase: "auto_purchase";
                cycle_renewal: "cycle_renewal";
                deficit_settlement: "deficit_settlement";
                migration_opening_balance: "migration_opening_balance";
                one_off_purchase: "one_off_purchase";
                plan_upgrade: "plan_upgrade";
                usage: "usage";
            }>;
            amount: z.ZodString;
            balanceAfter: z.ZodString;
            occurredAt: z.ZodString;
            billingInvoiceId: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        pagination: z.ZodObject<{
            page: z.ZodNumber;
            limit: z.ZodNumber;
            total: z.ZodNumber;
            totalPages: z.ZodNumber;
            hasNext: z.ZodBoolean;
            hasPrev: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getAutoTopUp: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        supported: z.ZodBoolean;
        enabled: z.ZodBoolean;
        triggerCreditBalance: z.ZodString;
        topUpAmount: z.ZodString;
        cycleSpendingLimit: z.ZodString;
        currency: z.ZodString;
        creditsToGrant: z.ZodNullable<z.ZodString>;
        status: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly updateAutoTopUp: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        triggerCreditBalance: z.ZodString;
        topUpAmount: z.ZodString;
        cycleSpendingLimit: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        supported: z.ZodBoolean;
        enabled: z.ZodBoolean;
        triggerCreditBalance: z.ZodString;
        topUpAmount: z.ZodString;
        cycleSpendingLimit: z.ZodString;
        currency: z.ZodString;
        creditsToGrant: z.ZodNullable<z.ZodString>;
        status: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly purchaseCredits: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        amount: z.ZodString;
        idempotencyKey: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodEnum<{
            paid: "paid";
            pending_payment: "pending_payment";
        }>;
        billingInvoiceId: z.ZodString;
        topUpAmount: z.ZodString;
        creditsToGrant: z.ZodString;
        currency: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listPlans: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        billingModel: z.ZodString;
        currentPlanSlug: z.ZodNullable<z.ZodString>;
        hasActiveStripeBilling: z.ZodBoolean;
        plans: z.ZodArray<z.ZodObject<{
            slug: z.ZodString;
            billingModel: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
            bestFor: z.ZodNullable<z.ZodString>;
            price: z.ZodString;
            currency: z.ZodString;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
            logsIncludedBytes: z.ZodString;
            inputTokensIncluded: z.ZodString;
            outputTokensIncluded: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly previewPlanChange: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        planSlug: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        calculatedAt: z.ZodString;
        type: z.ZodEnum<{
            downgrade: "downgrade";
            upgrade: "upgrade";
        }>;
        effectiveAt: z.ZodString;
        currency: z.ZodString;
        currentPlanSlug: z.ZodString;
        targetPlanSlug: z.ZodString;
        currentPlanName: z.ZodString;
        targetPlanName: z.ZodString;
        currentPlanPrice: z.ZodString;
        targetPlanPrice: z.ZodString;
        currentTargetCreditBalance: z.ZodString;
        targetCreditBalance: z.ZodString;
        creditDeficitAmount: z.ZodString;
        creditDeficitChargeAmount: z.ZodString;
        additionalCreditPrice: z.ZodString;
        immediateChargeAmount: z.ZodString;
        subscriptionChargeAmount: z.ZodString;
        proratedCreditGrantAmount: z.ZodString;
        remainingCycleFraction: z.ZodString;
        nextCycleChargeAmount: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly changePlan: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        planSlug: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        billingSubscriptionChangeId: z.ZodString;
        billingSubscriptionId: z.ZodString;
        status: z.ZodString;
        type: z.ZodString;
        effectiveAt: z.ZodString;
        invoiceId: z.ZodNullable<z.ZodString>;
        creditDeficitAmount: z.ZodOptional<z.ZodString>;
        creditDeficitChargeAmount: z.ZodOptional<z.ZodString>;
        creditTopUpAmount: z.ZodOptional<z.ZodString>;
        immediateChargeAmount: z.ZodOptional<z.ZodString>;
        subscriptionChargeAmount: z.ZodOptional<z.ZodString>;
        proratedCreditGrantAmount: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly createCheckoutSession: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        planSlug: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        sessionId: z.ZodString;
        checkoutUrl: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getCheckoutSessionStatus: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        status: z.ZodEnum<{
            active: "active";
            expired: "expired";
            pending: "pending";
        }>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly createPortalSession: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        portalUrl: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getPaymentMethod: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        hasPaymentMethod: z.ZodBoolean;
        brand: z.ZodNullable<z.ZodString>;
        last4: z.ZodNullable<z.ZodString>;
        type: z.ZodNullable<z.ZodString>;
        expiryMonth: z.ZodNullable<z.ZodNumber>;
        expiryYear: z.ZodNullable<z.ZodNumber>;
        isDefault: z.ZodBoolean;
        display: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly previewSubscriptionCancellation: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        currentPlan: z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
            subscriptionStatus: z.ZodString;
            cycleStartsAt: z.ZodNullable<z.ZodString>;
            cycleEndsAt: z.ZodNullable<z.ZodString>;
            renewalAt: z.ZodNullable<z.ZodString>;
            pendingSwitch: z.ZodNullable<z.ZodObject<{
                billingSubscriptionChangeId: z.ZodString;
                effectiveAt: z.ZodString;
                planSlug: z.ZodNullable<z.ZodString>;
                planName: z.ZodNullable<z.ZodString>;
                price: z.ZodNullable<z.ZodString>;
                currency: z.ZodNullable<z.ZodString>;
                targetCreditBalance: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            pendingCancellation: z.ZodNullable<z.ZodObject<{
                effectiveAt: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        effectiveAt: z.ZodString;
        currentBalance: z.ZodString;
        servicePolicy: z.ZodLiteral<"active_until_period_end">;
        creditPolicy: z.ZodLiteral<"dormant_until_resubscription">;
        scheduledFinalCharge: z.ZodNullable<z.ZodString>;
        autoTopUpEnabled: z.ZodBoolean;
        pendingDowngrade: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        collectionState: z.ZodObject<{
            status: z.ZodEnum<{
                current: "current";
                delinquent: "delinquent";
                payment_retrying: "payment_retrying";
            }>;
            outstandingCredits: z.ZodNullable<z.ZodString>;
            outstandingAmount: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            scheduledAttemptsMade: z.ZodNumber;
            nextRetryAt: z.ZodNullable<z.ZodString>;
            billingInvoiceId: z.ZodNullable<z.ZodString>;
            hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        calculatedAt: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly scheduleSubscriptionCancellation: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        currentPlan: z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
            subscriptionStatus: z.ZodString;
            cycleStartsAt: z.ZodNullable<z.ZodString>;
            cycleEndsAt: z.ZodNullable<z.ZodString>;
            renewalAt: z.ZodNullable<z.ZodString>;
            pendingSwitch: z.ZodNullable<z.ZodObject<{
                billingSubscriptionChangeId: z.ZodString;
                effectiveAt: z.ZodString;
                planSlug: z.ZodNullable<z.ZodString>;
                planName: z.ZodNullable<z.ZodString>;
                price: z.ZodNullable<z.ZodString>;
                currency: z.ZodNullable<z.ZodString>;
                targetCreditBalance: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            pendingCancellation: z.ZodNullable<z.ZodObject<{
                effectiveAt: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        effectiveAt: z.ZodString;
        currentBalance: z.ZodString;
        servicePolicy: z.ZodLiteral<"active_until_period_end">;
        creditPolicy: z.ZodLiteral<"dormant_until_resubscription">;
        scheduledFinalCharge: z.ZodNullable<z.ZodString>;
        autoTopUpEnabled: z.ZodBoolean;
        pendingDowngrade: z.ZodNullable<z.ZodObject<{
            billingSubscriptionChangeId: z.ZodString;
            effectiveAt: z.ZodString;
            planSlug: z.ZodNullable<z.ZodString>;
            planName: z.ZodNullable<z.ZodString>;
            price: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            targetCreditBalance: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        collectionState: z.ZodObject<{
            status: z.ZodEnum<{
                current: "current";
                delinquent: "delinquent";
                payment_retrying: "payment_retrying";
            }>;
            outstandingCredits: z.ZodNullable<z.ZodString>;
            outstandingAmount: z.ZodNullable<z.ZodString>;
            currency: z.ZodNullable<z.ZodString>;
            scheduledAttemptsMade: z.ZodNumber;
            nextRetryAt: z.ZodNullable<z.ZodString>;
            billingInvoiceId: z.ZodNullable<z.ZodString>;
            hostedInvoiceUrl: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        calculatedAt: z.ZodString;
        billingSubscriptionChangeId: z.ZodString;
        alreadyScheduled: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly resumeSubscriptionCancellation: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        billingSubscriptionId: z.ZodString;
        resumed: z.ZodLiteral<true>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
