import { z } from "zod";
export declare const ListSsoDomainsInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ClaimSsoDomainInputSchema: z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    domain: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
}, z.core.$strip>;
export declare const VerifySsoDomainInputSchema: z.ZodObject<{
    domain: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const RemoveSsoDomainInputSchema: z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        domain: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
    }, z.core.$strip>;
    query: z.ZodDefault<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodTransform<{
    domain: string;
    organizationId?: string | undefined;
}, {
    params: {
        domain: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>;
export declare const listSsoDomains: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    domains: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        domain: z.ZodString;
        status: z.ZodEnum<{
            lapsed: "lapsed";
            pending: "pending";
            verified: "verified";
        }>;
        verificationRecord: z.ZodObject<{
            type: z.ZodLiteral<"TXT">;
            name: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>;
        verifiedAt: z.ZodNullable<z.ZodString>;
        lastCheckedAt: z.ZodNullable<z.ZodString>;
        enforceSso: z.ZodBoolean;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const claimSsoDomain: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    organizationId: z.ZodOptional<z.ZodString>;
    domain: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    domain: z.ZodObject<{
        id: z.ZodString;
        domain: z.ZodString;
        status: z.ZodEnum<{
            lapsed: "lapsed";
            pending: "pending";
            verified: "verified";
        }>;
        verificationRecord: z.ZodObject<{
            type: z.ZodLiteral<"TXT">;
            name: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>;
        verifiedAt: z.ZodNullable<z.ZodString>;
        lastCheckedAt: z.ZodNullable<z.ZodString>;
        enforceSso: z.ZodBoolean;
        createdAt: z.ZodString;
    }, z.core.$strip>;
    created: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const verifySsoDomain: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    domain: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
    organizationId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    domain: z.ZodObject<{
        id: z.ZodString;
        domain: z.ZodString;
        status: z.ZodEnum<{
            lapsed: "lapsed";
            pending: "pending";
            verified: "verified";
        }>;
        verificationRecord: z.ZodObject<{
            type: z.ZodLiteral<"TXT">;
            name: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>;
        verifiedAt: z.ZodNullable<z.ZodString>;
        lastCheckedAt: z.ZodNullable<z.ZodString>;
        enforceSso: z.ZodBoolean;
        createdAt: z.ZodString;
    }, z.core.$strip>;
    outcome: z.ZodEnum<{
        dns_error: "dns_error";
        found: "found";
        not_found: "not_found";
    }>;
}, z.core.$strip>, "api">;
export declare const removeSsoDomain: import("../orpc-contracts/index.js").OperationDefinition<z.ZodPipe<z.ZodObject<{
    params: z.ZodObject<{
        domain: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
    }, z.core.$strip>;
    query: z.ZodDefault<z.ZodObject<{
        organizationId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodTransform<{
    domain: string;
    organizationId?: string | undefined;
}, {
    params: {
        domain: string;
    };
    query: {
        organizationId?: string | undefined;
    };
}>>, z.ZodObject<{
    domainId: z.ZodString;
}, z.core.$strip>, "api">;
