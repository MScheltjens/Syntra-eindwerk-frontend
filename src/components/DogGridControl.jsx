import { Flex, Box, AspectRatio, VStack, Image } from "@chakra-ui/react";
import Alert from "./Alert";
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
        <Alert handleClick={handleDelete} btnTitle="Delete" />
      </VStack>
    </Flex>
  );
};

export default DogGridControl;
