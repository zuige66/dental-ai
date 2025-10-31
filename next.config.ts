/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dental-ai',
  assetPrefix: '/dental-ai/',
};

export default nextConfig;
