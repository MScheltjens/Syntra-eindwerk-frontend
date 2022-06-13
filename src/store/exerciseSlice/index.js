import { createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercises",
  initialState: [],
  reducers: {
    addExercises: (state, { payload }) => {
      console.log(payload);
      return [...state, ...payload];
    },
  },
});

export default exerciseSlice;
export const { addExercises } = exerciseSlice.actions;
