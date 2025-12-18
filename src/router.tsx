import { createBrowserRouter } from "react-router-dom";
import { Applied } from "./pages/ConsultantDashboard/Applied";
import { NotApplied } from "./pages/ConsultantDashboard/NotApplied";
import { OnAssignment } from "./pages/ConsultantDashboard/OnAssignment";
import { ConsultantsLayout } from "./pages/ConsultantsLayout";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ConsultantsLayout />,
    errorElement: <NotFound />,
  },
      {
        path: "/on-assignment",
        element: <OnAssignment />,
      },

      {
        path: "/applied",
        element: <Applied />,
      },

      {
        path: "/not-applied",
        element: <NotApplied />,
      },
]);