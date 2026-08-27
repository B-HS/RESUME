import { WORDS } from './words'

export const KOREAN_TRANSLATIONS: Record<(typeof WORDS)[number], string> = {
    FIRST_NAME: 'Hyunseok',
    LAST_NAME: 'Byun',
    FIRST_NAME_TRANSLATION: '현석',
    LAST_NAME_TRANSLATION: '변',
    JOB_TITLE: 'Frontend Engineer / AI Engineer',
    BLOG: 'https://blog.gumyo.net',
    EMAIL: 'hs@gumyo.net',
    LOCATION: '대한민국, 서울',
    GITHUB: 'https://github.com/B-HS',
    SEO_TITLE: '변현석 이력서 | Frontend Engineer',
    SEO_DESCRIPTION:
        '프론트엔드 엔지니어 변현석의 이력서입니다. Next.js, React, Vue, Spring Boot 기반 개발, 디자인 시스템 구축, 성능 최적화, AI 개발 자동화 및 클라우드 운영 경험을 소개합니다.',
    INTRODUCE:
        '프론트엔드 아키텍처 설계 \n 디자인 시스템 구축 및 문서화 \n 데이터 캐싱 최적화로 로딩 350ms -> 90ms 단축 \n AI 개발 자동화로 기능 개발 5일 -> 1.5일 단축 \n 디버깅 시간 1일 -> 반나절 단축 \n 1,000명 동시 접속 서비스 안정화',
    BIRTHDAY: '95. 07. 01',
    WORK_EXPERIENCE: 'Work Experience',
    SKILLS: 'Skills',
    PROJECTS: 'Projects',
    ETC: 'etc.',
    WORK_GLOBALKNOWLEDGE_NAME: '한국글로벌널리지네트웍(주)',
    WORK_GLOBALKNOWLEDGE_PERIOD: '24. 03. 18 - 26. 09. 30',
    WORK_GLOBALKNOWLEDGE_LOCATION: '대한민국, 서울',
    WORK_GLOBALKNOWLEDGE_ROLE: 'Frontend Engineer / AI Engineer',

    WORK_GLOBALKNOWLEDGE_FLUNTI_TITLE: 'Flunti',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_TITLE: '디자인 시스템',
    WORK_GLOBALKNOWLEDGE_AI_TITLE: 'AI 문서화',
    WORK_GLOBALKNOWLEDGE_STUDIO_TITLE: '스튜디오',
    WORK_GLOBALKNOWLEDGE_CMS_TITLE: '실시간 클래스 교육 시스템',

    WORK_GLOBALKNOWLEDGE_FLUNTI_DESCRIPTION:
        'SaaS 기반 프론트엔드 아키텍처 설계와 개발을 주도하며 15개 이상의 기업 사이트 운영 \n TanStack Query와 Next.js Fetch API 캐시를 통합해 DX를 높이고 페이지 로딩 시간 350ms -> 90ms 단축 \n 프록시 레이어 데이터 캐싱 최적화로 기준정보 전체 로딩 시간 100ms -> 65ms 단축 \n SEO를 위한 Metadata 및 JSON-LD 헬퍼 설계 및 구현',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_DESCRIPTION:
        'React 기반 컴포넌트 라이브러리 설계 및 구현, 디자이너와 협업하여 재사용 가능한 컴포넌트 20개 이상 개발 \n Storybook 도입 및 피드백 플러그인 개발 \n Next.js와 Storybook 기반 디자인 시스템 문서 사이트 구축 및 배포 \n 서비스 전반의 UI 일관성 확보 및 개발 효율 향상',
    WORK_GLOBALKNOWLEDGE_STUDIO_DESCRIPTION:
        'AI 기반 개발을 위한 디자인 시스템 기반 플랫폼 헬퍼 사이트 설계, 개발 및 배포 \n 페이지 생성 프롬프트와 자동화 파이프라인 설계 및 구현으로 기능 개발 기간 평균 5일 -> 1.5일 단축 \n 부서 간 협업을 위한 HTML 목업 생성기, 가이드 문서용 스테퍼 페이지, 기능 실현 가능성을 판단하는 AI 봇 구현',
    WORK_GLOBALKNOWLEDGE_AI_DESCRIPTION:
        'AI 기반 프론트엔드 개발을 위한 문서화 및 프롬프트를 설계하고 적용해 디버깅 시간 평균 1일 -> 반나절 단축 \n 기존 컨벤션과 아키텍처 패턴을 전수 분석해 Skill 15개 이상과 Command 6개 이상 작성 및 문서 배포 \n PR 분석 및 자동화 파이프라인 구현, 사람 리뷰 코멘트와 비교 검증해 사람이 검출한 항목 약 90% 재현',
    WORK_GLOBALKNOWLEDGE_CMS_DESCRIPTION:
        '동시 접속 1,000명 규모의 실시간 교육 플랫폼 핵심 프론트엔드 기능(Zoom Live 연동, 실시간 퀴즈, 게시판) 개발 \n Zoom Web SDK로 라이브 강의를 플랫폼에 임베드해 서비스 이탈 없는 원스톱 수강 환경 구축 \n 실시간 퀴즈 트래픽 집중 시 요청 흐름과 API 최적화로 CloudWatch 기준 ECS Task 평균 CPU 사용량 80% -> 40% 절감 \n 제한 시간과 시작 시점 동기화가 필요한 퀴즈 인터랙션 로직 안정화 및 디버깅',
    WORK_GLOBALKNOWLEDGE_FLUNTI_SITE: 'https://flunti.io',

    WORK_GLOBALKNOWLEDGE_FLUNTI_SKILLS: 'Next.js|React|Tailwind|TanStack Query|ECS',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_SKILLS: 'Nextjs|RadixUI|Tailwind|StoryBook',
    WORK_GLOBALKNOWLEDGE_STUDIO_SKILLS: 'Next.js|Drizzle|Docker|EC2',
    WORK_GLOBALKNOWLEDGE_AI_SKILLS: 'Claude code',
    WORK_GLOBALKNOWLEDGE_CMS_SKILLS: 'React|Tailwind|TanStack Query',

    WORK_PROSOFT_NAME: '프로소프트',
    WORK_PROSOFT_PERIOD: '23. 02. 06 - 24. 03. 01',
    WORK_PROSOFT_LOCATION: '대한민국, 창원',
    WORK_PROSOFT_ROLE: 'Fullstack Engineer',
    WORK_PROSOFT_MIGRATION_TITLE: '레거시 솔루션 재설계 및 고도화',
    WORK_PROSOFT_DBMIGRATION_TITLE: 'DB 전환',
    WORK_PROSOFT_MIGRATION_DESCRIPTION:
        'Nexacro 기반 레거시 솔루션을 Vue 3, TypeScript, Pinia 기반으로 재설계 \n 중복 API 호출을 제거하고 API 호출을 비동기 방식으로 최적화해 응답 속도 최대 2배 개선 \n 폼, 그리드, 검색 조건 등 핵심 기능을 모듈화해 재사용성 강화 \n WebSocket 알림 기능과 PDF.js, Fabric.js 기반 도면 관리 기능 구현 \n VitePress 기반 온보딩 문서 제작으로 신규 인력의 빠른 온보딩 지원',
    WORK_PROSOFT_DBMIGRATION_DESCRIPTION: '기존 Oracle DB 문법의 SQL 문을 ANSI 표준 SQL로 리팩터링하고 MyBatis Mapper에 적용 및 테스트',
    WORK_PROSOFT_MIGRATION_SKILLS: 'SpringBoot|Vue|Pinia',
    WORK_PROSOFT_DBMIGRATION_SKILLS: 'MyBatis|OracleDB|MariaDB|JAVA',

    WORK_KEYWORDSSTUDIO_NAME: 'Keywords Studio',
    WORK_KEYWORDSSTUDIO_PERIOD: '19. 07 - 22. 01',
    WORK_KEYWORDSSTUDIO_LOCATION: '일본, 도쿄',
    WORK_KEYWORDSSTUDIO_ROLE: 'LQA Tester',
    WORK_KEYWORDSSTUDIO_LQA_TITLE: '게임 LQA 및 온보딩 프로세스 개선',
    WORK_KEYWORDSSTUDIO_LQA_DESCRIPTION:
        '7개 프로젝트 이상의 LQA를 진행해 출시 완료 \n 한국어 인력 부족 상황에서 TF팀을 구성해 온보딩 지원과 테스팅을 병행하고, 온보딩 기간 2-3일 -> 1일 단축',
    WORK_KEYWORDSSTUDIO_LQA_SKILLS: 'Redmine|MS Excel|JIRA',

    WORK_TOY_NAME: '개인 프로젝트',
    WORK_TOY_PERIOD: '22. 11 - 현재',
    WORK_TOY_LOCATION: ' ',
    WORK_TOY_ROLE: 'Toys',
    WORK_TOY_BBLOG_TITLE: 'BBlog',
    WORK_TOY_WEBTOON_TITLE: 'Webtoon Bookmarker',
    WORK_TOY_KATARU_TITLE: 'kataru',
    WORK_TOY_BHUB_TITLE: 'b-hub',
    WORK_TOY_BBLOG_DESCRIPTION:
        '2022년부터 운영한 개인 블로그를 Vue, Svelte, Next.js로 전환하며 장기 유지보수 \n MDX 기반 게시글, 태그 필터와 검색, 댓글, Log 타임라인 등 콘텐츠 관리 기능 구현 \n Vercel 프론트엔드, b-hub 백엔드, MySQL, Cloudflare R2로 서비스 운영 구조 분리',
    WORK_TOY_WEBTOON_DESCRIPTION:
        '네이버 웹툰 메인에 북마크 탭을 주입하는 Chrome Web Store 배포 익스텐션 개발 및 운영 \n Content Script와 React Popup, chrome.storage.local을 구성해 사용자별 웹툰 북마크 관리 \n v1 -> v2 재구축으로 Manifest V2 -> V3, Chakra UI -> shadcn/ui, Vite 기반 빌드 -> Bun 빌드 파이프라인 전환',
    WORK_TOY_KATARU_DESCRIPTION:
        '다중 사용자 블로그 SaaS를 Hono, React SSR, Island 아키텍처로 설계 및 구현 \n 사용자별 서브패스 블로그와 관리용 CSR 애플리케이션 분리 \n HTML과 Markdown 양방향 변환 기반 에디터 및 Cloudflare R2용 Hono 기반 Sharp 이미지 변환 서버 구현',
    WORK_TOY_BHUB_DESCRIPTION:
        '8개 도메인의 개인 서비스를 통합하는 백엔드 허브 설계 및 운영 \n Bun, Hono, Drizzle, MySQL 기반으로 인증, 파일 처리, API, 스케줄링 기능 통합 \n RFC 4791 CalDAV 서버를 구현하고 1,704개 이상의 테스트로 핵심 도메인 동작 검증',
    WORK_TOY_BBLOG_SITE: 'https://blog.gumyo.net',
    WORK_TOY_WEBTOON_SITE: 'https://chromewebstore.google.com/detail/cnfglfaobnkgkcnagfbaeilbpkcjcanh',
    WORK_TOY_KATARU_SITE: 'https://kataru.dev',
    WORK_TOY_BHUB_SITE: 'https://github.com/B-HS/b-hub',
    WORK_TOY_BBLOG_SKILLS: 'Next.js|TypeScript|Drizzle|MySQL|better-auth',
    WORK_TOY_WEBTOON_SKILLS: 'Chrome MV3|Bun|React|shadcn/ui',
    WORK_TOY_KATARU_SKILLS: 'Hono|React|Cloudflare|Drizzle|MySQL',
    WORK_TOY_BHUB_SKILLS: 'Bun|Hono|Drizzle|MySQL|Cloudflare R2',

    ETC_CYBER_UNIVERSITY_PERIOD: '25. 03 - 27. 02 예정',
    ETC_CYBER_UNIVERSITY_DESCRIPTION: '고려사이버대학교 컴퓨터공학과 재학',
    ETC_FULLSTACK_COURSE_PERIOD: '22. 04 - 22. 10',
    ETC_FULLSTACK_COURSE_DESCRIPTION: '부산 동성 직업전문학교 풀스택 과정',
    ETC_AGRICULTURAL_HERITAGE_PERIOD: '19. 05',
    ETC_AGRICULTURAL_HERITAGE_DESCRIPTION: '제6회 동아시아 농업유산 학회 현장견학 한일 통역',
    ETC_YUMENOI_INTERNSHIP_PERIOD: '18. 09 - 19. 01',
    ETC_YUMENOI_INTERNSHIP_DESCRIPTION: '료칸 유메노이 인턴십',
    ETC_MASAN_UNIVERSITY_PERIOD: '14. 03 - 19. 02',
    ETC_MASAN_UNIVERSITY_DESCRIPTION: '마산대학교 관광일본어과',

    SKILLS_FRONTEND: 'Frontend',
    SKILLS_BACKEND: 'Backend',
    SKILLS_CLOUD: 'Cloud',
    SKILLS_INFRASTRUCTURE: 'Infrastructure',
}
