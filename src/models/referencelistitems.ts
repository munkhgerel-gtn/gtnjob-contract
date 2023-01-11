import * as z from "zod"
import { CompleteReferenceList, RelatedReferenceListModel, CompleteCustomerExperience, RelatedCustomerExperienceModel, CompleteDictionary, RelatedDictionaryModel, CompleteJobReferenceList, RelatedJobReferenceListModel } from "./index"

export const ReferenceListItemsModel = z.object({
  listitem_id: z.number().int(),
  list_id: z.number().int(),
  dictionary_id: z.number().int(),
  code: z.string().nullish(),
  listitem_value: z.string().nullish(),
  parent_id: z.number().int().nullish(),
  value: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  dictionaryDictionaries_id: z.string().nullish(),
})

export interface CompleteReferenceListItems extends z.infer<typeof ReferenceListItemsModel> {
  list: CompleteReferenceList
  customer_experiences: CompleteCustomerExperience[]
  Dictionary?: CompleteDictionary | null
  JobReferenceList: CompleteJobReferenceList[]
}

/**
 * RelatedReferenceListItemsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedReferenceListItemsModel: z.ZodSchema<CompleteReferenceListItems> = z.lazy(() => ReferenceListItemsModel.extend({
  list: RelatedReferenceListModel,
  customer_experiences: RelatedCustomerExperienceModel.array(),
  Dictionary: RelatedDictionaryModel.nullish(),
  JobReferenceList: RelatedJobReferenceListModel.array(),
}))
