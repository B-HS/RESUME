import { SectionHeader, SectionProjectElement } from '@features/common/section'
import { projects } from '@shared/constant'

export const SideProjectWidget = () => {
    return (
        <SectionHeader title='Side Projects'>
            <section className='flex flex-wrap justify-start gap-3'>
                {projects.map((project) => (
                    <SectionProjectElement key={project.name} {...project} />
                ))}
            </section>
        </SectionHeader>
    )
}
