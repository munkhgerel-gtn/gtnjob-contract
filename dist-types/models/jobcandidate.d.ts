import * as z from "zod";
import { CompleteJob, CompleteCustomer } from "./index";
export declare const JobCandidateModel: z.ZodObject<{
    job_candidate_id: z.ZodString;
    job_id: z.ZodString;
    customer_id: z.ZodString;
    candidate_status: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    created_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    customer_id: string;
    job_id: string;
    job_candidate_id: string;
    candidate_status: number;
}, {
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_at: Date;
    updated_at: Date;
    customer_id: string;
    job_id: string;
    job_candidate_id: string;
    candidate_status: number;
}>;
export interface CompleteJobCandidate extends z.infer<typeof JobCandidateModel> {
    job: CompleteJob;
    customer: CompleteCustomer;
}
/**
 * RelatedJobCandidateModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedJobCandidateModel: z.ZodSchema<CompleteJobCandidate>;
