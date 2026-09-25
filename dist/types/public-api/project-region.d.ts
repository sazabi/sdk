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
export type ProjectRegion = z.infer<typeof ProjectRegionSchema>;
