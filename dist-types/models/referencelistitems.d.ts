import * as z from "zod";
import { CompleteReferenceList, CompleteCustomerExperience, CompleteDictionary, CompleteJobReferenceList } from "./index";
export declare const ReferenceListItemsModel: z.ZodObject<{
    listitem_id: z.ZodNumber;
    list_id: z.ZodNumber;
    dictionary_id: z.ZodNumber;
    code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    listitem_value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    parent_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    dictionaryDictionaries_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    value?: string | null | undefined;
    code?: string | null | undefined;
    parent_id?: number | null | undefined;
    listitem_value?: string | null | undefined;
    dictionaryDictionaries_id?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    listitem_id: number;
    list_id: number;
    dictionary_id: number;
}, {
    value?: string | null | undefined;
    code?: string | null | undefined;
    parent_id?: number | null | undefined;
    listitem_value?: string | null | undefined;
    dictionaryDictionaries_id?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    listitem_id: number;
    list_id: number;
    dictionary_id: number;
}>;
export interface CompleteReferenceListItems extends z.infer<typeof ReferenceListItemsModel> {
    list: CompleteReferenceList;
    customer_experiences: CompleteCustomerExperience[];
    Dictionary?: CompleteDictionary | null;
    JobReferenceList: CompleteJobReferenceList[];
}
/**
 * RelatedReferenceListItemsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedReferenceListItemsModel: z.ZodSchema<CompleteReferenceListItems>;
