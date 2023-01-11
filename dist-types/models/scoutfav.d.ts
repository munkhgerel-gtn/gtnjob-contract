import * as z from "zod";
import { CompleteUser } from "./index";
export declare const ScoutFavModel: z.ZodObject<{
    scout_id: z.ZodString;
    entity_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    branch_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    user_id: z.ZodString;
    job_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    note: z.ZodString;
    created_at: z.ZodDate;
    created_by: z.ZodString;
}, "strip", z.ZodTypeAny, {
    entity_id?: number | null | undefined;
    branch_id?: number | null | undefined;
    job_id?: string | null | undefined;
    created_at: Date;
    created_by: string;
    user_id: string;
    scout_id: string;
    note: string;
}, {
    entity_id?: number | null | undefined;
    branch_id?: number | null | undefined;
    job_id?: string | null | undefined;
    created_at: Date;
    created_by: string;
    user_id: string;
    scout_id: string;
    note: string;
}>;
export interface CompleteScoutFav extends z.infer<typeof ScoutFavModel> {
    user: CompleteUser;
}
/**
 * RelatedScoutFavModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedScoutFavModel: z.ZodSchema<CompleteScoutFav>;
