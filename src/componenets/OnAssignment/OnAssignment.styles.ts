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
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(3, 1fr)' },
    gap: { xs: 1, sm: 1.5 },
    mb: { xs: 2, sm: 2 },
  } as SxProps<Theme>,

  statCard: {
    textAlign: 'center',
    p: { xs: 0.75, sm: 1 },
    bgcolor: 'rgba(23, 58, 62, 0.04)',
    borderRadius: '8px',
    border: '1px solid rgba(23, 58, 62, 0.08)',
    transition: 'all 0.2s ease',
    '&:hover': {
      bgcolor: 'rgba(23, 58, 62, 0.06)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(23, 58, 62, 0.08)',
    },
  } as SxProps<Theme>,

  statValue: {
    fontSize: { xs: '0.875rem', sm: '1rem' },
    fontWeight: 700,
    color: '#173a3e',
    mb: 0.25,
  } as SxProps<Theme>,

  statLabel: {
    fontSize: { xs: '0.563rem', sm: '0.625rem' },
    color: 'text.secondary',
    textTransform: 'capitalize',
    letterSpacing: '0.3px',
    fontWeight: 600,
  } as SxProps<Theme>,

  chartsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 1.5, sm: 2 },
    mb: { xs: 1.5, sm: 2 },
  } as SxProps<Theme>,

  chartWrapper: {
    bgcolor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: '8px',
    p: { xs: 1.5, sm: 1.5 },
    border: '1px solid rgba(0, 0, 0, 0.05)',
  } as SxProps<Theme>,

  button: {
    mt: 'auto',
    borderColor: '#173a3e',
    color: '#173a3e',
    fontWeight: 600,
    fontSize: '0.813rem',
    py: 1,
    borderRadius: '6px',
    transition: 'all 0.25s ease',
    textTransform: 'none',
    '&:hover': {
      bgcolor: '#173a3e',
      color: 'white',
      borderColor: '#173a3e',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(23, 58, 62, 0.2)',
    },
  } as SxProps<Theme>,
};
