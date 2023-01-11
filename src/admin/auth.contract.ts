import { z } from "zod";
import { c } from "../contract";
import { request, response } from "../schemas";

const gtnUrl = "/auth/gtn";
const adminUrl = "/auth/admin";

export const auth = c.router({
  gtnlogin: {
    method: "POST",
    path: `${gtnUrl}`,
    body: request.auth.LoginSchema,
    responses: {
      200: response.auth.LoginSchema,
      401: z.string(),
    },
    summary: "GTN-admin login",
    description: "GTN-admin эрхээр нэвтрэх.",
  },
  forgotPassword: {
    method: "POST",
    path: `${gtnUrl}/forgot`,
    body: z.object({
      email: z.string().email(),
    }),
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "GTN-admin forgot password",
    description: "GTN-admin нууц үг сэргээх",
  },
  checkUser: {
    method: "GET",
    path: `${gtnUrl}/check/:username`,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "GTN-admin check user",
    description: "",
  },
  resetPassword: {
    method: "POST",
    path: `${gtnUrl}/reset`,
    body: request.auth.ChangePasswordSchema,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "GTN-admin change password",
    description: "",
  },
  sendCode: {
    method: "GET",
    path: `${gtnUrl}/sendcode`,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "",
    description: "",
  },
  createUser: {
    method: "POST",
    path: `${gtnUrl}/create`,
    body: request.auth.RegisterAdminSchema,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Create GTN-admin",
    description: "",
  },
  getGtnProfile: {
    method: "GET",
    path: `${gtnUrl}/profile`,
    responses: {
      200: response.user.UserSchema,
      400: z.string(),
    },
    summary: "Get profile GTN-admin",
    description: "",
  },
  gtnLogout: {
    method: "POST",
    path: `${gtnUrl}/logout`,
    body: null,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Logout GTN-admin",
    description: "",
  },
  adminlogin: {
    method: "POST",
    path: `${adminUrl}`,
    body: request.auth.LoginSchema,
    responses: {
      200: response.auth.LoginSchema,
      401: z.string(),
    },
    summary: "Company-admin login",
    description: "Company-admin эрхээр нэвтрэх.",
  },
  forgotPasswordAdmin: {
    method: "POST",
    path: `${adminUrl}/forgot`,
    body: z.object({
      email: z.string().email(),
    }),
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Company-admin forgot password",
    description: "Company-admin нууц үг сэргээх",
  },
  checkUserAdmin: {
    method: "GET",
    path: `${adminUrl}/check/:username`,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Company-admin check user",
    description: "",
  },
  resetPasswordAdmin: {
    method: "POST",
    path: `${adminUrl}/reset`,
    body: request.auth.ChangePasswordSchema,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Company-admin change password",
    description: "",
  },
  sendCodeAdmin: {
    method: "GET",
    path: `${adminUrl}/sendcode`,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "",
    description: "",
  },
  createUserAdmin: {
    method: "POST",
    path: `${adminUrl}/create`,
    body: request.auth.RegisterAdminSchema,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Create Company-admin",
    description: "",
  },
  getProfile: {
    method: "GET",
    path: `${adminUrl}/profile`,
    responses: {
      200: response.user.UserSchema,
      400: z.string(),
    },
    summary: "Get profile Company-admin",
    description: "",
  },
  adminLogout: {
    method: "POST",
    path: `${adminUrl}/logout`,
    body: null,
    responses: {
      200: z.string(),
      400: z.string(),
    },
    summary: "Logout Company-admin",
    description: "",
  },
});
