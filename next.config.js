/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ucarecdn.com", "ww2.kqed.org", "newscenter.baruch.cuny.edu"],
  },
};

module.exports = nextConfig;
