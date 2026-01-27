import { UtilIcons } from '@features/common'
import { Separator } from '@shared/ui/separator'
import { ContractWidget, EducationWidget, ExperiencesWidget, IntroduceWidget, SideProjectWidget, SkillsWidget } from '@widgets/contents'
import { SiteHeader } from '@widgets/header'
import { Fragment } from 'react'

const widgets = [ContractWidget, IntroduceWidget, ExperiencesWidget, SideProjectWidget, SkillsWidget, EducationWidget]

const Page = async () => {
    const lang = 'jp'
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
