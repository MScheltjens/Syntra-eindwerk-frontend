import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    firstName: "",
    registerDate: "",
    isTrainer: "",
  },
  reducers: {
    login: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        firstName: payload.firstName,
        registerDate: payload.registerDate,
        isTrainer: payload.isTrainer,
      };
    },
    logout: () => initialState,
  },
});

export default userSlice;
export const { login, logout } = userSlice.actions;
