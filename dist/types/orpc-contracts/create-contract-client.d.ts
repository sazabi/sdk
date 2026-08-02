import type { AnyContractRouter, ContractRouterClient } from "@orpc/contract";
export interface ContractClientOptions {
    baseUrl: string;
    headers?: () => Record<string, string> | Promise<Record<string, string>>;
    fetch?: typeof globalThis.fetch;
}
export declare const createContractClient: <TContract extends AnyContractRouter>(contract: TContract, options: ContractClientOptions) => ContractRouterClient<TContract>;
