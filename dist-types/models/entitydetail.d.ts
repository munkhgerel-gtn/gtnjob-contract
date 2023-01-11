import * as z from "zod";
import { CompleteEntity } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const EntityDetailModel: z.ZodObject<{
    entity_detail_id: z.ZodString;
    entity_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    establishment: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    capital: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    numberof_employees: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    business_performance: z.ZodType<Json, z.ZodTypeDef, Json>;
    representative_telephone: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    representative: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    average_age: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    foreign_capitalratio: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    homepage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    business_summary: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    organizational_structure: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    company_sales: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    workplace_environment: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    shareholder: z.ZodType<Json, z.ZodTypeDef, Json>;
    related_company: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    recruitment_personname: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    memo: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    business_status: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    entity_id?: number | null | undefined;
    establishment?: Date | null | undefined;
    capital?: number | null | undefined;
    numberof_employees?: number | null | undefined;
    representative_telephone?: string | null | undefined;
    representative?: string | null | undefined;
    average_age?: number | null | undefined;
    foreign_capitalratio?: number | null | undefined;
    homepage?: string | null | undefined;
    business_summary?: string | null | undefined;
    organizational_structure?: string | null | undefined;
    company_sales?: string | null | undefined;
    workplace_environment?: string | null | undefined;
    related_company?: number | null | undefined;
    recruitment_personname?: string | null | undefined;
    memo?: string | null | undefined;
    business_status?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    entity_detail_id: string;
    business_performance: Json;
    shareholder: Json;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    entity_id?: number | null | undefined;
    establishment?: Date | null | undefined;
    capital?: number | null | undefined;
    numberof_employees?: number | null | undefined;
    representative_telephone?: string | null | undefined;
    representative?: string | null | undefined;
    average_age?: number | null | undefined;
    foreign_capitalratio?: number | null | undefined;
    homepage?: string | null | undefined;
    business_summary?: string | null | undefined;
    organizational_structure?: string | null | undefined;
    company_sales?: string | null | undefined;
    workplace_environment?: string | null | undefined;
    related_company?: number | null | undefined;
    recruitment_personname?: string | null | undefined;
    memo?: string | null | undefined;
    business_status?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    entity_detail_id: string;
    business_performance: Json;
    shareholder: Json;
}>;
export interface CompleteEntityDetail extends z.infer<typeof EntityDetailModel> {
    entity?: CompleteEntity | null;
}
/**
 * RelatedEntityDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedEntityDetailModel: z.ZodSchema<CompleteEntityDetail>;
export {};
