export declare const getSsoConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
    organizationId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
    connection: import("zod").ZodNullable<import("zod").ZodObject<{
        id: import("zod").ZodString;
        providerId: import("zod").ZodString;
        protocol: import("zod").ZodEnum<{
            oidc: "oidc";
            saml: "saml";
        }>;
        issuer: import("zod").ZodString;
        oidc: import("zod").ZodNullable<import("zod").ZodObject<{
            clientId: import("zod").ZodString;
            hasClientSecret: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>>;
        saml: import("zod").ZodNullable<import("zod").ZodObject<{
            ssoUrl: import("zod").ZodString;
            certificates: import("zod").ZodArray<import("zod").ZodObject<{
                fingerprint: import("zod").ZodString;
                notAfter: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            metadataUrl: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>>;
        defaultRole: import("zod").ZodEnum<{
            member: "member";
            viewer: "viewer";
        }>;
        jitEnabled: import("zod").ZodBoolean;
        scimOnly: import("zod").ZodBoolean;
        maxSessionAgeSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
        testedAt: import("zod").ZodNullable<import("zod").ZodString>;
        disabledAt: import("zod").ZodNullable<import("zod").ZodString>;
        createdAt: import("zod").ZodString;
        updatedAt: import("zod").ZodString;
    }, import("zod/v4/core").$strip>>;
    serviceProvider: import("zod").ZodObject<{
        entityId: import("zod").ZodString;
        acsUrl: import("zod").ZodString;
        metadataUrl: import("zod").ZodString;
        oidcRedirectUrl: import("zod").ZodString;
        initiateLoginUrl: import("zod").ZodString;
        certificate: import("zod").ZodNullable<import("zod").ZodString>;
    }, import("zod/v4/core").$strip>;
}, import("zod/v4/core").$strip>, "api">;
export declare const upsertSsoConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
    organizationId: import("zod").ZodOptional<import("zod").ZodString>;
    protocol: import("zod").ZodEnum<{
        oidc: "oidc";
        saml: "saml";
    }>;
    issuer: import("zod").ZodOptional<import("zod").ZodString>;
    oidc: import("zod").ZodOptional<import("zod").ZodObject<{
        clientId: import("zod").ZodOptional<import("zod").ZodString>;
        clientSecret: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod/v4/core").$strip>>;
    saml: import("zod").ZodOptional<import("zod").ZodObject<{
        ssoUrl: import("zod").ZodOptional<import("zod").ZodURL>;
        certificates: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        metadataUrl: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodURL>>;
    }, import("zod/v4/core").$strip>>;
    defaultRole: import("zod").ZodOptional<import("zod").ZodEnum<{
        member: "member";
        viewer: "viewer";
    }>>;
    jitEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
    scimOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
    maxSessionAgeSeconds: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
    disabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
    connection: import("zod").ZodObject<{
        id: import("zod").ZodString;
        providerId: import("zod").ZodString;
        protocol: import("zod").ZodEnum<{
            oidc: "oidc";
            saml: "saml";
        }>;
        issuer: import("zod").ZodString;
        oidc: import("zod").ZodNullable<import("zod").ZodObject<{
            clientId: import("zod").ZodString;
            hasClientSecret: import("zod").ZodBoolean;
        }, import("zod/v4/core").$strip>>;
        saml: import("zod").ZodNullable<import("zod").ZodObject<{
            ssoUrl: import("zod").ZodString;
            certificates: import("zod").ZodArray<import("zod").ZodObject<{
                fingerprint: import("zod").ZodString;
                notAfter: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>>;
            metadataUrl: import("zod").ZodNullable<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>>;
        defaultRole: import("zod").ZodEnum<{
            member: "member";
            viewer: "viewer";
        }>;
        jitEnabled: import("zod").ZodBoolean;
        scimOnly: import("zod").ZodBoolean;
        maxSessionAgeSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
        testedAt: import("zod").ZodNullable<import("zod").ZodString>;
        disabledAt: import("zod").ZodNullable<import("zod").ZodString>;
        createdAt: import("zod").ZodString;
        updatedAt: import("zod").ZodString;
    }, import("zod/v4/core").$strip>;
    created: import("zod").ZodBoolean;
}, import("zod/v4/core").$strip>, "api">;
export declare const deleteSsoConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
    organizationId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
    deleted: import("zod").ZodBoolean;
    endedAccessUserCount: import("zod").ZodNumber;
}, import("zod/v4/core").$strip>, "api">;
export declare const testSsoConnection: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
    organizationId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
    signInUrl: import("zod").ZodString;
    expiresAt: import("zod").ZodString;
}, import("zod/v4/core").$strip>, "api">;
export declare const getSsoStatus: import("../orpc-contracts/index.js").OperationDefinition<import("zod").ZodObject<{
    organizationId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
    connection: import("zod").ZodNullable<import("zod").ZodObject<{
        protocol: import("zod").ZodEnum<{
            oidc: "oidc";
            saml: "saml";
        }>;
        state: import("zod").ZodEnum<{
            active: "active";
            disabled: "disabled";
            untested: "untested";
        }>;
        testedAt: import("zod").ZodNullable<import("zod").ZodString>;
    }, import("zod/v4/core").$strip>>;
    domains: import("zod").ZodArray<import("zod").ZodObject<{
        domain: import("zod").ZodString;
        status: import("zod").ZodEnum<{
            lapsed: "lapsed";
            pending: "pending";
            verified: "verified";
        }>;
        verifiedAt: import("zod").ZodNullable<import("zod").ZodString>;
        enforceSso: import("zod").ZodBoolean;
    }, import("zod/v4/core").$strip>>;
    enforced: import("zod").ZodBoolean;
}, import("zod/v4/core").$strip>, "api">;
