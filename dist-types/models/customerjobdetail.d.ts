import * as z from "zod";
import { CompleteCustomer, CompleteCustomerExperience } from "./index";
export declare const CustomerJobDetailModel: z.ZodObject<{
    jobdetail_id: z.ZodString;
    customer_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    experienced_company: z.ZodNumber;
    annual_income: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    has_management_exp: z.ZodBoolean;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    customer_id?: string | null | undefined;
    annual_income?: number | null | undefined;
    created_at: Date;
    updated_at: Date;
    jobdetail_id: string;
    experienced_company: number;
    has_management_exp: boolean;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    customer_id?: string | null | undefined;
    annual_income?: number | null | undefined;
    created_at: Date;
    updated_at: Date;
    jobdetail_id: string;
    experienced_company: number;
    has_management_exp: boolean;
}>;
export interface CompleteCustomerJobDetail extends z.infer<typeof CustomerJobDetailModel> {
    customer?: CompleteCustomer | null;
    customer_experiences: CompleteCustomerExperience[];
}
/**
 * RelatedCustomerJobDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCustomerJobDetailModel: z.ZodSchema<CompleteCustomerJobDetail>;
