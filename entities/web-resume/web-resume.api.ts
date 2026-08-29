import { queryOptions } from '@tanstack/react-query'
import type { WebResumeData } from '@entities/web-resume/web-resume.type'
import { WEB_RESUME_CACHE_TAG, WEB_RESUME_REVALIDATE_SECONDS, QUERY_KEY } from '@shared/constants/api'
import { apiFetch } from '@shared/lib/fetch'
import { webResumeResponseSchema } from '@entities/web-resume/web-resume.type'

export const fetchWebResume = async () =>
    webResumeResponseSchema.parse(
        await apiFetch('/api/resume/public/web', { next: { revalidate: WEB_RESUME_REVALIDATE_SECONDS, tags: [WEB_RESUME_CACHE_TAG] } }),
    )

export const webResumeQueryOptions = () =>
    queryOptions({
        queryKey: QUERY_KEY.WEB_RESUME.DETAIL,
        queryFn: fetchWebResume,
    })

export const updateWebResume = async (data: WebResumeData) =>
    apiFetch('/api/resume/web', {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
