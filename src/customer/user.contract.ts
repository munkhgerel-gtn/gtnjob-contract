import { z } from "zod";
import { c } from "../contract";
import { request, response } from "./schemas";

const url = "/profile";

export const user = c.router({
  // TODO: update ????
  update: {
    method: "PATCH",
    path: `${url}/:id`, // id => user_id
    body: "",
    responses: {},
    summary: "Update customer",
    description: "Хэрэглэгч өөрийн мэдээлэл засах.",
  },
  getPost: {
    method: "DELETE",
    path: `${url}/:id`,
    body: null,
    responses: {
      200: z.string(),
    },
    summary: "GET test customer ",
    description: "Хэрэглэгч өөрийгөө устгах",
  },
  getFavs: {
    method: "GET",
    path: `${url}/favs`,
    responses: {
      200: response.job.JobSearchSchema,
      400: z.string(),
    },
    summary: "Favorite jobs list",
    description: "Хэрэглэгчийн дуртай JOB -уудын жагсаалт",
  },
  createFavs: {
    method: "POST",
    path: `${url}/favs`,
    body: request.user.CreateFavsSchema,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Add job to Favorite list",
    description: "Favorite жагсаалтруу JOB -ийг нэмэх.",
  },
  deleteFavs: {
    method: "DELETE",
    path: `${url}/favs/:job_id`,
    body: null,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Delete job from Favorite list",
    description: "Favorite жагсаалтаас JOB -ийг хасах.",
  },
});
