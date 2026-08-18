import { z } from "zod";
/**
 * Supported log source provider values derived from canonical catalog specs.
 */
export declare const LOG_SOURCE_PROVIDER_VALUES: readonly ["vercel", "cloudflare", "railway", "render", "fly_io", "netlify", "supabase", "digital_ocean", "inngest", "trigger_dev", "temporal", "mastra", "neon", "langchain", "daytona", "e2b", "cloudwatch", "convex", "datadog", "sentry", "sentry_platform", "openrouter", "posthog", "posthog_sdk", "gcp", "otel", "otel_metrics", "fluent_bit", "vector", "grafana_alloy", "otel_collector", "cloudflare_workers", "elastic_cloud", "porter", "respan", "plain", "prometheus", "webhook_events", "claude_code", "codex"];
/**
 * Log source setup modes. `managed` log sources hold vendor credentials that
 * Sazabi uses to provision delivery; `connectionless` log sources mint a keyed
 * intake endpoint and the sender pushes to it directly.
 */
export declare const LogSourceModeEnum: z.ZodEnum<{
    connectionless: "connectionless";
    managed: "managed";
}>;
/**
 * A log source provider with its supported setup modes and metadata
 * requirements.
 */
export declare const LogSourceProviderInfoSchema: z.ZodObject<{
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
 * One platform-owned endpoint card for a keyed log stream. The card's
 * contents are computed server-side — the single intake-URL assembler lives
 * in the platform — and clients render them verbatim. `url` cards carry the
 * complete keyed URL (the hostname authenticates); `hostPort` cards carry a
 * non-keyed listener plus the credential the sender must attach.
 */
export declare const LogSourceEndpointCardSchema: z.ZodObject<{
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
export type LogSourceEndpointCard = z.infer<typeof LogSourceEndpointCardSchema>;
/**
 * A log stream record — one provisioned event flow under a log source.
 */
export declare const LogStreamSchema: z.ZodObject<{
    id: z.ZodString;
    logSourceId: z.ZodString;
    displayName: z.ZodNullable<z.ZodString>;
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
 * A log source record — the root resource of the log-source anatomy. `mode`
 * is `managed` (Sazabi holds vendor credentials and provisions delivery) or
 * `connectionless` (the sender pushes to a keyed Sazabi intake endpoint).
 */
export declare const LogSourceSchema: z.ZodObject<{
    id: z.ZodString;
    provider: z.ZodEnum<{
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
    name: z.ZodString;
    streamCount: z.ZodNumber;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * A log source with its log streams expanded. Log streams that carry their
 * own delivery key include server-computed `endpointCards`.
 */
export declare const LogSourceDetailSchema: z.ZodObject<{
    id: z.ZodString;
    provider: z.ZodEnum<{
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
    name: z.ZodString;
    streamCount: z.ZodNumber;
    createdAt: z.ZodString;
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        logSourceId: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
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
export declare const ListLogSourceProvidersInputSchema: z.ZodObject<{}, z.core.$strip>;
export declare const ListLogSourceProvidersOutputSchema: z.ZodObject<{
    providers: z.ZodArray<z.ZodObject<{
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
export type ListLogSourceProvidersOutput = z.infer<typeof ListLogSourceProvidersOutputSchema>;
export declare const listLogSourceProviders: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    providers: z.ZodArray<z.ZodObject<{
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
export declare const ListLogSourcesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodEnum<{
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
export declare const ListLogSourcesOutputSchema: z.ZodObject<{
    logSources: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
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
        name: z.ZodString;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListLogSourcesInput = z.infer<typeof ListLogSourcesInputSchema>;
export type ListLogSourcesOutput = z.infer<typeof ListLogSourcesOutputSchema>;
export declare const listLogSources: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodEnum<{
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
    logSources: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
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
        name: z.ZodString;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const CreateLogSourceInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
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
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strict>;
export declare const CreateLogSourceOutputSchema: z.ZodObject<{
    logSource: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
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
        name: z.ZodString;
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
export type CreateLogSourceInput = z.infer<typeof CreateLogSourceInputSchema>;
export type CreateLogSourceOutput = z.infer<typeof CreateLogSourceOutputSchema>;
export declare const createLogSource: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
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
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strict>, z.ZodObject<{
    logSource: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
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
        name: z.ZodString;
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
export declare const GetLogSourceInputSchema: z.ZodObject<{
    logSourceId: z.ZodString;
}, z.core.$strip>;
export declare const GetLogSourceOutputSchema: z.ZodObject<{
    logSource: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
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
        name: z.ZodString;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
        streams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            logSourceId: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
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
export type GetLogSourceInput = z.infer<typeof GetLogSourceInputSchema>;
export type GetLogSourceOutput = z.infer<typeof GetLogSourceOutputSchema>;
export declare const getLogSource: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    logSourceId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    logSource: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
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
        name: z.ZodString;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
        streams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            logSourceId: z.ZodString;
            displayName: z.ZodNullable<z.ZodString>;
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
export declare const UpdateLogSourceInputSchema: z.ZodObject<{
    logSourceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const UpdateLogSourceOutputSchema: z.ZodObject<{
    logSource: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
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
        name: z.ZodString;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UpdateLogSourceInput = z.infer<typeof UpdateLogSourceInputSchema>;
export type UpdateLogSourceOutput = z.infer<typeof UpdateLogSourceOutputSchema>;
export declare const updateLogSource: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    logSourceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>, z.ZodObject<{
    logSource: z.ZodObject<{
        id: z.ZodString;
        provider: z.ZodEnum<{
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
        name: z.ZodString;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const DeleteLogSourceInputSchema: z.ZodObject<{
    logSourceId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteLogSourceOutputSchema: z.ZodObject<{
    success: z.ZodBoolean;
    teardownError: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type DeleteLogSourceInput = z.infer<typeof DeleteLogSourceInputSchema>;
export type DeleteLogSourceOutput = z.infer<typeof DeleteLogSourceOutputSchema>;
export declare const deleteLogSource: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    logSourceId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodBoolean;
    teardownError: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const logSourcesContract: {
    readonly listProviders: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        providers: z.ZodArray<z.ZodObject<{
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
    readonly list: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        provider: z.ZodOptional<z.ZodEnum<{
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
        logSources: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            provider: z.ZodEnum<{
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
            name: z.ZodString;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly create: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        projectId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<{
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
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strict>, z.ZodObject<{
        logSource: z.ZodObject<{
            id: z.ZodString;
            provider: z.ZodEnum<{
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
            name: z.ZodString;
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
    readonly get: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        logSourceId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        logSource: z.ZodObject<{
            id: z.ZodString;
            provider: z.ZodEnum<{
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
            name: z.ZodString;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
            streams: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                logSourceId: z.ZodString;
                displayName: z.ZodNullable<z.ZodString>;
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
    readonly update: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        logSourceId: z.ZodString;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>, z.ZodObject<{
        logSource: z.ZodObject<{
            id: z.ZodString;
            provider: z.ZodEnum<{
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
            name: z.ZodString;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly delete: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        logSourceId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        success: z.ZodBoolean;
        teardownError: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
