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
    uploadProfileImage: build.mutation({
      query: (file) => ({
        url: "/auth/upload-profile-photo",
        method: "POST",
        body: file,
        credentials: "include",
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
  useUploadProfileImageMutation,
} = Authendpoints;
