import { z } from "zod";
import {
  ReferenceListItemsModel,
  ReferenceListModel,
} from "../../../../models";

// => Reference list
export const ReferenceListSchema = ReferenceListModel.pick({
  list_id: true,
  list_name: true,
  created_at: true,
});
export type ReferenceListSchema = z.infer<typeof ReferenceListSchema>;

// => Refernece list item
export const ReferenceListItemsSchema = ReferenceListItemsModel.pick({
  listitem_id: true,
  list_id: true,
  dictionary_id: true,
  code: true,
  listitem_value: true,
  parent_id: true,
  value: true,
  created_at: true,
  updated_at: true,
});
export type ReferenceListItemsSchema = z.infer<typeof ReferenceListItemsSchema>;
