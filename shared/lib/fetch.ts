import { z } from 'zod'
import { API_BASE_URL } from '@shared/constants/api'

const apiEnvelopeSchema = z.union([
    z.object({ success: z.literal(true), data: z.unknown() }),
    z.object({ success: z.literal(false), error: z.object({ code: z.string(), message: z.string() }) }),
])

export const apiFetch = async (path: string, init?: RequestInit) => {
    const response = await fetch(`${API_BASE_URL}${path}`, init)
    const body = apiEnvelopeSchema.parse(await response.json())
    if (!body.success) throw new Error(`${body.error.code}: ${body.error.message}`)
    return body.data
}
