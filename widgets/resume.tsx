import { LangType, translator } from '@entities/translations'
import { Introduce } from '@features/resume/introduce'
import { ResumeSection } from '@features/resume/section'
import { FC } from 'react'

type ResumeWidget = { lang: LangType }

export const Resume: FC<ResumeWidget> = ({ lang }) => {
    const t = translator({ lang })
    return (
        <div className='flex flex-col gap-1.5'>
            <Introduce lang={lang} />

            <ResumeSection
                workName='GLOBALKNOWLEDGE'
                workList={['FLUNTI', 'DESIGNSYSTEM', 'STUDIO', 'AI', 'CMS']}
                lang={lang}
                title={t('WORK_EXPERIENCE')}
            />
        </div>
    )
}
