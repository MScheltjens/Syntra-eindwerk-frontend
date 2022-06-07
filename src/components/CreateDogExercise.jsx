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
      totalAmount: 10,
      amountDone: 1000,
      dog: "/api/dogs/11",
      exercise: "/api/exercises/2",
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
