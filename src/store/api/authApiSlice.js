import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_mathias/eindwerk",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: `/api/login_check`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApiSlice;
