import * as z from "zod";
import { CompleteUser } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const LoggerModel: z.ZodObject<{
    log_id: z.ZodString;
    action_user: z.ZodNativeEnum<{
        no_data: "no_data";
        manage: "manage";
        create: "create";
        read: "read";
        update: "update";
        delete: "delete";
    }>;
    user_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    new_value: z.ZodType<Json, z.ZodTypeDef, Json>;
    old_value: z.ZodType<Json, z.ZodTypeDef, Json>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    user_id?: string | null | undefined;
    action_user: "no_data" | "manage" | "create" | "read" | "update" | "delete";
    created_at: Date;
    updated_at: Date;
    log_id: string;
    new_value: Json;
    old_value: Json;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    user_id?: string | null | undefined;
    action_user: "no_data" | "manage" | "create" | "read" | "update" | "delete";
    created_at: Date;
    updated_at: Date;
    log_id: string;
    new_value: Json;
    old_value: Json;
}>;
export interface CompleteLogger extends z.infer<typeof LoggerModel> {
    User?: CompleteUser | null;
}
/**
 * RelatedLoggerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedLoggerModel: z.ZodSchema<CompleteLogger>;
export {};
