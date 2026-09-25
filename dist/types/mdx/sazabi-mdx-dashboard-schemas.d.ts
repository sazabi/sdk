import { z } from "zod";
/**
 * Prop schemas for the dashboard metadata and layout components and the
 * shared component `id` prop (docs/design/app/mdx-dashboards). Props only:
 * cross-node rules (one leading `DashboardMeta`, `GridItem` spans within the
 * parent's columns, document-unique IDs) belong to the compiler.
 */
/**
 * Stable, document-unique identity for a layout item or an artifact-bound
 * component. Identifies panel results, diagnostics, and loading state, so it
 * must survive reordering; `GridItem` and component IDs share one namespace.
 */
export declare const sazabiMdxComponentIdSchema: z.ZodString;
export type SazabiMdxComponentId = z.infer<typeof sazabiMdxComponentIdSchema>;
/**
 * Machine-managed edit context on `DashboardMeta`: the revision an author
 * read. Never authorization and never part of the definition hash.
 */
export declare const dashboardEditBaseSchema: z.ZodObject<{
    organizationId: z.ZodString;
    projectId: z.ZodUUID;
    dashboardId: z.ZodUUID;
    revision: z.ZodNumber;
}, z.core.$strict>;
export type DashboardEditBase = z.infer<typeof dashboardEditBaseSchema>;
export declare const DASHBOARD_TITLE_MAX_LENGTH = 120;
export declare const DASHBOARD_DESCRIPTION_MAX_LENGTH = 500;
/** Non-rendering document metadata; dashboards require it as the first node. */
export declare const dashboardMetaPropsSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    title: z.ZodString;
    description: z.ZodString;
    defaultTimeRange: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"absolute">;
        from: z.ZodISODateTime;
        to: z.ZodISODateTime;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"relative">;
        lookbackSeconds: z.ZodNumber;
    }, z.core.$strict>], "kind">;
    editBase: z.ZodOptional<z.ZodObject<{
        organizationId: z.ZodString;
        projectId: z.ZodUUID;
        dashboardId: z.ZodUUID;
        revision: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type DashboardMetaProps = z.infer<typeof dashboardMetaPropsSchema>;
export declare const DASHBOARD_GRID_MAX_COLUMNS = 12;
export declare const DASHBOARD_GRID_ITEM_HEIGHTS: readonly ["compact", "medium", "tall"];
export type DashboardGridItemHeight = (typeof DASHBOARD_GRID_ITEM_HEIGHTS)[number];
export declare const gridPropsSchema: z.ZodObject<{
    columns: z.ZodNumber;
}, z.core.$strict>;
export type GridProps = z.infer<typeof gridPropsSchema>;
export declare const gridItemPropsSchema: z.ZodObject<{
    id: z.ZodString;
    span: z.ZodNumber;
    height: z.ZodOptional<z.ZodEnum<{
        compact: "compact";
        medium: "medium";
        tall: "tall";
    }>>;
}, z.core.$strict>;
export type GridItemProps = z.infer<typeof gridItemPropsSchema>;
