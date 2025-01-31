/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
    domains: [
      "api.microlink.io",
    ]
  },
};

module.exports = nextConfig;
