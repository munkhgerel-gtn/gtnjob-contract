import * as z from "zod"
import { CompleteCustomer, RelatedCustomerModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const CustomerQualificationModel = z.object({
  qualification_id: z.string(),
  customer_id: z.string(),
  qualification: jsonSchema,
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteCustomerQualification extends z.infer<typeof CustomerQualificationModel> {
  customers: CompleteCustomer
}

/**
 * RelatedCustomerQualificationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerQualificationModel: z.ZodSchema<CompleteCustomerQualification> = z.lazy(() => CustomerQualificationModel.extend({
  customers: RelatedCustomerModel,
}))
