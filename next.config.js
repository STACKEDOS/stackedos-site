/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/stackedos-site',
  assetPrefix: '/stackedos-site/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
