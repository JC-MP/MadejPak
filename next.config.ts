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
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000, // 1 rok
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
