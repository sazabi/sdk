import type { AnyContractRouter } from "@orpc/contract";
export interface GenerateOpenApiSpecOptions {
    title: string;
    description: string;
    servers: {
        url: string;
        description: string;
    }[];
}
export declare const generateOpenApiSpec: (contract: AnyContractRouter, options: GenerateOpenApiSpecOptions) => Promise<import("openapi-types").OpenAPIV3_1.Document<{}>>;
type OpenApiSpecWithPaths = {
    paths?: Record<string, Record<string, {
        responses?: Record<string, {
            content?: unknown;
            description?: string;
        }>;
    }>>;
};
/**
 * Per RFC 9110, 204 No Content responses MUST NOT include a message body.
 */
export declare const stripContentFrom204Responses: <T extends OpenApiSpecWithPaths>(spec: T) => T;
export {};
