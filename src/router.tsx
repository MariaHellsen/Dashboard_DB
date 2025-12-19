import { createBrowserRouter } from "react-router-dom";
import { Applied } from "./pages/Dashboard/Applied";
import { NotApplied } from "./pages/Dashboard/NotApplied";
import { OnAssignmentWithApplications } from "./pages/Dashboard/OnAssignmentWithApplications";
import { NotFound } from "./pages/NotFound";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout";
import { OnAssignment} from "./pages/Dashboard/OnAssignment";
import { ConsultantsListPage } from "./pages/Consultants/ConsultantsListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ConsultantsListPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard/:consultantId",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [

      {
        path: "on-assignment-with-applications",
        element: <OnAssignmentWithApplications />,
      },
     {
        path: "on-assignment",
        element: <OnAssignment />,
      },
      {
        path: "applied",
        element: <Applied />,
      },

      {
        path: "not-applied",
        element: <NotApplied />,
      },
    ],
  },
]);