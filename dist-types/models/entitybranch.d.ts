import * as z from "zod";
import { CompleteEntity, CompleteJob } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const EntityBranchModel: z.ZodObject<{
    branch_id: z.ZodNumber;
    branch_name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    kana: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    is_jeadquarter: z.ZodBoolean;
    image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prefecture: z.ZodType<Json, z.ZodTypeDef, Json>;
    post_code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    city: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    district: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    address1: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    nearest_station: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    socials: z.ZodType<Json, z.ZodTypeDef, Json>;
    gps: z.ZodType<Json, z.ZodTypeDef, Json>;
    contact_person: z.ZodType<Json, z.ZodTypeDef, Json>;
    contact_details: z.ZodType<Json, z.ZodTypeDef, Json>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    entity_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    post_code?: string | null | undefined;
    city?: string | null | undefined;
    district?: string | null | undefined;
    address?: string | null | undefined;
    address1?: string | null | undefined;
    nearest_station?: string | null | undefined;
    kana?: string | null | undefined;
    branch_name?: string | null | undefined;
    image?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    prefecture: Json;
    socials: Json;
    entity_id: number;
    gps: Json;
    contact_person: Json;
    contact_details: Json;
    branch_id: number;
    is_jeadquarter: boolean;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    post_code?: string | null | undefined;
    city?: string | null | undefined;
    district?: string | null | undefined;
    address?: string | null | undefined;
    address1?: string | null | undefined;
    nearest_station?: string | null | undefined;
    kana?: string | null | undefined;
    branch_name?: string | null | undefined;
    image?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    prefecture: Json;
    socials: Json;
    entity_id: number;
    gps: Json;
    contact_person: Json;
    contact_details: Json;
    branch_id: number;
    is_jeadquarter: boolean;
}>;
export interface CompleteEntityBranch extends z.infer<typeof EntityBranchModel> {
    entity: CompleteEntity;
    jobs: CompleteJob[];
}
/**
 * RelatedEntityBranchModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedEntityBranchModel: z.ZodSchema<CompleteEntityBranch>;
export {};
