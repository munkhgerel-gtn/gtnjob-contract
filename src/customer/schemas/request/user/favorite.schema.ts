import { z } from "zod";
import { JobModel } from "../../../../models";

// => CREATE
export const CreateFavsSchema = z.object({
  favs: JobModel.pick({ job_id: true }).array(),
});
export type CreateFavsSchema = z.infer<typeof CreateFavsSchema>;
