import { z } from "zod";
export declare const LoginSchema: z.ZodObject<{
    user: z.ZodObject<Pick<{
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
        favs: z.ZodType<(string | number | boolean) | {
            [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
        } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
            [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
        } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
    }, "role" | "email" | "user_id" | "name" | "user_status">, "strip", z.ZodTypeAny, {
        name?: string | null | undefined;
        role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
        email: string;
        user_id: string;
        user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
    }, {
        name?: string | null | undefined;
        role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
        email: string;
        user_id: string;
        user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
    }>;
    message: z.ZodString;
    accessToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    user: {
        name?: string | null | undefined;
        role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
        email: string;
        user_id: string;
        user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
    };
    accessToken: string;
}, {
    message: string;
    user: {
        name?: string | null | undefined;
        role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
        email: string;
        user_id: string;
        user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
    };
    accessToken: string;
}>;
export type LoginSchema = z.infer<typeof LoginSchema>;
