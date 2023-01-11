import { z } from "zod";
export declare const user: {
    update: {
        method: "PATCH";
        path: string;
        body: string;
        responses: {};
        summary: string;
        description: string;
    };
    getPost: {
        method: "GET";
        path: string;
        responses: {
            200: z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>;
        };
        summary: string;
    };
};
