import { ImageResponse } from 'next/og'
import { DEFAULT_LANGUAGE, isSupportedLanguage, OPEN_GRAPH_IMAGE, SITE_URL } from '@shared/constants/seo'

export const alt = OPEN_GRAPH_IMAGE.alt
export const size = { width: OPEN_GRAPH_IMAGE.width, height: OPEN_GRAPH_IMAGE.height }
export const contentType = 'image/png'

const OpenGraphImage = async ({ params }: { params: Promise<{ lang: string }> }) => {
    const { lang } = await params
    const language = isSupportedLanguage(lang) ? lang : DEFAULT_LANGUAGE

    return new ImageResponse(
        <div
            style={{
                alignItems: 'stretch',
                background: '#ffffff',
                color: '#171717',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
                padding: '72px',
                width: '100%',
            }}>
            <div style={{ color: '#525252', display: 'flex', fontSize: 28, letterSpacing: 4 }}>RESUME</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>Hyunseok Byun</div>
                <div style={{ color: '#404040', display: 'flex', fontSize: 36 }}>Frontend Engineer / AI Engineer</div>
                <div style={{ color: '#737373', display: 'flex', fontSize: 24 }}>Next.js / React / TypeScript / Design Systems / Web Performance</div>
            </div>
            <div style={{ color: '#525252', display: 'flex', fontSize: 22 }}>
                {SITE_URL.replace('https://', '')}/{language}
            </div>
        </div>,
        size,
    )
}

export default OpenGraphImage
