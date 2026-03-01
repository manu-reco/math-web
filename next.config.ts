import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/math-web",
  assetPrefix: "/math-web/",
};

module.exports = nextConfig;
