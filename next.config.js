/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // kalgard.ai is the primary domain. Permanently redirect the old domain,
  // path included, so search engines transfer its ranking to kalgard.ai.
  async redirects() {
    return ['kalgardsystems.com', 'www.kalgardsystems.com'].map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: 'https://kalgard.ai/:path*',
      permanent: true,
    }))
  },
}

module.exports = nextConfig
