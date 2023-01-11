import { z } from "zod";
import { CustomerEducationModel } from "../../../../models";

// => Default
export const CustomerEducationSchema = CustomerEducationModel;
export type CustomerEducationSchema = z.infer<typeof CustomerEducationSchema>;
