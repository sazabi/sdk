/** Canonical names used to identify persisted artifact kinds. */
export declare const ARTIFACT_NAMES: {
    readonly timeseries: "timeseries";
    readonly table: "table";
    readonly logDetail: "log_detail";
    readonly integrationRequired: "integration_required";
    /** @deprecated Use `issueCard` for new writes. */
    readonly alertCard: "alert_card";
    readonly issueCard: "issue_card";
    readonly secretInput: "secret_input";
    readonly custom: "custom";
    readonly codeDiff: "code_diff";
    readonly mdx: "mdx";
    readonly githubEntity: "github_entity";
};
