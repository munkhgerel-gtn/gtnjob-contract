import { z } from "zod";
export declare const reference: {
    getLists: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodArray<z.ZodObject<Pick<{
                list_id: z.ZodNumber;
                list_name: z.ZodString;
                created_at: z.ZodDate;
            }, "created_at" | "list_id" | "list_name">, "strip", z.ZodTypeAny, {
                created_at: Date;
                list_id: number;
                list_name: string;
            }, {
                created_at: Date;
                list_id: number;
                list_name: string;
            }>, "many">;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    getListItemByLanguage: {
        method: "GET";
        path: string;
        query: z.ZodObject<{
            listid: z.ZodNumber;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            language: string;
            listid: number;
        }, {
            language: string;
            listid: number;
        }>;
        responses: {
            200: z.ZodArray<z.ZodObject<Pick<{
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
            }, "value" | "code" | "parent_id" | "created_at" | "updated_at" | "listitem_id" | "list_id" | "dictionary_id" | "listitem_value">, "strip", z.ZodTypeAny, {
                value?: string | null | undefined;
                code?: string | null | undefined;
                parent_id?: number | null | undefined;
                listitem_value?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                listitem_id: number;
                list_id: number;
                dictionary_id: number;
            }, {
                value?: string | null | undefined;
                code?: string | null | undefined;
                parent_id?: number | null | undefined;
                listitem_value?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                listitem_id: number;
                list_id: number;
                dictionary_id: number;
            }>, "many">;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
    getOneListItembyLanguage: {
        method: "GET";
        path: string;
        query: z.ZodObject<{
            listitem_id: z.ZodNumber;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            listitem_id: number;
            language: string;
        }, {
            listitem_id: number;
            language: string;
        }>;
        responses: {
            200: z.ZodObject<Pick<{
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
            }, "value" | "code" | "parent_id" | "created_at" | "updated_at" | "listitem_id" | "list_id" | "dictionary_id" | "listitem_value">, "strip", z.ZodTypeAny, {
                value?: string | null | undefined;
                code?: string | null | undefined;
                parent_id?: number | null | undefined;
                listitem_value?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                listitem_id: number;
                list_id: number;
                dictionary_id: number;
            }, {
                value?: string | null | undefined;
                code?: string | null | undefined;
                parent_id?: number | null | undefined;
                listitem_value?: string | null | undefined;
                created_at: Date;
                updated_at: Date;
                listitem_id: number;
                list_id: number;
                dictionary_id: number;
            }>;
            400: z.ZodString;
        };
        summary: string;
        description: string;
    };
};
