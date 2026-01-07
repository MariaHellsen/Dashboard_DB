import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout/DashboardLayout";
import { ConsultantsListPage } from "./pages/Consultants/ConsultantsListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ConsultantsListPage />,
  },
  {
    path: "/dashboard/:consultantId",
    element: <DashboardLayout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
