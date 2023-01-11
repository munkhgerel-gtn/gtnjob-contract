import * as z from "zod";
import { CompleteCustomer } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const CustomerWorkHistoryModel: z.ZodObject<{
    workhistory_id: z.ZodString;
    customer_id: z.ZodString;
    company_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    company_info: z.ZodType<Json, z.ZodTypeDef, Json>;
    occupation: z.ZodType<Json, z.ZodTypeDef, Json>;
    industry: z.ZodType<Json, z.ZodTypeDef, Json>;
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
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
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
    occupation: Json;
    industry: Json;
    workhistory_id: string;
    company_info: Json;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
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
    occupation: Json;
    industry: Json;
    workhistory_id: string;
    company_info: Json;
}>;
export interface CompleteCustomerWorkHistory extends z.infer<typeof CustomerWorkHistoryModel> {
    customer: CompleteCustomer;
}
/**
 * RelatedCustomerWorkHistoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCustomerWorkHistoryModel: z.ZodSchema<CompleteCustomerWorkHistory>;
export {};
