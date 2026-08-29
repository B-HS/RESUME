'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { webResumeQueryOptions } from '@entities/web-resume/web-resume.api'

export const useGetWebResume = () => useSuspenseQuery(webResumeQueryOptions())
