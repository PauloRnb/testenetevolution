import Head from "next/head";

export default function headPage() {
  return (
    <Head>
      {/* Preload imagem LCP */}
      <link rel="preload" as="image" href="/images/lcp-image.jpg" />

      {/* Meta de segurança */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Head>
  );
}
