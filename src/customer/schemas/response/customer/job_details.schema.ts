import { z } from "zod";
import { CustomerJobDetailModel } from "../../../../models";

export const CustomerJobDetailSchema = CustomerJobDetailModel.omit({
  created_by: true,
  updated_by: true,
});
export type CustomerJobDetailSchema = z.infer<typeof CustomerJobDetailSchema>;
