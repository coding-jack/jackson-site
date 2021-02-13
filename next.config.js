module.exports = {
  target: 'serverless',
  images: {
    domains: ['wp.jacksonkaufman.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
}
