
import { role } from "@/constants/rode";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { riderSidebarItems } from "@/routes/riderSidebarItems";
import type { TRole } from "@/types";


export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.rider:
      return [...riderSidebarItems];
    default:
      return [];
  }
};