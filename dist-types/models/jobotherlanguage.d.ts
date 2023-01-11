import * as z from "zod";
import { CompleteJob } from "./index";
export declare const JobOtherLanguageModel: z.ZodObject<{
    job_other_language_id: z.ZodString;
    language_id: z.ZodNumber;
    language_level: z.ZodNativeEnum<{
        no_data: "no_data";
        vative: "vative";
        near_native: "near_native";
        business: "business";
        daily_conversation: "daily_conversation";
        greeting: "greeting";
    }>;
    job_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    language_id: number;
    job_id: string;
    job_other_language_id: string;
    language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
}, {
    language_id: number;
    job_id: string;
    job_other_language_id: string;
    language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
}>;
export interface CompleteJobOtherLanguage extends z.infer<typeof JobOtherLanguageModel> {
    job: CompleteJob;
}
/**
 * RelatedJobOtherLanguageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedJobOtherLanguageModel: z.ZodSchema<CompleteJobOtherLanguage>;
