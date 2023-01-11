import { z } from 'zod';
export declare const PaginationMetaSchema: z.ZodObject<{
    current_page: z.ZodNumber;
    next_page: z.ZodNumber;
    prev_page: z.ZodNumber;
    per_page: z.ZodNumber;
    total_pages: z.ZodNumber;
    total_items: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    current_page: number;
    next_page: number;
    prev_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
}, {
    current_page: number;
    next_page: number;
    prev_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
}>;
export type PaginationMetaSchema = z.infer<typeof PaginationMetaSchema>;
