import { z } from "zod";
import { CustomerWorkHistoryModel } from "../../../../models";

export const CustomerWorkHistorySchema = CustomerWorkHistoryModel.omit({
  created_by: true,
  updated_by: true,
});
export type CustomerWorkHistorySchema = z.infer<
  typeof CustomerWorkHistorySchema
>;
