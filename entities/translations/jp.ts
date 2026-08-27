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
        'フロントエンドアーキテクチャ設計 \n デザインシステムの構築とドキュメント化 \n データキャッシュの最適化により読み込み時間を350ms -> 90msに短縮 \n AI開発自動化により機能開発を5日 -> 1.5日に短縮 \n デバッグ時間を1日 -> 半日に短縮 \n 同時接続1,000人規模のサービス安定化',
    BIRTHDAY: '95. 07. 01',
    WORK_EXPERIENCE: 'Work Experience',
    SKILLS: 'Skills',
    PROJECTS: 'Projects',
    ETC: 'etc.',
    WORK_GLOBALKNOWLEDGE_NAME: 'Global Knowledge Korea',
    WORK_GLOBALKNOWLEDGE_PERIOD: '24. 03. 18 - 26. 09. 30',
    WORK_GLOBALKNOWLEDGE_LOCATION: '韓国、ソウル',
    WORK_GLOBALKNOWLEDGE_ROLE: 'Frontend Engineer / AI Engineer',

    WORK_GLOBALKNOWLEDGE_FLUNTI_TITLE: 'Flunti',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_TITLE: 'Design System',
    WORK_GLOBALKNOWLEDGE_AI_TITLE: 'AI Documentation',
    WORK_GLOBALKNOWLEDGE_STUDIO_TITLE: 'Studio',
    WORK_GLOBALKNOWLEDGE_CMS_TITLE: 'リアルタイムクラス教育システム',

    WORK_GLOBALKNOWLEDGE_FLUNTI_DESCRIPTION:
        'SaaSプラットフォームのフロントエンドアーキテクチャ設計と開発を主導し、15社以上の企業サイトを運用 \n TanStack QueryとNext.js Fetch APIのキャッシュを統合し、DXを向上させ、ページの読み込み時間を350ms -> 90msに短縮 \n プロキシレイヤーのデータキャッシュ最適化により、基準情報全体の読み込み時間を100ms -> 65msに短縮 \n SEO向けのMetadataおよびJSON-LDヘルパーを設計・実装',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_DESCRIPTION:
        'Reactベースのコンポーネントライブラリを設計・実装し、デザイナーと協業して再利用可能なコンポーネントを20種類以上開発 \n Storybookを導入し、フィードバックプラグインを開発 \n Next.jsとStorybookを用いたデザインシステムのドキュメントサイトを構築・デプロイ \n サイト全体のUI一貫性を確保し、開発効率を向上',
    WORK_GLOBALKNOWLEDGE_STUDIO_DESCRIPTION:
        'AI駆動開発のためのデザインシステムベースのプラットフォームヘルパーサイトを設計・開発・デプロイ \n ページ生成プロンプトと自動化パイプラインを設計・実装し、機能開発期間を平均5日 -> 1.5日に短縮 \n 部門間協業を支援するHTMLモック生成機、ガイド文書用ステッパーページ、機能実現可能性を判断するAIボットを実装',
    WORK_GLOBALKNOWLEDGE_AI_DESCRIPTION:
        'AI駆動フロントエンド開発のためのドキュメントとプロンプトを設計・適用し、デバッグ時間を平均1日 -> 半日に短縮 \n 既存のコンベンションとアーキテクチャパターンを全体分析し、15以上のSkillと6以上のCommandを作成・ドキュメント展開 \n PR分析と自動化パイプラインを実装し、人が作成したレビューコメントとの比較検証で人が検出した項目の約90%を再現',
    WORK_GLOBALKNOWLEDGE_CMS_DESCRIPTION:
        '同時接続1,000人規模のリアルタイム教育プラットフォームで、Zoom Live連携、リアルタイムクイズ、掲示板などの主要フロントエンド機能を開発 \n Zoom Web SDKでライブ講義をプラットフォームに埋め込み、サービスから離脱せずに受講できるワンストップ環境を構築 \n リアルタイムクイズのトラフィック集中時にリクエストフローとAPIを最適化し、CloudWatch基準でECS Task平均CPU使用率を80% -> 40%に削減 \n 制限時間と開始時点の同期が必要なクイズインタラクションロジックを安定化し、デバッグを実施',
    WORK_GLOBALKNOWLEDGE_FLUNTI_SITE: 'https://flunti.io',
    WORK_GLOBALKNOWLEDGE_FLUNTI_SKILLS: 'Next.js|React|Tailwind|TanStack Query|ECS',
    WORK_GLOBALKNOWLEDGE_DESIGNSYSTEM_SKILLS: 'Nextjs|RadixUI|Tailwind|StoryBook',
    WORK_GLOBALKNOWLEDGE_STUDIO_SKILLS: 'Next.js|Drizzle|Docker|EC2',
    WORK_GLOBALKNOWLEDGE_AI_SKILLS: 'Claude code',
    WORK_GLOBALKNOWLEDGE_CMS_SKILLS: 'React|Tailwind|TanStack Query',

    WORK_PROSOFT_NAME: 'Prosoft',
    WORK_PROSOFT_PERIOD: '23. 02. 06 - 24. 03. 01',
    WORK_PROSOFT_LOCATION: '韓国、昌原',
    WORK_PROSOFT_ROLE: 'Fullstack Engineer',
    WORK_PROSOFT_MIGRATION_TITLE: 'レガシーソリューション再設計と高度化',
    WORK_PROSOFT_DBMIGRATION_TITLE: 'DB移行',
    WORK_PROSOFT_MIGRATION_DESCRIPTION:
        'NexacroベースのレガシーソリューションをVue 3、TypeScript、Piniaベースに再設計 \n 重複するAPI呼び出しを削除し、API呼び出しを非同期処理で最適化して応答速度を最大2倍改善 \n フォーム、グリッド、検索条件などの主要機能をモジュール化し、再利用性を強化 \n WebSocketによる通知機能とPDF.js、Fabric.jsベースの図面管理機能を実装 \n VitePressベースのオンボーディングドキュメントを作成し、新規メンバーの迅速なオンボーディングを支援',
    WORK_PROSOFT_DBMIGRATION_DESCRIPTION: '既存のOracle DB構文で書かれたSQL文をANSI標準SQLにリファクタリングし、MyBatis Mapperに適用してテスト',
    WORK_PROSOFT_MIGRATION_SKILLS: 'SpringBoot|Vue|Pinia',
    WORK_PROSOFT_DBMIGRATION_SKILLS: 'MyBatis|OracleDB|MariaDB|JAVA',

    WORK_KEYWORDSSTUDIO_NAME: 'Keywords Studio',
    WORK_KEYWORDSSTUDIO_PERIOD: '19. 07 - 2022. 01',
    WORK_KEYWORDSSTUDIO_LOCATION: '日本、東京',
    WORK_KEYWORDSSTUDIO_ROLE: 'LQA Tester',
    WORK_KEYWORDSSTUDIO_LQA_TITLE: 'ゲームLQAおよびオンボーディングプロセスの改善',
    WORK_KEYWORDSSTUDIO_LQA_DESCRIPTION:
        '7件のプロジェクトでLQAを実施し、リリース完了を支援 \n 韓国語人材が不足する状況でTFチームを編成し、オンボーディング支援とテストを並行して実施して、オンボーディング期間を2-3日 -> 1日に短縮',
    WORK_KEYWORDSSTUDIO_LQA_SKILLS: 'Redmine|MS Excel|JIRA',
}
