/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hemanthbabu648.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hemanthbabu648.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
