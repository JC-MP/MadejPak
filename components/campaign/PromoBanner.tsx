import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { SxProps, Theme } from '@mui/material/styles';
import { CAMPAIGN_MACHINES, PROMO_COPY, PROMO_RED_GRADIENT, type CampaignLang } from '@/data/campaignData';

// Czerwony pasek akcji promocyjnej: modal, podstrony maszyn i strona główna.
// Znika sam, gdy żadna maszyna nie ma już `promo: true`.
export default function PromoBanner({
  lang,
  showLinks = false,
  sx,
}: {
  lang: CampaignLang;
  showLinks?: boolean;
  sx?: SxProps<Theme>;
}) {
  const machines = Object.values(CAMPAIGN_MACHINES).filter((m) => m.promo);
  if (machines.length === 0) return null;
  const copy = PROMO_COPY[lang];
  const prefix = lang === 'en' ? '/en' : '';

  return (
    <Box sx={[{ background: PROMO_RED_GRADIENT, color: '#fff' }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: { xs: 1.1, md: 1.6 }, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'center', columnGap: 1.75, rowGap: 0.25 }}>
          <Typography sx={{ fontSize: { xs: '1.25rem', sm: '1.55rem', md: '1.8rem' }, fontWeight: 900, letterSpacing: '0.03em', lineHeight: 1.15, textTransform: 'uppercase', color: 'inherit' }}>
            {copy.banner}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.82rem', sm: '0.98rem' }, fontWeight: 700, lineHeight: 1.3, color: 'inherit' }}>
            {copy.bannerNote}
          </Typography>
        </Box>
        {showLinks && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 0.75, sm: 1 }, mt: { xs: 1, md: 1.25 } }}>
            {machines.map((m) => (
              <Box
                key={m.slug}
                component={Link}
                href={`${prefix}/maszyny/${m.slug}`}
                sx={{
                  display: 'inline-flex', alignItems: 'center', minHeight: 36, px: { xs: 1, sm: 1.5 },
                  bgcolor: '#fff', color: '#B71C1C', borderRadius: '3px',
                  fontSize: { xs: '0.74rem', sm: '0.85rem' }, fontWeight: 800, textDecoration: 'none',
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.86)' },
                }}
              >
                {m.name} →
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
