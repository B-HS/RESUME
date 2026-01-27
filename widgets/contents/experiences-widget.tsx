import { SectionHeader, SectionHistoryHeader } from '@features/common/section'
import { experienceLabels } from '@shared/constant'
import { histories, HistoryItem } from '@shared/constant/history'
import { cn } from '@shared/utils'
import { FC } from 'react'

type Lang = 'ko' | 'jp'
type LabelType = 'background' | 'improvement' | 'results'

const HistoryDescription: FC<{ descriptions: string[]; labelType: LabelType; lang: Lang }> = ({ descriptions, labelType, lang }) => {
    const label = experienceLabels[lang][labelType]
    const labelColor =
        labelType === 'background'
            ? 'text-primary/90 border-primary/70'
            : labelType === 'improvement'
              ? 'text-blue-600 border-blue-500'
              : 'text-green-600 border-green-500'

    return (
        <div className='flex mb-2'>
            <div className={cn('shrink-0 font-semibold text-primary/70 border-border border-r-3 pr-3.5', labelColor)}>{label}</div>
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

const ExperiencesHistoryItem: FC<HistoryItem & { lang: Lang }> = ({ title, background, implementation, results, lang }) => {
    return (
        <div className='border-border py-5'>
            <h3 className='text-lg font-bold mb-3.5 text-primary'>{title}</h3>
            <HistoryDescription descriptions={background} labelType='background' lang={lang} />
            <HistoryDescription descriptions={implementation} labelType='improvement' lang={lang} />
            <HistoryDescription descriptions={results} labelType='results' lang={lang} />
        </div>
    )
}

export const ExperiencesWidget = ({ lang }: { lang: 'ko' | 'jp' }) => {
    const historyList = histories[lang]
    return (
        <SectionHeader title='Experiences'>
            {Object.entries(historyList).map(([key, value]) => (
                <section key={key} className='divide-y'>
                    <SectionHistoryHeader {...value} />
                    {value.history.map((historyItem) => (
                        <ExperiencesHistoryItem key={historyItem.title} {...historyItem} lang={lang} />
                    ))}
                </section>
            ))}
        </SectionHeader>
    )
}
