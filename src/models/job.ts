import * as z from "zod";
import {
  JobPublish,
  JobPosition,
  Smoke,
  EmploymentStatus,
  LanguageLevel,
  ReqriutmentType,
  SalaryType,
} from "@gtnmugy/core";
import {
  CompleteJobReferenceList,
  RelatedJobReferenceListModel,
  CompleteJobOtherLanguage,
  RelatedJobOtherLanguageModel,
  CompleteEntityBranch,
  RelatedEntityBranchModel,
  CompleteJobCandidate,
  RelatedJobCandidateModel,
  CompleteJobRequirement,
  RelatedJobRequirementModel,
} from "./index";

export const JobModel = z.object({
  job_id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string(),
  updated_by: z.string().nullish(),
  job_publish: z.nativeEnum(JobPublish),
  location_details: z.string().nullish(),
  career_level: z.nativeEnum(JobPosition).array(),
  benefit_other: z.string().nullish(),
  smoke: z.nativeEnum(Smoke).array(),
  employment_status: z.nativeEnum(EmploymentStatus),
  japanese_level: z.nativeEnum(LanguageLevel),
  english_level: z.nativeEnum(LanguageLevel),
  experienced_count: z.number().int(),
  age_min: z.number().int().nullish(),
  age_max: z.number().int().nullish(),
  set_age_reason: z.string().nullish(),
  recruitment_type: z.nativeEnum(ReqriutmentType).nullish(),
  job_title: z.string(),
  job_description: z.string(),
  japanese_percentage: z.number().int().nullish(),
  must_condition: z.string(),
  want_condition: z.string().nullish(),
  position_name: z.string().nullish(),
  working_hour: z.string(),
  salary_type: z.nativeEnum(SalaryType),
  salary_min: z.number().int().nullish(),
  salary_max: z.number().int().nullish(),
  salary_detail: z.string(),
  day_off: z.string().nullish(),
  progress_detail: z.string(),
  entity_branch_id: z.number().int(),
  expire_date: z.date().nullish(),
});

export interface CompleteJob extends z.infer<typeof JobModel> {
  job_references: CompleteJobReferenceList[];
  job_other_languages: CompleteJobOtherLanguage[];
  entity_branch?: CompleteEntityBranch | null;
  job_candidates: CompleteJobCandidate[];
  JobRequirement: CompleteJobRequirement[];
}

/**
 * RelatedJobModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedJobModel: z.ZodSchema<CompleteJob> = z.lazy(() =>
  JobModel.extend({
    job_references: RelatedJobReferenceListModel.array(),
    job_other_languages: RelatedJobOtherLanguageModel.array(),
    entity_branch: RelatedEntityBranchModel.nullish(),
    job_candidates: RelatedJobCandidateModel.array(),
    JobRequirement: RelatedJobRequirementModel.array(),
  })
);
