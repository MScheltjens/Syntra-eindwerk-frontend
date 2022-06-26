import { useRef } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { useUploadImageMutation } from "../../store/api/cloudinaryApiSlice";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useEditDogMutation } from "../../store/api/apiSlice";

const EditDogModal = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const { dogId } = useParams();
  const [uploadImage] = useUploadImageMutation();
  const [editDog] = useEditDogMutation();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.photo[0]);
    formData.append("upload_preset", "a8nsnfhz");
    const response = await uploadImage(formData);
    const publicId = await response.data.public_id;
    console.log(dogId, publicId);

    editDog({
      dogId,
      body: JSON.stringify({ name: data.name, photo: publicId }),
    });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="orange">
        Edit Dog
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change the details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="name"
                {...register("name", {
                  minLength: {
                    value: 4,
                  },
                })}
              />

              <FormLabel htmlFor="photo">Photo</FormLabel>
              <Input id="photo" type="file" {...register("photo")} />
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditDogModal;

// //submit
// const onSubmit = async (data) => {
//   const userId = store.getState().user.id;
//   setHidden(false);

//   // send the photos to cloudinary
//   const formData = new FormData();
//   formData.append("file", data.photo[0]);
//   formData.append("upload_preset", "a8nsnfhz");
//   const response = await uploadImage(formData);
//   const publicId = response.data.public_id;
