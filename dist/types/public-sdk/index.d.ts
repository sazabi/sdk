import type { ContractRouterClient } from "@orpc/contract";
import { type CancelRunInput, type CancelRunOutput, type CountIssuesInput, type CountIssuesOutput, type CreateDataSourceConnectionInput, type CreateDataSourceConnectionOutput, type CreateDataSourceStreamInput, type CreateDataSourceStreamOutput, type CreateIssueInput, type CreateIssueOutput, type CreateProjectInput, type CreateProjectOutput, type CreatePublicKeyOutput, type CreateSecretKeyInput, type CreateSecretKeyOutput, type CreateThreadShareLinkInput, type CreateThreadShareLinkOutput, type DeactivatePublicKeyInput, type DeactivatePublicKeyOutput, type DeleteDataSourceStreamInput, type DeleteDataSourceStreamOutput, type DeleteKeyOutput, type DeleteSecretKeyInput, type DeregisterStatusComponentInput, type DeregisterStatusComponentOutput, type DisableAutomationInput, type DisableAutomationOutput, type DisconnectDataSourceConnectionInput, type DisconnectDataSourceConnectionOutput, type EnableAutomationInput, type EnableAutomationOutput, type EnsureLogForwardingPublicKeyInput, type ForkThreadInput, type ForkThreadOutput, type GetAutomationInput, type GetAutomationOutput, type GetAutomationRunInput, type GetAutomationRunLogsInput, type GetAutomationRunLogsOutput, type GetAutomationRunOutput, type GetBillingSummaryInput, type GetBillingSummaryOutput, type GetBillingUsageInput, type GetBillingUsageOutput, type GetDataSourceConnectionInput, type GetDataSourceConnectionOutput, type GetDataSourceStreamInput, type GetDataSourceStreamOutput, type GetIntegrationConnectionInput, type GetIntegrationConnectionOutput, type GetIssueInput, type GetIssueOutput, type GetKeyInput, type GetMcpConnectorDetailsInput, type GetMcpConnectorDetailsOutput, type GetMcpConnectorInput, type GetMcpConnectorOutput, type GetOrganizationInput, type GetOrganizationOutput, type GetProjectDetailsOutput, type GetProjectInput, type GetPublicKeyOutput, type GetRunInput, type GetRunOutput, type GetSecretKeyInput, type GetSecretKeyOutput, type GetStatusComponentInput, type GetStatusComponentOutput, type GetStatusTimelineInput, type GetStatusTimelineOutput, type GetThreadInput, type GetThreadOutput, type GetThreadStatusInput, type GetThreadStatusOutput, type IgnoreIssueInput, type IgnoreIssueOutput, type ListAutomationRunsInput, type ListAutomationRunsOutput, type ListAutomationsInput, type ListAutomationsOutput, type ListBillingTransactionsInput, type ListBillingTransactionsOutput, type ListDataSourceConnectionsInput, type ListDataSourceConnectionsOutput, type ListDataSourceStreamsInput, type ListDataSourceStreamsOutput, type ListDataSourceTypesOutput, type ListIntegrationConnectionsInput, type ListIntegrationConnectionsOutput, type ListIntegrationProvidersInput, type ListIntegrationProvidersOutput, type ListIssuesInput, type ListIssuesOutput, type ListKeysInput, type ListMcpConnectorsInput, type ListMcpConnectorsOutput, type ListMcpProvidersOutput, type ListMembersInput, type ListMembersOutput, type ListMessagesInput, type ListMessagesOutput, type ListOrganizationsOutput, type ListProjectsInput, type ListProjectsOutput, type ListPublicKeysOutput, type ListPullRequestsInput, type ListPullRequestsOutput, type ListRecommendationsInput, type ListRecommendationsOutput, type ListRunsInput, type ListRunsOutput, type ListSandboxPresetConnectionsInput, type ListSandboxPresetConnectionsOutput, type ListSandboxPresetTypesOutput, type ListSecretKeysInput, type ListSecretKeysOutput, type ListStatusComponentsInput, type ListStatusComponentsOutput, type ListStatusIncidentsInput, type ListStatusIncidentsOutput, type ListTasksInput, type ListTasksOutput, type ListThreadRunsInput, type ListThreadRunsOutput, type ListThreadShareLinksInput, type ListThreadShareLinksOutput, type ListThreadsInput, type ListThreadsOutput, type LogsNativeQueryInput, type LogsNativeQueryOutput, type LogsPatternsInput, type LogsPatternsOutput, type LogsSchemaInput, type LogsSchemaOutput, type LogsVolumeInput, type LogsVolumeOutput, type MeOutput, type MuteIssueInput, type MuteIssueOutput, type PublicApiContract, type QueryLogsInput, type QueryLogsOutput, type RegisterStatusComponentInput, type RegisterStatusComponentOutput, type RemoveMemberInput, type RemoveMemberOutput, type ReopenIssueInput, type ReopenIssueOutput, type ResolveIssueInput, type ResolveIssueOutput, type RevokeThreadShareLinkInput, type RevokeThreadShareLinkOutput, type RunResult, type SearchIssuesInput, type SearchIssuesOutput, type SearchMessagesInput, type SearchMessagesOutput, type SearchThreadsInput, type SearchThreadsOutput, type SetThreadVisibilityInput, type SetThreadVisibilityOutput, type StopThreadInput, type StopThreadOutput, type UnmuteIssueInput, type UnmuteIssueOutput, type UpdateKeyInput, type UpdateMemberRoleInput, type UpdateMemberRoleOutput, type UpdateOrganizationInput, type UpdateOrganizationOutput, type UpdateSecretKeyInput, type UpdateThreadInput, type UpdateThreadOutput } from "../public-api-contracts/index.js";
import { type AgentEventStream, type AgentRunStreamParams, type AgentThreadStreamParams } from "./agent-stream-transports.js";
import { type ForwardLogsOutput, type ForwardLogsParams, type TailLogStream, type TailLogsParams } from "./log-transports.js";
export type { AgentStreamControlFrame, AgentStreamCursor, PublicAgentStreamEvent, PublicAgentStreamEventType, } from "../public-api-contracts/index.js";
export { AgentStreamControlFrameSchema, PublicAgentStreamEventSchema, PublicAgentStreamEventTypeSchema, } from "../public-api-contracts/index.js";
export type { AgentEventStream, AgentRunStreamParams, AgentStreamCredentialProvider, AgentThreadStreamParams, } from "./agent-stream-transports.js";
export type { ForwardLogsInput, ForwardLogsOutput, ForwardLogsParams, TailLogEntry, TailLogFilters, TailLogResource, TailLogStream, TailLogsInput, TailLogsParams, } from "./log-transports.js";
export { ForwardLogsInputSchema, ForwardLogsOutputSchema, forwardLogsExamples, TailLogEntrySchema, TailLogFiltersSchema, TailLogResourceSchema, TailLogsInputSchema, } from "./log-transports.js";
/**
 * Provides credentials and contextual selections for SDK calls.
 */
export interface CredentialProvider {
    getToken(): string | Promise<string>;
    getOrganizationId?(): string | undefined | Promise<string | undefined>;
    getProjectId?(): string | undefined | Promise<string | undefined>;
}
/**
 * Runtime configuration for the public API SDK.
 */
export interface CreateClientOptions {
    apiBaseUrl?: string;
    credentialProvider: CredentialProvider;
    fetch?: typeof globalThis.fetch;
    intakeBaseUrl?: string;
    tailBaseUrl?: string;
    /**
     * Identifies the client surface making the request (e.g. "cli", "mcp"). Sent
     * as the `x-sazabi-client-source` header so the public API can record the
     * true provenance of agent runs and their initiating messages instead of
     * flattening every SDK caller to "api". Omit for raw SDK/API callers.
     */
    clientSource?: string;
}
/**
 * Caller-facing input for deferred thread creation.
 */
export interface CreateThreadParams {
    message: string;
    projectId?: string;
    wait?: boolean;
    timeoutSeconds?: number;
    automationId?: string;
}
/**
 * Caller-facing input for deferred message append.
 */
export interface AppendMessageParams {
    threadId: string;
    message: string;
    wait?: boolean;
    timeoutSeconds?: number;
    automationId?: string;
}
/**
 * Polling options for deferred runs.
 */
export interface WaitForCompletionOptions {
    intervalMs?: number;
    timeoutMs?: number;
}
/**
 * Input for beginning a device authorization flow.
 */
export interface StartDeviceAuthorizationOptions {
    apiBaseUrl?: string;
    clientId?: string;
    scope?: string;
    fetch?: typeof globalThis.fetch;
}
/**
 * Input for polling a device authorization flow.
 */
export interface PollDeviceAuthorizationOptions {
    apiBaseUrl?: string;
    clientId?: string;
    deviceCode: string;
    fetch?: typeof globalThis.fetch;
}
/**
 * Device authorization response returned when the flow starts.
 */
export interface DeviceAuthorizationStart {
    deviceCode: string;
    userCode: string;
    verificationUri: string;
    verificationUriComplete: string;
    expiresIn: number;
    interval: number;
}
/**
 * Pending poll state.
 */
export interface DeviceAuthorizationPending {
    status: "pending";
    interval?: number;
}
/**
 * Successful poll state.
 */
export interface DeviceAuthorizationAuthorized {
    status: "authorized";
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    scope: string;
}
/**
 * Denied poll state.
 */
export interface DeviceAuthorizationDenied {
    status: "denied";
    message: string;
}
/**
 * Expired poll state.
 */
export interface DeviceAuthorizationExpired {
    status: "expired";
    message: string;
}
/**
 * Poll result for device authorization.
 */
export type DeviceAuthorizationPollResult = DeviceAuthorizationPending | DeviceAuthorizationAuthorized | DeviceAuthorizationDenied | DeviceAuthorizationExpired;
/**
 * SDK surface for contract-backed operations plus custom log transports.
 */
export interface PublicSdkClient {
    raw: ContractRouterClient<PublicApiContract>;
    me(): Promise<MeOutput>;
    automations: {
        list(input?: Partial<ListAutomationsInput>): Promise<ListAutomationsOutput>;
        get(input: GetAutomationInput): Promise<GetAutomationOutput>;
        enable(input: EnableAutomationInput): Promise<EnableAutomationOutput>;
        disable(input: DisableAutomationInput): Promise<DisableAutomationOutput>;
        runs: {
            list(input: Pick<ListAutomationRunsInput, "automationId"> & Partial<Omit<ListAutomationRunsInput, "automationId">>): Promise<ListAutomationRunsOutput>;
            get(input: GetAutomationRunInput): Promise<GetAutomationRunOutput>;
            logs(input: GetAutomationRunLogsInput): Promise<GetAutomationRunLogsOutput>;
        };
    };
    logs: {
        query(input?: QueryLogsInput): Promise<QueryLogsOutput>;
        schema(input?: LogsSchemaInput): Promise<LogsSchemaOutput>;
        volume(input: LogsVolumeInput): Promise<LogsVolumeOutput>;
        patterns(input?: LogsPatternsInput): Promise<LogsPatternsOutput>;
        nativeQuery(input: LogsNativeQueryInput): Promise<LogsNativeQueryOutput>;
        tail(input: TailLogsParams): Promise<TailLogStream>;
        forward(input: ForwardLogsParams): Promise<ForwardLogsOutput>;
    };
    organizations: {
        list(): Promise<ListOrganizationsOutput>;
        get(input: GetOrganizationInput): Promise<GetOrganizationOutput>;
        update(input: Omit<UpdateOrganizationInput, "organizationId"> & Partial<Pick<UpdateOrganizationInput, "organizationId">>): Promise<UpdateOrganizationOutput>;
    };
    members: {
        list(input?: Partial<ListMembersInput>): Promise<ListMembersOutput>;
        updateRole(input: Omit<UpdateMemberRoleInput, "organizationId"> & Partial<Pick<UpdateMemberRoleInput, "organizationId">>): Promise<UpdateMemberRoleOutput>;
        remove(input: Omit<RemoveMemberInput, "organizationId"> & Partial<Pick<RemoveMemberInput, "organizationId">>): Promise<RemoveMemberOutput>;
    };
    publicKeys: {
        list(input?: Partial<ListKeysInput>): Promise<ListPublicKeysOutput>;
        get(input: GetKeyInput): Promise<GetPublicKeyOutput>;
        ensureLogForwarding(input?: EnsureLogForwardingPublicKeyInput): Promise<CreatePublicKeyOutput>;
        update(input: UpdateKeyInput): Promise<GetPublicKeyOutput>;
        deactivate(input: DeactivatePublicKeyInput): Promise<DeactivatePublicKeyOutput>;
    };
    secretKeys: {
        list(input?: Partial<ListSecretKeysInput>): Promise<ListSecretKeysOutput>;
        get(input: GetSecretKeyInput): Promise<GetSecretKeyOutput>;
        create(input: CreateSecretKeyInput): Promise<CreateSecretKeyOutput>;
        update(input: UpdateSecretKeyInput): Promise<GetSecretKeyOutput>;
        delete(input: DeleteSecretKeyInput): Promise<DeleteKeyOutput>;
    };
    search: {
        threads(input: Pick<SearchThreadsInput, "query"> & Partial<Omit<SearchThreadsInput, "query">>): Promise<SearchThreadsOutput>;
        messages(input: Pick<SearchMessagesInput, "query"> & Partial<Omit<SearchMessagesInput, "query">>): Promise<SearchMessagesOutput>;
    };
    projects: {
        list(input?: Partial<ListProjectsInput>): Promise<ListProjectsOutput>;
        get(input: GetProjectInput): Promise<GetProjectDetailsOutput>;
        create(input: Pick<CreateProjectInput, "name"> & Partial<CreateProjectInput>): Promise<CreateProjectOutput>;
    };
    messages: {
        list(input: Pick<ListMessagesInput, "threadId"> & Partial<Omit<ListMessagesInput, "threadId">>): Promise<ListMessagesOutput>;
        append(input: AppendMessageParams): Promise<DeferredHandle>;
    };
    threads: {
        list(input?: Partial<ListThreadsInput>): Promise<ListThreadsOutput>;
        get(input: GetThreadInput): Promise<GetThreadOutput>;
        getStatus(input: GetThreadStatusInput): Promise<GetThreadStatusOutput>;
        stop(input: StopThreadInput): Promise<StopThreadOutput>;
        create(input: CreateThreadParams): Promise<DeferredHandle>;
        update(input: UpdateThreadInput): Promise<UpdateThreadOutput>;
        fork(input: ForkThreadInput): Promise<ForkThreadOutput>;
        setVisibility(input: SetThreadVisibilityInput): Promise<SetThreadVisibilityOutput>;
        createShareLink(input: CreateThreadShareLinkInput): Promise<CreateThreadShareLinkOutput>;
        listShareLinks(input: ListThreadShareLinksInput): Promise<ListThreadShareLinksOutput>;
        revokeShareLink(input: RevokeThreadShareLinkInput): Promise<RevokeThreadShareLinkOutput>;
        /**
         * Opens a Server-Sent Events stream of the thread's live agent-run events.
         * Iterate the result; read `.cursor` to resume after a disconnect.
         */
        stream(input: AgentThreadStreamParams): Promise<AgentEventStream>;
    };
    runs: {
        list(input?: Partial<ListRunsInput>): Promise<ListRunsOutput>;
        listForThread(input: Pick<ListThreadRunsInput, "threadId"> & Partial<Omit<ListThreadRunsInput, "threadId">>): Promise<ListThreadRunsOutput>;
        get(input: GetRunInput): Promise<GetRunOutput>;
        cancel(input: CancelRunInput): Promise<CancelRunOutput>;
        /**
         * Opens a Server-Sent Events stream of the run's agent events. Iterate the
         * result; read `.cursor` to resume after a disconnect.
         */
        stream(input: AgentRunStreamParams): Promise<AgentEventStream>;
    };
    dataSources: {
        listTypes(): Promise<ListDataSourceTypesOutput>;
        connections: {
            list(input?: Partial<ListDataSourceConnectionsInput>): Promise<ListDataSourceConnectionsOutput>;
            get(input: GetDataSourceConnectionInput): Promise<GetDataSourceConnectionOutput>;
            create(input: Omit<CreateDataSourceConnectionInput, "projectId"> & Partial<Pick<CreateDataSourceConnectionInput, "projectId">>): Promise<CreateDataSourceConnectionOutput>;
            disconnect(input: DisconnectDataSourceConnectionInput): Promise<DisconnectDataSourceConnectionOutput>;
        };
        streams: {
            list(input: ListDataSourceStreamsInput): Promise<ListDataSourceStreamsOutput>;
            get(input: GetDataSourceStreamInput): Promise<GetDataSourceStreamOutput>;
            create(input: CreateDataSourceStreamInput): Promise<CreateDataSourceStreamOutput>;
            delete(input: DeleteDataSourceStreamInput): Promise<DeleteDataSourceStreamOutput>;
        };
    };
    integrations: {
        listProviders(input?: Partial<ListIntegrationProvidersInput>): Promise<ListIntegrationProvidersOutput>;
        listConnections(input?: Partial<ListIntegrationConnectionsInput>): Promise<ListIntegrationConnectionsOutput>;
        getConnection(input: GetIntegrationConnectionInput): Promise<GetIntegrationConnectionOutput>;
    };
    mcpConnectors: {
        list(input?: Partial<ListMcpConnectorsInput>): Promise<ListMcpConnectorsOutput>;
        get(input: Omit<GetMcpConnectorInput, "projectId"> & Partial<Pick<GetMcpConnectorInput, "projectId">>): Promise<GetMcpConnectorOutput>;
        details(input: Omit<GetMcpConnectorDetailsInput, "projectId"> & Partial<Pick<GetMcpConnectorDetailsInput, "projectId">>): Promise<GetMcpConnectorDetailsOutput>;
        listProviders(): Promise<ListMcpProvidersOutput>;
    };
    sandboxPresets: {
        listConnections(input?: Partial<ListSandboxPresetConnectionsInput>): Promise<ListSandboxPresetConnectionsOutput>;
        listTypes(): Promise<ListSandboxPresetTypesOutput>;
    };
    issues: {
        count(input?: Partial<CountIssuesInput>): Promise<CountIssuesOutput>;
        create(input: Omit<CreateIssueInput, "projectId"> & Partial<Pick<CreateIssueInput, "projectId">>): Promise<CreateIssueOutput>;
        list(input?: Partial<ListIssuesInput>): Promise<ListIssuesOutput>;
        search(input?: Partial<SearchIssuesInput>): Promise<SearchIssuesOutput>;
        get(input: GetIssueInput): Promise<GetIssueOutput>;
        resolve(input: ResolveIssueInput): Promise<ResolveIssueOutput>;
        ignore(input: IgnoreIssueInput): Promise<IgnoreIssueOutput>;
        reopen(input: ReopenIssueInput): Promise<ReopenIssueOutput>;
        mute(input: MuteIssueInput): Promise<MuteIssueOutput>;
        unmute(input: UnmuteIssueInput): Promise<UnmuteIssueOutput>;
    };
    pullRequests: {
        list(input?: Partial<ListPullRequestsInput>): Promise<ListPullRequestsOutput>;
    };
    statusComponents: {
        list(input?: Partial<ListStatusComponentsInput>): Promise<ListStatusComponentsOutput>;
        get(input: GetStatusComponentInput): Promise<GetStatusComponentOutput>;
        register(input: Omit<RegisterStatusComponentInput, "projectId"> & Partial<Pick<RegisterStatusComponentInput, "projectId">>): Promise<RegisterStatusComponentOutput>;
        deregister(input: DeregisterStatusComponentInput): Promise<DeregisterStatusComponentOutput>;
        incidents: {
            list(input?: Partial<ListStatusIncidentsInput>): Promise<ListStatusIncidentsOutput>;
        };
        timeline(input: GetStatusTimelineInput): Promise<GetStatusTimelineOutput>;
    };
    billing: {
        getSummary(input?: Partial<GetBillingSummaryInput>): Promise<GetBillingSummaryOutput>;
        getUsage(input?: Partial<GetBillingUsageInput>): Promise<GetBillingUsageOutput>;
        listTransactions(input?: Partial<ListBillingTransactionsInput>): Promise<ListBillingTransactionsOutput>;
    };
    tasks: {
        list(input?: Partial<ListTasksInput>): Promise<ListTasksOutput>;
    };
    recommendations: {
        list(input?: Partial<ListRecommendationsInput>): Promise<ListRecommendationsOutput>;
    };
}
/**
 * Deferred handle returned by async thread-creation operations.
 */
export interface DeferredHandle {
    result: RunResult;
    poll(): Promise<GetRunOutput>;
    waitForCompletion(options?: WaitForCompletionOptions): Promise<GetRunOutput>;
}
/**
 * Creates a public API SDK client backed by oRPC's OpenAPI link.
 */
export declare const createClient: (options: CreateClientOptions) => PublicSdkClient;
/**
 * Starts a Better Auth device authorization flow.
 */
export declare const startDeviceAuthorization: (options?: StartDeviceAuthorizationOptions) => Promise<DeviceAuthorizationStart>;
/**
 * Polls a Better Auth device authorization flow for completion.
 */
export declare const pollDeviceAuthorization: (options: PollDeviceAuthorizationOptions) => Promise<DeviceAuthorizationPollResult>;
