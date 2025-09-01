import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Rider ride request
    addRide: builder.mutation({
      query: (rideinfo) => ({
        url: "/rides/request",
        method: "POST",
        data: rideinfo,
      }),
      invalidatesTags: ["RIDER"],
    }),

    // Rider ride history
    rideHistory: builder.query({
      query: () => ({
        url: "/rider/me-history",
        method: "GET",
      }),
      providesTags: ["RIDER", "DRIVER"],
    }),

    // Driver incoming requests
    incomingRequests: builder.query({
      query: () => ({
        url: "/rides/all-rides",
        method: "GET",
      }),
      providesTags: ["DRIVER", "ADMIN"],
    }),

    // Driver accept ride request
    acceptRide: builder.mutation({
      query: (rideId) => ({
        url: `/rides/accept/${rideId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // Driver reject ride request
    rejectRide: builder.mutation({
      query: (rideId) => ({
        url: `/rides/reject/${rideId}`,
        method: "PUT",
      }),
      invalidatesTags: ["DRIVER", "RIDER"],
    }),
  }),
});

export const {
  useAddRideMutation,
  useRideHistoryQuery,
  useIncomingRequestsQuery,
  useAcceptRideMutation,
  useRejectRideMutation,
} = rideApi;
