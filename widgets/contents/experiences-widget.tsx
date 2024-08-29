import { SectionHeader, SectionHistoryElement, SectionHistoryHeader } from '@features/common/section'
import { history } from '@shared/constant'

export const ExperiencesWidget = () => {
    return (
        <SectionHeader title='Experiences'>
            {Object.entries(history).map(([key, value]) => (
                <section key={key} className='w-full divide-y'>
                    <SectionHistoryHeader {...value} />
                    {Object.values(value.history).map((history, idx) => (
                        <SectionHistoryElement key={idx} {...history} />
                    ))}
                </section>
            ))}
        </SectionHeader>
    )
}
