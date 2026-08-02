import { z } from "zod";
/** Supported data source type values derived from canonical catalog specs. */
export declare const DATA_SOURCE_TYPE_VALUES: readonly ["vercel", "cloudflare", "railway", "render", "fly_io", "netlify", "supabase", "digital_ocean", "inngest", "trigger_dev", "temporal", "mastra", "neon", "langchain", "daytona", "e2b", "cloudwatch", "convex", "datadog", "sentry", "sentry_platform", "openrouter", "posthog", "posthog_sdk", "gcp", "otel", "otel_metrics", "fluent_bit", "vector", "grafana_alloy", "otel_collector", "cloudflare_workers", "elastic_cloud", "porter", "respan", "plain", "prometheus", "webhook_events"];
/**
 * A data source type with its metadata requirements.
 */
export declare const DataSourceTypeInfoSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
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
 * A data source connection record.
 */
export declare const DataSourceConnectionSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
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
    displayName: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strip>;
/**
 * A data source stream record.
 */
export declare const DataSourceStreamSchema: z.ZodObject<{
    id: z.ZodString;
    connectionId: z.ZodNullable<z.ZodString>;
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
}, z.core.$strip>;
export declare const ListDataSourceTypesInputSchema: z.ZodObject<{}, z.core.$strip>;
export declare const ListDataSourceTypesOutputSchema: z.ZodObject<{
    types: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
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
export declare const ListDataSourceConnectionsInputSchema: z.ZodObject<{
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
export declare const ListDataSourceConnectionsOutputSchema: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
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
        displayName: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListDataSourceConnectionsInput = z.infer<typeof ListDataSourceConnectionsInputSchema>;
export type ListDataSourceConnectionsOutput = z.infer<typeof ListDataSourceConnectionsOutputSchema>;
export declare const listDataSourceConnections: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
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
    connections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
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
        displayName: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const GetDataSourceConnectionInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
}, z.core.$strip>;
export declare const GetDataSourceConnectionOutputSchema: z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
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
        displayName: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetDataSourceConnectionInput = z.infer<typeof GetDataSourceConnectionInputSchema>;
export type GetDataSourceConnectionOutput = z.infer<typeof GetDataSourceConnectionOutputSchema>;
export declare const getDataSourceConnection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
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
        displayName: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const DataSourceInstanceModeEnum: z.ZodEnum<{
    connectionless: "connectionless";
    managed: "managed";
}>;
/**
 * A data source instance record — the instance-root object. `mode` is
 * `managed` (backed by a connection) or `connectionless` (intake-only);
 * `connectionId` is present only for managed instances.
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
    label: z.ZodNullable<z.ZodString>;
    connectionId: z.ZodNullable<z.ZodString>;
    streamCount: z.ZodNumber;
    createdAt: z.ZodString;
    connectionDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    streamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
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
        label: z.ZodNullable<z.ZodString>;
        connectionId: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
        connectionDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        streamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
        label: z.ZodNullable<z.ZodString>;
        connectionId: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
        connectionDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        streamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const GetDataSourceInstanceInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
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
        label: z.ZodNullable<z.ZodString>;
        connectionId: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
        connectionDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        streamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetDataSourceInstanceInput = z.infer<typeof GetDataSourceInstanceInputSchema>;
export type GetDataSourceInstanceOutput = z.infer<typeof GetDataSourceInstanceOutputSchema>;
export declare const getDataSourceInstance: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
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
        label: z.ZodNullable<z.ZodString>;
        connectionId: z.ZodNullable<z.ZodString>;
        streamCount: z.ZodNumber;
        createdAt: z.ZodString;
        connectionDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        streamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const CreateDataSourceConnectionInputSchema: z.ZodObject<{
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
    metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    displayName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CreateDataSourceConnectionOutputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    publicKey: z.ZodString;
}, z.core.$strip>;
export type CreateDataSourceConnectionInput = z.infer<typeof CreateDataSourceConnectionInputSchema>;
export type CreateDataSourceConnectionOutput = z.infer<typeof CreateDataSourceConnectionOutputSchema>;
export declare const createDataSourceConnection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
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
    metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    displayName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    connectionId: z.ZodString;
    publicKey: z.ZodString;
}, z.core.$strip>, "api">;
export declare const ListDataSourceStreamsInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const ListDataSourceStreamsOutputSchema: z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodNullable<z.ZodString>;
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListDataSourceStreamsInput = z.infer<typeof ListDataSourceStreamsInputSchema>;
export type ListDataSourceStreamsOutput = z.infer<typeof ListDataSourceStreamsOutputSchema>;
export declare const listDataSourceStreams: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodNullable<z.ZodString>;
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
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const ListDataSourceInstanceStreamsInputSchema: z.ZodObject<{
    instanceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const ListDataSourceInstanceStreamsOutputSchema: z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodNullable<z.ZodString>;
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListDataSourceInstanceStreamsInput = z.infer<typeof ListDataSourceInstanceStreamsInputSchema>;
export type ListDataSourceInstanceStreamsOutput = z.infer<typeof ListDataSourceInstanceStreamsOutputSchema>;
export declare const listDataSourceInstanceStreams: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    instanceId: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    streams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodNullable<z.ZodString>;
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
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
export declare const CreateDataSourceStreamInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
    displayName: z.ZodString;
    config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>;
export declare const CreateDataSourceStreamOutputSchema: z.ZodObject<{
    streamId: z.ZodString;
    publicKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateDataSourceStreamInput = z.infer<typeof CreateDataSourceStreamInputSchema>;
export type CreateDataSourceStreamOutput = z.infer<typeof CreateDataSourceStreamOutputSchema>;
export declare const createDataSourceStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
    displayName: z.ZodString;
    config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>, z.ZodObject<{
    streamId: z.ZodString;
    publicKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const GetDataSourceStreamInputSchema: z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>;
export declare const GetDataSourceStreamOutputSchema: z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodNullable<z.ZodString>;
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
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetDataSourceStreamInput = z.infer<typeof GetDataSourceStreamInputSchema>;
export type GetDataSourceStreamOutput = z.infer<typeof GetDataSourceStreamOutputSchema>;
export declare const getDataSourceStream: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    streamId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    stream: z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodNullable<z.ZodString>;
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
export declare const DisconnectDataSourceConnectionInputSchema: z.ZodObject<{
    connectionId: z.ZodString;
}, z.core.$strip>;
export declare const DisconnectDataSourceConnectionOutputSchema: z.ZodObject<{
    success: z.ZodBoolean;
    connectionTeardownError: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type DisconnectDataSourceConnectionInput = z.infer<typeof DisconnectDataSourceConnectionInputSchema>;
export type DisconnectDataSourceConnectionOutput = z.infer<typeof DisconnectDataSourceConnectionOutputSchema>;
export declare const disconnectDataSourceConnection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    connectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodBoolean;
    connectionTeardownError: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const dataSourcesContract: {
    readonly listTypes: import("@orpc/contract").ContractProcedure<z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
        types: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
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
    readonly listConnections: import("@orpc/contract").ContractProcedure<z.ZodObject<{
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
        connections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
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
            displayName: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getConnection: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        connection: z.ZodObject<{
            id: z.ZodString;
            projectId: z.ZodString;
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
            displayName: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
        }, z.core.$strip>;
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
            label: z.ZodNullable<z.ZodString>;
            connectionId: z.ZodNullable<z.ZodString>;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
            connectionDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            streamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getInstance: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        instanceId: z.ZodString;
        projectId: z.ZodOptional<z.ZodString>;
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
            label: z.ZodNullable<z.ZodString>;
            connectionId: z.ZodNullable<z.ZodString>;
            streamCount: z.ZodNumber;
            createdAt: z.ZodString;
            connectionDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            streamName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly createConnection: import("@orpc/contract").ContractProcedure<z.ZodObject<{
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
        metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        displayName: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        connectionId: z.ZodString;
        publicKey: z.ZodString;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly disconnectConnection: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        success: z.ZodBoolean;
        connectionTeardownError: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listStreams: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        streams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            connectionId: z.ZodNullable<z.ZodString>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly listInstanceStreams: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        instanceId: z.ZodString;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        streams: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            connectionId: z.ZodNullable<z.ZodString>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly createStream: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        connectionId: z.ZodString;
        displayName: z.ZodString;
        config: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strip>, z.ZodObject<{
        streamId: z.ZodString;
        publicKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly getStream: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        stream: z.ZodObject<{
            id: z.ZodString;
            connectionId: z.ZodNullable<z.ZodString>;
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
        }, z.core.$strip>;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
    readonly deleteStream: import("@orpc/contract").ContractProcedure<z.ZodObject<{
        streamId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        success: z.ZodBoolean;
    }, z.core.$strip>, Record<never, never>, import("../orpc-contracts/index.js").OperationContractMetadata<"api">>;
};
