import { FC } from 'react'
import type { WebResumeCompany } from '@entities/web-resume/web-resume.type'
import { SectionHeader } from '@features/common/section-header'
import { ResumeSection } from '@features/resume/section'
import type { SupportedLanguage } from '@shared/constants/seo'

type PersonalProjectsProps = {
    label: string
    block: WebResumeCompany
    lang: SupportedLanguage
    edit?: { onLabelChange: (value: string) => void; onBlockChange: (block: WebResumeCompany) => void }
}

export const PersonalProjects: FC<PersonalProjectsProps> = ({ label, block, lang, edit }) => {
    return (
        <>
            <SectionHeader title={label} edit={edit ? { onTitleChange: edit.onLabelChange } : undefined} />
            <ResumeSection company={block} lang={lang} edit={edit ? { onCompanyChange: edit.onBlockChange } : undefined} />
        </>
    )
}
