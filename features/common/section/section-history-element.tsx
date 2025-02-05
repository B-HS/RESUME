import { Badge } from '@shared/ui/badge'
import { Dot } from 'lucide-react'
import { Fragment, ReactNode } from 'react'

export const SectionHistoryElement = ({
    title,
    duration,
    description,
    stacks,
}: {
    title: ReactNode
    duration: string
    description: { detail: string; explaination?: string }[]
    stacks: string[]
}) => {
    return (
        <section className='flex flex-wrap w-full items-start md:items-center gap-3.5 flex-col md:flex-row py-2'>
            <section className='w-72 flex flex-col gap-2'>
                <span className='font-bold'>{title}</span>
                <span className='font-semibold text-foreground/70'>{duration}</span>
                <section className='flex flex-wrap gap-2'>
                    {stacks?.map((stacks, idx) => (
                        <Badge variant={'secondary'} className='rounded-sm !font-bold px-1' key={idx}>
                            {stacks}
                        </Badge>
                    ))}
                </section>
            </section>
            <ul className='flex-1 flex flex-col gap-2'>
                {description.map((desc, idx) => (
                    <Fragment key={idx}>
                        <li className='list-inside list-disc flex flex-col gap-1 border-l-2 pl-2' key={idx}>
                            <p className='flex gap-0.5'>
                                <Dot /> {desc.detail}
                            </p>
                            {desc.explaination && (
                                <section className='rounded-md bg-secondary py-1.5 px-2 text-xs flex gap-1.5 items-center justify-start'>
                                    {/* <Pencil className='size-3' /> */}
                                    <div className='flex flex-col gap-1'>
                                        {desc.explaination.split('  ').map((element, idx) => (
                                            <p key={idx}>{element}</p>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </li>
                    </Fragment>
                ))}
            </ul>
        </section>
    )
}
