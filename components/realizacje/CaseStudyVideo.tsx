'use client';

import Box from '@mui/material/Box';

const BORDER = 'var(--border)';

export default function CaseStudyVideo({ youtubeId, src }: { youtubeId?: string; src?: string }) {
  if (youtubeId) {
    return (
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9
          borderRadius: '4px',
          overflow: 'hidden',
          border: `1px solid ${BORDER}`,
          bgcolor: '#000',
        }}
      >
        <Box
          component="iframe"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </Box>
    );
  }

  if (src) {
    return (
      <Box
        component="video"
        controls
        playsInline
        preload="metadata"
        sx={{
          width: '100%',
          maxHeight: { xs: 300, md: 540 },
          borderRadius: '4px',
          border: `1px solid ${BORDER}`,
          bgcolor: '#000',
          display: 'block',
        }}
      >
        <source src={src} type="video/mp4" />
      </Box>
    );
  }

  return null;
}
