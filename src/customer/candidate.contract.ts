import { z } from "zod";
import { c } from "../contract";
import { JobCandidateModel } from "../models";
import { request, response } from "./schemas";

const url = "/candidate";

export const candidate = c.router({
  applyJob: {
    method: "POST",
    path: `${url}/apply`,
    body: request.candidate.CreateCandidateSchema,
    responses: {
      200: JobCandidateModel,
      400: z.string(),
    },
    summary: "Apply to job",
    description: "",
  },
  getCandidate: {
    method: "GET",
    path: `${url}/:id`,
    responses: {
      200: JobCandidateModel,
      400: z.string(),
    },
    summary: "Get one job_candidate",
    description: "",
  },
  getCandidateList: {
    method: "GET",
    path: `${url}`,
    responses: {
      200: JobCandidateModel.array(),
      400: z.string(),
    },
    summary: "Get many job_candidate",
    description: "",
  },
});
