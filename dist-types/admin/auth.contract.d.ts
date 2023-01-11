import { z } from "zod";
export declare const auth: {
    gtnlogin: {
        method: "POST";
        path: string;
        body: z.ZodObject<{
            email: z.ZodString;
            password_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
            password_hash: string;
        }, {
            email: string;
            password_hash: string;
        }>;
        responses: {
            200: z.ZodObject<{
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
            401: z.ZodString;
        };
        summary: string;
        description: string;
    };
    forgotPassword: {
        method: "POST";
        path: string;
        body: z.ZodObject<{
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
        }, {
            email: string;
        }>;
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    checkUser: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    resetPassword: {
        method: "POST";
        path: string;
        body: z.ZodEffects<z.ZodObject<z.extendShape<Pick<{
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
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    sendCode: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    createUser: {
        method: "POST";
        path: string;
        body: z.ZodObject<z.extendShape<{
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
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    getGtnProfile: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodObject<Omit<{
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
            }, "password_hash">, "strip", z.ZodTypeAny, {
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
                company_id: number;
                reset_code: string;
                is_emailverified: boolean;
                is_mobileverified: boolean;
                user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
                favs: (string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
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
                company_id: number;
                reset_code: string;
                is_emailverified: boolean;
                is_mobileverified: boolean;
                user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
                favs: (string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
            }>;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    gtnLogout: {
        method: "POST";
        path: string;
        body: null;
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    adminlogin: {
        method: "POST";
        path: string;
        body: z.ZodObject<{
            email: z.ZodString;
            password_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
            password_hash: string;
        }, {
            email: string;
            password_hash: string;
        }>;
        responses: {
            200: z.ZodObject<{
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
            401: z.ZodString;
        };
        summary: string;
        description: string;
    };
    forgotPasswordAdmin: {
        method: "POST";
        path: string;
        body: z.ZodObject<{
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
        }, {
            email: string;
        }>;
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    checkUserAdmin: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    resetPasswordAdmin: {
        method: "POST";
        path: string;
        body: z.ZodEffects<z.ZodObject<z.extendShape<Pick<{
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
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    sendCodeAdmin: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    createUserAdmin: {
        method: "POST";
        path: string;
        body: z.ZodObject<z.extendShape<{
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
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    getProfile: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodObject<Omit<{
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
            }, "password_hash">, "strip", z.ZodTypeAny, {
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
                company_id: number;
                reset_code: string;
                is_emailverified: boolean;
                is_mobileverified: boolean;
                user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
                favs: (string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
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
                company_id: number;
                reset_code: string;
                is_emailverified: boolean;
                is_mobileverified: boolean;
                user_status: "active" | "inactive_waitverify" | "inactive_changepass" | "suspended_attempt" | "suspended_admin" | "deleted";
                favs: (string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
            }>;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    adminLogout: {
        method: "POST";
        path: string;
        body: null;
        responses: {
            200: z.ZodString;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
};
