import { z } from "zod";
export declare const ReferenceListItemQuerySchema: z.ZodObject<{
    listid: z.ZodNumber;
    language: z.ZodString;
}, "strip", z.ZodTypeAny, {
    language: string;
    listid: number;
}, {
    language: string;
    listid: number;
}>;
export type ReferenceListItemQuerySchema = z.infer<typeof ReferenceListItemQuerySchema>;
export declare const OneReferenceListItemQuerySchema: z.ZodObject<{
    listitem_id: z.ZodNumber;
    language: z.ZodString;
}, "strip", z.ZodTypeAny, {
    listitem_id: number;
    language: string;
}, {
    listitem_id: number;
    language: string;
}>;
export type OneReferenceListItemQuerySchema = z.infer<typeof OneReferenceListItemQuerySchema>;
