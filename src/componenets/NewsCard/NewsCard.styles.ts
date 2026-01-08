import type { SxProps, Theme } from '@mui/material';

export const newsStyles = {
  headerBox: {
    mb: 2,
  } as SxProps<Theme>,

  headerTitle: {
    fontWeight: 600,
    fontSize: { xs: '1rem', sm: '1.1rem' },
  } as SxProps<Theme>,

  containerBox: {
    position: 'relative',
  } as SxProps<Theme>,

  scrollBox: {
    display: 'flex',
    gap: 2,
    overflowX: 'auto',
    pb: 1,
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
  } as SxProps<Theme>,

  card: {
    flexShrink: 0,
    width: 192,
    cursor: 'pointer',
    overflow: 'hidden',
    '&:hover': {
      boxShadow: 6,
    },
    '&:hover .news-image': {
      transform: 'scale(1.1)',
    },
  } as SxProps<Theme>,

  imageBox: {
    position: 'relative',
    height: 128,
    overflow: 'hidden',
  } as SxProps<Theme>,

  cardImage: {
    height: '100%',
    transition: 'transform 0.3s ease',
  } as SxProps<Theme>,

  badge: (badgeColor: string): SxProps<Theme> => ({
    position: 'absolute',
    top: 8,
    left: 8,
    bgcolor: badgeColor,
    color: badgeColor === '#ffc474' ? '#173a3e' : '#fff',
    fontSize: 12,
    height: 22,
  }),

  cardContent: {
    p: 1.5,
  } as SxProps<Theme>,

  titleBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 0.5,
  } as SxProps<Theme>,

  title: {
    fontWeight: 500,
  } as SxProps<Theme>,

  dateLocationBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    color: 'text.secondary',
  } as SxProps<Theme>,

  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
  } as SxProps<Theme>,

  scrollButton: (side: 'left' | 'right'): SxProps<Theme> => ({
    position: 'absolute',
    [side]: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    bgcolor: '#ffc474',
    boxShadow: 2,
    width: 32,
    height: 32,
    '&:hover': { bgcolor: '#ffc474' },
  }),
};
