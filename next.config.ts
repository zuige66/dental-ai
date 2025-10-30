/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 让 GitHub Pages 能显示图片
  },
  basePath: '/dental-ai', // 👈 必须加上你的仓库名
  assetPrefix: '/dental-ai/', // 👈 静态资源路径前缀
};

export default nextConfig;
