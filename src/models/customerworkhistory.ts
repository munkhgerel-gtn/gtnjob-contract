import * as z from "zod";
import { JobPosition } from "@gtnmugy/core";
import { CompleteCustomer, RelatedCustomerModel } from "./index";

// Helper schema for JSON fields
type Literal = boolean | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

export const CustomerWorkHistoryModel = z.object({
  workhistory_id: z.string(),
  customer_id: z.string(),
  company_id: z.string().nullish(),
  company_info: jsonSchema,
  occupation: jsonSchema,
  industry: jsonSchema,
  position: z.nativeEnum(JobPosition).nullish(),
  enter_date: z.date().nullish(),
  leave_date: z.date().nullish(),
  working_month: z.number().int().nullish(),
  is_current: z.boolean().nullish(),
  duties: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
});

export interface CompleteCustomerWorkHistory
  extends z.infer<typeof CustomerWorkHistoryModel> {
  customer: CompleteCustomer;
}

/**
 * RelatedCustomerWorkHistoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerWorkHistoryModel: z.ZodSchema<CompleteCustomerWorkHistory> =
  z.lazy(() =>
    CustomerWorkHistoryModel.extend({
      customer: RelatedCustomerModel,
    })
  );
