/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "ucarecdn.com",
      "images.mktw.net",
      "image.cnbcfm.com",
      "mw3.wsj.net",
    ],
  },
};

module.exports = nextConfig;
