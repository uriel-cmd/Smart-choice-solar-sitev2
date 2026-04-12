import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true
      },
      {
        source: "/es/terms-and-conditions",
        destination: "/es/terms",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
