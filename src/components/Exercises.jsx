import React from "react";
import { useGetExercisesQuery } from "../store/api/apiSlice";

import {
  Spinner,
  Center,
  VStack,
  StackDivider,
  Box,
  Accordion,
} from "@chakra-ui/react";
import ExerciseAccordionItem from "./ExerciseAccordionItem";

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
      {isSuccess && (
        <Accordion allowMultiple p={50}>
          {exes["hydra:member"].map((ex) => (
            <ExerciseAccordionItem ex={ex} key={ex.id} />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Exercises;
