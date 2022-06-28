import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
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
  Select,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAddDogExeMutation } from "../../store/api/apiSlice";
import { useGetExercisesQuery } from "../../store/api/apiSlice";

const CreateDogExerciseModal = () => {
  const [selected, setSelected] = useState();
  const [dailyAmount, setDailyAmount] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const accRef = useRef();

  const {
    data: exercises,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExercisesQuery();
  const [addDogExe] = useAddDogExeMutation();
  const [totalAmount, setTotalAmount] = useState();
  const { dogId } = useParams();

  const handleChange = (e) => {
    setTotalAmount(e * 7);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDogExe({
      Amount: totalAmount,
      dog: `/api/dogs/${dogId}`,
      exercise: `/api/exercises/${selected}`,
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
          <ModalBody pb={6} color="blue.500">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Flex flexDir="column" justify="space-around" minHeight="400px">
                  <Box>
                    <Heading size="lg" mb="20px">
                      Maak keuze uit een oefening
                    </Heading>
                    <FormLabel htmlFor="name"></FormLabel>
                    <Select
                      placeholder="Choose an exercise"
                      name="select"
                      onChange={(e) => setSelected(e.target.value)}
                    >
                      {isSuccess &&
                        exercises.map((ex) => {
                          return (
                            <option key={ex.id} value={ex.id}>
                              {ex.name} ---- {ex.AddedAt} ----{ex.id}
                            </option>
                          );
                        })}
                    </Select>
                  </Box>

                  <Box>
                    <Heading size="lg" mb="20px">
                      Dagelijks aantal
                    </Heading>
                    <FormLabel htmlFor="dailyAmount"></FormLabel>
                    <NumberInput
                      min={1}
                      max={100}
                      id="dailyAmount"
                      onChange={handleChange}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <p>{dailyAmount}</p>
                  </Box>

                  <Flex gap="20px">
                    <Heading>Total this week:</Heading>
                    <Heading>{totalAmount}</Heading>
                  </Flex>
                </Flex>
              </FormControl>
              <Flex justify="center" gap="20px">
                <Button
                  mt={4}
                  colorScheme="teal"
                  type="submit"
                  bgColor="blue.500"
                >
                  Submit
                </Button>

                <Button onClick={onClose} mt={4}>
                  Cancel
                </Button>
              </Flex>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateDogExerciseModal;
