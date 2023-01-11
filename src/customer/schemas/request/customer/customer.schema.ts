import { z } from "zod";
import { CustomerModel } from "../../../../models";

// => CREATE
export const CreateCustomerSchema = CustomerModel.omit({
  customer_id: true,
  profile_image: true,
  cv_file: true,
  resume_file: true,
  city: true,
  district: true,
  nearest_station: true,
  from_data: true,
  status_customer: true,
  created_at: true,
  updated_at: true,
  created_by: true,
  updated_by: true,
  customer_visas: true,
  customer_jobdetails: true,
  customer_educations: true,
  customer_languages: true,
  customer_qualifications: true,
  customer_desired: true,
  job_candidates: true,
}).required();
export type CreateCustomerSchema = z.infer<typeof CreateCustomerSchema>;

// => UPDATE
export const UpdateCustomerSchema = CreateCustomerSchema.partial();
export type UpdateCustomerSchema = z.infer<typeof UpdateCustomerSchema>;
