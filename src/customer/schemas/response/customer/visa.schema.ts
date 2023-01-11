import { z } from "zod";
import { CustomerVisaModel } from "../../../../models";

export const CustomerVisaSchema = CustomerVisaModel;
export type CustomerVisaSchema = z.infer<typeof CustomerVisaSchema>;
