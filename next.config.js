/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Running as a Node-backed Next.js app (not static export)
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: true,
};

// Note: using server output for Node-backed deployments
module.exports = nextConfig;
