import { type IssueCategory, type IssueType } from "./issue-types.js";
/**
 * How every human-facing surface shows an issue's fields
 * (docs/design/app/issue-field-display): Severity, Type, Status and
 * Component, in that order, with display casing. Machine payloads (webhook,
 * public API, MCP, OTel, incident-tool routing keys) keep the raw values.
 */
export type IssueSeverity = "low" | "medium" | "high" | "critical";
export type IssueStatus = "open" | "resolved" | "ignored";
export type IssueDisplayLabel = "Severity" | "Type" | "Status" | "Component";
export interface IssueDisplayField {
    label: IssueDisplayLabel;
    /** One entry, except Type: one entry per type, e.g. "Reliability (Outage)". */
    values: string[];
}
export declare const issueSeverityLabel: (severity: IssueSeverity) => string;
export declare const issueStatusLabel: (status: IssueStatus) => string;
/** "Reliability (Outage, Regression)", or "Reliability" with no categories. */
export declare const issueTypeDisplayValue: ({ type, categories, }: {
    type: IssueType;
    categories: readonly IssueCategory[];
}) => string;
/**
 * The issue's fields in display order. Status is left out with
 * `{ status: false }`, where the receiving tool owns the lifecycle; a
 * missing component is left out.
 */
export declare const issueDisplayFields: (issue: {
    severity: IssueSeverity;
    types: readonly IssueType[];
    categories: readonly IssueCategory[];
    status: IssueStatus;
    componentName: string | null;
}, options?: {
    status?: boolean;
}) => IssueDisplayField[];
/**
 * The display fields a notification's metadata carries (`displayFields`,
 * written at broadcast), or null when it carries none or a malformed list.
 */
export declare const readIssueDisplayFields: (metadata: unknown) => IssueDisplayField[] | null;
/** Key-value form: each label mapped to its values joined with ", ". */
export declare const issueDisplayRecord: (fields: IssueDisplayField[]) => Partial<Record<IssueDisplayLabel, string>>;
/** "High · Reliability (Outage), Security (Exposure) · Open · checkout-api" */
export declare const issueDisplayLine: (fields: IssueDisplayField[]) => string;
/**
 * SMS only: the line with type labels and no categories, shrunk to fit
 * `maxLength` (default 60). It shrinks in a fixed order: the component is
 * truncated to 20 characters, then types after the first collapse to `+N`,
 * then the component is dropped. Severity, the first type and status always
 * survive.
 */
export declare const issueDisplayCompactLine: (fields: IssueDisplayField[], options?: {
    maxLength?: number;
}) => string;
