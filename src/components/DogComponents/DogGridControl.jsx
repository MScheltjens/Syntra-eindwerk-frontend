import { Flex, Box, VStack } from "@chakra-ui/react";
import Alert from "../Alert";
import EditDogModal from "../crudModals/EditDogModal";
import CreateDogExerciseModal from "../crudModals/CreateDogExerciseModal";
import CloudinaryImg from "../cloudinarySDK/CloudinarySDK";

const DogGridControl = ({ photo }) => {
  return (
    <Flex flexDir="column" gap={50}>
      <Box maxH="100%">
        {photo ? (
          <Box maxWidth={500} maxH={500} overflow="hidden" rounded="md">
            <CloudinaryImg publicId={photo} />
          </Box>
        ) : (
          <p>No Image</p>
        )}
      </Box>
    </Flex>
  );
};

export default DogGridControl;
