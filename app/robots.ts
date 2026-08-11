import type { MetadataRoute } from 'next';
import { BLOCK_INDEXING, SITE_URL } from '@/lib/seo.config';

// Ścieżki, których nie chcemy w crawlu/indeksie — te same reguły dla każdego bota.
// (bot z własną grupą ignoruje grupę '*', więc wykluczenia trzeba powtórzyć)
const DISALLOW = ['/api/', '/polityka-prywatnosci', '/polityka-cookies', '/informacje-prawne', '/*?_rsc=*'];

// Boty, które jawnie zapraszamy: klasyczne wyszukiwarki + crawlery AI-search (GEO).
const WELCOME_BOTS = [
  'Googlebot',       // Google Search
  'Bingbot',         // Bing + Copilot
  'Applebot',        // Apple / Siri / Spotlight
  'OAI-SearchBot',   // ChatGPT Search (OpenAI)
  'ChatGPT-User',    // ChatGPT — przeglądanie na życzenie użytkownika
  'PerplexityBot',   // Perplexity AI
  'Google-Extended', // grounding w Gemini / AI Overviews (nie pobiera stron, czyta tylko regułę)
];

export default function robots(): MetadataRoute.Robots {
  if (BLOCK_INDEXING) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...WELCOME_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
