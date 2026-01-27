import { UtilIcons } from '@features/common'
import { skills } from '@shared/constant'
import { Separator } from '@shared/ui/separator'
import { ContractWidget, EducationWidget, ExperiencesWidget, IntroduceWidget, SideProjectWidget, SkillsWidget } from '@widgets/contents'
import { SiteHeader } from '@widgets/header'
import { Fragment } from 'react'

type Lang = 'ko' | 'jp'

const widgets = [ContractWidget, IntroduceWidget, ExperiencesWidget, SideProjectWidget, SkillsWidget, EducationWidget]

const Page = async ({ searchParams }: { searchParams: Promise<{ lang: Lang }> }) => {
    const params = await searchParams
    const lang = params.lang || 'ko'
    return (
        <Fragment>
            <SiteHeader lang={lang} />
            <section className='max-w-(--breakpoint-2xl) size-full mx-auto'>
                <section className='flex flex-col'>
                    {widgets.map((Widget, index) => (
                        <Fragment key={index}>
                            <Widget lang={lang} />
                            <Separator />
                        </Fragment>
                    ))}
                    <UtilIcons lang={lang} />
                </section>
            </section>
        </Fragment>
    )
}

export default Page
