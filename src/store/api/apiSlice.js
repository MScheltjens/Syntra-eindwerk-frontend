import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "dogTrainerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://127.0.0.1:8002/api/" }),
  tagtypes: ["Dog"],
  endpoints: (builder) => ({
    getClientsAndDogs: builder.query({
      query: (trainerId) => `/trainers/${trainerId}`,
    }),
    getClient: builder.query({
      query: (clientId) => `/clients/${clientId}`,
    }),
    getDog: builder.query({
      query: (dogId) => `/dogs/${dogId}`,
      providesTags: ["Dog"],
    }),
    getDogExercise: builder.query({
      query: (dogExeId) => `/dog_exes/${dogExeId}`,
    }),
    getExercises: builder.query({
      query: () => `/exercises`,
    }),
    getExercise: builder.query({
      query: (exId) => `/exercises/${exId}`,
    }),
    addDogExe: builder.mutation({
      query: (dogExe) => ({
        url: "/dog_exes",
        method: "POST",
        body: dogExe,
      }),
      invalidatesTags: ["Dog"],
    }),
  }),
});

export const {
  useGetClientsAndDogsQuery,
  useGetClientQuery,
  useGetDogQuery,
  useGetDogExerciseQuery,
  useGetExercisesQuery,
  useGetExerciseQuery,
  useAddDogExeMutation,
} = apiSlice;
