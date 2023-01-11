import * as z from "zod"
import { UserAction } from "../../../backend/backend_app/core/dist/client"
import { CompleteUser, RelatedUserModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const LoggerModel = z.object({
  log_id: z.string(),
  action_user: z.nativeEnum(UserAction),
  user_id: z.string().nullish(),
  new_value: jsonSchema,
  old_value: jsonSchema,
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteLogger extends z.infer<typeof LoggerModel> {
  User?: CompleteUser | null
}

/**
 * RelatedLoggerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLoggerModel: z.ZodSchema<CompleteLogger> = z.lazy(() => LoggerModel.extend({
  User: RelatedUserModel.nullish(),
}))
