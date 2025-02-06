import { SectionHeader } from '@features/common/section'
import { ReactNode } from 'react'

export const IntroduceWidget = ({ introduce }: { introduce: (string | ReactNode)[] }) => {
    return (
        <SectionHeader title='Introduce'>
            <section className='space-y-3'>
                {introduce.map((introduce, idx) => (
                    <p key={idx}>{introduce}</p>
                ))}
            </section>
        </SectionHeader>
    )
}
