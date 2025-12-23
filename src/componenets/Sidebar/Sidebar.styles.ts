import { sidebarColors } from '../../theme';

export const sidebarStyles = {
  // Main container
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  // Back button
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    px: 2.5,
    pt: 2,
    cursor: 'pointer',
    color: sidebarColors.muted,
    transition: 'color 0.2s ease',
    '&:hover': {
      color: sidebarColors.accent,
    },
  },

  backText: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },

  // Logo section
  logoBox: {
    px: 2.5,
    pt: 2,
    pb: 2,
  },

  // Availability section
  availabilityBox: {
    px: 2.5,
    pb: 3,
  },

  availabilityQuestion: {
    color: sidebarColors.muted,
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
    py: 1.25,
    color: sidebarColors.foreground,
    transition: 'color 0.2s ease',
    '&:hover': {
      bgcolor: 'transparent',
      color: sidebarColors.accent,
    },
  },

  menuIcon: {
    minWidth: 36,
    transition: 'color 0.2s ease',
  },

  menuText: {
    fontSize: '0.875rem',
    fontWeight: 700,
  },

  // Profile section
  profileBox: {
    p: 2,
    borderTop: `1px solid ${sidebarColors.border}`,
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },

  avatar: {
    width: 36,
    height: 36,
    bgcolor: sidebarColors.accent,
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
    color: sidebarColors.muted,
    fontSize: '0.75rem',
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

  // Hamburger menu button (TOP RIGHT corner now)
  hamburgerButton: {
    position: 'fixed',
    top: 12,
    right: 12, // Changed from 'left' to 'right'
    zIndex: 1100,
    bgcolor: 'background.paper',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    '&:hover': {
      bgcolor: 'background.paper',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    },
  },
};