import { FC } from 'react'
import type { WebResumeAdditionalExperience } from '@entities/web-resume/web-resume.type'
import { SectionHeader } from '@features/common/section-header'
import type { SupportedLanguage } from '@shared/constants/seo'

type AdditionalExperienceProps = { label: string; items: WebResumeAdditionalExperience[]; lang: SupportedLanguage }

export const AdditionalExperience: FC<AdditionalExperienceProps> = ({ label, items, lang }) => {
    return (
        <>
            <SectionHeader title={label} />
            <ul className='p-1.5 text-sm'>
                {items.map((experience) => (
                    <li key={experience.period[lang]} className='flex gap-3 py-1'>
                        <span className='w-30 shrink-0 text-xs text-foreground/75'>{experience.period[lang]}</span>
                        <span>{experience.description[lang]}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
