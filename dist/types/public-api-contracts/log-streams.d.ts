import { z } from "zod";
/**
 * Log stream operations — the first-class `/log-streams` surface of the
 * log-source taxonomy (log source provider → log source → log stream).
 *
 * Log streams are addressed directly by ID; only `list` and `create` take a
 * `logSourceId` (the parent filter / creation root). The former nesting under
 * `/log-sources/streams/...` was removed in the log-streams surface rename —
 * no aliases.
 */
export declare const ListLogStreamsInputSchema: z.ZodObject<{
    logSourceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const ListLogStreamsOutputSchema: z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        status: z.ZodEnum<{
            active: "active";
            error: "error";
            pending: "pending";
            provisioning: "provisioning";
        }>;
        errorMessage: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        createdAt: z.ZodString;
        endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                hostPort: "hostPort";
                url: "url";
            }>;
            label: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            extraCredential: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListLogStreamsInput = z.infer<typeof ListLogStreamsInputSchema>;
export type ListLogStreamsOutput = z.infer<typeof ListLogStreamsOutputSchema>;
export declare const listLogStreams: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    logSourceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        status: z.ZodEnum<{
            active: "active";
            error: "error";
            pending: "pending";
            provisioning: "provisioning";
        }>;
        errorMessage: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        createdAt: z.ZodString;
        endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                hostPort: "hostPort";
                url: "url";
            }>;
            label: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            extraCredential: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const CreateLogStreamInputSchema: z.ZodObject<{
    logSourceId: z.ZodString;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strict>;
export declare const CreateLogStreamOutputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export type CreateLogStreamInput = z.infer<typeof CreateLogStreamInputSchema>;
export type CreateLogStreamOutput = z.infer<typeof CreateLogStreamOutputSchema>;
export declare const createLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    logSourceId: z.ZodString;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strict>, z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, "api">;
export declare const GetLogStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export declare const GetLogStreamOutputSchema: z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        status: z.ZodEnum<{
            active: "active";
            error: "error";
            pending: "pending";
            provisioning: "provisioning";
        }>;
        errorMessage: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        createdAt: z.ZodString;
        endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                hostPort: "hostPort";
                url: "url";
            }>;
            label: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            extraCredential: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetLogStreamInput = z.infer<typeof GetLogStreamInputSchema>;
export type GetLogStreamOutput = z.infer<typeof GetLogStreamOutputSchema>;
export declare const getLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        status: z.ZodEnum<{
            active: "active";
            error: "error";
            pending: "pending";
            provisioning: "provisioning";
        }>;
        errorMessage: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        createdAt: z.ZodString;
        endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                hostPort: "hostPort";
                url: "url";
            }>;
            label: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            extraCredential: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const UpdateLogStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const UpdateLogStreamOutputSchema: z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        status: z.ZodEnum<{
            active: "active";
            error: "error";
            pending: "pending";
            provisioning: "provisioning";
        }>;
        errorMessage: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        createdAt: z.ZodString;
        endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                hostPort: "hostPort";
                url: "url";
            }>;
            label: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            extraCredential: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateLogStreamInput = z.infer<typeof UpdateLogStreamInputSchema>;
export type UpdateLogStreamOutput = z.infer<typeof UpdateLogStreamOutputSchema>;
export declare const updateLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>, z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        status: z.ZodEnum<{
            active: "active";
            error: "error";
            pending: "pending";
            provisioning: "provisioning";
        }>;
        errorMessage: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        createdAt: z.ZodString;
        endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                hostPort: "hostPort";
                url: "url";
            }>;
            label: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            extraCredential: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const DeleteLogStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteLogStreamOutputSchema: z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteLogStreamInput = z.infer<typeof DeleteLogStreamInputSchema>;
export type DeleteLogStreamOutput = z.infer<typeof DeleteLogStreamOutputSchema>;
export declare const deleteLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const ReassignLogStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
    targetLogSourceId: z.ZodString;
}, z.core.$strict>;
export declare const ReassignLogStreamOutputSchema: z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        status: z.ZodEnum<{
            active: "active";
            error: "error";
            pending: "pending";
            provisioning: "provisioning";
        }>;
        errorMessage: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        createdAt: z.ZodString;
        endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                hostPort: "hostPort";
                url: "url";
            }>;
            label: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            extraCredential: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ReassignLogStreamInput = z.infer<typeof ReassignLogStreamInputSchema>;
export type ReassignLogStreamOutput = z.infer<typeof ReassignLogStreamOutputSchema>;
export declare const reassignLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
    targetLogSourceId: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        status: z.ZodEnum<{
            active: "active";
            error: "error";
            pending: "pending";
            provisioning: "provisioning";
        }>;
        errorMessage: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        createdAt: z.ZodString;
        endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<{
                hostPort: "hostPort";
                url: "url";
            }>;
            label: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            extraCredential: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const logStreamsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        logSourceId: z.ZodString;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        streams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            logSourceId: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
            config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            status: z.ZodEnum<{
                active: "active";
                error: "error";
                pending: "pending";
                provisioning: "provisioning";
            }>;
            errorMessage: z.ZodNullable<z.ZodString>;
            enabled: z.ZodBoolean;
            createdAt: z.ZodString;
            endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    hostPort: "hostPort";
                    url: "url";
                }>;
                label: z.ZodOptional<z.ZodString>;
                url: z.ZodOptional<z.ZodString>;
                host: z.ZodOptional<z.ZodString>;
                port: z.ZodOptional<z.ZodNumber>;
                description: z.ZodOptional<z.ZodString>;
                extraCredential: z.ZodOptional<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        logSourceId: z.ZodString;
        config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strict>, z.ZodObject<{
        streamId: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        stream: z.ZodObject<{
            id: z.ZodString;
            logSourceId: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
            config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            status: z.ZodEnum<{
                active: "active";
                error: "error";
                pending: "pending";
                provisioning: "provisioning";
            }>;
            errorMessage: z.ZodNullable<z.ZodString>;
            enabled: z.ZodBoolean;
            createdAt: z.ZodString;
            endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    hostPort: "hostPort";
                    url: "url";
                }>;
                label: z.ZodOptional<z.ZodString>;
                url: z.ZodOptional<z.ZodString>;
                host: z.ZodOptional<z.ZodString>;
                port: z.ZodOptional<z.ZodNumber>;
                description: z.ZodOptional<z.ZodString>;
                extraCredential: z.ZodOptional<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>, z.ZodObject<{
        stream: z.ZodObject<{
            id: z.ZodString;
            logSourceId: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
            config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            status: z.ZodEnum<{
                active: "active";
                error: "error";
                pending: "pending";
                provisioning: "provisioning";
            }>;
            errorMessage: z.ZodNullable<z.ZodString>;
            enabled: z.ZodBoolean;
            createdAt: z.ZodString;
            endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    hostPort: "hostPort";
                    url: "url";
                }>;
                label: z.ZodOptional<z.ZodString>;
                url: z.ZodOptional<z.ZodString>;
                host: z.ZodOptional<z.ZodString>;
                port: z.ZodOptional<z.ZodNumber>;
                description: z.ZodOptional<z.ZodString>;
                extraCredential: z.ZodOptional<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        success: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly reassign: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
        targetLogSourceId: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        stream: z.ZodObject<{
            id: z.ZodString;
            logSourceId: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
            config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            status: z.ZodEnum<{
                active: "active";
                error: "error";
                pending: "pending";
                provisioning: "provisioning";
            }>;
            errorMessage: z.ZodNullable<z.ZodString>;
            enabled: z.ZodBoolean;
            createdAt: z.ZodString;
            endpointCards: z.ZodOptional<z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<{
                    hostPort: "hostPort";
                    url: "url";
                }>;
                label: z.ZodOptional<z.ZodString>;
                url: z.ZodOptional<z.ZodString>;
                host: z.ZodOptional<z.ZodString>;
                port: z.ZodOptional<z.ZodNumber>;
                description: z.ZodOptional<z.ZodString>;
                extraCredential: z.ZodOptional<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
