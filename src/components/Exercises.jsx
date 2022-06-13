import React from "react";
import { useGetExercisesQuery } from "../store/api/apiSlice";

const Exercises = () => {
  const {
    data: exes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExercisesQuery();
  return <div>{JSON.stringify(exes)}</div>;
};

export default Exercises;
