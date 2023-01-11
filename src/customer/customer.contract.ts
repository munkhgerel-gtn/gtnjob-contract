import { z } from "zod";
import { c } from "../contract";
import { CustomerModel } from "../models";
import { request, response } from "./schemas";

const url = "/profile";

export const customer = c.router({
  create: {
    method: "POST",
    path: `${url}`,
    body: request.customer.CreateCustomerSchema,
    responses: {
      200: CustomerModel,
      400: z.string(),
    },
    summary: "Create profile information",
    description: "",
  },
  getInfoByCustomer: {
    method: "GET",
    path: `${url}`,
    responses: {
      200: CustomerModel,
      400: z.string(),
    },
    summary: "Get customer(own) info",
    description: "",
  },
  update: {
    method: "PATCH",
    path: `${url}/:id`,
    body: request.customer.UpdateCustomerSchema,
    responses: {
      200: CustomerModel,
      400: z.string(),
    },
    summary: "Update profile information",
    description: "",
  },

  getDesired: {
    method: "GET",
    path: `${url}/desired`,
    responses: {
      200: response.customer.CustomerDesiredSchema,
      400: z.string(),
    },
    summary: "Get desired",
    description: "",
  },
  createDesired: {
    method: "POST",
    path: `${url}/desired`,
    body: request.customer.CustomerDesiredCreateSchema,
    responses: {
      200: response.customer.CustomerDesiredSchema,
      400: z.string(),
    },
    summary: "Create customer-desired",
    description: "",
  },
  updateDesired: {
    method: "PATCH",
    path: `${url}/desired/:id`,
    body: request.customer.CustomerDesiredUpdateSchema,
    responses: {
      200: response.customer.CustomerDesiredSchema,
      400: z.string(),
    },
    summary: "Update customer-desired",
    description: "",
  },
  createDesiredCompany: {
    method: "POST",
    path: `${url}/desiredcompany`,
    body: request.customer.CustomerDesiredCompanyCreateUpdateSchema,
    responses: {
      200: response.customer.CustomerDesiredSchema,
      400: z.string(),
    },
    summary: "Create customer-desired-company",
    description: "",
  },
  updateDesiredCompany: {
    method: "PATCH",
    path: `${url}/desiredcompany/:id`,
    body: request.customer.CustomerDesiredCompanyCreateUpdateSchema,
    responses: {
      200: response.customer.CustomerDesiredSchema,
      400: z.string(),
    },
    summary: "Update customer-desired-company",
    description: "",
  },
  getDesiredCompany: {
    method: "GET",
    path: `${url}/desiredcompany`,
    responses: {
      200: response.customer.CustomerDesiredCompanySchema.array(),
      400: z.string(),
    },
    summary: "Get customer-desired-companies list",
    description: "",
  },
});
