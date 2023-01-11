import { z } from "zod";
import { CustomerLanguageModel } from "../../../../models";

// => create
export const CustomerLanguageCreateSchema = CustomerLanguageModel.pick({
  level: true,
  language: true,
  is_motherlanguage: true,
  certificate: true,
}).required();
export type CustomerLanguageCreateSchema = z.infer<
  typeof CustomerLanguageCreateSchema
>;

// => update
export const CustomerLanguageUpdateSchema = CustomerLanguageModel.pick({
  language_id: true,
  level: true,
  language: true,
  is_motherlanguage: true,
  certificate: true,
}).required();
export type CustomerLanguageUpdateSchema = z.infer<
  typeof CustomerLanguageUpdateSchema
>;
