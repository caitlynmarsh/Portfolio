/** @type {import('next').NextConfig} */
// Custom domains serve the site at /; github.io/project-name/ needs base path (e.g. /Portfolio). Set SITE_BASE_PATH at build.
const pagesBase =
  process.env.NODE_ENV === 'production' ? (process.env.SITE_BASE_PATH ?? '') : ''

const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  basePath: pagesBase,
  assetPrefix: pagesBase,
  env: {
    NEXT_PUBLIC_SITE_BASE_PATH: pagesBase,
  },
  // In dev, map /Portfolio/* to /* so old bookmarked URLs still work locally
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
