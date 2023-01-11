import { z } from "zod";
import { CustomerLanguageModel } from "../../../../models";

//  => default
export const CustomerLanguageSchema = CustomerLanguageModel;
export type CustomerLanguageSchema = z.infer<typeof CustomerLanguageSchema>;
