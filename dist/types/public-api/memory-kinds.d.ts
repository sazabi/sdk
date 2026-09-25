import { z } from "zod";
export declare const MEMORY_CURATED_KINDS: readonly ["note", "runbook"];
export declare const MEMORY_KINDS: readonly ["note", "runbook", "change"];
export declare const MemoryKindSchema: z.ZodEnum<{
    change: "change";
    note: "note";
    runbook: "runbook";
}>;
export type MemoryKind = z.infer<typeof MemoryKindSchema>;
export declare const MemoryCuratedKindSchema: z.ZodEnum<{
    note: "note";
    runbook: "runbook";
}>;
export type MemoryCuratedKind = z.infer<typeof MemoryCuratedKindSchema>;
export declare const MemoryKindFilterSchema: z.ZodPipe<z.ZodString, z.ZodTransform<("change" | "note" | "runbook")[], string>>;
