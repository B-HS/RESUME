'use client'

import { useQuery } from '@tanstack/react-query'
import { sessionQueryOptions } from '@entities/session/session.api'

export const useGetSession = () => useQuery(sessionQueryOptions())
