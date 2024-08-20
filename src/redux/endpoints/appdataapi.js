import { Apiservices } from "../middlewares/apiservices";

const headers = {
  "content-type": "application/json",
};

const Appdataendpoints = Apiservices.injectEndpoints({
  endpoints: (build) => ({
    getweatherData: build.query({
      query: ({ latitude, longitude }) => ({
        url: `/weather/${latitude}/${longitude}`,
        method: "GET",
        headers,
      }),
    }),
    getStateData: build.query({
      query: () => ({
        url: `/market/state-data`,
        method: "GET",
        headers,
      }),
      transformResponse: (response) => response?.data,
    }),
    getLocalMarketName: build.mutation({
      query: (state_dist) => ({
        url: "/market/marketname-data",
        method: "POST",
        headers,
        body: state_dist,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetweatherDataQuery, useGetStateDataQuery , useGetLocalMarketNameMutation} =
  Appdataendpoints;
