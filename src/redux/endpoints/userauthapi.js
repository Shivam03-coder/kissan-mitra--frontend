import { Apiservices } from "../middlewares/apiservices";

const headers = {
  "content-type": "application/json",
};

const Authendpoints = Apiservices.injectEndpoints({
  endpoints: (build) => ({
    signupUser: build.mutation({
      query: (userinfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userinfo,
        headers,
        credentials: "include",
      }),
    }),
    loginUser: build.mutation({
      query: (userinfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userinfo,
        headers,
        credentials: "include",
      }),
    }),
    passwordChange: build.mutation({
      query: (password) => ({
        url: "/auth/passwordchange",
        method: "POST",
        body: password,
        headers,
        credentials: "include",
      }),
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        headers,
      }),
    }),
    signoutUser: build.mutation({
      query: () => ({
        url: "/auth/signout",
        method: "POST",
        headers,
      }),
    }),
    getweatherData: build.query({
      query: ({ latitude, longitude }) => ({
        url: `/weather/${latitude}/${longitude}`,
        method: "GET",
        headers,
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  usePasswordChangeMutation,
  useLogoutUserMutation,
  useSignoutUserMutation,
  useGetweatherDataQuery
} = Authendpoints;
