import * as z from "zod";
import { CompleteJob, CompleteReferenceList, CompleteReferenceListItems } from "./index";
export declare const JobReferenceListModel: z.ZodObject<{
    job_reference_id: z.ZodString;
    job_id: z.ZodString;
    reference_list_id: z.ZodNumber;
    reference_list_item_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    job_id: string;
    job_reference_id: string;
    reference_list_id: number;
    reference_list_item_id: number;
}, {
    job_id: string;
    job_reference_id: string;
    reference_list_id: number;
    reference_list_item_id: number;
}>;
export interface CompleteJobReferenceList extends z.infer<typeof JobReferenceListModel> {
    job: CompleteJob;
    reference_list: CompleteReferenceList;
    reference_list_item: CompleteReferenceListItems;
}
/**
 * RelatedJobReferenceListModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedJobReferenceListModel: z.ZodSchema<CompleteJobReferenceList>;
