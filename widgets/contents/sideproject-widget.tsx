import { SectionHeader, SectionProjectElement } from '@features/common/section'
import { projects } from '@shared/constant'

export const SideProjectWidget = ({ lang }: { lang: 'ko' | 'jp' }) => {
    return (
        <SectionHeader title='Side Projects'>
            <section className='flex flex-wrap justify-start gap-3'>
                <SectionProjectElement projectList={projects[lang]} lang={lang} />
            </section>
        </SectionHeader>
    )
}
