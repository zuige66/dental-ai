/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ 静态导出
  basePath: "/dental-ai", // ✅ 仓库名
  assetPrefix: "/dental-ai/", // ✅ 静态资源路径前缀
  images: {
    unoptimized: true, // ✅ 关闭 Image 优化
  },
};

export default nextConfig;
