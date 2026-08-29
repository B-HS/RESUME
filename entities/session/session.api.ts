import { queryOptions } from '@tanstack/react-query'
import { sessionResponseSchema } from '@entities/session/session.type'
import { API_BASE_URL, QUERY_KEY } from '@shared/constants/api'

export const fetchSession = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/get-session`, { credentials: 'include' })
    if (!response.ok) return null
    return sessionResponseSchema.parse(await response.json())
}

export const sessionQueryOptions = () =>
    queryOptions({
        queryKey: QUERY_KEY.AUTH.SESSION,
        queryFn: fetchSession,
    })
