import * as z from "zod";
import { CompleteJob } from "./index";
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const JobRequirementModel: z.ZodObject<{
    job_require_id: z.ZodString;
    job_id: z.ZodString;
    require_id: z.ZodNumber;
    require_detial: z.ZodType<Json, z.ZodTypeDef, Json>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    job_id: string;
    job_require_id: string;
    require_id: number;
    require_detial: Json;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    job_id: string;
    job_require_id: string;
    require_id: number;
    require_detial: Json;
}>;
export interface CompleteJobRequirement extends z.infer<typeof JobRequirementModel> {
    jobs: CompleteJob;
}
/**
 * RelatedJobRequirementModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedJobRequirementModel: z.ZodSchema<CompleteJobRequirement>;
export {};
