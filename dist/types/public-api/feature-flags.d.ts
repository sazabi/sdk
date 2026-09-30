import { z } from "zod";
export declare const ResolveFeatureFlagsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ResolveFeatureFlagsInput = z.infer<typeof ResolveFeatureFlagsInputSchema>;
export declare const ResolveFeatureFlagsOutputSchema: z.ZodObject<{
    flags: z.ZodRecord<z.ZodString, z.ZodLiteral<true>>;
}, z.core.$strip>;
export type ResolveFeatureFlagsOutput = z.infer<typeof ResolveFeatureFlagsOutputSchema>;
export declare const resolveFeatureFlags: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    flags: z.ZodRecord<z.ZodString, z.ZodLiteral<true>>;
}, z.core.$strip>, "api">;
export declare const ResolvePublicFeatureFlagsInputSchema: z.ZodObject<{}, z.core.$strip>;
export type ResolvePublicFeatureFlagsInput = z.infer<typeof ResolvePublicFeatureFlagsInputSchema>;
export declare const ResolvePublicFeatureFlagsOutputSchema: z.ZodObject<{
    flags: z.ZodRecord<z.ZodString, z.ZodLiteral<true>>;
}, z.core.$strip>;
export type ResolvePublicFeatureFlagsOutput = z.infer<typeof ResolvePublicFeatureFlagsOutputSchema>;
/**
 * The anonymous flag channel: no credential, so it serves only flags the
 * catalog marks public-audience (anonymous Sazabi surfaces such as
 * www.sazabi.com) and never names a product flag. Responses are cacheable
 * (~60s), matching the flag freshness contract.
 */
export declare const resolvePublicFeatureFlags: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    flags: z.ZodRecord<z.ZodString, z.ZodLiteral<true>>;
}, z.core.$strip>, "api">;
