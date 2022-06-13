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
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useAddDogMutation } from "../store/api/apiSlice";

const AddDogModal = () => {
  const [dog, setDog] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const [addDog] = useAddDogMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    //still do updates when date and userRelatation is fixed!!
    addDog({
      name: dog.name,
      birthDate: "2021-06-12T13:20:01.024Z",
      photo: dog.photo,
      user: "/api/users/1",
    });
  };
  return (
    <>
      <Button onClick={onOpen}>Add a dog</Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a dog profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                {JSON.stringify(dog)}
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
                  type="datetime"
                  onChange={(e) =>
                    setDog({ ...dog, birthDate: "2021-06-12T13:20:01.024Z" })
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
                  placeholder="add an image url please"
                  onChange={(e) => setDog({ ...dog, user: "/api/users/1" })}
                />
              </FormControl>
              <button type="submit">submit</button>
            </form>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDogModal;
