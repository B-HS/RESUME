export type HistoryItem = {
    title: string
    background: string[]
    implementation: string[]
    results: string[]
}

export type WorkHistory = {
    title: string
    subtitle?: string
    job: string
    working: string
    history: HistoryItem[]
}

export type History = {
    [key: string]: WorkHistory
}

export const history: History = {
    codinghub: {
        title: '한국글로벌널리지네트웍(주)',
        subtitle: '前 코딩허브, 現 Trainocate Korea, 한국글로벌널리지네트웍(주)로 고용 인계',
        job: 'Frontend developer',
        working: '2024. 03 ~',
        history: [
            {
                title: '디자인 시스템 구축',
                background: [
                    '반복되는 프로젝트마다 공통 컴포넌트를 매번 새로 작성하면서 업무량이 증가.',
                    '디자이너와 개발자 모두 작업 부하가 누적되는 상황에서, 다음 프로젝트의 일관성과 생산성 향상을 위해 디자인 시스템 도입을 논의함.',
                ],
                implementation: [
                    'fs 기반 SSG 동적 라우팅 구현 → MDX 파일만으로 Docs 페이지 자동 생성',
                    '디자인 시스템 전용 모노레포(pnpm) 구성',
                    '외부 프로젝트에서 설치 가능한 CLI 도구 설계',
                    'Storybook 도입으로 컴포넌트 단위 협업 강화',
                    '공통 컴포넌트 설계 및 Radix UI primitives 도입으로 안정성 확보',
                ],
                results: [
                    '평균 한 달 이상 소요되던 컴포넌트 작성 → 공통 모듈 활용으로 빠른 페이지 제작 가능',
                    '디자이너는 페이지 단위가 아닌 컴포넌트 단위 피드백 가능, 개발자는 즉시 수정 및 반영',
                    'Docs 페이지 작성 시, MDX 파일만 추가하면 자동 라우팅 및 페이지 생성 가능 → 생산성 증대',
                    'Radix UI 도입으로 기초 단위 컴포넌트의 신뢰성 확보, 핵심 로직 구현에 집중 가능',
                ],
            },
            {
                title: 'FSD 아키텍쳐 도입',
                background: [
                    '기존 프로젝트는 컴포넌트가 체계 없이 관리돼 유지보수가 어려움.',
                    '예를 들어, 공통 버튼 컴포넌트를 찾지 못하고 새로운 디자인마다 중복 생성되는 문제가 반복됨.',
                ],
                implementation: [
                    '기존 app/components 구조 → FSD(Folder-Sliced Design)로 전환',
                    '추가적으로 도메인 단위 디렉토리 구조로 재정비',
                    'FSD 컨벤션 유지를 위해 tsconfig, eslint 설정 적용',
                ],
                results: [
                    '신규 프로젝트는 구조가 명확해져, 누구나 빠르게 진입하고 수정 가능',
                    '컴포넌트 결합이 느슨해져 재사용성과 유연성 증가, 중복 구현 감소',
                    '개발 속도 향상, 유지보수 편의성 확보',
                ],
            },
            {
              title: '커스텀 플러그인 제작',
              background: [
                    '어드민 에디터, 디자인 시스템 등에서 사용자의 세부적인 편집 요구가 늘어남.',
                    '기존 라이브러리만으로는 Notion 스타일의 UX나 Storybook 상호 피드백 흐름 구현이 어려웠음.',
                    '디자이너·운영자가 원하는 방식으로 콘텐츠를 편집하거나 피드백을 주기 위한 개선 요청이 반복됨.',
              ],
              implementation: [
                    'Tiptap + ProseMirror로 Slash command, Line placeholder, Toolbar 등 커스텀 WYSIWYG 구현',
                    'Storybook에 Notion API 기반 코멘트 플러그인 도입 → 컴포넌트 단위 피드백 기능 추가',
              ],
              results: [
                    'Notion에 익숙한 사용자들이 즉시 적응 가능한 콘텐츠 편집 UX 제공',
                    '디자이너는 별도 페이지 없이 Storybook 상에서 피드백 작성 가능',
                    '피드백 수집·반영 속도 향상 → 개발·디자인 간 협업 흐름 개선',
              ],
            }
            {
                title: '로직 최적화 및 리펙터링',
                background: [
                    '실서비스에서 순간 트래픽(최대 1,000명), 대용량 파일 처리, 중복된 로직 등 다양한 성능 이슈에 직면.',
                    '특히, 비효율적인 API 호출 순서와 Base64 이미지 처리 방식이 서버 부하와 TTFB(첫 바이트 대기 시간)에 직접적 영향을 줌.',
                ],
                implementation: [
                    '비효율적인 API 호출순서를 비즈니스 로직 기준으로 리팩터링',
                    'Base64로 처리하여 저장하던 로직을 서버 경유 방식으로 변경, S3 업로드 처리',
                    '변동성이 낮은 API에 Tanstack query를 도입하여 캐싱 전략 적용',
                    'axios기반 API 핸들러 래핑으로 경로, 인증, 타입 등을 공통처리하여 중복된 fetch 로직을 개선',
                ],
                results: [
                    'CloudWatch 기준 백엔드 부하 약 30% 감소',
                    '이미지 포함 페이지의 TTFB 최대 10배 개선',
                    '공통 정보 캐싱으로 페이지 로딩 속도 1.5배 향상',
                    '반복 fetch 코드 제거로 DX(개발자 경험) 개선 및 유지보수 효율 증가',
                ],
            },
            {
                title: '소규모 프로젝트의 풀스택 설계',
                background: [
                    '외부 의뢰 프로젝트에서 백엔드 리소스 없이 프론트엔드 주도로 전체 기능을 개발해야 했음.',
                    '폼 제출, 지원서 관리, 데이터 저장 등의 기능이 요구되며, 클라이언트 단독 개발만으로는 한계가 있었음.',
                ],
                implementation: [
                    'Next.js API Routes 기반으로 간단한 CRUD API 서버 직접 구성',
                    'Prisma + SQLite 조합으로 경량 DB 설계',
                    '지원서 데이터를 Excel(xlsx) 파일로 출력하는 기능 개발',
                    'GitHub Actions 기반 CI/CD 파이프라인 구성 → EC2에 직접 배포 자동화',
                ],
                results: [
                    '프론트 단독으로 전체 서비스 설계, 개발, 운영까지 완료',
                    '별도 백엔드 인력 없이도 필요한 기능을 안정적으로 구현',
                    'GitHub Actions 기반 배포 자동화로 운영 편의성 확보',
                ],
            },
        ],
    },
    prosoft: {
        title: '프로소프트',
        job: 'Fullstack developer',
        working: '2023. 02 ~ 2024. 02',
        history: [
            {
                title: '레거시 솔루션 재설계 및 고도화, 최적화',
                background: [
                    '기존 솔루션은 Nexacro 기반 구조로 인해, 폐쇠성, 그리고 유지보수 난이도가 높았음.',
                    '또한 Vue3 기반 전환 작업 도중에도 반복되는 코드, 불필요한 API 호출, 비동기 처리 미흡, 후처리 병목 등의 문제가 자주 발생함.',
                ],
                implementation: [
                    'Vue3 + TypeScript + pinia 기반으로 전체 프론트엔드 구조를 새롭게 설계 및 구현',
                    '불필요한 API 호출 제거 및 비동기 처리 최적화 (Promise.all)',
                    '공통 기능(폼, 그리드, 검색 조건 등)을 모듈화하여 재사용성 확보',
                    '검색 조건 동적 생성 로직 작성 및 리펙터링',
                    'WebSocket 기반 전역으로 사용되는 알림 시스템 구축 → 알람, 쪽지 기능 구현',
                    'PDF.js, Fabric.js 기반 도면 관리 기능 도입',
                    '공통 모듈의 라이선스 보호 목적으로 JS 난독화 시스템 구현 (express 서버 포함)',
                    '솔루션 사용자 대상 공통 모듈 문서 시스템 구축 (VitePress, JSDoc)',
                ],
                results: [
                    '프론트엔드 아키텍처를 전면 재설계하여 유지보수성과 확장성 확보',
                    '기준정보 로딩 및 초기 페이지 응답 속도 최대 2배 이상 개선',
                    '반복 개발 비용 절감 → 신규 기능 구현 속도 향상',
                    '알림/도면 등 핵심 기능 커스터마이징 요구를 모듈 단위로 대응 가능',
                    '내부 문서화 시스템 도입으로 신입 개발자 온보딩 속도 개선',
                ],
            },
            {
                title: 'DB 변환 작업 (Oracle → MariaDB)',
                background: [
                    '신규 솔루션을 기존 시스템과 연동하기 위해 Oracle 기반 DB를 MariaDB로 전환해야 하는 상황.',
                    '기존 쿼리는 Oracle 전용 문법과 MyBatis Mapper 기반으로 구성되어 있어, 단순 변환으로는 실행 불가능한 쿼리가 다수 존재함.',
                ],
                implementation: ['Oracle 쿼리 분석 및 ANSI SQL 기반으로 전환 리팩토링', 'MyBatis Mapper의 조건문, 날짜 계산 등 DB 종속적 문법 해소'],
                results: [
                    '기존 쿼리 로직 정리 및 중복 제거, 작동 테스트 완료',
                    'MariaDB 기반 신규 솔루션과 기존 데이터 연동 문제 없이 연결',
                    '향후 다른 DB 전환 시에도 유연한 쿼리 구조 재사용이 가능해짐',
                ],
            },
        ],
    },
    keywordsStudios: {
        title: 'Keywords Studios Tokyo',
        job: 'LQA / QA',
        working: '2019. 07 ~ 2022. 01',
        history: [
            {
                title: '게임 LQA TF 리딩 및 온보딩 시스템 개선',
                background: [
                    '코로나 상황으로 인해 일본 현지 스튜디오에서 한국어 LQA 인력 확보가 어려웠고, 확보가 되어도 매회 프로젝트 온보딩을 도울 역할을 수행할 인력도 부재한 상태.',
                    '또한 테스트 인원이 자주 교체되면서, 프로젝트마다 테스트 품질과 속도에 편차가 심해졌음',
                ],
                implementation: [
                    '진행중인 대다수의 프로젝트의 흐름과 맥락을 알고 있는 점을 바탕으로, PM의 요청으로 TF를 구성하고 TF Lead 역할 수행',
                    '자주 교체되는 인원 문제를 해결하기 위해 특정 프로젝트용 온보딩 문서(Docs) 직접 작성',
                ],
                results: [
                    '신규 인원의 온보딩 시간을 대폭 단축',
                    'TF 내 테스트 속도와 품질 향상 → 일정 내 검수 및 리포트 완료율 개선',
                    '이하의 프로젝트 테스팅 및 출시',
                    '브레이브리 디폴트 II(스위치/스팀), XLOG(CMS)',
                    '니어 리[인]카네이션, FFBE WOTV',
                    '디지몬 리얼라이즈, 소드아트 온라인 엘리시제이션',
                    '악마성 그리모어오브 소울즈, FFBE, FFBE WOTV',
                ],
            },
        ],
    },
}
