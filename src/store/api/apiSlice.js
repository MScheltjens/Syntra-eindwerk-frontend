import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASEURL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "dogTrainerApi",
  baseQuery,
  keepUnusedDataFor: 300,
  tagtypes: ["AllDogs", "Dog", "Exercises"],
  endpoints: (builder) => ({
    getDogs: builder.query({
      query: (userId) => `/dogs?users=${userId}`,
      providesTags: ["AllDogs"],
    }),
    getDog: builder.query({
      query: (dogId) => `/dogs/${dogId}`,
      providesTags: ["Dog"],
    }),
    getDogExercise: builder.query({
      query: (dogExeId) => `/dog_exercises/${dogExeId}`,
    }),
    getExercises: builder.query({
      query: () => `/exercises`,
      providesTags: ["Exercises"],
    }),
    getExercise: builder.query({
      query: (exId) => `/exercises/${exId}`,
    }),
    addDogExe: builder.mutation({
      query: (dogExe) => ({
        url: "/dog_exercises",
        method: "POST",
        body: dogExe,
      }),
      invalidatesTags: ["Dog", "Exercises"],
    }),
    addDog: builder.mutation({
      query: (dog) => ({
        url: "/dogs",
        method: "POST",
        body: dog,
      }),
      invalidatesTags: ["AllDogs"],
      transformResponse: (response, meta, arg) => {
        console.log(response);
      },
    }),
    deleteDog: builder.mutation({
      query: (dogId) => ({
        url: `/dogs/${dogId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllDogs"],
    }),
    getOwnersAlfabetical: builder.query({
      query: () => "/users?isTrainer=false&order%5Bname%5D=asc",
    }),
    editDog: builder.mutation({
      query: ({ dogId, body }) => ({
        url: `/dogs/${dogId}`,
        method: "PATCH",
        headers: {
          accept: "application/json",
          "Content-type": "application/merge-patch+json",
        },
        body,
      }),
      invalidatesTags: ["Dog"],
    }),
    addExercise: builder.mutation({
      query: (body) => ({
        url: `/exercises`,
        method: "POST",
        body,
      }),
      transformResponse: (response, meta, arg) => {
        console.log(response);
      },
      invalidatesTags: ["Exercises"],
    }),
  }),
});

export const {
  useGetDogsQuery,
  useGetDogQuery,
  useGetDogExerciseQuery,
  useGetExercisesQuery,
  useGetExerciseQuery,
  useGetOwnersAlfabeticalQuery,
  useAddDogExeMutation,
  useAddDogMutation,
  useAddExerciseMutation,
  useDeleteDogMutation,
  useEditDogMutation,
} = apiSlice;
