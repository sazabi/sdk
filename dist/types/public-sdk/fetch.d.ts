/** Fetch surface used by the SDK, independent of host-specific extensions. */
export type ClientFetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
