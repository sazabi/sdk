import { z } from "zod";
export declare const ListSsoBreakGlassOwnersInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
}, z.core.$strip>;
export declare const SetSsoBreakGlassOwnersInputSchema: z.ZodObject<{
    organizationId: z.ZodString;
    emails: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const listSsoBreakGlassOwners: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    owners: z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        email: z.ZodString;
        name: z.ZodString;
        designatedByUserId: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const setSsoBreakGlassOwners: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodString;
    emails: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    owners: z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        email: z.ZodString;
        name: z.ZodString;
        designatedByUserId: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
