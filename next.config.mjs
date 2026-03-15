/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove X-Powered-By header (minor security/SEO tidiness)
  poweredByHeader: false,
  // Ensure good compression and caching for Core Web Vitals
  compress: true,
};

export default nextConfig;
