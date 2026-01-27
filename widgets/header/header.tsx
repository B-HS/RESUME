import { names, subTitles } from '@shared/constant/introduce'
import Link from 'next/link'

export const SiteHeader = async ({ lang }: { lang: 'ko' | 'jp' }) => {
    const name = names[lang]
    const subTitle = subTitles[lang]
    return (
        <header className='w-full border-b mx-auto md:py-3.5 lg:py-3.5 py-1.5 flex justify-between items-center flex-wrap'>
            <Link href={'#'}>
                <h1 className='text-2xl font-bold flex-1 text-nowrap pl-2 md:pl-0 lg:pl-0'>{name}</h1>
            </Link>
            <section className='flex flex-col md:flex-row'>
                {subTitle.map((subtitle, idx) => (
                    <span key={idx} className='border-l-2 px-3.5 text-nowrap font-semibold md:text-base lg:text--base text-xs'>
                        {subtitle}
                    </span>
                ))}
            </section>
        </header>
    )
}
