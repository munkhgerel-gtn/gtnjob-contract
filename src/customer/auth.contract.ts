import { z } from "zod";
import { c } from "../contract";
import { request, response } from "../schemas";

const url = "/auth";

export const auth = c.router({
  login: {
    method: "POST",
    path: `${url}/login`,
    body: request.auth.LoginSchema,
    responses: {
      200: response.auth.LoginSchema,
      401: z.string(),
    },
    summary: "Customer login",
    description: "Хэрэглэгч эрхээр нэвтрэх.",
  },
  register: {
    method: "POST",
    path: `${url}/register`,
    body: request.auth.RegisterSchema,
    responses: {
      200: response.auth.LoginSchema,
      400: z.string(),
    },
    summary: "Customer register",
    description: "Хэрэглэгч эрхээр бүртгүүлэх.",
  },
  getProfile: {
    method: "GET",
    path: `${url}/profile`,
    responses: {
      200: response.user.UserSchema,
    },
    summary: "Get profile",
    description: "Нэвтэрсэн хэрэглэгч өөрийн хувийн мэдээлэл авах.",
  },
});
