import { z } from "zod";

//TODO: from Model
export const ReferenceListItemQuerySchema = z.object({
  listid: z.number(),
  language: z.string(),
});
export type ReferenceListItemQuerySchema = z.infer<
  typeof ReferenceListItemQuerySchema
>;

//TODO: from Model
export const OneReferenceListItemQuerySchema = z.object({
  listitem_id: z.number(),
  language: z.string(),
});

export type OneReferenceListItemQuerySchema = z.infer<
  typeof OneReferenceListItemQuerySchema
>;
