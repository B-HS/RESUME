import { Fragment } from 'react'

export const history = {
    codinghub: {
        title: '한국글로벌널리지네트웍(주)',
        subtitle: '前 코딩허브, 現 Trainocate Korea, 고용 인계',
        job: 'Frontend developer',
        working: '2024. 03 ~',
        history: {
            designsystem: {
                title: '디자인 시스템 구축',
                duration: '2025. 02 ~',
                description: [
                    {
                        detail: '파일 시스템을 기반으로 한 SSG 동적 라우팅 구현 및 Docs 페이지 작성',
                        explaination:
                            '빠른 디자인 시스템 Docs 구축을 위해 fs와 mdx 렌더러를 활용하여 파일 시스템을 기반으로 한 SSG 동적 라우팅을 구현했습니다.  이에따라 단지 mdx파일을 추가하는 것 만으로도 Docs페이지의 메뉴, 라우팅을 자동으로 생성할 수 있게 되었습니다.',
                    },
                    {
                        detail: '아이콘 셋 관리 및 컴포넌트 자동생성',
                        explaination:
                            '이번 디자인시스템의 주요 포인트로 아이콘 셋 관리 및 컴포넌트 자동생성이 있습니다.  디자이너분이 제공한 아이콘 셋을 Node를 이용하여 자동으로 컴포넌트화 시키는 작업을 진행하였습니다.',
                    },
                    {
                        detail: 'GitHub Actions을 활용한 GitHub Pages CI/CD 구축',
                        explaination:
                            '기존에는 ECS/EC2를 사용하여 배포했으나, 이번 프로젝트에서는 EC2 인스턴스를 운영할 정도의 리소스가 필요하지 않았습니다.  따라서 GitHub Actions을 활용해 GitHub Pages 배포를 위한 CI/CD 파이프라인을 구축하였습니다.',
                    },
                ],
                stacks: ['Typescript', 'Nextjs', 'Tailwind CSS', 'MDX', 'Nodejs', 'Radix UI'],
            },
            flunti: {
                title: 'flunti.io 서비스 개발 및 고도화',
                duration: '2024.03 ~',
                description: [
                    {
                        detail: '공통 레이아웃 작성 및 페이지 구현',
                        explaination:
                            'HOC를 활용하여 공통 로직을 추가하고, 전역 레이아웃을 설정하여 빠르고 일관된 페이지를 작성할 수 있게 되었습니다.',
                    },
                    {
                        detail: '이미지 최적화를 통한 페이지 로딩속도 개선',
                        explaination:
                            '디자이너분과의 협업을 통하여, Webp결과물을 이용 및 Next.js의 image컴포넌트를 이용하여 로딩 속도를 개선하였습니다.  실제 큰 이미지가 들어가는 페이지 로딩 속도가 최대 5초까지 걸리던 문제를 1초 이하로 단축하였습니다.',
                    },
                    {
                        detail: '재사용을 위해 모달, 버튼, 아코디언 등 공통 컴포넌트 설계 및 작성',
                        explaination:
                            '프로젝트 시작 시, 초기에 라이브러리를 사용하지 않고 개발을 진행하였습니다.  컨벤션에 맞춰 개발하던 도중, 반복되는 컴포넌트 작성을 피하기위하여 공통되는 기능들을 따로 컴포넌트화 시켜서  개발자들의 개발 효율성을 높였습니다.',
                    },
                    {
                        detail: '유지보수 속도 향상을 위해 프로젝트 아키텍처 변환(FSD) 및 Storybook 도입',
                        explaination:
                            '확립된 아키텍처가 존재하지 않은 상태에서, 유지보수를 하는 것은 매우 극악의 난이도를 자랑하였습니다.  이에 따른 FSD도입으로 아키텍처가 개선되었으며, 개발자들이 일관되고 확장에대한 추가적인 고민 없이 개발에 집중할 수 있도록 개선되었습니다.',
                    },
                    {
                        detail: '서버사이드의 에러 추적을 위한 HyperDX 도입',
                        explaination:
                            '백엔드 파트와 협업하며 항상 문제였던 것은 Next.js SSR에서의 문제 파악이었습니다. 서버 사이드 페이지의 로깅은 백엔드 담당자분이 하나씩 직접 확인해야 하는 상황에서, sentry, hyperdx등 에러 로깅 솔루션 도입을 제안하고 이에따라 버그 추적을 효율적으로 할 수 있게 개선되었습니다.',
                    },
                    {
                        detail: '대규모 라이브를 위한 Z사 화상 회의 서비스 연동',
                        explaination:
                            'SSR을 사용하는 Next.js 환경에서 Z사의 미팅/웨비나 기능을 구현하려면 추가적인 접근 방식이 필요했습니다. 이에따라 CSR방식을 효율적으로 활용하기 위해 dynamic import를 이용한 코드 스플리팅으로 Z사의 미팅/웨비나를 구현하였습니다.',
                    },
                    {
                        detail: '어드민 페이지 사용자 요청에 의해 Tiptap 플러그인을 제작하여 notion-like 에디터 구현 및 적용',
                        explaination:
                            '사용자의 UX, 디자이너분의 요청으로 에디터를 notion과 비슷한 형태로 구현하는 과제가 주어졌습니다.  이에따라 기존에 사용하던 Tiptap을 활용한 에디터에 line placeholder, image-resizer, table-extender, element-toolbar, slash-suggestion 등의 플러그인을 작성하여 노션과 거의 같은 사용자 UX를 달성할 수 있었습니다.',
                    },
                ],
                stacks: ['Next.js', 'TypeScript', 'Tailwindcss', 'Radix-UI', 'React-Query', 'HyperDX', 'Tiptap', 'Framer-Motion'],
            },
            B2BPage: {
                title: (
                    <Fragment>
                        <p>B2B그룹 사용자를 위한</p>
                        <p>홈페이지 개발 및 유지보수</p>
                    </Fragment>
                ),
                duration: '2024. 11 ~ 2024. 12',
                description: [
                    {
                        detail: '동시성 및 효율적인 트래픽 관리를 위하여 react-query도입',
                        explaination:
                            'UX 관점에서 반드시 캐싱이 필요한 페이지들의 효율적인 캐싱 전략을 적용하고, CRUD의 최신 상태 반영을 위한 Revalidation Tick 최적화를 수행하여, 전역적으로 빠르고 안정적인 캐싱 관리가 가능해졌습니다.',
                    },
                    {
                        detail: 'Radix-UI를 통한 공통 컴포넌트 설계 및 구현',
                        explaination:
                            '빠른 개발의 가장 큰 문제는 테스트 부족이었습니다.  최대한 검증된 UI 라이브러리를 사용하여 빠르게 동작에 문제 없는 컴포넌트를 구현할 수 있었습니다.',
                    },
                    {
                        detail: '관리를 위한 어드민 페이지 / 운영자 페이지 작성',
                        explaination:
                            'B2B사이트 운영에 있어서 가장 주요한 문제는 관리의 주체가 개발자들에게 있었다는 것입니다.  이것을 해결하기위하여 어드민 페이지를 작성하였습니다.',
                    },
                ],
                stacks: ['Reactjs', 'vite', 'TypeScript', 'Radix-UI', 'React-Query', 'Tailwindcss'],
            },
            codetest: {
                title: '코드 알고리즘 테스트 사이트 구축',
                duration: '2024. 09 ~ 2024. 10',
                description: [
                    { detail: 'MVP 단계의 코드 알고리즘 테스트 사이트 구현', explaination: '' },
                    {
                        detail: '효율적인 캐싱을 위하여 시범적으로 SWR도입 및 사용',
                        explaination:
                            '프론트 팀은 react-query를 메인으로 사용하고있었습니다.  하지만 Next.js팀의 SWR은 어떤 이점을 가지고있는가? 라는 토론이 생기고, 그에따라 시범적으로 도입하게 되었습니다.',
                    },
                    {
                        detail: '웹 IDE 구현을 위하여 code mirror도입',
                        explaination:
                            'Monaco, CodeMirror, ACE 등 많은 선택지, 또한 처음부터 다시 구현 하는 것도 범위에 포함되어있었으나, MVP 단계의 빠른 개발을 위하여, 그리고 react에 대해서의 레퍼런스가 많은 code mirror를 사용하게 되었습니다',
                    },
                    {
                        detail: '코드 관리를 위하여 어드민 페이지 작성 및 구현',
                        explaination:
                            '운영자가 문제 작성을 위하여 API를 여러번 사용하여 올리는 것은 매우 비효율 적이였습니다.  Code mirror와 SWR을 이용하여 코드에디팅이 가능한 위지윅에디터등을 구현하여 문제 제출에 수월하게끔 페이지를 작성하였습니다.',
                    },
                ],
                stacks: ['Reactjs', 'vite', 'TypeScript', 'Tailwindcss', 'SWR', 'CodeMirror'],
            },
            otherCompany: {
                title: '타사 웹사이트 개발',
                duration: '2024. 07',
                description: [
                    {
                        detail: '프로젝트 구조, 공통 레이아웃 설계 및 작성',
                        explaination:
                            'Route generater를 작성하여 일관된 페이지라우팅, FSD를 이용한 확립된 아키테쳐 사용으로 개발 환경을 개선하였습니다.',
                    },
                    {
                        detail: '지원서 페이지를 위한 어드민 페이지 설계 및 작성',
                        explaination:
                            '어드민 페이지를 운용하는데 있어서, 데이터를 엑셀로 필요로하는 요구에 따라 JSON을 XLSX로 변환하는 모듈 개발과 기능 구현, 지원서를 한 눈에 보고 출력할 수 있는페이지 등을 구현하여 어드민 사용자의 편의성을 향상시켰습니다.',
                    },
                    {
                        detail: 'Prisma + SQLite를 이용한 api 설계 및 작성',
                        explaination:
                            '규모가 크지 않은 상태의 프로덕트인 점을 감안, SQLite와 Prisma를 이용하여 API를 구현하였습니다.  이에따라 별도의 백엔드없이 Next.js단독으로 프로젝트를 운영할 수 있게 되었습니다.',
                    },
                ],
                stacks: ['Next.js', 'TypeScript', 'Tailwindcss', 'Prisma', 'Sqlite', 'shadcn/ui'],
            },
            lms: {
                title: 'LMS 개발',
                duration: '2024.05 ~ 2024.06',
                description: [
                    {
                        detail: '한정적 시간에 따라 빠른 개발을 위한 shadcn도입',
                        explaination:
                            'UI 및 기능 시안이 2주안에 나와야하는 상황이였습니다.  디자이너분과의 협의하여 이미 구현된 UI라이브러리를 사용하기로 결정하였으며 shadcn/ui를 제안 후 체용되었습니다.  이후 preset활용을 이용하여 빠르게 개발하는 것이 가능해졌습니다.',
                    },
                    {
                        detail: 'FSD 아키텍처 도입',
                        explaination:
                            '기존에 체계가 잡혀있지 않았던 아키텍처를 FSD도입을 제안으로 채용.  이에따라 프로젝트의 구조가 명확해지고, 개발자들간의 협업이 원활해졌습니다.',
                    },
                    {
                        detail: 'ReactPlayer를 이용한 플레이어 설계 및 작성',
                        explaination:
                            '기존에 Next.js에서 쓰던 videojs로 작성된 플레이어는 적용이 힘들며, 컴포넌트가 dash라이브로리에 종속되어 복호화가 필수적으로 적용되는 상태였습니다.  제한된 시간에서 이를 분석하고 이식하는 것은 불가능하다 판단하여 react player를 이용하여 디자인 시안과 기획에 맞는 비디오 플레이어를 구현해내었습니다.',
                    },
                    {
                        detail: 'Tanstack table을 이용하여 범용 테이블 컴포넌트 설계 및 작성',
                        explaination:
                            '디자이너분이 내려주시는 디자인 시안, 그리고 사용되는 기능 자체는 명확하였습니다.  이에따라 자주 구현되어 쓰이는 기능들 (Pagination, Header/Rows 등)을 단지 Column, Data만 정의하면 사용할 수 있는 컴포넌트를 작성하였습니다.',
                    },
                    {
                        detail: '일부 컴포넌트 예시를 위한 Storybook 작성',
                        explaination:
                            '공통 컴포넌트로 Table 컴포넌트를 작성하였으나 예시가 없다면 사용이 어느정도 힘들 것이라고 판단하였습니다.  빠르게 storybook을 이용하여 Table예제를 작성할 수 있었으며 협업하시는 개발자분들도 쉽게 적응 및 사용할 수 있게 되었습니다.',
                    },
                    {
                        detail: '공통 Fetching API함수 설계 및 작성',
                        explaination:
                            '기존에는 Axios 및 Axios Interceptor를 활용하여 config를 확장하는 방식으로 Fetching을 처리하고 있었습니다. 이에 반환값의 type관련으로 불편함을 겪게되어 이 instance를 감싸며 request/response의 type값을 지정할 수 있는 handler를 작성하여 개발 효율성을 높였습니다.',
                    },
                ],
                stacks: ['Next.js', 'TypeScript', 'Tailwindcss', 'shadcn/ui', 'ReactPlayer', 'Tanstack-Table/Query', 'Storybook'],
            },
        },
    },
    prosoft: {
        title: '프로소프트',
        job: 'Fullstack developer',
        working: '2023. 02 ~ 2024. 02',
        history: {
            solution: {
                title: '자사 프레임워크 고도화',
                duration: '2023.09 ~ 2024. 02',
                description: [
                    {
                        detail: '공통 함수 로직 최적화 및 로드시간 단축(약 2배)을 위한 프레임워크단 함수 리펙터링',
                        explaination:
                            '솔루션에서 사용되는 기존 로직중, 작동 속도가 느린 API를 살펴보면 대부분 fetching의 블록킹이 발생하는 상황이었습니다.  또한 불필요한 API call이 이루어지는 경우도 발생합니다.  백엔드단의 로직을 확인하고 순차적 로딩이 필요없는 로직의 경우 Promise로 처리, 혹은 수만건의 후가공을 하는 부분인 경우 백엔드의 로직이나 프론트의 후처리 로직을 변경하여 속도를 향상시켰습니다.  예를들어 Fetching을 Promise로 묶어 처리하여 약 2배의 속도 향상을 달성하였습니다.',
                    },
                    {
                        detail: '날짜, 드롭박스, 세부검색 모달 등이 포함된 검색조건 동적 생성 모듈 리펙터링',
                        explaination:
                            '솔루션의 주요 기능 중 백엔드의 값을 받아 검색 조건을 자동으로 생성하는 로직이 있습니다. 기존에 Nexacro에서 사용하던 로직이라 호환이 되지 않는 이슈가 있어서 백엔드 로직 확인 후 Vue에서 사용할 수 있도록 직접 재구현하였습니다.',
                    },
                    {
                        detail: '웹소켓을 이용한 전역 모듈 구현 및 쪽지, 알람 구현',
                        explaination:
                            '솔루션 영업 중의 제안사항으로 사용자행동에 따른 알람을 보낼 수 있는 기능을 제시하였습니다.  스프링부트의 WS과 프론트단의 WS을 이용하여 전역 알람과 알람 모음창, 메일함 알람 등을 구현하였습니다.',
                    },
                    {
                        detail: '폼, 그리드, 차트, 웹소켓, 메일링 등 개발자가 바로 사용가능한 샘플 작성',
                        explaination:
                            '검색조건 동적생성에서 처리되지 않는 로직은 수동으로 구현하여야했습니다.  이에따라 프론트엔드/백엔드 템플릿을 미리 작성하고 제공하여 어느정도 일관성있는 개발 환경을 제공하였습니다.',
                    },
                    {
                        detail: 'PDF를 이미지로 변환하는 모듈 개발, CMS형 게시판 설계 및 구현',
                        explaination:
                            'PDF.js 를 이용한 간단한 이미지 내보내기 기능, 그리고 사용자 요구에서 어느정도 커스텀이 되는 게시판을 무한대로 만들고 싶다는 요청이 있어서 저장된 값 들을 이용하여 동적으로 게시판을 생성하는 로직을 작성하였습니다.',
                    },
                    {
                        detail: 'fabric.js를 이용한 이미지 수정/저장 기능 모듈 설계 및 도면관리 모듈 구현',
                        explaination:
                            '고도화 사항 중 도면의 수정사항 등을 바로 표기하여 저장하는 기능이 있었습니다.   fabric.js를 이용하여 기존 이미지 + 수정사항을 그리고 저장하는 기능을 구현하였습니다.',
                    },
                    {
                        detail: 'express + vue를 활용하여 모듈 난독화 + 데모 파일 배포 페이지 설계 및 구현',
                        explaination:
                            '솔루션을 라이센스로 판매하는 경우가 있었습니다.  이에따라 핵심 모듈을 단순 최소화 시키는 것이이 아닌 수정이 거의 불가능하게끔 난독화하는 방식이 필요하였습니다. 이에따라 express로 파일을 받아 JS로 난독화 및 만료기간을 설정, 핵심모듈을 서빙 및 서빙 결과를 저장하는 페이지를 작성하였습니다.',
                    },
                    {
                        detail: 'VitePress를 이용한 공통함수 분류 및 각 함수별 설명, 사용법 문서 작성',
                        explaination:
                            '솔루션을 판매하고 여러 개발자들의 요구사항 중 자세한 문서가 필요하다라는 사항이 있었습니다. 이에따라 모듈의 각 함수에 JSDOC 처리, 그리고 VitePress로 따로 함수들을 정리하여 문서를 제공하였습니다.',
                    },
                ],
                stacks: [
                    'Vue3',
                    'Typescript',
                    'Spring Boot',
                    'Fabric.js',
                    'VitePress',
                    'chart.js',
                    'express',
                    'vite',
                    'Node mailer',
                    'MyBatis',
                    'Ant Design',
                ],
            },
            solutionBuild: {
                title: (
                    <Fragment>
                        <p>자사 프레임워크 구축 및</p>
                        <p>Nexacro - vue3 전환 작업</p>
                    </Fragment>
                ),
                duration: '2023.04 ~ 2023.09',
                description: [
                    {
                        detail: 'Vue3/Typescript/Spring boot를 사용하여 이하의 모듈 설계 및 구현',
                        explaination:
                            '기존에 사용하던 솔루션의 백엔드를 분석하여서 Nexacro 솔루션을 Vue3 와 Typescript를 이용하여 재구현 하였습니다.',
                    },
                    {
                        detail: '화면 탭 구현',
                        explaination: 'Vue의 기능 중 하나인 Keepalive와 pinia를 이용하여 페이지의 동적관리 기능을 구현하였습니다.',
                    },
                    {
                        detail: '사용자 관련 기능 ( 로그인, 즐겨찾기, 메뉴 검색 )',
                        explaination:
                            '로그인시에 필요한 인증정보, 또한 솔루션에서 사용하는 기준정보등을 순서에 맞게끔 로드하는 로직을 구현하였습니다.',
                    },
                    {
                        detail: '사용 중인 그리드의 함수 사용 간소화',
                        explaination:
                            '솔루션에 사용된 그리드 솔루션은 JS + HTML에 최적화되어있는 함수였습니다. 이에 따라 Vue에서도 자연스럽게 사용이 가능하게끔 따로 함수를 작성하였습니다.',
                    },
                    {
                        detail: '서버사이드 라우팅, 서버사이드 i18n',
                        explaination:
                            '사용자의 페이지 접근을 서버에서 제어하는 요구사항이 있었습니다.  Vue의 globEager(v2이후로는 import.glob) 과 routingHandler를 따로 작성하여 로그인시의 사용자의 기준정보에 맞게 vue라우터를 작성하는 로직을 작성하였습니다.',
                    },
                    {
                        detail: '엑셀 파일 관련 기능(읽기/업로드 등) 등',
                        explaination:
                            'B2B솔루션에서 가장 많이쓰이는 엑셀, 엑셀을 자동으로 JSON화시키고 업로드하는 로직이 필요하였습니다. JSON을 받아 처리하는 로직은 백엔드에 존재하였으나 프론트에서 EXCEL의 JSON처리 등은 갖춰지지 않은상태였습니다.  이에따라 EXCEL의 값을 추출, JSON으로 가공 한 뒤 백엔드에 보내는 로직에 관한 모듈을 작성하였습니다.',
                    },
                ],
                stacks: ['Vue3', 'Typescript', 'Spring Boot', 'Vite', 'Ant Design', 'MyBatis'],
            },
            dbConvert: {
                title: 'DB 변환 작업',
                duration: '2023.03 ~ 2023.04',
                description: [{ detail: '기존 오라클 기준 문법으로 작성된 Mapper를 ANSI 표준 SQL문으로 변환', explaination: '' }],
                stacks: ['MyBatis', 'Oracle', 'MariaDB', 'Spring Boot'],
            },
            solutionSm: {
                title: (
                    <Fragment>
                        <p>쿠팡 운영관리/세일즈</p>
                        <p>솔루션 유지보수</p>
                    </Fragment>
                ),
                duration: '2023.02 ~ 2024.01',
                description: [{ detail: 'Vue2 + Spring boot로 작성된 프로젝트의 유지보수 및 기능 추가', explaination: '' }],
                stacks: ['Vue2', 'Spring Boot', 'MyBatis', 'Ant Design'],
            },
        },
    },
    keywordsStudios: {
        title: 'Keywords Studios Tokyo',
        job: 'LQA / QA',
        working: '2019. 07 ~ 2022. 01',
        history: {
            testingPub: {
                title: '게임 테스팅 참여 및 출시',
                description: [
                    { detail: '브레이브리 디폴트 II(스위치/스팀), XLOG(CMS)', explaination: '' },
                    { detail: '니어 리[인]카네이션, FFBE WOTV', explaination: '' },
                    { detail: '디지몬 리얼라이즈, 소드아트 온라인 엘리시제이션', explaination: '' },
                    { detail: '악마성 그리모어오브 소울즈 등', explaination: '' },
                ],
            },
            testing: {
                title: '게임 테스팅 참여',
                description: [
                    { detail: 'FFBE', explaination: '' },
                    { detail: 'FFBE WOTV', explaination: '' },
                ],
            },
        },
    },
}
