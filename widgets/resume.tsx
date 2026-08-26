import { Introduce } from '@features/resume/introduce'
import { LangType } from '@shared/translations'
import { Separator } from '@shared/ui/separator'
import { FC, PropsWithChildren } from 'react'

type ResumeWidget = { lang: LangType }

const Section: FC<PropsWithChildren<{ lang: LangType; title: string }>> = ({ children, title }) => {
    return (
        <div>
            <h2 className='text-lg font-bold px-1.5'>{title}</h2>
            <Separator />
            <div className='px-1.5'></div>
        </div>
    )
}

export const Resume: FC<ResumeWidget> = ({ lang }) => {
    return (
        <div className='flex flex-col gap-1.5'>
            <Introduce lang={lang} />

            <Section lang={lang} title='Education'>
                asdf
            </Section>
        </div>
    )
}
