import type { ContractRouterClient } from "@orpc/contract";
import { type AddComponentRelationshipInput, type AddReposInput, type AddReposOutput, type AddTeamMemberInput, type AddTeamMemberOutput, type AssignComponentTeamInput, type AssignComponentTeamOutput, type AutoTopUpSettings, type BeginConnectedAccountConnectInput, type BeginConnectedAccountConnectOutput, type BeginIntegrationConnectInput, type BeginIntegrationConnectOutput, type BeginMcpOAuthInstallInput, type BeginMcpOAuthInstallOutput, type CallMcpConnectorToolInput, type CallMcpConnectorToolOutput, type CancelRunInput, type CancelRunOutput, type ChangePlanInput, type ChangePlanOutput, type CheckoutSessionStatus, type CommentOnWorkItemInput, type CommentOnWorkItemOutput, type CommitComponentMergeInput, type CommitComponentMergeOutput, type CommitComponentRestorationInput, type CommitComponentRestorationOutput, type CommitComponentRetirementInput, type CommitComponentRetirementOutput, type ComponentRelationshipMutationOutput, type CountIssuesInput, type CountIssuesOutput, type CreateAutomationInput, type CreateAutomationOutput, type CreateCheckoutSessionInput, type CreateCheckoutSessionOutput, type CreateDeliveryRuleInput, type CreateDeliveryRuleOutput, type CreateIntegrationConnectionInput, type CreateIntegrationConnectionOutput, type CreateIssueInput, type CreateIssueOutput, type CreateLogMatchExpressionInput, type CreateLogMatchExpressionOutput, type CreateLogSourceInput, type CreateLogSourceOutput, type CreateLogStreamInput, type CreateLogStreamOutput, type CreateMcpConnectorInput, type CreateMcpConnectorOutput, type CreatePortalSessionInput, type CreatePortalSessionOutput, type CreateProjectInput, type CreateProjectOutput, type CreateProjectScriptInput, type CreateProjectScriptOutput, type CreatePublicKeyOutput, type CreateSecretKeyInput, type CreateSecretKeyOutput, type CreateTeamInput, type CreateTeamOutput, type CreateThreadShareLinkInput, type CreateThreadShareLinkOutput, type CreateUserOrganizationInput, type CreateUserOrganizationOutput, type CreateWorkItemInput, type CreateWorkItemOutput, type DeactivatePublicKeyInput, type DeactivatePublicKeyOutput, type DeleteDeliveryRuleInput, type DeleteDeliveryRuleOutput, type DeleteKeyOutput, type DeleteLogSourceInput, type DeleteLogSourceOutput, type DeleteLogStreamInput, type DeleteLogStreamOutput, type DeleteProjectMemoryInput, type DeleteProjectMemoryOutput, type DeleteProjectScriptInput, type DeleteProjectScriptOutput, type DeleteSandboxPresetInput, type DeleteSandboxPresetOutput, type DeleteSecretKeyInput, type DeleteTeamInput, type DeleteTeamOutput, type DeliveryRuleOptionsOutput, type DeregisterComponentInput, type DeregisterComponentOutput, type DescribeMcpConnectorToolInput, type DescribeMcpConnectorToolOutput, type DisableAutomationInput, type DisableAutomationOutput, type DisableLogMatchExpressionInput, type DisableLogMatchExpressionOutput, type DisconnectConnectedAccountInput, type DisconnectConnectedAccountOutput, type DisconnectIntegrationConnectionInput, type DisconnectIntegrationConnectionOutput, type DisconnectMcpConnectorInput, type EnableAutomationInput, type EnableAutomationOutput, type EnsureLogForwardingPublicKeyInput, type FinishOnboardingInput, type FinishOnboardingOutput, type ForkThreadInput, type ForkThreadOutput, type GetAutomationInput, type GetAutomationOutput, type GetAutomationRunInput, type GetAutomationRunLogsInput, type GetAutomationRunLogsOutput, type GetAutomationRunOutput, type GetAutoTopUpInput, type GetBillingSummaryInput, type GetBillingSummaryOutput, type GetBillingUsageInput, type GetBillingUsageOutput, type GetCheckoutSessionStatusInput, type GetComponentInput, type GetComponentOutput, type GetConnectedAccountConnectAttemptInput, type GetConnectedAccountConnectAttemptOutput, type GetIntegrationConnectAttemptInput, type GetIntegrationConnectAttemptOutput, type GetIntegrationConnectionInput, type GetIntegrationConnectionOutput, type GetIssueInput, type GetIssueOutput, type GetKeyInput, type GetLogMatchExpressionInput, type GetLogMatchExpressionOutput, type GetLogSourceInput, type GetLogSourceOutput, type GetLogStreamInput, type GetLogStreamOutput, type GetMcpConnectorDetailsInput, type GetMcpConnectorDetailsOutput, type GetMcpConnectorInput, type GetMcpConnectorOutput, type GetMcpOAuthInstallAttemptInput, type GetMcpOAuthInstallAttemptOutput, type GetOnboardingStateInput, type GetOnboardingStateOutput, type GetOrganizationInput, type GetOrganizationOutput, type GetPaymentMethodInput, type GetProjectDetailsOutput, type GetProjectInput, type GetProjectMemoryInput, type GetProjectMemoryOutput, type GetProjectNotificationChannelsInput, type GetProjectNotificationChannelsOutput, type GetProjectScriptInput, type GetProjectScriptOutput, type GetPublicKeyOutput, type GetRunInput, type GetRunOutput, type GetSecretKeyInput, type GetSecretKeyOutput, type GetStatusTimelineInput, type GetStatusTimelineOutput, type GetThreadInput, type GetThreadOutput, type GetThreadStatusInput, type GetThreadStatusOutput, type IgnoreIssueInput, type IgnoreIssueOutput, type InviteMemberInput, type InviteMemberOutput, type ListAutomationRunsInput, type ListAutomationRunsOutput, type ListAutomationsInput, type ListAutomationsOutput, type ListBillingTransactionsInput, type ListBillingTransactionsOutput, type ListComponentRelationshipsInput, type ListComponentRelationshipsOutput, type ListComponentsInput, type ListComponentsOutput, type ListConnectedAccountsInput, type ListConnectedAccountsOutput, type ListDeliveryRulesInput, type ListDeliveryRulesOutput, type ListIntegrationConnectionsInput, type ListIntegrationConnectionsOutput, type ListIntegrationProvidersInput, type ListIntegrationProvidersOutput, type ListInvitationsInput, type ListInvitationsOutput, type ListIssuesInput, type ListIssuesOutput, type ListKeysInput, type ListLogMatchExpressionsInput, type ListLogMatchExpressionsOutput, type ListLogSourceProvidersOutput, type ListLogSourcesInput, type ListLogSourcesOutput, type ListLogStreamsInput, type ListLogStreamsOutput, type ListMcpConnectorsInput, type ListMcpConnectorsOutput, type ListMcpProvidersOutput, type ListMembersInput, type ListMembersOutput, type ListMessagesInput, type ListMessagesOutput, type ListOrganizationsOutput, type ListPlansInput, type ListPlansOutput, type ListProjectMemoryInput, type ListProjectMemoryOutput, type ListProjectScriptsInput, type ListProjectScriptsOutput, type ListProjectsInput, type ListProjectsOutput, type ListPublicKeysOutput, type ListPullRequestsInput, type ListPullRequestsOutput, type ListRecommendationsInput, type ListRecommendationsOutput, type ListReposInput, type ListReposOutput, type ListRunsInput, type ListRunsOutput, type ListSandboxPresetConnectionsInput, type ListSandboxPresetConnectionsOutput, type ListSandboxPresetTypesOutput, type ListSecretKeysInput, type ListSecretKeysOutput, type ListStatusIncidentsInput, type ListStatusIncidentsOutput, type ListTasksInput, type ListTasksOutput, type ListTeamMembersInput, type ListTeamMembersOutput, type ListTeamsInput, type ListTeamsOutput, type ListThreadRunsInput, type ListThreadRunsOutput, type ListThreadShareLinksInput, type ListThreadShareLinksOutput, type ListThreadsInput, type ListThreadsOutput, type LogsNativeQueryInput, type LogsNativeQueryOutput, type LogsPatternsInput, type LogsPatternsOutput, type LogsSchemaInput, type LogsSchemaOutput, type LogsVolumeInput, type LogsVolumeOutput, type MeOutput, type MuteIssueInput, type MuteIssueOutput, type PaymentMethodSummary, type PreviewComponentMergeInput, type PreviewComponentMergeOutput, type PreviewComponentRelationshipInput, type PreviewComponentRelationshipOutput, type PreviewComponentRestorationInput, type PreviewComponentRestorationOutput, type PreviewComponentRetirementInput, type PreviewComponentRetirementOutput, type PreviewPlanChangeInput, type PreviewPlanChangeOutput, type PublicApiContract, type PurchaseCreditsInput, type PurchaseCreditsOutput, type PutProjectMemoryInput, type PutProjectMemoryOutput, type QueryLogsInput, type QueryLogsOutput, type ReassignLogStreamInput, type ReassignLogStreamOutput, type RegisterComponentInput, type RegisterComponentOutput, type RemoveComponentRelationshipInput, type RemoveMemberInput, type RemoveMemberOutput, type RemoveRepoInput, type RemoveRepoOutput, type RemoveTeamMemberInput, type RemoveTeamMemberOutput, type RenameComponentInput, type RenameComponentOutput, type ReopenIssueInput, type ReopenIssueOutput, type ResolveIssueInput, type ResolveIssueOutput, type ResumeSubscriptionCancellationOutput, type RevokeInvitationInput, type RevokeInvitationOutput, type RevokeThreadShareLinkInput, type RevokeThreadShareLinkOutput, type RunResult, type ScheduleSubscriptionCancellationOutput, type SearchIssuesInput, type SearchIssuesOutput, type SearchMcpConnectorToolsInput, type SearchMcpConnectorToolsOutput, type SearchMessagesInput, type SearchMessagesOutput, type SearchProjectMemoryInput, type SearchProjectMemoryOutput, type SearchThreadsInput, type SearchThreadsOutput, type SetMcpConnectorReadOnlyInput, type SetMcpConnectorReadOnlyOutput, type SetThreadVisibilityInput, type SetThreadVisibilityOutput, type SkipOnboardingSampleIssueInput, type SkipOnboardingSampleIssueOutput, type StopThreadInput, type StopThreadOutput, type SubscriptionCancellationInput, type SubscriptionCancellationPreview, type TestSandboxPresetInput, type TestSandboxPresetOutput, type TransitionWorkItemInput, type TransitionWorkItemOutput, type UnmuteIssueInput, type UnmuteIssueOutput, type UpdateAutomationInput, type UpdateAutomationOutput, type UpdateAutoTopUpInput, type UpdateDeliveryRuleInput, type UpdateDeliveryRuleOutput, type UpdateIntegrationConnectionCredentialsInput, type UpdateIntegrationConnectionCredentialsOutput, type UpdateKeyInput, type UpdateLogMatchExpressionInput, type UpdateLogMatchExpressionOutput, type UpdateLogSourceInput, type UpdateLogSourceOutput, type UpdateLogStreamInput, type UpdateLogStreamOutput, type UpdateMcpConnectorInput, type UpdateMcpConnectorOutput, type UpdateMemberRoleInput, type UpdateMemberRoleOutput, type UpdateOrganizationInput, type UpdateOrganizationOutput, type UpdateProjectScriptInput, type UpdateProjectScriptOutput, type UpdateSecretKeyInput, type UpdateTeamInput, type UpdateTeamOutput, type UpdateThreadInput, type UpdateThreadOutput, type UpsertSandboxPresetInput, type UpsertSandboxPresetOutput } from "../public-api-contracts/index.js";
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
    /** Opaque run-scoped actor descriptor injected into trusted sandboxes. */
    sandboxActorDescriptor?: string;
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
        create(input: CreateAutomationInput): Promise<CreateAutomationOutput>;
        update(input: UpdateAutomationInput): Promise<UpdateAutomationOutput>;
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
    onboarding: {
        getState(input?: Partial<GetOnboardingStateInput>): Promise<GetOnboardingStateOutput>;
        skipSampleIssue(input?: SkipOnboardingSampleIssueInput): Promise<SkipOnboardingSampleIssueOutput>;
        finish(input: FinishOnboardingInput): Promise<FinishOnboardingOutput>;
    };
    organizations: {
        list(): Promise<ListOrganizationsOutput>;
        get(input: GetOrganizationInput): Promise<GetOrganizationOutput>;
        create(input: CreateUserOrganizationInput): Promise<CreateUserOrganizationOutput>;
        update(input: Omit<UpdateOrganizationInput, "organizationId"> & Partial<Pick<UpdateOrganizationInput, "organizationId">>): Promise<UpdateOrganizationOutput>;
    };
    members: {
        list(input?: Partial<ListMembersInput>): Promise<ListMembersOutput>;
        updateRole(input: Omit<UpdateMemberRoleInput, "organizationId"> & Partial<Pick<UpdateMemberRoleInput, "organizationId">>): Promise<UpdateMemberRoleOutput>;
        remove(input: Omit<RemoveMemberInput, "organizationId"> & Partial<Pick<RemoveMemberInput, "organizationId">>): Promise<RemoveMemberOutput>;
        invite(input: Omit<InviteMemberInput, "organizationId"> & Partial<Pick<InviteMemberInput, "organizationId">>): Promise<InviteMemberOutput>;
        listInvitations(input?: Partial<ListInvitationsInput>): Promise<ListInvitationsOutput>;
        revokeInvitation(input: Omit<RevokeInvitationInput, "organizationId"> & Partial<Pick<RevokeInvitationInput, "organizationId">>): Promise<RevokeInvitationOutput>;
    };
    teams: {
        list(input?: Partial<ListTeamsInput>): Promise<ListTeamsOutput>;
        create(input: Omit<CreateTeamInput, "organizationId"> & Partial<Pick<CreateTeamInput, "organizationId">>): Promise<CreateTeamOutput>;
        update(input: Omit<UpdateTeamInput, "organizationId"> & Partial<Pick<UpdateTeamInput, "organizationId">>): Promise<UpdateTeamOutput>;
        delete(input: Omit<DeleteTeamInput, "organizationId"> & Partial<Pick<DeleteTeamInput, "organizationId">>): Promise<DeleteTeamOutput>;
        addMember(input: Omit<AddTeamMemberInput, "organizationId"> & Partial<Pick<AddTeamMemberInput, "organizationId">>): Promise<AddTeamMemberOutput>;
        removeMember(input: Omit<RemoveTeamMemberInput, "organizationId"> & Partial<Pick<RemoveTeamMemberInput, "organizationId">>): Promise<RemoveTeamMemberOutput>;
        listMembers(input: Omit<ListTeamMembersInput, "organizationId"> & Partial<Pick<ListTeamMembersInput, "organizationId">>): Promise<ListTeamMembersOutput>;
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
    logSources: {
        listProviders(): Promise<ListLogSourceProvidersOutput>;
        list(input?: Partial<ListLogSourcesInput>): Promise<ListLogSourcesOutput>;
        get(input: GetLogSourceInput): Promise<GetLogSourceOutput>;
        create(input: Omit<CreateLogSourceInput, "projectId"> & Partial<Pick<CreateLogSourceInput, "projectId">>): Promise<CreateLogSourceOutput>;
        update(input: UpdateLogSourceInput): Promise<UpdateLogSourceOutput>;
        delete(input: DeleteLogSourceInput): Promise<DeleteLogSourceOutput>;
    };
    logStreams: {
        list(input: ListLogStreamsInput): Promise<ListLogStreamsOutput>;
        get(input: GetLogStreamInput): Promise<GetLogStreamOutput>;
        create(input: CreateLogStreamInput): Promise<CreateLogStreamOutput>;
        update(input: UpdateLogStreamInput): Promise<UpdateLogStreamOutput>;
        delete(input: DeleteLogStreamInput): Promise<DeleteLogStreamOutput>;
        reassign(input: ReassignLogStreamInput): Promise<ReassignLogStreamOutput>;
    };
    connectedAccounts: {
        beginConnect(input: BeginConnectedAccountConnectInput): Promise<BeginConnectedAccountConnectOutput>;
        getConnectAttempt(input: GetConnectedAccountConnectAttemptInput): Promise<GetConnectedAccountConnectAttemptOutput>;
        list(input?: Partial<ListConnectedAccountsInput>): Promise<ListConnectedAccountsOutput>;
        disconnect(input: DisconnectConnectedAccountInput): Promise<DisconnectConnectedAccountOutput>;
    };
    integrations: {
        listProviders(input?: Partial<ListIntegrationProvidersInput>): Promise<ListIntegrationProvidersOutput>;
        listConnections(input?: Partial<ListIntegrationConnectionsInput>): Promise<ListIntegrationConnectionsOutput>;
        getConnection(input: GetIntegrationConnectionInput): Promise<GetIntegrationConnectionOutput>;
        createConnection(input: CreateIntegrationConnectionInput): Promise<CreateIntegrationConnectionOutput>;
        beginConnect(input: BeginIntegrationConnectInput): Promise<BeginIntegrationConnectOutput>;
        getConnectAttempt(input: GetIntegrationConnectAttemptInput): Promise<GetIntegrationConnectAttemptOutput>;
        disconnectConnection(input: DisconnectIntegrationConnectionInput): Promise<DisconnectIntegrationConnectionOutput>;
        updateConnectionCredentials(input: UpdateIntegrationConnectionCredentialsInput): Promise<UpdateIntegrationConnectionCredentialsOutput>;
    };
    mcpConnectors: {
        list(input?: Partial<ListMcpConnectorsInput>): Promise<ListMcpConnectorsOutput>;
        get(input: Omit<GetMcpConnectorInput, "projectId"> & Partial<Pick<GetMcpConnectorInput, "projectId">>): Promise<GetMcpConnectorOutput>;
        details(input: Omit<GetMcpConnectorDetailsInput, "projectId"> & Partial<Pick<GetMcpConnectorDetailsInput, "projectId">>): Promise<GetMcpConnectorDetailsOutput>;
        listProviders(): Promise<ListMcpProvidersOutput>;
        search(input?: Partial<SearchMcpConnectorToolsInput>): Promise<SearchMcpConnectorToolsOutput>;
        describe(input: Omit<DescribeMcpConnectorToolInput, "projectId"> & Partial<Pick<DescribeMcpConnectorToolInput, "projectId">>): Promise<DescribeMcpConnectorToolOutput>;
        call(input: Omit<CallMcpConnectorToolInput, "projectId"> & Partial<Pick<CallMcpConnectorToolInput, "projectId">>): Promise<CallMcpConnectorToolOutput>;
        create(input: Omit<CreateMcpConnectorInput, "projectId"> & Partial<Pick<CreateMcpConnectorInput, "projectId">>): Promise<CreateMcpConnectorOutput>;
        update(input: Omit<UpdateMcpConnectorInput, "projectId"> & Partial<Pick<UpdateMcpConnectorInput, "projectId">>): Promise<UpdateMcpConnectorOutput>;
        disconnect(input: Omit<DisconnectMcpConnectorInput, "projectId"> & Partial<Pick<DisconnectMcpConnectorInput, "projectId">>): Promise<void>;
        setReadOnly(input: Omit<SetMcpConnectorReadOnlyInput, "projectId"> & Partial<Pick<SetMcpConnectorReadOnlyInput, "projectId">>): Promise<SetMcpConnectorReadOnlyOutput>;
        beginOAuthInstall(input: Omit<BeginMcpOAuthInstallInput, "projectId"> & Partial<Pick<BeginMcpOAuthInstallInput, "projectId">>): Promise<BeginMcpOAuthInstallOutput>;
        getOAuthInstallAttempt(input: Omit<GetMcpOAuthInstallAttemptInput, "projectId"> & Partial<Pick<GetMcpOAuthInstallAttemptInput, "projectId">>): Promise<GetMcpOAuthInstallAttemptOutput>;
    };
    sandboxPresets: {
        delete(input: Omit<DeleteSandboxPresetInput, "projectId"> & Partial<Pick<DeleteSandboxPresetInput, "projectId">>): Promise<DeleteSandboxPresetOutput>;
        listConnections(input?: Partial<ListSandboxPresetConnectionsInput>): Promise<ListSandboxPresetConnectionsOutput>;
        listTypes(): Promise<ListSandboxPresetTypesOutput>;
        test(input: Omit<TestSandboxPresetInput, "projectId"> & Partial<Pick<TestSandboxPresetInput, "projectId">>): Promise<TestSandboxPresetOutput>;
        upsert(input: Omit<UpsertSandboxPresetInput, "projectId"> & Partial<Pick<UpsertSandboxPresetInput, "projectId">>): Promise<UpsertSandboxPresetOutput>;
    };
    logMatchExpressions: {
        list(input?: Partial<ListLogMatchExpressionsInput>): Promise<ListLogMatchExpressionsOutput>;
        get(input: GetLogMatchExpressionInput): Promise<GetLogMatchExpressionOutput>;
        create(input: CreateLogMatchExpressionInput): Promise<CreateLogMatchExpressionOutput>;
        update(input: UpdateLogMatchExpressionInput): Promise<UpdateLogMatchExpressionOutput>;
        disable(input: DisableLogMatchExpressionInput): Promise<DisableLogMatchExpressionOutput>;
    };
    scripts: {
        list(input?: Partial<ListProjectScriptsInput>): Promise<ListProjectScriptsOutput>;
        get(input: GetProjectScriptInput): Promise<GetProjectScriptOutput>;
        create(input: CreateProjectScriptInput): Promise<CreateProjectScriptOutput>;
        update(input: UpdateProjectScriptInput): Promise<UpdateProjectScriptOutput>;
        delete(input: DeleteProjectScriptInput): Promise<DeleteProjectScriptOutput>;
    };
    memory: {
        list(input?: Partial<Omit<ListProjectMemoryInput, "kind">> & {
            kind?: string;
        }): Promise<ListProjectMemoryOutput>;
        get(input: GetProjectMemoryInput): Promise<GetProjectMemoryOutput>;
        put(input: PutProjectMemoryInput): Promise<PutProjectMemoryOutput>;
        search(input: Omit<SearchProjectMemoryInput, "kind" | "limit"> & {
            kind?: string;
            limit?: number;
        }): Promise<SearchProjectMemoryOutput>;
        delete(input: DeleteProjectMemoryInput): Promise<DeleteProjectMemoryOutput>;
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
    workItems: {
        create(input: Partial<CreateWorkItemInput> & Pick<CreateWorkItemInput, "container" | "title">): Promise<CreateWorkItemOutput>;
        comment(input: CommentOnWorkItemInput): Promise<CommentOnWorkItemOutput>;
        transition(input: TransitionWorkItemInput): Promise<TransitionWorkItemOutput>;
    };
    pullRequests: {
        list(input?: Partial<ListPullRequestsInput>): Promise<ListPullRequestsOutput>;
    };
    components: {
        list(input?: Partial<ListComponentsInput>): Promise<ListComponentsOutput>;
        get(input: GetComponentInput): Promise<GetComponentOutput>;
        register(input: Omit<RegisterComponentInput, "projectId"> & Partial<Pick<RegisterComponentInput, "projectId">>): Promise<RegisterComponentOutput>;
        deregister(input: DeregisterComponentInput): Promise<DeregisterComponentOutput>;
        rename(input: RenameComponentInput): Promise<RenameComponentOutput>;
        assignTeam(input: AssignComponentTeamInput): Promise<AssignComponentTeamOutput>;
        retirementPreview(input: PreviewComponentRetirementInput): Promise<PreviewComponentRetirementOutput>;
        retire(input: CommitComponentRetirementInput): Promise<CommitComponentRetirementOutput>;
        restorationPreview(input: PreviewComponentRestorationInput): Promise<PreviewComponentRestorationOutput>;
        restore(input: CommitComponentRestorationInput): Promise<CommitComponentRestorationOutput>;
        mergePreview(input: Omit<PreviewComponentMergeInput, "projectId"> & Partial<Pick<PreviewComponentMergeInput, "projectId">>): Promise<PreviewComponentMergeOutput>;
        merge(input: Omit<CommitComponentMergeInput, "projectId"> & Partial<Pick<CommitComponentMergeInput, "projectId">>): Promise<CommitComponentMergeOutput>;
        relationships: {
            list(input?: Partial<ListComponentRelationshipsInput>): Promise<ListComponentRelationshipsOutput>;
            preview(input: Omit<PreviewComponentRelationshipInput, "projectId"> & Partial<Pick<PreviewComponentRelationshipInput, "projectId">>): Promise<PreviewComponentRelationshipOutput>;
            add(input: Omit<AddComponentRelationshipInput, "projectId"> & Partial<Pick<AddComponentRelationshipInput, "projectId">>): Promise<ComponentRelationshipMutationOutput>;
            remove(input: Omit<RemoveComponentRelationshipInput, "projectId"> & Partial<Pick<RemoveComponentRelationshipInput, "projectId">>): Promise<ComponentRelationshipMutationOutput>;
        };
        incidents: {
            list(input?: Partial<ListStatusIncidentsInput>): Promise<ListStatusIncidentsOutput>;
        };
        timeline(input: GetStatusTimelineInput): Promise<GetStatusTimelineOutput>;
    };
    billing: {
        getSummary(input?: Partial<GetBillingSummaryInput>): Promise<GetBillingSummaryOutput>;
        getUsage(input?: Partial<GetBillingUsageInput>): Promise<GetBillingUsageOutput>;
        listTransactions(input?: Partial<ListBillingTransactionsInput>): Promise<ListBillingTransactionsOutput>;
        previewSubscriptionCancellation(input?: Partial<SubscriptionCancellationInput>): Promise<SubscriptionCancellationPreview>;
        scheduleSubscriptionCancellation(input?: Partial<SubscriptionCancellationInput>): Promise<ScheduleSubscriptionCancellationOutput>;
        resumeSubscriptionCancellation(input?: Partial<SubscriptionCancellationInput>): Promise<ResumeSubscriptionCancellationOutput>;
        getAutoTopUp(input?: Partial<GetAutoTopUpInput>): Promise<AutoTopUpSettings>;
        updateAutoTopUp(input: Omit<UpdateAutoTopUpInput, "organizationId"> & Partial<Pick<UpdateAutoTopUpInput, "organizationId">>): Promise<AutoTopUpSettings>;
        purchaseCredits(input: Omit<PurchaseCreditsInput, "organizationId"> & Partial<Pick<PurchaseCreditsInput, "organizationId">>): Promise<PurchaseCreditsOutput>;
        listPlans(input?: Partial<ListPlansInput>): Promise<ListPlansOutput>;
        previewPlanChange(input: Omit<PreviewPlanChangeInput, "organizationId"> & Partial<Pick<PreviewPlanChangeInput, "organizationId">>): Promise<PreviewPlanChangeOutput>;
        changePlan(input: Omit<ChangePlanInput, "organizationId"> & Partial<Pick<ChangePlanInput, "organizationId">>): Promise<ChangePlanOutput>;
        createCheckoutSession(input: Omit<CreateCheckoutSessionInput, "organizationId"> & Partial<Pick<CreateCheckoutSessionInput, "organizationId">>): Promise<CreateCheckoutSessionOutput>;
        getCheckoutSessionStatus(input: Omit<GetCheckoutSessionStatusInput, "organizationId"> & Partial<Pick<GetCheckoutSessionStatusInput, "organizationId">>): Promise<CheckoutSessionStatus>;
        createPortalSession(input?: Partial<CreatePortalSessionInput>): Promise<CreatePortalSessionOutput>;
        getPaymentMethod(input?: Partial<GetPaymentMethodInput>): Promise<PaymentMethodSummary>;
    };
    tasks: {
        list(input?: Partial<ListTasksInput>): Promise<ListTasksOutput>;
    };
    recommendations: {
        list(input?: Partial<ListRecommendationsInput>): Promise<ListRecommendationsOutput>;
    };
    repos: {
        list(input?: Partial<ListReposInput>): Promise<ListReposOutput>;
        add(input: Omit<AddReposInput, "projectId"> & Partial<Pick<AddReposInput, "projectId">>): Promise<AddReposOutput>;
        remove(input: Omit<RemoveRepoInput, "projectId"> & Partial<Pick<RemoveRepoInput, "projectId">>): Promise<RemoveRepoOutput>;
    };
    notificationDeliveryRules: {
        list(input?: Partial<ListDeliveryRulesInput>): Promise<ListDeliveryRulesOutput>;
        options(input?: Partial<ListDeliveryRulesInput>): Promise<DeliveryRuleOptionsOutput>;
        create(input: CreateDeliveryRuleInput): Promise<CreateDeliveryRuleOutput>;
        update(input: UpdateDeliveryRuleInput): Promise<UpdateDeliveryRuleOutput>;
        delete(input: DeleteDeliveryRuleInput): Promise<DeleteDeliveryRuleOutput>;
    };
    notificationChannels: {
        getProject(input?: Partial<GetProjectNotificationChannelsInput>): Promise<GetProjectNotificationChannelsOutput>;
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
