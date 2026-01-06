import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const appliedCardStyles = {
  // Card wrapper
  card: {
    height: '100%',
    animation: 'fadeIn 0.3s ease-out',
    animationDelay: '0.3s',
  } as SxProps<Theme>,

  // Container for all applications
  applicationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  } as SxProps<Theme>,

  // Individual application box
  applicationBox: {
    p: 1.5,
    borderRadius: 1,
    border: 1,
    borderColor: 'divider',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    '&:hover': {
      borderColor: 'rgba(23, 58, 62, 0.3)',
      '& .app-title': {
        color: '#ffc474',
      },
    },
  } as SxProps<Theme>,

  // Application title
  applicationTitle: {
    mb: 1,
    transition: 'color 0.25s ease',
  } as SxProps<Theme>,

  // Details container
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    mb: 1,
    color: 'text.secondary',
  } as SxProps<Theme>,

  // Detail row
  detailRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
  } as SxProps<Theme>,

  // Status chip
  statusChip: {
    bgcolor: '#ffc474',
    color: '#173a3e',
    fontSize: 11,
    height: 22,
    fontWeight: 500,
  } as SxProps<Theme>,
};