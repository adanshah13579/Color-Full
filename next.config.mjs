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
        source: '/favicon.ico',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
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
      {
        source: '/tools/color-mixer/white-and-black',
        destination: '/tools/color-mixer/black-and-white',
        permanent: true,
      },
      // Consolidate forest green cluster → single canonical hex page
      {
        source: '/blog/forest-green',
        destination: '/blog/forest-green-hex-code',
        permanent: true,
      },
      {
        source: '/blog/forest-green-color-palette',
        destination: '/blog/forest-green-hex-code',
        permanent: true,
      },
      {
        source: '/blog/forest-green-rgb',
        destination: '/blog/forest-green-hex-code',
        permanent: true,
      },
      // Consolidate pink/purple duplicates
      {
        source: '/blog/pink-and-purple-color',
        destination: '/blog/pink-purple-color-name',
        permanent: true,
      },
      {
        source: '/blog/what-color-does-pink-and-purple-make',
        destination: '/tools/color-mixer/pink-and-purple',
        permanent: true,
      },
      {
        source: '/blog/sunset-vibes',
        destination: '/blog/sunset-color-palette',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
