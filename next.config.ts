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
          {
            key: "Content-Security-Policy",
            value: `default-src 'self';
            img-src 'self' https: data:;
            script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com data:;
            connect-src 'self' https://www.google-analytics.com;
            frame-src 'self' https://www.youtube.com https://player.vimeo.com https://wa.me;`
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
