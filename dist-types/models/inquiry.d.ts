import * as z from "zod";
import { CompleteUser, CompleteEntity } from "./index";
export declare const InquiryModel: z.ZodObject<{
    inquire_id: z.ZodString;
    parent_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    fromuser_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    entity_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    assigned_user_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    subject: z.ZodString;
    body: z.ZodString;
    inquiry_status: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
        open: "open";
        reply: "reply";
        closed: "closed";
    }>>>;
    is_read: z.ZodBoolean;
    is_answer: z.ZodBoolean;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    parent_id?: string | null | undefined;
    created_by?: string | null | undefined;
    entity_id?: number | null | undefined;
    fromuser_id?: string | null | undefined;
    assigned_user_id?: string | null | undefined;
    inquiry_status?: "open" | "reply" | "closed" | null | undefined;
    created_at: Date;
    updated_at: Date;
    inquire_id: string;
    subject: string;
    body: string;
    is_read: boolean;
    is_answer: boolean;
}, {
    parent_id?: string | null | undefined;
    created_by?: string | null | undefined;
    entity_id?: number | null | undefined;
    fromuser_id?: string | null | undefined;
    assigned_user_id?: string | null | undefined;
    inquiry_status?: "open" | "reply" | "closed" | null | undefined;
    created_at: Date;
    updated_at: Date;
    inquire_id: string;
    subject: string;
    body: string;
    is_read: boolean;
    is_answer: boolean;
}>;
export interface CompleteInquiry extends z.infer<typeof InquiryModel> {
    fromuser?: CompleteUser | null;
    entity?: CompleteEntity | null;
    assignUser?: CompleteUser | null;
}
/**
 * RelatedInquiryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedInquiryModel: z.ZodSchema<CompleteInquiry>;
