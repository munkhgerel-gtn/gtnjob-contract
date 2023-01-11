import * as z from "zod";
import { LanguageLevel } from "@gtnmugy/core";
import { CompleteCustomer, RelatedCustomerModel } from "./index";

// Helper schema for JSON fields
type Literal = boolean | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

export const CustomerLanguageModel = z.object({
  language_id: z.string(),
  customer_id: z.string(),
  level: z.nativeEnum(LanguageLevel).nullish(),
  language: z.number().int().nullish(),
  is_motherlanguage: z.boolean(),
  certificate: jsonSchema,
  created_at: z.date(),
  updated_at: z.date().nullish(),
  created_by: z.string().nullish(),
  updated_b: z.string().nullish(),
});

export interface CompleteCustomerLanguage
  extends z.infer<typeof CustomerLanguageModel> {
  customer: CompleteCustomer;
}

/**
 * RelatedCustomerLanguageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerLanguageModel: z.ZodSchema<CompleteCustomerLanguage> =
  z.lazy(() =>
    CustomerLanguageModel.extend({
      customer: RelatedCustomerModel,
    })
  );
