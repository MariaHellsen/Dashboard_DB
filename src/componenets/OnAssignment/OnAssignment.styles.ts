import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const onAssignmentCardStyles = {
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

  statsGrid: {
    display: 'flex',
    gap: 2,
    justifyContent: 'space-between',
    mb: 2,
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
