import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

export const Apiservices = createApi({
  reducerPath: "apiservices",
  baseQuery,
  tagTypes: ["user"],
  endpoints: (build) => ({}),
});
