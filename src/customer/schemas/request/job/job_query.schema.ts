import { z } from "zod";
import { JobModel, ReferenceListItemsModel } from "../../../../models";

// => SORTING
export const JobSortingSchema = z.object({
  created_at_sort: z.enum(["asc", "desc"]),

  job_publish_sort: z.enum(["asc", "desc"]),
  location_details_sort: z.enum(["asc", "desc"]),
  employment_status_sort: z.enum(["asc", "desc"]),
  japanese_level_sort: z.enum(["asc", "desc"]),
  english_level_sort: z.enum(["asc", "desc"]),
  experienced_count_sort: z.enum(["asc", "desc"]),
  age_min_sort: z.enum(["asc", "desc"]),
  age_max_sort: z.enum(["asc", "desc"]),

  job_title_sort: z.enum(["asc", "desc"]),
  japanese_percentage_sort: z.enum(["asc", "desc"]),
  position_name_sort: z.enum(["asc", "desc"]),
  salary_type_sort: z.enum(["asc", "desc"]),
  salary_min_sort: z.enum(["asc", "desc"]),
  salary_max_sort: z.enum(["asc", "desc"]),
  expire_date_sort: z.enum(["asc", "desc"]),
});
export type JobSortingSchema = z.infer<typeof JobSortingSchema>;

// => QUERY
export const JobQuerySchema = JobModel.omit({
  created_by: true,
  updated_by: true,
})
  .extend({
    occupations: ReferenceListItemsModel.pick({
      listitem_id: true,
    }).array(),
    industries: ReferenceListItemsModel.pick({
      listitem_id: true,
    }).array(),
    prefectures: ReferenceListItemsModel.pick({
      listitem_id: true,
    }).array(),
    educations: ReferenceListItemsModel.pick({
      listitem_id: true,
    }).array(),
    benefits: ReferenceListItemsModel.pick({
      listitem_id: true,
    }).array(),
    page: z.number(),
    perPage: z.number(),
    sorting: JobSortingSchema,
  })
  .partial();
export type JobQuerySchema = z.infer<typeof JobQuerySchema>;
