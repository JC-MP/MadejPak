'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InquiryForm, { type SummaryLine } from '@/components/forms/InquiryForm';

const ACCENT = '#E8610A';
const BORDER = 'var(--border)';

interface Labels {
  needsLabel: string;
  boxLabel: string; boxPlaceholder: string;
  outputLabel: string; outputPlaceholder: string;
  subject: string; summaryNeeds: string; summaryBox: string; summaryOutput: string;
}

export default function CartoningInquiry({ lang, labels, needs }: { lang: 'pl' | 'en'; labels: Labels; needs: { id: string; label: string }[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set(needs.slice(0, 3).map((n) => n.id)));
  const [box, setBox] = useState('');
  const [output, setOutput] = useState('');

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  const summary: SummaryLine[] = [];
  const scope = needs.filter((n) => selected.has(n.id)).map((n) => n.label).join(', ');
  if (scope) summary.push({ label: labels.summaryNeeds, value: scope });
  if (box.trim()) summary.push({ label: labels.summaryBox, value: box.trim() });
  if (output.trim()) summary.push({ label: labels.summaryOutput, value: output.trim() });

  const fieldSx = { '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: ACCENT }, '& .MuiInputLabel-root.Mui-focused': { color: ACCENT } };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <Box>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--dim-55)', mb: 1 }}>{labels.needsLabel}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {needs.map((n) => {
            const active = selected.has(n.id);
            return (
              <Box
                key={n.id}
                component="button"
                type="button"
                aria-pressed={active}
                onClick={() => toggle(n.id)}
                sx={{
                  px: 1.5, py: 0.8, minHeight: 36, borderRadius: '3px', cursor: 'pointer', fontFamily: 'inherit',
                  border: `1px solid ${active ? ACCENT : BORDER}`,
                  bgcolor: active ? `color-mix(in srgb, ${ACCENT} 12%, var(--bg-card))` : 'var(--bg-card)',
                  color: active ? 'var(--text)' : 'var(--dim-72)', fontSize: '0.84rem', fontWeight: active ? 700 : 500,
                  '&:hover': { borderColor: ACCENT },
                  '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: 2 },
                }}
              >
                {n.label}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        <TextField label={labels.boxLabel} placeholder={labels.boxPlaceholder} value={box} onChange={(e) => setBox(e.target.value)} sx={fieldSx} />
        <TextField label={labels.outputLabel} placeholder={labels.outputPlaceholder} value={output} onChange={(e) => setOutput(e.target.value)} sx={fieldSx} />
      </Box>
      <InquiryForm lang={lang} subject={labels.subject} summary={summary} eventCategory="cartoning_inquiry" />
    </Box>
  );
}
