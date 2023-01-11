import { z } from "zod";
import { c } from "../contract";
import { request, response } from "./schemas";

const url = "/profile/jobdetail";

export const customerJobDetail = c.router({
  create: {
    method: "POST",
    path: url,
    body: request.customer.CustomerJobDetailCreateSchema,
    responses: {
      200: response.customer.CustomerJobDetailSchema,
      400: z.string(),
    },
    summary: "Create customer-job-detail",
    description: "",
  },
  update: {
    method: "PATCH",
    path: url,
    body: request.customer.CustomerJobDetailUpdateSchema,
    responses: {
      200: response.customer.CustomerJobDetailSchema,
      400: z.string(),
    },
    summary: "Update customer-job-detail",
    description: "",
  },
  findbyCustomer: {
    method: "GET",
    path: url,
    responses: {
      200: response.customer.CustomerJobDetailSchema.array(),
      400: z.string(),
    },
    summary: "Find many customer-job-detail by customer",
    description: "",
  },
});
