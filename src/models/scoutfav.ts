import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const ScoutFavModel = z.object({
  scout_id: z.string(),
  entity_id: z.number().int().nullish(),
  branch_id: z.number().int().nullish(),
  user_id: z.string(),
  job_id: z.string().nullish(),
  note: z.string(),
  created_at: z.date(),
  created_by: z.string(),
})

export interface CompleteScoutFav extends z.infer<typeof ScoutFavModel> {
  user: CompleteUser
}

/**
 * RelatedScoutFavModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedScoutFavModel: z.ZodSchema<CompleteScoutFav> = z.lazy(() => ScoutFavModel.extend({
  user: RelatedUserModel,
}))
