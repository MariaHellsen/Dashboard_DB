import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { Sidebar, MobileMenuButton } from "../../componenets/Sidebar/Sidebar";
import { NewsFromDevBay } from "../../componenets/NewsFromDevBay";
import { Availability } from "../../componenets/Availability";

export const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMobile = () => setMobileOpen((s) => !s);
  const handleCloseMobile = () => setMobileOpen(false);

  return (
    <>
      <MobileMenuButton onClick={handleToggleMobile} />
      <Sidebar mobileOpen={mobileOpen} onMobileClose={handleCloseMobile} />
      <main>
        <Outlet />
      </main>
      <NewsFromDevBay />
      <Availability />
    </>
  );
};