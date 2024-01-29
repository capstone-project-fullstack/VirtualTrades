/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'ucarecdn.com',
      'images.mktw.net',
      'image.cnbcfm.com',
      'mw3.wsj.net',
      'ww2.kqed.org',
      'newscenter.baruch.cuny.edu',
      'loopnewslive.blob.core.windows.net',
      'images.barrons.com',
      'netzelfinancial.com',
      'www.nyse.com',
      'cdn-scripbox-wordpress.scripbox.com',
      'g.foolcdn.com',
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
