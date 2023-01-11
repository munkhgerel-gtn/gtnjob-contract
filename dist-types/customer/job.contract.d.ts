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
            400: z.ZodString;
        };
        query: z.ZodObject<{
            job_id: z.ZodOptional<z.ZodString>;
            created_at: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            job_publish: z.ZodOptional<z.ZodNativeEnum<{
                public: "public";
                private: "private";
            }>>;
            job_references: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            }>, "many">>;
            location_details: z.ZodOptional<z.ZodString>;
            career_level: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
                no_data: "no_data";
                execute: "execute";
                manager: "manager";
                senior: "senior";
                staff: "staff";
                entry: "entry";
            }>, "many">>;
            benefit_other: z.ZodOptional<z.ZodOptional<z.ZodString>>;
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
            job_other_languages: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            }>, "many">>;
            experienced_count: z.ZodOptional<z.ZodNumber>;
            age_min: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            age_max: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            set_age_reason: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            job_title: z.ZodOptional<z.ZodString>;
            job_description: z.ZodOptional<z.ZodString>;
            japanese_percentage: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            must_conidtion: z.ZodOptional<z.ZodString>;
            want_condition: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            position_name: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            working_hour: z.ZodOptional<z.ZodString>;
            salary_type: z.ZodOptional<z.ZodNativeEnum<{
                no_data: "no_data";
                hourly_wage: "hourly_wage";
                daily_wage: "daily_wage";
                monthly_salary: "monthly_salary";
                annual_salary: "annual_salary";
            }>>;
            salary_min: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            salary_max: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            salary_detail: z.ZodOptional<z.ZodString>;
            day_off: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            progress_detail: z.ZodOptional<z.ZodString>;
            entity_branch_id: z.ZodOptional<z.ZodNumber>;
            expire_date: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>>;
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
            job_id?: string | undefined;
            created_at?: string | undefined;
            job_publish?: "public" | "private" | undefined;
            job_references?: {
                id: string;
                job_id: string;
                reference_list_id: number;
                reference_list_item_id: number;
            }[] | undefined;
            location_details?: string | undefined;
            career_level?: ("no_data" | "execute" | "manager" | "senior" | "staff" | "entry")[] | undefined;
            benefit_other?: string | undefined;
            smoke?: ("no_data" | "yes__no_smoking_on_site" | "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors" | "yes__no_smoking_indoors" | "yes__smoking_room_installed_indoors" | "yes__working_in_smoking_areas" | "no_smoking_allowed")[] | undefined;
            employment_status?: "employee" | "contract_employee" | "outsourcing" | undefined;
            japanese_level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | undefined;
            english_level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | undefined;
            job_other_languages?: {
                id: string;
                job_id: string;
                language_id: number;
                language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
            }[] | undefined;
            experienced_count?: number | undefined;
            age_min?: number | undefined;
            age_max?: number | undefined;
            set_age_reason?: string | undefined;
            job_title?: string | undefined;
            job_description?: string | undefined;
            japanese_percentage?: number | undefined;
            must_conidtion?: string | undefined;
            want_condition?: string | undefined;
            position_name?: string | undefined;
            working_hour?: string | undefined;
            salary_type?: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary" | undefined;
            salary_min?: number | undefined;
            salary_max?: number | undefined;
            salary_detail?: string | undefined;
            day_off?: string | undefined;
            progress_detail?: string | undefined;
            entity_branch_id?: number | undefined;
            expire_date?: string | undefined;
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
            job_id?: string | undefined;
            created_at?: string | undefined;
            job_publish?: "public" | "private" | undefined;
            job_references?: {
                id: string;
                job_id: string;
                reference_list_id: number;
                reference_list_item_id: number;
            }[] | undefined;
            location_details?: string | undefined;
            career_level?: ("no_data" | "execute" | "manager" | "senior" | "staff" | "entry")[] | undefined;
            benefit_other?: string | undefined;
            smoke?: ("no_data" | "yes__no_smoking_on_site" | "yes__no_smoking_indoors_and_smoking_area_set_up_outdoors" | "yes__no_smoking_indoors" | "yes__smoking_room_installed_indoors" | "yes__working_in_smoking_areas" | "no_smoking_allowed")[] | undefined;
            employment_status?: "employee" | "contract_employee" | "outsourcing" | undefined;
            japanese_level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | undefined;
            english_level?: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting" | undefined;
            job_other_languages?: {
                id: string;
                job_id: string;
                language_id: number;
                language_level: "no_data" | "vative" | "near_native" | "business" | "daily_conversation" | "greeting";
            }[] | undefined;
            experienced_count?: number | undefined;
            age_min?: number | undefined;
            age_max?: number | undefined;
            set_age_reason?: string | undefined;
            job_title?: string | undefined;
            job_description?: string | undefined;
            japanese_percentage?: number | undefined;
            must_conidtion?: string | undefined;
            want_condition?: string | undefined;
            position_name?: string | undefined;
            working_hour?: string | undefined;
            salary_type?: "no_data" | "hourly_wage" | "daily_wage" | "monthly_salary" | "annual_salary" | undefined;
            salary_min?: number | undefined;
            salary_max?: number | undefined;
            salary_detail?: string | undefined;
            day_off?: string | undefined;
            progress_detail?: string | undefined;
            entity_branch_id?: number | undefined;
            expire_date?: string | undefined;
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
        };
        summary: string;
    };
};
