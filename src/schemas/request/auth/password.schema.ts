import { z } from "zod";
import { UserModel } from "../../../models";
import { passwordRegex } from "../../../utils";

// => Change
export const ChangePasswordSchema = UserModel.pick({ user_id: true })
  .extend({
    generated: z.string(),
    old_pass: z.string().regex(passwordRegex),
    new_pass: z.string().regex(passwordRegex),
    new_pass_again: z.string().regex(passwordRegex),
  })
  .refine((data) => data.new_pass === data.new_pass_again, {
    message: `Passwords don't match.`,
    path: ["confirm"],
  });
export type ChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
