import { z } from "zod";
export declare const RegisterSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    password_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string | null | undefined;
    email: string;
    password_hash: string;
}, {
    name?: string | null | undefined;
    email: string;
    password_hash: string;
}>;
export type RegisterSchema = z.infer<typeof RegisterSchema>;
export declare const RegisterAdminSchema: z.ZodObject<z.extendShape<{
    role: z.ZodNativeEnum<{
        no_data: "no_data";
        gtn_super_admin: "gtn_super_admin";
        gtn_admin: "gtn_admin";
        company_super_admin: "company_super_admin";
        company_admin: "company_admin";
        company_user: "company_user";
        job_seeker: "job_seeker";
    }>;
    email: z.ZodString;
    mobile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    password_hash: z.ZodString;
}, {
    entity_id: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mobile?: string | null | undefined;
    name?: string | null | undefined;
    role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
    email: string;
    password_hash: string;
    entity_id: number;
}, {
    mobile?: string | null | undefined;
    name?: string | null | undefined;
    role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
    email: string;
    password_hash: string;
    entity_id: number;
}>;
export type RegisterAdminSchema = z.infer<typeof RegisterAdminSchema>;
