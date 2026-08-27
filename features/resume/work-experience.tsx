import { LangType, translator } from '@entities/translations'
import { SectionHeader } from '@features/common/section-header'
import { ResumeSection } from '@features/resume/section'
import { FC } from 'react'

type WorkExperienceWidget = { lang: LangType }

export const WorkExperience: FC<WorkExperienceWidget> = ({ lang }) => {
    const t = translator({ lang })
    return (
        <>
            <SectionHeader title={t('WORK_EXPERIENCE')} />
            <ResumeSection workName='GLOBALKNOWLEDGE' workList={['FLUNTI', 'DESIGNSYSTEM', 'STUDIO', 'AI', 'CMS']} lang={lang} />
            <ResumeSection workName='PROSOFT' workList={['MIGRATION', 'DBMIGRATION']} lang={lang} />
            <ResumeSection workName='KEYWORDSSTUDIO' workList={['LQA']} lang={lang} />
        </>
    )
}
