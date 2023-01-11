import { z } from "zod";

export const ExceptionSchema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export type ExceptionSchema = z.infer<typeof ExceptionSchema>;
