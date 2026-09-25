/**
 * Returns the issueIds of every issue card carried by an artifact part:
 * IssueCardRef instances in an mdx artifact's document, or the legacy
 * issue_card/alert_card payloads. The document is the single source of
 * truth for mdx artifacts — there is no envelope side-channel — so cards
 * authored by any producer (issue creation, render_mdx) are all visible.
 */
export declare const extractIssueCardIssueIds: (part: {
    name?: unknown;
    data?: unknown;
}) => string[];
