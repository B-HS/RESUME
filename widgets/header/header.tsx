import Link from 'next/link'

export const SiteHeader = async () => {
    return (
        <header className='sticky top-0 z-50 w-full border-b backdrop-blur mx-auto md:py-3.5 lg:py-3.5 py-1.5 flex justify-between items-center flex-wrap'>
            <Link href={'#'}>
                <h1 className='text-2xl font-bold flex-1 text-nowrap pl-2 md:pl-0 lg:pl-0'>변현석</h1>
            </Link>
            <section className='flex flex-col md:flex-row'>
                <span className='border-l-2 px-3.5 text-nowrap font-semibold md:text-base lg:text--base text-xs'>HYUNSEOK BYUN</span>
                <span className='border-l-2 px-3.5 text-nowrap font-semibold md:text-base lg:text--base text-xs'>95.07.01</span>
                <span className='border-l-2 px-3.5 text-nowrap font-semibold md:text-base lg:text--base text-xs'>
                    반응형 백과사전을 지향하는 개발자
                </span>
            </section>
        </header>
    )
}
