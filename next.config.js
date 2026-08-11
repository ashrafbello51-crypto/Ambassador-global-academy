/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  staticPageGenerationTimeout: 180,
}

module.exports = nextConfig