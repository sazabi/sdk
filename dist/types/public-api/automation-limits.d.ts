export declare const AUTOMATION_NAME_MAX_CHARACTERS = 200;
export declare const AUTOMATION_DESCRIPTION_MAX_CHARACTERS = 2000;
export declare const AUTOMATION_DESCRIPTION_LIMIT_MESSAGE: string;
/**
 * The largest JSON payload, in UTF-8 bytes of its serialized form, that a
 * webhook delivery or a manual run may carry
 * (docs/design/app/automation-webhook-triggers). The payload reaches the
 * script as a file its command writes, so it travels base64-encoded inside
 * the one sandbox command that also carries the script, under Linux's 128 KiB
 * per-argument limit. 32 KiB (about 43 KiB encoded) leaves most of that for
 * the script; a run whose script and payload still do not fit is refused
 * with its own error before anything runs.
 */
export declare const MAX_AUTOMATION_TRIGGER_PAYLOAD_BYTES: number;
export declare const AUTOMATION_TRIGGER_PAYLOAD_LIMIT_MESSAGE = "payload must be JSON of at most 32 KiB.";
/** The UTF-8 size of a value's JSON form, or null when it has none. */
export declare const automationTriggerPayloadBytes: (value: unknown) => number | null;
