import { z } from "zod";
import { c } from "../contract";
import { request, response } from "./schemas";

const url = "/profile";

export const customerEducation = c.router({
  create: {
    method: "POST",
    path: `${url}/edu`,
    body: request.customer.CustomerEducationCreateSchema.array(),
    responses: {
      200: response.customer.CustomerEducationSchema.array(),
      400: z.string(),
    },
    summary: "Create many customer-educations",
    description: "",
  },
  update: {
    method: "PATCH",
    path: `${url}/edu`,
    body: request.customer.CustomerEducationUpdateSchema.array(),
    responses: {
      200: response.customer.CustomerEducationSchema.array(),
      400: z.string(),
    },
    summary: "Update many customer-educations",
    description: "",
  },
  find: {
    method: "GET",
    path: `${url}/edu/:edu_id`,
    responses: {
      200: response.customer.CustomerEducationSchema,
      400: z.string(),
    },
    summary: "Find one customer-education",
    description: "",
  },
  findByCustomer: {
    method: "GET",
    path: `${url}/edu`,
    responses: {
      200: response.customer.CustomerEducationSchema.array(),
      400: z.string(),
    },
    summary: "Find customer-educations by logged-in customer ",
    description: "",
  },
  createLanguages: {
    method: "POST",
    path: `${url}/language`,
    body: request.customer.CustomerLanguageCreateSchema.array(),
    responses: {
      200: response.customer.CustomerLanguageSchema.array(),
      400: z.string(),
    },
    summary: "Create many customer-languages",
    description: "",
  },
  updateLanguages: {
    method: "PATCH",
    path: `${url}/language`,
    body: request.customer.CustomerLanguageUpdateSchema.array(),
    responses: {
      200: response.customer.CustomerLanguageSchema.array(),
      400: z.string(),
    },
    summary: "Update many customer-languages",
    description: "",
  },
  findLanguage: {
    method: "GET",
    path: `${url}/language/:language_id`,
    responses: {
      200: response.customer.CustomerLanguageSchema,
      400: z.string(),
    },
    summary: "Find one customer-language",
    description: "",
  },
  findLanguageByCustomer: {
    method: "GET",
    path: `${url}/language`,
    responses: {
      200: response.customer.CustomerLanguageSchema.array(),
      400: z.string(),
    },
    summary: "Find many customer-language by logged-in customer",
    description: "",
  },
});
