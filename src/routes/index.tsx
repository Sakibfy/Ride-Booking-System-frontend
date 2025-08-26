import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter, Navigate } from "react-router";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import type { TRole } from "@/types";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/rode";
import { adminSidebarItems } from "./adminSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { generateRoutes } from "@/utils/generateRoutes";
import { riderSidebarItems } from "./riderSidebarItems";
import { driverSidebarItems } from "./driverSidebarItemes";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
    ],
    
  },
 
  {
    Component:DashboardLayout,
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider",
    children: [
      { index: true, element: <Navigate to="/rider/ridehistory" /> },
      ...generateRoutes(riderSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.driver as TRole),
    path: "/diver",
    children: [
      { index: true, element: <Navigate to="/driver/EarningsDashboard" /> },
      ...generateRoutes(driverSidebarItems),
    ],
  },

  // Auth
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
]);
