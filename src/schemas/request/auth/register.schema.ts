import { z } from "zod";
import { UserModel } from "../../../models";

// => customer
export const RegisterSchema = UserModel.pick({
  email: true,
  name: true,
  password_hash: true,
}).required();
export type RegisterSchema = z.infer<typeof RegisterSchema>;

// => admin
export const RegisterAdminSchema = UserModel.pick({
  email: true,
  name: true,
  password_hash: true,
  role: true,
  mobile: true,
})
  .required()
  .extend({
    entity_id: z.number(),
  });
export type RegisterAdminSchema = z.infer<typeof RegisterAdminSchema>;
