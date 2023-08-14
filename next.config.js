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
    ],
  },
};

module.exports = nextConfig;
