import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8000/api/",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().user.data.token;
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8000/api/",
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().user.token;
//     if (token) {
//       headers.set(
//         "Authorization",
//         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTQ4NTI2NjgsImV4cCI6MTY1NDkzOTA2OCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmJlIn0.bUIN_M-7tqi_2rcblgWRsxELFZ9qC22eSMZqViK3pO6SzTEKGNKjxV9AQbZvPmvP6jWapYtKNR_I3KXk9-BUHnOGMhzKcFbASfgH98eC3Qo1dHP5gXUkwAQZPv4TXm2vTCQxMG4jRqybzpOShKwSqDy12q_0zhts4NQm4MYewkJOWj_XXTfXkMY1QMqOzrld-s2o3uxUg0d6aB95apyoyV7i9mdcD7qHcIPEGwtN8HAzInA5DSBioJv-5OSl7DpMTosZcPxKyklndke0bX7kTgu-Aqe5ubh7a5Us7DP3da3n8GLEnHZzt6X-SYoXr-Mmi8WBNL3vP4ZilnehQM-IDHEwnqm5nCO0Glz0WxXz7b_nZhLUaztDxfH_VQdiFvY0RVtZkkV-XEYPsl3oMgOKQdhxM6vthS81CG4CEVV0yJhagth2GOpP8-W8ygahSmsE5sTMur5vFy2-dzL8JW4u9LWw0vw8leUV-XmREzgDMqoB128D_7BQv-YTwv5kCxEwfRI9xm9-tqfK05isB3K7RuOY3_H_dQG8EU24exwgl9N2Kb9ZRswBW7mcN5eQn8K8niF3Oai3Yfg2xqoDS01xMeSPEL-v8aAIA0r_XLv3YY8d9sswXSQhRwmCy4mKCsp-wZW3v9oEkahx84KpydJ1vZgnGAJEio86HycjYQE5z3c"
//       );
//     }
//     return headers;
//   },
// });

export const apiSlice = createApi({
  reducerPath: "dogTrainerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  tagtypes: ["AllDogs"],
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
  }),
});

export const {
  useGetDogsQuery,
  useGetDogQuery,
  useGetDogExerciseQuery,
  useGetExercisesQuery,
  useGetExerciseQuery,
  useAddDogExeMutation,
  useAddDogMutation,
  useDeleteDogMutation,
} = apiSlice;
