import React from "react";
import { useGetExercisesQuery } from "../store/api/apiSlice";
import { store } from "../store";

const Exercises = () => {
  const dogs = store.getState();
  console.log(dogs);
  const {
    data: exes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExercisesQuery();
  return <div>exercises</div>;
};

export default Exercises;
