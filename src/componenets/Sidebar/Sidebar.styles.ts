export const sidebarColors = {
  background: '#173a3e',
  foreground: '#ffffff',
  muted: '#ffffff',
  accent: '#FDA732',
};

export const sidebarStyles = {
  // Main container
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

   logoBox: {
    px: 2.5,
    pt: 2,
    pb: 2,
  },
  
    logoImage: {
    height: 30,
    width: 'auto',
  },

    availabilityBox: {
    px: 2.5,
    pb: 3,
  },

  availabilityQuestion: {
    color: sidebarColors.foreground,
    fontSize: '0.875rem',
    mb: 1,
  },

  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },

  dateText: {
    color: sidebarColors.foreground,
    fontSize: '0.875rem',
  },

  // Navigation section
  navBox: {
    flex: 1,
    overflow: 'auto',
  },

  menuButton: {
    px: 2.5,
    py: 0.8,
    color: sidebarColors.foreground,
    transition: 'color 0.2s ease',
    '&:hover': {
      bgcolor: 'transparent',
      color: sidebarColors.accent,
    },
  },

  menuIcon: {
    minWidth: 44,
    transition: 'color 0.2s ease',
  },

  menuText: {
    fontSize: '1rem',
    fontWeight: 500,
  },

  // Profile section
  profileBox: {
    p: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },

  avatar: {
    width: 36,
    height: 36,
    bgcolor: '#FFC474',
    color: sidebarColors.background,
    fontSize: '0.875rem',
    fontWeight: 500,
  },

  profileInfo: {
    flex: 1,
    minWidth: 0,
  },

  userName: {
    color: sidebarColors.foreground,
    fontWeight: 500,
    fontSize: '0.875rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  userEmail: {
    color: sidebarColors.foreground,
    fontSize: '0.75rem',
    fontWeight: 300,
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  // Mobile drawer
  drawer: (width: number | string) => ({
    '& .MuiDrawer-paper': {
      width: width,
      bgcolor: sidebarColors.background,
    },
  }),

  closeButtonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    p: 1,
  },

  closeButton: {
    color: sidebarColors.foreground,
    '&:hover': {
      color: sidebarColors.accent,
    },
  },

  // Desktop sidebar
  desktopSidebar: (width: number | string) => ({
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: width,
    bgcolor: sidebarColors.background,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1200,
  }),

  // Hamburger menu button 
  hamburgerButton: {
    bgcolor: sidebarColors.background,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    padding: '8px',
    minWidth: 'auto',
    '&:hover': {
      bgcolor: sidebarColors.foreground,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
    },
  },
};