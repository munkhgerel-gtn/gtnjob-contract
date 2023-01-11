import * as z from "zod";
import { CompleteNews } from "./index";
export declare const PagesModel: z.ZodObject<{
    page_id: z.ZodNumber;
    page_name: z.ZodString;
    page_type: z.ZodNumber;
    created_at: z.ZodDate;
    created_by: z.ZodString;
}, "strip", z.ZodTypeAny, {
    created_at: Date;
    created_by: string;
    page_id: number;
    page_name: string;
    page_type: number;
}, {
    created_at: Date;
    created_by: string;
    page_id: number;
    page_name: string;
    page_type: number;
}>;
export interface CompletePages extends z.infer<typeof PagesModel> {
    news: CompleteNews[];
}
/**
 * RelatedPagesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedPagesModel: z.ZodSchema<CompletePages>;
