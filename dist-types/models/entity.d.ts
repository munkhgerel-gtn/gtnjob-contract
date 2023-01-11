import * as z from "zod";
import { CompleteEntityDetail, CompleteEntityBranch, CompleteEntityAccountInfo, CompleteInquiry } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const EntityModel: z.ZodObject<{
    entity_id: z.ZodNumber;
    name: z.ZodString;
    kana: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    logo: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    socials: z.ZodType<Json, z.ZodTypeDef, Json>;
    gps: z.ZodType<Json, z.ZodTypeDef, Json>;
    contact_person: z.ZodType<Json, z.ZodTypeDef, Json>;
    contact_details: z.ZodType<Json, z.ZodTypeDef, Json>;
    is_system: z.ZodBoolean;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    kana?: string | null | undefined;
    logo?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    socials: Json;
    name: string;
    entity_id: number;
    gps: Json;
    contact_person: Json;
    contact_details: Json;
    is_system: boolean;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    kana?: string | null | undefined;
    logo?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    socials: Json;
    name: string;
    entity_id: number;
    gps: Json;
    contact_person: Json;
    contact_details: Json;
    is_system: boolean;
}>;
export interface CompleteEntity extends z.infer<typeof EntityModel> {
    entity_details: CompleteEntityDetail[];
    entity_branches: CompleteEntityBranch[];
    entity_accountinfos: CompleteEntityAccountInfo[];
    inquiries: CompleteInquiry[];
}
/**
 * RelatedEntityModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedEntityModel: z.ZodSchema<CompleteEntity>;
export {};
