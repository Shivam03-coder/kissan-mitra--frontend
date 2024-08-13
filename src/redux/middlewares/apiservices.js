import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND01_API_BASEURL,
  credentials: "include",
});

export const Apiservices = createApi({
  reducerPath: "apiservices",
  baseQuery,
  tagTypes: ["user"],
  endpoints: (build) => ({}),
});
