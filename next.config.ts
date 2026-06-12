import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/elenco", destination: "/roster", permanent: true },
      { source: "/historia", destination: "/history", permanent: true },
      { source: "/partidas", destination: "/schedule", permanent: true },
      { source: "/stanleycup", destination: "/stanley-cup", permanent: true },
      { source: "/idealizadores", destination: "/about", permanent: true },
      { source: "/jogador/:slug", destination: "/player/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
