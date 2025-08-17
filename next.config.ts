import type { NextConfig } from "next";

// Import do Critters usando require para compatibilidade com TS
const Critters = require("critters-webpack-plugin");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              img-src 'self' https: data:;
              script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://www.google-analytics.com;
              frame-src 'self' https://www.youtube.com https://player.vimeo.com https://wa.me;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new Critters({
          preload: "swap", // Preload do CSS crítico
          compress: true, // Comprime CSS crítico inline
          pruneSource: true, // Remove CSS crítico do bundle final
        }),
      );
    }
    return config;
  },
};

export default nextConfig;
