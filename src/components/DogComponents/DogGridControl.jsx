import { Flex, Box, VStack } from "@chakra-ui/react";
import Alert from "../Alert";
import EditDogModal from "../crudModals/EditDogModal";
import CreateDogExerciseModal from "../crudModals/CreateDogExerciseModal";
import CloudinarySDK from "../cloudinarySDK/CloudinarySDK";

const DogGridControl = ({ photo }) => {
  return (
    <Flex flexDir="column" gap={50}>
      <Box maxH="100%">
        {photo ? (
          <Box maxWidth={500} maxH={500} overflow="hidden" rounded="md">
            <CloudinarySDK publicId={photo} />
          </Box>
        ) : (
          <p>No Image</p>
        )}
      </Box>
    </Flex>
  );
};

export default DogGridControl;
