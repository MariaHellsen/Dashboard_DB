import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { Box, useMediaQuery, useTheme, Typography } from '@mui/material';
import { dashboardLayoutStyles } from './DashboardLayout.styles';
import { Sidebar, MobileMenuButton } from "../../../componenets/Sidebar/Sidebar";
import { NewsCard } from "../../../componenets/NewsCard/NewsCard";
import { AvailabilityCard } from "../../../componenets/Availiability/Availability";
import { SearchAssignmentCard } from "../../../componenets/TopMatch/SearchAssignmentCard";
import { useConsultant } from "../../../hooks/useConsultant";
import { AppliedCard } from "../../../componenets/AppliedCard/AppliedCard";
import { OnAssignmentCard } from "../../../componenets/OnAssignment/OnAssignment";

const DRAWER_WIDTH = 224;

export const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { getFirstName, loading } = useConsultant();

  const handleToggleMobile = () => setMobileOpen((s) => !s);
  const handleCloseMobile = () => setMobileOpen(false);

  return (
    <Box sx={dashboardLayoutStyles.root}>
      {isMobile && <MobileMenuButton onClick={handleToggleMobile} />}
      <Sidebar mobileOpen={mobileOpen} onMobileClose={handleCloseMobile} />

      {/* Main Content Container */}
      <Box component="main" sx={dashboardLayoutStyles.main(DRAWER_WIDTH)}>
        {/* Header */}
        <Box sx={dashboardLayoutStyles.headerBox}>
          <Typography variant="h5" sx={dashboardLayoutStyles.title}>
            Welcome to your consultant dashboard,{' '}
            <Typography component="span" sx={dashboardLayoutStyles.name}>
              {loading ? '...' : `${getFirstName()}!`}
            </Typography>
          </Typography>
        </Box>

        {/* Route Content */}
        <Box sx={dashboardLayoutStyles.routeContent}>
          <Outlet />
        </Box>

        {/* News Section - appears below route content */}
        <Box sx={dashboardLayoutStyles.newsSection}>
          <NewsCard />
        </Box>

        {/* Availability Section */}
        <Box>
          <AvailabilityCard />
        </Box>
        {/* Search Assignment Section*/}
        <Box sx={{ mt: 2 }}>
          <SearchAssignmentCard />
        </Box>
        <Box sx={{ mt: 2 }}>
          <AppliedCard />
        </Box>
        <Box sx={{ mt: 2 }}>
          <OnAssignmentCard />
        </Box>
      </Box>
    </Box>
  );
};