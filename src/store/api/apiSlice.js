import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "../../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://wdev2.be/fs_mathias/eindwerk/api",
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
  tagtypes: ["AllDogs", "Dog"],
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
      invalidatesTags: ["Dog"],
    }),
    addDog: builder.mutation({
      query: (dog) => ({
        url: "/dogs",
        method: "POST",
        body: dog,
      }),
      invalidatesTags: ["AllDogs"],
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
  useDeleteDogMutation,
} = apiSlice;
