import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Avatar,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  Briefcase, 
  Star, 
  Clock, 
  Users, 
  Calendar,
  Menu,
  X
} from 'lucide-react';
import { sidebarColors } from '../../theme';
import logo from '../../assets/logo_full.svg';
import { sidebarStyles } from './Sidebar.styles';

// Menu items data
const menuItems = [
  { title: 'Dashboard', icon: LayoutDashboard },
  { title: 'My Profile', icon: User },
  { title: 'My CVs', icon: FileText },
  { title: 'Assignments', icon: Briefcase },
  { title: 'Reviews', icon: Star },
  { title: 'Time reporting', icon: Clock },
  { title: 'Contacts', icon: Users },
];

const DRAWER_WIDTH = 224;

// Sidebar types
interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => unknown;
}

interface MobileMenuButtonProps {
  onClick: () => unknown;
}

// Main sidebar content
const SidebarContent = () => {
  const [user, setUser] = useState<{ name?: string; surname?: string; email?: string; avatar?: string } | null>(null);
  const location = useLocation();

  const consultantId = (() => {
    const m = location.pathname.match(/\/dashboard\/([^/]+)/);
    return m ? m[1] : null;
  })();

  useEffect(() => {
    if (!consultantId) {
      setUser(null);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:3001/consultants/${consultantId}`);
        if (!res.ok) return;
        const data = await res.json();
        setUser(data);
      } catch (e) {
        // ignore
      }
    };
    fetchUser();
  }, [consultantId]);

  const getInitials = (name = '', surname = ''): string => {
    if (name && surname) return (name[0] + surname[0]).toUpperCase();
    const parts = (name || '').split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return '';
  };

  return (
    <Box sx={sidebarStyles.container}>
      {/* Logo */}
      <Box sx={sidebarStyles.logoBox}>
        <Box component="img" src={logo} alt="DevelopersBay Logo" sx={sidebarStyles.logoImage} />
      </Box>

      {/* Availability Section */}
      <Box sx={sidebarStyles.availabilityBox}>
        <Typography sx={sidebarStyles.availabilityQuestion}>
          When are you available?
        </Typography>
        <Box sx={sidebarStyles.dateContainer}>
          <Typography sx={sidebarStyles.dateText}>
            yyyy-mm-dd
          </Typography>
          <Calendar size={16} color={sidebarColors.foreground} />
        </Box>
      </Box>

      {/* Navigation Menu */}
      <Box component="nav" sx={sidebarStyles.navBox}>
        <List disablePadding>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = item.title === 'Dashboard';
            
            return (
              <ListItem key={item.title} disablePadding>
                <ListItemButton sx={isActive ? { ...sidebarStyles.menuButton, color: sidebarColors.accent } : sidebarStyles.menuButton}>
                  <ListItemIcon sx={sidebarStyles.menuIcon}>
                    <IconComponent size={20} color={isActive ? sidebarColors.accent : sidebarColors.foreground} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.title}
                    primaryTypographyProps={isActive ? { ...sidebarStyles.menuText, color: sidebarColors.accent } : sidebarStyles.menuText}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* User Profile */}
      <Box sx={sidebarStyles.profileBox}>
        <Avatar sx={sidebarStyles.avatar} src={user?.avatar}>
          {!user?.avatar && getInitials(user?.name ?? '', user?.surname ?? '')}
        </Avatar>
        <Box sx={sidebarStyles.profileInfo}>
          <Typography sx={sidebarStyles.userName}>
            {user ? (`${user.name || ''} ${user.surname || ''}`.trim() || 'Unknown') : 'Unknown'}
          </Typography>
          <Typography sx={sidebarStyles.userEmail}>
            {user?.email ?? 'Unknown'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// Main Sidebar Component
export const Sidebar = ({ mobileOpen = false, onMobileClose }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Mobile version - sliding drawer
  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        sx={sidebarStyles.drawer(DRAWER_WIDTH)}
      >
        <Box sx={sidebarStyles.closeButtonBox}>
          <IconButton onClick={onMobileClose} sx={sidebarStyles.closeButton}>
            <X size={20} />
          </IconButton>
        </Box>
        <SidebarContent />
      </Drawer>
    );
  }

  // Desktop version - fixed sidebar
  return (
    <Box component="aside" sx={sidebarStyles.desktopSidebar(DRAWER_WIDTH)}>
      <SidebarContent />
    </Box>
  );
};

// Mobile hamburger menu button (top right corner)
export const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) return null;

  return (
    <IconButton onClick={onClick} sx={sidebarStyles.hamburgerButton}>
      <Menu size={24} />
    </IconButton>
  );
};