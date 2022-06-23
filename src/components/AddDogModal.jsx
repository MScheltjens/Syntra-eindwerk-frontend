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
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useAddDogMutation } from "../store/api/apiSlice";
import { store } from "../store";
import { useUploadImageMutation } from "../store/api/cloudinaryApiSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const AddDogModal = () => {
  const [hidden, setHidden] = useState(true);
  const [imageData, setImageData] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [addDog, { data, isError, error }] = useAddDogMutation();
  const [uploadImage, { data, isError, error }] = useUploadImageMutation();
  const initialRef = useRef(null);

  const onSubmit = (data, e) => {
    console.log(data.ownerPhoto[0]);
    const userId = store.getState().user.id;
    setHidden(false);
    const formData = new FormData();
    formData.append("file", data.ownerPhoto[0]);
    formData.append("upload_preset", "a8nsnfhz");
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
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
                <Heading size="m">Owner</Heading>
                <FormLabel htmlFor="ownerFirstName">First Name</FormLabel>
                <Input id="ownerFirstName" {...register("ownerFirstName")} />
                <FormLabel htmlFor="ownerName">Name</FormLabel>
                <Input id="ownerName" {...register("ownerName")} />
                <FormLabel htmlFor="ownerName">First Name</FormLabel>
                <FormLabel htmlFor="ownerPhoto">Photo</FormLabel>
                <Input
                  id="ownerPhoto"
                  type="file"
                  {...register("ownerPhoto")}
                />

                <FormLabel htmlFor="ownerEmail">Email</FormLabel>
                <Input
                  id="ownerEmail"
                  {...register("ownerEmail")}
                  onChange={() => setOwnerPhoto(e.target.files[0])}
                />

                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </form>
            {data && <div>{JSON.sgringify(data)}</div>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDogModal;
