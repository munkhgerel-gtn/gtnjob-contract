import { z } from 'zod';

export const PaginationMetaSchema = z.object({
  current_page: z.number(),
  next_page: z.number(),
  prev_page: z.number(),
  per_page: z.number(),
  total_pages: z.number(),
  total_items: z.number(),
});

export type PaginationMetaSchema = z.infer<typeof PaginationMetaSchema>;
