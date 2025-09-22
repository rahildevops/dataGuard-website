/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export output for static hosting
  output: 'export',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: true,
};

// Note: enabling static export. This will make Next write static files
// under `.next/output` which we will copy to `out/` for hosts expecting it.
module.exports = nextConfig;
