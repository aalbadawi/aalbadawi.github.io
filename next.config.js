// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable static exports
  output: "export",

  // Disable server-based image optimization
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages
  // basePath: '/aalbadawi.github.io',
  
  // Add trailing slash to URLs
  trailingSlash: true,

  // Remove console logs from production builds
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;