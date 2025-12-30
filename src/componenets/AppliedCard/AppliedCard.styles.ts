import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const appliedCardStyles = {
  card: {
    height: '100%',
    animation: 'fadeIn 0.3s ease-out',
    animationDelay: '0.3s',
  } as SxProps<Theme>,

  applicationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  } as SxProps<Theme>,

  applicationBox: {
    p: 1.5,
    borderRadius: 1,
    border: 1,
    borderColor: 'divider',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    '&:hover': {
      borderColor: '#6b7280',
      '& .app-title': {
        color: '#ffc474',
      },
    },
  } as SxProps<Theme>,

  applicationTitle: {
    mb: 1,
    transition: 'color 0.25s ease',
  } as SxProps<Theme>,

  detailsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    mb: 1,
    color: 'text.secondary',
  } as SxProps<Theme>,

  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
  } as SxProps<Theme>,

  statusChip: {
    bgcolor: '#ffc474',
    color: '#173a3e',
    fontSize: 11,
    height: 22,
    fontWeight: 500,
  } as SxProps<Theme>,
};