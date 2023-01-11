import * as z from "zod";
import { CompletePages } from "./index";
export declare const NewsModel: z.ZodObject<{
    news_id: z.ZodString;
    page_id: z.ZodNumber;
    title: z.ZodString;
    brief: z.ZodString;
    image_id: z.ZodString;
    content: z.ZodString;
    is_top: z.ZodBoolean;
    is_publish: z.ZodBoolean;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodString;
    update_by: z.ZodString;
}, "strip", z.ZodTypeAny, {
    created_at: Date;
    updated_at: Date;
    created_by: string;
    news_id: string;
    page_id: number;
    title: string;
    brief: string;
    image_id: string;
    content: string;
    is_top: boolean;
    is_publish: boolean;
    update_by: string;
}, {
    created_at: Date;
    updated_at: Date;
    created_by: string;
    news_id: string;
    page_id: number;
    title: string;
    brief: string;
    image_id: string;
    content: string;
    is_top: boolean;
    is_publish: boolean;
    update_by: string;
}>;
export interface CompleteNews extends z.infer<typeof NewsModel> {
    pages: CompletePages;
}
/**
 * RelatedNewsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedNewsModel: z.ZodSchema<CompleteNews>;
