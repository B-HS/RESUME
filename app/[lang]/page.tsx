import { LangType } from '@entities/translations'
import { Resume } from '@widgets/resume'
import { FC } from 'react'

type PageProps = {
    params: Promise<{ lang: LangType }>
}

const Page: FC<PageProps> = async ({ params }) => {
    const { lang } = await params

    return (
        <main>
            <Resume lang={lang} />
        </main>
    )
}

export default Page
