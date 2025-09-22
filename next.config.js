/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: true,
};

// Note: removed `output: 'export'` to allow normal Next.js build artifacts
module.exports = nextConfig;
