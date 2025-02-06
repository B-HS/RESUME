import Link from 'next/link'

export const introduces = [
    'I am a frontend developer primarily working with Next.js and React.',
    'My current responsibilities include designing project structures in the early stages, developing shared components, collaborating with designers to structure components and build pages, and occasionally writing simple APIs when needed—handling the full spectrum of frontend development.',
    'At my previous company, I led the development of a frontend framework using Vue, designing and implementing common modules. After the framework was built, I continued handling incoming requirements, designing and implementing solutions, and creating example pages and documentation to enable faster development for other developers.',
    'In my personal projects, I focus on solving inconveniences through development. This includes creating a currency monitoring app for daily use, adding missing features to my favorite webtoon platform, aggregating special deals from various sites, and developing a disaster alert system with push notifications—building, deploying, and actively using these solutions.',
    <>
        I enjoy working beyond just frontend and also explore backend development. Recently, I have been building a backend server using Hono.js and
        developing
        <Link className='text-blue-500 hover:text-blue-500/50 px-1' href='https://github.com/B-HS/BeAlert'>
            BeAlert
        </Link>
        —a PWA app that delivers disaster alerts via push notifications—continuing to develop and experiment with exciting new technologies.
    </>,
]
