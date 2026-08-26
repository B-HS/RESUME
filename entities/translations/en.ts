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
        'Broad engineering scope with architecture & design systems \n Enhanced cross-functional collaboration using AI-driven automation (PR review, docs, page generation) \n Experienced in large-scale application development for stability \n Focused on performance optimization and better DX',
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
        'Architected end-to-end FE architecture for a SaaS platform and operated 15+ enterprise client sites \n Unified TanStack Query and Next.js Fetch API cache to improve DX, cutting page load time from 350ms down to as low as 90ms \n Assisted in designing proxy-layer caching and enhanced the logic, improving proxy-layer base-info load speed by 50% \n Designed and implemented Metadata/JSON-LD Helper for SEO optimization',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_DESCRIPTION:
        'Collaborated with designer, designed and implemented the design system architecture and built 20+ reusable components \n Implemented Storybook and developed a custom feedback plugin for Storybook \n Built and deployed a documentation site with Next.js and Storybook \n Ensured UI consistency across sites and significantly improved DX',
    WORK_GLOBALKNOWLEDGE_STUDIO_DESCRIPTION:
        'Architected, built, and deployed the platform helper site based on the design system for AI-driven development \n Engineered page-generation prompts and automated pipelines, boosting development speed by 300% \n Built an HTML mock generator, stepper-based guide pages, and an AI feasibility bot to streamline cross-functional collaboration',
    WORK_GLOBALKNOWLEDGE_AI_DESCRIPTION:
        'Engineered AI prompt frameworks and documentation for AI-driven development, increasing development/debugging speed by 100% \n Analyzed existing conventions and architecture patterns to author and deploy 15+ skills and 6+ commands \n Built an automated PR analysis pipeline to streamline and automate code reviews, achieving ~90% detection accuracy',
    WORK_GLOBALKNOWLEDGE_CMS_DESCRIPTION:
        'Developed core FE features (embedded Zoom Live, real-time timed quiz, and community boards) for a live training platform supporting 1,000+ concurrent users \n Integrated Zoom Web SDK directly into the platform to provide a seamless, in-app live lecture experience \n Collaborated on API and client request optimization during quiz traffic spikes, reducing average ECS Task CPU utilization from 80% to 40% on CloudWatch \n Engineered and stabilized synchronized state management and timer logic for scheduled quiz evaluations',
    WORK_GLOBALKNOWLEDGE_FLUNTI_SITE: 'https://flunti.io',

    WORK_PROSOFT_NAME: 'Prosoft',
    WORK_PROSOFT_PERIOD: '23. 02. 06 - 24. 03. 01',
    WORK_PROSOFT_LOCATION: 'Changwon, South Korea',
    WORK_PROSOFT_ROLE: 'Fullstack Engineer',
    WORK_PROSOFT_MIGRATION_TITLE: 'Legacy Solution Re-architecture and Enhancement',
    WORK_PROSOFT_DBMIGRATION_TITLE: 'DB Migration',
    WORK_PROSOFT_MIGRATION_DESCRIPTION:
        'Re-architected a legacy Nexacro-based solution into a Vue3 + TypeScript + Pinia-based solution \n Removed redundant API calls and optimized asynchronous API calls, improving response time by up to 2x \n Modularized core features such as forms, grids, and search conditions for better reusability \n Implemented notification features using WebSocket and document management using PDF.js and Fabric.js \n Created onboarding documentation using Vitepress to facilitate rapid onboarding of new team members',
    WORK_PROSOFT_DBMIGRATION_DESCRIPTION:
        'Refactored existing ORACLE DB SQL statements to ANSI standard SQL and applied them to MyBatis mappers for testing',

    WORK_KEYWORDSSTUDIO_NAME: 'Keywords Studio',
    WORK_KEYWORDSSTUDIO_PERIOD: '19. 07 - 22. 01',
    WORK_KEYWORDSSTUDIO_LOCATION: 'Tokyo, Japan',
    WORK_KEYWORDSSTUDIO_ROLE: 'LQA Tester',
    WORK_KEYWORDSSTUDIO_LQA_TITLE: 'Game LQA and Onboarding Process Improvement',
    WORK_KEYWORDSSTUDIO_LQA_DESCRIPTION:
        'Conducted LQA for multiple projects (5+) and successfully released them \n Assisted in onboarding and testing simultaneously due to a shortage of KR personnel, reducing onboarding time from 2-3 days to 1 day',
}
