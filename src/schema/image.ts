import { z } from "zod"

export const imageSchema = z.object({
  id: z.string(),
  createdAt: z.any(),
  updatedAt: z.any(), 
  active: z.boolean(),
  name: z.string(),
  originalFileName: z.string(),
  fileUrl: z.string(),
})

export type IImage = z.infer<typeof imageSchema>