import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const notFoundStyles = {
  container: {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #173a3e 0%, #1e4a4f 5%, #173a3e 100%)',
    px: 2,
  } as SxProps<Theme>,

  contentBox: {
    textAlign: 'center',
    color: '#fff',
  } as SxProps<Theme>,
  
  errorCode: {
    fontSize: { xs: '4rem', sm: '4rem' },
    fontWeight: 700,
    color: '#ffc474',
    lineHeight: 1,
    mb: 2,
    textShadow: '0 4px 20px rgba(255, 196, 116, 0.3)',
  } as SxProps<Theme>,

  heading: {
    fontWeight: 600,
    mb: 2,
    color: '#fff',
  } as SxProps<Theme>,

  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    mb: 4,
    maxWidth: 400,
    mx: 'auto',
    lineHeight: 1.6,
  } as SxProps<Theme>,

  button: {
    backgroundColor: '#ffc474',
    color: '#173a3e',
    fontWeight: 600,
    px: 4,
    py: 1.5,
    borderRadius: 2,
    textTransform: 'none',
    fontSize: '1rem',
    boxShadow: '0 4px 14px rgba(255, 196, 116, 0.4)',
    '&:hover': {
      backgroundColor: '#ffb347',
      boxShadow: '0 6px 20px rgba(255, 196, 116, 0.5)',
      transform: 'translateY(-2px)',
    },
    transition: 'all 0.2s ease-in-out',
  } as SxProps<Theme>,
 
};