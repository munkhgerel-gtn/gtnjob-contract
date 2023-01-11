import { z } from "zod";
import { UserModel } from "../../../models";

export const LoginSchema = z.object({
  user: UserModel.pick({
    user_id: true,
    email: true,
    name: true,
    role: true,
    user_status: true,
  }),
  message: z.string(),
  accessToken: z.string(),
});

export type LoginSchema = z.infer<typeof LoginSchema>;
