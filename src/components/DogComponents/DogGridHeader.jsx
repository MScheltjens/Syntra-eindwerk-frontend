import { Box, Heading, Flex, VStack } from "@chakra-ui/react";
import CreateDogExerciseModal from "../crudModals/CreateDogExerciseModal";
import EditDogModal from "../crudModals/EditDogModal";
import Alert from "../Alert";

const DogGridHeader = ({ name, birthDate, users, handleDelete }) => {
  return (
    <Box bg="#108dc7" color="orange.200">
      <Flex justify="space-between" align="center">
        <Box pl="50px" pt="10px">
          <Heading size="4xl" p="5px">
            {name}
          </Heading>
          <Heading size="sm" p="5px">
            {birthDate}
          </Heading>
          <Box>
            {users
              .filter((user) => user.isTrainer === false)
              .map((user) => (
                <Heading>
                  {user.name}, {user.firstName}
                </Heading>
              ))}
          </Box>
        </Box>

        <VStack align="stretch">
          <CreateDogExerciseModal />
          <EditDogModal name={name} />
          <Alert handleClick={handleDelete} btnTitle="Delete" />
        </VStack>
      </Flex>
    </Box>
  );
};

export default DogGridHeader;
