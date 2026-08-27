import { LangType, translator } from '@entities/translations'
import { SectionHeader } from '@features/common/section-header'
import { Introduce } from '@features/resume/introduce'
import { PersonalProjects } from '@features/resume/personal-projects'
import { WorkExperience } from '@features/resume/work-experience'
import { FC } from 'react'

type ResumeWidget = { lang: LangType }

export const Resume: FC<ResumeWidget> = ({ lang }) => {
    const t = translator({ lang })
    return (
        <div className='flex flex-col pb-20'>
            <Introduce lang={lang} />
            <WorkExperience lang={lang} />
            <PersonalProjects lang={lang} />
            <SectionHeader title={t('ETC')} />
        </div>
    )
}
