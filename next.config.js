/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Disable hydration warnings for development
  compiler: {
    removeConsole: false,
  },
  // Suppress React hydration warnings
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Suppress hydration warnings in development
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
