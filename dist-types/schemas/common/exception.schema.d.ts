import { z } from "zod";
export declare const ExceptionSchema: z.ZodObject<{
    statusCode: z.ZodNumber;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    statusCode: number;
}, {
    message: string;
    statusCode: number;
}>;
export type ExceptionSchema = z.infer<typeof ExceptionSchema>;
