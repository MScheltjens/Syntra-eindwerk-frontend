import { createSlice } from "@reduxjs/toolkit";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: [],
  reducers: {
    addDogs: (state, { payload }) => {
      console.log(payload);
      return [...state, ...payload];
    },
  },
});

export default dogsSlice;
export const { addDogs } = dogsSlice.actions;
