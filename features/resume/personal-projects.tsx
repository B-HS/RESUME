import { FC } from 'react'
import type { WebResumeCompany } from '@entities/web-resume/web-resume.type'
import { SectionHeader } from '@features/common/section-header'
import { ResumeSection } from '@features/resume/section'
import type { SupportedLanguage } from '@shared/constants/seo'

type PersonalProjectsProps = { label: string; block: WebResumeCompany; lang: SupportedLanguage }

export const PersonalProjects: FC<PersonalProjectsProps> = ({ label, block, lang }) => {
    return (
        <>
            <SectionHeader title={label} />
            <ResumeSection company={block} lang={lang} />
        </>
    )
}
