import * as z from "zod"
import { CompleteCustomerJobDetail, RelatedCustomerJobDetailModel, CompleteReferenceListItems, RelatedReferenceListItemsModel } from "./index"

export const CustomerExperienceModel = z.object({
  experience_id: z.string(),
  jobdetail_id: z.string(),
  skill_id: z.number().int(),
  over_year: z.number().int().nullish(),
  created_at: z.date(),
  updated_at: z.date().nullish(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteCustomerExperience extends z.infer<typeof CustomerExperienceModel> {
  jobdetails: CompleteCustomerJobDetail
  listitems: CompleteReferenceListItems
}

/**
 * RelatedCustomerExperienceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerExperienceModel: z.ZodSchema<CompleteCustomerExperience> = z.lazy(() => CustomerExperienceModel.extend({
  jobdetails: RelatedCustomerJobDetailModel,
  listitems: RelatedReferenceListItemsModel,
}))
