import * as z from "zod";
import { LanguageLevel } from "@gtnmugy/core";
import { CompleteJob, RelatedJobModel } from "./index";

export const JobOtherLanguageModel = z.object({
  job_other_language_id: z.string(),
  language_id: z.number().int(),
  language_level: z.nativeEnum(LanguageLevel),
  job_id: z.string(),
});

export interface CompleteJobOtherLanguage
  extends z.infer<typeof JobOtherLanguageModel> {
  job: CompleteJob;
}

/**
 * RelatedJobOtherLanguageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedJobOtherLanguageModel: z.ZodSchema<CompleteJobOtherLanguage> =
  z.lazy(() =>
    JobOtherLanguageModel.extend({
      job: RelatedJobModel,
    })
  );
