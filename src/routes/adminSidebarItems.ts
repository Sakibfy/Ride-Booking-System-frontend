
import ProfileManagement from "@/pages/Admin/ProfileManagement";
import UserManagement from "@/pages/Admin/UserManagement";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "Rider Manage",
        url: "/admin/UserManagement",
        component: UserManagement,
      },
      {
        title: "Profile Manage",
        url: "/admin/ProfileManagement",
        component: ProfileManagement,
      },
    ],
  },

];
