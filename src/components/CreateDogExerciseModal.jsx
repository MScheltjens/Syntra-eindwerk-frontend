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
  Radio,
  VStack,
  Flex,
  Box,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  RadioGroup,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAddDogExeMutation } from "../store/api/apiSlice";
import { useGetExercisesQuery } from "../store/api/apiSlice";

const CreateDogExerciseModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
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

  const handleChange = (e) => {
    setDailyAmount(e);
    setTotalAmount(e * 7);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDogExe({
      Amount: totalAmount,
      dog: `/api/dogs/${dogId}`,
      exercise: `api/exercises/${exercise}`,
    });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="green">
        Add an exercise
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an Exercise</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {JSON.stringify(exercises)}
            <form onSubmit={handleSubmit}>
              <Flex justify="space-around">
                <Box>
                  {exercises && (
                    <RadioGroup onChange={setExercise} value={exercise}>
                      <VStack direction="row">
                        {exercises.map((ex) => (
                          <Radio value={ex.id}>{ex.name}</Radio>
                        ))}
                      </VStack>
                      {exercise}
                    </RadioGroup>
                  )}
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel htmlFor="amount">Amount</FormLabel>
                    <NumberInput max={50} min={1} onChange={handleChange}>
                      <NumberInputField id="amount" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>

                  <Heading size="m">Total weekly amount</Heading>
                  <p>{totalAmount}</p>
                </Box>
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
