import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── istniejące ────────────────────────────────────────────────────────────
      { source: '/maszyny_poziome',     destination: '/maszyny/poziome-maszyny-pakujace', permanent: true },
      { source: '/contact',             destination: '/kontakt',                           permanent: true },
      { source: '/oferta/:path*',       destination: '/maszyny',                           permanent: true },
      { source: '/systemy_paletyzacji', destination: '/maszyny/paletyzacja',               permanent: true },
      { source: '/maszyny_wagi',        destination: '/maszyny/wazenie-i-dozowanie',       permanent: true },

      // ── stare 5xx ─────────────────────────────────────────────────────────────
      { source: '/home',  destination: '/',                   permanent: true },
      { source: '/targi', destination: '/targi-i-wydarzenia', permanent: true },
      { source: '/about', destination: '/o-firmie',           permanent: true },

      // ── stare 404: rodzaje-maszyn ─────────────────────────────────────────────
      { source: '/rodzaje-maszyn/maszyny-pionowe/:path*',      destination: '/maszyny/pionowe-maszyny-pakujace', permanent: true },
      { source: '/rodzaje-maszyn/wagi-wieloglowicowe/:path*',  destination: '/maszyny/wazenie-i-dozowanie',      permanent: true },
      { source: '/rodzaje-maszyn/systemy-paletyzacji/:path*',  destination: '/maszyny/paletyzacja',              permanent: true },
      { source: '/rodzaje-maszyn/:path*',                      destination: '/maszyny',                          permanent: true },

      // ── stare 404: pozostałe ──────────────────────────────────────────────────
      { source: '/maszyny-etykietujace',      destination: '/maszyny',                          permanent: true },
      { source: '/kariera',                   destination: '/o-firmie',                         permanent: true },
      { source: '/emerito',                   destination: '/partnerzy',                        permanent: true },
      { source: '/wyszukiwarka',              destination: '/maszyny',                          permanent: true },
      { source: '/nasze-produkty/:path*',     destination: '/maszyny',                          permanent: true },
      { source: '/podajniki',                 destination: '/maszyny/transport-i-koniec-linii', permanent: true },
      { source: '/linie_pakujace',            destination: '/maszyny/gotowe-linie-pakujace',    permanent: true },

      // ── stare 404: błędne linki zewnętrzne jako ścieżki ──────────────────────
      { source: '/www.essegi.com/:path*', destination: '/partnerzy', permanent: true },
      { source: '/www.gsp.it/:path*',     destination: '/partnerzy', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/logos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: [
      '@mui/material',
      '@mui/icons-material',
      '@mui/system',
    ],
  },
};

export default nextConfig;
