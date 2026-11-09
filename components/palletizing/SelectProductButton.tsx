'use client';

import Box from '@mui/material/Box';
import { SELECT_EVENT, type ProductId } from '@/data/palletizingSpec';

const ACCENT = '#E8610A';

// Karta pakietu ustawia produkt w doborze bez przeładowania strony.
export default function SelectProductButton({ product, label }: { product: ProductId; label: string }) {
  return (
    <Box
      component="a"
      href={`?produkt=${product}#dobor`}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent(SELECT_EVENT, { detail: product }));
        document.getElementById('dobor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      sx={{
        display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.82rem', fontWeight: 800,
        color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' },
      }}
    >
      {label} →
    </Box>
  );
}
