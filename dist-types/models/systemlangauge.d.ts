import * as z from "zod";
export declare const SystemLangaugeModel: z.ZodObject<{
    language_id: z.ZodNumber;
    language_code: z.ZodString;
    is_default: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    language_id: number;
    language_code: string;
    is_default: boolean;
}, {
    language_id: number;
    language_code: string;
    is_default: boolean;
}>;
