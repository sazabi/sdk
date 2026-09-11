import { z } from "zod";
/** A reference to one field of the queried source; each source body specialises it by `kind`. */
export type FieldRef = {
    kind: string;
};
export declare const fieldRefSchema: z.ZodType<FieldRef>;
