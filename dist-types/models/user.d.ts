import * as z from "zod";
import { CompleteCustomer, CompleteLogger, CompleteInquiry, CompleteNotification, CompleteScoutFav } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const UserModel: z.ZodObject<{
    user_id: z.ZodString;
    email: z.ZodString;
    mobile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    password_hash: z.ZodString;
    role: z.ZodNativeEnum<{
        no_data: "no_data";
        gtn_super_admin: "gtn_super_admin";
        gtn_admin: "gtn_admin";
        company_super_admin: "company_super_admin";
        company_admin: "company_admin";
        company_user: "company_user";
        job_seeker: "job_seeker";
    }>;
    company_id: z.ZodNumber;
    customer_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    attemptpass_count: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    reset_code: z.ZodString;
    is_emailverified: z.ZodBoolean;
    is_mobileverified: z.ZodBoolean;
    user_status: z.ZodNativeEnum<{
        active: "active";
        inactive_waitverify: "inactive_waitverify";
        inactive_changepass: "inactive_changepass";
        suspended_attempt: "suspended_attempt";
        suspended_admin: "suspended_admin";
        deleted: "deleted";
    }>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    deleted_at: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    favs: z.ZodType<Json, z.ZodTypeDef, Json>;
}, "strip", z.ZodTypeAny, {
    customer_id?: string | null | undefined;
    mobile?: string | null | undefined;
    name?: string | null | undefined;
    attemptpass_count?: number | null | undefined;
    deleted_at?: Date | null | undefined;
    role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
    created_at: Date;
    updated_at: Date;
    email: string;
    user_id: string;
    password_hash: string;
    company_id: number;
    reset_code: string;
    is_emailverified: boolean;
    is_mobileverified: boolean;
    user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
    favs: Json;
}, {
    customer_id?: string | null | undefined;
    mobile?: string | null | undefined;
    name?: string | null | undefined;
    attemptpass_count?: number | null | undefined;
    deleted_at?: Date | null | undefined;
    role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
    created_at: Date;
    updated_at: Date;
    email: string;
    user_id: string;
    password_hash: string;
    company_id: number;
    reset_code: string;
    is_emailverified: boolean;
    is_mobileverified: boolean;
    user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
    favs: Json;
}>;
export interface CompleteUser extends z.infer<typeof UserModel> {
    Customer?: CompleteCustomer | null;
    loggers: CompleteLogger[];
    from_inquiries: CompleteInquiry[];
    assign_inquiries: CompleteInquiry[];
    notifications: CompleteNotification[];
    ScoutFav: CompleteScoutFav[];
}
/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedUserModel: z.ZodSchema<CompleteUser>;
export {};
