import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({ baseUrl: "https://127.0.0.1:8002" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApiSlice;
