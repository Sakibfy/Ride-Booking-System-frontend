import IncomingRequests from "@/pages/Driver/IncomingRequests";
import type { ISidebarItem } from "@/types";


export const driverSidebarItems: ISidebarItem[] = [
  {
    title: " Driver History",
    items: [
      {
        title: "driver",
        url: "/driver/incomingrequests",
        component: IncomingRequests,
      },
    ],
  },
];
