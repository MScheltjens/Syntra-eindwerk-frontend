import { Box, Heading, Flex, VStack } from "@chakra-ui/react";
import CreateDogExerciseModal from "../crudModals/CreateDogExerciseModal";
import EditDogModal from "../crudModals/EditDogModal";
import Alert from "../Alert";

const DogGridHeader = ({ name, birthDate, users, handleDelete }) => {
  return (
    <Flex justify="space-between" align="center">
      <Box>
        <Heading size="4xl" p="5px">
          {name}
        </Heading>
        <Heading size="sm" p="5px">
          {birthDate}
        </Heading>
      </Box>
      <Box>
        {users
          .filter((user) => user.isTrainer === false)
          .map((user) => (
            <Heading>
              {user.name}, {user.firstName}
            </Heading>
          ))}
      </Box>
      <VStack align="stretch">
        <CreateDogExerciseModal />
        <EditDogModal name={name} />
        <Alert handleClick={handleDelete} btnTitle="Delete" />
      </VStack>
    </Flex>
  );
};

export default DogGridHeader;
