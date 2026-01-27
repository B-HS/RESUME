import { SectionHeader } from '@features/common/section'
import { introduces } from '@shared/constant'

export const IntroduceWidget = ({ lang }: { lang: 'ko' | 'jp' }) => {
    const introduce = introduces[lang]
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
