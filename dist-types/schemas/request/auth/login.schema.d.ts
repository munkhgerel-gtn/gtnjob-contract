import { z } from "zod";
export declare const LoginSchema: z.ZodObject<{
    email: z.ZodString;
    password_hash: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password_hash: string;
}, {
    email: string;
    password_hash: string;
}>;
export type LoginSchema = z.infer<typeof LoginSchema>;
