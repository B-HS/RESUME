'use client'

import { FC } from 'react'
import { useGetWebResume } from '@entities/web-resume/web-resume.query'
import { AdditionalExperience } from '@features/resume/additional-experience'
import { Introduce } from '@features/resume/introduce'
import { PersonalProjects } from '@features/resume/personal-projects'
import { Skills } from '@features/resume/skills'
import { WorkExperience } from '@features/resume/work-experience'
import type { SupportedLanguage } from '@shared/constants/seo'

type ResumeProps = { lang: SupportedLanguage }

export const Resume: FC<ResumeProps> = ({ lang }) => {
    const { data } = useGetWebResume()
    const { webResume } = data

    return (
        <div className='flex flex-col pb-20'>
            <Introduce profile={webResume.profile} lang={lang} />
            <WorkExperience label={webResume.labels.workExperience[lang]} companies={webResume.workExperiences} lang={lang} />
            <PersonalProjects label={webResume.labels.projects[lang]} block={webResume.personalProjects} lang={lang} />
            <Skills label={webResume.labels.skills[lang]} groups={webResume.skillGroups} lang={lang} />
            <AdditionalExperience label={webResume.labels.etc[lang]} items={webResume.additionalExperiences} lang={lang} />
        </div>
    )
}
