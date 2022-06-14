import { VStack, Flex, Heading, Box, StackDivider } from "@chakra-ui/react";
import DogRadialBar from "./DogRadialBar";
import RadialBar from "./DogRadialBar";

const DogGridExerciseList = ({ dogExercises }) => {
  return (
    <VStack
      p="20px"
      divider={<StackDivider borderColor="#fda94a" />}
      spacing={2}
      align="stretch"
    >
      {dogExercises.map((dogExe) => (
        <Flex key={dogExe.id} justify="space-around" rounded="md">
          <Flex flexDir="column" justify="space-around">
            <Heading size="sm">{dogExe.startDate}</Heading>
            <Heading size="sm">{dogExe.endDate}</Heading>
          </Flex>
          <Box w="100px" h="100px" bg="blue">
            <DogRadialBar />
          </Box>
        </Flex>
      ))}
    </VStack>
  );
};

export default DogGridExerciseList;
