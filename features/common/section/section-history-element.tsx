import { ReactNode } from 'react'

export const SectionHistoryElement = ({ title, duration, description }: { title: ReactNode; duration: string; description: string[] }) => {
    return (
        <section className='flex flex-wrap w-full items-start md:items-center gap-3.5 flex-col md:flex-row py-5'>
            <section className='w-72 flex flex-col'>
                <span className='font-bold'>{title}</span>
                <span className='font-semibold text-foreground/70'>{duration}</span>
            </section>
            <ul className='flex-1'>
                {description.map((desc, idx) => (
                    <li className='list-inside list-disc' key={idx}>
                        {desc}
                    </li>
                ))}
            </ul>
        </section>
    )
}
