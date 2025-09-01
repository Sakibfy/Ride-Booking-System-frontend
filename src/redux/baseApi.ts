import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosbaseQuery";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  //   baseQuery: fetchBaseQuery({
  //     baseUrl: config.baseUrl,
  //     credentials: "include",
  //   }),
  tagTypes: ["RIDER", "RIDE", "DRIVER", "ADMIN"],
  endpoints: () => ({}),
});
