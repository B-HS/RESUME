import { LangType, translator } from '@entities/translations'
import { Introduce } from '@features/resume/introduce'
import { Separator } from '@shared/ui/separator'
import { FC, PropsWithChildren } from 'react'

type ResumeWidget = { lang: LangType }

type SectionProps = PropsWithChildren<{ lang: LangType; title: string }>

const Section: FC<SectionProps> = ({ children, title }) => {
    return (
        <div>
            <h2 className='text-lg font-bold px-1.5 pt-3'>{title}</h2>
            <Separator />
        </div>
    )
}

export const Resume: FC<ResumeWidget> = ({ lang }) => {
    const t = translator({ lang })
    return (
        <div className='flex flex-col gap-1.5'>
            <Introduce lang={lang} />

            <Section lang={lang} title={t('WORK_EXPERIENCE')}>
                asdf
            </Section>
        </div>
    )
}
