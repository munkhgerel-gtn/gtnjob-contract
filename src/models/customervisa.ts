import * as z from "zod";
import { StatusVisa } from "@gtnmugy/core";
import { CompleteCustomer, RelatedCustomerModel } from "./index";

export const CustomerVisaModel = z.object({
  visa_id: z.string(),
  customer_id: z.string(),
  status_visa: z.nativeEnum(StatusVisa).nullish(),
  date_expire: z.date().nullish(),
  country_citizenship: z.string().nullish(),
  back_visafile: z.string().nullish(),
  front_visafile: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
});

export interface CompleteCustomerVisa
  extends z.infer<typeof CustomerVisaModel> {
  customer: CompleteCustomer;
}

/**
 * RelatedCustomerVisaModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCustomerVisaModel: z.ZodSchema<CompleteCustomerVisa> =
  z.lazy(() =>
    CustomerVisaModel.extend({
      customer: RelatedCustomerModel,
    })
  );
