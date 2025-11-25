import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/layl-landing-page" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/layl-landing-page" : "",
};

export default nextConfig;
