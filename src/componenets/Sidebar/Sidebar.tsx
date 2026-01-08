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
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  X,
} from 'lucide-react';
import logo from '../../assets/logo_full.svg';
import { sidebarStyles, sidebarColors } from './Sidebar.styles';

// Menu items
const menuItems = [
  { title: 'Dashboard', icon: LayoutDashboard },
  { title: 'My Profile', icon: User },
  { title: 'My CVs', icon: FileText },
  { title: 'Assignments', icon: Briefcase },
  { title: 'Reviews', icon: Star },
  { title: 'Time reporting', icon: Clock },
  { title: 'Contacts', icon: Users },
];

const DRAWER_WIDTH = 250;

// Types
interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => unknown;
}

interface MobileMenuButtonProps {
  onClick: () => unknown;
}

// Sidebar content
const SidebarContent = () => {
  const [user, setUser] = useState<{
    name?: string;
    surname?: string;
    email?: string;
    avatar?: string;
  } | null>(null);
  const { consultantId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      if (!consultantId) {
        setUser(null);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3001/consultants/${consultantId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, [consultantId]);

  const getInitials = (name: string): string => {
    const [first, last] = name.split(' ');
    return (first[0] + (last?.[0] ?? '')).toUpperCase();
  };

  return (
    <Box sx={sidebarStyles.container}>
      <Box sx={sidebarStyles.logoBox}>
        <Box component="img" src={logo} alt="DevelopersBay Logo" sx={sidebarStyles.logoImage} />
      </Box>

      <Box sx={sidebarStyles.availabilityBox}>
        <Typography sx={sidebarStyles.availabilityQuestion}>When are you available?</Typography>
        <Box sx={sidebarStyles.dateContainer}>
          <Typography sx={sidebarStyles.dateText}>yyyy-mm-dd</Typography>
          <Calendar size={16} color={sidebarColors.foreground} />
        </Box>
      </Box>

      <Box component="nav" sx={sidebarStyles.navBox}>
        <List disablePadding>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = item.title === 'Dashboard';

            return (
              <ListItem key={item.title} disablePadding>
                <ListItemButton
                  sx={
                    isActive
                      ? {
                          ...sidebarStyles.menuButton,
                          color: sidebarColors.accent,
                        }
                      : sidebarStyles.menuButton
                  }
                >
                  <ListItemIcon sx={sidebarStyles.menuIcon}>
                    <IconComponent
                      size={20}
                      color={isActive ? sidebarColors.accent : sidebarColors.foreground}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={
                      isActive
                        ? {
                            ...sidebarStyles.menuText,
                            color: sidebarColors.accent,
                          }
                        : sidebarStyles.menuText
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box sx={sidebarStyles.profileBox}>
        <Avatar sx={sidebarStyles.avatar} src={user?.avatar}>
          {!user?.avatar && getInitials(`${user?.name ?? ''} ${user?.surname ?? ''}`)}
        </Avatar>
        <Box sx={sidebarStyles.profileInfo}>
          <Typography sx={sidebarStyles.userName}>
            {user ? `${user.name || ''} ${user.surname || ''}`.trim() || 'Unknown' : 'Unknown'}
          </Typography>
          <Typography sx={sidebarStyles.userEmail}>{user?.email ?? 'Unknown'}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

// Sidebar component
export const Sidebar = ({ mobileOpen = false, onMobileClose }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Mobile version
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
          <IconButton
            onClick={onMobileClose}
            sx={sidebarStyles.closeButton}
            aria-label="Close menu"
          >
            <X size={16} />
          </IconButton>
        </Box>
        <SidebarContent />
      </Drawer>
    );
  }

  // Desktop version
  return (
    <Box component="aside" sx={sidebarStyles.desktopSidebar(DRAWER_WIDTH)}>
      <SidebarContent />
    </Box>
  );
};

// Mobile hamburger menu button
export const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) return null;

  return (
    <IconButton onClick={onClick} sx={sidebarStyles.hamburgerButton} aria-label="Open menu">
      <Menu size={26} strokeWidth={3} style={{ transform: 'scaleY(0.85)' }} />
    </IconButton>
  );
};
