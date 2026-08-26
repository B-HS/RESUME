import { WORDS } from './words'

export const JAPANESE_TRANSLATIONS: Record<(typeof WORDS)[number], string> = {
    FIRST_NAME: 'Hyunseok',
    LAST_NAME: 'Byun',
    FIRST_NAME_TRANSLATION: 'ヒョンソク',
    LAST_NAME_TRANSLATION: 'ビョン',
    JOB_TITLE: 'Frontend Engineer / AI Engineer',
    BLOG: 'https://blog.gumyo.net',
    EMAIL: 'hs@gumyo.net',
    LOCATION: '韓国、ソウル',
    GITHUB: 'https://github.com/B-HS',
    INTRODUCE:
        'アーキテクチャ設計やデザインシステムなど幅広い開発経験 \n AIを活用した他職種との協力効率化の経験 \n 大規模アプリケーション開発におけるサービスの安定性確保の経験 \n 最適化とDX向上を優先した開発を推進',
    WORK_EXPERIENCE: 'Work Experience',
    WORK_GLOBALKNOWLEDGE_NAME: 'Global Knowledge Korea',
    WORK_GLOBALKNOWLEDGE_PERIOD: '2024. 03. 18 - 2026. 09. 30',
    WORK_GLOBALKNOWLEDGE_LOCATION: '韓国、ソウル',
    WORK_GLOBALKNOWLEDGE_ROLE: 'Frontend Engineer / AI Engineer',

    WORK_GLOBALKNOWLEDGE_FLUNTI_TITLE: 'Flunti',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_TITLE: 'Design System',
    WORK_GLOBALKNOWLEDGE_AI_TITLE: 'AI Documentation',
    WORK_GLOBALKNOWLEDGE_STUDIO_TITLE: 'Studio',
    WORK_GLOBALKNOWLEDGE_CMS_TITLE: 'リアルタイムクラス教育システム',

    WORK_GLOBALKNOWLEDGE_FLUNTI_DESCRIPTION:
        'SaaSベースのFE全体のアーキテクチャーと開発を主導し15以上の企業サイトを運営\n TanStack Queryと Next.js Fetch API キャッシュ統合でDX向上およびページロード速度を350msから最大90msまで短縮 \n proxy-layerキャッシング設計補助および高度化でproxy-layer基準情報ロード速度50％向上 \n SEOのためのMetadata/JSON-LD Helper設計および適用',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_DESCRIPTION:
        'デザイナーと協力してReactベースのコンポーネントライブラリシステムを設計し、20種以上のコンポーネントを開発 \n Storybookを適用し、フィードバックプラグインを開発 \n Next.jsとStorybookを使用してデザインシステムドキュメントサイトの構築およびデプロイ \n 将来使用されるサイトのデザインの一貫性を担保し、開発効率を向上',
    WORK_GLOBALKNOWLEDGE_STUDIO_DESCRIPTION:
        'AI Drivenのためのデザインシステムベースのプラットフォームヘルパーサイトの設計、開発、デプロイ \n ページ生成プロンプトとパイプラインの設計および構築により、機能開発速度が300％向上 \n その他、他部署との協力のためのHTMLモックジェネレーター、ガイド文書用のステッパーを含むページ、機能生成可能性判断のためのAIボットなどを実装',
    WORK_GLOBALKNOWLEDGE_AI_DESCRIPTION:
        'フロントエンド AI DrivenのためのAI文書化およびプロンプト設計と適用により、機能開発/デバッグ速度を100％向上 \n 既存のコンベンションとアーキテクチャパターンなどを全体的に分析し、Skill（15以上）とCommand（6以上）を多数作成して文書展開 \n 自動PRレビューのためのPR全体分析およびPR自動化により、機械検出率約90％を達成',
    WORK_GLOBALKNOWLEDGE_CMS_DESCRIPTION:
        '同時接続1,000人規模のリアルタイム教育プラットフォームにおけるFEコア機能（Zoom Live連携、リアルタイムクイズ、掲示板）の開発\nWeb SDKを活用したZoom Liveのプラットフォーム内埋め込み連携により、シームレスな受講環境を構築\nトラフィックが集中するリアルタイムクイズのリクエストフローおよびAPI最適化連携により、CloudWatch監視基準でECSタスク全体の平均CPU使用率を80％から40％へ削減\n制限時間および開始タイミングの同期が必要なクイズのインタラクションロジックの安定化とデバッグ',
    WORK_GLOBALKNOWLEDGE_FLUNTI_SITE: 'https://flunti.io',
}
