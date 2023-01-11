import * as z from "zod";
import { CompleteUser } from "./index";
export declare const NotificationModel: z.ZodObject<{
    notifiation_id: z.ZodString;
    user_id: z.ZodString;
    link: z.ZodString;
    message: z.ZodString;
    is_new: z.ZodBoolean;
    is_badge: z.ZodBoolean;
    created_at: z.ZodDate;
    created_by: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    created_at: Date;
    created_by: string;
    user_id: string;
    notifiation_id: string;
    link: string;
    is_new: boolean;
    is_badge: boolean;
}, {
    message: string;
    created_at: Date;
    created_by: string;
    user_id: string;
    notifiation_id: string;
    link: string;
    is_new: boolean;
    is_badge: boolean;
}>;
export interface CompleteNotification extends z.infer<typeof NotificationModel> {
    User: CompleteUser;
}
/**
 * RelatedNotificationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedNotificationModel: z.ZodSchema<CompleteNotification>;
