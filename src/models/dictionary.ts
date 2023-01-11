import * as z from "zod"
import { CompleteReferenceListItems, RelatedReferenceListItemsModel } from "./index"

export const DictionaryModel = z.object({
  dictionaries_id: z.string(),
  dictionary_id: z.number().int(),
  language_code: z.string(),
  dic_value: z.string(),
  created_at: z.date(),
})

export interface CompleteDictionary extends z.infer<typeof DictionaryModel> {
  reference_listitems: CompleteReferenceListItems[]
}

/**
 * RelatedDictionaryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDictionaryModel: z.ZodSchema<CompleteDictionary> = z.lazy(() => DictionaryModel.extend({
  reference_listitems: RelatedReferenceListItemsModel.array(),
}))
