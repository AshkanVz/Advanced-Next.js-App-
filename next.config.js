/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  // ... rest of the configuration.
  experimental: {
    outputStandalone: true,
  },
}