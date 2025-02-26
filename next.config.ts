import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.tailgrids.com"], // Allow images from Tailgrids CDN
  },
};

export default nextConfig;
