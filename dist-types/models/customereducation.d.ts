import * as z from "zod";
import { CompleteCustomer } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const CustomerEducationModel: z.ZodObject<{
    education_id: z.ZodString;
    customer_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    country: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    degree: z.ZodType<Json, z.ZodTypeDef, Json>;
    entrollment_date: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    graduate_date: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    is_current: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    school_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    school: z.ZodType<Json, z.ZodTypeDef, Json>;
    faculty: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    department: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    customer_id?: string | null | undefined;
    country?: string | null | undefined;
    entrollment_date?: Date | null | undefined;
    graduate_date?: Date | null | undefined;
    is_current?: boolean | null | undefined;
    school_id?: number | null | undefined;
    faculty?: string | null | undefined;
    department?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    education_id: string;
    degree: Json;
    school: Json;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    customer_id?: string | null | undefined;
    country?: string | null | undefined;
    entrollment_date?: Date | null | undefined;
    graduate_date?: Date | null | undefined;
    is_current?: boolean | null | undefined;
    school_id?: number | null | undefined;
    faculty?: string | null | undefined;
    department?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    education_id: string;
    degree: Json;
    school: Json;
}>;
export interface CompleteCustomerEducation extends z.infer<typeof CustomerEducationModel> {
    customer?: CompleteCustomer | null;
}
/**
 * RelatedCustomerEducationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCustomerEducationModel: z.ZodSchema<CompleteCustomerEducation>;
export {};
