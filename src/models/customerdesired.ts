import * as z from "zod"
import { CompleteCustomer, RelatedCustomerModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const CustomerDesiredModel = z.object({
  desired_id: z.string(),
  customer_id: z.string().nullish(),
  occupation: jsonSchema.array(),
  industry: jsonSchema.array(),
  location: jsonSchema.array(),
  career_level: jsonSchema.array(),
  contract_type: jsonSchema.array(),
  desired_company: jsonSchema.array(),
  time_to: z.string(),
  annual_income: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteCustomerDesired extends z.infer<typeof CustomerDesiredModel> {
  customer?: CompleteCustomer | null
}

/**
 * RelatedCustomerDesiredModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerDesiredModel: z.ZodSchema<CompleteCustomerDesired> = z.lazy(() => CustomerDesiredModel.extend({
  customer: RelatedCustomerModel.nullish(),
}))
