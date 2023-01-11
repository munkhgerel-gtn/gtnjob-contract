import { z } from "zod";
import { UserModel } from "../../../models";

export const UserSchema = UserModel.omit({
  password_hash: true,
});
export type UserSchema = z.infer<typeof UserSchema>;
