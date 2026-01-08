import type { SxProps, Theme } from '@mui/material';

export const dashboardLayoutStyles = {
  // Root container
  root: {
    minHeight: '100vh',
    bgcolor: 'rgb(241, 249, 250)',
    display: 'flex',
  } as SxProps<Theme>,

  // Main content area
  main: (drawerWidth: number | string) =>
    ({
      flexGrow: 1,
      ml: { xs: 0, md: `${drawerWidth}px` },
      p: 0,
      pt: { xs: 0, md: 2 },
      maxWidth: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    } as SxProps<Theme>),

  // Mobile header - sticky top bar (corporate standard)
  mobileHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    bgcolor: '#173a3e',
    display: { xs: 'flex', md: 'none' },
    alignItems: 'center',
    gap: 1.5,
    px: 2,
    py: 1,
    mb: 0,
  } as SxProps<Theme>,

  // Mobile header title
  mobileHeaderTitle: {
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '1.3rem',
  } as SxProps<Theme>,

  // Header box - welcome message
  headerBox: {
    mb: { xs: 1, md: 1 },
    px: { xs: 2, sm: 3 },
    pt: { xs: 2, md: 0 },
  } as SxProps<Theme>,

  // Title text
  title: {
    fontWeight: 600,
    color: 'text.primary',
    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
    lineHeight: 1.3,
  } as SxProps<Theme>,

  // User name highlight
  name: {
    color: '#FDA732',
    fontWeight: 700,
    fontSize: 'inherit',
  } as SxProps<Theme>,

  // Content wrapper
  contentWrapper: {
    px: { xs: 2, sm: 3 },
    pb: { xs: 2, md: 0 },
  } as SxProps<Theme>,

  // Route content
  routeContent: {
    mb: 2,
  } as SxProps<Theme>,

  // News section
  newsSection: {
    mt: 'auto',
    mb: 2,
  } as SxProps<Theme>,

  // Cards grid - responsive layout
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(auto-fit, minmax(280px, 1fr))',
    },
    gridAutoRows: {
      xs: 'auto',
      sm: '1fr',
    },
    gap: { xs: 1.5, md: 2 },
    mb: 3,
  } as SxProps<Theme>,
};

export default dashboardLayoutStyles;
