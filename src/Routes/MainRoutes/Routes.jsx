import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRoutes from "../PublicRoutes/PublicRoutes";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import Home from "../../DashBoardPages/DashBoardHome/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/admin/signin" replace />,
      },
      ...PublicRoutes,
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/dashboard/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
