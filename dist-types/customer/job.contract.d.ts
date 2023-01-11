import { z } from "zod";
export declare const job: {
    findMany: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodObject<{
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
            400: z.ZodString;
        };
        query: z.ZodObject<{
            created_at: z.ZodOptional<z.ZodDate>;
            updated_at: z.ZodOptional<z.ZodDate>;
            career_level: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
                no_data: "no_data";
                execute: "execute";
                manager: "manager";
                senior: "senior";
                staff: "staff";
                entry: "entry";
            }>, "many">>;
            job_id: z.ZodOptional<z.ZodString>;
            job_publish: z.ZodOptional<z.ZodNativeEnum<{
                public: "public";
                private: "private";
            }>>;
            location_details: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
            benefit_other: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
            smoke: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
                no_data: "no_data";
                yes__no_smoking_on_site: "yes__no_smoking_on_site";
                yes__no_smoking_indoors_and_smoking_area_set_up_outdoors: "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors";
                yes__no_smoking_indoors: "yes__no_smoking_indoors";
                yes__smoking_room_installed_indoors: "yes__smoking_room_installed_indoors";
                yes__working_in_smoking_areas: "yes__working_in_smoking_areas";
                no_smoking_allowed: "no_smoking_allowed";
            }>, "many">>;
            employment_status: z.ZodOptional<z.ZodNativeEnum<{
                employee: "employee";
                contract_employee: "contract_employee";
                outsourcing: "outsourcing";
            }>>;
            japanese_level: z.ZodOptional<z.ZodNativeEnum<{
                no_data: "no_data";
                vative: "vative";
                near_native: "near_native";
                business: "business";
                daily_conversation: "daily_conversation";
                greeting: "greeting";
            }>>;
            english_level: z.ZodOptional<z.ZodNativeEnum<{
                no_data: "no_data";
                vative: "vative";
                near_native: "near_native";
                business: "business";
                daily_conversation: "daily_conversation";
                greeting: "greeting";
            }>>;
            experienced_count: z.ZodOptional<z.ZodNumber>;
            age_min: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
            age_max: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
            set_age_reason: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
            recruitment_type: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
                direct: "direct";
                referral_company: "referral_company";
            }>>>>;
            job_title: z.ZodOptional<z.ZodString>;
            job_description: z.ZodOptional<z.ZodString>;
            japanese_percentage: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
            must_condition: z.ZodOptional<z.ZodString>;
            want_condition: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
            position_name: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
            working_hour: z.ZodOptional<z.ZodString>;
            salary_type: z.ZodOptional<z.ZodNativeEnum<{
                no_data: "no_data";
                hourly_wage: "hourly_wage";
                daily_wage: "daily_wage";
                monthly_salary: "monthly_salary";
                annual_salary: "annual_salary";
            }>>;
            salary_min: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
            salary_max: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
            salary_detail: z.ZodOptional<z.ZodString>;
            day_off: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
            progress_detail: z.ZodOptional<z.ZodString>;
            entity_branch_id: z.ZodOptional<z.ZodNumber>;
            expire_date: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodDate>>>;
            occupations: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
                listitem_id: z.ZodNumber;
                list_id: z.ZodNumber;
                dictionary_id: z.ZodNumber;
                code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                listitem_value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                parent_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                dictionaryDictionaries_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "listitem_id">, "strip", z.ZodTypeAny, {
                listitem_id: number;
            }, {
                listitem_id: number;
            }>, "many">>;
            industries: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
                listitem_id: z.ZodNumber;
                list_id: z.ZodNumber;
                dictionary_id: z.ZodNumber;
                code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                listitem_value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                parent_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                dictionaryDictionaries_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "listitem_id">, "strip", z.ZodTypeAny, {
                listitem_id: number;
            }, {
                listitem_id: number;
            }>, "many">>;
            prefectures: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
                listitem_id: z.ZodNumber;
                list_id: z.ZodNumber;
                dictionary_id: z.ZodNumber;
                code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                listitem_value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                parent_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                dictionaryDictionaries_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "listitem_id">, "strip", z.ZodTypeAny, {
                listitem_id: number;
            }, {
                listitem_id: number;
            }>, "many">>;
            educations: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
                listitem_id: z.ZodNumber;
                list_id: z.ZodNumber;
                dictionary_id: z.ZodNumber;
                code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                listitem_value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                parent_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                dictionaryDictionaries_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "listitem_id">, "strip", z.ZodTypeAny, {
                listitem_id: number;
            }, {
                listitem_id: number;
            }>, "many">>;
            benefits: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
                listitem_id: z.ZodNumber;
                list_id: z.ZodNumber;
                dictionary_id: z.ZodNumber;
                code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                listitem_value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                parent_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                value: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                created_at: z.ZodDate;
                updated_at: z.ZodDate;
                dictionaryDictionaries_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "listitem_id">, "strip", z.ZodTypeAny, {
                listitem_id: number;
            }, {
                listitem_id: number;
            }>, "many">>;
            page: z.ZodOptional<z.ZodNumber>;
            perPage: z.ZodOptional<z.ZodNumber>;
            sorting: z.ZodOptional<z.ZodObject<{
                created_at_sort: z.ZodEnum<["asc", "desc"]>;
                job_publish_sort: z.ZodEnum<["asc", "desc"]>;
                location_details_sort: z.ZodEnum<["asc", "desc"]>;
                employment_status_sort: z.ZodEnum<["asc", "desc"]>;
                japanese_level_sort: z.ZodEnum<["asc", "desc"]>;
                english_level_sort: z.ZodEnum<["asc", "desc"]>;
                experienced_count_sort: z.ZodEnum<["asc", "desc"]>;
                age_min_sort: z.ZodEnum<["asc", "desc"]>;
                age_max_sort: z.ZodEnum<["asc", "desc"]>;
                job_title_sort: z.ZodEnum<["asc", "desc"]>;
                japanese_percentage_sort: z.ZodEnum<["asc", "desc"]>;
                position_name_sort: z.ZodEnum<["asc", "desc"]>;
                salary_type_sort: z.ZodEnum<["asc", "desc"]>;
                salary_min_sort: z.ZodEnum<["asc", "desc"]>;
                salary_max_sort: z.ZodEnum<["asc", "desc"]>;
                expire_date_sort: z.ZodEnum<["asc", "desc"]>;
            }, "strip", z.ZodTypeAny, {
                created_at_sort: "asc" | "desc";
                job_publish_sort: "asc" | "desc";
                location_details_sort: "asc" | "desc";
                employment_status_sort: "asc" | "desc";
                japanese_level_sort: "asc" | "desc";
                english_level_sort: "asc" | "desc";
                experienced_count_sort: "asc" | "desc";
                age_min_sort: "asc" | "desc";
                age_max_sort: "asc" | "desc";
                job_title_sort: "asc" | "desc";
                japanese_percentage_sort: "asc" | "desc";
                position_name_sort: "asc" | "desc";
                salary_type_sort: "asc" | "desc";
                salary_min_sort: "asc" | "desc";
                salary_max_sort: "asc" | "desc";
                expire_date_sort: "asc" | "desc";
            }, {
                created_at_sort: "asc" | "desc";
                job_publish_sort: "asc" | "desc";
                location_details_sort: "asc" | "desc";
                employment_status_sort: "asc" | "desc";
                japanese_level_sort: "asc" | "desc";
                english_level_sort: "asc" | "desc";
                experienced_count_sort: "asc" | "desc";
                age_min_sort: "asc" | "desc";
                age_max_sort: "asc" | "desc";
                job_title_sort: "asc" | "desc";
                japanese_percentage_sort: "asc" | "desc";
                position_name_sort: "asc" | "desc";
                salary_type_sort: "asc" | "desc";
                salary_min_sort: "asc" | "desc";
                salary_max_sort: "asc" | "desc";
                expire_date_sort: "asc" | "desc";
            }>>;
        }, "strip", z.ZodTypeAny, {
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            career_level?: ("no_data" | "execute" | "manager" | "senior" | "staff" | "entry")[] | undefined;
            job_id?: string | undefined;
            job_publish?: "public" | "private" | undefined;
            location_details?: string | null | undefined;
            benefit_other?: string | null | undefined;
            smoke?: ("no_data" | "yes__no_smoking_on_site" | "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors" | "yes__no_smoking_indoors" | "yes__smoking_room_installed_indoors" | "yes__working_in_smoking_areas" | "no_smoking_allowed")[] | undefined;
            employment_status?: "employee" | "contract_employee" | "outsourcing" | undefined;
            japanese_level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | undefined;
            english_level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | undefined;
            experienced_count?: number | undefined;
            age_min?: number | null | undefined;
            age_max?: number | null | undefined;
            set_age_reason?: string | null | undefined;
            recruitment_type?: "direct" | "referral_company" | null | undefined;
            job_title?: string | undefined;
            job_description?: string | undefined;
            japanese_percentage?: number | null | undefined;
            must_condition?: string | undefined;
            want_condition?: string | null | undefined;
            position_name?: string | null | undefined;
            working_hour?: string | undefined;
            salary_type?: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary" | undefined;
            salary_min?: number | null | undefined;
            salary_max?: number | null | undefined;
            salary_detail?: string | undefined;
            day_off?: string | null | undefined;
            progress_detail?: string | undefined;
            entity_branch_id?: number | undefined;
            expire_date?: Date | null | undefined;
            occupations?: {
                listitem_id: number;
            }[] | undefined;
            industries?: {
                listitem_id: number;
            }[] | undefined;
            prefectures?: {
                listitem_id: number;
            }[] | undefined;
            educations?: {
                listitem_id: number;
            }[] | undefined;
            benefits?: {
                listitem_id: number;
            }[] | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
            sorting?: {
                created_at_sort: "asc" | "desc";
                job_publish_sort: "asc" | "desc";
                location_details_sort: "asc" | "desc";
                employment_status_sort: "asc" | "desc";
                japanese_level_sort: "asc" | "desc";
                english_level_sort: "asc" | "desc";
                experienced_count_sort: "asc" | "desc";
                age_min_sort: "asc" | "desc";
                age_max_sort: "asc" | "desc";
                job_title_sort: "asc" | "desc";
                japanese_percentage_sort: "asc" | "desc";
                position_name_sort: "asc" | "desc";
                salary_type_sort: "asc" | "desc";
                salary_min_sort: "asc" | "desc";
                salary_max_sort: "asc" | "desc";
                expire_date_sort: "asc" | "desc";
            } | undefined;
        }, {
            created_at?: Date | undefined;
            updated_at?: Date | undefined;
            career_level?: ("no_data" | "execute" | "manager" | "senior" | "staff" | "entry")[] | undefined;
            job_id?: string | undefined;
            job_publish?: "public" | "private" | undefined;
            location_details?: string | null | undefined;
            benefit_other?: string | null | undefined;
            smoke?: ("no_data" | "yes__no_smoking_on_site" | "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors" | "yes__no_smoking_indoors" | "yes__smoking_room_installed_indoors" | "yes__working_in_smoking_areas" | "no_smoking_allowed")[] | undefined;
            employment_status?: "employee" | "contract_employee" | "outsourcing" | undefined;
            japanese_level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | undefined;
            english_level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | undefined;
            experienced_count?: number | undefined;
            age_min?: number | null | undefined;
            age_max?: number | null | undefined;
            set_age_reason?: string | null | undefined;
            recruitment_type?: "direct" | "referral_company" | null | undefined;
            job_title?: string | undefined;
            job_description?: string | undefined;
            japanese_percentage?: number | null | undefined;
            must_condition?: string | undefined;
            want_condition?: string | null | undefined;
            position_name?: string | null | undefined;
            working_hour?: string | undefined;
            salary_type?: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary" | undefined;
            salary_min?: number | null | undefined;
            salary_max?: number | null | undefined;
            salary_detail?: string | undefined;
            day_off?: string | null | undefined;
            progress_detail?: string | undefined;
            entity_branch_id?: number | undefined;
            expire_date?: Date | null | undefined;
            occupations?: {
                listitem_id: number;
            }[] | undefined;
            industries?: {
                listitem_id: number;
            }[] | undefined;
            prefectures?: {
                listitem_id: number;
            }[] | undefined;
            educations?: {
                listitem_id: number;
            }[] | undefined;
            benefits?: {
                listitem_id: number;
            }[] | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
            sorting?: {
                created_at_sort: "asc" | "desc";
                job_publish_sort: "asc" | "desc";
                location_details_sort: "asc" | "desc";
                employment_status_sort: "asc" | "desc";
                japanese_level_sort: "asc" | "desc";
                english_level_sort: "asc" | "desc";
                experienced_count_sort: "asc" | "desc";
                age_min_sort: "asc" | "desc";
                age_max_sort: "asc" | "desc";
                job_title_sort: "asc" | "desc";
                japanese_percentage_sort: "asc" | "desc";
                position_name_sort: "asc" | "desc";
                salary_type_sort: "asc" | "desc";
                salary_min_sort: "asc" | "desc";
                salary_max_sort: "asc" | "desc";
                expire_date_sort: "asc" | "desc";
            } | undefined;
        }>;
        summary: string;
    };
    findOne: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodObject<z.extendShape<Omit<{
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
            400: z.ZodString;
        };
        summary: string;
    };
};
