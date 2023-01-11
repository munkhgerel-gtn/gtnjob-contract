import * as z from "zod";
import { CompleteReferenceListItems, CompleteJobReferenceList } from "./index";
export declare const ReferenceListModel: z.ZodObject<{
    list_id: z.ZodNumber;
    list_name: z.ZodString;
    created_at: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    created_at: Date;
    list_id: number;
    list_name: string;
}, {
    created_at: Date;
    list_id: number;
    list_name: string;
}>;
export interface CompleteReferenceList extends z.infer<typeof ReferenceListModel> {
    listitems: CompleteReferenceListItems[];
    JobReferenceList: CompleteJobReferenceList[];
}
/**
 * RelatedReferenceListModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedReferenceListModel: z.ZodSchema<CompleteReferenceList>;
