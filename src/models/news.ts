import * as z from "zod"
import { CompletePages, RelatedPagesModel } from "./index"

export const NewsModel = z.object({
  news_id: z.string(),
  page_id: z.number().int(),
  title: z.string(),
  brief: z.string(),
  image_id: z.string(),
  content: z.string(),
  is_top: z.boolean(),
  is_publish: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string(),
  update_by: z.string(),
})

export interface CompleteNews extends z.infer<typeof NewsModel> {
  pages: CompletePages
}

/**
 * RelatedNewsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedNewsModel: z.ZodSchema<CompleteNews> = z.lazy(() => NewsModel.extend({
  pages: RelatedPagesModel,
}))
