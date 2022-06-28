import { useGetExercisesQuery } from "../../store/api/apiSlice";
import {
  Spinner,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ExerciseAccordion from "../ExerciseAccordion";
import { useState } from "react";
import AddExModal from "../crudModals/AddExModal";
const Exercises = () => {
  const [input, setInput] = useState("");
  const { data, isLoading, isSuccess, isError, error } = useGetExercisesQuery();

  const filterEx = (ex) => {
    return ex.filter(
      (ex) => ex.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
  };

  return (
    <>
      <InputGroup
        m="20px"
        w="82vw"
        display="flex"
        justifyContent="space-between"
        gap="50px"
        alignItems="center"
        borderColor="blue.500"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" onChange={(e) => setInput(e.target.value)} />
        <AddExModal />
      </InputGroup>

      {isLoading && (
        <Flex justify="center" align="center" mt="200px" w="75vw">
          <Spinner />
        </Flex>
      )}
      {isSuccess && <ExerciseAccordion data={filterEx(data)} />}
    </>
  );
};

export default Exercises;
