import { SectionHeader } from '@features/common/section'
import { educationAndEtc } from '@shared/constant'

export const EducationWidget = () => {
    return (
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
    )
}
