'use client';

import { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface MachineImageProps {
  src: string;
  alt: string;
  label: string; // shown in placeholder before real image is added
}

export default function MachineImage({ src, alt, label }: MachineImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingBottom: '60%', // 5:3 — good crop for machine photography
        overflow: 'hidden',
        background: 'linear-gradient(160deg, var(--placeholder-from) 0%, var(--placeholder-to) 100%)',
        flexShrink: 0,
      }}
    >
      {/* Placeholder — always rendered beneath the real image */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
        }}
      >
        {/* Generic machine outline icon */}
        <Box
          component="svg"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          sx={{ width: 32, height: 32 }}
        >
          <rect x="3" y="10" width="26" height="16" rx="1.5"
            stroke="var(--dim-16)" strokeWidth="1.25" />
          <path d="M3 15h26" stroke="var(--dim-10)" strokeWidth="1.25" />
          <rect x="10" y="4" width="12" height="6" rx="1"
            stroke="var(--dim-12)" strokeWidth="1.25" />
          <circle cx="9" cy="23" r="2"
            stroke="var(--dim-12)" strokeWidth="1.25" />
          <circle cx="23" cy="23" r="2"
            stroke="var(--dim-12)" strokeWidth="1.25" />
        </Box>

        <Typography
          sx={{
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--dim-18)',
            textAlign: 'center',
            px: 3,
            lineHeight: 1.5,
          }}
        >
          {label}
        </Typography>
      </Box>

      {/* Real image — replace placeholder when asset is ready */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          onError={() => setHasError(true)}
        />
      )}
    </Box>
  );
}
