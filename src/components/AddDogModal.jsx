import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import {
  useAddDogMutation,
  useGetOwnersAlfabeticalQuery,
} from "../store/api/apiSlice";
import { store } from "../store";
import { useUploadImageMutation } from "../store/api/cloudinaryApiSlice";
import { useForm } from "react-hook-form";
import SearchBar from "./SearchBar/SearchBar";

const AddDogModal = ({ dogs }) => {
  const [hidden, setHidden] = useState(true);
  const [imageData, setImageData] = useState("");
  const [selection, setSelection] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uploadImage] = useUploadImageMutation();
  const [addDog, { data, error, isError }] = useAddDogMutation();
  const { data: owners } = useGetOwnersAlfabeticalQuery();
  const initialRef = useRef(null);

  const onSubmit = async (data) => {
    const userId = store.getState().user.id;
    setHidden(false);

    // send the photos to cloudinary
    const formData = new FormData();
    formData.append("file", data.photo[0]);
    formData.append("upload_preset", "a8nsnfhz");
    const response = await uploadImage(formData);
    const publicId = response.data.public_id;

    //collect formdata and post to api
    addDog({
      name: data.name,
      birthDate: data.birthDate,
      photo: publicId,
      users: [`/api/users/${userId}`, `/api/users/${selection}`],
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  placeholder="name"
                  {...register("name", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                    },
                  })}
                />
                <FormLabel htmlFor="birthDay">BirthDay</FormLabel>
                <Input
                  id="birthDay"
                  placeholder="name"
                  type="date"
                  {...register("birthDate")}
                />
                <FormLabel htmlFor="photo">Photo</FormLabel>
                <Input id="photo" type="file" {...register("photo")} />

                <Heading size="md" mt={5} mb={2}>
                  Owner
                </Heading>
                <Text mb={5}>
                  Make sure the owner is registered on the app!
                </Text>

                <SearchBar
                  data={owners}
                  placeholder={"find an already registered owner"}
                  setSelection={setSelection}
                />

                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <Box display="flex">
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
                <Button mt={4} onClick={onClose}>
                  Cancel
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDogModal;
