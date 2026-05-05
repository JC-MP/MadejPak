import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/maszyny_poziome',       destination: '/maszyny/poziome-maszyny-pakujace', permanent: true },
      { source: '/contact',               destination: '/kontakt',                           permanent: true },
      { source: '/oferta',                destination: '/maszyny',                           permanent: true },
      { source: '/systemy_paletyzacji',   destination: '/maszyny/paletyzacja',               permanent: true },
      { source: '/maszyny_wagi',          destination: '/maszyny/wazenie-i-dozowanie',        permanent: true },
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
