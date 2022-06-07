import React from "react";
import { store } from "../store";
import userSlice from "../store/userSlice/userSlice";

const Home = () => {
  console.log(store.getState());
  return <div>Home</div>;
};

export default Home;
