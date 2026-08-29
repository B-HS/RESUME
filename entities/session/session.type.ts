import { z } from 'zod'

export const sessionResponseSchema = z
    .object({
        user: z.object({
            id: z.string(),
            email: z.string(),
            role: z.string().nullable().optional(),
        }),
    })
    .nullable()

export type SessionResponse = z.infer<typeof sessionResponseSchema>
