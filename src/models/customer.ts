import * as z from "zod"
import { Gender, CustomerStatus } from "../../../backend/backend_app/core/dist/client"
import { CompleteUser, RelatedUserModel, CompleteCustomerVisa, RelatedCustomerVisaModel, CompleteCustomerJobDetail, RelatedCustomerJobDetailModel, CompleteCustomerEducation, RelatedCustomerEducationModel, CompleteCustomerLanguage, RelatedCustomerLanguageModel, CompleteCustomerQualification, RelatedCustomerQualificationModel, CompleteCustomerWorkHistory, RelatedCustomerWorkHistoryModel, CompleteJobCandidate, RelatedJobCandidateModel, CompleteCustomerDesired, RelatedCustomerDesiredModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const CustomerModel = z.object({
  customer_id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  first_name_kana: z.string(),
  last_name_kana: z.string(),
  gender: z.nativeEnum(Gender).nullish(),
  birth_date: z.date().nullish(),
  spouse: jsonSchema,
  family_size: z.number().int().nullish(),
  email: z.string().nullish(),
  mobile: z.string().nullish(),
  phone: z.string().nullish(),
  profile_image: z.string().nullish(),
  cv_file: z.string().nullish(),
  resume_file: z.string().nullish(),
  prefecture: jsonSchema,
  post_code: z.string().nullish(),
  city: z.string().nullish(),
  district: z.string().nullish(),
  address: z.string().nullish(),
  address1: z.string().nullish(),
  nearest_station: z.string().nullish(),
  socials: jsonSchema,
  country: z.string().nullish(),
  experienced_year: z.number().int().nullish(),
  from_data: z.number().int().nullish(),
  status_customer: z.nativeEnum(CustomerStatus).nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteCustomer extends z.infer<typeof CustomerModel> {
  user?: CompleteUser | null
  customer_visas: CompleteCustomerVisa[]
  customer_jobdetails: CompleteCustomerJobDetail[]
  customer_educations: CompleteCustomerEducation[]
  customer_languages: CompleteCustomerLanguage[]
  customer_qualifications: CompleteCustomerQualification[]
  customer_workhistories: CompleteCustomerWorkHistory[]
  job_candidates: CompleteJobCandidate[]
  customer_desired: CompleteCustomerDesired[]
}

/**
 * RelatedCustomerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerModel: z.ZodSchema<CompleteCustomer> = z.lazy(() => CustomerModel.extend({
  user: RelatedUserModel.nullish(),
  customer_visas: RelatedCustomerVisaModel.array(),
  customer_jobdetails: RelatedCustomerJobDetailModel.array(),
  customer_educations: RelatedCustomerEducationModel.array(),
  customer_languages: RelatedCustomerLanguageModel.array(),
  customer_qualifications: RelatedCustomerQualificationModel.array(),
  customer_workhistories: RelatedCustomerWorkHistoryModel.array(),
  job_candidates: RelatedJobCandidateModel.array(),
  customer_desired: RelatedCustomerDesiredModel.array(),
}))
