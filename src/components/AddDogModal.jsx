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

const AddDogModal = () => {
  const [dog, setDog] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const [addDog, { data, isError, error }] = useAddDogMutation();
  const [hidden, setHidden] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHidden(false);
    //still do updates when date and userRelatation is fixed!!
    addDog({
      name: dog.name,
      birthDate: dog.birthDate,
      photo: dog.photo,
      user: "/api/users/1",
    });
  };

  return (
    <>
      <Button onClick={onOpen} h="100%" boxShadow="lg" maxWidth="200px">
        Add a dog
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a dog profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                {/* {JSON.stringify(dog)} */}
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="First name"
                  onChange={(e) => setDog({ ...dog, name: e.target.value })}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>BirthDate</FormLabel>
                <Input
                  placeholder="birthdate"
                  type="date"
                  onChange={(e) =>
                    setDog({ ...dog, birthDate: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Image Url</FormLabel>
                <Input
                  placeholder="add an image url please"
                  onChange={(e) => setDog({ ...dog, photo: e.target.value })}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Boss</FormLabel>
                <Input
                  placeholder="Add a trainer"
                  onChange={(e) => setDog({ ...dog, user: "/api/users/1" })}
                />
              </FormControl>
              <Center mt={5}>
                <Button colorScheme="teal" type="submit">
                  submit
                </Button>

                {!data && <Spinner visibility={hidden ? "hidden" : ""} />}
              </Center>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDogModal;
