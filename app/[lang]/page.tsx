import { LangType } from '@shared/translations'
import { Separator } from '@shared/ui/separator'
import { Resume } from '@widgets/resume'
import { FC } from 'react'

type PageProps = {
    params: Promise<{ lang: LangType }>
}

const Page: FC<PageProps> = async ({ params }) => {
    const { lang } = await params

    return (
        <main className='flex flex-col gap-1.5'>
            <Resume lang={lang} />
            <Separator />
        </main>
    )
}

export default Page
