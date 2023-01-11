import * as z from "zod";
import { CompleteCustomer } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const CustomerLanguageModel: z.ZodObject<{
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
    certificate: z.ZodType<Json, z.ZodTypeDef, Json>;
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
    certificate: Json;
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
    certificate: Json;
}>;
export interface CompleteCustomerLanguage extends z.infer<typeof CustomerLanguageModel> {
    customer: CompleteCustomer;
}
/**
 * RelatedCustomerLanguageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCustomerLanguageModel: z.ZodSchema<CompleteCustomerLanguage>;
export {};
