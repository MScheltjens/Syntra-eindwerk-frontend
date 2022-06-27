import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Center,
  Spinner,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useRef, useState } from "react";
import DogBarChart from "./DogBarChart";
import DogRadialBar from "./DogRadialBar";
import DogRadialModal from "./DogRadialChart";
import DogRadialChart from "./DogRadialChart";

const DogChartModal = ({ dogExe }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        h="50px"
        boxShadow="lg"
        maxWidth="200px"
        alignSelf="center"
      >
        Details
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent color="blue.500">
          <ModalHeader>Status report</ModalHeader>
          <ModalCloseButton />
          {/* {JSON.stringify(dogExe.exerciseRegistrations)} */}
          <ModalBody pb={6}>
            <Flex justify="space-around" align="center" mb="50px">
              <Box width="500px">
                <Heading mb={5}>Daily progress</Heading>
                <DogBarChart dogExe={dogExe} />
              </Box>
              <Box>
                <Heading mb={5}>Weekly progress</Heading>
                <DogRadialChart dogExe={dogExe} />
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DogChartModal;
