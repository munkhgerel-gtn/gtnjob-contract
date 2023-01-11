import * as z from "zod";
import { CompleteUser, CompleteCustomerVisa, CompleteCustomerJobDetail, CompleteCustomerEducation, CompleteCustomerLanguage, CompleteCustomerQualification, CompleteCustomerWorkHistory, CompleteJobCandidate, CompleteCustomerDesired } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const CustomerModel: z.ZodObject<{
    customer_id: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    first_name_kana: z.ZodString;
    last_name_kana: z.ZodString;
    gender: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
        no_data: "no_data";
        male: "male";
        female: "female";
    }>>>;
    birth_date: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    spouse: z.ZodType<Json, z.ZodTypeDef, Json>;
    family_size: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    mobile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    phone: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    profile_image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    cv_file: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    resume_file: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prefecture: z.ZodType<Json, z.ZodTypeDef, Json>;
    post_code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    city: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    district: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    address1: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    nearest_station: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    socials: z.ZodType<Json, z.ZodTypeDef, Json>;
    country: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    experienced_year: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    from_data: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    status_customer: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
        no_data: "no_data";
    }>>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    gender?: "no_data" | "male" | "female" | null | undefined;
    birth_date?: Date | null | undefined;
    family_size?: number | null | undefined;
    email?: string | null | undefined;
    mobile?: string | null | undefined;
    phone?: string | null | undefined;
    profile_image?: string | null | undefined;
    cv_file?: string | null | undefined;
    resume_file?: string | null | undefined;
    post_code?: string | null | undefined;
    city?: string | null | undefined;
    district?: string | null | undefined;
    address?: string | null | undefined;
    address1?: string | null | undefined;
    nearest_station?: string | null | undefined;
    country?: string | null | undefined;
    experienced_year?: number | null | undefined;
    from_data?: number | null | undefined;
    status_customer?: "no_data" | null | undefined;
    created_at: Date;
    updated_at: Date;
    customer_id: string;
    first_name: string;
    last_name: string;
    first_name_kana: string;
    last_name_kana: string;
    spouse: Json;
    prefecture: Json;
    socials: Json;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    gender?: "no_data" | "male" | "female" | null | undefined;
    birth_date?: Date | null | undefined;
    family_size?: number | null | undefined;
    email?: string | null | undefined;
    mobile?: string | null | undefined;
    phone?: string | null | undefined;
    profile_image?: string | null | undefined;
    cv_file?: string | null | undefined;
    resume_file?: string | null | undefined;
    post_code?: string | null | undefined;
    city?: string | null | undefined;
    district?: string | null | undefined;
    address?: string | null | undefined;
    address1?: string | null | undefined;
    nearest_station?: string | null | undefined;
    country?: string | null | undefined;
    experienced_year?: number | null | undefined;
    from_data?: number | null | undefined;
    status_customer?: "no_data" | null | undefined;
    created_at: Date;
    updated_at: Date;
    customer_id: string;
    first_name: string;
    last_name: string;
    first_name_kana: string;
    last_name_kana: string;
    spouse: Json;
    prefecture: Json;
    socials: Json;
}>;
export interface CompleteCustomer extends z.infer<typeof CustomerModel> {
    user?: CompleteUser | null;
    customer_visas: CompleteCustomerVisa[];
    customer_jobdetails: CompleteCustomerJobDetail[];
    customer_educations: CompleteCustomerEducation[];
    customer_languages: CompleteCustomerLanguage[];
    customer_qualifications: CompleteCustomerQualification[];
    customer_workhistories: CompleteCustomerWorkHistory[];
    job_candidates: CompleteJobCandidate[];
    customer_desired: CompleteCustomerDesired[];
}
/**
 * RelatedCustomerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCustomerModel: z.ZodSchema<CompleteCustomer>;
export {};
