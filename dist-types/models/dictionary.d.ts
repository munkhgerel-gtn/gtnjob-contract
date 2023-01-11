import * as z from "zod";
import { CompleteReferenceListItems } from "./index";
export declare const DictionaryModel: z.ZodObject<{
    dictionaries_id: z.ZodString;
    dictionary_id: z.ZodNumber;
    language_code: z.ZodString;
    dic_value: z.ZodString;
    created_at: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    created_at: Date;
    dictionary_id: number;
    dictionaries_id: string;
    language_code: string;
    dic_value: string;
}, {
    created_at: Date;
    dictionary_id: number;
    dictionaries_id: string;
    language_code: string;
    dic_value: string;
}>;
export interface CompleteDictionary extends z.infer<typeof DictionaryModel> {
    reference_listitems: CompleteReferenceListItems[];
}
/**
 * RelatedDictionaryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedDictionaryModel: z.ZodSchema<CompleteDictionary>;
