import * as z from "zod"
import { CompleteEntity, RelatedEntityModel } from "./index"

export const EntityAccountInfoModel = z.object({
  entity_accountinfo_id: z.string(),
  entity_id: z.number().int().nullish(),
  bank_code: z.string().nullish(),
  branch_code: z.string().nullish(),
  account_id: z.string().nullish(),
  is_default: z.boolean().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  updated_by: z.string().nullish(),
  created_by: z.string().nullish(),
})

export interface CompleteEntityAccountInfo extends z.infer<typeof EntityAccountInfoModel> {
  entity?: CompleteEntity | null
}

/**
 * RelatedEntityAccountInfoModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEntityAccountInfoModel: z.ZodSchema<CompleteEntityAccountInfo> = z.lazy(() => EntityAccountInfoModel.extend({
  entity: RelatedEntityModel.nullish(),
}))
