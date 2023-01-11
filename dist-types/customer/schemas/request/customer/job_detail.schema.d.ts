import { z } from "zod";
export declare const CustomerJobDetailCreateSchema: z.ZodObject<{
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
export type CustomerJobDetailCreateSchema = z.infer<typeof CustomerJobDetailCreateSchema>;
export declare const CustomerJobDetailUpdateSchema: z.ZodObject<{
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
export type CustomerJobDetailUpdateSchema = z.infer<typeof CustomerJobDetailUpdateSchema>;
