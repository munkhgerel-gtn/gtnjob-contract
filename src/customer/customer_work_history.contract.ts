import { z } from "zod";
import { c } from "../contract";
import { request, response } from "./schemas";

const url = "/profile/jobhistory";

export const customerWorkHistory = c.router({
  create: {
    method: "POST",
    path: url,
    body: request.customer.CustomerWorkHistoryCreateSchema,
    responses: {
      200: response.customer.CustomerWorkHistorySchema.array(),
      400: z.string(),
    },
    summary: "Create a customer work-history",
    description: "",
  },
  update: {
    method: "PATCH",
    path: `${url}/:id`,
    body: request.customer.CustomerWorkHistoryUpdateSchema,
    responses: {
      200: response.customer.CustomerWorkHistorySchema.array(),
      400: z.string(),
    },
    summary: "Update a customer work-history",
    description: "",
  },
  find: {
    method: "GET",
    path: `${url}/:id`,
    responses: {
      200: response.customer.CustomerWorkHistorySchema,
      400: z.string(),
    },
    summary: "Find a customer work-history",
    description: "",
  },
  findManyByCustomer: {
    method: "GET",
    path: `${url}`,
    responses: {
      200: response.customer.CustomerWorkHistorySchema.array(),
      400: z.string(),
    },
    summary: "Find a customer work-history by customer",
    description: "",
  },
});
