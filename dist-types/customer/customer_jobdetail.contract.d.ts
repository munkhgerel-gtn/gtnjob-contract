import { z } from "zod";
export declare const customerJobDetail: {
    create: {
        method: "POST";
        path: string;
        body: z.ZodObject<{
            annual_income: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            experienced_company: z.ZodNumber;
            has_management_exp: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            annual_income?: number | null | undefined;
            experienced_company: number;
            has_management_exp: boolean;
        }, {
            annual_income?: number | null | undefined;
            experienced_company: number;
            has_management_exp: boolean;
        }>;
        responses: {
            200: z.ZodObject<Omit<{
                jobdetail_id: z.ZodString;
                customer_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                experienced_company: z.ZodNumber;
                annual_income: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                has_management_exp: z.ZodBoolean;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "created_by" | "updated_by">, "strip", z.ZodTypeAny, {
                customer_id?: string | null | undefined;
                annual_income?: number | null | undefined;
                created_at: Date;
                updated_at: Date;
                jobdetail_id: string;
                experienced_company: number;
                has_management_exp: boolean;
            }, {
                customer_id?: string | null | undefined;
                annual_income?: number | null | undefined;
                created_at: Date;
                updated_at: Date;
                jobdetail_id: string;
                experienced_company: number;
                has_management_exp: boolean;
            }>;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    update: {
        method: "PATCH";
        path: string;
        body: z.ZodObject<{
            annual_income: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            jobdetail_id: z.ZodString;
            experienced_company: z.ZodNumber;
            has_management_exp: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            annual_income?: number | null | undefined;
            jobdetail_id: string;
            experienced_company: number;
            has_management_exp: boolean;
        }, {
            annual_income?: number | null | undefined;
            jobdetail_id: string;
            experienced_company: number;
            has_management_exp: boolean;
        }>;
        responses: {
            200: z.ZodObject<Omit<{
                jobdetail_id: z.ZodString;
                customer_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                experienced_company: z.ZodNumber;
                annual_income: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                has_management_exp: z.ZodBoolean;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "created_by" | "updated_by">, "strip", z.ZodTypeAny, {
                customer_id?: string | null | undefined;
                annual_income?: number | null | undefined;
                created_at: Date;
                updated_at: Date;
                jobdetail_id: string;
                experienced_company: number;
                has_management_exp: boolean;
            }, {
                customer_id?: string | null | undefined;
                annual_income?: number | null | undefined;
                created_at: Date;
                updated_at: Date;
                jobdetail_id: string;
                experienced_company: number;
                has_management_exp: boolean;
            }>;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    findbyCustomer: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodArray<z.ZodObject<Omit<{
                jobdetail_id: z.ZodString;
                customer_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                experienced_company: z.ZodNumber;
                annual_income: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                has_management_exp: z.ZodBoolean;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "created_by" | "updated_by">, "strip", z.ZodTypeAny, {
                customer_id?: string | null | undefined;
                annual_income?: number | null | undefined;
                created_at: Date;
                updated_at: Date;
                jobdetail_id: string;
                experienced_company: number;
                has_management_exp: boolean;
            }, {
                customer_id?: string | null | undefined;
                annual_income?: number | null | undefined;
                created_at: Date;
                updated_at: Date;
                jobdetail_id: string;
                experienced_company: number;
                has_management_exp: boolean;
            }>, "many">;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
};
