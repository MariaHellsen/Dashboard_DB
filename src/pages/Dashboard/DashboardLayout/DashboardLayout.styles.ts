import type { SxProps, Theme } from '@mui/material';

export const dashboardLayoutStyles = {
  root: {
    minHeight: '100vh',
    bgcolor: 'background.default',
    display: 'flex',
  } as SxProps<Theme>,

  main: (drawerWidth: number | string) => ({
    flexGrow: 1,
    ml: { xs: 0, md: `${drawerWidth}px` },
    p: { xs: 2, sm: 3 },
    pt: { xs: 8, md: 3 },
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  }) as SxProps<Theme>,

  headerBox: {
    mb: 3,
  } as SxProps<Theme>,

  title: {
    fontWeight: 600,
    color: 'text.primary',
    fontSize: { xs: '1.1rem', sm: '1.5rem' },
  } as SxProps<Theme>,

  name: {
    color: '#ffc474',
    fontWeight: 700,
    fontSize: 'inherit',
  } as SxProps<Theme>,

  routeContent: {
    mb: 4,
  } as SxProps<Theme>,

  newsSection: {
    mt: 'auto',
    mb: 3,
  } as SxProps<Theme>,
};

export default dashboardLayoutStyles;
