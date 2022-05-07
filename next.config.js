/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      process.env.WP_IMG,
      process.env.WP_R_IMG,
      process.env.WP_LL_IMAGES,
      process.env.WP_LL_IMG,
      process.env.WP_LH_IMG,
    ],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
