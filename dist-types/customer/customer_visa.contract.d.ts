import { z } from "zod";
export declare const customerVisa: {
    create: {
        method: "POST";
        path: string;
        body: z.ZodObject<{
            status_visa: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
                no_data: "no_data";
            }>>>;
            date_expire: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
            country_citizenship: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            back_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            front_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            status_visa?: "no_data" | null | undefined;
            date_expire?: Date | null | undefined;
            country_citizenship?: string | null | undefined;
            back_visafile?: string | null | undefined;
            front_visafile?: string | null | undefined;
        }, {
            status_visa?: "no_data" | null | undefined;
            date_expire?: Date | null | undefined;
            country_citizenship?: string | null | undefined;
            back_visafile?: string | null | undefined;
            front_visafile?: string | null | undefined;
        }>;
        responses: {
            200: z.ZodObject<{
                visa_id: z.ZodString;
                customer_id: z.ZodString;
                status_visa: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
                    no_data: "no_data";
                }>>>;
                date_expire: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
                country_citizenship: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                back_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                front_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                created_by?: string | null | undefined;
                updated_by?: string | null | undefined;
                status_visa?: "no_data" | null | undefined;
                date_expire?: Date | null | undefined;
                country_citizenship?: string | null | undefined;
                back_visafile?: string | null | undefined;
                front_visafile?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                customer_id: string;
                visa_id: string;
            }, {
                created_by?: string | null | undefined;
                updated_by?: string | null | undefined;
                status_visa?: "no_data" | null | undefined;
                date_expire?: Date | null | undefined;
                country_citizenship?: string | null | undefined;
                back_visafile?: string | null | undefined;
                front_visafile?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                customer_id: string;
                visa_id: string;
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
            status_visa: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
                no_data: "no_data";
            }>>>;
            date_expire: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
            country_citizenship: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            back_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            front_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            status_visa?: "no_data" | null | undefined;
            date_expire?: Date | null | undefined;
            country_citizenship?: string | null | undefined;
            back_visafile?: string | null | undefined;
            front_visafile?: string | null | undefined;
        }, {
            status_visa?: "no_data" | null | undefined;
            date_expire?: Date | null | undefined;
            country_citizenship?: string | null | undefined;
            back_visafile?: string | null | undefined;
            front_visafile?: string | null | undefined;
        }>;
        responses: {
            200: z.ZodObject<{
                visa_id: z.ZodString;
                customer_id: z.ZodString;
                status_visa: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
                    no_data: "no_data";
                }>>>;
                date_expire: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
                country_citizenship: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                back_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                front_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                created_by?: string | null | undefined;
                updated_by?: string | null | undefined;
                status_visa?: "no_data" | null | undefined;
                date_expire?: Date | null | undefined;
                country_citizenship?: string | null | undefined;
                back_visafile?: string | null | undefined;
                front_visafile?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                customer_id: string;
                visa_id: string;
            }, {
                created_by?: string | null | undefined;
                updated_by?: string | null | undefined;
                status_visa?: "no_data" | null | undefined;
                date_expire?: Date | null | undefined;
                country_citizenship?: string | null | undefined;
                back_visafile?: string | null | undefined;
                front_visafile?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                customer_id: string;
                visa_id: string;
            }>;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    find: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodObject<{
                visa_id: z.ZodString;
                customer_id: z.ZodString;
                status_visa: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
                    no_data: "no_data";
                }>>>;
                date_expire: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
                country_citizenship: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                back_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                front_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                created_by?: string | null | undefined;
                updated_by?: string | null | undefined;
                status_visa?: "no_data" | null | undefined;
                date_expire?: Date | null | undefined;
                country_citizenship?: string | null | undefined;
                back_visafile?: string | null | undefined;
                front_visafile?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                customer_id: string;
                visa_id: string;
            }, {
                created_by?: string | null | undefined;
                updated_by?: string | null | undefined;
                status_visa?: "no_data" | null | undefined;
                date_expire?: Date | null | undefined;
                country_citizenship?: string | null | undefined;
                back_visafile?: string | null | undefined;
                front_visafile?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                customer_id: string;
                visa_id: string;
            }>;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
};
