import { Fragment } from 'react'

export const history = {
    codinghub: {
        title: 'Korea Global Knowledge Network Co., Ltd.',
        subtitle: 'Former CodingHub, now Trainocate Korea (Merged)',
        job: 'Frontend Developer',
        working: 'March 2024 ~ Present',
        history: {
            flunti: {
                title: 'Development and Enhancement of Flunti.io Service',
                duration: 'March 2024 ~ Present',
                description: [
                    {
                        detail: 'Implemented common layout and pages',
                        explaination:
                            'Utilized HOC to add common logic and established a global layout, enabling fast and consistent page development.',
                    },
                    {
                        detail: 'Optimized images for faster page loading',
                        explaination:
                            'Collaborated with designers to use WebP format and Next.js Image component, reducing page load times from 5 seconds to under 1 second.',
                    },
                    {
                        detail: 'Designed reusable components like modals, buttons, and accordions',
                        explaination:
                            'Initially developed without libraries, but later componentized recurring elements to improve development efficiency.',
                    },
                    {
                        detail: 'Refactored project architecture (FSD) and introduced Storybook for maintainability',
                        explaination:
                            'Lack of structured architecture made maintenance difficult. Implementing FSD improved consistency and scalability, allowing developers to focus on coding.',
                    },
                    {
                        detail: 'Integrated HyperDX for server-side error tracking',
                        explaination:
                            'Next.js SSR debugging was challenging, requiring backend logs to be manually checked. Suggested and implemented Sentry/HyperDX for efficient bug tracking.',
                    },
                    {
                        detail: 'Integrated Z-Company video conferencing for large-scale live events',
                        explaination:
                            'Implemented Z-Company’s meeting/webinar feature in an SSR-based Next.js environment by leveraging CSR and dynamic imports for efficient code splitting.',
                    },
                    {
                        detail: 'Developed Notion-like editor for admin page with custom Tiptap plugins',
                        explaination:
                            'Enhanced Tiptap with plugins such as line placeholders, image resizer, table extender, element toolbar, and slash suggestions to replicate Notion’s UX.',
                    },
                ],
                stacks: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix-UI', 'React-Query', 'HyperDX', 'Tiptap', 'Framer Motion'],
            },
            B2BPage: {
                title: (
                    <Fragment>
                        <p>Development & Maintenance</p>
                        <p>for B2B Group Homepage</p>
                    </Fragment>
                ),
                duration: 'November 2024 ~ December 2024',
                description: [
                    {
                        detail: 'Implemented React-Query for concurrency & efficient traffic management',
                        explaination:
                            'Applied caching strategies for UX-critical pages and optimized revalidation ticks to ensure fast, stable caching.',
                    },
                    {
                        detail: 'Designed and built common components using Radix-UI',
                        explaination: 'Addressed rapid development constraints by utilizing a verified UI library to ensure functional stability.',
                    },
                    {
                        detail: 'Developed admin & operator pages for website management',
                        explaination:
                            'Resolved the issue of developers being solely responsible for site management by introducing an admin interface.',
                    },
                ],
                stacks: ['React.js', 'Vite', 'TypeScript', 'Radix-UI', 'React-Query', 'Tailwind CSS'],
            },
            codetest: {
                title: 'Built a Code Algorithm Testing Platform',
                duration: 'September 2024 ~ October 2024',
                description: [
                    { detail: 'Developed an MVP-stage algorithm testing platform', explaination: '' },
                    {
                        detail: 'Pilot-tested SWR for efficient caching',
                        explaination:
                            'While the frontend team primarily used React-Query, discussions on Next.js team’s SWR advantages led to a trial implementation.',
                    },
                    {
                        detail: 'Integrated CodeMirror for web IDE functionality',
                        explaination:
                            'After evaluating Monaco, CodeMirror, and ACE, selected CodeMirror for its strong React support and rapid MVP development.',
                    },
                    {
                        detail: 'Developed admin page for code management',
                        explaination:
                            'Replaced inefficient manual API submissions with a WYSIWYG editor powered by CodeMirror and SWR for easy problem creation.',
                    },
                ],
                stacks: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'SWR', 'CodeMirror'],
            },
            otherCompany: {
                title: 'Third-Party Website Development',
                duration: 'July 2024',
                description: [
                    {
                        detail: 'Designed project structure & common layout',
                        explaination:
                            'Implemented a route generator for consistent page routing and used FSD architecture for structured development.',
                    },
                    {
                        detail: 'Developed admin page for application forms',
                        explaination: 'Implemented XLSX conversion and a summary view for easy form management based on admin needs.',
                    },
                    {
                        detail: 'Designed and built API using Prisma + SQLite',
                        explaination: 'Chose Prisma and SQLite for a lightweight backend, allowing Next.js to handle full-stack responsibilities.',
                    },
                ],
                stacks: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'SQLite', 'shadcn/ui'],
            },
            lms: {
                title: 'LMS Development',
                duration: 'May 2024 ~ June 2024',
                description: [
                    {
                        detail: 'Adopted shadcn for rapid UI development',
                        explaination: 'With a 2-week deadline for UI/UX prototypes, opted for shadcn/ui to streamline component implementation.',
                    },
                    {
                        detail: 'Introduced FSD architecture',
                        explaination: 'Proposed and implemented FSD to establish project structure, improving scalability and collaboration.',
                    },
                    {
                        detail: 'Built custom video player using ReactPlayer',
                        explaination: 'Replaced a Video.js-based solution with ReactPlayer to align with project constraints and specifications.',
                    },
                    {
                        detail: 'Developed a universal table component using Tanstack Table',
                        explaination:
                            'Created a reusable table component with pagination and headers, simplifying table implementations across the project.',
                    },
                    {
                        detail: 'Wrote Storybook examples for key components',
                        explaination: 'Provided Storybook documentation for components like the table, easing onboarding for new developers.',
                    },
                    {
                        detail: 'Designed a standardized API fetching handler',
                        explaination: 'Refactored Axios-based fetching logic to enhance TypeScript support and improve API handling efficiency.',
                    },
                ],
                stacks: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'ReactPlayer', 'Tanstack Table/Query', 'Storybook'],
            },
        },
    },
    prosoft: {
        title: 'Prosoft',
        job: 'Fullstack Developer',
        working: 'February 2023 ~ February 2024',
        history: {
            solution: {
                title: 'Enhancing In-House Solution Framework',
                duration: 'September 2023 ~ February 2024',
                description: [
                    {
                        detail: 'Refactored core functions to optimize performance (~2x speed-up)',
                        explaination:
                            'Identified blocking API calls and redundant requests, optimizing frontend/backend processing to double API response speed.',
                    },
                    {
                        detail: 'Refactored dynamic search condition module',
                        explaination: 'Converted legacy Nexacro-based logic into a Vue-compatible system for automatic search condition generation.',
                    },
                    {
                        detail: 'Implemented WebSocket-based notifications & messaging',
                        explaination:
                            'Developed a global notification system using WebSockets to enhance user engagement and operational efficiency.',
                    },
                    {
                        detail: 'Developed PDF to image conversion & CMS-style dynamic boards',
                        explaination: 'Built a module for PDF image conversion and a dynamic board system for customizable content management.',
                    },
                ],
                stacks: [
                    'Vue3',
                    'TypeScript',
                    'Spring Boot',
                    'Fabric.js',
                    'VitePress',
                    'Chart.js',
                    'Express',
                    'Vite',
                    'Nodemailer',
                    'MyBatis',
                    'Ant Design',
                ],
            },
        },
    },
    keywordsstudios: {
        title: 'Keywords Studios',
        job: 'LQA Tester',
        working: 'July 2019 ~ Jan 2022 (6month remote work in Aug 2021 - Jan 2022)',
        history: {
            lqa: {
                title: 'Localization Quality Assurance Tester',
                duration: 'July 2019 ~ Jan 2022',
                description: [
                    {
                        detail: 'Checking game localization quality',
                        explaination:
                            'Checked the quality of game localization in various languages, including Korean, English, and Japanese and share issues with global team/developers on JIRA.',
                    },
                    {
                        detail: 'Game testing',
                        explaination: 'Tested games on various platforms, including PC, console, and mobile, and reported bugs on JIRA.',
                    },
                ],
                stacks: ['JIRA', 'Confluence', 'Microsoft Office', 'Excel'],
            },
            testedgames: {
                title: 'Tested Games',
                duration: 'July 2019 ~ Jan 2022',
                description: [
                    {
                        detail: 'Tested and published game builds, maintained game quality',
                        explaination:
                            'Bravely Default II, XLOG(In-house CMS soultion), Nier Re[in]carnation, FFBE WOTV, FFBE, Catlevania Grimoire of Souls, etc.',
                    },
                ],
                stacks: ['Nintendo Switch', 'iOS', 'Android', 'PC', 'PS4', 'Xbox'],
            },
        },
    },
}
