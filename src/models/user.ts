import * as z from "zod"
import { UserRole, UserStatus } from "../../../backend/backend_app/core/dist/client"
import { CompleteCustomer, RelatedCustomerModel, CompleteLogger, RelatedLoggerModel, CompleteInquiry, RelatedInquiryModel, CompleteNotification, RelatedNotificationModel, CompleteScoutFav, RelatedScoutFavModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const UserModel = z.object({
  user_id: z.string(),
  email: z.string(),
  mobile: z.string().nullish(),
  name: z.string().nullish(),
  password_hash: z.string(),
  role: z.nativeEnum(UserRole),
  company_id: z.number().int(),
  customer_id: z.string().nullish(),
  attemptpass_count: z.number().int().nullish(),
  reset_code: z.string(),
  is_emailverified: z.boolean(),
  is_mobileverified: z.boolean(),
  user_status: z.nativeEnum(UserStatus),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullish(),
  favs: jsonSchema,
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  Customer?: CompleteCustomer | null
  loggers: CompleteLogger[]
  from_inquiries: CompleteInquiry[]
  assign_inquiries: CompleteInquiry[]
  notifications: CompleteNotification[]
  ScoutFav: CompleteScoutFav[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  Customer: RelatedCustomerModel.nullish(),
  loggers: RelatedLoggerModel.array(),
  from_inquiries: RelatedInquiryModel.array(),
  assign_inquiries: RelatedInquiryModel.array(),
  notifications: RelatedNotificationModel.array(),
  ScoutFav: RelatedScoutFavModel.array(),
}))
