import type { SxProps, Theme } from '@mui/material';

export const dashboardLayoutStyles = {
  root: {
    minHeight: '100vh',
    bgcolor: 'rgb(241, 249, 250)',
    display: 'flex',
  } as SxProps<Theme>,

  main: (drawerWidth: number | string) => ({
    flexGrow: 1,
    ml: { xs: 0, md: `${drawerWidth}px` },
    p: { xs: 0, sm: 3 },
    pt: { xs: 0, md: 3 },
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  }) as SxProps<Theme>,

  mobileHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    bgcolor: 'background.paper',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    display: { xs: 'flex', md: 'none' },
    alignItems: 'center',
    gap: 2,
    px: 2,
    py: 1.5,
    mb: 0,
  } as SxProps<Theme>,

  headerBox: {
    mb: { xs: 1, md: 1},
    px: { xs: 2, md: 0 },
    pt: { xs: 2, md: 0 },
  } as SxProps<Theme>,

  title: {
    fontWeight: 600,
    color: 'text.primary',
    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.5rem' },
    lineHeight: 1.3,
  } as SxProps<Theme>,

  name: {
    color: '#ffc474',
    fontWeight: 700,
    fontSize: 'inherit',
  } as SxProps<Theme>,

  contentWrapper: {
    px: { xs: 2, md: 0 },
    pb: { xs: 2, md: 0 },
  } as SxProps<Theme>,

  routeContent: {
    mb: 2,
  } as SxProps<Theme>,

  newsSection: {
    mt: 'auto',
    mb: 2,
  } as SxProps<Theme>,

  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(auto-fit, minmax(300px, 1fr))',
      lg: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    gap: { xs: 2, md: 3 },
    mb: 3,
  } as SxProps<Theme>,
};

export default dashboardLayoutStyles;
