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
      "ww2.kqed.org",
      "newscenter.baruch.cuny.edu",
      "loopnewslive.blob.core.windows.net",
      "images.barrons.com",
      "netzelfinancial.com",
      "www.nyse.com",
      "cdn-scripbox-wordpress.scripbox.com",
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
