export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.gumyo.net'

export const WEB_RESUME_CACHE_TAG = 'web-resume'

export const WEB_RESUME_REVALIDATE_SECONDS = 60

export const QUERY_KEY = {
    AUTH: { SESSION: ['auth', 'session'] },
    WEB_RESUME: { DETAIL: ['web-resume', 'detail'] },
}
