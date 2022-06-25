import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  useDisclosure,
  FormLabel,
  Flex,
  Box,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  Accordion,
  InputLeftElement,
} from "@chakra-ui/react";
import ExerciseAccordionItem from "./accordion/ExerciseAccordionItem";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAddDogExeMutation } from "../store/api/apiSlice";
import { useGetExercisesQuery } from "../store/api/apiSlice";
import SearchBar from "./SearchBar/SearchBar";
import { SearchIcon } from "@chakra-ui/icons";

const CreateDogExerciseModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const inputRef = useRef("");

  const {
    data: exercises,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExercisesQuery();
  const [addDogExe] = useAddDogExeMutation();
  const [exercise, setExercise] = useState("");
  const [dailyAmount, setDailyAmount] = useState(10);
  const [totalAmount, setTotalAmount] = useState("");
  const { dogId } = useParams();

  const getSearchTerm = () => {
    console.log(inputRef);
  };

  const handleChange = (e) => {
    setDailyAmount(e);
    setTotalAmount(e * 7);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDogExe({
      Amount: dailyAmount * 1,
      dog: `/api/dogs/${dogId}`,
      exercise: `api/exercises/${exercise}`,
    });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="green">
        Add an exercise
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an Exercise</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* {JSON.stringify(exercises)} */}
            <form onSubmit={handleSubmit}>
              <Flex justify="space-around">
                <Box maxH="600px" overflow="hidden" overflowY="auto">
                  {exercises && (
                    <Accordion allowToggle p={50} maxWidth="400px">
                      {exercises.map((ex) => (
                        <ExerciseAccordionItem
                          ex={ex}
                          key={ex.id}
                          modalVersion={true}
                        />
                      ))}
                    </Accordion>
                  )}
                </Box>

                <Flex flexDir="column" justify="space-around" align="center">
                  <InputGroup>
                    <InputLeftElement
                      ref={inputRef}
                      pointerEvents="none"
                      children={<SearchIcon color="gray.300" />}
                      onChange={getSearchTerm}
                    />
                    <Input type="text" placeholder="search exercise" />
                  </InputGroup>
                  <FormControl display="flex" flexDir="column" align="center">
                    <Heading size="md" mb="20px">
                      Enter a daily count!
                    </Heading>
                    <FormLabel htmlFor="amount"></FormLabel>
                    <NumberInput
                      max={50}
                      min={1}
                      mb="30px"
                      onChange={handleChange}
                      size="lg"
                    >
                      <NumberInputField id="amount" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                  <Box>
                    <Heading size="md" mb="30px">
                      Total weekly amount
                    </Heading>
                    <Heading size="3xl" textAlign="center">
                      {totalAmount}
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateDogExerciseModal;
