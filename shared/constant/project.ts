export const projects = {
    ko: [
        {
            name: 'B-Hub',
            url: ['https://github.com/B-HS/b-hub'],
            description: {
                background: [
                    '개인 서비스 전반(블로그, 메일, 이미지 관리 등)을 통합 관리할 수 있는 허브 플랫폼 필요',
                    'AI를 활용한 개발 생산성 극대화를 실제 프로젝트에서 검증하고자 하는 목표',
                ],
                implementation: [
                    '아키텍처 설계와 코드 리뷰를 직접 수행하고, 전체 코드의 약 70%를 AI가 작성하는 AI 협업 개발 방식을 적용',
                    'Hono + Drizzle ORM + MySQL 기반 백엔드 API를 구성하고 Better Auth 인증, Cloudflare R2 스토리지, Redis 캐싱을 통합',
                    '메일 파싱(IMAP), 이미지 생성(Satori + Sharp) 등 다양한 도메인 기능을 구현',
                    'OpenAPI/Swagger 기반 API 문서화를 적용하여 API 관리 체계를 확보',
                ],
                results: [
                    'AI 협업 개발 방식으로 설계자가 아키텍처와 품질에 집중하면서도 빠른 구현 속도를 달성',
                    '다양한 외부 서비스 연동을 단일 플랫폼에서 통합 관리하는 구조를 확보',
                ],
            },
        },
        {
            name: 'BBlog',
            url: ['https://blog.gumyo.net'],
            description: {
                background: [
                    '기존 블로그의 성능 저하와 커스터마이징 한계로 유지보수성 확보가 어려운 상황',
                    '소셜 피드 및 외부 콘텐츠를 통합 관리할 수 있는 개인 기술 플랫폼 필요',
                ],
                implementation: [
                    'Next.js + TypeScript 기반 프론트엔드를 설계하고 B-Hub 백엔드 API와 연동하여 인증 및 데이터 관리를 처리',
                    '스토리지, 캐싱, CDN 등을 기능별로 모듈화하고 확장성을 고려한 아키텍처를 설계',
                    '어드민 위젯을 추가하여 콘텐츠 관리 효율성을 향상',
                ],
                results: [
                    '게시글, 소셜 콘텐츠, 기술 실험을 단일 플랫폼에서 관리 가능한 구조 확보',
                    '백엔드를 B-Hub으로 통합하여 중복 인프라를 제거하고 유지보수 효율을 향상',
                ],
            },
        },
        {
            name: 'Kataru',
            url: ['https://kataru.dev', 'https://github.com/kataru-blog'],
            description: {
                background: [
                    '개인 및 소규모 팀을 위한 SaaS형 블로그 및 콘텐츠 관리 플랫폼 필요',
                    '클라우드 엣지 환경에서의 저비용 + 고가용 아키텍처 운영 자동화 실험 목표',
                ],
                implementation: [
                    'Cloudflare Workers 기반 배포 파이프라인과 엣지 최적화 환경을 설계',
                    'Hono 기반 라우팅 및 미들웨어 구성, FSD 스타일 모듈화 및 island 렌더링 구조를 구현',
                    '관리 UI를 별도 레포지토리(kataru-admin)로 분리하고 Bun + React를 이용하여 인터페이스를 구축',
                    '이미지 변환 서버(image-convert-server)를 별도로 구성하여 업로드 및 변환 비용과 성능을 제어',
                ],
                results: [
                    '모놀리식 대비 배포 및 확장 과정을 단순화하고 정적 리소스 응답 지연을 최소화',
                    '운영 및 관리 기능을 분리하여 변경 영향도를 줄이고 개발 파이프라인을 단순화',
                    '레포 단위 모듈화로 기능 교체 및 확장 용이성을 확보',
                ],
            },
        },
        {
            name: 'Scrollbar TOC',
            url: ['https://github.com/B-HS/scrollbar-toc', 'https://b-hs.github.io/scrollbar-toc/'],
            description: {
                background: ['특정 프레임워크에 종속되지 않는 범용 TOC 컴포넌트 필요성'],
                implementation: ['헤딩 자동 탐지 및 스크롤 비율 매핑 로직을 설계하여 동적 TOC 구성'],
                results: [
                    'npm 설치 후 즉시 적용 가능한 범용 TOC 라이브러리를 제공',
                    '문서형 페이지 및 블로그 등 다양한 환경에서 재사용 가능한 컴포넌트 확장성 확보',
                ],
            },
        },
        {
            name: '웹툰 북마커',
            url: ['https://chromewebstore.google.com/detail/네이버-웹툰-북마크/cnfglfaobnkgkcnagfbaeilbpkcjcanh'],
            description: {
                background: [
                    '관심 웹툰만 별도로 확인하고자 하는 사용자 수요가 존재하나 플랫폼 내 필터링 기능이 부재',
                    '작품 수 증가로 원하는 콘텐츠 접근성이 저하되는 문제 발생',
                ],
                implementation: [
                    'React 기반 크롬 확장 프로그램 UI와 상태 관리 구조를 설계',
                    'DOM 감지 로직을 통해 관심 웹툰 자동 필터링 기능을 구성',
                    'Bun 기반 번들링 환경을 구축하고 빌드 성능을 최적화',
                ],
                results: [
                    '기존 UI 흐름을 유지하면서 관심 작품만 선별 표시하는 기능 제공',
                    '크롬 웹 스토어 등록 및 배포를 완료하여 브라우저 확장 기능 운영 경험 확보',
                ],
            },
        },
        {
            name: 'BCrawler',
            url: ['https://hot.gumyo.net/', 'https://github.com/B-HS/BCrawler'],
            description: {
                background: [
                    '여러 쇼핑몰의 특가 정보를 한 곳에서 확인하고자 하는 사용자 수요 존재',
                    '수동 검색의 번거로움과 시간 소모 문제를 해결할 필요 발생',
                ],
                implementation: [
                    'Hono + Cheerio 기반 서버 사이드 크롤러를 구성하고 데이터 정제 로직을 설계',
                    '서버리스 환경과 Cron 스케줄링 기반 정기 실행 파이프라인을 구축',
                    'AI를 적극 활용하여 크롤링 로직 작성 및 데이터 정제 파이프라인을 빠르게 구현',
                    'Web Push 알림과 PWA를 적용하여 모바일 환경에서도 실시간 특가 알림을 수신할 수 있는 구조를 구축',
                    '간결한 UI를 통해 특가 목록 제공 및 외부 링크 연결 기능을 구현',
                ],
                results: [
                    '자동화된 특가 정보 수집 및 사용자 접근성 향상',
                    'AI 활용으로 크롤러 개발 속도를 단축하고 다수 사이트 대응 범위를 확대',
                    'PWA + Web Push를 통해 앱 설치 없이도 실시간 특가 알림 수신이 가능한 사용자 경험을 제공',
                    '다수 사이트를 빠르게 비교할 수 있는 통합 뷰를 제공하여 사용자 편의성 개선',
                ],
            },
        },
        {
            name: 'RESUME',
            url: ['https://github.com/B-HS/RESUME'],
            description: {
                background: ['기존 이력서 양식이 원하는 구조를 지원하지 않아 커스터마이징이 어려운 문제 발생'],
                implementation: [
                    'Next.js 기반 이력서 사이트 구조를 설계하고 컴포넌트 단위로 분리',
                    'JSON 기반 데이터 모델링을 통해 경력 및 프로젝트 확장성을 확보',
                ],
                results: ['이력서를 확장 가능한 기술 자산으로 전환', '경력과 프로젝트를 단일 시스템에서 통합 관리 가능한 구조 확보'],
            },
        },
    ],
    jp: [
        {
            name: 'B-Hub',
            url: ['https://github.com/B-HS/b-hub'],
            description: {
                background: [
                    '個人サービス全般（ブログ、メール、画像管理など）を統合管理できるハブプラットフォームの必要性。',
                    'AIを活用した開発生産性の最大化を実プロジェクトで検証することを目標。',
                ],
                implementation: [
                    'アーキテクチャ設計とコードレビューを自ら担当し、コード全体の約70%をAIが作成するAI協業開発方式を適用。',
                    'Hono + Drizzle ORM + MySQLベースのバックエンドAPIを構築し、Better Auth認証、Cloudflare R2ストレージ、Redisキャッシングを統合。',
                    'メールパース（IMAP）、画像生成（Satori + Sharp）など多様なドメイン機能を実装。',
                    'OpenAPI/SwaggerベースのAPIドキュメント化を適用し、API管理体系を確保。',
                ],
                results: [
                    'AI協業開発方式により、設計者がアーキテクチャと品質に集中しながらも迅速な実装速度を達成。',
                    '多様な外部サービス連携を単一プラットフォームで統合管理する構造を確保。',
                ],
            },
        },
        {
            name: 'BBlog',
            url: ['https://blog.gumyo.net'],
            description: {
                background: [
                    '既存のブログにおけるパフォーマンス低下とカスタマイズの限界により、メンテナンス性の確保が困難な状況でした。',
                    'ソーシャルフィードや外部コンテンツを統合管理できる、独自の技術プラットフォームの必要性を感じ開発に着手しました。',
                ],
                implementation: [
                    'Next.js + TypeScriptベースのフロントエンドを設計し、B-HubバックエンドAPIと連携して認証およびデータ管理を処理。',
                    'ストレージ、キャッシング、CDNなどを機能別にモジュール化し、拡張性を考慮したアーキテクチャを設計。',
                    '管理用ウィジェットを追加し、コンテンツ管理の効率性を向上。',
                ],
                results: [
                    '記事投稿、ソーシャルコンテンツ、技術的な実験を単一のプラットフォームで管理可能な構造を実現。',
                    'バックエンドをB-Hubに統合することで重複インフラを排除し、メンテナンス効率を向上。',
                ],
            },
        },
        {
            name: 'Kataru',
            url: ['https://kataru.dev', 'https://github.com/kataru-blog'],
            description: {
                background: [
                    '個人および小規模チーム向けの、SaaS型ブログおよびコンテンツ管理プラットフォームの必要性を感じ開発に着手しました。',
                    'クラウドエッジ環境における「低コスト・高可用性」なアーキテクチャの構築、および運用の自動化を検証することを目標としました。',
                ],
                implementation: [
                    'Cloudflare Workersベースのデプロイパイプラインと、エッジ最適化環境を設計。',
                    'Honoを用いたルーティングおよびミドルウェアの構築。FSDスタイルのモジュール化、およびIslands Architecture構造を実装。',
                    '管理画面を別リポジトリ(kataru-admin)として分離し、Bun + Reactを用いてインターフェースを構築。',
                    '画像変換サーバー(image-convert-server)を別途構築し、アップロードおよび変換のコストとパフォーマンスを最適化。',
                ],
                results: [
                    'Monolithic構造と比較してデプロイおよび拡張プロセスを簡素化し、静的リソースのレスポンス遅延を最小化。',
                    '運用・管理機能を分離することで変更による影響範囲を抑え、開発パイプラインのシンプル化を実現。',
                    'リポジトリ単位のモジュール化により、機能の入れ替えや拡張における柔軟性を確保。',
                ],
            },
        },
        {
            name: 'Scrollbar TOC',
            url: ['https://github.com/B-HS/scrollbar-toc', 'https://b-hs.github.io/scrollbar-toc/'],
            description: {
                background: [
                    '特定のフレームワークに依存せず、あらゆる環境で導入可能な汎用性の高いTOCコンポーネントの必要性を感じ開発に着手しました。',
                ],
                implementation: ['ヘッディング要素の自動検知およびスクロール比率のマッピングロジックを設計し、動的なTOC構成を実現。'],
                results: [
                    'npmインストール後、即座に導入可能な汎用TOCライブラリを公開。',
                    'ドキュメントサイトやブログなど、多様なWeb環境で再利用可能なコンポーネントとしての拡張性を確保。',
                ],
            },
        },
        {
            name: 'ウェブトゥーン・ブックマーク(Chrome拡張機能)',
            url: ['https://chromewebstore.google.com/detail/네이버-웹툰-북마크/cnfglfaobnkgkcnagfbaeilbpkcjcanh'],
            description: {
                background: [
                    'お気に入りの作品のみを個別に確認したいというニーズがある一方で、プラットフォーム側にフィルタリング機能が不足していました。',
                    '作品数の増加に伴い、目的のコンテンツへのアクセシビリティが低下しているという課題がありました。',
                ],
                implementation: [
                    'ReactベースのChrome拡張機能のUIおよび状態管理構造を設計。',
                    'DOM検知ロジックの実装により、お気に入り作品の自動フィルタリング機能を構築。',
                    'Bunベースのバンドル環境を構築し、ビルドパフォーマンスを最適化。',
                ],
                results: [
                    '既存のUIの流れを維持しつつ、お気に入り作品のみを選別して表示する機能を提供。',
                    'Chromeウェブストアへの登録および配布を完了し、ブラウザ拡張機能の運用ノウハウを習得。',
                ],
            },
        },
        {
            name: 'BCrawler',
            url: ['https://hot.gumyo.net/', 'https://github.com/B-HS/BCrawler'],
            description: {
                background: [
                    '複数のサイトに分散している特価情報を一箇所で確認したいというユーザーニーズがありました。',
                    '手動で検索する手間と時間的コストを解決する必要がありました。',
                ],
                implementation: [
                    'Hono + Cheerioベースのサーバーサイドクローラーを構築し、データクレンジングロジックを設計。',
                    'サーバーレス環境とCronスケジューリングを活用した、定期実行パイプラインを構築。',
                    'AIを積極的に活用し、クローリングロジックの作成およびデータクレンジングパイプラインを迅速に実装。',
                    'Web Push通知とPWAを適用し、モバイル環境でもリアルタイムで特価通知を受信できる構造を構築。',
                    'シンプルなUIを通じて特価リストの提供および外部サイトへの遷移機能を実装。',
                ],
                results: [
                    '特価情報の自動収集により、情報収集プロセスの効率化とユーザーアクセシビリティの向上を実現。',
                    'AIの活用によりクローラー開発速度を短縮し、対応サイト範囲を拡大。',
                    'PWA + Web Pushにより、アプリインストール不要でリアルタイム特価通知を受信できるユーザー体験を提供。',
                    '複数のサイトを素早く比較できる統合ビューを提供し、ユーザーの利便性を大幅に改善。',
                ],
            },
        },
        {
            name: 'RESUME',
            url: ['https://github.com/B-HS/RESUME'],
            description: {
                background: ['既存の履歴書テンプレートでは、自身の意図する構造を表現することが難しく、カスタマイズ性に限界を感じていました。'],
                implementation: [
                    'Next.jsをベースとした職務経歴書サイトの構造を設計し、各セクションをコンポーネント単位で分離。',
                    'JSONベースのデータモデリングを行い、経歴やプロジェクト情報の拡張性を確保。',
                ],
                results: [
                    '静的な書類としての履歴書を、拡張可能な技術資産へと転換。',
                    '経歴とプロジェクト実績を単一のシステム内で統合管理できる体制を構築。',
                ],
            },
        },
    ],
}
