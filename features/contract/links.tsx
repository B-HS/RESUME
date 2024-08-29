import { SectionElement } from '@features/common/section'
import Link from 'next/link'

type LinkData = {
    title?: string
    url: string
    displayText: string
}

export const Links = ({ links }: { links: LinkData[] }) => {
    return (
        <section className='flex flex-col'>
            {links.map((link, index) => (
                <SectionElement title={link.title} key={index}>
                    <Link className='text-blue-500 hover:text-blue-500/50' href={link.url}>
                        {link.displayText}
                    </Link>
                </SectionElement>
            ))}
        </section>
    )
}
