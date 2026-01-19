const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enabled for React 19 compatibility
  env: {
    // Safe to expose (non-secret): used for the Platform Demo button URL
    PLATFORM_DEMO: process.env.PLATFORM_DEMO,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules/bootstrap/scss'),
    ],
  },
}

module.exports = nextConfig
