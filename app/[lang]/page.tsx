import { TRANSLATIONS, translator } from '@shared/translations'
import { FC } from 'react'

type PageProps = {
    params: Promise<{ lang: keyof typeof TRANSLATIONS }>
}

const Page: FC<PageProps> = async ({ params }) => {
    const { lang } = await params
    const t = translator({ lang: lang })

    return <main>{t('NAME')}</main>
}

export default Page
