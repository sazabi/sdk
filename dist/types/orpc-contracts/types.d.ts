import type { AnySchema, ContractProcedure, InferSchemaInput, InferSchemaOutput, Route } from "@orpc/contract";
import type { FleetJobKind } from "./fleet-job.js";
import type { PublicReadKind } from "./public-read.js";
import type { SignedOAuthStateKind } from "./signed-oauth-state.js";
import type { VendorLookupKind } from "./vendor-lookup.js";
export type OperationPagination = "none" | "cursor" | "page";
export type OperationAsyncMode = "sync" | "deferred" | "returns-redirect-url" | "websocket";
export interface OperationRouteDefinition {
    method: NonNullable<Route["method"]>;
    path: NonNullable<Route["path"]>;
    tags: readonly string[];
    successStatus?: Route["successStatus"];
    successDescription?: Route["successDescription"];
    deprecated?: Route["deprecated"];
    inputStructure?: Route["inputStructure"];
}
export interface OperationExample<InputValue, OutputValue> {
    name: string;
    input: InputValue;
    output: OutputValue;
}
/**
 * The access rule of a domain owner's operation, as data
 * (docs/design/infrastructure/domain-owning-services): a record the
 * operation acts on; for an operation that reads no tenant data, any
 * authenticated caller; for a user's own data, that user; for what the
 * caller's own identity names, the caller; for a Sazabi operator's
 * cross-tenant or global operation, the operator; for an unauthenticated
 * OAuth callback's write, the signed state it carries; for a public read
 * of registry-global data, nobody; or, for a partner's organization or
 * project, the superorganization that owns it.
 */
export type OperationAccess = RecordAccess | AuthenticatedAccess | SelfAccess | OwnScopeAccess | OperatorAccess | VendorLookupAccess | FleetJobAccess | SignedOAuthStateAccess | PublicReadAccess | PartnerAccess;
/**
 * The owner resolves the record named by `id` and runs `decideAccess` with
 * `action` before the handler. Contracts may import only contracts, so
 * `action` is `"read"` or a `@sazabi/auth` permission name as a string; the
 * owner rejects an unknown one when it binds the operation.
 */
export interface RecordAccess {
    /** The kind of record the operation acts on, such as `"project"`. */
    record: string;
    /** The input field that holds the record's id. */
    id: string;
    action: string;
    /**
     * The operation also serves a caller whose input names no record: the
     * owner runs its handler with no scope instead of answering not found.
     * Refused by default; the owner binds such an operation with its own
     * binder, and only a record kind registered to admit a missing id
     * accepts it (onboarding's state, which a person reads before they belong
     * to any organization).
     */
    admitsMissing?: true;
}
/**
 * Any forwarded caller, with no record and no `decideAccess`: only for an
 * operation over code-owned data that belongs to no tenant, such as a
 * catalog compiled into the service. services/core's
 * `check:core-module-boundaries` fails a handler bound this way that can
 * reach `@sazabi/database`.
 */
export interface AuthenticatedAccess {
    authenticated: true;
}
/**
 * The calling user, acting on their own user-owned data (personal
 * preferences, their own phone number): a signed-in user principal reaches
 * the handler, which receives that user's id and no organization or project
 * scope. Every other principal is refused. The operation can never be
 * pointed at another user: the handler acts on the forwarded user's id, and
 * when `id` names an input field that carries a user id, any value other
 * than the caller's own is refused as not found.
 */
export interface SelfAccess {
    self: true;
    /** An input field that holds a user id, which must be the caller's own. */
    id?: string;
    /**
     * Also lets a background job (a `system` principal on the system or agent
     * surface) reach the operation for the person it names as the forwarded
     * actor, when the owner admits that person (ENG-9565: core requires a live
     * member of the job's organization). The handler then acts on that
     * person's id, as for their own session. Omitted, only the person's own
     * session reaches it.
     */
    actingFor?: true;
    /**
     * The handler decides an organization from the caller's own records (a
     * parked connect ticket, the organizations mapping a repository) and acts
     * or reads there, rather than acting in no organization. An identity token
     * caller must then name an organization, but the token's organization
     * does not bound the handler, which decides as for today's caller, in the
     * organization the records name (ENG-9874, Ed's Q1 ruling).
     */
    decidesOrganization?: true;
}
/**
 * The caller acting within its own identity, with no target named in input:
 * a signed-in user acts as that user (the organizations they belong to), and
 * a key acts within the organization and project it was issued for. The
 * handler receives only that identity and decides from it alone; every other
 * principal is refused. A key's organization and project are the bounds the
 * front door forwarded, not a decision against its grants, so an operation
 * that must confirm a key still reaches a record declares that record instead.
 */
export interface OwnScopeAccess {
    ownScope: true;
}
/**
 * A Sazabi operator acting through sudo on data no single target
 * organization names: a list across every tenant, or a global row only
 * operators write (an app-scope tool gate, the template catalog). Only a
 * forwarded `admin` principal reaches the handler, with no organization or
 * project scope; every other principal is refused. An operator with role
 * `viewer` reaches it only when `action` is `"read"` and the owner lists
 * the operation as a viewer read. Contracts may import only contracts, so
 * `action` is `"read"` or a `@sazabi/auth` permission name as a string; the
 * owner rejects an unknown one when it binds the operation. No front door
 * but the admin API serves one.
 */
export interface OperatorAccess {
    operator: true;
    action: string;
}
/**
 * A background job resolving a vendor id to its tenant before it knows the
 * organization (ENG-9566): only a forwarded `vendor_lookup` principal on the
 * `system` surface reaches the handler, with no scope; every other principal
 * is refused, and that principal reaches nothing else. The output may carry
 * only the keys `VENDOR_LOOKUP_OUTPUT_KEYS` lists for `vendorLookup`.
 */
export interface VendorLookupAccess {
    vendorLookup: VendorLookupKind;
}
/**
 * A background job's maintenance write across every tenant at once (ENG-9717,
 * Ed's D4 ruling): only a forwarded `fleet_job` principal on the `system`
 * surface reaches the handler, with no scope; every other principal is
 * refused, and that principal reaches nothing else. The output may carry only
 * the keys `FLEET_JOB_OUTPUT_KEYS` lists for `fleetJob`.
 */
export interface FleetJobAccess {
    fleetJob: FleetJobKind;
}
/**
 * An unauthenticated OAuth callback's write, authorized by the signed state
 * the callback carries and nothing else (ENG-9086, Ed's ruling 2026-10-14):
 * only a forwarded `oauth_callback` principal on the `dashboard` surface
 * reaches the handler. The owner verifies the input's `state` (signature and
 * age, with the key and limit the callback route uses), refuses one that
 * names another callback surface than the kind's or another provider than the
 * input's `provider`, and hands the handler only the organization and user the
 * verified state names. Every other principal is refused, and that principal
 * reaches nothing else. The input may carry only the keys
 * `SIGNED_OAUTH_STATE_KINDS` lists for `signedOAuthState`, and never a
 * tenant; the output only its output keys.
 */
export interface SignedOAuthStateAccess {
    signedOAuthState: SignedOAuthStateKind;
}
/**
 * A read anyone may make, of data that belongs to no tenant (Ed's ruling
 * 2026-10-15, "FRONT-DOOR PLACEMENT BATCH" (1)): only a forwarded `anonymous`
 * principal on the kind's surface reaches the handler, with no scope, and
 * that principal reaches nothing else. The input may carry only the keys
 * `PUBLIC_READ_KINDS` lists for `publicRead`, and never a tenant; the output
 * only its lists, whose rows carry only the listed keys. The code the handler
 * reaches reads only tables the ownership registry marks global, as a
 * tenant-free operation's does (services/core's boundary check).
 */
export interface PublicReadAccess {
    publicRead: PublicReadKind;
}
/**
 * A partner key's caller acting on an organization or project that belongs
 * to its superorganization (ENG-9358; bylaws/identity-and-auth.yaml §6.a,
 * §6.b, §7.c): only a forwarded `partner` principal on the `public_api`
 * surface reaches the handler, and every other principal is refused. `partner`
 * names what the request path targets: an `organization`, or a `project`
 * inside one. The input must name `organizationId`, and `projectId` too for a
 * project. The owner proves that target belongs to the principal's
 * superorganization before the handler runs, answering a target it cannot
 * prove exactly like a missing one, and hands the handler the proven
 * superorganization, organization and project. The partner principal is never
 * elevated to `system`, `credential` or `admin`, and no identity token
 * reaches it.
 */
export interface PartnerAccess {
    partner: "organization" | "project";
}
export interface OperationContractMetadata<TBackend extends string = string> {
    operationId: string;
    backend: TBackend;
    pagination: OperationPagination;
    async: OperationAsyncMode;
    examples: readonly OperationExample<unknown, unknown>[];
    access?: OperationAccess;
    /** See {@link OperationDefinition.published}. */
    published?: false;
}
export interface OperationDefinition<InputSchema extends AnySchema, OutputSchema extends AnySchema, TBackend extends string = string> {
    operationId: string;
    description: string;
    /**
     * Short display title for the operation (OpenAPI `summary`). Doc generators
     * fall back to munging the operationId when absent — set this when that
     * fallback reads wrong (e.g. "Search Natural", "List For Thread").
     */
    summary?: string;
    backend: TBackend;
    route: OperationRouteDefinition;
    input: InputSchema;
    output: OutputSchema;
    pagination: OperationPagination;
    async: OperationAsyncMode;
    /** Required on a domain owner's operations; see {@link OperationAccess}. */
    access?: OperationAccess;
    /**
     * `false` for an operation the API serves but does not publish: it stays
     * out of the OpenAPI document (`generateOpenApiSpec`) and the MCP operation
     * catalog, and the SDK's typed client leaves it out. For a capability whose
     * rollout is off by default; the route keeps serving, and its owner decides
     * who may call it.
     */
    published?: false;
    examples?: readonly OperationExample<InferSchemaInput<InputSchema>, InferSchemaOutput<OutputSchema>>[];
    contract: ContractProcedure<InputSchema, OutputSchema, Record<never, never>, OperationContractMetadata<TBackend>>;
}
