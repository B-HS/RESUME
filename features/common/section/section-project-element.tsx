import { projects } from '@shared/constant'
import { Badge } from '@shared/ui/badge'
import Link from 'next/link'
export const SectionProjectElement = ({ description, link, name, stack }: (typeof projects)[0]) => {
    return (
        <section className='flex flex-col justify-start items-start min-w-80 py-3.5 px-1'>
            <section className='flex flex-col'>
                <span className='font-bold text-2xl'>{name}</span>
            </section>
            <section className='flex flex-col gap-2 flex-1'>
                <ul>
                    <li className='list-inside list-disc'>{description}</li>
                    <li className='list-inside list-disc'>
                        <Link className='text-blue-500 hover:text-blue-500/50' href={link.link} target='_blank' rel='noreferrer'>
                            {link.label}
                        </Link>
                    </li>
                </ul>
                <section className='flex gap-1'>
                    {stack.map((st) => (
                        <Badge variant={'secondary'} className='rounded-sm font-bold! px-1' key={st}>
                            {st}
                        </Badge>
                    ))}
                </section>
            </section>
        </section>
    )
}
