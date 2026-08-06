import { z } from "zod";
/** Supported data source type values derived from canonical catalog specs. */
export declare const DATA_SOURCE_TYPE_VALUES: readonly ["vercel", "cloudflare", "railway", "render", "fly_io", "netlify", "supabase", "digital_ocean", "inngest", "trigger_dev", "temporal", "mastra", "neon", "langchain", "daytona", "e2b", "cloudwatch", "convex", "datadog", "sentry", "sentry_platform", "openrouter", "posthog", "posthog_sdk", "gcp", "otel", "otel_metrics", "fluent_bit", "vector", "grafana_alloy", "otel_collector", "cloudflare_workers", "elastic_cloud", "porter", "respan", "plain", "prometheus", "webhook_events"];
/**
 * Instance setup modes. `managed` instances hold vendor credentials that
 * Sazabi uses to provision delivery; `connectionless` instances mint a keyed
 * intake endpoint and the sender pushes to it directly.
 */
export declare const DataSourceInstanceModeEnum: z.ZodEnum<{
    connectionless: "connectionless";
    managed: "managed";
}>;
/**
 * A data source type with its supported setup modes and metadata requirements.
 */
export declare const DataSourceTypeInfoSchema: z.ZodObject<{
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
export declare const DataSourceEndpointCardSchema: z.ZodObject<{
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
export type DataSourceEndpointCard = z.infer<typeof DataSourceEndpointCardSchema>;
/**
 * A data source stream record — one provisioned event flow under an instance.
 */
export declare const DataSourceStreamSchema: z.ZodObject<{
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
export declare const DataSourceInstanceSchema: z.ZodObject<{
    id: z.ZodString;
    dataSourceType: z.ZodEnum<{
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
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
export declare const DataSourceInstanceDetailSchema: z.ZodObject<{
    id: z.ZodString;
    dataSourceType: z.ZodEnum<{
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
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
export declare const ListDataSourceTypesInputSchema: z.ZodObject<{}, z.core.$strip>;
export declare const ListDataSourceTypesOutputSchema: z.ZodObject<{
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
export type ListDataSourceTypesOutput = z.infer<typeof ListDataSourceTypesOutputSchema>;
export declare const listDataSourceTypes: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
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
export declare const ListDataSourceInstancesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    dataSourceType: z.ZodOptional<z.ZodEnum<{
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
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
export declare const ListDataSourceInstancesOutputSchema: z.ZodObject<{
    instances: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
export type ListDataSourceInstancesInput = z.infer<typeof ListDataSourceInstancesInputSchema>;
export type ListDataSourceInstancesOutput = z.infer<typeof ListDataSourceInstancesOutputSchema>;
export declare const listDataSourceInstances: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    dataSourceType: z.ZodOptional<z.ZodEnum<{
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
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
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
export declare const CreateDataSourceInstanceInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    dataSourceType: z.ZodEnum<{
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
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
export declare const CreateDataSourceInstanceOutputSchema: z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
export type CreateDataSourceInstanceInput = z.infer<typeof CreateDataSourceInstanceInputSchema>;
export type CreateDataSourceInstanceOutput = z.infer<typeof CreateDataSourceInstanceOutputSchema>;
export declare const createDataSourceInstance: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    dataSourceType: z.ZodEnum<{
        cloudflare: "cloudflare";
        cloudflare_workers: "cloudflare_workers";
        cloudwatch: "cloudwatch";
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
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
export declare const GetDataSourceInstanceInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
}, z.core.$strip>;
export declare const GetDataSourceInstanceOutputSchema: z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
export type GetDataSourceInstanceInput = z.infer<typeof GetDataSourceInstanceInputSchema>;
export type GetDataSourceInstanceOutput = z.infer<typeof GetDataSourceInstanceOutputSchema>;
export declare const getDataSourceInstance: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
export declare const UpdateDataSourceInstanceInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateDataSourceInstanceOutputSchema: z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
export type UpdateDataSourceInstanceInput = z.infer<typeof UpdateDataSourceInstanceInputSchema>;
export type UpdateDataSourceInstanceOutput = z.infer<typeof UpdateDataSourceInstanceOutputSchema>;
export declare const updateDataSourceInstance: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    instance: z.ZodObject<{
        id: z.ZodString;
        dataSourceType: z.ZodEnum<{
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
export declare const DeleteDataSourceInstanceInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteDataSourceInstanceOutputSchema: z.ZodObject<{
    success: z.ZodBoolean;
    teardownError: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type DeleteDataSourceInstanceInput = z.infer<typeof DeleteDataSourceInstanceInputSchema>;
export type DeleteDataSourceInstanceOutput = z.infer<typeof DeleteDataSourceInstanceOutputSchema>;
export declare const deleteDataSourceInstance: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodBoolean;
    teardownError: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const ListDataSourceStreamsInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const ListDataSourceStreamsOutputSchema: z.ZodObject<{
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
export type ListDataSourceStreamsInput = z.infer<typeof ListDataSourceStreamsInputSchema>;
export type ListDataSourceStreamsOutput = z.infer<typeof ListDataSourceStreamsOutputSchema>;
export declare const listDataSourceStreams: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
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
export declare const CreateDataSourceStreamInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
    displayName: z.ZodString;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export declare const CreateDataSourceStreamOutputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export type CreateDataSourceStreamInput = z.infer<typeof CreateDataSourceStreamInputSchema>;
export type CreateDataSourceStreamOutput = z.infer<typeof CreateDataSourceStreamOutputSchema>;
export declare const createDataSourceStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
    displayName: z.ZodString;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>, z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, "api">;
export declare const GetDataSourceStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export declare const GetDataSourceStreamOutputSchema: z.ZodObject<{
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
export type GetDataSourceStreamInput = z.infer<typeof GetDataSourceStreamInputSchema>;
export type GetDataSourceStreamOutput = z.infer<typeof GetDataSourceStreamOutputSchema>;
export declare const getDataSourceStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
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
export declare const UpdateDataSourceStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
    displayName: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateDataSourceStreamOutputSchema: z.ZodObject<{
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
export type UpdateDataSourceStreamInput = z.infer<typeof UpdateDataSourceStreamInputSchema>;
export type UpdateDataSourceStreamOutput = z.infer<typeof UpdateDataSourceStreamOutputSchema>;
export declare const updateDataSourceStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
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
export declare const DeleteDataSourceStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export declare const DeleteDataSourceStreamOutputSchema: z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>;
export type DeleteDataSourceStreamInput = z.infer<typeof DeleteDataSourceStreamInputSchema>;
export type DeleteDataSourceStreamOutput = z.infer<typeof DeleteDataSourceStreamOutputSchema>;
export declare const deleteDataSourceStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>, "api">;
export declare const dataSourcesContract: {
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
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
            cloudflare: "cloudflare";
            cloudflare_workers: "cloudflare_workers";
            cloudwatch: "cloudwatch";
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
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
                cloudflare: "cloudflare";
                cloudflare_workers: "cloudflare_workers";
                cloudwatch: "cloudwatch";
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
