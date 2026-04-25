/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove X-Powered-By header (minor security/SEO tidiness)
  poweredByHeader: false,
  // Ensure good compression and caching for Core Web Vitals
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/tools/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/blog/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/tools/color-mixer/',
        destination: '/tools/color-mixer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
