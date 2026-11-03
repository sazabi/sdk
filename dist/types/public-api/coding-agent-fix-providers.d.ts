import { z } from "zod";
/** The connected coding agents a fix may be handed to, by integration provider id. */
export declare const CodingAgentFixProviderSchema: z.ZodEnum<{
    capy: "capy";
    claude: "claude";
    codex: "codex";
    cursor: "cursor";
    devin: "devin";
    hoplite: "hoplite";
    replicas: "replicas";
    warp: "warp";
}>;
export type CodingAgentFixProvider = z.infer<typeof CodingAgentFixProviderSchema>;
/** How each coding agent is named wherever a surface shows a handoff. */
export declare const CODING_AGENT_FIX_PROVIDER_NAMES: Record<CodingAgentFixProvider, string>;
