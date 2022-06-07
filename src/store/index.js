import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApiSlice } from "./api/authApiSlice";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: combineReducers({
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});
