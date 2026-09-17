import { type CliAction, type TaskCategory, type TaskList, type WebAction } from "../task-checklist/index.js";
import { z } from "zod";
export type { CliAction, TaskCategory, TaskList, WebAction };
export declare const TaskCategorySchema: z.ZodEnum<{
    onboarding: "onboarding";
    setup: "setup";
}>;
export declare const TaskListSchema: z.ZodEnum<{
    "getting-started": "getting-started";
    onboarding: "onboarding";
}>;
export declare const WebActionSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    do: z.ZodLiteral<"show-screen">;
    target: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    do: z.ZodLiteral<"open-page">;
    target: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    do: z.ZodLiteral<"show-command">;
    target: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    do: z.ZodLiteral<"open-url">;
    target: z.ZodString;
}, z.core.$strip>], "do">;
export declare const CliActionSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    do: z.ZodLiteral<"run-step">;
    target: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    do: z.ZodLiteral<"open-page">;
    target: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    do: z.ZodLiteral<"open-browser">;
    target: z.ZodString;
}, z.core.$strip>], "do">;
export declare const TaskSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    description: z.ZodString;
    instructions: z.ZodString;
    completed: z.ZodBoolean;
    completedAt: z.ZodNullable<z.ZodString>;
    skipped: z.ZodBoolean;
    category: z.ZodEnum<{
        onboarding: "onboarding";
        setup: "setup";
    }>;
    list: z.ZodEnum<{
        "getting-started": "getting-started";
        onboarding: "onboarding";
    }>;
    optional: z.ZodBoolean;
    web: z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        do: z.ZodLiteral<"show-screen">;
        target: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        do: z.ZodLiteral<"open-page">;
        target: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        do: z.ZodLiteral<"show-command">;
        target: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        do: z.ZodLiteral<"open-url">;
        target: z.ZodString;
    }, z.core.$strip>], "do">>;
    cli: z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        do: z.ZodLiteral<"run-step">;
        target: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        do: z.ZodLiteral<"open-page">;
        target: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        do: z.ZodLiteral<"open-browser">;
        target: z.ZodString;
    }, z.core.$strip>], "do">>;
}, z.core.$strip>;
export type Task = z.infer<typeof TaskSchema>;
export declare const ListTasksInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListTasksInput = z.infer<typeof ListTasksInputSchema>;
export declare const ListTasksOutputSchema: z.ZodObject<{
    tasks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodString;
        instructions: z.ZodString;
        completed: z.ZodBoolean;
        completedAt: z.ZodNullable<z.ZodString>;
        skipped: z.ZodBoolean;
        category: z.ZodEnum<{
            onboarding: "onboarding";
            setup: "setup";
        }>;
        list: z.ZodEnum<{
            "getting-started": "getting-started";
            onboarding: "onboarding";
        }>;
        optional: z.ZodBoolean;
        web: z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
            do: z.ZodLiteral<"show-screen">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"open-page">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"show-command">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"open-url">;
            target: z.ZodString;
        }, z.core.$strip>], "do">>;
        cli: z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
            do: z.ZodLiteral<"run-step">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"open-page">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"open-browser">;
            target: z.ZodString;
        }, z.core.$strip>], "do">>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListTasksOutput = z.infer<typeof ListTasksOutputSchema>;
export declare const listTasks: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    tasks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodString;
        instructions: z.ZodString;
        completed: z.ZodBoolean;
        completedAt: z.ZodNullable<z.ZodString>;
        skipped: z.ZodBoolean;
        category: z.ZodEnum<{
            onboarding: "onboarding";
            setup: "setup";
        }>;
        list: z.ZodEnum<{
            "getting-started": "getting-started";
            onboarding: "onboarding";
        }>;
        optional: z.ZodBoolean;
        web: z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
            do: z.ZodLiteral<"show-screen">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"open-page">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"show-command">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"open-url">;
            target: z.ZodString;
        }, z.core.$strip>], "do">>;
        cli: z.ZodNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
            do: z.ZodLiteral<"run-step">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"open-page">;
            target: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            do: z.ZodLiteral<"open-browser">;
            target: z.ZodString;
        }, z.core.$strip>], "do">>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * The onboarding cards a walk may decline, each backed by an `organizations`
 * skip column pair (`onboarding_<step>_skipped_at` + `_by_user_id`). Skips
 * are onboarding-only and org-wide (task-registry-v2 Decision 6): setup
 * tasks are never skipped, and a task key outside this set is a validation
 * error, not a new column. One pair per card since the GitHub two-card
 * split: `connect_github_account` owns the `github` (personal account) pair
 * and `install_github_app` owns the `github_app` (org installation) pair.
 *
 * Membership is the registry's `TASKS_WITH_SKIP_LEDGER` tuple, which also
 * anchors the per-card pair mapping (`isTaskSkippedInLedger`) both task-list
 * routers read — the wire enum and the ledger derivation cannot drift.
 */
export declare const SKIPPABLE_TASK_IDS: readonly ["connect_github_account", "install_github_app", "install_slack_app", "trigger_sample_issue"];
export declare const SkippableTaskIdSchema: z.ZodEnum<{
    connect_github_account: "connect_github_account";
    install_github_app: "install_github_app";
    install_slack_app: "install_slack_app";
    trigger_sample_issue: "trigger_sample_issue";
}>;
export type SkippableTaskId = z.infer<typeof SkippableTaskIdSchema>;
export declare const SkipTaskInputSchema: z.ZodObject<{
    taskId: z.ZodEnum<{
        connect_github_account: "connect_github_account";
        install_github_app: "install_github_app";
        install_slack_app: "install_slack_app";
        trigger_sample_issue: "trigger_sample_issue";
    }>;
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SkipTaskInput = z.infer<typeof SkipTaskInputSchema>;
export declare const SkipTaskOutputSchema: z.ZodObject<{
    skipped: z.ZodLiteral<true>;
}, z.core.$strip>;
export type SkipTaskOutput = z.infer<typeof SkipTaskOutputSchema>;
export declare const skipTask: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    taskId: z.ZodEnum<{
        connect_github_account: "connect_github_account";
        install_github_app: "install_github_app";
        install_slack_app: "install_slack_app";
        trigger_sample_issue: "trigger_sample_issue";
    }>;
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    skipped: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const UnskipTaskInputSchema: z.ZodObject<{
    taskId: z.ZodEnum<{
        connect_github_account: "connect_github_account";
        install_github_app: "install_github_app";
        install_slack_app: "install_slack_app";
        trigger_sample_issue: "trigger_sample_issue";
    }>;
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UnskipTaskInput = z.infer<typeof UnskipTaskInputSchema>;
export declare const UnskipTaskOutputSchema: z.ZodObject<{
    unskipped: z.ZodLiteral<true>;
}, z.core.$strip>;
export type UnskipTaskOutput = z.infer<typeof UnskipTaskOutputSchema>;
export declare const unskipTask: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    taskId: z.ZodEnum<{
        connect_github_account: "connect_github_account";
        install_github_app: "install_github_app";
        install_slack_app: "install_slack_app";
        trigger_sample_issue: "trigger_sample_issue";
    }>;
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    unskipped: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
