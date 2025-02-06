import { SectionHeader, SectionHistoryElement, SectionHistoryHeader } from '@features/common/section'
import { type history } from '@shared/constant'
import { type history as historyEn } from '@shared/constant/en'

export const ExperiencesWidget = ({ histories }: { histories: typeof history | typeof historyEn }) => {
    return (
        <SectionHeader title='Experiences'>
            {Object.entries(histories).map(([key, value]) => (
                <section key={key} className='w-full divide-y'>
                    <SectionHistoryHeader {...value} />
                    {Object.values(value.history).map((history, idx) => (
                        //@ts-ignore
                        <SectionHistoryElement key={idx} {...history} />
                    ))}
                </section>
            ))}
        </SectionHeader>
    )
}
