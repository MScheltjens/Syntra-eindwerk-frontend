import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    firstName: "",
    registerDate: "",
  },
  reducers: {
    login: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        id: payload.data.id,
        name: payload.data.name,
        firstName: payload.data.firstName,
        registerDatet: payload.data.registerDate,
      };
    },
  },
});

export default userSlice;
export const { login, logout } = userSlice.actions;
