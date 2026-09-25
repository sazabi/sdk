import type { ContractRouterClient } from "@orpc/contract";
import type { CreateWebhookInput, CreateWebhookOutput, DeleteArtifactInput, DeleteArtifactOutput, DeleteWebhookInput, DeleteWebhookOutput, DownloadArtifactInput, DownloadArtifactOutput, EnableWebhookInput, EnableWebhookOutput, GetArtifactInput, GetArtifactOutput, GetWebhookInput, GetWebhookOutput, ListArtifactsInput, ListArtifactsOutput, ListIssueArtifactsInput, ListIssueArtifactsOutput, ListWebhookDeliveriesInput, ListWebhookDeliveriesOutput, ListWebhooksInput, ListWebhooksOutput, RotateWebhookSecretInput, RotateWebhookSecretOutput, SubscribeWebhookInput, SubscribeWebhookOutput, TestWebhookInput, TestWebhookOutput, UnsubscribeWebhookInput, UnsubscribeWebhookOutput, UpdateWebhookInput, UpdateWebhookOutput, AddComponentRelationshipInput, AddReposInput, AddReposOutput, AddTeamMemberInput, AddTeamMemberOutput, AssignComponentTeamInput, AssignComponentTeamOutput, AutoTopUpSettings, BeginConnectedAccountConnectInput, BeginConnectedAccountConnectOutput, BeginIntegrationConnectInput, BeginIntegrationConnectOutput, BeginMcpOAuthInstallInput, BeginMcpOAuthInstallOutput, CallMcpConnectorToolInput, CallMcpConnectorToolOutput, CancelRunInput, CancelRunOutput, ChangePlanInput, ChangePlanOutput, CheckoutSessionStatus, CommentOnTaskInput, CommentOnTaskOutput, CommentOnWorkItemInput, CommentOnWorkItemOutput, CommitComponentMergeInput, CommitComponentMergeOutput, CommitComponentReactivationInput, CommitComponentReactivationOutput, ComponentRelationshipMutationOutput, CreateAutomationInput, CreateAutomationOutput, CreateCheckoutSessionInput, CreateCheckoutSessionOutput, CreateDeliveryRuleInput, CreateDeliveryRuleOutput, CreateTaskCreationRuleInput, CreateTaskCreationRuleOutput, DeleteTaskCreationRuleInput, DeleteTaskCreationRuleOutput, GetTaskCreationRuleInput, GetTaskCreationRuleOutput, ListTaskCreationRulesInput, ListTaskCreationRulesOutput, ReorderTaskCreationRulesInput, ReorderTaskCreationRulesOutput, UpdateTaskCreationRuleInput, UpdateTaskCreationRuleOutput, CreateIntegrationConnectionInput, CreateIntegrationConnectionOutput, CreateIssueInput, CreateIssueOutput, CreateLogSourceInput, CreateLogSourceOutput, CreateLogStreamInput, CreateLogStreamOutput, CreateMcpConnectorInput, CreateMcpConnectorOutput, CreateSlackChannelInput, CreateSlackChannelOutput, CreatePortalSessionInput, CreatePortalSessionOutput, CreateProjectInput, CreateProjectMemoryInput, CreateProjectMemoryOutput, CreateProjectOutput, CreateProjectScriptInput, CreateProjectScriptOutput, CreatePublicKeyOutput, CreateSecretKeyInput, CreateSecretKeyOutput, CreateSignalDefinitionInput, CreateSignalDefinitionOutput, CreateTeamInput, CreateTeamOutput, CreateThreadShareLinkInput, CreateThreadShareLinkOutput, CreateUserOrganizationInput, CreateUserOrganizationOutput, CreateTaskInput, CreateTaskOutput, CreateWorkItemInput, CreateWorkItemOutput, DeactivatePublicKeyInput, DeactivatePublicKeyOutput, DeleteDeliveryRuleInput, DeleteDeliveryRuleOutput, DeleteKeyOutput, DeleteLogSourceInput, DeleteLogSourceOutput, DeleteLogStreamInput, DeleteLogStreamOutput, DeleteProjectMemoryInput, DeleteProjectMemoryOutput, DeleteProjectScriptInput, DeleteProjectScriptOutput, DeleteSandboxEnvironmentVariableInput, DeleteSandboxEnvironmentVariableOutput, DeleteSandboxCliInput, DeleteSandboxCliOutput, DeleteSecretKeyInput, DeleteTeamInput, DeleteTeamOutput, DeliveryRuleOptionsOutput, DeregisterComponentInput, DeregisterComponentOutput, DescribeMcpConnectorToolInput, DescribeMcpConnectorToolOutput, DisableAutomationInput, DisableAutomationOutput, DisableSignalDefinitionInput, DisableSignalDefinitionOutput, DisconnectConnectedAccountInput, DisconnectConnectedAccountOutput, DisconnectIntegrationConnectionInput, DisconnectIntegrationConnectionOutput, DisconnectMcpConnectorInput, EnableAutomationInput, EnableAutomationOutput, EnsureLogForwardingPublicKeyInput, FinishOnboardingInput, FinishOnboardingOutput, ForkThreadInput, ForkThreadOutput, GetAccruedUsageChargesInput, GetAccruedUsageChargesOutput, GetAutomationInput, GetAutomationOutput, GetAutomationRunInput, GetAutomationRunLogsInput, GetAutomationRunLogsOutput, GetAutomationRunOutput, GetAutoTopUpInput, GetBillingSummaryInput, GetBillingSummaryOutput, GetBillingUsageInput, GetBillingUsageOutput, GetCheckoutSessionStatusInput, GetComponentInput, GetComponentOutput, GetConnectedAccountConnectAttemptInput, GetConnectedAccountConnectAttemptOutput, GetIntegrationConnectAttemptInput, GetIntegrationConnectAttemptOutput, GetIntegrationConnectionInput, GetIntegrationConnectionOutput, GetIssueInput, GetIssueOutput, GetKeyInput, GetLogSourceInput, GetLogSourceOutput, GetLogStreamInput, GetLogStreamOutput, GetMcpConnectorDetailsInput, GetMcpConnectorDetailsOutput, GetMcpConnectorInput, GetMcpConnectorOutput, GetMcpOAuthInstallAttemptInput, GetMcpOAuthInstallAttemptOutput, GetOnboardingStateInput, GetOnboardingStateOutput, GetOrganizationInput, GetOrganizationOutput, GetPaymentMethodInput, GetProjectDetailsOutput, GetProjectInput, GetProjectMemoryInput, GetProjectMemoryOutput, GetProjectNotificationChannelsInput, GetProjectNotificationChannelsOutput, GetProjectScriptInput, GetProjectScriptOutput, GetSandboxEnvironmentVariableInput, GetSandboxEnvironmentVariableOutput, GetPublicKeyOutput, GetRunInput, GetRunOutput, GetSecretKeyInput, GetSecretKeyOutput, GetSignalDefinitionInput, GetSignalDefinitionOutput, GetStatusTimelineInput, GetStatusTimelineOutput, GetThreadInput, GetThreadOutput, GetThreadStatusInput, GetThreadStatusOutput, IgnoreIssueInput, IgnoreIssueOutput, InviteMemberInput, InviteMemberOutput, ListAutomationRunsInput, ListAutomationRunsOutput, ListAutomationTemplatesOutput, ListAutomationsInput, ListAutomationsOutput, ListBillingTransactionsInput, ListBillingTransactionsOutput, ListComponentRelationshipsInput, ListComponentRelationshipsOutput, ListComponentsInput, ListComponentsOutput, ListConnectedAccountsInput, ListConnectedAccountsOutput, ListDeliveryRulesInput, ListDeliveryRulesOutput, ListIntegrationConnectionsInput, ListIntegrationConnectionsOutput, ListIntegrationProvidersInput, ListIntegrationProvidersOutput, ListInvitationsInput, ListInvitationsOutput, ListIssuesInput, ListIssuesOutput, ListKeysInput, ListLogSourceProvidersOutput, ListLogSourcesInput, ListLogSourcesOutput, ListLogStreamsInput, ListLogStreamsOutput, ListMcpConnectorsInput, ListMcpConnectorsOutput, ListMcpProvidersOutput, ListMembersInput, ListMembersOutput, ListMessagesInput, ListMessagesOutput, ListOrganizationsOutput, ListPlansInput, ListPlansOutput, ListProjectMemoryInput, ListProjectMemoryOutput, ListProjectScriptsInput, ListProjectScriptsOutput, ListProjectsInput, ListProjectsOutput, ListPublicKeysOutput, ListPullRequestsInput, ListPullRequestsOutput, ListRecommendationsInput, ListRecommendationsOutput, ListReposInput, ListReposOutput, ListRunsInput, ListRunsOutput, ListSandboxEnvironmentVariablesInput, ListSandboxEnvironmentVariablesOutput, ListSandboxCliConnectionsInput, ListSandboxCliConnectionsOutput, ListSandboxCliTypesOutput, ListSecretKeysInput, ListSecretKeysOutput, ListSignalDefinitionsInput, ListSignalDefinitionsOutput, ListStatusIncidentsInput, ListStatusIncidentsOutput, ListTasksInput, ListTasksOutput, ListTeamMembersInput, ListTeamMembersOutput, ListTeamsInput, ListTeamsOutput, ListThreadRunsInput, ListThreadRunsOutput, ListThreadShareLinksInput, ListThreadShareLinksOutput, ListThreadsInput, ListThreadsOutput, ListUsageInvoicesInput, ListUsageInvoicesOutput, AskLogsInput, AskLogsOutput, LogsVolumeInput, LogsVolumeOutput, MeOutput, MuteIssueInput, MuteIssueOutput, PaymentMethodSummary, PreviewComponentMergeInput, PreviewComponentMergeOutput, PreviewComponentReactivationInput, PreviewComponentReactivationOutput, PreviewComponentRelationshipInput, PreviewComponentRelationshipOutput, PreviewPlanChangeInput, PreviewPlanChangeOutput, PublicApiContract, PurchaseCreditsInput, PurchaseCreditsOutput, PutProjectMemoryInput, PutProjectMemoryOutput, QueryLogsInput, QueryLogsOutput, QuerySpecLogsInput, QuerySpecLogsOutput, ReassignLogStreamInput, ReassignLogStreamOutput, RegisterComponentInput, RegisterComponentOutput, RemoveComponentRelationshipInput, RemoveMemberInput, RemoveMemberOutput, RemoveRepoInput, RemoveRepoOutput, RemoveTeamMemberInput, RemoveTeamMemberOutput, RenameComponentInput, RenameComponentOutput, ReopenIssueInput, ReopenIssueOutput, ResolveIssueInput, ResolveIssueOutput, ResumeSubscriptionCancellationOutput, RevokeInvitationInput, RevokeInvitationOutput, RevokeThreadShareLinkInput, RevokeThreadShareLinkOutput, RunResult, ScheduleSubscriptionCancellationOutput, SearchIssuesInput, SearchIssuesOutput, SearchMcpConnectorToolsInput, SearchMcpConnectorToolsOutput, SearchMessagesInput, SearchMessagesOutput, SearchProjectMemoryInput, SearchProjectMemoryOutput, SearchThreadsInput, SearchThreadsOutput, SetMcpConnectorReadOnlyInput, SetMcpConnectorReadOnlyOutput, SetThreadVisibilityInput, SetThreadVisibilityOutput, ContinueOnboardingWithFreeInput, ContinueOnboardingWithFreeOutput, EnsureOnboardingDefaultProjectInput, EnsureOnboardingDefaultProjectOutput, CompleteOnboardingSampleIssueInput, CompleteOnboardingSampleIssueOutput, SkipOnboardingSampleIssueInput, SkipOnboardingSampleIssueOutput, SkipTaskInput, SkipTaskOutput, StopThreadInput, StopThreadOutput, UnskipTaskInput, UnskipTaskOutput, SubscriptionCancellationInput, SubscriptionCancellationPreview, CreateSupportTicketInput, CreateSupportTicketOutput, GetSupportTicketAvailabilityOutput, TestSandboxCliInput, TestSandboxCliOutput, TransitionTaskInput, TransitionTaskOutput, TransitionWorkItemInput, TransitionWorkItemOutput, UnmuteIssueInput, UnmuteIssueOutput, UpdateAutomationInput, UpdateAutomationOutput, UpdateAutoTopUpInput, UpdateDeliveryRuleInput, UpdateDeliveryRuleOutput, UpdateIntegrationConnectionCredentialsInput, UpdateIntegrationConnectionCredentialsOutput, UpdateKeyInput, UpdateLogSourceInput, UpdateLogSourceOutput, UpdateLogStreamInput, UpdateLogStreamOutput, UpdateMcpConnectorInput, UpdateMcpConnectorOutput, UpdateMemberRoleInput, UpdateMemberRoleOutput, UpdateOrganizationInput, UpdateOrganizationOutput, UpdateProjectMemoryInput, UpdateProjectMemoryOutput, UpdateProjectScriptInput, UpdateProjectScriptOutput, UpdateSecretKeyInput, UpdateSignalDefinitionInput, UpdateSignalDefinitionOutput, UpdateTeamInput, UpdateTeamOutput, UpdateThreadInput, UpdateThreadOutput, UpsertSandboxCliInput, UpsertSandboxCliOutput, UpsertSandboxEnvironmentVariablesInput, UpsertSandboxEnvironmentVariablesOutput } from "../public-api/index.js";
import { type AgentEventStream, type AgentRunStreamParams, type AgentThreadStreamParams } from "./agent-stream-transports.js";
import { type ForwardLogsOutput, type ForwardLogsParams, type TailLogStream, type TailLogsParams } from "./log-transports.js";
export type { AgentStreamControlFrame, AgentStreamCursor, PublicAgentStreamEvent, PublicAgentStreamEventType, } from "../public-api/index.js";
export { AgentStreamControlFrameSchema, PublicAgentStreamEventSchema, PublicAgentStreamEventTypeSchema, } from "../public-api/index.js";
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
    /**
     * Version of the client surface making the request (e.g. the installed CLI
     * version). Sent as the `x-sazabi-client-version` header so the API can log
     * version skew per request (ENG-6768). Omit when the caller has no
     * meaningful version.
     */
    clientVersion?: string;
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
    /** Purpose the thread is started for; `support` opens a conversation with Sazabi support. */
    kind?: "support";
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
    artifacts: {
        list(input?: Partial<ListArtifactsInput>): Promise<ListArtifactsOutput>;
        listIssueArtifacts(input: ListIssueArtifactsInput): Promise<ListIssueArtifactsOutput>;
        get(input: GetArtifactInput): Promise<GetArtifactOutput>;
        download(input: DownloadArtifactInput): Promise<DownloadArtifactOutput>;
        delete(input: DeleteArtifactInput): Promise<DeleteArtifactOutput>;
    };
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
    automationTemplates: {
        /** List the published automation template catalog (global, metadata only). */
        list(): Promise<ListAutomationTemplatesOutput>;
    };
    logs: {
        query(input: QueryLogsInput): Promise<QueryLogsOutput>;
        /** Runs a typed (v2) log query spec through the log query router (POST /logs/query-spec). */
        querySpec(input: QuerySpecLogsInput): Promise<QuerySpecLogsOutput>;
        ask(input: AskLogsInput): Promise<AskLogsOutput>;
        volume(input: LogsVolumeInput): Promise<LogsVolumeOutput>;
        tail(input: TailLogsParams): Promise<TailLogStream>;
        forward(input: ForwardLogsParams): Promise<ForwardLogsOutput>;
    };
    onboarding: {
        getState(input?: Partial<GetOnboardingStateInput>): Promise<GetOnboardingStateOutput>;
        skipSampleIssue(input?: SkipOnboardingSampleIssueInput): Promise<SkipOnboardingSampleIssueOutput>;
        continueWithFree(input?: ContinueOnboardingWithFreeInput): Promise<ContinueOnboardingWithFreeOutput>;
        /**
         * Creates the organization's default project unless it already has an
         * active one, atomically per organization (ENG-7857); `created` says
         * which happened.
         */
        ensureDefaultProject(input?: Partial<EnsureOnboardingDefaultProjectInput>): Promise<EnsureOnboardingDefaultProjectOutput>;
        completeSampleIssue(input?: CompleteOnboardingSampleIssueInput): Promise<CompleteOnboardingSampleIssueOutput>;
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
        createSlackChannel(input: CreateSlackChannelInput): Promise<CreateSlackChannelOutput>;
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
    sandboxEnvironmentVariables: {
        delete(input: Omit<DeleteSandboxEnvironmentVariableInput, "projectId"> & Partial<Pick<DeleteSandboxEnvironmentVariableInput, "projectId">>): Promise<DeleteSandboxEnvironmentVariableOutput>;
        get(input: Omit<GetSandboxEnvironmentVariableInput, "projectId"> & Partial<Pick<GetSandboxEnvironmentVariableInput, "projectId">>): Promise<GetSandboxEnvironmentVariableOutput>;
        list(input?: Partial<ListSandboxEnvironmentVariablesInput>): Promise<ListSandboxEnvironmentVariablesOutput>;
        upsert(input: Omit<UpsertSandboxEnvironmentVariablesInput, "projectId"> & Partial<Pick<UpsertSandboxEnvironmentVariablesInput, "projectId">>): Promise<UpsertSandboxEnvironmentVariablesOutput>;
    };
    sandboxClis: {
        delete(input: Omit<DeleteSandboxCliInput, "projectId"> & Partial<Pick<DeleteSandboxCliInput, "projectId">>): Promise<DeleteSandboxCliOutput>;
        listConnections(input?: Partial<ListSandboxCliConnectionsInput>): Promise<ListSandboxCliConnectionsOutput>;
        listTypes(): Promise<ListSandboxCliTypesOutput>;
        test(input: Omit<TestSandboxCliInput, "projectId"> & Partial<Pick<TestSandboxCliInput, "projectId">>): Promise<TestSandboxCliOutput>;
        upsert(input: Omit<UpsertSandboxCliInput, "projectId"> & Partial<Pick<UpsertSandboxCliInput, "projectId">>): Promise<UpsertSandboxCliOutput>;
    };
    signalDefinitions: {
        list(input?: Partial<ListSignalDefinitionsInput>): Promise<ListSignalDefinitionsOutput>;
        get(input: GetSignalDefinitionInput): Promise<GetSignalDefinitionOutput>;
        create(input: CreateSignalDefinitionInput): Promise<CreateSignalDefinitionOutput>;
        update(input: UpdateSignalDefinitionInput): Promise<UpdateSignalDefinitionOutput>;
        disable(input: DisableSignalDefinitionInput): Promise<DisableSignalDefinitionOutput>;
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
        create(input: CreateProjectMemoryInput): Promise<CreateProjectMemoryOutput>;
        update(input: UpdateProjectMemoryInput): Promise<UpdateProjectMemoryOutput>;
        search(input: Omit<SearchProjectMemoryInput, "kind" | "limit"> & {
            kind?: string;
            limit?: number;
        }): Promise<SearchProjectMemoryOutput>;
        delete(input: DeleteProjectMemoryInput): Promise<DeleteProjectMemoryOutput>;
    };
    supportTickets: {
        create(input: Omit<CreateSupportTicketInput, "organizationId" | "projectId"> & Partial<Pick<CreateSupportTicketInput, "organizationId" | "projectId">>): Promise<CreateSupportTicketOutput>;
        availability(): Promise<GetSupportTicketAvailabilityOutput>;
    };
    issues: {
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
    /**
     * @deprecated Work items renamed to tasks (ENG-6687). Use
     * {@link PublicSdkClient.tasks} `create`/`comment`/`transition` instead;
     * removed in v2.0 (2027-03-01).
     */
    workItems: {
        /** @deprecated Use `tasks.create`; removed in v2.0 (2027-03-01). */
        create(input: Partial<CreateWorkItemInput> & Pick<CreateWorkItemInput, "container" | "title">): Promise<CreateWorkItemOutput>;
        /** @deprecated Use `tasks.comment`; removed in v2.0 (2027-03-01). */
        comment(input: CommentOnWorkItemInput): Promise<CommentOnWorkItemOutput>;
        /** @deprecated Use `tasks.transition`; removed in v2.0 (2027-03-01). */
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
        reactivationPreview(input: PreviewComponentReactivationInput): Promise<PreviewComponentReactivationOutput>;
        reactivate(input: CommitComponentReactivationInput): Promise<CommitComponentReactivationOutput>;
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
        getAccruedUsageCharges(input?: Partial<GetAccruedUsageChargesInput>): Promise<GetAccruedUsageChargesOutput>;
        listUsageInvoices(input?: Partial<ListUsageInvoicesInput>): Promise<ListUsageInvoicesOutput>;
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
        /** Onboarding task-checklist listing (not tracker tasks). */
        list(input?: Partial<ListTasksInput>): Promise<ListTasksOutput>;
        /** Org-wide skip for an optional onboarding task (not tracker tasks). */
        skip(input: SkipTaskInput): Promise<SkipTaskOutput>;
        /** Reopen a skipped onboarding task (not tracker tasks). */
        unskip(input: UnskipTaskInput): Promise<UnskipTaskOutput>;
        create(input: Partial<CreateTaskInput> & Pick<CreateTaskInput, "container" | "title">): Promise<CreateTaskOutput>;
        comment(input: CommentOnTaskInput): Promise<CommentOnTaskOutput>;
        transition(input: TransitionTaskInput): Promise<TransitionTaskOutput>;
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
    taskCreationRules: {
        list(input?: Partial<ListTaskCreationRulesInput>): Promise<ListTaskCreationRulesOutput>;
        get(input: Omit<GetTaskCreationRuleInput, "projectId"> & Partial<Pick<GetTaskCreationRuleInput, "projectId">>): Promise<GetTaskCreationRuleOutput>;
        create(input: Omit<CreateTaskCreationRuleInput, "projectId"> & Partial<Pick<CreateTaskCreationRuleInput, "projectId">>): Promise<CreateTaskCreationRuleOutput>;
        update(input: Omit<UpdateTaskCreationRuleInput, "projectId"> & Partial<Pick<UpdateTaskCreationRuleInput, "projectId">>): Promise<UpdateTaskCreationRuleOutput>;
        delete(input: Omit<DeleteTaskCreationRuleInput, "projectId"> & Partial<Pick<DeleteTaskCreationRuleInput, "projectId">>): Promise<DeleteTaskCreationRuleOutput>;
        reorder(input: Omit<ReorderTaskCreationRulesInput, "projectId"> & Partial<Pick<ReorderTaskCreationRulesInput, "projectId">>): Promise<ReorderTaskCreationRulesOutput>;
    };
    notificationChannels: {
        getProject(input?: Partial<GetProjectNotificationChannelsInput>): Promise<GetProjectNotificationChannelsOutput>;
    };
    webhooks: {
        list(input?: Partial<ListWebhooksInput>): Promise<ListWebhooksOutput>;
        get(input: GetWebhookInput): Promise<GetWebhookOutput>;
        create(input: CreateWebhookInput): Promise<CreateWebhookOutput>;
        update(input: UpdateWebhookInput): Promise<UpdateWebhookOutput>;
        delete(input: DeleteWebhookInput): Promise<DeleteWebhookOutput>;
        rotateSecret(input: RotateWebhookSecretInput): Promise<RotateWebhookSecretOutput>;
        enable(input: EnableWebhookInput): Promise<EnableWebhookOutput>;
        test(input: TestWebhookInput): Promise<TestWebhookOutput>;
        subscribe(input: SubscribeWebhookInput): Promise<SubscribeWebhookOutput>;
        unsubscribe(input: UnsubscribeWebhookInput): Promise<UnsubscribeWebhookOutput>;
        listDeliveries(input: ListWebhookDeliveriesInput): Promise<ListWebhookDeliveriesOutput>;
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
