import type { RunResult } from "./runs.js";
/**
 * The deferred handoff a caller gets when it does not wait for the run.
 *
 * Built here rather than spelled out at each `wait: false` return so the shape
 * has one definition: four routers were constructing this literal
 * independently, which made adding the ENG-5499 failure fields a four-file
 * change that the type checker, not the author, had to find. A run still in
 * flight has not failed, so both failure fields are null by construction.
 */
export declare const processingRunResult: <T extends {
    threadId: string;
    runId: string;
    messageId?: string;
}>(run: T) => RunResult;
