/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [{ hostname: 'img.gumyo.net' }],
    },
}

export default nextConfig
