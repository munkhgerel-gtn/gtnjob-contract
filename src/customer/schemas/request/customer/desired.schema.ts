import { z } from "zod";
import { CustomerDesiredModel } from "../../../../models";

// => CREATE
export const CustomerDesiredCreateSchema = CustomerDesiredModel.pick({
  occupation: true,
  industry: true,
  location: true,
  contract_type: true,
  career_level: true,
  time_to: true,
  annual_income: true,
}).required();
export type CustomerDesiredCreateSchema = z.infer<
  typeof CustomerDesiredCreateSchema
>;

// UPDATE
export const CustomerDesiredUpdateSchema =
  CustomerDesiredCreateSchema.partial();
export type CustomerDesiredUpdateSchema = z.infer<
  typeof CustomerDesiredUpdateSchema
>;

// Create company & update
export const CustomerDesiredCompanyCreateUpdateSchema =
  CustomerDesiredModel.pick({
    desired_company: true,
  }).required();
export type CustomerDesiredCompanyCreateUpdateSchema = z.infer<
  typeof CustomerDesiredCompanyCreateUpdateSchema
>;
