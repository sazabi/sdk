import { type DashboardEditBase, type DashboardMetaProps } from "./sazabi-mdx-dashboard-schemas.js";
import type { SazabiMdxDiagnostic } from "./sazabi-mdx-schemas.js";
/**
 * The dashboard source serializer (docs/design/app/mdx-dashboards,
 * "Automatic edit metadata" and "Edit metadata never becomes saved
 * content"). It locates the leading `DashboardMeta` element through the MDX
 * parser, reads its props as static literals, and reprints only that element
 * in one canonical form; every other source byte is preserved. Stripping and
 * inserting `editBase` therefore never changes the rest of the document, and
 * the canonical source (no `editBase`) hashes the same across save, download,
 * reimport, and repeated edit-base refreshes.
 */
type DashboardMetaWithoutEditBase = Omit<DashboardMetaProps, "editBase">;
export type DashboardSourceResult<T> = ({
    success: true;
} & T) | {
    success: false;
    diagnostics: SazabiMdxDiagnostic[];
};
/** The one canonical spelling of a `DashboardMeta` element. */
export declare const printDashboardMeta: (props: DashboardMetaProps) => string;
/**
 * The canonical dashboard source: `DashboardMeta` reprinted without
 * `editBase`, every other byte unchanged. This is what persistence stores
 * and the definition hash covers; the removed base is returned beside it.
 */
export declare const canonicalizeDashboardMdx: (source: string) => DashboardSourceResult<{
    source: string;
    meta: DashboardMetaWithoutEditBase;
    editBase: DashboardEditBase | null;
}>;
/**
 * Inserts or replaces `DashboardMeta.editBase`, reprinting only that
 * element. Used after create/update, by get, and by clients refreshing a
 * local file.
 */
export declare const setDashboardMdxEditBase: (source: string, editBase: DashboardEditBase) => DashboardSourceResult<{
    source: string;
}>;
export {};
