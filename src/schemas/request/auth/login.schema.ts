import { z } from "zod";
import { UserModel } from "../../../models";

export const LoginSchema = UserModel.pick({
  email: true,
  password_hash: true,
}).required();
export type LoginSchema = z.infer<typeof LoginSchema>;
