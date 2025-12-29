import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const searchAssignmentStyles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    animation: 'fadeUp 0.5s ease-out 0.2s both',
  } as SxProps<Theme>,

  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    p: 2,
    '&:last-child': { pb: 2 },
  } as SxProps<Theme>,

  subtitle: {
    mb: 2,
  } as SxProps<Theme>,

  matchesContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  } as SxProps<Theme>,

  matchBox: {
    p: 1.5,
    borderRadius: 1,
    border: 1,
    borderColor: 'divider',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    '&:hover': {
      borderColor: 'rgba(23, 58, 62, 0.3)',
      '& .assignment-title': {
        color: '#ffc474',
      },
    },
  } as SxProps<Theme>,

  matchTitle: {
    mb: 1,
    lineHeight: 1.3,
    transition: 'color 0.25s ease',
  } as SxProps<Theme>,

  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
  } as SxProps<Theme>,

  detailRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
    color: 'text.secondary',
  } as SxProps<Theme>,

  button: {
    mt: 2,
    borderColor: '#173a3e',
    color: '#173a3e',
    fontWeight: 600,
    fontSize: '0.875rem',
    py: 1,
    borderRadius: '6px',
    transition: 'all 0.25s ease',
    '&:hover': {
      bgcolor: '#173a3e',
      color: 'white',
      borderColor: '#173a3e',
      transform: 'translateY(-1px)',
    },
  } as SxProps<Theme>,
};