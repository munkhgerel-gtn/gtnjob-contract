import * as z from "zod";
import { CompleteCustomer } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const CustomerDesiredModel: z.ZodObject<{
    desired_id: z.ZodString;
    customer_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    occupation: z.ZodArray<z.ZodType<Json, z.ZodTypeDef, Json>, "many">;
    industry: z.ZodArray<z.ZodType<Json, z.ZodTypeDef, Json>, "many">;
    location: z.ZodArray<z.ZodType<Json, z.ZodTypeDef, Json>, "many">;
    career_level: z.ZodArray<z.ZodType<Json, z.ZodTypeDef, Json>, "many">;
    contract_type: z.ZodArray<z.ZodType<Json, z.ZodTypeDef, Json>, "many">;
    desired_company: z.ZodArray<z.ZodType<Json, z.ZodTypeDef, Json>, "many">;
    time_to: z.ZodString;
    annual_income: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    customer_id?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    desired_id: string;
    occupation: Json[];
    industry: Json[];
    location: Json[];
    career_level: Json[];
    contract_type: Json[];
    desired_company: Json[];
    time_to: string;
    annual_income: number;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    customer_id?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    desired_id: string;
    occupation: Json[];
    industry: Json[];
    location: Json[];
    career_level: Json[];
    contract_type: Json[];
    desired_company: Json[];
    time_to: string;
    annual_income: number;
}>;
export interface CompleteCustomerDesired extends z.infer<typeof CustomerDesiredModel> {
    customer?: CompleteCustomer | null;
}
/**
 * RelatedCustomerDesiredModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCustomerDesiredModel: z.ZodSchema<CompleteCustomerDesired>;
export {};
