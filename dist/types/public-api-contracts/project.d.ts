import { z } from "zod";
/**
 * Project region enum matching the full database schema.
 */
export declare const ProjectRegionSchema: z.ZodEnum<{
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
/**
 * Shared project representation for public API responses.
 */
export declare const ProjectSchema: z.ZodObject<{
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
/**
 * Legacy schema for the current authenticated project response.
 */
export declare const GetProjectOutputSchema: z.ZodObject<{
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
/**
 * Input schema for listing projects.
 */
export declare const ListProjectsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for listing projects.
 */
export declare const ListProjectsOutputSchema: z.ZodObject<{
    projects: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
/**
 * Input schema for getting one project.
 */
export declare const GetProjectInputSchema: z.ZodObject<{
    projectId: z.ZodString;
}, z.core.$strip>;
/**
 * Input schema for creating one project.
 */
export declare const CreateProjectInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
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
/**
 * Output schema for creating one project.
 */
export declare const CreateProjectOutputSchema: z.ZodObject<{
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
}, z.core.$strip>;
/**
 * Output schema for getting one project.
 */
export declare const GetProjectDetailsOutputSchema: z.ZodObject<{
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
}, z.core.$strip>;
/**
 * Contract-first projects.list operation.
 */
export declare const listProjects: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    projects: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
/**
 * Contract-first projects.get operation.
 */
export declare const getProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodString;
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
}, z.core.$strip>, "api">;
/**
 * Contract-first projects.create operation.
 */
export declare const createProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
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
}, z.core.$strip>, "api">;
/**
 * Input schema for updating (renaming) one project.
 */
export declare const UpdateProjectInputSchema: z.ZodObject<{
    projectId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Output schema for updating one project.
 */
export declare const UpdateProjectOutputSchema: z.ZodObject<{
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
}, z.core.$strip>;
/**
 * Contract-first projects.update operation.
 *
 * Rename-only: dashboard-only fields (code review settings, git commit
 * author, etc.) are intentionally out of scope for the public API.
 */
export declare const updateProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
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
}, z.core.$strip>, "api">;
/**
 * Input schema for deleting one project.
 */
export declare const DeleteProjectInputSchema: z.ZodObject<{
    projectId: z.ZodString;
}, z.core.$strip>;
/**
 * Output schema for deleting one project.
 */
export declare const DeleteProjectOutputSchema: z.ZodVoid;
/**
 * Contract-first projects.delete operation.
 *
 * Soft-deletes the project and cascades cleanup to project-scoped
 * notification preferences, Slack channel reassignment, MCP connections, and
 * repo mappings, mirroring the dashboard tRPC delete handler.
 */
export declare const deleteProject: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodString;
}, z.core.$strip>, z.ZodVoid, "api">;
/**
 * Projects contract tree.
 */
export declare const projectsContract: {
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        projects: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodString;
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
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
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
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
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
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodString;
    }, z.core.$strip>, z.ZodVoid, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
export type ProjectRegion = z.infer<typeof ProjectRegionSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type GetProjectOutput = z.infer<typeof GetProjectOutputSchema>;
export type ListProjectsInput = z.infer<typeof ListProjectsInputSchema>;
export type ListProjectsOutput = z.infer<typeof ListProjectsOutputSchema>;
export type GetProjectInput = z.infer<typeof GetProjectInputSchema>;
export type GetProjectDetailsOutput = z.infer<typeof GetProjectDetailsOutputSchema>;
export type CreateProjectInput = z.infer<typeof CreateProjectInputSchema>;
export type CreateProjectOutput = z.infer<typeof CreateProjectOutputSchema>;
export type UpdateProjectInput = z.infer<typeof UpdateProjectInputSchema>;
export type UpdateProjectOutput = z.infer<typeof UpdateProjectOutputSchema>;
export type DeleteProjectInput = z.infer<typeof DeleteProjectInputSchema>;
export type DeleteProjectOutput = z.infer<typeof DeleteProjectOutputSchema>;
