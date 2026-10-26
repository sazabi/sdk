import { z } from "zod";
export declare const TASK_STATUS_MAPPING_PROVIDERS: readonly ["linear", "jira", "github"];
export declare const TaskStatusMappingProviderSchema: z.ZodEnum<{
    github: "github";
    jira: "jira";
    linear: "linear";
}>;
export type TaskStatusMappingProvider = z.infer<typeof TaskStatusMappingProviderSchema>;
export declare const TaskStatusMappingStateSchema: z.ZodObject<{
    ref: z.ZodString;
    name: z.ZodString;
    category: z.ZodEnum<{
        canceled: "canceled";
        done: "done";
        in_progress: "in_progress";
        open: "open";
    }>;
}, z.core.$strip>;
export type TaskStatusMappingState = z.infer<typeof TaskStatusMappingStateSchema>;
export declare const MappedTaskStateSchema: z.ZodObject<{
    stateRef: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type MappedTaskState = z.infer<typeof MappedTaskStateSchema>;
export declare const TaskStatusMappingResolutionSchema: z.ZodObject<{
    ref: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type TaskStatusMappingResolution = z.infer<typeof TaskStatusMappingResolutionSchema>;
export declare const TaskStatusMappingSchema: z.ZodObject<{
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    enabled: z.ZodBoolean;
    teamId: z.ZodNullable<z.ZodString>;
    mapping: z.ZodObject<{
        open: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        resolved: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignored: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    resolvedResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    ignoredResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TaskStatusMapping = z.infer<typeof TaskStatusMappingSchema>;
export declare const GetTaskStatusMappingInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    connectionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetTaskStatusMappingInput = z.infer<typeof GetTaskStatusMappingInputSchema>;
export declare const GetTaskStatusMappingOutputSchema: z.ZodObject<{
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    enabled: z.ZodBoolean;
    teamId: z.ZodNullable<z.ZodString>;
    mapping: z.ZodObject<{
        open: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        resolved: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignored: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    resolvedResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    ignoredResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetTaskStatusMappingOutput = z.infer<typeof GetTaskStatusMappingOutputSchema>;
export declare const getTaskStatusMapping: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    connectionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    enabled: z.ZodBoolean;
    teamId: z.ZodNullable<z.ZodString>;
    mapping: z.ZodObject<{
        open: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        resolved: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignored: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    resolvedResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    ignoredResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const TaskStatusMappingOptionsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    connectionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TaskStatusMappingOptionsInput = z.infer<typeof TaskStatusMappingOptionsInputSchema>;
export declare const TaskStatusMappingOptionsOutputSchema: z.ZodObject<{
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    teamId: z.ZodNullable<z.ZodString>;
    teamName: z.ZodNullable<z.ZodString>;
    states: z.ZodArray<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
        category: z.ZodEnum<{
            canceled: "canceled";
            done: "done";
            in_progress: "in_progress";
            open: "open";
        }>;
    }, z.core.$strip>>;
    resolutions: z.ZodArray<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    automaticResolutions: z.ZodObject<{
        resolved: z.ZodNullable<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignored: z.ZodNullable<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TaskStatusMappingOptionsOutput = z.infer<typeof TaskStatusMappingOptionsOutputSchema>;
export declare const getTaskStatusMappingOptions: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    connectionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    teamId: z.ZodNullable<z.ZodString>;
    teamName: z.ZodNullable<z.ZodString>;
    states: z.ZodArray<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
        category: z.ZodEnum<{
            canceled: "canceled";
            done: "done";
            in_progress: "in_progress";
            open: "open";
        }>;
    }, z.core.$strip>>;
    resolutions: z.ZodArray<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    automaticResolutions: z.ZodObject<{
        resolved: z.ZodNullable<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignored: z.ZodNullable<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const UpdateTaskStatusMappingInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    connectionId: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    mapping: z.ZodOptional<z.ZodObject<{
        open: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resolved: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ignored: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    resolvedResolution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ignoredResolution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type UpdateTaskStatusMappingInput = z.infer<typeof UpdateTaskStatusMappingInputSchema>;
export declare const UpdateTaskStatusMappingOutputSchema: z.ZodObject<{
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    enabled: z.ZodBoolean;
    teamId: z.ZodNullable<z.ZodString>;
    mapping: z.ZodObject<{
        open: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        resolved: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignored: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    resolvedResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    ignoredResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type UpdateTaskStatusMappingOutput = z.infer<typeof UpdateTaskStatusMappingOutputSchema>;
export declare const updateTaskStatusMapping: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    connectionId: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    mapping: z.ZodOptional<z.ZodObject<{
        open: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resolved: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ignored: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    resolvedResolution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ignoredResolution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodEnum<{
        github: "github";
        jira: "jira";
        linear: "linear";
    }>;
    enabled: z.ZodBoolean;
    teamId: z.ZodNullable<z.ZodString>;
    mapping: z.ZodObject<{
        open: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        resolved: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignored: z.ZodNullable<z.ZodObject<{
            stateRef: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    resolvedResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    ignoredResolution: z.ZodNullable<z.ZodObject<{
        ref: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const taskStatusMappingContract: {
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        connectionId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        enabled: z.ZodBoolean;
        teamId: z.ZodNullable<z.ZodString>;
        mapping: z.ZodObject<{
            open: z.ZodNullable<z.ZodObject<{
                stateRef: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            resolved: z.ZodNullable<z.ZodObject<{
                stateRef: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            ignored: z.ZodNullable<z.ZodObject<{
                stateRef: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        resolvedResolution: z.ZodNullable<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignoredResolution: z.ZodNullable<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly options: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        connectionId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        teamId: z.ZodNullable<z.ZodString>;
        teamName: z.ZodNullable<z.ZodString>;
        states: z.ZodArray<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
            category: z.ZodEnum<{
                canceled: "canceled";
                done: "done";
                in_progress: "in_progress";
                open: "open";
            }>;
        }, z.core.$strip>>;
        resolutions: z.ZodArray<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        automaticResolutions: z.ZodObject<{
            resolved: z.ZodNullable<z.ZodObject<{
                ref: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            ignored: z.ZodNullable<z.ZodObject<{
                ref: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        connectionId: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        mapping: z.ZodOptional<z.ZodObject<{
            open: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            resolved: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ignored: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        resolvedResolution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ignoredResolution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        provider: z.ZodEnum<{
            github: "github";
            jira: "jira";
            linear: "linear";
        }>;
        enabled: z.ZodBoolean;
        teamId: z.ZodNullable<z.ZodString>;
        mapping: z.ZodObject<{
            open: z.ZodNullable<z.ZodObject<{
                stateRef: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            resolved: z.ZodNullable<z.ZodObject<{
                stateRef: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            ignored: z.ZodNullable<z.ZodObject<{
                stateRef: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        resolvedResolution: z.ZodNullable<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ignoredResolution: z.ZodNullable<z.ZodObject<{
            ref: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
