import { z } from "zod";
import { c } from "../contract";
import { response, request } from "./schemas";

export const job = c.router({
  findMany: {
    method: "GET",
    path: "/jobs",
    responses: {
      200: response.job.JobSearchSchema,
      400: z.string(),
    },
    query: request.job.JobQuerySchema,
    summary: "Jobs list",
  },
  findOne: {
    method: "GET",
    path: `/jobs/:id`,
    responses: {
      200: response.job.JobDetailSchema,
      400: z.string(),
    },
    summary: "Get a job detail by id",
  },
});
