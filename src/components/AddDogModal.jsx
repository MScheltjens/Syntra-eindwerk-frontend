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
import axios from "axios";
import { useUploadImageMutation } from "../store/api/cloudinaryApiSlice";

const AddDogModal = () => {
  const [dog, setDog] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const [addDog, { data, isError, error }] = useAddDogMutation();
  const [hidden, setHidden] = useState(true);
  const [image, setImage] = useState("");
  const [uploadImage] = useUploadImageMutation();

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

  const handleImage = (files) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "a8nsnfhz");
    // axios
    //   .post("https://api.cloudinary.com/v1_1/ddl69s3ju/image/upload", formData)
    //   .then((response) => console.log(response));
    uploadImage(formData);
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
                <FormLabel>Image</FormLabel>
                <Input
                  type="file"
                  placeholder="add an image url please"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </FormControl>
              <Button onClick={handleImage}>upload</Button>

              <FormControl mt={4}>
                <FormLabel>Boss</FormLabel>
                <Input
                  placeholder="Add a trainer"
                  // onChange={(e) => setDog({ ...dog, user: "/api/users/3" })}
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
