import { z } from "zod";
import { CustomerWorkHistoryModel } from "../../../../models";

// => create
export const CustomerWorkHistoryCreateSchema = CustomerWorkHistoryModel.omit({
  workhistory_id: true,
  customer_id: true,
  created_at: true,
  created_by: true,
  updated_at: true,
  updated_by: true,
}).required();
export type CustomerWorkHistoryCreateSchema = z.infer<
  typeof CustomerWorkHistoryCreateSchema
>;

// => update
export const CustomerWorkHistoryUpdateSchema = CustomerWorkHistoryModel.omit({
  workhistory_id: true,
  customer_id: true,
  created_at: true,
  created_by: true,
  updated_at: true,
  updated_by: true,
}).partial();
export type CustomerWorkHistoryUpdateSchema = z.infer<
  typeof CustomerWorkHistoryUpdateSchema
>;
