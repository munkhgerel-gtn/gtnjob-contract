import * as z from "zod"
import { CompleteCustomer, RelatedCustomerModel, CompleteCustomerExperience, RelatedCustomerExperienceModel } from "./index"

export const CustomerJobDetailModel = z.object({
  jobdetail_id: z.string(),
  customer_id: z.string().nullish(),
  experienced_company: z.number().int(),
  annual_income: z.number().int().nullish(),
  has_management_exp: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteCustomerJobDetail extends z.infer<typeof CustomerJobDetailModel> {
  customer?: CompleteCustomer | null
  customer_experiences: CompleteCustomerExperience[]
}

/**
 * RelatedCustomerJobDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerJobDetailModel: z.ZodSchema<CompleteCustomerJobDetail> = z.lazy(() => CustomerJobDetailModel.extend({
  customer: RelatedCustomerModel.nullish(),
  customer_experiences: RelatedCustomerExperienceModel.array(),
}))
