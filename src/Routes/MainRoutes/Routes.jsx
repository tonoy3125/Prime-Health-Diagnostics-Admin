import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import PublicRoutes from "../PublicRoutes/PublicRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Navigate to="/admin/signin" replace />,
      },
      ...PublicRoutes,
    ],
  },
]);

export default router;
