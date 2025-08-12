import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // aplica para todas as rotas
        headers: [
          // Evita clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Evita sniffing de tipos de arquivo
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Controla privacidade de referência
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Bloqueia APIs não utilizadas
          {
            key: "Permissions-Policy",
            value: "geolocation=()", // pode adicionar mais se necessário
          },
          // Regras de carregamento de recursos (compatível com WhatsApp e fontes do Google)
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              img-src 'self' https: data:;
              script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
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
};

export default nextConfig;
