import * as z from "zod"

export const SystemLangaugeModel = z.object({
  language_id: z.number().int(),
  language_code: z.string(),
  is_default: z.boolean(),
})
