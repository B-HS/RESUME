import { FC } from 'react'
import type { WebResumeCompany } from '@entities/web-resume/web-resume.type'
import { EditIconButton } from '@features/edit/edit-icon-button'
import { SectionHeader } from '@features/common/section-header'
import { ResumeSection } from '@features/resume/section'
import type { SupportedLanguage } from '@shared/constants/seo'
import { localizedFrom } from '@shared/lib/localized'

type WorkExperienceProps = {
    label: string
    companies: WebResumeCompany[]
    lang: SupportedLanguage
    edit?: { onLabelChange: (value: string) => void; onCompaniesChange: (companies: WebResumeCompany[]) => void }
}

export const WorkExperience: FC<WorkExperienceProps> = ({ label, companies, lang, edit }) => {
    const handleAddCompany = () => {
        edit?.onCompaniesChange([
            ...companies,
            { name: localizedFrom(''), period: localizedFrom(''), location: localizedFrom(''), role: localizedFrom(''), projects: [] },
        ])
    }

    return (
        <>
            <SectionHeader title={label} edit={edit ? { onTitleChange: edit.onLabelChange } : undefined} />
            {companies.map((company, index) => (
                <ResumeSection
                    key={`${index}-${company.name[lang]}`}
                    company={company}
                    lang={lang}
                    edit={
                        edit
                            ? {
                                  onCompanyChange: (next) => edit.onCompaniesChange(companies.map((c, i) => (i === index ? next : c))),
                                  onRemove: () => edit.onCompaniesChange(companies.filter((_, i) => i !== index)),
                              }
                            : undefined
                    }
                />
            ))}
            {edit && (
                <div className='px-1.5 pb-1.5'>
                    <EditIconButton action='add' label='회사 추가' onClick={handleAddCompany} />
                </div>
            )}
        </>
    )
}
