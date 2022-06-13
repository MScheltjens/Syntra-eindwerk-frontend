import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApiSlice } from "./api/authApiSlice";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./userSlice";
import dogsSlice from "./dogsSlice";
import exerciseSlice from "./exerciseSlice";

export const store = configureStore({
  reducer: combineReducers({
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [dogsSlice.name]: dogsSlice.reducer,
    [exerciseSlice.name]: exerciseSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(apiSlice.middleware),
});
