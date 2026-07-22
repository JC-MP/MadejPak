import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo.config';
import { REALIZACJE } from '@/data/realizacjeData';
import { MADEJPAK_MACHINES } from '@/data/madejpakMachinesData';
import { MADEJPAK_MACHINES_EN } from '@/data/madejpakMachinesDataEn';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ─── Strony statyczne ───────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL,                                          lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/o-firmie`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/rozwiazania`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/rozwiazania/automatyzacja-pakowania`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/rozwiazania/robotyzacja-pakowania`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/rozwiazania/integracja-linii-pakujacych`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/rozwiazania/projekty-custom`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/maszyny`,                             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/maszyny/madejpak`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/partnerzy`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/pionowe-maszyny-pakujace`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/poziome-maszyny-pakujace`,              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-45-s`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-50-s`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-55-s`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/paletyzacja`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/robotyzacja-pakowania`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/workowanie`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/wazenie-i-dozowanie`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/transport-i-koniec-linii`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/owijarki-do-palet`,           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/maszyny/gotowe-linie-pakujace`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/realizacje`,                          lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/branze`,                              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/partnerzy`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/serwis`,                              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/coboty-w-akcji`,                       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/targi-i-wydarzenia`,                  lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${SITE_URL}/kontakt`,                             lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
  ];

  // ─── Dynamiczne strony realizacji ──────────────────────────────────────────
  const realizacjeRoutes: MetadataRoute.Sitemap = REALIZACJE
    .filter((r) => r.status === 'pelne')
    .map((r) => ({
      url:             `${SITE_URL}/realizacje/${r.slug}`,
      lastModified:    now,
      changeFrequency: 'monthly' as const,
      priority:        0.7,
    }));

  // ─── English static routes ─────────────────────────────────────────────────
  const enStaticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/en`,                                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/en/o-firmie`,                                     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/rozwiazania`,                                  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/en/rozwiazania/automatyzacja-pakowania`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/rozwiazania/robotyzacja-pakowania`,            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/rozwiazania/integracja-linii-pakujacych`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/rozwiazania/projekty-custom`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/maszyny`,                                      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/maszyny/madejpak`,                             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/partnerzy`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/pionowe-maszyny-pakujace`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-45-s`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-50-s`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-55-s`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-65-evo`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/paletyzacja`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/robotyzacja-pakowania`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/workowanie`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/wazenie-i-dozowanie`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/transport-i-koniec-linii`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/owijarki-do-palet`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/maszyny/gotowe-linie-pakujace`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/realizacje`,                                   lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/en/branze`,                                       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/partnerzy`,                                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/en/serwis`,                                       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/en/targi-i-wydarzenia`,                           lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${SITE_URL}/en/kontakt`,                                      lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
  ];

  // ─── English dynamic case study routes ────────────────────────────────────
  const enRealizacjeRoutes: MetadataRoute.Sitemap = REALIZACJE
    .filter((r) => r.status === 'pelne')
    .map((r) => ({
      url:             `${SITE_URL}/en/realizacje/${r.slug}`,
      lastModified:    now,
      changeFrequency: 'monthly' as const,
      priority:        0.7,
    }));


  // ─── Podstrony maszyn własnych MadejPak ────────────────────────────────────
  const madejpakMachineRoutes: MetadataRoute.Sitemap = MADEJPAK_MACHINES.map((m) => ({
    url:             `${SITE_URL}/maszyny/madejpak/${m.id}`,
    lastModified:    now,
    changeFrequency: 'monthly' as const,
    priority:        0.7,
  }));

  const enMadejpakMachineRoutes: MetadataRoute.Sitemap = MADEJPAK_MACHINES_EN.map((m) => ({
    url:             `${SITE_URL}/en/maszyny/madejpak/${m.id}`,
    lastModified:    now,
    changeFrequency: 'monthly' as const,
    priority:        0.7,
  }));

  return [...staticRoutes, ...realizacjeRoutes, ...enStaticRoutes, ...enRealizacjeRoutes, ...madejpakMachineRoutes, ...enMadejpakMachineRoutes];
}
