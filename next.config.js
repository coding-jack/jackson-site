const { withNetlify } = require('@netlify/next');

module.exports = withNetlify({
  images: {
    domains: ['wp.jacksonkaufman.com'],
  },
  reactStrictMode: true,
});
