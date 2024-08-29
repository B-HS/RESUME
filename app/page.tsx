import { UtilIcons } from '@features/common'
import { SectionHeader } from '@features/common/section'
import { Separator } from '@shared/ui/separator'
import { ContractWidget, ExperiencesWidget, IntroduceWidget, SideProjectWidget, SkillsWidget } from '@widgets/contents'

const educationAndEtc = [
    { duration: '14.03 ~ 19.02', description: '마산대학교 관광일본어' },
    { duration: '18.09 ~ 19.01', description: '夢乃井 인턴쉽' },
    { duration: '19.05', description: '6th 동아시아 농업유산 학회 현장견학 KR - JP 통역' },
    { duration: '22.04 ~ 22.10', description: '부산 동성 직업 전문학교 풀스택 과정' },
]

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
            <SectionHeader title='Education / etc.'>
                <section className='flex flex-col gap-2'>
                    {educationAndEtc.map((item, index) => (
                        <section className='flex gap-1' key={index}>
                            <span className='font-semibold w-32 text-lg'>{item.duration}</span>
                            <ul>
                                <li className='list-inside list-disc'>{item.description}</li>
                            </ul>
                        </section>
                    ))}
                </section>
            </SectionHeader>
            <UtilIcons />
        </section>
    )
}

export default Page
