import { z } from "zod";
import { CustomerDesiredModel, EntityBranchModel } from "../../../../models";

// => DEFAULT
export const CustomerDesiredSchema = CustomerDesiredModel;
export type CustomerDesiredSchema = z.infer<typeof CustomerDesiredSchema>;

// => Desired company
export const CustomerDesiredCompanySchema = EntityBranchModel.pick({
  branch_id: true,
  entity_id: true,
  branch_name: true,
  image: true,
});
export type CustomerDesiredCompanySchema = z.infer<
  typeof CustomerDesiredCompanySchema
>;
