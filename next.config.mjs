/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: '/Portfolio', // Required for GitHub Pages (site is at username.github.io/Portfolio/)
  assetPrefix: '/Portfolio', // Ensure _next/ assets load from subpath (static export may not apply basePath to HTML)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
