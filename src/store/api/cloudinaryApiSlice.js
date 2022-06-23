import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cloudinaryApiSlice = createApi({
  reducerPath: "cloudinaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.cloudinary.com/v1_1/ddl69s3ju",
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (body) => ({
        url: "/image/upload",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = cloudinaryApiSlice;
