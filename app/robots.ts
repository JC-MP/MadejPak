import type { MetadataRoute } from 'next';
import { BLOCK_INDEXING, SITE_URL } from '@/lib/seo.config';

export default function robots(): MetadataRoute.Robots {
  if (BLOCK_INDEXING) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/polityka-prywatnosci', '/polityka-cookies', '/informacje-prawne', '/*?_rsc=*'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

