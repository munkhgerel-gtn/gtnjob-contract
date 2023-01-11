import { z } from "zod";
export declare const CustomerLanguageSchema: z.ZodObject<{
    language_id: z.ZodString;
    customer_id: z.ZodString;
    level: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
        no_data: "no_data";
        vative: "vative";
        near_native: "near_native";
        business: "business";
        daily_conversation: "daily_conversation";
        greeting: "greeting";
    }>>>;
    language: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    is_motherlanguage: z.ZodBoolean;
    certificate: z.ZodType<(string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
    created_at: z.ZodDate;
    updated_at: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_b: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    updated_at?: Date | null | undefined;
    created_by?: string | null | undefined;
    level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | null | undefined;
    language?: number | null | undefined;
    updated_b?: string | null | undefined;
    created_at: Date;
    customer_id: string;
    language_id: string;
    is_motherlanguage: boolean;
    certificate: (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
}, {
    updated_at?: Date | null | undefined;
    created_by?: string | null | undefined;
    level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | null | undefined;
    language?: number | null | undefined;
    updated_b?: string | null | undefined;
    created_at: Date;
    customer_id: string;
    language_id: string;
    is_motherlanguage: boolean;
    certificate: (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
}>;
export type CustomerLanguageSchema = z.infer<typeof CustomerLanguageSchema>;
