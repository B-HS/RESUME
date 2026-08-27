import { LangType, translator } from '@entities/translations'
import { SectionHeader } from '@features/common/section-header'
import { FC } from 'react'

type AdditionalExperienceProps = { lang: LangType }

export const AdditionalExperience: FC<AdditionalExperienceProps> = ({ lang }) => {
    const t = translator({ lang })
    const additionalExperiences = [
        { period: t('ETC_CYBER_UNIVERSITY_PERIOD'), description: t('ETC_CYBER_UNIVERSITY_DESCRIPTION') },
        { period: t('ETC_FULLSTACK_COURSE_PERIOD'), description: t('ETC_FULLSTACK_COURSE_DESCRIPTION') },
        { period: t('ETC_AGRICULTURAL_HERITAGE_PERIOD'), description: t('ETC_AGRICULTURAL_HERITAGE_DESCRIPTION') },
        { period: t('ETC_YUMENOI_INTERNSHIP_PERIOD'), description: t('ETC_YUMENOI_INTERNSHIP_DESCRIPTION') },
        { period: t('ETC_MASAN_UNIVERSITY_PERIOD'), description: t('ETC_MASAN_UNIVERSITY_DESCRIPTION') },
    ]

    return (
        <>
            <SectionHeader title={t('ETC')} />
            <ul className='p-1.5 text-sm'>
                {additionalExperiences.map((experience) => (
                    <li key={experience.period} className='flex gap-3 py-1'>
                        <span className='w-30 shrink-0 text-xs text-foreground/75'>{experience.period}</span>
                        <span>{experience.description}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
