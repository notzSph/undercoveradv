/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  pageExtensions: ['page.tsx', 'page.jsx', 'api.ts', 'api.js', 'next.ts'],
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
