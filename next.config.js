module.exports = {
  target: 'serverless',
  images: {
    domains: ['wp.jacksonkaufman.com'],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
