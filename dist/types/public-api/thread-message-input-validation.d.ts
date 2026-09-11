import type { z } from "zod";
export declare const DEFAULT_PUBLIC_THREAD_MESSAGE_MAX_LENGTH = 10000;
export declare const AUTOMATION_PUBLIC_THREAD_MESSAGE_MAX_LENGTH = 20000;
export declare const validatePublicThreadMessageLength: (message: string, automationId: string | undefined, ctx: z.RefinementCtx) => void;
export declare const validatePublicThreadAmbientMarker: (ambientServiceRun: true | undefined, automationId: string | undefined, ctx: z.RefinementCtx) => void;
