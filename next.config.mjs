/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // Enable static export
  // Only use basePath for production build (GitHub Pages). Dev server serves at /
  ...(isProd && {
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio',
  }),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
