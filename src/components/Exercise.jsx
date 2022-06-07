import React from "react";
import { useGetExerciseQuery } from "../store/api/apiSlice";
import { useParams } from "react-router";
const Exercise = () => {
  const { exId } = useParams();
  const {
    data: exe,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExerciseQuery(exId);
  return <div>{JSON.stringify(exe)}</div>;
};

export default Exercise;
