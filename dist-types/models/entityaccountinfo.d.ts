import * as z from "zod";
import { CompleteEntity } from "./index";
export declare const EntityAccountInfoModel: z.ZodObject<{
    entity_accountinfo_id: z.ZodString;
    entity_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    bank_code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    branch_code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    account_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    is_default: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    entity_id?: number | null | undefined;
    bank_code?: string | null | undefined;
    branch_code?: string | null | undefined;
    account_id?: string | null | undefined;
    is_default?: boolean | null | undefined;
    created_at: Date;
    updated_at: Date;
    entity_accountinfo_id: string;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    entity_id?: number | null | undefined;
    bank_code?: string | null | undefined;
    branch_code?: string | null | undefined;
    account_id?: string | null | undefined;
    is_default?: boolean | null | undefined;
    created_at: Date;
    updated_at: Date;
    entity_accountinfo_id: string;
}>;
export interface CompleteEntityAccountInfo extends z.infer<typeof EntityAccountInfoModel> {
    entity?: CompleteEntity | null;
}
/**
 * RelatedEntityAccountInfoModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedEntityAccountInfoModel: z.ZodSchema<CompleteEntityAccountInfo>;
