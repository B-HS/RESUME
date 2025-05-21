import { SectionHeader, SectionProjectElement } from '@features/common/section'
import { type projects as projectList } from '@shared/constant'

export const SideProjectWidget = ({ projects }: { projects: typeof projectList }) => {
    return (
        <SectionHeader title='Side Projects'>
            <section className='flex flex-wrap justify-start gap-3'>
                <SectionProjectElement projectList={projects} />
            </section>
        </SectionHeader>
    )
}
