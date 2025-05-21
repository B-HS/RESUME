import { cn } from '@shared/utils'
import type { FC } from 'react'

export const SectionHistoryHeader: FC<{
    title: string
    working: string
    job: string
    subtitle?: string
}> = ({ title, subtitle, job, working }) => {
    return (
        <div className='w-full pb-3'>
            {subtitle && <span className='text-xs text-primary/65 block mb-1'>{subtitle}</span>}
            <div className='flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3'>
                <h2 className='text-2xl font-bold text-primary'>{title}</h2>
                <div className='flex items-baseline gap-2 text-primary/75'>
                    <span className='font-medium'>{job}</span>
                    <span className='text-sm'>{working}</span>
                </div>
            </div>
        </div>
    )
}
