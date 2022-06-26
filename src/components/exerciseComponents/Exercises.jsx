import React from "react";
import { useGetExercisesQuery } from "../../store/api/apiSlice";

import {
  Spinner,
  Center,
  VStack,
  StackDivider,
  Box,
  Accordion,
} from "@chakra-ui/react";
import ExerciseAccordionItem from "../Accordion/ExerciseAccordionItem";

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
      {/* {JSON.stringify(exes)} */}
      {isLoading && (
        <Center mt="200px">
          <Spinner />
        </Center>
      )}
      {isSuccess && (
        <Accordion allowMultiple p={50}>
          {exes.map((ex) => (
            <ExerciseAccordionItem ex={ex} key={ex.id} modalVersion={false} />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Exercises;
