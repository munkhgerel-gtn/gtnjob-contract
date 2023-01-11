import * as z from "zod"
import { CompleteJob, RelatedJobModel, CompleteCustomer, RelatedCustomerModel } from "./index"

export const JobCandidateModel = z.object({
  job_candidate_id: z.string(),
  job_id: z.string(),
  customer_id: z.string(),
  candidate_status: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteJobCandidate extends z.infer<typeof JobCandidateModel> {
  job: CompleteJob
  customer: CompleteCustomer
}

/**
 * RelatedJobCandidateModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedJobCandidateModel: z.ZodSchema<CompleteJobCandidate> = z.lazy(() => JobCandidateModel.extend({
  job: RelatedJobModel,
  customer: RelatedCustomerModel,
}))
