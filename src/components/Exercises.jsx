import React from "react";
import { useGetExercisesQuery } from "../store/api/apiSlice";

import { Spinner, Center } from "@chakra-ui/react";

const Exercises = () => {
  const {
    data: exes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExercisesQuery();
  return (
    <div>
      {isLoading && (
        <Center mt="200px">
          <Spinner />
        </Center>
      )}
      {isSuccess && <p>{JSON.stringify(exes)}</p>}
    </div>
  );
};

export default Exercises;
