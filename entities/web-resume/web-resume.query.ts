'use client'

import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { updateWebResume, webResumeQueryOptions } from '@entities/web-resume/web-resume.api'
import { QUERY_KEY } from '@shared/constants/api'

export const useGetWebResume = () => useSuspenseQuery(webResumeQueryOptions())

export const useUpdateWebResume = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: updateWebResume,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEY.WEB_RESUME.DETAIL })
            toast.success('이력서가 저장되었습니다')
        },
        onError: () => toast.error('저장에 실패했습니다'),
    })
}
