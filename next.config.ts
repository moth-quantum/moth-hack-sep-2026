import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://moth-quantum.github.io/moth-hack-sep-2026/.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH="/moth-hack-sep-2026"; local dev leaves it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static HTML in ./out, no Node server needed
  basePath,
  trailingSlash: true, // emits /index.html style paths that GitHub Pages serves directly
  images: { unoptimized: true },
};

export default nextConfig;
