'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { FC, PropsWithChildren } from 'react'

const QUERY_STALE_TIME_MS = 60_000

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: QUERY_STALE_TIME_MS } } })

export const TanstackQueryProvider: FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
