import * as z from "zod"
import { CompleteEntity, RelatedEntityModel, CompleteJob, RelatedJobModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const EntityBranchModel = z.object({
  branch_id: z.number().int(),
  branch_name: z.string().nullish(),
  kana: z.string().nullish(),
  is_jeadquarter: z.boolean(),
  image: z.string().nullish(),
  prefecture: jsonSchema,
  post_code: z.string().nullish(),
  city: z.string().nullish(),
  district: z.string().nullish(),
  address: z.string().nullish(),
  address1: z.string().nullish(),
  nearest_station: z.string().nullish(),
  socials: jsonSchema,
  gps: jsonSchema,
  contact_person: jsonSchema,
  contact_details: jsonSchema,
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
  entity_id: z.number().int(),
})

export interface CompleteEntityBranch extends z.infer<typeof EntityBranchModel> {
  entity: CompleteEntity
  jobs: CompleteJob[]
}

/**
 * RelatedEntityBranchModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEntityBranchModel: z.ZodSchema<CompleteEntityBranch> = z.lazy(() => EntityBranchModel.extend({
  entity: RelatedEntityModel,
  jobs: RelatedJobModel.array(),
}))
