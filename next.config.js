/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      process.env.WP_IMG,
      process.env.WP_R_IMG,
      process.env.WP_LL_IMG,
      process.env.WP_LH_IMG,
    ],
  },
};

module.exports = nextConfig;
