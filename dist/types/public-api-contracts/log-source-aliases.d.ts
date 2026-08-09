import { z } from "zod";
/** Supported data source type values derived from canonical catalog specs. */
export declare const LEGACY_LOG_SOURCE_TYPE_VALUES: readonly ["vercel", "cloudflare", "railway", "render", "fly_io", "netlify", "supabase", "digital_ocean", "inngest", "trigger_dev", "temporal", "mastra", "neon", "langchain", "daytona", "e2b", "cloudwatch", "convex", "datadog", "sentry", "sentry_platform", "openrouter", "posthog", "posthog_sdk", "gcp", "otel", "otel_metrics", "fluent_bit", "vector", "grafana_alloy", "otel_collector", "cloudflare_workers", "elastic_cloud", "porter", "respan", "plain", "prometheus", "webhook_events", "claude_code", "codex"];
/**
 * Instance setup modes. `managed` instances hold vendor credentials that
 * Sazabi uses to provision delivery; `connectionless` instances mint a keyed
 * intake endpoint and the sender pushes to it directly.
 */
export declare const LegacyLogSourceModeEnum: z.ZodEnum<{
    connectionless: "connectionless";
    managed: "managed";
}>;
/**
 * A data source type with its supported setup modes and metadata requirements.
 */
export declare const LegacyLogSourceTypeInfoSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    modes: z.ZodArray<z.ZodEnum<{
        connectionless: "connectionless";
        managed: "managed";
    }>>;
    metadataFields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        required: z.ZodBoolean;
        sensitive: z.ZodBoolean;
        description: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    setupSkill: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
/**
 * One platform-owned endpoint card for a keyed stream (ENG-5344). The card's
 * contents are computed server-side — the single intake-URL assembler lives
 * in the platform — and clients render them verbatim. `url` cards carry the
 * complete keyed URL (the hostname authenticates); `hostPort` cards carry a
 * non-keyed listener plus the credential the sender must attach.
 */
export declare const LegacyLogSourceEndpointCardSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type LegacyLogSourceEndpointCard = z.infer<typeof LegacyLogSourceEndpointCardSchema>;
/**
 * A data source stream record — one provisioned event flow under an instance.
 */
export declare const LegacyLogStreamSchema: z.ZodObject<{
    id: z.ZodString;
    instanceId: z.ZodString;
    displayName: z.ZodString;
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
/**
 * A data source instance record — the root resource of the data-source
 * anatomy. `mode` is `managed` (Sazabi holds vendor credentials and
 * provisions delivery) or `connectionless` (the sender pushes to a keyed
 * Sazabi intake endpoint).
 */
export declare const LegacyLogSourceSchema: z.ZodObject<{
    id: z.ZodString;
    dataSourceType: z.ZodEnum<{
        claude_code: "claude_code";
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
        codex: "codex";
        convex: "convex";
        datadog: "datadog";
        daytona: "daytona";
        digital_ocean: "digital_ocean";
        e2b: "e2b";
        elastic_cloud: "elastic_cloud";
        fluent_bit: "fluent_bit";
        fly_io: "fly_io";
        gcp: "gcp";
        grafana_alloy: "grafana_alloy";
        inngest: "inngest";
        langchain: "langchain";
        mastra: "mastra";
        neon: "neon";
        netlify: "netlify";
        openrouter: "openrouter";
        otel: "otel";
        otel_collector: "otel_collector";
        otel_metrics: "otel_metrics";
        plain: "plain";
        porter: "porter";
        posthog: "posthog";
        posthog_sdk: "posthog_sdk";
        prometheus: "prometheus";
        railway: "railway";
        render: "render";
        respan: "respan";
        sentry: "sentry";
        sentry_platform: "sentry_platform";
        supabase: "supabase";
        temporal: "temporal";
        trigger_dev: "trigger_dev";
        vector: "vector";
        vercel: "vercel";
        webhook_events: "webhook_events";
    }>;
    mode: z.ZodEnum<{
        connectionless: "connectionless";
        managed: "managed";
    }>;
    name: z.ZodNullable<z.ZodString>;
    streamCount: z.ZodNumber;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * A data source instance with its streams expanded. Streams that carry their
 * own delivery key include server-computed `endpointCards`.
 */
export declare const LegacyLogSourceDetailSchema: z.ZodObject<{
    id: z.ZodString;
    dataSourceType: z.ZodEnum<{
        claude_code: "claude_code";
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
        codex: "codex";
        convex: "convex";
        datadog: "datadog";
        daytona: "daytona";
        digital_ocean: "digital_ocean";
        e2b: "e2b";
        elastic_cloud: "elastic_cloud";
        fluent_bit: "fluent_bit";
        fly_io: "fly_io";
        gcp: "gcp";
        grafana_alloy: "grafana_alloy";
        inngest: "inngest";
        langchain: "langchain";
        mastra: "mastra";
        neon: "neon";
        netlify: "netlify";
        openrouter: "openrouter";
        otel: "otel";
        otel_collector: "otel_collector";
        otel_metrics: "otel_metrics";
        plain: "plain";
        porter: "porter";
        posthog: "posthog";
        posthog_sdk: "posthog_sdk";
        prometheus: "prometheus";
        railway: "railway";
        render: "render";
        respan: "respan";
        sentry: "sentry";
        sentry_platform: "sentry_platform";
        supabase: "supabase";
        temporal: "temporal";
        trigger_dev: "trigger_dev";
        vector: "vector";
        vercel: "vercel";
        webhook_events: "webhook_events";
    }>;
    mode: z.ZodEnum<{
        connectionless: "connectionless";
        managed: "managed";
    }>;
    name: z.ZodNullable<z.ZodString>;
    streamCount: z.ZodNumber;
    createdAt: z.ZodString;
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        instanceId: z.ZodString;
        displayName: z.ZodString;
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
export declare const ListLegacyLogSourceTypesInputSchema: z.ZodObject<{}, z.core.$strip>;
export declare const ListLegacyLogSourceTypesOutputSchema: z.ZodObject<{
    types: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        modes: z.ZodArray<z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>>;
        metadataFields: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            required: z.ZodBoolean;
            sensitive: z.ZodBoolean;
            description: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        setupSkill: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListLegacyLogSourceTypesOutput = z.infer<typeof ListLegacyLogSourceTypesOutputSchema>;
export declare const listLegacyLogSourceTypes: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    types: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        modes: z.ZodArray<z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>>;
        metadataFields: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            required: z.ZodBoolean;
            sensitive: z.ZodBoolean;
            description: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        setupSkill: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const ListLegacyLogSourcesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    dataSourceType: z.ZodOptional<z.ZodEnum<{
        claude_code: "claude_code";
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
        codex: "codex";
        convex: "convex";
        datadog: "datadog";
        daytona: "daytona";
        digital_ocean: "digital_ocean";
        e2b: "e2b";
        elastic_cloud: "elastic_cloud";
        fluent_bit: "fluent_bit";
        fly_io: "fly_io";
        gcp: "gcp";
        grafana_alloy: "grafana_alloy";
        inngest: "inngest";
        langchain: "langchain";
        mastra: "mastra";
        neon: "neon";
        netlify: "netlify";
        openrouter: "openrouter";
        otel: "otel";
        otel_collector: "otel_collector";
        otel_metrics: "otel_metrics";
        plain: "plain";
        porter: "porter";
        posthog: "posthog";
        posthog_sdk: "posthog_sdk";
        prometheus: "prometheus";
        railway: "railway";
        render: "render";
        respan: "respan";
        sentry: "sentry";
        sentry_platform: "sentry_platform";
        supabase: "supabase";
        temporal: "temporal";
        trigger_dev: "trigger_dev";
        vector: "vector";
        vercel: "vercel";
        webhook_events: "webhook_events";
    }>>;
}, z.core.$strip>;
export declare const ListLegacyLogSourcesOutputSchema: z.ZodObject<{
    instances: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>;
        name: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListLegacyLogSourcesInput = z.infer<typeof ListLegacyLogSourcesInputSchema>;
export type ListLegacyLogSourcesOutput = z.infer<typeof ListLegacyLogSourcesOutputSchema>;
export declare const listLegacyLogSources: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    dataSourceType: z.ZodOptional<z.ZodEnum<{
        claude_code: "claude_code";
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
        codex: "codex";
        convex: "convex";
        datadog: "datadog";
        daytona: "daytona";
        digital_ocean: "digital_ocean";
        e2b: "e2b";
        elastic_cloud: "elastic_cloud";
        fluent_bit: "fluent_bit";
        fly_io: "fly_io";
        gcp: "gcp";
        grafana_alloy: "grafana_alloy";
        inngest: "inngest";
        langchain: "langchain";
        mastra: "mastra";
        neon: "neon";
        netlify: "netlify";
        openrouter: "openrouter";
        otel: "otel";
        otel_collector: "otel_collector";
        otel_metrics: "otel_metrics";
        plain: "plain";
        porter: "porter";
        posthog: "posthog";
        posthog_sdk: "posthog_sdk";
        prometheus: "prometheus";
        railway: "railway";
        render: "render";
        respan: "respan";
        sentry: "sentry";
        sentry_platform: "sentry_platform";
        supabase: "supabase";
        temporal: "temporal";
        trigger_dev: "trigger_dev";
        vector: "vector";
        vercel: "vercel";
        webhook_events: "webhook_events";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    instances: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>;
        name: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const CreateLegacyLogSourceInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    dataSourceType: z.ZodEnum<{
        claude_code: "claude_code";
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
        codex: "codex";
        convex: "convex";
        datadog: "datadog";
        daytona: "daytona";
        digital_ocean: "digital_ocean";
        e2b: "e2b";
        elastic_cloud: "elastic_cloud";
        fluent_bit: "fluent_bit";
        fly_io: "fly_io";
        gcp: "gcp";
        grafana_alloy: "grafana_alloy";
        inngest: "inngest";
        langchain: "langchain";
        mastra: "mastra";
        neon: "neon";
        netlify: "netlify";
        openrouter: "openrouter";
        otel: "otel";
        otel_collector: "otel_collector";
        otel_metrics: "otel_metrics";
        plain: "plain";
        porter: "porter";
        posthog: "posthog";
        posthog_sdk: "posthog_sdk";
        prometheus: "prometheus";
        railway: "railway";
        render: "render";
        respan: "respan";
        sentry: "sentry";
        sentry_platform: "sentry_platform";
        supabase: "supabase";
        temporal: "temporal";
        trigger_dev: "trigger_dev";
        vector: "vector";
        vercel: "vercel";
        webhook_events: "webhook_events";
    }>;
    mode: z.ZodOptional<z.ZodEnum<{
        connectionless: "connectionless";
        managed: "managed";
    }>>;
    name: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export declare const CreateLegacyLogSourceOutputSchema: z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>;
        name: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>;
    streamId: z.ZodOptional<z.ZodString>;
    publicKey: z.ZodOptional<z.ZodString>;
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
export type CreateLegacyLogSourceInput = z.infer<typeof CreateLegacyLogSourceInputSchema>;
export type CreateLegacyLogSourceOutput = z.infer<typeof CreateLegacyLogSourceOutputSchema>;
export declare const createLegacyLogSource: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    dataSourceType: z.ZodEnum<{
        claude_code: "claude_code";
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
        codex: "codex";
        convex: "convex";
        datadog: "datadog";
        daytona: "daytona";
        digital_ocean: "digital_ocean";
        e2b: "e2b";
        elastic_cloud: "elastic_cloud";
        fluent_bit: "fluent_bit";
        fly_io: "fly_io";
        gcp: "gcp";
        grafana_alloy: "grafana_alloy";
        inngest: "inngest";
        langchain: "langchain";
        mastra: "mastra";
        neon: "neon";
        netlify: "netlify";
        openrouter: "openrouter";
        otel: "otel";
        otel_collector: "otel_collector";
        otel_metrics: "otel_metrics";
        plain: "plain";
        porter: "porter";
        posthog: "posthog";
        posthog_sdk: "posthog_sdk";
        prometheus: "prometheus";
        railway: "railway";
        render: "render";
        respan: "respan";
        sentry: "sentry";
        sentry_platform: "sentry_platform";
        supabase: "supabase";
        temporal: "temporal";
        trigger_dev: "trigger_dev";
        vector: "vector";
        vercel: "vercel";
        webhook_events: "webhook_events";
    }>;
    mode: z.ZodOptional<z.ZodEnum<{
        connectionless: "connectionless";
        managed: "managed";
    }>>;
    name: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>, z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>;
        name: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>;
    streamId: z.ZodOptional<z.ZodString>;
    publicKey: z.ZodOptional<z.ZodString>;
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
}, z.core.$strip>, "api">;
export declare const GetLegacyLogSourceInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
}, z.core.$strip>;
export declare const GetLegacyLogSourceOutputSchema: z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>;
        name: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
        streams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            instanceId: z.ZodString;
            displayName: z.ZodString;
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
}, z.core.$strip>;
export type GetLegacyLogSourceInput = z.infer<typeof GetLegacyLogSourceInputSchema>;
export type GetLegacyLogSourceOutput = z.infer<typeof GetLegacyLogSourceOutputSchema>;
export declare const getLegacyLogSource: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>;
        name: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
        streams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            instanceId: z.ZodString;
            displayName: z.ZodString;
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
}, z.core.$strip>, "api">;
export declare const UpdateLegacyLogSourceInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateLegacyLogSourceOutputSchema: z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>;
        name: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateLegacyLogSourceInput = z.infer<typeof UpdateLegacyLogSourceInputSchema>;
export type UpdateLegacyLogSourceOutput = z.infer<typeof UpdateLegacyLogSourceOutputSchema>;
export declare const updateLegacyLogSource: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>;
        name: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const DeleteLegacyLogSourceInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteLegacyLogSourceOutputSchema: z.ZodObject<{
    success: z.ZodBoolean;
    teardownError: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type DeleteLegacyLogSourceInput = z.infer<typeof DeleteLegacyLogSourceInputSchema>;
export type DeleteLegacyLogSourceOutput = z.infer<typeof DeleteLegacyLogSourceOutputSchema>;
export declare const deleteLegacyLogSource: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodBoolean;
    teardownError: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const ListLegacyLogStreamsInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const ListLegacyLogStreamsOutputSchema: z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        instanceId: z.ZodString;
        displayName: z.ZodString;
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
export type ListLegacyLogStreamsInput = z.infer<typeof ListLegacyLogStreamsInputSchema>;
export type ListLegacyLogStreamsOutput = z.infer<typeof ListLegacyLogStreamsOutputSchema>;
export declare const listLegacyLogStreams: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        instanceId: z.ZodString;
        displayName: z.ZodString;
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
export declare const CreateLegacyLogStreamInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
    displayName: z.ZodString;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export declare const CreateLegacyLogStreamOutputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export type CreateLegacyLogStreamInput = z.infer<typeof CreateLegacyLogStreamInputSchema>;
export type CreateLegacyLogStreamOutput = z.infer<typeof CreateLegacyLogStreamOutputSchema>;
export declare const createLegacyLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
    displayName: z.ZodString;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>, z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, "api">;
export declare const GetLegacyLogStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export declare const GetLegacyLogStreamOutputSchema: z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        instanceId: z.ZodString;
        displayName: z.ZodString;
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
export type GetLegacyLogStreamInput = z.infer<typeof GetLegacyLogStreamInputSchema>;
export type GetLegacyLogStreamOutput = z.infer<typeof GetLegacyLogStreamOutputSchema>;
export declare const getLegacyLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        instanceId: z.ZodString;
        displayName: z.ZodString;
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
export declare const UpdateLegacyLogStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
    displayName: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateLegacyLogStreamOutputSchema: z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        instanceId: z.ZodString;
        displayName: z.ZodString;
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
export type UpdateLegacyLogStreamInput = z.infer<typeof UpdateLegacyLogStreamInputSchema>;
export type UpdateLegacyLogStreamOutput = z.infer<typeof UpdateLegacyLogStreamOutputSchema>;
export declare const updateLegacyLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
    displayName: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        instanceId: z.ZodString;
        displayName: z.ZodString;
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
export declare const DeleteLegacyLogStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteLegacyLogStreamOutputSchema: z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteLegacyLogStreamInput = z.infer<typeof DeleteLegacyLogStreamInputSchema>;
export type DeleteLegacyLogStreamOutput = z.infer<typeof DeleteLegacyLogStreamOutputSchema>;
export declare const deleteLegacyLogStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const legacyLogSourcesContract: {
    readonly listTypes: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        types: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            modes: z.ZodArray<z.ZodEnum<{
                connectionless: "connectionless";
                managed: "managed";
            }>>;
            metadataFields: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                required: z.ZodBoolean;
                sensitive: z.ZodBoolean;
                description: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            setupSkill: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listInstances: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        dataSourceType: z.ZodOptional<z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        instances: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            dataSourceType: z.ZodEnum<{
                claude_code: "claude_code";
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
                codex: "codex";
                convex: "convex";
                datadog: "datadog";
                daytona: "daytona";
                digital_ocean: "digital_ocean";
                e2b: "e2b";
                elastic_cloud: "elastic_cloud";
                fluent_bit: "fluent_bit";
                fly_io: "fly_io";
                gcp: "gcp";
                grafana_alloy: "grafana_alloy";
                inngest: "inngest";
                langchain: "langchain";
                mastra: "mastra";
                neon: "neon";
                netlify: "netlify";
                openrouter: "openrouter";
                otel: "otel";
                otel_collector: "otel_collector";
                otel_metrics: "otel_metrics";
                plain: "plain";
                porter: "porter";
                posthog: "posthog";
                posthog_sdk: "posthog_sdk";
                prometheus: "prometheus";
                railway: "railway";
                render: "render";
                respan: "respan";
                sentry: "sentry";
                sentry_platform: "sentry_platform";
                supabase: "supabase";
                temporal: "temporal";
                trigger_dev: "trigger_dev";
                vector: "vector";
                vercel: "vercel";
                webhook_events: "webhook_events";
            }>;
            mode: z.ZodEnum<{
                connectionless: "connectionless";
                managed: "managed";
            }>;
            name: z.ZodNullable<z.ZodString>;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly createInstance: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        dataSourceType: z.ZodEnum<{
            claude_code: "claude_code";
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
            codex: "codex";
            convex: "convex";
            datadog: "datadog";
            daytona: "daytona";
            digital_ocean: "digital_ocean";
            e2b: "e2b";
            elastic_cloud: "elastic_cloud";
            fluent_bit: "fluent_bit";
            fly_io: "fly_io";
            gcp: "gcp";
            grafana_alloy: "grafana_alloy";
            inngest: "inngest";
            langchain: "langchain";
            mastra: "mastra";
            neon: "neon";
            netlify: "netlify";
            openrouter: "openrouter";
            otel: "otel";
            otel_collector: "otel_collector";
            otel_metrics: "otel_metrics";
            plain: "plain";
            porter: "porter";
            posthog: "posthog";
            posthog_sdk: "posthog_sdk";
            prometheus: "prometheus";
            railway: "railway";
            render: "render";
            respan: "respan";
            sentry: "sentry";
            sentry_platform: "sentry_platform";
            supabase: "supabase";
            temporal: "temporal";
            trigger_dev: "trigger_dev";
            vector: "vector";
            vercel: "vercel";
            webhook_events: "webhook_events";
        }>;
        mode: z.ZodOptional<z.ZodEnum<{
            connectionless: "connectionless";
            managed: "managed";
        }>>;
        name: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>, z.ZodObject<{
        instance: z.ZodObject<{
            id: z.ZodString;
            dataSourceType: z.ZodEnum<{
                claude_code: "claude_code";
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
                codex: "codex";
                convex: "convex";
                datadog: "datadog";
                daytona: "daytona";
                digital_ocean: "digital_ocean";
                e2b: "e2b";
                elastic_cloud: "elastic_cloud";
                fluent_bit: "fluent_bit";
                fly_io: "fly_io";
                gcp: "gcp";
                grafana_alloy: "grafana_alloy";
                inngest: "inngest";
                langchain: "langchain";
                mastra: "mastra";
                neon: "neon";
                netlify: "netlify";
                openrouter: "openrouter";
                otel: "otel";
                otel_collector: "otel_collector";
                otel_metrics: "otel_metrics";
                plain: "plain";
                porter: "porter";
                posthog: "posthog";
                posthog_sdk: "posthog_sdk";
                prometheus: "prometheus";
                railway: "railway";
                render: "render";
                respan: "respan";
                sentry: "sentry";
                sentry_platform: "sentry_platform";
                supabase: "supabase";
                temporal: "temporal";
                trigger_dev: "trigger_dev";
                vector: "vector";
                vercel: "vercel";
                webhook_events: "webhook_events";
            }>;
            mode: z.ZodEnum<{
                connectionless: "connectionless";
                managed: "managed";
            }>;
            name: z.ZodNullable<z.ZodString>;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
        }, z.core.$strip>;
        streamId: z.ZodOptional<z.ZodString>;
        publicKey: z.ZodOptional<z.ZodString>;
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
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getInstance: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        instanceId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        instance: z.ZodObject<{
            id: z.ZodString;
            dataSourceType: z.ZodEnum<{
                claude_code: "claude_code";
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
                codex: "codex";
                convex: "convex";
                datadog: "datadog";
                daytona: "daytona";
                digital_ocean: "digital_ocean";
                e2b: "e2b";
                elastic_cloud: "elastic_cloud";
                fluent_bit: "fluent_bit";
                fly_io: "fly_io";
                gcp: "gcp";
                grafana_alloy: "grafana_alloy";
                inngest: "inngest";
                langchain: "langchain";
                mastra: "mastra";
                neon: "neon";
                netlify: "netlify";
                openrouter: "openrouter";
                otel: "otel";
                otel_collector: "otel_collector";
                otel_metrics: "otel_metrics";
                plain: "plain";
                porter: "porter";
                posthog: "posthog";
                posthog_sdk: "posthog_sdk";
                prometheus: "prometheus";
                railway: "railway";
                render: "render";
                respan: "respan";
                sentry: "sentry";
                sentry_platform: "sentry_platform";
                supabase: "supabase";
                temporal: "temporal";
                trigger_dev: "trigger_dev";
                vector: "vector";
                vercel: "vercel";
                webhook_events: "webhook_events";
            }>;
            mode: z.ZodEnum<{
                connectionless: "connectionless";
                managed: "managed";
            }>;
            name: z.ZodNullable<z.ZodString>;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
            streams: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                instanceId: z.ZodString;
                displayName: z.ZodString;
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
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly updateInstance: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        instanceId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        instance: z.ZodObject<{
            id: z.ZodString;
            dataSourceType: z.ZodEnum<{
                claude_code: "claude_code";
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
                codex: "codex";
                convex: "convex";
                datadog: "datadog";
                daytona: "daytona";
                digital_ocean: "digital_ocean";
                e2b: "e2b";
                elastic_cloud: "elastic_cloud";
                fluent_bit: "fluent_bit";
                fly_io: "fly_io";
                gcp: "gcp";
                grafana_alloy: "grafana_alloy";
                inngest: "inngest";
                langchain: "langchain";
                mastra: "mastra";
                neon: "neon";
                netlify: "netlify";
                openrouter: "openrouter";
                otel: "otel";
                otel_collector: "otel_collector";
                otel_metrics: "otel_metrics";
                plain: "plain";
                porter: "porter";
                posthog: "posthog";
                posthog_sdk: "posthog_sdk";
                prometheus: "prometheus";
                railway: "railway";
                render: "render";
                respan: "respan";
                sentry: "sentry";
                sentry_platform: "sentry_platform";
                supabase: "supabase";
                temporal: "temporal";
                trigger_dev: "trigger_dev";
                vector: "vector";
                vercel: "vercel";
                webhook_events: "webhook_events";
            }>;
            mode: z.ZodEnum<{
                connectionless: "connectionless";
                managed: "managed";
            }>;
            name: z.ZodNullable<z.ZodString>;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly deleteInstance: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        instanceId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        success: z.ZodBoolean;
        teardownError: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listStreams: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        instanceId: z.ZodString;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        streams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            instanceId: z.ZodString;
            displayName: z.ZodString;
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
    readonly createStream: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        instanceId: z.ZodString;
        displayName: z.ZodString;
        config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>, z.ZodObject<{
        streamId: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getStream: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        stream: z.ZodObject<{
            id: z.ZodString;
            instanceId: z.ZodString;
            displayName: z.ZodString;
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
    readonly updateStream: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
        displayName: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        stream: z.ZodObject<{
            id: z.ZodString;
            instanceId: z.ZodString;
            displayName: z.ZodString;
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
    readonly deleteStream: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        success: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
