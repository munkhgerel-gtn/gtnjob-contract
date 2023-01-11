import { z } from "zod";
export declare const CustomerVisaCreateUpdateSchema: z.ZodObject<{
    status_visa: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
        no_data: "no_data";
    }>>>;
    date_expire: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    country_citizenship: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    back_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    front_visafile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status_visa?: "no_data" | null | undefined;
    date_expire?: Date | null | undefined;
    country_citizenship?: string | null | undefined;
    back_visafile?: string | null | undefined;
    front_visafile?: string | null | undefined;
}, {
    status_visa?: "no_data" | null | undefined;
    date_expire?: Date | null | undefined;
    country_citizenship?: string | null | undefined;
    back_visafile?: string | null | undefined;
    front_visafile?: string | null | undefined;
}>;
export type CustomerVisaCreateUpdateSchema = z.infer<typeof CustomerVisaCreateUpdateSchema>;
