import * as z from "zod";
export declare const FilesModel: z.ZodObject<{
    file_id: z.ZodString;
    file_name: z.ZodString;
    target_id: z.ZodString;
    file_path: z.ZodString;
    file_type: z.ZodNativeEnum<{
        image: "image";
        video: "video";
        pdf: "pdf";
        gif: "gif";
        csv: "csv";
        other: "other";
    }>;
    fiel_source: z.ZodNativeEnum<{
        content_image: "content_image";
        page_image: "page_image";
        user: "user";
        user_avatar: "user_avatar";
        user_image: "user_image";
        user_cv: "user_cv";
        user_resume: "user_resume";
        user_portfolio: "user_portfolio";
        user_other: "user_other";
        other: "other";
    }>;
    created_at: z.ZodDate;
    created_by: z.ZodString;
}, "strip", z.ZodTypeAny, {
    created_at: Date;
    created_by: string;
    file_id: string;
    file_name: string;
    target_id: string;
    file_path: string;
    file_type: "image" | "video" | "pdf" | "gif" | "csv" | "other";
    fiel_source: "user" | "other" | "content_image" | "page_image" | "user_avatar" | "user_image" | "user_cv" | "user_resume" | "user_portfolio" | "user_other";
}, {
    created_at: Date;
    created_by: string;
    file_id: string;
    file_name: string;
    target_id: string;
    file_path: string;
    file_type: "image" | "video" | "pdf" | "gif" | "csv" | "other";
    fiel_source: "user" | "other" | "content_image" | "page_image" | "user_avatar" | "user_image" | "user_cv" | "user_resume" | "user_portfolio" | "user_other";
}>;
