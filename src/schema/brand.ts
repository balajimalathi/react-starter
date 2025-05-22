import { z } from "zod"

export const brandSchema = z.object({
  id: z.string(),
  createdAt: z.any(),
  updatedAt: z.any(),
  createdBy: z.any(),
  updatedBy: z.any(),
  active: z.boolean(),
  name: z.string(),
  code: z.string(),
})

export type IBrand = z.infer<typeof brandSchema>