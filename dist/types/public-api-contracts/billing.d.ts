import { z } from "zod";
export declare const BillingUsageDimensionSchema: z.ZodEnum<{
    automation_runs_completed: "automation_runs_completed";
    input_tokens: "input_tokens";
    issues_created: "issues_created";
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
export declare const GetBillingSummaryInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetBillingSummaryInput = z.infer<typeof GetBillingSummaryInputSchema>;
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
        priceBookId: z.ZodString;
        cycleType: z.ZodString;
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
        priceBookId: z.ZodString;
        cycleType: z.ZodString;
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
            priceBookId: z.ZodString;
            cycleType: z.ZodString;
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
};
