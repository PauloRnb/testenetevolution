import type { NextConfig } from "next";

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
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "img-src 'self' https: data:;",
              "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com 'unsafe-inline';",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
              "font-src 'self' https://fonts.gstatic.com;",
              "connect-src 'self' https://www.google-analytics.com;",
              "frame-src 'self' https://www.youtube.com https://player.vimeo.com;",
            ].join(" "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
