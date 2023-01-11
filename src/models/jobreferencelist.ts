import * as z from "zod"
import { CompleteJob, RelatedJobModel, CompleteReferenceList, RelatedReferenceListModel, CompleteReferenceListItems, RelatedReferenceListItemsModel } from "./index"

export const JobReferenceListModel = z.object({
  job_reference_id: z.string(),
  job_id: z.string(),
  reference_list_id: z.number().int(),
  reference_list_item_id: z.number().int(),
})

export interface CompleteJobReferenceList extends z.infer<typeof JobReferenceListModel> {
  job: CompleteJob
  reference_list: CompleteReferenceList
  reference_list_item: CompleteReferenceListItems
}

/**
 * RelatedJobReferenceListModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedJobReferenceListModel: z.ZodSchema<CompleteJobReferenceList> = z.lazy(() => JobReferenceListModel.extend({
  job: RelatedJobModel,
  reference_list: RelatedReferenceListModel,
  reference_list_item: RelatedReferenceListItemsModel,
}))
