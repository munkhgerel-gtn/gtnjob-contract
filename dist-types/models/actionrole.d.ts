import * as z from "zod";
export declare const ActionRoleModel: z.ZodObject<{
    action_role_id: z.ZodString;
    controller_path: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    action_user: z.ZodNativeEnum<{
        no_data: "no_data";
        manage: "manage";
        create: "create";
        read: "read";
        update: "update";
        delete: "delete";
    }>;
    role: z.ZodNativeEnum<{
        no_data: "no_data";
        gtn_super_admin: "gtn_super_admin";
        gtn_admin: "gtn_admin";
        company_super_admin: "company_super_admin";
        company_admin: "company_admin";
        company_user: "company_user";
        job_seeker: "job_seeker";
    }>;
    is_can: z.ZodBoolean;
    is_company: z.ZodBoolean;
    parent_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    controller_path?: string | null | undefined;
    parent_id?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    action_role_id: string;
    action_user: "no_data" | "manage" | "create" | "read" | "update" | "delete";
    role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
    is_can: boolean;
    is_company: boolean;
    created_at: Date;
    updated_at: Date;
}, {
    controller_path?: string | null | undefined;
    parent_id?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    action_role_id: string;
    action_user: "no_data" | "manage" | "create" | "read" | "update" | "delete";
    role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
    is_can: boolean;
    is_company: boolean;
    created_at: Date;
    updated_at: Date;
}>;
