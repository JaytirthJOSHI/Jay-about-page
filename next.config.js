/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.licdn.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '',
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 