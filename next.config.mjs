/** @type {import('next').NextConfig} */
// GitHub Pages needs /Portfolio only in the production static export; `next dev` uses /
const pagesBase = process.env.NODE_ENV === 'production' ? '/Portfolio' : ''

const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  basePath: pagesBase,
  assetPrefix: pagesBase,
  // Static files and img srcs use /Portfolio/... for GitHub Pages; in dev, basePath is '' so map those URLs to public assets
  async rewrites() {
    if (process.env.NODE_ENV === 'production') return []
    return [{ source: '/Portfolio/:path*', destination: '/:path*' }]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
