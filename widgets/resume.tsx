import { LangType, translator } from '@shared/translations'
import { FC } from 'react'

type ResumeWidget = { lang: LangType }

export const Resume: FC<ResumeWidget> = ({ lang }) => {
    const t = translator({ lang })
    return (
        <section className='flex flex-col gap-1.5'>
            <h1 className='text-xl font-bold'>
                {t('FIRST_NAME')} {t('LAST_NAME')}
            </h1>
        </section>
    )
}
