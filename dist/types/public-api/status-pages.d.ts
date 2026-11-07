/**
 * Public status pages (docs/design/app/public-status-pages). A project's
 * customer-facing page at `<slug>.sazabi.page`: sections and surfaces (the
 * public rows its readers see), and incident and maintenance reports whose
 * published updates are the only thing that changes a surface's status.
 *
 * Authenticated operations edit pages and reports; the three
 * `statusPages.public.*` reads are anonymous and return only published
 * content, with 404 for hidden, suspended, deleted and unknown slugs alike.
 */
import { z } from "zod";
/** The DNS label rule for a page slug: 3-40 chars, lowercase, digits, inner hyphens. */
export declare const STATUS_PAGE_SLUG_PATTERN: RegExp;
/** The rule for an apply-document key of a section or surface. */
export declare const STATUS_PAGE_KEY_PATTERN: RegExp;
export declare const StatusPageSlugSchema: z.ZodString;
export declare const StatusPageKeySchema: z.ZodString;
export declare const StatusPageVisibilitySchema: z.ZodEnum<{
    hidden: "hidden";
    published: "published";
}>;
export declare const StatusPageThemeSchema: z.ZodEnum<{
    dark: "dark";
    light: "light";
    system: "system";
}>;
export declare const StatusReportKindSchema: z.ZodEnum<{
    incident: "incident";
    maintenance: "maintenance";
}>;
export declare const StatusReportVisibilitySchema: z.ZodEnum<{
    draft: "draft";
    published: "published";
}>;
export declare const StatusReportStateSchema: z.ZodEnum<{
    completed: "completed";
    identified: "identified";
    in_progress: "in_progress";
    investigating: "investigating";
    monitoring: "monitoring";
    resolved: "resolved";
    scheduled: "scheduled";
}>;
/** Incident states, in order; `resolved` closes an incident. */
export declare const STATUS_REPORT_INCIDENT_STATES: readonly ["investigating", "identified", "monitoring", "resolved"];
/** Maintenance states, in order; `completed` closes a maintenance. */
export declare const STATUS_REPORT_MAINTENANCE_STATES: readonly ["scheduled", "in_progress", "completed"];
export declare const StatusPageSurfaceImpactSchema: z.ZodEnum<{
    degraded_performance: "degraded_performance";
    major_outage: "major_outage";
    partial_outage: "partial_outage";
    under_maintenance: "under_maintenance";
}>;
export declare const StatusPageSurfaceStatusSchema: z.ZodEnum<{
    degraded_performance: "degraded_performance";
    major_outage: "major_outage";
    operational: "operational";
    partial_outage: "partial_outage";
    under_maintenance: "under_maintenance";
}>;
export type StatusPageSurfaceImpact = z.infer<typeof StatusPageSurfaceImpactSchema>;
export type StatusPageSurfaceStatus = z.infer<typeof StatusPageSurfaceStatusSchema>;
export type StatusReportState = z.infer<typeof StatusReportStateSchema>;
export type StatusReportKind = z.infer<typeof StatusReportKindSchema>;
export declare const StatusPageSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    logoUrl: z.ZodNullable<z.ZodString>;
    accentColor: z.ZodNullable<z.ZodString>;
    theme: z.ZodEnum<{
        dark: "dark";
        light: "light";
        system: "system";
    }>;
    supportUrl: z.ZodNullable<z.ZodString>;
    timezone: z.ZodString;
    visibility: z.ZodEnum<{
        hidden: "hidden";
        published: "published";
    }>;
    publishedAt: z.ZodNullable<z.ZodString>;
    suspended: z.ZodBoolean;
    url: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type StatusPage = z.infer<typeof StatusPageSchema>;
export declare const StatusPageUsageSchema: z.ZodObject<{
    count: z.ZodNumber;
    limit: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export type StatusPageUsage = z.infer<typeof StatusPageUsageSchema>;
export declare const StatusPageSectionSchema: z.ZodObject<{
    id: z.ZodString;
    key: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    position: z.ZodNumber;
    collapsedByDefault: z.ZodBoolean;
}, z.core.$strip>;
export type StatusPageSection = z.infer<typeof StatusPageSectionSchema>;
export declare const StatusPageSurfaceSchema: z.ZodObject<{
    id: z.ZodString;
    key: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    sectionId: z.ZodNullable<z.ZodString>;
    position: z.ZodNumber;
    showUptime: z.ZodBoolean;
    status: z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        operational: "operational";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>;
}, z.core.$strip>;
export type StatusPageSurface = z.infer<typeof StatusPageSurfaceSchema>;
export declare const StatusPageDetailSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    logoUrl: z.ZodNullable<z.ZodString>;
    accentColor: z.ZodNullable<z.ZodString>;
    theme: z.ZodEnum<{
        dark: "dark";
        light: "light";
        system: "system";
    }>;
    supportUrl: z.ZodNullable<z.ZodString>;
    timezone: z.ZodString;
    visibility: z.ZodEnum<{
        hidden: "hidden";
        published: "published";
    }>;
    publishedAt: z.ZodNullable<z.ZodString>;
    suspended: z.ZodBoolean;
    url: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    sections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        position: z.ZodNumber;
        collapsedByDefault: z.ZodBoolean;
    }, z.core.$strip>>;
    surfaces: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        sectionId: z.ZodNullable<z.ZodString>;
        position: z.ZodNumber;
        showUptime: z.ZodBoolean;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type StatusPageDetail = z.infer<typeof StatusPageDetailSchema>;
export declare const StatusReportImpactSchema: z.ZodObject<{
    surfaceId: z.ZodString;
    surfaceKey: z.ZodString;
    surfaceName: z.ZodString;
    impact: z.ZodNullable<z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>>;
}, z.core.$strip>;
export type StatusReportImpact = z.infer<typeof StatusReportImpactSchema>;
export declare const StatusReportUpdateSchema: z.ZodObject<{
    id: z.ZodString;
    state: z.ZodEnum<{
        completed: "completed";
        identified: "identified";
        in_progress: "in_progress";
        investigating: "investigating";
        monitoring: "monitoring";
        resolved: "resolved";
        scheduled: "scheduled";
    }>;
    message: z.ZodString;
    visibility: z.ZodEnum<{
        draft: "draft";
        published: "published";
    }>;
    publishedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    impacts: z.ZodArray<z.ZodObject<{
        surfaceId: z.ZodString;
        surfaceKey: z.ZodString;
        surfaceName: z.ZodString;
        impact: z.ZodNullable<z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type StatusReportUpdate = z.infer<typeof StatusReportUpdateSchema>;
export declare const StatusReportSchema: z.ZodObject<{
    id: z.ZodString;
    statusPageId: z.ZodString;
    kind: z.ZodEnum<{
        incident: "incident";
        maintenance: "maintenance";
    }>;
    title: z.ZodString;
    state: z.ZodEnum<{
        completed: "completed";
        identified: "identified";
        in_progress: "in_progress";
        investigating: "investigating";
        monitoring: "monitoring";
        resolved: "resolved";
        scheduled: "scheduled";
    }>;
    visibility: z.ZodEnum<{
        draft: "draft";
        published: "published";
    }>;
    startedAt: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
    scheduledStartAt: z.ZodNullable<z.ZodString>;
    scheduledEndAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type StatusReport = z.infer<typeof StatusReportSchema>;
export declare const StatusReportDetailSchema: z.ZodObject<{
    id: z.ZodString;
    statusPageId: z.ZodString;
    kind: z.ZodEnum<{
        incident: "incident";
        maintenance: "maintenance";
    }>;
    title: z.ZodString;
    state: z.ZodEnum<{
        completed: "completed";
        identified: "identified";
        in_progress: "in_progress";
        investigating: "investigating";
        monitoring: "monitoring";
        resolved: "resolved";
        scheduled: "scheduled";
    }>;
    visibility: z.ZodEnum<{
        draft: "draft";
        published: "published";
    }>;
    startedAt: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
    scheduledStartAt: z.ZodNullable<z.ZodString>;
    scheduledEndAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    updates: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        message: z.ZodString;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        publishedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceId: z.ZodString;
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type StatusReportDetail = z.infer<typeof StatusReportDetailSchema>;
export declare const ListStatusPagesInputSchema: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListStatusPagesOutputSchema: z.ZodObject<{
    statusPages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        visibility: z.ZodEnum<{
            hidden: "hidden";
            published: "published";
        }>;
        publishedAt: z.ZodNullable<z.ZodString>;
        suspended: z.ZodBoolean;
        url: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    usage: z.ZodObject<{
        count: z.ZodNumber;
        limit: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const GetStatusPageInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
}, z.core.$strip>;
export declare const StatusPageDetailOutputSchema: z.ZodObject<{
    statusPage: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        visibility: z.ZodEnum<{
            hidden: "hidden";
            published: "published";
        }>;
        publishedAt: z.ZodNullable<z.ZodString>;
        suspended: z.ZodBoolean;
        url: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            collapsedByDefault: z.ZodBoolean;
        }, z.core.$strip>>;
        surfaces: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            sectionId: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            showUptime: z.ZodBoolean;
            status: z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                operational: "operational";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CreateStatusPageInputSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    accentColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    theme: z.ZodOptional<z.ZodEnum<{
        dark: "dark";
        light: "light";
        system: "system";
    }>>;
    supportUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timezone: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
}, z.core.$strip>;
export declare const UpdateStatusPageInputSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    logoUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    accentColor: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    theme: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        dark: "dark";
        light: "light";
        system: "system";
    }>>>;
    supportUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    timezone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    statusPageId: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const StatusPageRefInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
}, z.core.$strip>;
export declare const SetStatusPageVisibilityInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    visibility: z.ZodEnum<{
        hidden: "hidden";
        published: "published";
    }>;
}, z.core.$strip>;
export declare const DeleteStatusPageOutputSchema: z.ZodObject<{
    deleted: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const PutStatusPageStructureInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    dryRun: z.ZodDefault<z.ZodBoolean>;
    sections: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        collapsedByDefault: z.ZodOptional<z.ZodBoolean>;
        surfaces: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            showUptime: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    surfaces: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        showUptime: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type PutStatusPageStructureInput = z.infer<typeof PutStatusPageStructureInputSchema>;
export declare const PutStatusPageStructureOutputSchema: z.ZodObject<{
    dryRun: z.ZodBoolean;
    created: z.ZodArray<z.ZodString>;
    updated: z.ZodArray<z.ZodString>;
    removed: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const CreateStatusPageSectionInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    key: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNumber>;
    collapsedByDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateStatusPageSectionInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    sectionId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNumber>;
    collapsedByDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const DeleteStatusPageSectionInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    sectionId: z.ZodString;
}, z.core.$strip>;
export declare const StatusPageSectionOutputSchema: z.ZodObject<{
    section: z.ZodObject<{
        id: z.ZodString;
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        position: z.ZodNumber;
        collapsedByDefault: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CreateStatusPageSurfaceInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    key: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNumber>;
    showUptime: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateStatusPageSurfaceInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    surfaceId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNumber>;
    showUptime: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const DeleteStatusPageSurfaceInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    surfaceId: z.ZodString;
}, z.core.$strip>;
export declare const StatusPageSurfaceOutputSchema: z.ZodObject<{
    surface: z.ZodObject<{
        id: z.ZodString;
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        sectionId: z.ZodNullable<z.ZodString>;
        position: z.ZodNumber;
        showUptime: z.ZodBoolean;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const StatusReportImpactsInputSchema: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodEnum<{
    degraded_performance: "degraded_performance";
    major_outage: "major_outage";
    partial_outage: "partial_outage";
    under_maintenance: "under_maintenance";
}>>>>;
export declare const StatusReportUpdateInputSchema: z.ZodObject<{
    state: z.ZodEnum<{
        completed: "completed";
        identified: "identified";
        in_progress: "in_progress";
        investigating: "investigating";
        monitoring: "monitoring";
        resolved: "resolved";
        scheduled: "scheduled";
    }>;
    message: z.ZodString;
    impacts: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>>>>;
}, z.core.$strip>;
export declare const ListStatusReportsInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<{
        all: "all";
        open: "open";
        resolved: "resolved";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListStatusReportsOutputSchema: z.ZodObject<{
    reports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        statusPageId: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const GetStatusReportInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    reportId: z.ZodString;
}, z.core.$strip>;
export declare const StatusReportDetailOutputSchema: z.ZodObject<{
    report: z.ZodObject<{
        id: z.ZodString;
        statusPageId: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            visibility: z.ZodEnum<{
                draft: "draft";
                published: "published";
            }>;
            publishedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceId: z.ZodString;
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CreateStatusReportInputSchema: z.ZodObject<{
    statusPageId: z.ZodString;
    kind: z.ZodEnum<{
        incident: "incident";
        maintenance: "maintenance";
    }>;
    title: z.ZodString;
    scheduledStartAt: z.ZodOptional<z.ZodString>;
    scheduledEndAt: z.ZodOptional<z.ZodString>;
    update: z.ZodObject<{
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        message: z.ZodString;
        impacts: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CreateStatusReportUpdateInputSchema: z.ZodObject<{
    state: z.ZodEnum<{
        completed: "completed";
        identified: "identified";
        in_progress: "in_progress";
        investigating: "investigating";
        monitoring: "monitoring";
        resolved: "resolved";
        scheduled: "scheduled";
    }>;
    message: z.ZodString;
    impacts: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>>>>;
    reportId: z.ZodString;
}, z.core.$strip>;
export declare const StatusReportRefInputSchema: z.ZodObject<{
    reportId: z.ZodString;
}, z.core.$strip>;
export declare const SetStatusReportVisibilityInputSchema: z.ZodObject<{
    reportId: z.ZodString;
    visibility: z.ZodLiteral<"published">;
}, z.core.$strip>;
export declare const SetStatusReportVisibilityOutputSchema: z.ZodObject<{
    report: z.ZodObject<{
        id: z.ZodString;
        statusPageId: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            visibility: z.ZodEnum<{
                draft: "draft";
                published: "published";
            }>;
            publishedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceId: z.ZodString;
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    publishedUpdates: z.ZodNumber;
}, z.core.$strip>;
export declare const DeleteStatusReportOutputSchema: z.ZodObject<{
    deleted: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const PublicStatusPageHeaderSchema: z.ZodObject<{
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    logoUrl: z.ZodNullable<z.ZodString>;
    accentColor: z.ZodNullable<z.ZodString>;
    theme: z.ZodEnum<{
        dark: "dark";
        light: "light";
        system: "system";
    }>;
    supportUrl: z.ZodNullable<z.ZodString>;
    timezone: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
export declare const PublicUptimeDaySchema: z.ZodObject<{
    date: z.ZodString;
    status: z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        operational: "operational";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>;
    downtimeMinutes: z.ZodNumber;
}, z.core.$strip>;
export declare const PublicStatusSurfaceSchema: z.ZodObject<{
    key: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        operational: "operational";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>;
    uptime: z.ZodNullable<z.ZodObject<{
        percent: z.ZodNumber;
        days: z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            status: z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                operational: "operational";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>;
            downtimeMinutes: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const PublicStatusSectionSchema: z.ZodObject<{
    key: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    collapsedByDefault: z.ZodBoolean;
    status: z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        operational: "operational";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>;
    surfaces: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
        uptime: z.ZodNullable<z.ZodObject<{
            percent: z.ZodNumber;
            days: z.ZodArray<z.ZodObject<{
                date: z.ZodString;
                status: z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    operational: "operational";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>;
                downtimeMinutes: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const PublicStatusReportImpactSchema: z.ZodObject<{
    surfaceKey: z.ZodString;
    surfaceName: z.ZodString;
    impact: z.ZodNullable<z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>>;
}, z.core.$strip>;
export declare const PublicStatusReportUpdateSchema: z.ZodObject<{
    id: z.ZodString;
    state: z.ZodEnum<{
        completed: "completed";
        identified: "identified";
        in_progress: "in_progress";
        investigating: "investigating";
        monitoring: "monitoring";
        resolved: "resolved";
        scheduled: "scheduled";
    }>;
    message: z.ZodString;
    publishedAt: z.ZodString;
    impacts: z.ZodArray<z.ZodObject<{
        surfaceKey: z.ZodString;
        surfaceName: z.ZodString;
        impact: z.ZodNullable<z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const PublicStatusReportSchema: z.ZodObject<{
    id: z.ZodString;
    kind: z.ZodEnum<{
        incident: "incident";
        maintenance: "maintenance";
    }>;
    title: z.ZodString;
    state: z.ZodEnum<{
        completed: "completed";
        identified: "identified";
        in_progress: "in_progress";
        investigating: "investigating";
        monitoring: "monitoring";
        resolved: "resolved";
        scheduled: "scheduled";
    }>;
    startedAt: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
    scheduledStartAt: z.ZodNullable<z.ZodString>;
    scheduledEndAt: z.ZodNullable<z.ZodString>;
    impacts: z.ZodArray<z.ZodObject<{
        surfaceKey: z.ZodString;
        surfaceName: z.ZodString;
        impact: z.ZodNullable<z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>>;
    }, z.core.$strip>>;
    updates: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        message: z.ZodString;
        publishedAt: z.ZodString;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PublicStatusReport = z.infer<typeof PublicStatusReportSchema>;
export declare const GetPublicStatusPageInputSchema: z.ZodObject<{
    slug: z.ZodString;
}, z.core.$strip>;
export declare const GetPublicStatusPageOutputSchema: z.ZodObject<{
    page: z.ZodObject<{
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>;
    status: z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        operational: "operational";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>;
    sections: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        collapsedByDefault: z.ZodBoolean;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
        surfaces: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                operational: "operational";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>;
            uptime: z.ZodNullable<z.ZodObject<{
                percent: z.ZodNumber;
                days: z.ZodArray<z.ZodObject<{
                    date: z.ZodString;
                    status: z.ZodEnum<{
                        degraded_performance: "degraded_performance";
                        major_outage: "major_outage";
                        operational: "operational";
                        partial_outage: "partial_outage";
                        under_maintenance: "under_maintenance";
                    }>;
                    downtimeMinutes: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    surfaces: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
        uptime: z.ZodNullable<z.ZodObject<{
            percent: z.ZodNumber;
            days: z.ZodArray<z.ZodObject<{
                date: z.ZodString;
                status: z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    operational: "operational";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>;
                downtimeMinutes: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    activeReports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    upcomingMaintenance: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    recentReports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    generatedAt: z.ZodString;
}, z.core.$strip>;
export type GetPublicStatusPageOutput = z.infer<typeof GetPublicStatusPageOutputSchema>;
export declare const GetPublicStatusReportInputSchema: z.ZodObject<{
    slug: z.ZodString;
    reportId: z.ZodString;
}, z.core.$strip>;
export declare const GetPublicStatusReportOutputSchema: z.ZodObject<{
    page: z.ZodObject<{
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>;
    report: z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetPublicStatusReportOutput = z.infer<typeof GetPublicStatusReportOutputSchema>;
export declare const ListPublicStatusReportsInputSchema: z.ZodObject<{
    slug: z.ZodString;
    month: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListPublicStatusReportsOutputSchema: z.ZodObject<{
    page: z.ZodObject<{
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>;
    month: z.ZodString;
    reports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ListPublicStatusReportsOutput = z.infer<typeof ListPublicStatusReportsOutputSchema>;
export declare const listStatusPages: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    statusPages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        visibility: z.ZodEnum<{
            hidden: "hidden";
            published: "published";
        }>;
        publishedAt: z.ZodNullable<z.ZodString>;
        suspended: z.ZodBoolean;
        url: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    usage: z.ZodObject<{
        count: z.ZodNumber;
        limit: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const getStatusPage: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    statusPage: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        visibility: z.ZodEnum<{
            hidden: "hidden";
            published: "published";
        }>;
        publishedAt: z.ZodNullable<z.ZodString>;
        suspended: z.ZodBoolean;
        url: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            collapsedByDefault: z.ZodBoolean;
        }, z.core.$strip>>;
        surfaces: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            sectionId: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            showUptime: z.ZodBoolean;
            status: z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                operational: "operational";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const createStatusPage: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    accentColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    theme: z.ZodOptional<z.ZodEnum<{
        dark: "dark";
        light: "light";
        system: "system";
    }>>;
    supportUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timezone: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    statusPage: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        visibility: z.ZodEnum<{
            hidden: "hidden";
            published: "published";
        }>;
        publishedAt: z.ZodNullable<z.ZodString>;
        suspended: z.ZodBoolean;
        url: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            collapsedByDefault: z.ZodBoolean;
        }, z.core.$strip>>;
        surfaces: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            sectionId: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            showUptime: z.ZodBoolean;
            status: z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                operational: "operational";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const updateStatusPage: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    logoUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    accentColor: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    theme: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        dark: "dark";
        light: "light";
        system: "system";
    }>>>;
    supportUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    timezone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    statusPageId: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    statusPage: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        visibility: z.ZodEnum<{
            hidden: "hidden";
            published: "published";
        }>;
        publishedAt: z.ZodNullable<z.ZodString>;
        suspended: z.ZodBoolean;
        url: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            collapsedByDefault: z.ZodBoolean;
        }, z.core.$strip>>;
        surfaces: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            sectionId: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            showUptime: z.ZodBoolean;
            status: z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                operational: "operational";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const deleteStatusPage: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    deleted: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const setStatusPageVisibility: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    visibility: z.ZodEnum<{
        hidden: "hidden";
        published: "published";
    }>;
}, z.core.$strip>, z.ZodObject<{
    statusPage: z.ZodObject<{
        id: z.ZodString;
        projectId: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        visibility: z.ZodEnum<{
            hidden: "hidden";
            published: "published";
        }>;
        publishedAt: z.ZodNullable<z.ZodString>;
        suspended: z.ZodBoolean;
        url: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            collapsedByDefault: z.ZodBoolean;
        }, z.core.$strip>>;
        surfaces: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            sectionId: z.ZodNullable<z.ZodString>;
            position: z.ZodNumber;
            showUptime: z.ZodBoolean;
            status: z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                operational: "operational";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const putStatusPageStructure: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    dryRun: z.ZodDefault<z.ZodBoolean>;
    sections: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        collapsedByDefault: z.ZodOptional<z.ZodBoolean>;
        surfaces: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            showUptime: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    surfaces: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        showUptime: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>, z.ZodObject<{
    dryRun: z.ZodBoolean;
    created: z.ZodArray<z.ZodString>;
    updated: z.ZodArray<z.ZodString>;
    removed: z.ZodArray<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const createStatusPageSection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    key: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNumber>;
    collapsedByDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    section: z.ZodObject<{
        id: z.ZodString;
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        position: z.ZodNumber;
        collapsedByDefault: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const updateStatusPageSection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    sectionId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNumber>;
    collapsedByDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    section: z.ZodObject<{
        id: z.ZodString;
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        position: z.ZodNumber;
        collapsedByDefault: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const deleteStatusPageSection: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    sectionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    deleted: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const createStatusPageSurface: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    key: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNumber>;
    showUptime: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    surface: z.ZodObject<{
        id: z.ZodString;
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        sectionId: z.ZodNullable<z.ZodString>;
        position: z.ZodNumber;
        showUptime: z.ZodBoolean;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const updateStatusPageSurface: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    surfaceId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNumber>;
    showUptime: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    surface: z.ZodObject<{
        id: z.ZodString;
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        sectionId: z.ZodNullable<z.ZodString>;
        position: z.ZodNumber;
        showUptime: z.ZodBoolean;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const deleteStatusPageSurface: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    surfaceId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    deleted: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const listStatusReports: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<{
        all: "all";
        open: "open";
        resolved: "resolved";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    reports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        statusPageId: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, "api">;
export declare const getStatusReport: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    reportId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    report: z.ZodObject<{
        id: z.ZodString;
        statusPageId: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            visibility: z.ZodEnum<{
                draft: "draft";
                published: "published";
            }>;
            publishedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceId: z.ZodString;
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const createStatusReport: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    statusPageId: z.ZodString;
    kind: z.ZodEnum<{
        incident: "incident";
        maintenance: "maintenance";
    }>;
    title: z.ZodString;
    scheduledStartAt: z.ZodOptional<z.ZodString>;
    scheduledEndAt: z.ZodOptional<z.ZodString>;
    update: z.ZodObject<{
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        message: z.ZodString;
        impacts: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>>>>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    report: z.ZodObject<{
        id: z.ZodString;
        statusPageId: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            visibility: z.ZodEnum<{
                draft: "draft";
                published: "published";
            }>;
            publishedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceId: z.ZodString;
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const createStatusReportUpdate: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    state: z.ZodEnum<{
        completed: "completed";
        identified: "identified";
        in_progress: "in_progress";
        investigating: "investigating";
        monitoring: "monitoring";
        resolved: "resolved";
        scheduled: "scheduled";
    }>;
    message: z.ZodString;
    impacts: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>>>>;
    reportId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    report: z.ZodObject<{
        id: z.ZodString;
        statusPageId: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            visibility: z.ZodEnum<{
                draft: "draft";
                published: "published";
            }>;
            publishedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceId: z.ZodString;
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const setStatusReportVisibility: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    reportId: z.ZodString;
    visibility: z.ZodLiteral<"published">;
}, z.core.$strip>, z.ZodObject<{
    report: z.ZodObject<{
        id: z.ZodString;
        statusPageId: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        visibility: z.ZodEnum<{
            draft: "draft";
            published: "published";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            visibility: z.ZodEnum<{
                draft: "draft";
                published: "published";
            }>;
            publishedAt: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceId: z.ZodString;
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    publishedUpdates: z.ZodNumber;
}, z.core.$strip>, "api">;
export declare const deleteStatusReport: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    reportId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    deleted: z.ZodLiteral<true>;
}, z.core.$strip>, "api">;
export declare const getPublicStatusPage: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    slug: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    page: z.ZodObject<{
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>;
    status: z.ZodEnum<{
        degraded_performance: "degraded_performance";
        major_outage: "major_outage";
        operational: "operational";
        partial_outage: "partial_outage";
        under_maintenance: "under_maintenance";
    }>;
    sections: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        collapsedByDefault: z.ZodBoolean;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
        surfaces: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                operational: "operational";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>;
            uptime: z.ZodNullable<z.ZodObject<{
                percent: z.ZodNumber;
                days: z.ZodArray<z.ZodObject<{
                    date: z.ZodString;
                    status: z.ZodEnum<{
                        degraded_performance: "degraded_performance";
                        major_outage: "major_outage";
                        operational: "operational";
                        partial_outage: "partial_outage";
                        under_maintenance: "under_maintenance";
                    }>;
                    downtimeMinutes: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    surfaces: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            degraded_performance: "degraded_performance";
            major_outage: "major_outage";
            operational: "operational";
            partial_outage: "partial_outage";
            under_maintenance: "under_maintenance";
        }>;
        uptime: z.ZodNullable<z.ZodObject<{
            percent: z.ZodNumber;
            days: z.ZodArray<z.ZodObject<{
                date: z.ZodString;
                status: z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    operational: "operational";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>;
                downtimeMinutes: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    activeReports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    upcomingMaintenance: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    recentReports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    generatedAt: z.ZodString;
}, z.core.$strip>, "api">;
export declare const getPublicStatusReport: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    slug: z.ZodString;
    reportId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    page: z.ZodObject<{
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>;
    report: z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>, "api">;
export declare const listPublicStatusReports: import("../orpc-contracts/index.js").OperationDefinition<z.ZodObject<{
    slug: z.ZodString;
    month: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    page: z.ZodObject<{
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        logoUrl: z.ZodNullable<z.ZodString>;
        accentColor: z.ZodNullable<z.ZodString>;
        theme: z.ZodEnum<{
            dark: "dark";
            light: "light";
            system: "system";
        }>;
        supportUrl: z.ZodNullable<z.ZodString>;
        timezone: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>;
    month: z.ZodString;
    reports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            incident: "incident";
            maintenance: "maintenance";
        }>;
        title: z.ZodString;
        state: z.ZodEnum<{
            completed: "completed";
            identified: "identified";
            in_progress: "in_progress";
            investigating: "investigating";
            monitoring: "monitoring";
            resolved: "resolved";
            scheduled: "scheduled";
        }>;
        startedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        scheduledStartAt: z.ZodNullable<z.ZodString>;
        scheduledEndAt: z.ZodNullable<z.ZodString>;
        impacts: z.ZodArray<z.ZodObject<{
            surfaceKey: z.ZodString;
            surfaceName: z.ZodString;
            impact: z.ZodNullable<z.ZodEnum<{
                degraded_performance: "degraded_performance";
                major_outage: "major_outage";
                partial_outage: "partial_outage";
                under_maintenance: "under_maintenance";
            }>>;
        }, z.core.$strip>>;
        updates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            state: z.ZodEnum<{
                completed: "completed";
                identified: "identified";
                in_progress: "in_progress";
                investigating: "investigating";
                monitoring: "monitoring";
                resolved: "resolved";
                scheduled: "scheduled";
            }>;
            message: z.ZodString;
            publishedAt: z.ZodString;
            impacts: z.ZodArray<z.ZodObject<{
                surfaceKey: z.ZodString;
                surfaceName: z.ZodString;
                impact: z.ZodNullable<z.ZodEnum<{
                    degraded_performance: "degraded_performance";
                    major_outage: "major_outage";
                    partial_outage: "partial_outage";
                    under_maintenance: "under_maintenance";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>, "api">;
