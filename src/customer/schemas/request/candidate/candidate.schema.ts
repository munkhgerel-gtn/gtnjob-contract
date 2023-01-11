import { z } from "zod";
import { JobModel } from "../../../../models";

// => CREATE
export const CreateCandidateSchema = JobModel.pick({
  job_id: true,
});
export type CreateCandidateSchema = z.infer<typeof CreateCandidateSchema>;
