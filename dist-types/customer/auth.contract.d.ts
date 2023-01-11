import { z } from "zod";
export declare const auth: {
    login: {
        method: "POST";
        path: string;
        body: z.ZodObject<Pick<{
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
        }, "email" | "password_hash">, "strip", z.ZodTypeAny, {
            email: string;
            password_hash: string;
        }, {
            email: string;
            password_hash: string;
        }>;
        responses: {
            200: {
                user: z.ZodObject<{
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
                message: z.ZodString;
                accessToken: z.ZodString;
            };
            401: z.ZodObject<{
                statusCode: z.ZodNumber;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                statusCode: number;
            }, {
                message: string;
                statusCode: number;
            }>;
        };
        summary: string;
        description: string;
    };
    register: {
        method: "POST";
        path: string;
        body: z.ZodObject<Pick<{
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
        }, "email" | "name" | "role" | "password_hash">, "strip", z.ZodTypeAny, {
            email: string;
            name: string;
            role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
            password_hash: string;
        }, {
            email: string;
            name: string;
            role: "no_data" | "gtn_super_admin" | "gtn_admin" | "company_super_admin" | "company_admin" | "company_user" | "job_seeker";
            password_hash: string;
        }>;
        responses: {
            200: {
                user: z.ZodObject<{
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
                message: z.ZodString;
                accessToken: z.ZodString;
            };
            400: z.ZodObject<{
                statusCode: z.ZodNumber;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                statusCode: number;
            }, {
                message: string;
                statusCode: number;
            }>;
        };
        summary: string;
        description: string;
    };
    getProfile: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodObject<{
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
        };
        summary: string;
        description: string;
    };
};
