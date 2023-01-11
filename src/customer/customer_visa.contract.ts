import { z } from "zod";
import { c } from "../contract";
import { request, response } from "./schemas";

const url = "/profile/visa";

export const customerVisa = c.router({
  create: {
    method: "POST",
    path: url,
    body: request.customer.CustomerVisaCreateUpdateSchema,
    responses: {
      200: response.customer.CustomerVisaSchema,
      400: z.string(),
    },
    summary: "Create a customer-visa",
    description: "",
  },
  update: {
    method: "PATCH",
    path: `${url}/:id`,
    body: request.customer.CustomerVisaCreateUpdateSchema,
    responses: {
      200: response.customer.CustomerVisaSchema,
      400: z.string(),
    },
    summary: "Update a customer-visa by ID",
    description: "",
  },
  find: {
    method: "GET",
    path: `${url}/:id`,
    responses: {
      200: response.customer.CustomerVisaSchema,
      400: z.string(),
    },
    summary: "Find a customer-visa by ID",
    description: "",
  },
});
