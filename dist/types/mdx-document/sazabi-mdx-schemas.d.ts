import { z } from "zod";
export declare const sazabiMdxDiagnosticSeveritySchema: z.ZodEnum<{
    error: "error";
    warning: "warning";
}>;
export declare const sazabiMdxDiagnosticSchema: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    severity: z.ZodDefault<z.ZodEnum<{
        error: "error";
        warning: "warning";
    }>>;
    path: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
    position: z.ZodOptional<z.ZodObject<{
        line: z.ZodOptional<z.ZodNumber>;
        column: z.ZodOptional<z.ZodNumber>;
        offset: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SazabiMdxDiagnostic = z.infer<typeof sazabiMdxDiagnosticSchema>;
export declare const sazabiMdxLimitsSchema: z.ZodObject<{
    maxSourceLength: z.ZodNumber;
    maxNodeCount: z.ZodNumber;
    maxComponentCount: z.ZodNumber;
    maxTableRows: z.ZodNumber;
    maxChartPoints: z.ZodNumber;
    maxPropPayloadSize: z.ZodNumber;
    maxComponentDepth: z.ZodNumber;
    maxCodeBlockLength: z.ZodNumber;
    maxTextLength: z.ZodNumber;
}, z.core.$strip>;
export type SazabiMdxLimits = z.infer<typeof sazabiMdxLimitsSchema>;
export type SazabiMdxJsonValue = null | boolean | number | string | SazabiMdxJsonValue[] | {
    [key: string]: SazabiMdxJsonValue;
};
export declare const sazabiMdxJsonValueSchema: z.ZodType<SazabiMdxJsonValue>;
export interface SazabiMdxRootNode {
    type: "root";
    children: SazabiMdxNode[];
}
export interface SazabiMdxTextNode {
    type: "text";
    value: string;
}
export interface SazabiMdxBreakNode {
    type: "break";
}
export interface SazabiMdxEmphasisNode {
    type: "emphasis";
    children: SazabiMdxNode[];
}
export interface SazabiMdxStrongNode {
    type: "strong";
    children: SazabiMdxNode[];
}
export interface SazabiMdxInlineCodeNode {
    type: "inlineCode";
    value: string;
}
export interface SazabiMdxLinkNode {
    type: "link";
    url: string;
    title?: string;
    children: SazabiMdxNode[];
}
export interface SazabiMdxParagraphNode {
    type: "paragraph";
    children: SazabiMdxNode[];
}
export interface SazabiMdxHeadingNode {
    type: "heading";
    depth: 1 | 2 | 3 | 4 | 5 | 6;
    children: SazabiMdxNode[];
}
export interface SazabiMdxListNode {
    type: "list";
    ordered: boolean;
    start?: number;
    children: SazabiMdxListItemNode[];
}
export interface SazabiMdxListItemNode {
    type: "listItem";
    checked?: boolean;
    children: SazabiMdxNode[];
}
export interface SazabiMdxBlockquoteNode {
    type: "blockquote";
    children: SazabiMdxNode[];
}
export interface SazabiMdxThematicBreakNode {
    type: "thematicBreak";
}
export interface SazabiMdxCodeNode {
    type: "code";
    value: string;
    language?: string;
    meta?: string;
}
export interface SazabiMdxTableNode {
    type: "table";
    align?: Array<"left" | "right" | "center" | null>;
    rows: SazabiMdxTableRowNode[];
}
export interface SazabiMdxTableRowNode {
    type: "tableRow";
    cells: SazabiMdxTableCellNode[];
}
export interface SazabiMdxTableCellNode {
    type: "tableCell";
    children: SazabiMdxNode[];
}
export interface SazabiMdxComponentNode {
    type: "component";
    name: string;
    props: Record<string, SazabiMdxJsonValue>;
    children: SazabiMdxNode[];
}
export type SazabiMdxInlineNode = SazabiMdxTextNode | SazabiMdxBreakNode | SazabiMdxEmphasisNode | SazabiMdxStrongNode | SazabiMdxInlineCodeNode | SazabiMdxLinkNode | SazabiMdxComponentNode;
export type SazabiMdxBlockNode = SazabiMdxParagraphNode | SazabiMdxHeadingNode | SazabiMdxListNode | SazabiMdxListItemNode | SazabiMdxBlockquoteNode | SazabiMdxThematicBreakNode | SazabiMdxCodeNode | SazabiMdxTableNode | SazabiMdxComponentNode;
export type SazabiMdxNode = SazabiMdxInlineNode | SazabiMdxBlockNode;
export declare const sazabiMdxNodeSchema: z.ZodType<SazabiMdxNode>;
export declare const sazabiMdxRootNodeSchema: z.ZodType<SazabiMdxRootNode>;
export declare const sazabiMdxDocumentSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    root: z.ZodType<SazabiMdxRootNode, unknown, z.core.$ZodTypeInternals<SazabiMdxRootNode, unknown>>;
    componentNames: z.ZodArray<z.ZodString>;
    limits: z.ZodObject<{
        maxSourceLength: z.ZodNumber;
        maxNodeCount: z.ZodNumber;
        maxComponentCount: z.ZodNumber;
        maxTableRows: z.ZodNumber;
        maxChartPoints: z.ZodNumber;
        maxPropPayloadSize: z.ZodNumber;
        maxComponentDepth: z.ZodNumber;
        maxCodeBlockLength: z.ZodNumber;
        maxTextLength: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SazabiMdxDocument = z.infer<typeof sazabiMdxDocumentSchema>;
export declare const sazabiMdxArtifactFileSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    title: z.ZodOptional<z.ZodString>;
    documentHash: z.ZodString;
    document: z.ZodObject<{
        version: z.ZodLiteral<1>;
        root: z.ZodType<SazabiMdxRootNode, unknown, z.core.$ZodTypeInternals<SazabiMdxRootNode, unknown>>;
        componentNames: z.ZodArray<z.ZodString>;
        limits: z.ZodObject<{
            maxSourceLength: z.ZodNumber;
            maxNodeCount: z.ZodNumber;
            maxComponentCount: z.ZodNumber;
            maxTableRows: z.ZodNumber;
            maxChartPoints: z.ZodNumber;
            maxPropPayloadSize: z.ZodNumber;
            maxComponentDepth: z.ZodNumber;
            maxCodeBlockLength: z.ZodNumber;
            maxTextLength: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SazabiMdxArtifactFile = z.infer<typeof sazabiMdxArtifactFileSchema>;
export declare const sazabiMdxComponentCategorySchema: z.ZodEnum<{
    artifact: "artifact";
    chart: "chart";
    data: "data";
    layout: "layout";
    setup: "setup";
    status: "status";
}>;
export type SazabiMdxComponentCategory = z.infer<typeof sazabiMdxComponentCategorySchema>;
export declare const sazabiMdxComponentSchema: z.ZodObject<{
    name: z.ZodString;
    category: z.ZodEnum<{
        artifact: "artifact";
        chart: "chart";
        data: "data";
        layout: "layout";
        setup: "setup";
        status: "status";
    }>;
    promptDescription: z.ZodString;
    limits: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$strip>;
export type SazabiMdxComponentMetadata = z.infer<typeof sazabiMdxComponentSchema>;
export interface SazabiMdxComponentDefinition<TProps extends Record<string, unknown> = Record<string, unknown>> extends SazabiMdxComponentMetadata {
    propSchema: z.ZodType<TProps>;
}
export type SazabiMdxComponentRegistry = ReadonlyMap<string, SazabiMdxComponentDefinition>;
export interface SazabiMdxComponentInstance {
    name: string;
    props: Record<string, SazabiMdxJsonValue>;
    path: Array<string | number>;
    position?: SazabiMdxDiagnostic["position"];
}
export interface SazabiMdxCompileSuccess {
    success: true;
    document: SazabiMdxDocument;
    diagnostics: SazabiMdxDiagnostic[];
    componentInstances: SazabiMdxComponentInstance[];
}
export interface SazabiMdxCompileFailure {
    success: false;
    diagnostics: SazabiMdxDiagnostic[];
}
export type SazabiMdxCompileResult = SazabiMdxCompileSuccess | SazabiMdxCompileFailure;
