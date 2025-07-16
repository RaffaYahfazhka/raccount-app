
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
      '@components': require('path').resolve(__dirname, './src/components'),
      '@styles': require('path').resolve(__dirname, './src/styles'),
      '@entities': require('path').resolve(__dirname, './src/entities'),
      '@clients': require('path').resolve(__dirname, './src/clients'),
      '@controllers': require('path').resolve(__dirname, './src/controllers'),
      '@hooks': require('path').resolve(__dirname, './src/hooks'),
      '@utils': require('path').resolve(__dirname, './src/utils'),
    };
    return config;
  },
};

module.exports = nextConfig;
