import { z } from "zod";
/**
 * Wraps a required subfield schema so a missing value reports `message`
 * instead of Zod's generic "Invalid input: expected X, received undefined",
 * which names a primitive type rather than the field's purpose. Any other
 * invalid value (wrong shape, out of range) still reports `schema`'s own
 * message; this only replaces the "absent entirely" case.
 */
export declare const requiredField: <T extends z.ZodTypeAny>(schema: T, message: string) => z.ZodType<z.output<T>>;
