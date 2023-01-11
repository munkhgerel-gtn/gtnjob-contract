import isISO8601 from "validator/lib/isISO8601";
import { z } from "zod";

export const iso8601Schema = z.string().refine(isISO8601);