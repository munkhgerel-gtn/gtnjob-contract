import * as z from "zod";
import { UserAction, UserRole } from "@gtnmugy/core";

export const ActionRoleModel = z.object({
  action_role_id: z.string(),
  controller_path: z.string().nullish(),
  action_user: z.nativeEnum(UserAction),
  role: z.nativeEnum(UserRole),
  is_can: z.boolean(),
  is_company: z.boolean(),
  parent_id: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string().nullish(),
  updated_by: z.string().nullish(),
});
