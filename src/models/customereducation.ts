import * as z from "zod"
import { CompleteCustomer, RelatedCustomerModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const CustomerEducationModel = z.object({
  education_id: z.string(),
  customer_id: z.string().nullish(),
  country: z.string().nullish(),
  degree: jsonSchema,
  entrollment_date: z.date().nullish(),
  graduate_date: z.date().nullish(),
  is_current: z.boolean().nullish(),
  school_id: z.number().int().nullish(),
  school: jsonSchema,
  faculty: z.string().nullish(),
  department: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteCustomerEducation extends z.infer<typeof CustomerEducationModel> {
  customer?: CompleteCustomer | null
}

/**
 * RelatedCustomerEducationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerEducationModel: z.ZodSchema<CompleteCustomerEducation> = z.lazy(() => CustomerEducationModel.extend({
  customer: RelatedCustomerModel.nullish(),
}))
