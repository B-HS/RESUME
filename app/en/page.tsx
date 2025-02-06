import { UtilIcons } from '@features/common'
import { educationAndEtc, history, introduces, projects, skills } from '@shared/constant/en'
import { Separator } from '@shared/ui/separator'
import { ContractWidget, EducationWidget, ExperiencesWidget, IntroduceWidget, SideProjectWidget, SkillsWidget } from '@widgets/contents'
import { SiteHeader } from '@widgets/header'
import { Fragment } from 'react'

const Page = () => {
    const subTitles = ['HYUNSEOK BYUN', '95.07.01', 'A developer who run for a responsive encyclopedia.']
    return (
        <Fragment>
            <SiteHeader name='Hyunseok Byun' subTitles={subTitles} />
            <section className='max-w-screen-2xl size-full mx-auto'>
                <section className='flex flex-col gap-5 relative'>
                    <ContractWidget />
                    <Separator />
                    <IntroduceWidget introduce={introduces} />
                    <Separator />
                    <ExperiencesWidget histories={history} />
                    <Separator />
                    <SideProjectWidget projects={projects} />
                    <Separator />
                    <SkillsWidget skills={skills} subtitle='- Technologies experienced and listed in order of proficiency.' />
                    <Separator />
                    <EducationWidget educations={educationAndEtc} />
                    <UtilIcons />
                </section>
            </section>
        </Fragment>
    )
}

export default Page
