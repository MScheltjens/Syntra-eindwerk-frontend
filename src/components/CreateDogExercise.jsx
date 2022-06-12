import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAddDogExeMutation,
  useGetExercisesQuery,
} from "../store/api/apiSlice";

const CreateDogExercise = ({ dogName, dogId }) => {
  const {
    data: exercises,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExercisesQuery();
  const [addDogExe] = useAddDogExeMutation();

  const handleClick = () => {
    addDogExe({
      Amount: 654,
      dog: "/api/dogs/1",
      exercise: "/api/exercises/1",
    });
  };

  return (
    <>
      {exercises && (
        <div>
          {/* <div>{JSON.stringify(exercises)}</div> */}
          <button onClick={handleClick}>Add exercise</button>
        </div>
      )}
    </>
  );
};

export default CreateDogExercise;
