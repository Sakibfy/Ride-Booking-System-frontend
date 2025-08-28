import { baseApi } from "@/redux/baseApi";


export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRide: builder.mutation({
      query: (data) => ({
        url: "/rides/request",
        method: "POST",
        body: data,
      }),
    }),
 
    userInfo: builder.query({
      query: () => ({
        url: "/rider/me-history",
        method: "GET",
      }),
      providesTags: ["RIDER"],
    }),
  }),
});

export const {
  useAddRideMutation,
  useUserInfoQuery,
} = rideApi;
