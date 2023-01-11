import * as z from "zod"
import { CompleteJob, RelatedJobModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const JobRequirementModel = z.object({
  job_require_id: z.string(),
  job_id: z.string(),
  require_id: z.number().int(),
  require_detial: jsonSchema,
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
})

export interface CompleteJobRequirement extends z.infer<typeof JobRequirementModel> {
  jobs: CompleteJob
}

/**
 * RelatedJobRequirementModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedJobRequirementModel: z.ZodSchema<CompleteJobRequirement> = z.lazy(() => JobRequirementModel.extend({
  jobs: RelatedJobModel,
}))
