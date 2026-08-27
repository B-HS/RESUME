import { LangType } from '@entities/translations'
import { AdditionalExperience } from '@features/resume/additional-experience'
import { Introduce } from '@features/resume/introduce'
import { PersonalProjects } from '@features/resume/personal-projects'
import { Skills } from '@features/resume/skills'
import { WorkExperience } from '@features/resume/work-experience'
import { FC } from 'react'

type ResumeWidget = { lang: LangType }

export const Resume: FC<ResumeWidget> = ({ lang }) => {
    return (
        <div className='flex flex-col pb-20'>
            <Introduce lang={lang} />
            <WorkExperience lang={lang} />
            <PersonalProjects lang={lang} />
            <Skills lang={lang} />
            <AdditionalExperience lang={lang} />
        </div>
    )
}
