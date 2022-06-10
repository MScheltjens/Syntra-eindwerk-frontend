import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: `/app_json_login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApiSlice;
