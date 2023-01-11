import * as z from "zod"
import { CompleteEntityDetail, RelatedEntityDetailModel, CompleteEntityBranch, RelatedEntityBranchModel, CompleteEntityAccountInfo, RelatedEntityAccountInfoModel, CompleteInquiry, RelatedInquiryModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const EntityModel = z.object({
  entity_id: z.number().int(),
  name: z.string(),
  kana: z.string().nullish(),
  logo: z.string().nullish(),
  socials: jsonSchema,
  gps: jsonSchema,
  contact_person: jsonSchema,
  contact_details: jsonSchema,
  is_system: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteEntity extends z.infer<typeof EntityModel> {
  entity_details: CompleteEntityDetail[]
  entity_branches: CompleteEntityBranch[]
  entity_accountinfos: CompleteEntityAccountInfo[]
  inquiries: CompleteInquiry[]
}

/**
 * RelatedEntityModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEntityModel: z.ZodSchema<CompleteEntity> = z.lazy(() => EntityModel.extend({
  entity_details: RelatedEntityDetailModel.array(),
  entity_branches: RelatedEntityBranchModel.array(),
  entity_accountinfos: RelatedEntityAccountInfoModel.array(),
  inquiries: RelatedInquiryModel.array(),
}))
