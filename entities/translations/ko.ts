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
    INTRODUCE:
        '아키텍처 설계 및 디자인 시스템 구축 등 폭넓은 개발 경험 \n AI 기반 자동화(PR리뷰, Docs, 페이지 생성)로 팀 생산성 향상 \n 대규모 트래픽 환경에서의 서비스 안정성 확보 경험 \n 개발에 있어서, 성능 최적화와 DX 향상을 우선목표로 함',
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
        'SaaS 기반 FE 전체 아키텍처링과 개발 주도 및 15+ 기업 사이트 운영 \n TanStack Query와 Next.js Fetch API cache 통합으로 DX 향상 및 페이지 로드 350ms 에서 최대 90ms로 단축 \n proxy-layer 캐싱 설계 보조 및 고도화로 proxy-layer 기준정보 로드속도 50% 향상 \n SEO를 위한 Metadata/JSON-LD Helper 설계 및 적용',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_DESCRIPTION:
        'React 기반 컴포넌트 라이브러리 시스템 설계와 구현 및 디자이너와 협업하여 +20개의 컴포넌트 개발 \n Storybook 적용 및 피드백 플러그인 개발 \n Next.js와 storybook을 이용한 디자인 시스템 문서화 및 배포 \n 향후 사용되는 사이트의 디자인 일관성 보장 및 개발 효율 향상',
    WORK_GLOBALKNOWLEDGE_STUDIO_DESCRIPTION:
        'AI Driven을 위한 디자인 시스템 기반 플랫폼 헬퍼 사이트 설계 개발 및 배포 \n 페이지 생성 프롬프트와 파이프라인 설계 및 개발 배포로 기능 개발 속도 300% 향상 \n 그 외 타 부서 협업을 위한 HTML mock 제너레이터, 가이드 문서를 위한 stepper가 포함된 페이지, 기능 생성 가능성 판단을 위한 AI 봇 등 구현',
    WORK_GLOBALKNOWLEDGE_AI_DESCRIPTION:
        '프론트엔드 AI Driven을 위한 AI 문서화 및 프롬프트 설계 및 적용 후 기능 개발/디버깅 속도 100% 향상 \n 기존 컨벤션과 아키텍처 패턴 등을 전체 분석하여 Skill(15+)과 Command(6+) 다수 작성 및 문서 배포 \n 자동 PR 리뷰를 위한 PR 전체 분석 및 PR 자동화 및 기계 검출률 약 90% 달성',
    WORK_GLOBALKNOWLEDGE_CMS_DESCRIPTION:
        '동시접속 1,000명 규모의 실시간 교육 플랫폼 FE 핵심 기능(Zoom Live 연동, 실시간 퀴즈, 게시판) 개발 \n Web SDK 기반 Zoom 라이브 임베딩 연동으로 플랫폼 이탈 없는 원스톱 실시간 강의 환경 구축 \n 동시 접속 트래픽이 집중되는 실시간 퀴즈의 요청 흐름 및 API 최적화 협업을 통해 CloudWatch 기준 ECS 전체 Task 평균 CPU 사용량 80% -> 40%로 절감 \n 제한시간 및 시작 타이밍 동기화가 필요한 퀴즈 인터랙션 로직 안정화 및 디버깅',
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
        '넥사크로 기반 레거시 솔루션을 Vue3 + TypeScript + Pinia 기반으로 재설계 \n 중복 API 호출 제거 및 API 호출을 비동기처리도 최적화하여 응답속도 최대 2배 개선 \n 폼/그리드/검색조건 등 핵심 기능을 모듈화하여 재사용성 강화 \n WebSocket를 이용한 알림기능과 PDF.js, Fabric.js 등을 이용하여 도면 관리 기능 제작\n Vitepress를 이용한 온보딩 문서 제작으로 신규인원의 빠른 온보딩 지원',
    WORK_PROSOFT_DBMIGRATION_DESCRIPTION: '기존 ORACLE DB 문법의 SQL문을 ANSI 표준의 SQL로 리팩터링 및 MyBatis mapper에 적용 및 테스트',
    WORK_PROSOFT_MIGRATION_SKILLS: 'SpringBoot|Vue|Pinia',
    WORK_PROSOFT_DBMIGRATION_SKILLS: 'MyBatis|OracleDB|MariaDB|JAVA',

    WORK_KEYWORDSSTUDIO_NAME: 'Keywords Studio',
    WORK_KEYWORDSSTUDIO_PERIOD: '19. 07 - 22. 01',
    WORK_KEYWORDSSTUDIO_LOCATION: '일본, 도쿄',
    WORK_KEYWORDSSTUDIO_ROLE: 'LQA Tester',
    WORK_KEYWORDSSTUDIO_LQA_TITLE: '게임 LQA 및 온보딩 프로세스 개선',
    WORK_KEYWORDSSTUDIO_LQA_DESCRIPTION:
        '다수 프로젝트(5+)LQA 진행 및 출시 완료 \n KR인력이 부족한 상황에서 TF팀 구성 및 온보딩 보조와 테스팅 동시진행 및 온보딩 인원 소요시간 2-3일에서 1일로 단축',
    WORK_KEYWORDSSTUDIO_LQA_SKILLS: 'Redmine|MS Excel|JIRA',
}
