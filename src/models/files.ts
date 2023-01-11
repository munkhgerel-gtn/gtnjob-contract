import * as z from "zod"
import { FileType, FileSource } from "../../../backend/backend_app/core/dist/client"

export const FilesModel = z.object({
  file_id: z.string(),
  file_name: z.string(),
  target_id: z.string(),
  file_path: z.string(),
  file_type: z.nativeEnum(FileType),
  fiel_source: z.nativeEnum(FileSource),
  created_at: z.date(),
  created_by: z.string(),
})
