import { FC } from 'react'
import type { WebResumeCompany } from '@entities/web-resume/web-resume.type'
import { SectionHeader } from '@features/common/section-header'
import { ResumeSection } from '@features/resume/section'
import type { SupportedLanguage } from '@shared/constants/seo'

type WorkExperienceProps = { label: string; companies: WebResumeCompany[]; lang: SupportedLanguage }

export const WorkExperience: FC<WorkExperienceProps> = ({ label, companies, lang }) => {
    return (
        <>
            <SectionHeader title={label} />
            {companies.map((company) => (
                <ResumeSection key={company.name[lang]} company={company} lang={lang} />
            ))}
        </>
    )
}
