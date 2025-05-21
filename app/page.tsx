import { UtilIcons } from '@features/common'
import { educationAndEtc, history, introduces, projects, skills } from '@shared/constant'
import { Separator } from '@shared/ui/separator'
import { ContractWidget, EducationWidget, ExperiencesWidget, IntroduceWidget, SideProjectWidget, SkillsWidget } from '@widgets/contents'
import { SiteHeader } from '@widgets/header'
import { Fragment } from 'react'

const Page = () => {
    const subTitles = ['HYUNSEOK BYUN', '95.07.01', '반응형 백과사전을 지향하는 개발자']
    return (
        <Fragment>
            <SiteHeader name='Hyunseok Byun' subTitles={subTitles} />
            <section className='max-w-(--breakpoint-2xl) size-full mx-auto'>
                <section className='flex flex-col relative'>
                    <ContractWidget />
                    <Separator />
                    <IntroduceWidget introduce={introduces} />
                    <Separator />
                    <ExperiencesWidget histories={history} />
                    <Separator />
                    <SideProjectWidget projects={projects} />
                    <Separator />
                    <SkillsWidget skills={skills} />
                    <Separator />
                    <EducationWidget educations={educationAndEtc} />
                    <UtilIcons />
                </section>
            </section>
        </Fragment>
    )
}

export default Page
