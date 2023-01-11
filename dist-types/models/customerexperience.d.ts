import * as z from "zod";
import { CompleteCustomerJobDetail, CompleteReferenceListItems } from "./index";
export declare const CustomerExperienceModel: z.ZodObject<{
    experience_id: z.ZodString;
    jobdetail_id: z.ZodString;
    skill_id: z.ZodNumber;
    over_year: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    created_at: z.ZodDate;
    updated_at: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    updated_at?: Date | null | undefined;
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    over_year?: number | null | undefined;
    created_at: Date;
    experience_id: string;
    jobdetail_id: string;
    skill_id: number;
}, {
    updated_at?: Date | null | undefined;
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    over_year?: number | null | undefined;
    created_at: Date;
    experience_id: string;
    jobdetail_id: string;
    skill_id: number;
}>;
export interface CompleteCustomerExperience extends z.infer<typeof CustomerExperienceModel> {
    jobdetails: CompleteCustomerJobDetail;
    listitems: CompleteReferenceListItems;
}
/**
 * RelatedCustomerExperienceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCustomerExperienceModel: z.ZodSchema<CompleteCustomerExperience>;
