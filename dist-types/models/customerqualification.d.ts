import * as z from "zod";
import { CompleteCustomer } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const CustomerQualificationModel: z.ZodObject<{
    qualification_id: z.ZodString;
    customer_id: z.ZodString;
    qualification: z.ZodType<Json, z.ZodTypeDef, Json>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    customer_id: string;
    qualification_id: string;
    qualification: Json;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    customer_id: string;
    qualification_id: string;
    qualification: Json;
}>;
export interface CompleteCustomerQualification extends z.infer<typeof CustomerQualificationModel> {
    customers: CompleteCustomer;
}
/**
 * RelatedCustomerQualificationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCustomerQualificationModel: z.ZodSchema<CompleteCustomerQualification>;
export {};
