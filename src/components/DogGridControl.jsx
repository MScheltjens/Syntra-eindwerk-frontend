import { Flex, Box, AspectRatio, VStack, Image } from "@chakra-ui/react";
import AlertDelete from "./AlertDelete";
import EditDogModal from "./EditDogModal";
import CreateDogExerciseModal from "./CreateDogExerciseModal";

const DogGridControl = ({ photo, handleDelete }) => {
  return (
    <Flex flexDir="column" gap={50} maxH="100%">
      <Box>
        <AspectRatio ratio={4 / 3} maxH="250px">
          {photo ? (
            <Image src={photo} objectFit="cover" rounded="md" />
          ) : (
            <p>No Image</p>
          )}
        </AspectRatio>
      </Box>
      <VStack align="stretch">
        <CreateDogExerciseModal />
        <EditDogModal />
        <AlertDelete handleDelete={handleDelete} />
      </VStack>
    </Flex>
  );
};

export default DogGridControl;
