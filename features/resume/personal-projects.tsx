import { LangType, translator } from '@entities/translations'
import { SectionHeader } from '@features/common/section-header'
import { ResumeSection } from '@features/resume/section'
import { FC } from 'react'

type PersonalProjectsProps = { lang: LangType }

export const PersonalProjects: FC<PersonalProjectsProps> = ({ lang }) => {
    const t = translator({ lang })

    return (
        <>
            <SectionHeader title={t('PROJECTS')} />
            <ResumeSection workName='TOY' workList={['BBLOG', 'WEBTOON', 'KATARU', 'BHUB']} lang={lang} />
        </>
    )
}
