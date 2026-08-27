import { WORDS } from './words'

export const ENGLISH_TRANSLATIONS: Record<(typeof WORDS)[number], string> = {
    FIRST_NAME: 'Hyunseok',
    LAST_NAME: 'Byun',
    FIRST_NAME_TRANSLATION: 'Hyunseok',
    LAST_NAME_TRANSLATION: 'Byun',
    JOB_TITLE: 'Frontend Engineer / AI Engineer',
    BLOG: 'https://blog.gumyo.net',
    EMAIL: 'hs@gumyo.net',
    LOCATION: 'Seoul, South Korea',
    GITHUB: 'https://github.com/B-HS',
    INTRODUCE:
        'Frontend architecture design \n Design system development and documentation \n Reduced load time from 350ms -> 90ms through data caching optimization \n Reduced feature delivery time from 5 days -> 1.5 days through AI automation \n Reduced debugging time from 1 day -> half a day \n Service stabilization for 1,000 concurrent users',
    BIRTHDAY: '95. 07. 01',
    WORK_EXPERIENCE: 'Work Experience',
    SKILLS: 'Skills',
    PROJECTS: 'Projects',
    ETC: 'etc.',
    WORK_GLOBALKNOWLEDGE_NAME: 'Global Knowledge Korea',
    WORK_GLOBALKNOWLEDGE_PERIOD: '24. 03. 18 - 26. 09. 30',
    WORK_GLOBALKNOWLEDGE_LOCATION: 'Seoul, South Korea',
    WORK_GLOBALKNOWLEDGE_ROLE: 'Frontend Engineer / AI Engineer',

    WORK_GLOBALKNOWLEDGE_FLUNTI_TITLE: 'Flunti',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_TITLE: 'Design System',
    WORK_GLOBALKNOWLEDGE_AI_TITLE: 'AI Documentation',
    WORK_GLOBALKNOWLEDGE_STUDIO_TITLE: 'Studio',
    WORK_GLOBALKNOWLEDGE_CMS_TITLE: 'Real-time Live Classroom Platform',

    WORK_GLOBALKNOWLEDGE_FLUNTI_DESCRIPTION:
        'Led frontend architecture and delivery for a SaaS platform serving 15+ enterprise sites \n Integrated TanStack Query and Next.js Fetch API caching to improve DX and reduce page load time from 350ms -> 90ms \n Optimized proxy-layer data caching, reducing total reference-data load time from 100ms -> 65ms \n Built reusable Metadata and JSON-LD helpers for SEO',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_DESCRIPTION:
        'Designed and implemented a React-based component library, collaborating with a designer to build 20+ reusable components \n Adopted Storybook and developed a feedback plugin \n Built and deployed a design system documentation site with Next.js and Storybook \n Ensured UI consistency across sites and improved development efficiency',
    WORK_GLOBALKNOWLEDGE_STUDIO_DESCRIPTION:
        'Designed, developed, and deployed a design-system-based platform helper site for AI-driven development \n Designed and implemented page-generation prompts and automated pipelines, reducing average feature development time from 5 days -> 1.5 days \n Built an HTML mock generator, stepper-based guide pages, and an AI bot for assessing feature feasibility to support cross-functional collaboration',
    WORK_GLOBALKNOWLEDGE_AI_DESCRIPTION:
        'Designed and applied documentation and prompts for AI-driven frontend development, reducing average debugging time from 1 day -> half a day \n Analyzed existing conventions and architecture patterns to create and distribute 15+ skills and 6+ commands \n Built a PR analysis and automation pipeline, reproducing approximately 90% of the issues identified in human review comments through comparative validation',
    WORK_GLOBALKNOWLEDGE_CMS_DESCRIPTION:
        'Developed core frontend features including Zoom Live integration, real-time quizzes, and community boards for a live training platform supporting 1,000 concurrent users \n Embedded live lectures in the platform with Zoom Web SDK, providing a seamless one-stop learning experience \n Optimized request flow and APIs during real-time quiz traffic spikes, reducing ECS Task average CPU utilization from 80% -> 40% based on CloudWatch \n Stabilized and debugged quiz interaction logic requiring synchronized time limits and start times',
    WORK_GLOBALKNOWLEDGE_FLUNTI_SITE: 'https://flunti.io',
    WORK_GLOBALKNOWLEDGE_FLUNTI_SKILLS: 'Next.js|React|Tailwind|TanStack Query|ECS',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_SKILLS: 'Nextjs|RadixUI|Tailwind|StoryBook',
    WORK_GLOBALKNOWLEDGE_STUDIO_SKILLS: 'Next.js|Drizzle|Docker|EC2',
    WORK_GLOBALKNOWLEDGE_AI_SKILLS: 'Claude code',
    WORK_GLOBALKNOWLEDGE_CMS_SKILLS: 'React|Tailwind|TanStack Query',

    WORK_PROSOFT_NAME: 'Prosoft',
    WORK_PROSOFT_PERIOD: '23. 02. 06 - 24. 03. 01',
    WORK_PROSOFT_LOCATION: 'Changwon, South Korea',
    WORK_PROSOFT_ROLE: 'Fullstack Engineer',
    WORK_PROSOFT_MIGRATION_TITLE: 'Legacy Solution Re-architecture and Enhancement',
    WORK_PROSOFT_DBMIGRATION_TITLE: 'DB Migration',
    WORK_PROSOFT_MIGRATION_DESCRIPTION:
        'Re-architected a Nexacro-based legacy solution with Vue 3, TypeScript, and Pinia \n Eliminated redundant API calls and optimized API requests through asynchronous processing, improving response speed by up to 2x \n Modularized core features including forms, grids, and search conditions to improve reusability \n Built WebSocket notifications and drawing management features with PDF.js and Fabric.js \n Created VitePress-based onboarding documentation to support rapid onboarding for new team members',
    WORK_PROSOFT_DBMIGRATION_DESCRIPTION:
        'Refactored SQL statements written in Oracle DB syntax to ANSI-standard SQL, then applied and tested them in MyBatis mappers',
    WORK_PROSOFT_MIGRATION_SKILLS: 'SpringBoot|Vue|Pinia',
    WORK_PROSOFT_DBMIGRATION_SKILLS: 'MyBatis|OracleDB|MariaDB|JAVA',

    WORK_KEYWORDSSTUDIO_NAME: 'Keywords Studio',
    WORK_KEYWORDSSTUDIO_PERIOD: '19. 07 - 22. 01',
    WORK_KEYWORDSSTUDIO_LOCATION: 'Tokyo, Japan',
    WORK_KEYWORDSSTUDIO_ROLE: 'LQA Tester',
    WORK_KEYWORDSSTUDIO_LQA_TITLE: 'Game LQA and Onboarding Process Improvement',
    WORK_KEYWORDSSTUDIO_LQA_DESCRIPTION:
        'Conducted LQA for 7 projects and supported their successful releases \n Formed a task force amid a shortage of Korean-language personnel, supporting onboarding while testing in parallel and reducing onboarding time from 2-3 days -> 1 day',
    WORK_KEYWORDSSTUDIO_LQA_SKILLS: 'Redmine|MS Excel|JIRA',
}
