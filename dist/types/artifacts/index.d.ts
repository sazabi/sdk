/**
 * @sazabi/artifacts - Artifact name constants and helpers for AI agent
 * visualizations.
 *
 * This package provides the canonical artifact name constants used across
 * the system for identifying artifact types, plus artifact-kind helpers
 * such as issue card extraction.
 */
import { ARTIFACT_NAMES } from "./artifact-names.js";
export { ARTIFACT_NAMES } from "./artifact-names.js";
/**
 * Max length for AI-generated timeseries artifact titles.
 */
export declare const TIMESERIES_TITLE_MAX_LENGTH = 80;
/**
 * Union type of all valid artifact names.
 */
export type ArtifactName = (typeof ARTIFACT_NAMES)[keyof typeof ARTIFACT_NAMES];
/**
 * All artifact name values. Single source of truth for the read-side name
 * enums/sets so they cannot drift from `ARTIFACT_NAMES`.
 */
export declare const ARTIFACT_NAME_VALUES: ("alert_card" | "code_diff" | "custom" | "github_entity" | "integration_required" | "issue_card" | "log_detail" | "mdx" | "secret_input" | "table" | "timeseries")[];
/**
 * Artifact names a NEW artifact write may use. End state: only `mdx`.
 *
 * Every entry except `mdx` is pending migration — remove it as its producing
 * tool is deleted or refactored to emit an `mdx` descriptor (see
 * docs/design/agent/mdx-artifact-contract). `code_diff`, `alert_card`,
 * `issue_card`, `secret_input`, `custom`, and `github_entity` are intentionally
 * absent: they have no live producer and are read-legacy only.
 */
export declare const WRITEABLE_ARTIFACT_NAMES: Set<ArtifactName>;
/**
 * Shared identity for the issue body that issue creation inlines onto the issue
 * thread as a `render_mdx` artifact message (see `createIssue` in
 * `@sazabi/tools`).
 *
 * That message is load-bearing and must never be dropped from the data: it is
 * the agent's canonical copy of the full issue body (`loadThreadMessages` reads
 * it into model context) and the fallback body when the created-event
 * `mdx_documents` row fails to persist. The issue thread hides it *visually*
 * only — the `created` event card already renders the same body — so this
 * shared predicate is the single source of truth both the writer (issue
 * creation) and the reader (dashboard transcript) use to identify it.
 */
export declare const INLINE_ISSUE_BODY_TOOL_CALL_PREFIX = "trigger_issue_content:";
/** Builds the tool-call id for an issue's inlined-body thread message. */
export declare const buildInlineIssueBodyToolCallId: (issueId: string) => string;
/** True when a tool-call id belongs to an issue's inlined-body thread message. */
export declare const isInlineIssueBodyToolCallId: (value: unknown) => boolean;
export { IMAGE_FILE_MAX_BYTES, imageContentTypeFromPath, normalizeProjectStoreImagePath, } from "./artifact-image-path.js";
export { normalizeProjectStoreVideoPath, VIDEO_FILE_MAX_BYTES, videoContentTypeFromPath, } from "./artifact-video-path.js";
export { ARTIFACT_FILE_MAX_BYTES, normalizeCustomArtifactPath, } from "./custom-artifact-path.js";
export { artifactDataSchemaByType, artifactDefinitionSchema, artifactViewSchemaByType, queryArtifactV2Schema, renderableArtifactSchema, SERIES_ARTIFACT_MAX_SERIES, SUPPORTED_ARTIFACT_TYPES, seriesArtifactPointSchema, seriesArtifactSeriesSchema, SUPPORTED_QUERY_ARTIFACT_TYPES, staticArtifactDefinitionSchema, staticArtifactV2Schema, TABLE_ARTIFACT_MAX_COLUMNS, TABLE_ARTIFACT_MAX_ROWS, type ArtifactDataByType, type ArtifactDefinition, type ArtifactViewByType, type QueryArtifact, type QueryArtifactV2, type RenderableArtifact, type SeriesArtifactPoint, type SeriesArtifactSeries, type StaticArtifact, type StaticArtifactDefinition, type StaticArtifactV2, type SupportedArtifactType, type SupportedQueryArtifactType, } from "./artifact-definition.js";
export { renderableArtifactPoints, toRenderableArtifact, } from "./renderable-artifact.js";
export { extractIssueCardIssueIds } from "./issue-card.js";
export { areaChartArtifactFileSchema, areaChartDataSchema, chartSeriesSchema, chartToneSchema, flameChartArtifactFileSchema, flameChartDataSchema, graphChartArtifactFileSchema, graphChartDataSchema, graphEdgeSchema, graphNodeSchema, hierarchyItemSchema, seriesPointSchema, timelineItemSchema, treemapChartArtifactFileSchema, treemapChartDataSchema, universalChartArtifactFileSchema, waterfallChartArtifactFileSchema, waterfallChartDataSchema, type AreaChartData, type ChartSeries, type ChartTone, type FlameChartData, type GraphChartData, type GraphEdge, type GraphNode, type HierarchyItem, type SeriesPoint, type TimelineItem, type TreemapChartData, type UniversalChartArtifactFile, type WaterfallChartData, } from "./chart-data.js";
export { normalizeArtifactsRelativePath } from "./normalize-artifacts-relative-path.js";
export { SANDBOX_ARTIFACTS_PATH } from "./paths.js";
export { type ProjectStoreMediaKind, type ResolvedProjectStoreMediaPath, resolveProjectStoreMediaPath, } from "./resolve-project-store-media-path.js";
