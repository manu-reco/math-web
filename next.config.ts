import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
  basePath: "/math-web",
  assetPrefix: "/math-web/",
};

module.exports = nextConfig;
