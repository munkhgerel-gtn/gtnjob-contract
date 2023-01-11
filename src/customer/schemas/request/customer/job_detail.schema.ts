import { z } from "zod";
import { CustomerJobDetailModel } from "../../../../models";

// => Create
export const CustomerJobDetailCreateSchema = CustomerJobDetailModel.pick({
  experienced_company: true,
  annual_income: true,
  has_management_exp: true,
}).required();
export type CustomerJobDetailCreateSchema = z.infer<
  typeof CustomerJobDetailCreateSchema
>;

// => Update
export const CustomerJobDetailUpdateSchema = CustomerJobDetailModel.pick({
  jobdetail_id: true,
  experienced_company: true,
  annual_income: true,
  has_management_exp: true,
}).required();
export type CustomerJobDetailUpdateSchema = z.infer<
  typeof CustomerJobDetailUpdateSchema
>;
