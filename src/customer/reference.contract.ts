import { z } from "zod";
import { c } from "../contract";
import { request, response } from "./schemas";

const url = "/reference";

export const reference = c.router({
  getLists: {
    method: "GET",
    path: `${url}`,
    responses: {
      200: response.reference.ReferenceListSchema.array(),
      400: z.string(),
    },
    summary: "Get reference list",
    description: "Reference -ийн жагсаалт авах.",
  },
  getListItemByLanguage: {
    method: "GET",
    path: `${url}/itemlist`,
    query: request.reference.ReferenceListItemQuerySchema,
    responses: {
      200: response.reference.ReferenceListItemsSchema.array(),
      400: z.string(),
    },
    summary: "Get reference list items by language",
    description: "",
  },
  getOneListItembyLanguage: {
    method: "GET",
    path: `${url}/item`,
    query: request.reference.OneReferenceListItemQuerySchema,
    responses: {
      200: response.reference.ReferenceListItemsSchema,
      400: z.string(),
    },
    summary: "Get one reference list item by language",
    description: "",
  },
});
