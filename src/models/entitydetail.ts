import * as z from "zod"
import { CompleteEntity, RelatedEntityModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const EntityDetailModel = z.object({
  entity_detail_id: z.string(),
  entity_id: z.number().int().nullish(),
  establishment: z.date().nullish(),
  capital: z.number().int().nullish(),
  numberof_employees: z.number().int().nullish(),
  business_performance: jsonSchema,
  representative_telephone: z.string().nullish(),
  representative: z.string().nullish(),
  average_age: z.number().int().nullish(),
  foreign_capitalratio: z.number().int().nullish(),
  homepage: z.string().nullish(),
  business_summary: z.string().nullish(),
  organizational_structure: z.string().nullish(),
  company_sales: z.string().nullish(),
  workplace_environment: z.string().nullish(),
  shareholder: jsonSchema,
  related_company: z.number().int().nullish(),
  recruitment_personname: z.string().nullish(),
  memo: z.string().nullish(),
  business_status: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteEntityDetail extends z.infer<typeof EntityDetailModel> {
  entity?: CompleteEntity | null
}

/**
 * RelatedEntityDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEntityDetailModel: z.ZodSchema<CompleteEntityDetail> = z.lazy(() => EntityDetailModel.extend({
  entity: RelatedEntityModel.nullish(),
}))
