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
  Flex,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { store } from "../../store";
import { useForm } from "react-hook-form";
import { useUploadVideoMutation } from "../../store/api/cloudinaryApiSlice";
import { useAddExerciseMutation } from "../../store/api/apiSlice";

const AddExModal = ({ dogs }) => {
  const [selection, setSelection] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  // requests

  const [uploadVideo] = useUploadVideoMutation();
  const [addExercise] = useAddExerciseMutation();
  const initialRef = useRef(null);

  //submit
  const onSubmit = async (data) => {
    console.log(data);
    const userId = store.getState().user.id;

    // send the photos to cloudinary
    const formData = new FormData();
    formData.append("file", data.video[0]);
    formData.append("upload_preset", "a8nsnfhz");
    const response = await uploadVideo(formData);
    const publicId = response.data.public_id;
    console.log(publicId);
    console.log("name: " + data.name);
    console.log("video:" + publicId);
    console.log("trainer:" + userId);
    console.log("description:" + data.description);
    //collect formdata and post to api
    addExercise({
      name: data.name,
      videoUrl: publicId,
      trainer: `api/users/${userId}`,
      description: data.description,
    });
  };
  return (
    <>
      <Button
        onClick={onOpen}
        h="50px"
        boxShadow="lg"
        w="200px"
        border="2px solid  'orange.400'"
        _hover={{ bg: "blue.500", color: " white" }}
        color="blue.500"
        bg="orange.300"
      >
        Add an exercise
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        h="5OOpx"
      >
        <ModalOverlay />
        <ModalContent color="blue.500">
          <ModalHeader>Create an exercise</ModalHeader>
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
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea {...register("description")}></Textarea>
                <FormLabel htmlFor="photo">Upload a video</FormLabel>

                <Input id="video" type="file" {...register("video")} />

                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <Flex justify="center" gap="20px">
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                  bg="blue.500"
                >
                  Submit
                </Button>
                <Button mt={4} onClick={onClose}>
                  Cancel
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddExModal;
