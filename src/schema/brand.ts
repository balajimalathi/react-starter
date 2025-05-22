import { z } from "zod"
import { imageSchema } from "./image"

export const brandSchema = z.object({
  id: z.string(),
  createdAt: z.any(),
  updatedAt: z.any(),
  createdBy: z.any(),
  updatedBy: z.any(),
  active: z.boolean(),
  name: z.string(),
  code: z.string(),
  status: z.string(),
  slug: z.string(),
  featured: z.boolean(),
  image: imageSchema
})

export type IBrand = z.infer<typeof brandSchema>