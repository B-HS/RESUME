import { SectionHeader } from '@features/common/section'
import { type educationAndEtc } from '@shared/constant'

export const EducationWidget = ({ educations }: { educations: typeof educationAndEtc }) => {
    return (
        <SectionHeader title='Education / etc.'>
            <section className='flex flex-col gap-2'>
                {educations.map((item, index) => (
                    <section className='flex gap-1 flex-wrap flex-col sm:flex-row' key={index}>
                        <span className='font-semibold min-w-52 text-lg'>{item.duration}</span>
                        <ul>
                            <li className='list-inside list-disc'>{item.description}</li>
                        </ul>
                    </section>
                ))}
            </section>
        </SectionHeader>
    )
}
