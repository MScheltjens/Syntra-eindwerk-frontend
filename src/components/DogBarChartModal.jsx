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
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useAddDogMutation } from "../store/api/apiSlice";
import { store } from "../store";
import DogBarChart from "./DogBarChart";

const AddDogModal = () => {
  const [dog, setDog] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const [addDog, { data, isError, error }] = useAddDogMutation();
  const [hidden, setHidden] = useState(true);

  const handleSubmit = (e) => {
    const userId = store.getState().user.id;
    e.preventDefault();
    setHidden(false);
    //still do updates when date and userRelatation is fixed!!
    addDog({
      name: dog.name,
      birthDate: dog.birthDate,
      photo: dog.photo,
      users: [`/api/users/${userId}`, `/api/users/3`],
    });
  };

  return (
    <>
      <Button onClick={onOpen} h="100%" boxShadow="lg" maxWidth="200px">
        Details
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Status report</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <DogBarChart />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDogModal;
