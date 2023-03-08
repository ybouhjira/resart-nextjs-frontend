/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resart-product-photos-dev.s3.eu-west-3.amazonaws.com',
        port: '',
        pathname: '/'
      }
    ],
    domains: ['resart-product-photos-dev.s3.eu-west-3.amazonaws.com']
  },
  output: 'standalone',
};

module.exports = nextConfig;
