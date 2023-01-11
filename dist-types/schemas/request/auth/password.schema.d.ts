import { z } from "zod";
export declare const ChangePasswordSchema: z.ZodEffects<z.ZodObject<z.extendShape<Pick<{
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
}, "user_id">, {
    generated: z.ZodString;
    old_pass: z.ZodString;
    new_pass: z.ZodString;
    new_pass_again: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    user_id: string;
    generated: string;
    old_pass: string;
    new_pass: string;
    new_pass_again: string;
}, {
    user_id: string;
    generated: string;
    old_pass: string;
    new_pass: string;
    new_pass_again: string;
}>, {
    user_id: string;
    generated: string;
    old_pass: string;
    new_pass: string;
    new_pass_again: string;
}, {
    user_id: string;
    generated: string;
    old_pass: string;
    new_pass: string;
    new_pass_again: string;
}>;
export type ChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
