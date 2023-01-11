import { z } from "zod";
import { CustomerVisaModel } from "../../../../models";

// => create & update
export const CustomerVisaCreateUpdateSchema = CustomerVisaModel.omit({
  visa_id: true,
  customer_id: true,
  created_at: true,
  created_by: true,
  updated_at: true,
  updated_by: true,
}).required();
export type CustomerVisaCreateUpdateSchema = z.infer<
  typeof CustomerVisaCreateUpdateSchema
>;
