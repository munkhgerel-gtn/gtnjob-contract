import * as z from "zod";
import { InquiryStatus } from "@gtnmugy/core";
import {
  CompleteUser,
  RelatedUserModel,
  CompleteEntity,
  RelatedEntityModel,
} from "./index";

export const InquiryModel = z.object({
  inquire_id: z.string(),
  parent_id: z.string().nullish(),
  fromuser_id: z.string().nullish(),
  entity_id: z.number().int().nullish(),
  assigned_user_id: z.string().nullish(),
  subject: z.string(),
  body: z.string(),
  inquiry_status: z.nativeEnum(InquiryStatus).nullish(),
  is_read: z.boolean(),
  is_answer: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
});

export interface CompleteInquiry extends z.infer<typeof InquiryModel> {
  fromuser?: CompleteUser | null;
  entity?: CompleteEntity | null;
  assignUser?: CompleteUser | null;
}

/**
 * RelatedInquiryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedInquiryModel: z.ZodSchema<CompleteInquiry> = z.lazy(() =>
  InquiryModel.extend({
    fromuser: RelatedUserModel.nullish(),
    entity: RelatedEntityModel.nullish(),
    assignUser: RelatedUserModel.nullish(),
  })
);
