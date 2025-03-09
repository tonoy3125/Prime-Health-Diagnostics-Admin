import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRoutes from "../PublicRoutes/PublicRoutes";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import Home from "../../DashBoardPages/DashBoardHome/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import AdminChat from "../../DashBoardPages/DashboardAdminChat/AdminChat";
import Users from "../../DashBoardPages/DashboardUsers/Users";
import DashboardBookmark from "../../DashBoardPages/DashboardBookMark/DashboardBookmark";
import DashboardContact from "../../DashBoardPages/DashboardContact/DashboardContact";

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
      {
        path: "/dashboard/chat",
        element: <AdminChat />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/bookmark",
        element: <DashboardBookmark />,
      },
      {
        path: "/dashboard/contact",
        element: <DashboardContact />,
      },
    ],
  },
]);

export default router;
