/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.thesprucepets.com']
  }
}

module.exports = nextConfig
