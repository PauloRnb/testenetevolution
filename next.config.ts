import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)", // aplica para todas as rotas
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // impede que o site abra dentro de iframes
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // previne interpretação errada de tipos de arquivo
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // controla info enviada no referer
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=()", // bloqueia uso de geolocalização
          },
          {
            key: "Content-Security-Policy",
            // restringe fontes de recursos para evitar injeção de código
            value:
              "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
