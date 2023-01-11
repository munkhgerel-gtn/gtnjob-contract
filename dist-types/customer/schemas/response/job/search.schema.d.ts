import { z } from "zod";
export declare const JobOtherLanguageSchema: z.ZodObject<Omit<{
    job_other_language_id: z.ZodString;
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
}, "job_id">, "strip", z.ZodTypeAny, {
    language_id: number;
    job_other_language_id: string;
    language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
}, {
    language_id: number;
    job_other_language_id: string;
    language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
}>;
export type JobOtherLanguageSchema = z.infer<typeof JobOtherLanguageSchema>;
export declare const JobSchema: z.ZodObject<z.extendShape<Pick<{
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
}, "created_at" | "job_id" | "location_details" | "employment_status" | "japanese_level" | "english_level" | "recruitment_type" | "job_title" | "salary_type" | "salary_min" | "salary_max">, {
    job_other_language: z.ZodArray<z.ZodObject<Omit<{
        job_other_language_id: z.ZodString;
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
    }, "job_id">, "strip", z.ZodTypeAny, {
        language_id: number;
        job_other_language_id: string;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }, {
        language_id: number;
        job_other_language_id: string;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }>, "many">;
    benefits: z.ZodArray<z.ZodObject<{
        value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        code: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        parent_id: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        created_at: z.ZodOptional<z.ZodDate>;
        updated_at: z.ZodOptional<z.ZodDate>;
        listitem_id: z.ZodOptional<z.ZodNumber>;
        list_id: z.ZodOptional<z.ZodNumber>;
        dictionary_id: z.ZodOptional<z.ZodNumber>;
        listitem_value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    location_details?: string | null | undefined;
    recruitment_type?: "direct" | "referral_company" | null | undefined;
    salary_min?: number | null | undefined;
    salary_max?: number | null | undefined;
    created_at: Date;
    job_id: string;
    employment_status: "employee" | "contract_employee" | "outsourcing";
    japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    job_title: string;
    salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
    benefits: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    job_other_language: {
        language_id: number;
        job_other_language_id: string;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }[];
}, {
    location_details?: string | null | undefined;
    recruitment_type?: "direct" | "referral_company" | null | undefined;
    salary_min?: number | null | undefined;
    salary_max?: number | null | undefined;
    created_at: Date;
    job_id: string;
    employment_status: "employee" | "contract_employee" | "outsourcing";
    japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    job_title: string;
    salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
    benefits: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    job_other_language: {
        language_id: number;
        job_other_language_id: string;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }[];
}>;
export type JobSchema = z.infer<typeof JobSchema>;
export declare const JobSearchSchema: z.ZodObject<{
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
    items: z.ZodArray<z.ZodObject<z.extendShape<Pick<{
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
    }, "created_at" | "job_id" | "location_details" | "employment_status" | "japanese_level" | "english_level" | "recruitment_type" | "job_title" | "salary_type" | "salary_min" | "salary_max">, {
        job_other_language: z.ZodArray<z.ZodObject<Omit<{
            job_other_language_id: z.ZodString;
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
        }, "job_id">, "strip", z.ZodTypeAny, {
            language_id: number;
            job_other_language_id: string;
            language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        }, {
            language_id: number;
            job_other_language_id: string;
            language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        }>, "many">;
        benefits: z.ZodArray<z.ZodObject<{
            value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
            code: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
            parent_id: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
            created_at: z.ZodOptional<z.ZodDate>;
            updated_at: z.ZodOptional<z.ZodDate>;
            listitem_id: z.ZodOptional<z.ZodNumber>;
            list_id: z.ZodOptional<z.ZodNumber>;
            dictionary_id: z.ZodOptional<z.ZodNumber>;
            listitem_value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        }, "strip", z.ZodTypeAny, {
            value?: string | null | undefined;
            code?: string | null | undefined;
            parent_id?: number | null | undefined;
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            listitem_id?: number | undefined;
            list_id?: number | undefined;
            dictionary_id?: number | undefined;
            listitem_value?: string | null | undefined;
        }, {
            value?: string | null | undefined;
            code?: string | null | undefined;
            parent_id?: number | null | undefined;
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            listitem_id?: number | undefined;
            list_id?: number | undefined;
            dictionary_id?: number | undefined;
            listitem_value?: string | null | undefined;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        location_details?: string | null | undefined;
        recruitment_type?: "direct" | "referral_company" | null | undefined;
        salary_min?: number | null | undefined;
        salary_max?: number | null | undefined;
        created_at: Date;
        job_id: string;
        employment_status: "employee" | "contract_employee" | "outsourcing";
        japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        job_title: string;
        salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
        benefits: {
            value?: string | null | undefined;
            code?: string | null | undefined;
            parent_id?: number | null | undefined;
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            listitem_id?: number | undefined;
            list_id?: number | undefined;
            dictionary_id?: number | undefined;
            listitem_value?: string | null | undefined;
        }[];
        job_other_language: {
            language_id: number;
            job_other_language_id: string;
            language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        }[];
    }, {
        location_details?: string | null | undefined;
        recruitment_type?: "direct" | "referral_company" | null | undefined;
        salary_min?: number | null | undefined;
        salary_max?: number | null | undefined;
        created_at: Date;
        job_id: string;
        employment_status: "employee" | "contract_employee" | "outsourcing";
        japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        job_title: string;
        salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
        benefits: {
            value?: string | null | undefined;
            code?: string | null | undefined;
            parent_id?: number | null | undefined;
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            listitem_id?: number | undefined;
            list_id?: number | undefined;
            dictionary_id?: number | undefined;
            listitem_value?: string | null | undefined;
        }[];
        job_other_language: {
            language_id: number;
            job_other_language_id: string;
            language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
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
        location_details?: string | null | undefined;
        recruitment_type?: "direct" | "referral_company" | null | undefined;
        salary_min?: number | null | undefined;
        salary_max?: number | null | undefined;
        created_at: Date;
        job_id: string;
        employment_status: "employee" | "contract_employee" | "outsourcing";
        japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        job_title: string;
        salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
        benefits: {
            value?: string | null | undefined;
            code?: string | null | undefined;
            parent_id?: number | null | undefined;
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            listitem_id?: number | undefined;
            list_id?: number | undefined;
            dictionary_id?: number | undefined;
            listitem_value?: string | null | undefined;
        }[];
        job_other_language: {
            language_id: number;
            job_other_language_id: string;
            language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
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
        location_details?: string | null | undefined;
        recruitment_type?: "direct" | "referral_company" | null | undefined;
        salary_min?: number | null | undefined;
        salary_max?: number | null | undefined;
        created_at: Date;
        job_id: string;
        employment_status: "employee" | "contract_employee" | "outsourcing";
        japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        job_title: string;
        salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
        benefits: {
            value?: string | null | undefined;
            code?: string | null | undefined;
            parent_id?: number | null | undefined;
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            listitem_id?: number | undefined;
            list_id?: number | undefined;
            dictionary_id?: number | undefined;
            listitem_value?: string | null | undefined;
        }[];
        job_other_language: {
            language_id: number;
            job_other_language_id: string;
            language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
        }[];
    }[];
}>;
export type JobSearchSchema = z.infer<typeof JobSearchSchema>;
export declare const JobDetailSchema: z.ZodObject<z.extendShape<Omit<{
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
}, "created_by" | "updated_by">, {
    job_other_language: z.ZodArray<z.ZodObject<Omit<{
        job_other_language_id: z.ZodString;
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
    }, "job_id">, "strip", z.ZodTypeAny, {
        language_id: number;
        job_other_language_id: string;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }, {
        language_id: number;
        job_other_language_id: string;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }>, "many">;
    occupations: z.ZodArray<z.ZodObject<{
        value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        code: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        parent_id: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        created_at: z.ZodOptional<z.ZodDate>;
        updated_at: z.ZodOptional<z.ZodDate>;
        listitem_id: z.ZodOptional<z.ZodNumber>;
        list_id: z.ZodOptional<z.ZodNumber>;
        dictionary_id: z.ZodOptional<z.ZodNumber>;
        listitem_value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }>, "many">;
    industries: z.ZodArray<z.ZodObject<{
        value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        code: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        parent_id: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        created_at: z.ZodOptional<z.ZodDate>;
        updated_at: z.ZodOptional<z.ZodDate>;
        listitem_id: z.ZodOptional<z.ZodNumber>;
        list_id: z.ZodOptional<z.ZodNumber>;
        dictionary_id: z.ZodOptional<z.ZodNumber>;
        listitem_value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }>, "many">;
    prefectures: z.ZodArray<z.ZodObject<{
        value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        code: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        parent_id: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        created_at: z.ZodOptional<z.ZodDate>;
        updated_at: z.ZodOptional<z.ZodDate>;
        listitem_id: z.ZodOptional<z.ZodNumber>;
        list_id: z.ZodOptional<z.ZodNumber>;
        dictionary_id: z.ZodOptional<z.ZodNumber>;
        listitem_value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }>, "many">;
    educations: z.ZodArray<z.ZodObject<{
        value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        code: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        parent_id: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        created_at: z.ZodOptional<z.ZodDate>;
        updated_at: z.ZodOptional<z.ZodDate>;
        listitem_id: z.ZodOptional<z.ZodNumber>;
        list_id: z.ZodOptional<z.ZodNumber>;
        dictionary_id: z.ZodOptional<z.ZodNumber>;
        listitem_value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }>, "many">;
    benefits: z.ZodArray<z.ZodObject<{
        value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        code: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        parent_id: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        created_at: z.ZodOptional<z.ZodDate>;
        updated_at: z.ZodOptional<z.ZodDate>;
        listitem_id: z.ZodOptional<z.ZodNumber>;
        list_id: z.ZodOptional<z.ZodNumber>;
        dictionary_id: z.ZodOptional<z.ZodNumber>;
        listitem_value: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }, {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    location_details?: string | null | undefined;
    benefit_other?: string | null | undefined;
    age_min?: number | null | undefined;
    age_max?: number | null | undefined;
    set_age_reason?: string | null | undefined;
    recruitment_type?: "direct" | "referral_company" | null | undefined;
    japanese_percentage?: number | null | undefined;
    want_condition?: string | null | undefined;
    position_name?: string | null | undefined;
    salary_min?: number | null | undefined;
    salary_max?: number | null | undefined;
    day_off?: string | null | undefined;
    expire_date?: Date | null | undefined;
    created_at: Date;
    updated_at: Date;
    career_level: ("no_data" | "execute" | "manager" | "senior" | "staff" | "entry")[];
    job_id: string;
    job_publish: "public" | "private";
    smoke: ("no_data" | "yes__no_smoking_on_site" | "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors" | "yes__no_smoking_indoors" | "yes__smoking_room_installed_indoors" | "yes__working_in_smoking_areas" | "no_smoking_allowed")[];
    employment_status: "employee" | "contract_employee" | "outsourcing";
    japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    experienced_count: number;
    job_title: string;
    job_description: string;
    must_condition: string;
    working_hour: string;
    salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
    salary_detail: string;
    progress_detail: string;
    entity_branch_id: number;
    occupations: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    industries: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    prefectures: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    educations: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    benefits: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    job_other_language: {
        language_id: number;
        job_other_language_id: string;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }[];
}, {
    location_details?: string | null | undefined;
    benefit_other?: string | null | undefined;
    age_min?: number | null | undefined;
    age_max?: number | null | undefined;
    set_age_reason?: string | null | undefined;
    recruitment_type?: "direct" | "referral_company" | null | undefined;
    japanese_percentage?: number | null | undefined;
    want_condition?: string | null | undefined;
    position_name?: string | null | undefined;
    salary_min?: number | null | undefined;
    salary_max?: number | null | undefined;
    day_off?: string | null | undefined;
    expire_date?: Date | null | undefined;
    created_at: Date;
    updated_at: Date;
    career_level: ("no_data" | "execute" | "manager" | "senior" | "staff" | "entry")[];
    job_id: string;
    job_publish: "public" | "private";
    smoke: ("no_data" | "yes__no_smoking_on_site" | "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors" | "yes__no_smoking_indoors" | "yes__smoking_room_installed_indoors" | "yes__working_in_smoking_areas" | "no_smoking_allowed")[];
    employment_status: "employee" | "contract_employee" | "outsourcing";
    japanese_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    english_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    experienced_count: number;
    job_title: string;
    job_description: string;
    must_condition: string;
    working_hour: string;
    salary_type: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary";
    salary_detail: string;
    progress_detail: string;
    entity_branch_id: number;
    occupations: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    industries: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    prefectures: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    educations: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    benefits: {
        value?: string | null | undefined;
        code?: string | null | undefined;
        parent_id?: number | null | undefined;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        listitem_id?: number | undefined;
        list_id?: number | undefined;
        dictionary_id?: number | undefined;
        listitem_value?: string | null | undefined;
    }[];
    job_other_language: {
        language_id: number;
        job_other_language_id: string;
        language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
    }[];
}>;
export type JobDetailSchema = z.infer<typeof JobDetailSchema>;
