import { z } from "zod";
export declare const SimpleJobResponseSchema: z.ZodObject<Pick<{
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
}, "job_id" | "created_at" | "job_publish" | "job_references">, "strip", z.ZodTypeAny, {
    job_id: string;
    created_at: string;
    job_publish: "public" | "private";
    job_references: {
        id: string;
        job_id: string;
        reference_list_id: number;
        reference_list_item_id: number;
    }[];
}, {
    job_id: string;
    created_at: string;
    job_publish: "public" | "private";
    job_references: {
        id: string;
        job_id: string;
        reference_list_id: number;
        reference_list_item_id: number;
    }[];
}>;
export type SimpleJobResponseSchema = z.infer<typeof SimpleJobResponseSchema>;
export declare const JobSearchResponseSchema: z.ZodObject<{
    meta: z.ZodObject<{
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
    items: z.ZodArray<z.ZodObject<Pick<{
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
    }, "job_id" | "created_at" | "job_publish" | "job_references">, "strip", z.ZodTypeAny, {
        job_id: string;
        created_at: string;
        job_publish: "public" | "private";
        job_references: {
            id: string;
            job_id: string;
            reference_list_id: number;
            reference_list_item_id: number;
        }[];
    }, {
        job_id: string;
        created_at: string;
        job_publish: "public" | "private";
        job_references: {
            id: string;
            job_id: string;
            reference_list_id: number;
            reference_list_item_id: number;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    meta: {
        current_page: number;
        next_page: number;
        prev_page: number;
        per_page: number;
        total_pages: number;
        total_items: number;
    };
    items: {
        job_id: string;
        created_at: string;
        job_publish: "public" | "private";
        job_references: {
            id: string;
            job_id: string;
            reference_list_id: number;
            reference_list_item_id: number;
        }[];
    }[];
}, {
    meta: {
        current_page: number;
        next_page: number;
        prev_page: number;
        per_page: number;
        total_pages: number;
        total_items: number;
    };
    items: {
        job_id: string;
        created_at: string;
        job_publish: "public" | "private";
        job_references: {
            id: string;
            job_id: string;
            reference_list_id: number;
            reference_list_item_id: number;
        }[];
    }[];
}>;
export type JobSearchResponseSchema = z.infer<typeof JobSearchResponseSchema>;
export declare const JustJobOneSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const JobOneSchema: z.ZodObject<{
    id: z.ZodObject<{
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
    }, {
        id: number;
    }>;
}, "strip", z.ZodTypeAny, {
    id: {
        id: number;
    };
}, {
    id: {
        id: number;
    };
}>;
export type JobOneSchema = z.infer<typeof JobOneSchema>;
