import { z } from "zod";
import {
  JobModel,
  JobOtherLanguageModel,
  ReferenceListItemsModel,
} from "../../../../models";
import { response } from "../../../../schemas";
import { ReferenceListItemsSchema } from "../reference";

export const JobOtherLanguageSchema = JobOtherLanguageModel.omit({
  job_id: true,
});
export type JobOtherLanguageSchema = z.infer<typeof JobOtherLanguageSchema>;

// => default
export const JobSchema = JobModel.pick({
  job_id: true,
  created_at: true,
  job_title: true,
  employment_status: true,
  location_details: true,
  salary_type: true,
  salary_min: true,
  salary_max: true,
  japanese_level: true,
  english_level: true,
  recruitment_type: true,
}).extend({
  job_other_language: JobOtherLanguageSchema.array(),
  benefits: ReferenceListItemsSchema.partial().array(),
});
export type JobSchema = z.infer<typeof JobSchema>;

// => search
export const JobSearchSchema = z.object({
  meta: response.PaginationMetaSchema,
  items: JobSchema.array(),
});
export type JobSearchSchema = z.infer<typeof JobSearchSchema>;

// => details
export const JobDetailSchema = JobModel.omit({
  created_by: true,
  updated_by: true,
}).extend({
  job_other_language: JobOtherLanguageSchema.array(),
  occupations: ReferenceListItemsSchema.partial().array(),
  industries: ReferenceListItemsSchema.partial().array(),
  prefectures: ReferenceListItemsSchema.partial().array(),
  educations: ReferenceListItemsSchema.partial().array(),
  benefits: ReferenceListItemsSchema.partial().array(),
});
export type JobDetailSchema = z.infer<typeof JobDetailSchema>;
