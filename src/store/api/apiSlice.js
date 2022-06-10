import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.data.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "dogTrainerApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://127.0.0.1:8000/api/" }),
  baseQuery,
  tagtypes: ["Dog"],
  endpoints: (builder) => ({
    getClientsAndDogs: builder.query({
      query: (trainerId) => `/users/${trainerId}`,
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
