import { Apiservices } from "../middlewares/apiservices";

const headers = {
  "content-type": "application/json",
};

const Authendpoints = Apiservices.injectEndpoints({
  endpoints: (build) => ({
    signupUser: build.mutation({
      query: (userinfo) => ({
        url: "/signup",
        method: "POST",
        body: userinfo,
        headers,
        credentials: "include",
      }),
    }),
    loginUser: build.mutation({
      query: (userinfo) => ({
        url: "/login",
        method: "POST",
        body: userinfo,
        headers,
        credentials: "include",
      }),
    }),
    passwordChange: build.mutation({
      query: (password) => ({
        url: "/passwordchange",
        method: "POST",
        body: password,
        headers,
        credentials: "include",
      }),
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
        headers,
      }),
    }),
    signoutUser: build.mutation({
      query: () => ({
        url: "/signout",
        method: "POST",
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
} = Authendpoints;
