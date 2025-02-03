import { UtilIcons } from '@features/common'

import { Separator } from '@shared/ui/separator'
import { ContractWidget, EducationWidget, ExperiencesWidget, IntroduceWidget, SideProjectWidget, SkillsWidget } from '@widgets/contents'

const Page = () => {
    return (
        <section className='flex flex-col gap-5 relative'>
            <ContractWidget />
            <Separator />
            <IntroduceWidget />
            <Separator />
            <ExperiencesWidget />
            <Separator />
            <SideProjectWidget />
            <Separator />
            <SkillsWidget />
            <Separator />
            <EducationWidget />
            <UtilIcons />
        </section>
    )
}

export default Page
