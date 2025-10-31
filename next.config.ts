const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/dental-ai" : "",
  assetPrefix: isProd ? "/dental-ai/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
