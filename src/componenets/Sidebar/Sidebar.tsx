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
        <Avatar sx={sidebarStyles.avatar}>MH</Avatar>
        <Box sx={sidebarStyles.profileInfo}>
          <Typography sx={sidebarStyles.userName}>
            Maria Hellsen
          </Typography>
          <Typography sx={sidebarStyles.userEmail}>
            maria.hellsen@gmail.com
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