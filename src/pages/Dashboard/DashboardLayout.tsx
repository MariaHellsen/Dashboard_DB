import { Outlet } from "react-router-dom";
import { Sidebar } from "../../componenets/Sidebar/Sidebar";
import { NewsFromDevBay } from "../../componenets/NewsFromDevBay";
import { Availability } from "../../componenets/Availability";

export const DashboardLayout = () => {
  return (
    <>
    <Sidebar />
     <main>
        <Outlet />
     </main>
    <NewsFromDevBay />
    <Availability />
    </>
  );
};