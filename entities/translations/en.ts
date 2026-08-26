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
        'Broad engineering scope with architecture & design systems \n Enhanced cross-functional collaboration using modern AI \n Focused on performance optimization and better DX',
    WORK_EXPERIENCE: 'Work Experience',
    WORK_GLOBALKNOWLEDGE_NAME: 'Global Knowledge Korea',
    WORK_GLOBALKNOWLEDGE_PERIOD: '2024. 02 - 2026. 10',
    WORK_GLOBALKNOWLEDGE_LOCATION: 'Seoul, South Korea',
    WORK_GLOBALKNOWLEDGE_ROLE: 'Frontend Engineer / AI Engineer',

    WORK_GLOBALKNOWLEDGE_FLUNTI_TITLE: 'Flunti',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_TITLE: 'Design System',
    WORK_GLOBALKNOWLEDGE_AI_TITLE: 'AI Documentation',
    WORK_GLOBALKNOWLEDGE_STUDIO_TITLE: 'Studio',

    WORK_GLOBALKNOWLEDGE_FLUNTI_DESCRIPTION:
        'Architected end-to-end FE architecture for a SaaS platform and operated 15+ enterprise client sites \n Unified TanStack Query and Next.js Fetch API cache to improve DX and page load speed by up to 300% \n Assisted in designing proxy-layer caching and enhanced the logic, improving page load speed by 50% \n Designed and implemented Metadata/JSON-LD Helper for SEO optimizaion',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_DESCRIPTION:
        'Collaborated with designer, designed and implemented the design system architecture and built 20+ reusable components \n Implemented Storybook and developed a custom feedback plugin for Storybook \n Built and deployed a documentation site with Next.js and storybook \n Ensured UI consistency across sites and significantly improved DX',
    WORK_GLOBALKNOWLEDGE_STUDIO_DESCRIPTION:
        'Architected, built, and deployed the platform helper site based on the design system for AI-driven development \n Engineered page-generation prompts and automated pipelines, boosting development speed by 300% \n Built an HTML mock generator, stepper-based guide pages, and an AI feasibility bot to streamline cross-functional collaboration',
    WORK_GLOBALKNOWLEDGE_AI_DESCRIPTION:
        'Engineered AI prompt frameworks and documentation for AI-driven development, increasing development/debugging speed by 100% \n Analyzed existing conventions and architecture patterns to author and deploy 15+ skills and 6+ commands \n Built an automated PR analysis pipeline to streamline and automate code reviews',
}
