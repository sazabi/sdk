export type IssueSeverityLevel = "low" | "medium" | "high" | "critical";
/**
 * The one definition of each severity level (ENG-8286). Create inputs, the
 * agent's trigger-issue tool, and CLI help all render it, so a level means the
 * same thing wherever it is chosen or filtered on.
 */
export declare const ISSUE_SEVERITY_RUBRIC: {
    readonly critical: "Happening now in production: an outage of the service, of a flow most users depend on, or of a whole feature; or data loss, a security exposure, or failed payments.";
    readonly high: "Happening now in production: at least 1% of attempts failing or a region down; or production data loss, exposure, or failed payments that has stopped.";
    readonly medium: "A failure limited to a few users or one path, a broad internal failure, a production outage that ended on its own, or serious harm outside production.";
    readonly low: "No user or system impact, a transient blip, an internal failure on one item or a rare path, or other work outside production, including eval, training, and canary runs.";
};
/** The rubric as one field description. */
export declare const ISSUE_SEVERITY_DESCRIPTION: string;
