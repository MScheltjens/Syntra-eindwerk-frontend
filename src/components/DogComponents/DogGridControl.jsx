import { Flex, Box, VStack } from "@chakra-ui/react";
import Alert from "../Alert";
import EditDogModal from "../crudModals/EditDogModal";
import CreateDogExerciseModal from "../crudModals/CreateDogExerciseModal";
import CloudinaryImg from "../cloudinarySDK/CloudinarySDK";

const DogGridControl = ({ photo }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      {photo ? (
        <Box overflow="hidden" rounded="md">
          <CloudinaryImg publicId={photo} width="350" height="350" />
        </Box>
      ) : (
        <Box overflow="hidden" rounded="md" objectFit="cover">
          <CloudinaryImg
            publicId="j1j6sv9uzibklz5cpukt"
            width="350"
            height="350"
          />
        </Box>
      )}
    </Flex>
  );
};

export default DogGridControl;
