import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    /* Hero runs at quality 70 to hold the first-view weight budget. */
    qualities: [70, 75],
  },
  async redirects() {
    return [
      /* English is rewritten to /en internally; the /en URLs themselves must
         not be indexable, so redirect them to the clean unprefixed URLs. */
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
