import { z } from "zod";
export declare const CreateFavsSchema: z.ZodObject<{
    favs: z.ZodArray<z.ZodObject<Pick<{
        job_id: z.ZodString;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        created_by: z.ZodString;
        updated_by: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        job_publish: z.ZodNativeEnum<{
            public: "public";
            private: "private";
        }>;
        location_details: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        career_level: z.ZodArray<z.ZodNativeEnum<{
            no_data: "no_data";
            execute: "execute";
            manager: "manager";
            senior: "senior";
            staff: "staff";
            entry: "entry";
        }>, "many">;
        benefit_other: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        smoke: z.ZodArray<z.ZodNativeEnum<{
            no_data: "no_data";
            yes__no_smoking_on_site: "yes__no_smoking_on_site";
            yes__no_smoking_indoors_and_smoking_area_set_up_outdoors: "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors";
            yes__no_smoking_indoors: "yes__no_smoking_indoors";
            yes__smoking_room_installed_indoors: "yes__smoking_room_installed_indoors";
            yes__working_in_smoking_areas: "yes__working_in_smoking_areas";
            no_smoking_allowed: "no_smoking_allowed";
        }>, "many">;
        employment_status: z.ZodNativeEnum<{
            employee: "employee";
            contract_employee: "contract_employee";
            outsourcing: "outsourcing";
        }>;
        japanese_level: z.ZodNativeEnum<{
            no_data: "no_data";
            vative: "vative";
            near_native: "near_native";
            business: "business";
            daily_conversation: "daily_conversation";
            greeting: "greeting";
        }>;
        english_level: z.ZodNativeEnum<{
            no_data: "no_data";
            vative: "vative";
            near_native: "near_native";
            business: "business";
            daily_conversation: "daily_conversation";
            greeting: "greeting";
        }>;
        experienced_count: z.ZodNumber;
        age_min: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        age_max: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        set_age_reason: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        recruitment_type: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
            direct: "direct";
            referral_company: "referral_company";
        }>>>;
        job_title: z.ZodString;
        job_description: z.ZodString;
        japanese_percentage: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        must_condition: z.ZodString;
        want_condition: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        position_name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        working_hour: z.ZodString;
        salary_type: z.ZodNativeEnum<{
            no_data: "no_data";
            hourly_wage: "hourly_wage";
            daily_wage: "daily_wage";
            monthly_salary: "monthly_salary";
            annual_salary: "annual_salary";
        }>;
        salary_min: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        salary_max: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        salary_detail: z.ZodString;
        day_off: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        progress_detail: z.ZodString;
        entity_branch_id: z.ZodNumber;
        expire_date: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    }, "job_id">, "strip", z.ZodTypeAny, {
        job_id: string;
    }, {
        job_id: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    favs: {
        job_id: string;
    }[];
}, {
    favs: {
        job_id: string;
    }[];
}>;
export type CreateFavsSchema = z.infer<typeof CreateFavsSchema>;
