import Link from 'next/link'
import { ReactNode } from 'react'

export const ProfileLinkElement = ({ links, icon }: { links: { title?: string; url: string; displayText: string }[]; icon: ReactNode }) => (
    <section className='flex items-center gap-4'>
        <section className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 shrink-0'>{icon}</section>
        <section>
            <h2 className='font-medium text-neutral-700 mb-1'>{links[0].title}</h2>
            <section className='space-y-1'>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className='block text-blue-900 hover:text-blue-950 transition-colors text-nowrap dark:text-blue-100 dark:hover:text-blue-50'>
                        {link.displayText}
                    </Link>
                ))}
            </section>
        </section>
    </section>
)
