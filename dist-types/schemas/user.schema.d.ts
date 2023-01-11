import { z } from "zod";
export declare const UserSchema: z.ZodObject<{
    user_id: z.ZodString;
    created_at: z.ZodEffects<z.ZodString, string, string>;
    updated_at: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodString;
    name: z.ZodString;
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
    deleted_at: z.ZodEffects<z.ZodString, string, string>;
    customer_id: z.ZodString;
    user_status: z.ZodNativeEnum<{
        active: "active";
        inactive_waitverify: "inactive_waitverify";
        inactive_changepass: "inactive_changepass";
        suspended_attempt: "suspended_attempt";
        suspended_admin: "suspended_admin";
        deleted: "deleted";
    }>;
    password_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    created_at: string;
    user_id: string;
    updated_at: string;
    email: string;
    name: string;
    role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
    company_id: number;
    deleted_at: string;
    customer_id: string;
    user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
    password_hash: string;
}, {
    created_at: string;
    user_id: string;
    updated_at: string;
    email: string;
    name: string;
    role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
    company_id: number;
    deleted_at: string;
    customer_id: string;
    user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
    password_hash: string;
}>;
export type UserSchema = z.infer<typeof UserSchema>;
