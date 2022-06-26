import { Flex, Box, VStack } from "@chakra-ui/react";
import Alert from "../Alert";
import EditDogModal from "../crudModals/EditDogModal";
import CreateDogExerciseModal from "../crudModals/CreateDogExerciseModal";
import CloudinarySDK from "../cloudinarySDK/CloudinarySDK";

const DogGridControl = ({ photo, handleDelete }) => {
  return (
    <Flex flexDir="column" gap={50}>
      <Box maxH="100%">
        {photo ? (
          <Box maxWidth={500} maxH={300} overflow="hidden">
            <CloudinarySDK publicId={photo} />
          </Box>
        ) : (
          <p>No Image</p>
        )}
      </Box>
      <VStack align="stretch">
        <CreateDogExerciseModal />
        <EditDogModal />
        <Alert handleClick={handleDelete} btnTitle="Delete" />
      </VStack>
    </Flex>
  );
};

export default DogGridControl;
