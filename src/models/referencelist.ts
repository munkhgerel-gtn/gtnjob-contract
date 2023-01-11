import * as z from "zod"
import { CompleteReferenceListItems, RelatedReferenceListItemsModel, CompleteJobReferenceList, RelatedJobReferenceListModel } from "./index"

export const ReferenceListModel = z.object({
  list_id: z.number().int(),
  list_name: z.string(),
  created_at: z.date(),
})

export interface CompleteReferenceList extends z.infer<typeof ReferenceListModel> {
  listitems: CompleteReferenceListItems[]
  JobReferenceList: CompleteJobReferenceList[]
}

/**
 * RelatedReferenceListModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedReferenceListModel: z.ZodSchema<CompleteReferenceList> = z.lazy(() => ReferenceListModel.extend({
  listitems: RelatedReferenceListItemsModel.array(),
  JobReferenceList: RelatedJobReferenceListModel.array(),
}))
