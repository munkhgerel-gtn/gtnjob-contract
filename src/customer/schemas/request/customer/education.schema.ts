import { z } from "zod";
import { CustomerEducationModel } from "../../../../models";

// => create
export const CustomerEducationCreateSchema = CustomerEducationModel.omit({
  customer_id: true,
  education_id: true,
  created_at: true,
  updated_at: true,
  created_by: true,
  updated_by: true,
});
export type CustomerEducationCreateSchema = z.infer<
  typeof CustomerEducationCreateSchema
>;

// => update
export const CustomerEducationUpdateSchema = CustomerEducationModel.omit({
  customer_id: true,
  created_at: true,
  updated_at: true,
  created_by: true,
  updated_by: true,
});
export type CustomerEducationUpdateSchema = z.infer<
  typeof CustomerEducationUpdateSchema
>;
