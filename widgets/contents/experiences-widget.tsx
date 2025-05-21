import { SectionHeader, SectionHistoryHeader } from '@features/common/section'
import { History, HistoryItem } from '@shared/constant/history'
import { cn } from '@shared/utils'
import { FC } from 'react'
const HistoryDescription: FC<{ descriptions: string[]; which: '배경' | '개선' | '결과' }> = ({ descriptions, which }) => {
    const labelColor =
        which === '배경'
            ? 'text-primary/90 border-primary/70'
            : which === '개선'
              ? 'text-blue-600 border-blue-500'
              : 'text-green-600 border-green-500'

    return (
        <div className='flex mb-2'>
            <div className={cn('shrink-0 font-semibold text-primary/70 border-border border-r-3 pr-3.5', labelColor)}>{which}</div>
            <div className='flex-1 pl-3.5'>
                {descriptions.map((description, index) => (
                    <p key={index} className='text-primary/95 mb-1.5'>
                        {description}
                    </p>
                ))}
            </div>
        </div>
    )
}

const ExperiencesHistoryItem: FC<HistoryItem> = ({ title, background, implementation, results }) => {
    return (
        <div className='border-border py-5'>
            <h3 className='text-lg font-bold mb-3.5 text-primary'>{title}</h3>
            <HistoryDescription descriptions={background} which='배경' />
            <HistoryDescription descriptions={implementation} which='개선' />
            <HistoryDescription descriptions={results} which='결과' />
        </div>
    )
}

export const ExperiencesWidget = ({ histories }: { histories: History }) => {
    return (
        <SectionHeader title='Experiences'>
            {Object.entries(histories).map(([key, value]) => (
                <section key={key} className='divide-y'>
                    <SectionHistoryHeader {...value} />
                    {value.history.map((historyItem) => (
                        <ExperiencesHistoryItem key={historyItem.title} {...historyItem} />
                    ))}
                </section>
            ))}
        </SectionHeader>
    )
}
