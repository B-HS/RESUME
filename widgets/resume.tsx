import { LangType, translator } from '@entities/translations'
import { Introduce } from '@features/resume/introduce'
import { ResumeSection } from '@features/resume/section'
import { FC } from 'react'

type ResumeWidget = { lang: LangType }

export const Resume: FC<ResumeWidget> = ({ lang }) => {
    const t = translator({ lang })
    return (
        <div className='flex flex-col'>
            <Introduce lang={lang} />
            <ResumeSection
                isFirst
                workName='GLOBALKNOWLEDGE'
                workList={['FLUNTI', 'DESIGNSYSTEM', 'STUDIO', 'AI', 'CMS']}
                lang={lang}
                title={t('WORK_EXPERIENCE')}
            />
            <ResumeSection workName='PROSOFT' workList={['MIGRATION', 'DBMIGRATION']} lang={lang} title={t('WORK_EXPERIENCE')} />
            <ResumeSection workName='KEYWORDSSTUDIO' workList={['LQA']} lang={lang} title={t('WORK_EXPERIENCE')} />
        </div>
    )
}
