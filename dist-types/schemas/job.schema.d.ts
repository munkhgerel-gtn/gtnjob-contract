import { z } from "zod";
export declare const JobReferenceSchema: z.ZodObject<{
    id: z.ZodString;
    job_id: z.ZodString;
    reference_list_id: z.ZodNumber;
    reference_list_item_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    job_id: string;
    reference_list_id: number;
    reference_list_item_id: number;
}, {
    id: string;
    job_id: string;
    reference_list_id: number;
    reference_list_item_id: number;
}>;
export type JobReferenceSchema = z.infer<typeof JobReferenceSchema>;
export declare const JobOtherLanguageSchema: z.ZodObject<{
    id: z.ZodString;
    language_id: z.ZodNumber;
    language_level: z.ZodNativeEnum<{
        no_data: "no_data";
        vative: "vative";
        near_native: "near_native";
        business: "business";
        daily_conversation: "daily_conversation";
        greeting: "greeting";
    }>;
    job_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    job_id: string;
    language_id: number;
    language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
}, {
    id: string;
    job_id: string;
    language_id: number;
    language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
}>;
export type JobOtherLanguageSchema = z.infer<typeof JobOtherLanguageSchema>;
export declare const JobSchema: z.ZodObject<{
    job_id: z.ZodString;
    created_at: z.ZodEffects<z.ZodString, string, string>;
    job_publish: z.ZodNativeEnum<{
        public: "public";
        private: "private";
    }>;
    job_references: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        job_id: z.ZodString;
        reference_list_id: z.ZodNumber;
        reference_list_item_id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        job_id: string;
        reference_list_id: number;
        reference_list_item_id: number;
    }, {
        id: string;
        job_id: string;
        reference_list_id: number;
        reference_list_item_id: number;
    }>, "many">;
    location_details: z.ZodString;
    career_level: z.ZodArray<z.ZodNativeEnum<{
        no_data: "no_data";
        execute: "execute";
        manager: "manager";
        senior: "senior";
        staff: "staff";
        entry: "entry";
    }>, "many">;
    benefit_other: z.ZodOptional<z.ZodString>;
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
    job_other_languages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        language_id: z.ZodNumber;
        language_level: z.ZodNativeEnum<{
            no_data: "no_data";
            vative: "vative";
            near_native: "near_native";
            business: "business";
            daily_conversation: "daily_conversation";
            greeting: "greeting";
        }>;
        job_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        job_id: string;
        language_id: number;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }, {
        id: string;
        job_id: string;
        language_id: number;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }>, "many">;
    experienced_count: z.ZodNumber;
    age_min: z.ZodOptional<z.ZodNumber>;
    age_max: z.ZodOptional<z.ZodNumber>;
    set_age_reason: z.ZodOptional<z.ZodString>;
    job_title: z.ZodString;
    job_description: z.ZodString;
    japanese_percentage: z.ZodOptional<z.ZodNumber>;
    must_conidtion: z.ZodString;
    want_condition: z.ZodOptional<z.ZodString>;
    position_name: z.ZodOptional<z.ZodString>;
    working_hour: z.ZodString;
    salary_type: z.ZodNativeEnum<{
        no_data: "no_data";
        hourly_wage: "hourly_wage";
        daily_wage: "daily_wage";
        monthly_salary: "monthly_salary";
        annual_salary: "annual_salary";
    }>;
    salary_min: z.ZodOptional<z.ZodNumber>;
    salary_max: z.ZodOptional<z.ZodNumber>;
    salary_detail: z.ZodString;
    day_off: z.ZodOptional<z.ZodString>;
    progress_detail: z.ZodString;
    entity_branch_id: z.ZodNumber;
    expire_date: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    benefit_other?: string | undefined;
    age_min?: number | undefined;
    age_max?: number | undefined;
    set_age_reason?: string | undefined;
    japanese_percentage?: number | undefined;
    want_condition?: string | undefined;
    position_name?: string | undefined;
    salary_min?: number | undefined;
    salary_max?: number | undefined;
    day_off?: string | undefined;
    expire_date?: string | undefined;
    job_id: string;
    created_at: string;
    job_publish: "public" | "private";
    job_references: {
        id: string;
        job_id: string;
        reference_list_id: number;
        reference_list_item_id: number;
    }[];
    location_details: string;
    career_level: ("no_data" | "execute" | "manager" | "senior" | "staff" | "entry")[];
    smoke: ("no_data" | "yes__no_smoking_on_site" | "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors" | "yes__no_smoking_indoors" | "yes__smoking_room_installed_indoors" | "yes__working_in_smoking_areas" | "no_smoking_allowed")[];
    employment_status: "employee" | "contract_employee" | "outsourcing";
    japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    job_other_languages: {
        id: string;
        job_id: string;
        language_id: number;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }[];
    experienced_count: number;
    job_title: string;
    job_description: string;
    must_conidtion: string;
    working_hour: string;
    salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
    salary_detail: string;
    progress_detail: string;
    entity_branch_id: number;
}, {
    benefit_other?: string | undefined;
    age_min?: number | undefined;
    age_max?: number | undefined;
    set_age_reason?: string | undefined;
    japanese_percentage?: number | undefined;
    want_condition?: string | undefined;
    position_name?: string | undefined;
    salary_min?: number | undefined;
    salary_max?: number | undefined;
    day_off?: string | undefined;
    expire_date?: string | undefined;
    job_id: string;
    created_at: string;
    job_publish: "public" | "private";
    job_references: {
        id: string;
        job_id: string;
        reference_list_id: number;
        reference_list_item_id: number;
    }[];
    location_details: string;
    career_level: ("no_data" | "execute" | "manager" | "senior" | "staff" | "entry")[];
    smoke: ("no_data" | "yes__no_smoking_on_site" | "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors" | "yes__no_smoking_indoors" | "yes__smoking_room_installed_indoors" | "yes__working_in_smoking_areas" | "no_smoking_allowed")[];
    employment_status: "employee" | "contract_employee" | "outsourcing";
    japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    job_other_languages: {
        id: string;
        job_id: string;
        language_id: number;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }[];
    experienced_count: number;
    job_title: string;
    job_description: string;
    must_conidtion: string;
    working_hour: string;
    salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
    salary_detail: string;
    progress_detail: string;
    entity_branch_id: number;
}>;
export type JobSchema = z.infer<typeof JobSchema>;
