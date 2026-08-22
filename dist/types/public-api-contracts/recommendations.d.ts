import { z } from "zod";
export declare const RecommendationKindSchema: z.ZodEnum<{
    integration: "integration";
    log_source: "log_source";
    mcp_connector: "mcp_connector";
    sandbox_cli: "sandbox_cli";
}>;
export type RecommendationKind = z.infer<typeof RecommendationKindSchema>;
export declare const RecommendationStatusSchema: z.ZodEnum<{
    connected: "connected";
    recommended: "recommended";
}>;
export type RecommendationStatus = z.infer<typeof RecommendationStatusSchema>;
export declare const RecommendationSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        integration: "integration";
        log_source: "log_source";
        mcp_connector: "mcp_connector";
        sandbox_cli: "sandbox_cli";
    }>;
    targetId: z.ZodString;
    status: z.ZodEnum<{
        connected: "connected";
        recommended: "recommended";
    }>;
    roiScore: z.ZodNumber;
    priority: z.ZodNumber;
}, z.core.$strip>;
export type Recommendation = z.infer<typeof RecommendationSchema>;
export declare const ListRecommendationsInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListRecommendationsInput = z.infer<typeof ListRecommendationsInputSchema>;
export declare const ListRecommendationsOutputSchema: z.ZodObject<{
    recommendations: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            integration: "integration";
            log_source: "log_source";
            mcp_connector: "mcp_connector";
            sandbox_cli: "sandbox_cli";
        }>;
        targetId: z.ZodString;
        status: z.ZodEnum<{
            connected: "connected";
            recommended: "recommended";
        }>;
        roiScore: z.ZodNumber;
        priority: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListRecommendationsOutput = z.infer<typeof ListRecommendationsOutputSchema>;
export declare const listRecommendations: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    recommendations: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            integration: "integration";
            log_source: "log_source";
            mcp_connector: "mcp_connector";
            sandbox_cli: "sandbox_cli";
        }>;
        targetId: z.ZodString;
        status: z.ZodEnum<{
            connected: "connected";
            recommended: "recommended";
        }>;
        roiScore: z.ZodNumber;
        priority: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
