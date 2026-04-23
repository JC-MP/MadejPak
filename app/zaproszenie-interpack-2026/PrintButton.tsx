'use client';

import Box from '@mui/material/Box';

export default function PrintButton() {
  return (
    <Box
      component="button"
      onClick={() => window.print()}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        px: 3,
        py: 1.25,
        border: '1px solid var(--border)',
        borderRadius: '3px',
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--dim-72)',
        bgcolor: 'transparent',
        cursor: 'pointer',
        transition: 'border-color 0.15s ease, color 0.15s ease',
        '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-75)' },
        '@media print': { display: 'none !important' },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 16 16"
        fill="none"
        sx={{ width: 14, height: 14 }}
      >
        <path
          d="M4 6V2h8v4M4 11H2V6h12v5h-2M4 9h8v5H4V9z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </Box>
      Zapisz jako PDF
    </Box>
  );
}
