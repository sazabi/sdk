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
