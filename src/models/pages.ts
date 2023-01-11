import * as z from "zod"
import { CompleteNews, RelatedNewsModel } from "./index"

export const PagesModel = z.object({
  page_id: z.number().int(),
  page_name: z.string(),
  page_type: z.number().int(),
  created_at: z.date(),
  created_by: z.string(),
})

export interface CompletePages extends z.infer<typeof PagesModel> {
  news: CompleteNews[]
}

/**
 * RelatedPagesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPagesModel: z.ZodSchema<CompletePages> = z.lazy(() => PagesModel.extend({
  news: RelatedNewsModel.array(),
}))
