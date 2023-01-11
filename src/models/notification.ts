import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const NotificationModel = z.object({
  notifiation_id: z.string(),
  user_id: z.string(),
  link: z.string(),
  message: z.string(),
  is_new: z.boolean(),
  is_badge: z.boolean(),
  created_at: z.date(),
  created_by: z.string(),
})

export interface CompleteNotification extends z.infer<typeof NotificationModel> {
  User: CompleteUser
}

/**
 * RelatedNotificationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedNotificationModel: z.ZodSchema<CompleteNotification> = z.lazy(() => NotificationModel.extend({
  User: RelatedUserModel,
}))
