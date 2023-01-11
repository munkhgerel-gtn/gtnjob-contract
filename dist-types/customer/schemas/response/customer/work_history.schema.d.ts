import { z } from "zod";
export declare const CustomerWorkHistorySchema: z.ZodObject<Omit<{
    workhistory_id: z.ZodString;
    customer_id: z.ZodString;
    company_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    company_info: z.ZodType<(string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
    occupation: z.ZodType<(string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
    industry: z.ZodType<(string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
    position: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
        no_data: "no_data";
        execute: "execute";
        manager: "manager";
        senior: "senior";
        staff: "staff";
        entry: "entry";
    }>>>;
    enter_date: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    leave_date: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    working_month: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    is_current: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    duties: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "created_by" | "updated_by">, "strip", z.ZodTypeAny, {
    company_id?: string | null | undefined;
    is_current?: boolean | null | undefined;
    position?: "no_data" | "execute" | "manager" | "senior" | "staff" | "entry" | null | undefined;
    enter_date?: Date | null | undefined;
    leave_date?: Date | null | undefined;
    working_month?: number | null | undefined;
    duties?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    customer_id: string;
    occupation: (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    industry: (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    workhistory_id: string;
    company_info: (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
}, {
    company_id?: string | null | undefined;
    is_current?: boolean | null | undefined;
    position?: "no_data" | "execute" | "manager" | "senior" | "staff" | "entry" | null | undefined;
    enter_date?: Date | null | undefined;
    leave_date?: Date | null | undefined;
    working_month?: number | null | undefined;
    duties?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    customer_id: string;
    occupation: (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    industry: (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    workhistory_id: string;
    company_info: (string | number | boolean) | {
        [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
    } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
}>;
export type CustomerWorkHistorySchema = z.infer<typeof CustomerWorkHistorySchema>;
