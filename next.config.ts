/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 必须要有
  basePath: "/dental-ai", // 仓库名
  assetPrefix: "/dental-ai/", // 静态资源前缀
  images: {
    unoptimized: true, // 导出静态时必须加
  },
};

module.exports = nextConfig;
