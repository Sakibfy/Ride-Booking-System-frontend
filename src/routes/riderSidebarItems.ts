import RideHistory from "@/pages/Rider/RideHistory";
import type { ISidebarItem } from "@/types";


export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "Ride History",
    items: [
      {
        title: "Ride",
        url: "/rider/ridehistory",
        component: RideHistory,
      },
    ],
  },
];
